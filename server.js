import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_SMTP,
  port: parseInt(process.env.EMAIL_PORT || '465'),
  secure: true, // Use SSL/TLS
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

app.post('/api/send-email', async (req, res) => {
  const { name, email, phone, company, service, message } = req.body;

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_TO,
    subject: `Nueva solicitud de servicio: ${service || 'Consulta General'}`,
    text: `
      Has recibido un nuevo mensaje desde tu landing page:

      Nombre: ${name}
      Email: ${email}
      Teléfono: ${phone || 'No proporcionado'}
      Empresa: ${company || 'No proporcionada'}
      Servicio: ${service || 'No especificado'}

      Mensaje:
      ${message}
    `,
    html: `
      <!DOCTYPE html>
      <html lang="es">
      <head>
        <meta charset="UTF-8">
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');
          
          body {
            font-family: 'Inter', -apple-system, sans-serif;
            background-color: #f8f8f8;
            margin: 0;
            padding: 40px 0;
            color: #1a1a1a;
          }
          .email-wrapper {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            border: 1px solid #eeeeee;
            border-radius: 16px;
            overflow: hidden;
            box-shadow: 0 10px 25px rgba(0,0,0,0.05);
          }
          .header {
            background-color: #000000;
            padding: 40px;
            text-align: center;
          }
          .header h1 {
            color: #ffffff;
            font-size: 22px;
            margin: 0;
            letter-spacing: -0.02em;
            font-weight: 700;
            text-transform: uppercase;
          }
          .content {
            padding: 40px;
          }
          .section-title {
            font-size: 12px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.1em;
            color: #888888;
            margin-bottom: 12px;
            border-bottom: 1px solid #f0f0f0;
            padding-bottom: 8px;
          }
          .client-info {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 24px;
            margin-bottom: 32px;
          }
          .field {
            margin-bottom: 20px;
          }
          .field-label {
            font-size: 11px;
            font-weight: 600;
            color: #aaaaaa;
            margin-bottom: 4px;
          }
          .field-value {
            font-size: 15px;
            font-weight: 500;
            color: #1a1a1a;
          }
          .tag-container {
            margin-top: 8px;
            margin-bottom: 32px;
          }
          .tag {
            display: inline-block;
            background-color: #000000;
            color: #ffffff;
            padding: 6px 14px;
            border-radius: 99px;
            font-size: 12px;
            font-weight: 600;
            margin-right: 8px;
            margin-bottom: 8px;
          }
          .message-container {
            background-color: #fbfbfb;
            border: 1px solid #f0f0f0;
            border-radius: 12px;
            padding: 24px;
            margin-top: 10px;
            font-size: 14px;
            line-height: 1.6;
            color: #333333;
          }
          .footer {
            background-color: #fafafa;
            padding: 24px;
            text-align: center;
            border-top: 1px solid #f0f0f0;
          }
          .footer p {
            font-size: 11px;
            color: #bbbbbb;
            margin: 0;
          }
        </style>
      </head>
      <body>
        <div class="email-wrapper">
          <div class="header">
            <h1>Nueva Solicitud de Proyecto</h1>
          </div>
          <div class="content">
            <div class="section-title">Información del Cliente</div>
            <div style="margin-bottom: 30px;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td width="50%" style="vertical-align: top; padding-bottom: 20px;">
                    <div class="field-label">NOMBRE</div>
                    <div class="field-value">${name}</div>
                  </td>
                  <td width="50%" style="vertical-align: top; padding-bottom: 20px;">
                    <div class="field-label">EMAIL</div>
                    <div class="field-value">${email}</div>
                  </td>
                </tr>
                <tr>
                  <td width="50%" style="vertical-align: top;">
                    <div class="field-label">TELÉFONO</div>
                    <div class="field-value">${phone || '—'}</div>
                  </td>
                  <td width="50%" style="vertical-align: top;">
                    <div class="field-label">EMPRESA</div>
                    <div class="field-value">${company || '—'}</div>
                  </td>
                </tr>
              </table>
            </div>

            <div class="section-title">Servicios Interesados</div>
            <div class="tag-container">
              ${(Array.isArray(service) ? service : [service]).map(s => `
                <span class="tag">${s || 'Consulta General'}</span>
              `).join('')}
            </div>

            <div class="section-title">Propuesta de Proyecto</div>
            <div class="message-container">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>
          <div class="footer">
            <p>© ${new Date().getFullYear()} Luis Carlos Ballen • Software Developer</p>
            <p style="margin-top: 5px;">Enviado automáticamente desde el sistema de portafolio</p>
          </div>
        </div>
      </body>
      </html>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email enviado correctamente' });
  } catch (error) {
    console.error('Error enviando email:', error);
    res.status(500).json({ message: 'Error al enviar el email' });
  }
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Servidor de correo corriendo en http://localhost:${PORT}`);
});
