import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8001;

// Middleware
app.use(cors());
app.use(express.json());

// Email configuration
let transporter: nodemailer.Transporter | null = null;

// Only create transporter if email credentials are provided
if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
  try {
    transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, // Use app password for Gmail
      },
    });
    
    // Verify the connection configuration
    transporter.verify((error, success) => {
      if (error) {
        console.error('❌ Email configuration error:', error.message);
        console.warn('💡 Please check your Gmail app password in the .env file');
        transporter = null; // Disable email if verification fails
      } else {
        console.log('✅ Email server is ready to send messages');
      }
    });
  } catch (error) {
    console.error('❌ Failed to create email transporter:', error);
    transporter = null;
  }
} else {
  console.warn('⚠️  Email credentials not configured. Email functionality will be disabled.');
  console.warn('   Set EMAIL_USER and EMAIL_PASS in your .env file to enable email sending.');
}

// Routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Portfolio API is running' });
});

app.get('/', (req, res) => {
  res.json({ 
    status: 'Backend working!', 
    message: 'Portfolio backend server is running successfully',
    timestamp: new Date().toISOString()
  });
});

app.get('/status', (req, res) => {
  res.send('Backend working! ✅');
});

app.get('/api/projects', (req, res) => {
  // TODO: Implement project data endpoint
  res.json({ projects: [] });
});

app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message, subject } = req.body;
    
    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({ 
        success: false, 
        message: 'Name, email, and message are required' 
      });
    }

    // Check if email is configured
    if (!transporter) {
      console.log('Email not configured, but logging contact form submission:', { name, email, subject });
      return res.status(503).json({ 
        success: false, 
        message: 'Email service is not configured. Please contact directly via email or social media.' 
      });
    }

    // Email to you (the portfolio owner) with enhanced details
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.RECIPIENT_EMAIL || process.env.EMAIL_USER,
      subject: `🚀 Portfolio Contact: ${subject || 'New Message'} - from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #6366f1; padding-bottom: 10px;">📧 New Contact Form Submission</h2>
          
          <div style="background: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>👤 Name:</strong> ${name}</p>
            <p><strong>📧 Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>📋 Subject:</strong> ${subject || 'No subject provided'}</p>
            <p><strong>⏰ Date:</strong> ${new Date().toLocaleString()}</p>
          </div>
          
          <div style="background: white; padding: 20px; border-left: 4px solid #6366f1; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">💬 Message:</h3>
            <p style="line-height: 1.6;">${message.replace(/\n/g, '<br>')}</p>
          </div>
          
          <div style="background: #e5e7eb; padding: 15px; border-radius: 8px; margin-top: 20px;">
            <p style="margin: 0; font-size: 14px; color: #6b7280;">
              <em>🔗 This message was sent from your portfolio contact form at ${new Date().toLocaleString()}</em>
            </p>
          </div>
        </div>
      `,
    };

    // Enhanced auto-reply to the sender
    const autoReplyOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: '✅ Thank you for contacting me - Message received!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #059669; border-bottom: 2px solid #059669; padding-bottom: 10px;">✅ Thank you for reaching out!</h2>
          
          <p>Hi <strong>${name}</strong>,</p>
          
          <p>Thank you for contacting me through my portfolio! I've successfully received your message and will get back to you as soon as possible.</p>
          
          <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; border-left: 4px solid #0ea5e9; margin: 20px 0;">
            <h3 style="color: #0ea5e9; margin-top: 0;">📝 Your Message Summary:</h3>
            <p><strong>Subject:</strong> ${subject || 'No subject'}</p>
            <p><strong>Message:</strong></p>
            <p style="background: white; padding: 15px; border-radius: 4px; line-height: 1.6;">${message.replace(/\n/g, '<br>')}</p>
          </div>
          
          <div style="background: #dcfce7; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #059669; margin-top: 0;">🚀 What's Next?</h3>
            <ul style="color: #065f46;">
              <li>I typically respond within 24-48 hours</li>
              <li>For urgent matters, you can also reach me on LinkedIn</li>
              <li>Feel free to check out my latest projects on GitHub</li>
            </ul>
          </div>
          
          <p style="margin-top: 30px;">Best regards,<br>
          <strong>Govvala Venkata Sai Ram</strong><br>
          <em>Full-Stack Developer & Computer Science Student</em></p>
          
          <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 30px 0;">
          
          <div style="background: #fef3c7; padding: 15px; border-radius: 8px;">
            <p style="margin: 0; font-size: 14px; color: #92400e;">
              <strong>Note:</strong> This is an automated confirmation email. Please do not reply directly to this email.
            </p>
          </div>
        </div>
      `,
    };

    // Send both emails
    await transporter.sendMail(mailOptions);
    await transporter.sendMail(autoReplyOptions);
    
    console.log('✅ Contact form submission processed successfully:', { 
      name, 
      email, 
      subject: subject || 'No subject',
      timestamp: new Date().toISOString()
    });
    
    res.json({ 
      success: true, 
      message: `Thank you ${name}! Your message has been sent successfully. You should receive a confirmation email at ${email} shortly.` 
    });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Failed to send message. Please try again later or contact directly via email.' 
    });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Backend server running on port ${PORT}`);
});