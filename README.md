# My Website

A modern, responsive website built with Next.js 14, TypeScript, and Tailwind CSS. This project features a comprehensive UI component library built with Radix UI primitives and shadcn/ui components.

## 🚀 Features

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Accessible UI primitives
- **shadcn/ui** - Beautiful, reusable components
- **Next Themes** - Dark/light mode support
- **React Hook Form** - Form handling with validation
- **Zod** - Schema validation
- **Lucide React** - Beautiful icons
- **Responsive Design** - Mobile-first approach

## 📦 Tech Stack

- **Framework:** Next.js 14.2.16
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS 3.4.17
- **UI Components:** Radix UI + shadcn/ui
- **Icons:** Lucide React
- **Forms:** React Hook Form + Zod
- **Charts:** Recharts
- **Carousel:** Embla Carousel
- **Date Picker:** React Day Picker
- **Toast Notifications:** Sonner
- **Theme:** Next Themes

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd website
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🏗️ Project Structure

```
website/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable components
│   ├── ui/               # shadcn/ui components
│   └── theme-provider.tsx # Theme provider
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
├── public/               # Static assets
└── styles/               # Additional styles
```

## 🎨 UI Components

This project includes a comprehensive set of UI components built with Radix UI primitives:

- **Layout:** Accordion, Card, Separator, Sheet
- **Navigation:** Breadcrumb, Navigation Menu, Tabs
- **Forms:** Button, Input, Select, Checkbox, Radio Group, Switch
- **Feedback:** Alert, Toast, Progress, Skeleton
- **Data Display:** Table, Badge, Avatar
- **Overlay:** Dialog, Popover, Tooltip, Hover Card
- **Media:** Aspect Ratio, Carousel
- **Charts:** Recharts integration

## 🌙 Theme Support

The application supports both light and dark themes using `next-themes`. The theme provider is configured in `components/theme-provider.tsx`.

## 📱 Responsive Design

Built with a mobile-first approach using Tailwind CSS responsive utilities. The application is optimized for all screen sizes.

## 🔧 Configuration Files

- `next.config.mjs` - Next.js configuration
- `tailwind.config.ts` - Tailwind CSS configuration
- `tsconfig.json` - TypeScript configuration
- `postcss.config.mjs` - PostCSS configuration
- `components.json` - shadcn/ui configuration

## 🚀 Deployment

### GitHub Pages (Recommended)

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

**Quick Setup:**
1. Create a repository named `yourusername.github.io` (for root domain) or any other name
2. Push your code to the repository
3. The GitHub Actions workflow will automatically build and deploy your site

**For detailed instructions, see [DEPLOYMENT.md](./DEPLOYMENT.md)**

### Vercel (Alternative)

1. Push your code to GitHub
2. Import your repository to Vercel
3. Deploy automatically

### Other Platforms

The application can be deployed to any platform that supports Next.js:

```bash
npm run build
npm run start
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Radix UI](https://www.radix-ui.com/) - UI primitives
- [shadcn/ui](https://ui.shadcn.com/) - Component library
- [Lucide](https://lucide.dev/) - Icons

---

Made with ❤️ using Next.js and Tailwind CSS 