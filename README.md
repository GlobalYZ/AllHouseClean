# 🌟 Personal Portfolio Website

A modern, responsive portfolio website built with Next.js and React, featuring a sleek design with animations and multilingual support.

## 🚀 Features

- Responsive design that works across all devices
- Smooth animations and transitions
- Multilingual support (English/Chinese)
- customed utility classes on top of tailwind css
- SEO optimized with meta tags

## 🛠️ Technologies

### Frontend
- Next.js 14
- React
- TypeScript
- Tailwind CSS

### Testing
- Jest
- React Testing Library
- User event testing

### Performance Optimization
- Dynamic imports for code splitting
- Image optimization with Next.js Image component
- Lazy loading of components
- Custom loading states for better UX
- Efficient state management with React Context

## 🧪 Testing

The project includes comprehensive testing setup:

```bash
# Run tests
npm test

# Run tests in watch mode
npm test:watch

# Generate coverage report
npm test:coverage
```

Key test suites:
- Language context testing for multilingual support
- Component rendering tests
- User interaction tests
- Error boundary testing

## ⚡ Performance Optimizations

1. **Code Splitting**
   - Dynamic imports for route-based code splitting
   - Component lazy loading

2. **Asset Optimization**
   - SVG icons for crisp rendering at any size
   - Optimized image loading with Next.js Image
   - Custom font loading optimization

3. **State Management**
   - Efficient context usage for language switching
   - Optimized re-renders with proper state management
   - React Dev Tools Chrome extension for monitoring and minimizing re-renders

4. **Style Optimizations**
   - Tailwind CSS for reduced CSS bundle size
   - Custom utility classes for common styles

## 🚀 Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio.git
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 License

This project is open source and available under the [MIT License](LICENSE).
