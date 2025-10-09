const CertificadoService = require('../services/certificadoService');
const path = require('path');
const fs = require('fs');
let PDFDocument = null;
try { PDFDocument = require('pdfkit'); } catch {}
const { cursomatriculado, persona, ofertacurso, curso } = require('../models');

class CertificadoController {
    static async GetAll(req, res) {
        try {
            const data = await CertificadoService.GetAll();
            res.json(data);
        } catch (error) {
            res.status(500).json({ message: "Error al listar certificados", error: error.message });
        }
    }

    static async Create(req, res) {
        const { idCursoMatriculado, fechaEmision, urlCertificado } = req.body;
        try {
            const data = await CertificadoService.Create(idCursoMatriculado, fechaEmision, urlCertificado);
            res.json(data);
        } catch (error) {
            res.status(500).json({ message: "Error al crear certificado", error: error.message });
        }
    }

    static async Update(req, res) {
        const { id } = req.params;
        const { id_curso_matriculado, fecha_emision, url_certificado } = req.body;
        try {
            const data = await CertificadoService.Update(id, id_curso_matriculado, fecha_emision, url_certificado);
            res.json(data);
        } catch (error) {
            res.status(500).json({ message: "Error al actualizar certificado", error: error.message });
        }
    }

    static async Delete(req, res) {
        const { id } = req.params;
        try {
            await CertificadoService.Delete(id);
            res.json({ mensaje: "Certificado eliminado exitosamente" });
        } catch (error) {
            res.status(500).json({ message: "Error al eliminar certificado", error: error.message });
        }
    }

    static async GetForId(req, res) {
        const { id } = req.params;
        try {
            const data = await CertificadoService.GetForId(id);
            res.json(data);
        } catch (error) {
            res.status(500).json({ message: "Error al buscar certificado", error: error.message });
        }
    }

    // Genera un PDF on-demand y lo descarga
    static async GenerateAndDownload(req, res) {
        try {
            const raw = req.body || {};
            const id_curso_matriculado = raw.id_curso_matriculado ?? raw.idCursoMatriculado;
            if (!id_curso_matriculado) {
                return res.status(400).json({ message: 'id_curso_matriculado requerido' });
            }

            // Cargar datos necesarios para el certificado
            const matricula = await cursomatriculado.findByPk(id_curso_matriculado, {
                include: [
                    { model: persona, as: 'persona', attributes: ['nombre', 'apellido', 'numero_identificacion'] },
                    { model: ofertacurso, as: 'curso', include: [ { model: curso, as: 'curso', attributes: ['nombre_curso', 'tipo_curso'] } ] }
                ]
            });
            if (!matricula) {
                return res.status(404).json({ message: `Matrícula ${id_curso_matriculado} no encontrada` });
            }
            if (matricula.resultado !== 'Aprobado') {
                return res.status(400).json({ message: 'El certificado solo se genera para matrículas aprobadas' });
            }

            // Intentar cargar logo desde env o assets
            const envLogoPath = process.env.CERT_LOGO_PATH;
            const defaultLogoPath = path.resolve(process.cwd(), 'assets', 'logo.png');
            const logoPath = fs.existsSync(envLogoPath || '') ? envLogoPath : (fs.existsSync(defaultLogoPath) ? defaultLogoPath : null);

            // Generar PDF "bonito" con branding
            if (!PDFDocument) {
                return res.status(500).json({ message: 'Generación de PDF no disponible (pdfkit no instalado)' });
            }
            const doc = new PDFDocument({ size: 'A4', margin: 40 });
            const filename = `certificado-${id_curso_matriculado}.pdf`;
            res.setHeader('Content-Type', 'application/pdf');
            res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
            doc.pipe(res);

            const brand = { primary: '#1E3A8A', light: '#E5E7EB', accent: '#0EA5E9' }; // azul
            const page = { w: doc.page.width, h: doc.page.height };

            // Helper: fecha en palabras (es-CO)
            const formatFechaLarga = (date) => {
                try {
                    return new Intl.DateTimeFormat('es-CO', {
                        day: 'numeric', month: 'long', year: 'numeric'
                    }).format(date);
                } catch {
                    const meses = ['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre'];
                    return `${date.getDate()} de ${meses[date.getMonth()]} de ${date.getFullYear()}`;
                }
            };

            // Marco decorativo
            doc.lineJoin('round')
               .lineWidth(3)
               .strokeColor(brand.primary)
               .rect(30, 30, page.w - 60, page.h - 60)
               .stroke();

            // Encabezado con banda de color y logo
            doc.save();
            doc.fillColor(brand.primary)
               .rect(30, 30, page.w - 60, 90)
               .fill();

            if (logoPath) {
                try {
                    doc.image(logoPath, 40, 40, { width: 70 });
                } catch {}
            }
            // Texto de encabezado centrado en la banda superior
            doc.fillColor('white')
               .font('Helvetica-Bold')
               .fontSize(20)
               .text('Fundación FUNED', 30, 50, { width: page.w - 60, align: 'center' });
            doc.fontSize(12).font('Helvetica')
               .text('Formación en belleza y estética', 30, 76, { width: page.w - 60, align: 'center' });
            doc.restore();

            // Marca de agua opcional
            if (logoPath) {
                try {
                    doc.opacity(0.06)
                       .image(logoPath, page.w / 2 - 150, page.h / 2 - 150, { width: 300 })
                       .opacity(1);
                } catch {}
            }

            // Título central
            doc.moveDown(2.5);
            doc.fillColor(brand.primary).font('Helvetica-Bold').fontSize(28)
               .text('Certificado de Aprobación', { align: 'center' });

            // Datos
            const nombreCompleto = `${matricula?.persona?.nombre || ''} ${matricula?.persona?.apellido || ''}`.trim();
            const docId = matricula?.persona?.numero_identificacion || '';
            const nombreCurso = matricula?.curso?.curso?.nombre_curso || 'Curso';
            const tipoCurso = matricula?.curso?.curso?.tipo_curso || '';
            const fechaInicio = matricula?.curso?.fecha_inicio_curso ? new Date(matricula.curso.fecha_inicio_curso) : null;
            const fechaFin = matricula?.curso?.fecha_fin_curso ? new Date(matricula.curso.fecha_fin_curso) : null;
            const fechaEmision = new Date();

            doc.moveDown(1);
            doc.fillColor('#111827').font('Helvetica').fontSize(14)
               .text('Se certifica que', { align: 'center' });
            doc.moveDown(0.3);
            doc.font('Helvetica-Bold').fontSize(20)
               .text(nombreCompleto || 'Estudiante', { align: 'center' });
            if (docId) {
                doc.moveDown(0.2);
                doc.font('Helvetica').fontSize(12)
                   .fillColor('#6B7280')
                   .text(`Identificación: ${docId}`, { align: 'center' })
                   .fillColor('#111827');
            }
            doc.moveDown(0.8);
            doc.font('Helvetica').fontSize(14)
               .text(`ha aprobado satisfactoriamente el curso "${nombreCurso}"`, { align: 'center' });
            if (tipoCurso) {
                doc.moveDown(0.2);
                doc.fillColor('#6B7280').fontSize(12)
                   .text(`Tipo: ${tipoCurso}`, { align: 'center' })
                   .fillColor('#111827');
            }

            // Rango de fechas
            const rango = fechaInicio && fechaFin
              ? `${formatFechaLarga(fechaInicio)} al ${formatFechaLarga(fechaFin)}`
              : null;
            if (rango) {
                doc.moveDown(0.8);
                doc.fontSize(12).fillColor('#374151')
                   .text(`Periodo cursado: ${rango}`, { align: 'center' })
                   .fillColor('#111827');
            }

            // Fecha de emisión
            doc.moveDown(1.2);
            doc.fontSize(12)
               .text(`Fecha de emisión: ${formatFechaLarga(fechaEmision)}` , { align: 'center' });

            // Firma
            doc.moveDown(2);
            const centerX = page.w / 2;
            doc.strokeColor(brand.primary).lineWidth(1)
               .moveTo(centerX - 140, doc.y)
               .lineTo(centerX + 140, doc.y)
               .stroke();
            doc.moveDown(0.4);
            doc.font('Helvetica-Bold').fillColor('#111827').fontSize(12)
               .text('Dirección Académica', { align: 'center' });
            doc.font('Helvetica').fillColor('#6B7280').fontSize(10)
               .text('FUNED', { align: 'center' });

            // Pie
            doc.fillColor('#6B7280').fontSize(9);
            doc.text('Este certificado es válido para fines académicos y profesionales.', 40, page.h - 60, { width: page.w - 80, align: 'center' });
            doc.text('www.funed.edu.co', 40, page.h - 45, { width: page.w - 80, align: 'center' });

            doc.end();

            // Crear registro en BD (opcional, sin URL de archivo)
            try {
                await CertificadoService.CreateSnake(id_curso_matriculado, fechaEmision, null);
            } catch (e) {
                // No interrumpir la descarga si falla el registro
                console.warn('[Certificado] No se pudo registrar en BD:', e?.message || e);
            }
        } catch (error) {
            console.error('[Certificado] Error al generar PDF:', error);
            res.status(500).json({ message: 'Error al generar certificado', error: error.message });
        }
    }
}

module.exports = CertificadoController;
