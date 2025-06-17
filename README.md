# Hope Foundation - Nonprofit Website

A beautiful, story-driven nonprofit website built with Next.js 15, TypeScript, Tailwind CSS v4, Framer Motion, and GSAP animations.

## Features

- ✨ Modern, responsive design with dark theme
- 🎨 Custom Tailwind v4 configuration with grid patterns
- 🎭 Smooth animations with Framer Motion and GSAP ScrollTrigger
- ♿ Accessibility-first with prefers-reduced-motion support
- 📱 Mobile-responsive navigation and layout
- 💳 Stripe Checkout integration for donations
- 📅 Vertical timeline for fundraiser events
- 🎯 Optimized for Vercel deployment

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Stripe account (for payment processing)

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd nonprofit-website
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file in the root directory:
```env
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_publishable_key_here
STRIPE_SECRET_KEY=sk_test_your_secret_key_here
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment to Vercel

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add your environment variables in Vercel dashboard
4. Deploy!

Vercel will automatically create preview URLs for each branch and pull request.

## Technology Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion + GSAP ScrollTrigger
- **Timeline**: react-vertical-timeline-component
- **Payments**: Stripe Checkout
- **Icons**: Lucide React
- **Deployment**: Vercel

## Project Structure

```
├── app/
│   ├── globals.css           # Global styles with Tailwind
│   ├── layout.tsx           # Root layout component
│   ├── page.tsx             # Homepage
│   └── api/                 # API routes
├── components/
│   ├── Navigation.tsx       # Header navigation
│   ├── Hero.tsx            # Hero section
│   ├── EventsTimeline.tsx  # Fundraiser timeline
│   └── DonateButton.tsx    # Stripe donation button
├── lib/
│   └── utils.ts            # Utility functions
├── types/
│   └── index.ts            # TypeScript type definitions
└── public/                 # Static assets
```

## Customization

### Colors
Update the primary color in `tailwind.config.js` to match your brand:

```js
colors: {
  primary: {
    500: '#YOUR_BRAND_COLOR',
    // ... other shades
  }
}
```

### Content
- Update nonprofit name and messaging in components
- Replace placeholder images with your organization's photos
- Modify fundraiser events in `EventsTimeline.tsx`

### Stripe Configuration
- Replace test keys with live keys for production
- Configure webhooks for donation tracking
- Customize donation amounts and currencies

## Performance Features

- Image optimization with Next.js Image component
- Automatic code splitting
- Server-side rendering
- Responsive design patterns
- Reduced motion accessibility

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

MIT License - feel free to use this for your nonprofit organization. 