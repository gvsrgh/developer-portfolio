# Supabase Setup Guide

## 🚀 Quick Setup

### 1. Create a Supabase Account
1. Go to [https://supabase.com](https://supabase.com)
2. Sign up/login with GitHub (recommended)
3. Create a new project

### 2. Get Your Credentials
1. Go to your project dashboard
2. Click on **Settings** → **API**
3. Copy these values:
   - **Project URL** (anon/public URL)
   - **anon/public key**

### 3. Update Your Environment Variables
Edit the `.env.local` file in your frontend folder:

```env
NEXT_PUBLIC_SUPABASE_URL=your_actual_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_actual_supabase_anon_key
```

### 4. Set Up Database Tables
1. Go to your Supabase dashboard
2. Click on **SQL Editor**
3. Run these commands one by one:

```sql
-- 1. Create profiles table
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

-- 2. Create projects table
CREATE TABLE projects (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  long_description TEXT,
  image_url TEXT,
  demo_url TEXT,
  github_url TEXT,
  technologies TEXT[],
  category TEXT DEFAULT 'web',
  featured BOOLEAN DEFAULT FALSE,
  completed_at DATE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 3. Create skills table
CREATE TABLE skills (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  category TEXT NOT NULL,
  level INTEGER CHECK (level >= 1 AND level <= 5),
  icon TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 4. Enable public read access
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE skills ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read access on profiles" ON profiles FOR SELECT USING (true);
CREATE POLICY "Allow public read access on projects" ON projects FOR SELECT USING (true);
CREATE POLICY "Allow public read access on skills" ON skills FOR SELECT USING (true);
```

### 5. Add Your Data
Insert your personal information:

```sql
-- Add your profile
INSERT INTO profiles (name, email, bio, role, tagline, location, social_links) VALUES (
  'Your Name',
  'your-email@example.com',
  'Your bio here...',
  'Your Role',
  'Your tagline',
  'Your Location',
  '{"github": "your-github-url", "linkedin": "your-linkedin-url"}'
);

-- Add sample projects
INSERT INTO projects (title, description, technologies, featured) VALUES
  ('Project 1', 'Description...', ARRAY['React', 'Node.js'], true),
  ('Project 2', 'Description...', ARRAY['Next.js', 'TypeScript'], true);

-- Add your skills
INSERT INTO skills (name, category, level) VALUES
  ('JavaScript', 'Programming', 4),
  ('React', 'Frontend', 4),
  ('Node.js', 'Backend', 3);
```

## 🎯 Current Status

✅ **Completed:**
- Supabase client installed
- Configuration files created
- Home page data updated with your info
- Database schema prepared

📝 **Your Data Locations:**
- **Home Page Info**: `src/data/site.ts` (✅ Already updated)
- **Database Connection**: `src/lib/supabase.ts` (✅ Ready)
- **Environment Variables**: `.env.local` (⚠️ Need your Supabase credentials)

## 🔄 Next Steps

1. **Set up Supabase** (5 minutes)
2. **Update environment variables** 
3. **Create database tables**
4. **Test the connection**

## 📍 Where to Update Your Info

The home page already shows your basic info! You can update it in:
- **File**: `src/data/site.ts`
- **What to change**: Name, email, bio, social links, etc.

Once Supabase is set up, we can:
- Load dynamic data from the database
- Add a contact form
- Create project showcases
- Build an admin panel for easy updates

Would you like me to walk you through any of these steps?