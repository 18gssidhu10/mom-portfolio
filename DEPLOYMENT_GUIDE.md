# Deployment & Setup Guide

## Quick Start for Deployment

This guide will walk you through the complete process of deploying your portfolio to Vercel and configuring the contact form.

---

## Step 1: EmailJS Configuration ⚙️

The contact form uses EmailJS to send emails. Follow these steps to set it up:

### 1.1 Create EmailJS Account
1. Visit [EmailJS.com](https://www.emailjs.com/)
2. Click "Sign Up" → Choose "Sign up with Google" or create an account
3. Verify your email address
4. Accept the terms and create account

### 1.2 Add Email Service (Gmail)
1. In the dashboard, click **"Add New Service"** or go to **Email Services**
2. Select **Gmail** from the list
3. Click **"Connect Gmail"**
4. Sign in with your Gmail account (sgkzorg@gmail.com recommended)
5. Grant permissions
6. Copy and save your **Service ID** (looks like: `service_xxxxx`)

### 1.3 Create Email Template
1. Go to **Email Templates** in the sidebar
2. Click **"Create New Template"**
3. Name it: `contact_form_template`
4. In the template editor, set up the email structure:

**Email Content Example:**
```
Subject: New Contact from {{from_name}}

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}

Message:
{{message}}
```

5. Test and save
6. Copy your **Template ID** (looks like: `template_xxxxx`)

### 1.4 Get Public Key
1. Go to **Account** in the sidebar
2. Click **"API Keys"**
3. Copy the **Public Key** (looks like: `xxx_xxxxx`)

### 1.5 Update Environment Variables
1. Open `.env.local` file in your project root
2. Replace with your credentials:
```
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id_here
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id_here
```

3. Save the file
4. Test locally: `npm run dev` → Fill the contact form → Check your email

---

## Step 2: GitHub Push 📤

Push your project to GitHub so you can deploy it on Vercel.

### 2.1 Initialize Git (if not already done)
```bash
cd mom-portfolio
git config user.name "Your Name"
git config user.email "your.email@gmail.com"
git add .
git commit -m "Initial commit: Rajvir Kaur portfolio"
```

### 2.2 Create GitHub Repository
1. Go to [GitHub.com](https://github.com)
2. Click **"New"** to create a new repository
3. Name it: `mom-portfolio`
4. Description: "Professional portfolio for Rajvir Kaur - Care Professional"
5. Choose **Public** (so it's easily accessible)
6. **Create repository**

### 2.3 Push to GitHub
Copy the commands from GitHub (under "…or push an existing repository from the command line") and run them:

```bash
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/mom-portfolio.git
git push -u origin main
```

---

## Step 3: Deploy on Vercel 🚀

Vercel makes deployment simple with automatic GitHub integration.

### 3.1 Create Vercel Account
1. Go to [Vercel.com](https://vercel.com)
2. Click **"Sign Up"**
3. Choose **"Continue with GitHub"**
4. Authorize Vercel to access your GitHub
5. Follow the setup steps

### 3.2 Deploy Project
1. In Vercel dashboard, click **"New Project"**
2. Find and select `mom-portfolio` repository
3. Click **"Import"**
4. In the configuration screen:
   - **Framework Preset:** Next.js ✓ (auto-detected)
   - **Project Name:** Keep as `mom-portfolio`
   - **Root Directory:** Leave empty `./`
   
5. Click **"Environment Variables"**
6. Add your EmailJS credentials:
   - Name: `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` → Value: (paste your public key)
   - Name: `NEXT_PUBLIC_EMAILJS_SERVICE_ID` → Value: (paste your service ID)
   - Name: `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` → Value: (paste your template ID)

7. Click **"Deploy"**
8. Wait for deployment to complete (~1-2 minutes)
9. You'll get a URL like: `https://mom-portfolio.vercel.app`

### 3.3 Test Deployment
1. Open your Vercel URL
2. Test the contact form
3. Verify you receive emails at sgkzorg@gmail.com

---

## Step 4: Add Custom Domain (sgkkzorg.nl) 🌐

After you purchase the domain `sgkkzorg.nl`, add it to Vercel.

### 4.1 Add Domain to Vercel
1. In Vercel project settings, go to **Domains**
2. Click **"Add Domain"**
3. Enter: `sgkkzorg.nl`
4. Vercel will provide DNS records to add

### 4.2 Update Domain Registrar
1. Go to your domain registrar's control panel (where you purchased sgkkzorg.nl)
2. Find **DNS Settings** or **Name Servers**
3. Add the DNS records provided by Vercel:
   - Copy each record from Vercel
   - Paste into your registrar's DNS settings
4. Save changes
5. Wait 24-48 hours for DNS propagation

### 4.3 Verify Domain
- Once DNS is updated, Vercel will automatically verify
- Your site will be live at `https://sgkkzorg.nl`

---

## After Deployment ✅

### Continuous Deployment
- Any push to the `main` branch on GitHub automatically triggers a new deployment on Vercel
- You can see deployment history in Vercel dashboard

### Monitor Performance
1. In Vercel, go to **Analytics**
2. Check page load times and visitor metrics
3. Use **Lighthouse** to check SEO and performance scores

### Update Contact Email
If you want to send emails to a different address:
1. Update the `to_email` variable in your EmailJS template
2. Or modify the `svgkzorg@gmail.com` in the `src/data/cv.ts` file

---

## Troubleshooting

### Contact form not sending emails?
- ✓ Verify EmailJS credentials are correct in `.env.local`
- ✓ Check EmailJS service/template are active
- ✓ Verify Gmail is allowing third-party apps (enable "Less secure apps")
- ✓ Check browser console for errors

### Domain not resolving?
- ✓ Wait 24-48 hours for DNS propagation
- ✓ Check DNS records are correctly entered in registrar
- ✓ Use [DNS Checker](https://dnschecker.org/) to verify DNS
- ✓ Contact Vercel support if needed

### Page loading slowly?
- ✓ Check Vercel Analytics for bottlenecks
- ✓ Optimize images using Next.js Image component
- ✓ Enable caching in browser settings

---

## Support

For questions or issues:
- **EmailJS Support:** https://www.emailjs.com/docs/
- **Vercel Docs:** https://vercel.com/docs
- **Next.js Docs:** https://nextjs.org/docs

---

## Summary of Credentials to Save

**Keep these credentials safe and don't share them:**

```
EmailJS Public Key: _______________
EmailJS Service ID: _______________
EmailJS Template ID: _______________
Gmail Password: _______________
GitHub URL: https://github.com/YOUR_USERNAME/mom-portfolio
Vercel Project URL: https://mom-portfolio.vercel.app
Domain: sgkkzorg.nl
```

---

**You're all set! 🎉 Your professional portfolio is now live and ready to receive client inquiries.**
