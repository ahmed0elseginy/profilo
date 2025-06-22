# Ahmed El-Seginy - Portfolio Website

A modern, high-performance portfolio website built with Next.js 15, TypeScript, and Tailwind CSS. Features a cosmic theme inspired by "The Little Prince" with optimized animations and responsive design.

## ✨ Features

### 🚀 Performance Optimizations
- **Lazy Loading**: Dynamic imports for non-critical sections
- **Image Optimization**: WebP/AVIF formats with proper sizing
- **Bundle Optimization**: Package imports optimization and tree shaking
- **Animation Performance**: Reduced motion for mobile devices and accessibility
- **CSS Optimization**: Consolidated styles and reduced bundle size

### 📱 Responsive Design
- **Mobile-First Approach**: Optimized for all screen sizes
- **Adaptive Layouts**: Different layouts for mobile, tablet, and desktop
- **Touch-Friendly**: Proper touch targets and interactions
- **Typography Scaling**: Responsive text sizing across devices

### 🎨 Modern UI/UX
- **Cosmic Theme**: Beautiful animations and visual effects
- **Dark Mode**: Consistent dark theme throughout
- **Smooth Animations**: Framer Motion with performance considerations
- **Accessibility**: Proper ARIA labels, focus management, and reduced motion support

### 🏗️ Clean Code Architecture
- **TypeScript**: Full type safety throughout the application
- **Component Separation**: Reusable and maintainable components
- **Constants Management**: Centralized configuration and data
- **Custom Hooks**: Reusable logic for responsive design and state management

## 🛠️ Tech Stack

### Frontend
- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Radix UI** - Accessible component primitives

### Development Tools
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **PostCSS** - CSS processing
- **Bundle Analyzer** - Performance monitoring

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/ahmed0elseginy/portfolio.git

# Navigate to project directory
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

## 🚀 Available Scripts

```bash
# Development
npm run dev              # Start development server on port 9002
npm run build           # Build for production
npm run start           # Start production server
npm run preview         # Build and start production server

# Code Quality
npm run lint            # Run ESLint
npm run lint:fix        # Fix ESLint errors
npm run typecheck       # Run TypeScript type checking
npm run format          # Format code with Prettier
npm run format:check    # Check code formatting

# Analysis
npm run build:analyze   # Analyze bundle size
npm run test:build      # Run type check, lint, and build

# Utilities
npm run clean           # Clean build directories
```

## 🎯 Performance Features

### Bundle Optimization
- Dynamic imports for route-level code splitting
- Component-level lazy loading
- Optimized package imports
- Tree shaking for unused code elimination

### Image Optimization
- Next.js Image component with WebP/AVIF support
- Responsive images with proper sizing
- Lazy loading with intersection observer
- Optimized loading states

### Animation Performance
- Hardware-accelerated CSS animations
- Reduced motion support for accessibility
- Mobile-optimized animation complexity
- Efficient animation libraries usage

### SEO & PWA
- Complete meta tags and Open Graph support
- PWA manifest for mobile app-like experience
- Proper semantic HTML structure
- Optimized Core Web Vitals

## 📱 Responsive Design

### Breakpoint Strategy
- **Mobile**: < 768px (Default)
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px - 1280px
- **Large**: > 1280px

### Adaptive Features
- Navigation that adapts to screen size
- Optimized touch targets for mobile
- Responsive typography scaling
- Flexible grid layouts

## 🎨 Design System

### Color Palette
- **Primary**: `#fbbf24` (Yellow/Gold)
- **Secondary**: `#8b5cf6` (Purple)
- **Accent**: `#06b6d4` (Cyan)
- **Background**: `#1e1b4b` (Dark Blue)

### Typography
- **Font Family**: Ubuntu (Google Fonts)
- **Responsive Scaling**: Fluid typography across devices
- **Loading Strategy**: Font display swap for performance

### Animation Principles
- **Reduced Motion**: Respects user preferences
- **Performance First**: Hardware acceleration when possible
- **Meaningful Motion**: Animations enhance UX

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file:

```env
# Add your environment variables here
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

### Customization
- Update personal information in `src/lib/constants.ts`
- Modify tech stack in `src/lib/data.ts`
- Customize colors in `tailwind.config.ts`
- Update social links in constants

## 📊 Performance Metrics

The application is optimized for:
- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Excellent ratings
- **Bundle Size**: Optimized with code splitting
- **Loading Speed**: Fast initial page load

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Configure environment variables
3. Deploy automatically on push

### Other Platforms
```bash
npm run build
npm run start
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

- **Email**: ahmed0elseginy@gmail.com
- **LinkedIn**: [linkedin.com/in/ahmed0elseginy](https://linkedin.com/in/ahmed0elseginy)
- **GitHub**: [github.com/ahmed0elseginy](https://github.com/ahmed0elseginy)

---

Built with ❤️ using modern web technologies and clean code principles.
