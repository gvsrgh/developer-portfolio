import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Portfolio API is running' });
});

app.get('/api/projects', (req, res) => {
  // TODO: Implement project data endpoint
  res.json({ projects: [] });
});

app.post('/api/contact', (req, res) => {
  // TODO: Implement contact form endpoint
  const { name, email, message } = req.body;
  
  // Here you would typically send an email or save to database
  console.log('Contact form submission:', { name, email, message });
  
  res.json({ success: true, message: 'Message received!' });
});

app.listen(PORT, () => {
  console.log(`🚀 Backend server running on port ${PORT}`);
});