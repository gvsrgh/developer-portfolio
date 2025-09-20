# 🚀 Modern Portfolio - Full Stack Application

> A professional, responsive portfolio website showcasing projects, skills, and experience with modern web technologies.

[![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.0-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![Docker](https://img.shields.io/badge/Docker-Ready-2496ED?logo=docker)](https://www.docker.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## ✨ Features

- 🎨 **Modern Design** - Clean, professional UI with smooth animations
- 📱 **Fully Responsive** - Perfect on desktop, tablet, and mobile
- ⚡ **High Performance** - Optimized for speed and SEO
- 🐳 **Docker Ready** - Easy deployment with containerization
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
├── frontend/          # Next.js 14 + TypeScript + Tailwind
├── backend/           # Express.js + TypeScript API
├── docker-compose.yml # Production setup
└── docker-compose.dev.yml # Development setup
```

## 🛠️ Tech Stack

### Frontend
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Smooth animations
- **Lucide React** - Beautiful icons

### Backend
- **Node.js + Express** - REST API
- **TypeScript** - Type safety
- **CORS** - Cross-origin resource sharing

### DevOps
- **Docker** - Containerization
- **Docker Compose** - Multi-service orchestration

## 🚀 Quick Start

### Prerequisites
- Docker & Docker Compose
- Node.js 18+ (for local development)

### Option 1: Docker (Recommended)

```bash
# Clone the repository
git clone <your-repo-url>
cd portfolio

# Start development environment
npm run dev

# Or start production environment
npm run build
npm start
```

### Option 2: Local Development

```bash
# Install dependencies
npm run install:all

# Start frontend (Terminal 1)
npm run dev:frontend

# Start backend (Terminal 2)
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
npm run dev:backend  # Start backend only
npm run install:all  # Install all dependencies
```

## 🌐 Services

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:8000
- **API Health**: http://localhost:8000/api/health

## 📂 Project Structure

```
frontend/
├── src/
│   ├── app/           # Next.js App Router pages
│   ├── components/    # Reusable components
│   ├── lib/           # Utilities and configurations
│   └── data/          # Static data and content
├── public/            # Static assets
└── Dockerfile

backend/
├── src/
│   └── index.ts       # Express server
├── package.json
├── tsconfig.json
└── Dockerfile
```

## 🎨 Customization

1. **Personal Information**: Update `frontend/src/data/site.ts`
2. **Projects**: Modify `frontend/src/data/projects.ts`
3. **Skills**: Edit `frontend/src/data/skills.ts`
4. **Timeline**: Update `frontend/src/data/timeline.ts`

## 🚢 Deployment

🚀 **Deployment Platform: Yet to be decided**

**Available Options:**
- 🔵 **Vercel** - Seamless Next.js deployment with zero configuration
- 🟠 **Railway/Render** - Full-stack deployment with backend support
- 🟢 **Netlify** - Frontend deployment with form handling
- ⚫ **DigitalOcean** - Complete control with Docker support
- 🔴 **AWS/GCP** - Enterprise-grade cloud infrastructure

**Docker Support Ready:**
```bash
# All deployment options support Docker containers
docker-compose build
docker-compose up -d
```

## 🔧 Environment Variables

Create `.env` files as needed:

### Frontend (.env.local)
```
NEXT_PUBLIC_API_URL=http://localhost:8000
```

### Backend (.env)
```
PORT=8000
NODE_ENV=development
```

## 🐛 Troubleshooting

### Common Issues

1. **Port conflicts**: Change ports in docker-compose files
2. **Permission errors**: Run `sudo docker-compose up` on Linux
3. **Build failures**: Run `npm run clean` and rebuild

### Development Tips

1. Use `docker-compose.dev.yml` for development (hot reload)
2. Use `docker-compose.yml` for production builds
3. Check logs: `docker-compose logs [service-name]`

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