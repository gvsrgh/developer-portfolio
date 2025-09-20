-- Portfolio Database Schema for Supabase
-- Run these SQL commands in your Supabase SQL Editor

-- Enable Row Level Security (RLS) for better security
-- Note: You can disable RLS if you want public read access

-- 1. Profile table (for your personal information)
CREATE TABLE profiles (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  bio TEXT,
  avatar_url TEXT,
  role TEXT,
  tagline TEXT,
  location TEXT,
  social_links JSONB DEFAULT '{}',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 2. Projects table
CREATE TABLE projects (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  long_description TEXT,
  image_url TEXT,
  demo_url TEXT,
  github_url TEXT,
  technologies TEXT[] DEFAULT '{}',
  category TEXT DEFAULT 'web',
  featured BOOLEAN DEFAULT FALSE,
  completed_at DATE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 3. Skills table
CREATE TABLE skills (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  category TEXT NOT NULL,
  level INTEGER CHECK (level >= 1 AND level <= 5),
  icon TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 4. Contact submissions table (for contact form)
CREATE TABLE contact_submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  subject TEXT,
  message TEXT NOT NULL,
  status TEXT DEFAULT 'new',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS (Row Level Security)
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE skills ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access (you can modify these as needed)
-- Allow public read access to profiles, projects, and skills
CREATE POLICY "Allow public read access on profiles" ON profiles FOR SELECT USING (true);
CREATE POLICY "Allow public read access on projects" ON projects FOR SELECT USING (true);
CREATE POLICY "Allow public read access on skills" ON skills FOR SELECT USING (true);

-- Allow anyone to insert contact submissions
CREATE POLICY "Allow public insert on contact_submissions" ON contact_submissions FOR INSERT WITH CHECK (true);

-- If you want to allow yourself to manage data (replace with your email)
-- CREATE POLICY "Allow admin full access on profiles" ON profiles USING (auth.jwt() ->> 'email' = 'your-email@example.com');
-- CREATE POLICY "Allow admin full access on projects" ON projects USING (auth.jwt() ->> 'email' = 'your-email@example.com');
-- CREATE POLICY "Allow admin full access on skills" ON skills USING (auth.jwt() ->> 'email' = 'your-email@example.com');

-- Sample data insertion (replace with your actual data)
INSERT INTO profiles (name, email, bio, role, tagline, location, social_links) VALUES (
  'GVSR GH',
  'contact@gvsrgh.dev',
  'Computer Science student passionate about full-stack development, machine learning, and creating user-friendly applications that solve real-world problems. Currently in my 4th year pursuing B.Tech in Computer Science.',
  'Computer Science Student & Aspiring Developer',
  'Crafting digital experiences through code and creativity',
  'India',
  '{"github": "https://github.com/gvsrgh", "linkedin": "https://linkedin.com/in/gvsrgh", "email": "contact@gvsrgh.dev"}'
);

-- Sample projects (replace with your actual projects)
INSERT INTO projects (title, description, technologies, category, featured, github_url) VALUES
  (
    'Portfolio Website',
    'A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS',
    ARRAY['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    'web',
    true,
    'https://github.com/gvsrgh/developer-portfolio'
  ),
  (
    'E-commerce Platform',
    'Full-stack e-commerce solution with React frontend and Node.js backend',
    ARRAY['React', 'Node.js', 'Express', 'MongoDB'],
    'web',
    true,
    'https://github.com/gvsrgh/ecommerce-platform'
  );

-- Sample skills (replace with your actual skills)
INSERT INTO skills (name, category, level) VALUES
  ('JavaScript', 'Programming Languages', 4),
  ('TypeScript', 'Programming Languages', 4),
  ('Python', 'Programming Languages', 4),
  ('React', 'Frontend', 4),
  ('Next.js', 'Frontend', 4),
  ('Node.js', 'Backend', 3),
  ('Express.js', 'Backend', 3),
  ('MongoDB', 'Database', 3),
  ('PostgreSQL', 'Database', 3),
  ('Git', 'Tools', 4),
  ('Docker', 'Tools', 3),
  ('Tailwind CSS', 'Styling', 4);