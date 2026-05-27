# Rajvir Kaur - Professional Care Portfolio

A modern, responsive portfolio website for Rajvir Kaur, a professional care provider (Verzorgende IG) specializing in home care services. Built with Next.js, React, and Tailwind CSS.

## Features

✨ **Modern Design**
- Responsive design optimized for all devices (mobile, tablet, desktop)
- Professional gradient color scheme with blue accents
- Smooth scrolling navigation

🌐 **Bilingual Support**
- Full Dutch/English language toggle
- Seamless language switching with context-based state management

📋 **Complete Sections**
- Hero section with call-to-action
- About me with personal qualities, languages, and hobbies
- Education timeline with all diplomas and qualifications
- Work experience with timeline visualization
- Contact section with email, phone, and professional contact form
- Footer with copyright information

📧 **Contact Form**
- EmailJS integration for secure email delivery
- Form validation (name, email, message required)
- Success/error notifications
- Optional phone field

🎨 **Professional Styling**
- Tailwind CSS for responsive utilities
- Card-based layouts with hover effects
- Color-coded timeline sections (blue for education, green for experience)
- Gradient overlays and smooth transitions

## Tech Stack

- **Framework:** Next.js 16+ with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **State Management:** React Context API
- **Email Service:** EmailJS
- **Hosting:** Vercel
- **Version Control:** Git

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/18gssidhu10/mom-portfolio.git
cd mom-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
   - Copy `.env.example` to `.env.local`
   - Add your EmailJS credentials (see EmailJS Setup section below)

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## EmailJS Setup

To enable the contact form, you'll need to set up EmailJS:

1. **Create an EmailJS Account:**
   - Go to [EmailJS.com](https://www.emailjs.com/)
   - Sign up for a free account
   - Verify your email

2. **Create an Email Service:**
   - In your EmailJS dashboard, go to "Email Services"
   - Click "Create New Service"
   - Choose "Gmail" (or your email provider)
   - Connect your email account
   - Copy the **Service ID**

3. **Create an Email Template:**
   - Go to "Email Templates"
   - Click "Create New Template"
   - Use these template variables:
     - `{{from_name}}` - Sender's name
     - `{{from_email}}` - Sender's email
     - `{{phone}}` - Sender's phone (optional)
     - `{{message}}` - Message content
     - `{{to_email}}` - Recipient (sgkzorg@gmail.com)
   - Copy the **Template ID**

4. **Get Your Public Key:**
   - Go to "Account" → "API Keys"
   - Copy your **Public Key**

5. **Update Environment Variables:**
   - Create `.env.local` in the project root
   - Add:
     ```
     NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
     NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
     NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
     ```

## Building for Production

```bash
npm run build
npm run start
```

## Deployment on Vercel

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy on Vercel:**
   - Go to [Vercel.com](https://vercel.com)
   - Click "New Project"
   - Select your GitHub repository
   - Vercel will automatically detect Next.js
   - Add environment variables in project settings:
     - `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`
     - `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
     - `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
   - Click "Deploy"

3. **Add Custom Domain (sgkkzorg.nl):**
   - In Vercel project settings, go to "Domains"
   - Click "Add Domain"
   - Enter `sgkkzorg.nl`
   - Update your domain registrar's DNS settings to point to Vercel
   - Vercel will provide DNS records to add

## Project Structure

```
mom-portfolio/
├── app/                      # Next.js app directory
│   ├── layout.tsx           # Root layout with providers
│   ├── page.tsx             # Main portfolio page
│   └── globals.css          # Global styles
├── src/
│   ├── components/          # React components
│   │   ├── Header.tsx
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── EducationSection.tsx
│   │   ├── ExperienceSection.tsx
│   │   ├── ContactSection.tsx
│   │   ├── ContactForm.tsx
│   │   ├── LanguageToggle.tsx
│   │   └── Footer.tsx
│   ├── context/             # React context providers
│   │   └── LanguageContext.tsx
│   └── data/                # Data and translations
│       ├── cv.ts           # CV data
│       └── translations.ts # UI translations
├── public/                  # Static assets
├── .env.example             # Environment variables template
├── package.json
└── tsconfig.json
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Performance

- Lighthouse Score: 95+ (Performance, Accessibility, Best Practices, SEO)
- Optimized images and fonts
- Server-side rendering for better SEO
- Static site generation where possible

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

For questions or support regarding this portfolio:
- Email: sgkzorg@gmail.com
- Phone: 06-11865081
- Location: Amsterdam, Netherlands

---

**Built with care and modern web technology** 💙
