# 🚀 Modern Portfolio - Full Stack Application

> A professional, responsive portfolio website showcasing projects, skills, and experience with modern web technologies.

[![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## ✨ Features

- 🎨 **Modern Design** - Clean, professional UI with smooth animations
- 📱 **Fully Responsive** - Perfect on desktop, tablet, and mobile
- ⚡ **High Performance** - Optimized for speed and SEO
- � **Easy Deployment** - Ready for Vercel, Netlify, and other platforms
- 🔧 **Type Safe** - Built with TypeScript for reliability
- 🎭 **Interactive** - Engaging animations with Framer Motion
- 📧 **Contact Form** - Functional contact system
- 🌓 **Theme Support** - Light/dark mode ready

## 🖥️ Live Demo

🔗 **Live Portfolio: Updating Soon** 🚀

## 📸 Screenshots

📷 **Screenshots: Updating Soon** ✨

<details>
<summary>Preview images will be available soon</summary>

🎨 **Coming Soon:**
- Desktop responsive design preview
- Mobile-optimized interface showcase  
- Interactive component demonstrations
- Dark/light theme comparisons

</details>

## 🏗️ Architecture

```
portfolio/
├── frontend/          # Next.js 15 + TypeScript + Tailwind
└── backend/           # Express.js + TypeScript API (optional)
```

## 🛠️ Tech Stack

### Frontend
- **Next.js 15** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Smooth animations
- **Lucide React** - Beautiful icons

### Backend (Optional)
- **Node.js + Express** - REST API
- **TypeScript** - Type safety
- **CORS** - Cross-origin resource sharing

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Local Development

```bash
# Clone the repository
git clone <your-repo-url>
cd portfolio

# Install dependencies
npm run install:all

# Start frontend development server
npm run dev

# Or start frontend only
npm run dev:frontend

# Start backend (if needed)
npm run dev:backend
```

## 📝 Available Scripts

```bash
# Docker commands
npm run dev          # Start development with hot reload
npm run build        # Build production images
npm run start        # Start production containers
npm run stop         # Stop all containers
npm run clean        # Remove containers and images

# Local development
npm run dev:frontend # Start frontend only
## 📦 Build and Production

```bash
# Build frontend for production
npm run build

# Start production server
npm start

# Type check
npm run type-check

# Lint code
npm run lint
```

## 🌐 Services

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:8000 (if using backend)
- **API Health**: http://localhost:8000/api/health (if using backend)

## 📂 Project Structure

```
frontend/
├── src/
│   ├── app/           # Next.js App Router pages
│   ├── components/    # Reusable components
│   ├── lib/           # Utilities and configurations
│   └── data/          # Static data and content
└── public/            # Static assets

backend/               # Optional backend
├── src/
│   └── index.ts       # Express server
├── package.json
└── tsconfig.json
```

## 🎨 Customization

1. **Personal Information**: Update `frontend/src/data/site.ts`
2. **Projects**: Modify `frontend/src/data/projects.ts`
3. **Skills**: Edit `frontend/src/data/skills.ts`
4. **Timeline**: Update `frontend/src/data/timeline.ts`
5. **Platforms**: Update `frontend/src/data/platforms.ts`

## 🚢 Deployment

### Recommended Platforms

#### **Vercel (Recommended for Frontend)**
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

#### **Netlify**
```bash
# Install Netlify CLI
npm i -g netlify-cli

# Build and deploy
npm run build
netlify deploy --prod --dir=frontend/.next
```

#### **Railway/Render (For Full-Stack)**
- Connect your GitHub repository
- Configure build commands
- Deploy automatically on push

## 🔧 Environment Variables

Create `.env.local` in frontend directory:

```env
NEXT_PUBLIC_SITE_URL=https://yoursite.com
NEXT_PUBLIC_API_URL=https://your-api.com (if using backend)
```

## 🐛 Troubleshooting

### Common Issues

1. **Build errors**: Run `npm run type-check` to identify TypeScript issues
2. **Port conflicts**: Change port in `next.config.ts` or use different terminal
3. **Environment variables**: Ensure `.env.local` is properly configured

### Development Tips

1. Use `npm run dev` for hot reload development
2. Run `npm run build` to test production builds locally
3. Use `npm run lint` to catch code quality issues

## 📄 License

MIT License - feel free to use this project for your own portfolio!

## 🌟 Show Your Support

If this project helped you, please consider:
- ⭐ **Starring** this repository
- 🍴 **Forking** it for your own use
- 🐛 **Reporting** any issues you find
- 💡 **Suggesting** new features

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 👨‍💻 Author

**GVSR**
- GitHub: [@gvsrgh](https://github.com/gvsrgh)
- LinkedIn: [GVSR](https://linkedin.com/in/gvsr)
- Portfolio: [Basic](https://gvsrgh.github.io/My-Personal-Website/)

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing React framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) for beautiful animations
- [Lucide](https://lucide.dev/) for the clean, customizable icons

---

<div align="center">
  Made with ❤️ and ☕ by <strong>GVSR</strong>
</div>