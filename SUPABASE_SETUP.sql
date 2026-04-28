-- 1. Create the main Blog Posts table (SLUG REMOVED)
CREATE TABLE posts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMPTZ DEFAULT now(),
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  status TEXT DEFAULT 'draft'
);

-- 2. Create the Carousel Images table
CREATE TABLE post_images (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  post_id UUID REFERENCES posts(id) ON DELETE CASCADE,
  image_url TEXT NOT NULL,
  display_order INT DEFAULT 0
);

-- 3. Create the Form Submissions table
CREATE TABLE contact_submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMPTZ DEFAULT now(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT NOT NULL
);

-- 4. Enable Row Level Security (RLS)
ALTER TABLE posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE post_images ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- 5. Set up Access Policies

-- Posts
CREATE POLICY "Enable read access for all users" ON posts FOR SELECT USING (true);
CREATE POLICY "Enable all access for authenticated admins" ON posts FOR ALL TO authenticated USING (true);

-- Post Images
CREATE POLICY "Enable read access for all users" ON post_images FOR SELECT USING (true);
CREATE POLICY "Enable all access for authenticated admins" ON post_images FOR ALL TO authenticated USING (true);

-- Submissions
CREATE POLICY "Enable insert for all users" ON contact_submissions FOR INSERT WITH CHECK (true);
CREATE POLICY "Enable read access for authenticated admins" ON contact_submissions FOR SELECT TO authenticated USING (true);

-- 6. STORAGE SETUP (IMPORTANT)
-- Go to Supabase Dashboard > Storage
-- 1. Create a NEW BUCKET named "blog-images"
-- 2. Set it to "Public"
-- 3. Add these Policies for the "blog-images" bucket:
--    - SELECT: Allow for everyone (Public)
--    - INSERT/UPDATE/DELETE: Allow for Authenticated Users only
