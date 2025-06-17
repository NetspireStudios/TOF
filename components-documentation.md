# Components Documentation - Hope Foundation Website

## Navigation Component (`components/Navigation.tsx`)

### Purpose
A sophisticated navigation header that adapts to user scroll behavior and provides smooth navigation between page sections.

### Key Features

#### Glassmorphism Effect (Lines 38-41)
```typescript
className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
  scrolled ? 'glass backdrop-blur-md' : 'bg-transparent'
}`}
```
**Teaching Note**: This creates a beautiful glass-like effect when the user scrolls down. The `scrolled` state is tracked using a scroll event listener (lines 14-18).

#### Smooth Scroll Navigation (Line 27)
```typescript
const handleNavClick = (href: string) => {
  smoothScrollTo(href)
  setIsOpen(false)
}
```
**Teaching Note**: Instead of jumping to sections, this smoothly scrolls to each section using our custom utility function.

#### Mobile Responsive Menu (Lines 85-105)
Uses Framer Motion's `AnimatePresence` to create smooth mobile menu animations that appear and disappear elegantly.

---

## Hero Component (`components/Hero.tsx`)

### Purpose
The landing section that immediately captures visitors' attention with animated elements and compelling messaging.

### Key Features

#### GSAP 3D Shape Animation (Lines 14-30)
```typescript
Array.from(shapes).forEach((shape, index) => {
  gsap.to(shape, {
    y: '+=30',
    rotation: '+=45',
    duration: 3 + index * 0.5,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut',
    delay: index * 0.2,
  })
})
```
**Teaching Note**: This creates floating background shapes that move infinitely, adding life to the page without being distracting.

#### Gradient Text Effect (Lines 62-65)
```typescript
<span className="glow-text bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
  One Story at a Time
</span>
```
**Teaching Note**: This combines a gradient background with text clipping to create colorful text that matches your brand.

#### Staggered Animations (Lines 56-84)
Each element appears with a slight delay, creating a cascading effect that feels natural and professional.

---

## Story Section Component (`components/StorySection.tsx`)

### Purpose
Tells your organization's story while showcasing core values and impact statistics.

### Key Features

#### Parallax Background Effect (Lines 18-28)
```typescript
gsap.to(imageRef.current, {
  yPercent: -50,
  ease: 'none',
  scrollTrigger: {
    trigger: sectionRef.current,
    start: 'top bottom',
    end: 'bottom top',
    scrub: true
  }
})
```
**Teaching Note**: This creates a subtle parallax effect where the background moves at a different speed than the content, adding depth.

#### Values Grid (Lines 34-51)
Displays your organization's core values in an elegant 2x2 grid with icons and descriptions.

#### Impact Statistics (Lines 152-169)
Animated counters that reveal your organization's achievements with scaling animations.

---

## Events Timeline Component (`components/EventsTimeline.tsx`)

### Purpose
Showcases your fundraising journey through a vertical timeline with glassmorphism cards.

### Key Features

#### Vertical Timeline Integration (Lines 62-104)
Uses the `react-vertical-timeline-component` library with custom styling:
```typescript
contentStyle={{
  background: 'rgba(255, 255, 255, 0.05)',
  border: '1px solid rgba(83, 109, 226, 0.3)',
  backdropFilter: 'blur(10px)',
  borderRadius: '16px',
  color: '#fff',
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
}}
```
**Teaching Note**: This creates cards that look like frosted glass, maintaining the modern aesthetic while being readable.

#### Dynamic Icons (Line 85)
Different icons appear for past events (✓) vs upcoming events (target icon), providing visual context.

#### Progress Tracking
Each event shows fundraising progress with animated progress bars.

---

## Donate Button Component (`components/DonateButton.tsx`)

### Purpose
Integrates Stripe Checkout for secure donation processing with multiple display options.

### Key Features

#### Stripe Integration (Lines 20-48)
```typescript
const response = await fetch('/api/create-checkout-session', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    amount: 5000, // $50.00 default
    currency: 'usd',
  }),
})
```
**Teaching Note**: This securely creates a Stripe checkout session on your server, then redirects users to Stripe's secure payment form.

#### Loading States (Lines 74-76)
Shows a spinner during payment processing to provide user feedback.

#### Sticky Positioning (Lines 80-90)
Can be displayed as a floating button that follows users as they scroll, or inline within content.

---

## API Route (`app/api/create-checkout-session/route.ts`)

### Purpose
Server-side Stripe integration that securely processes donation requests.

### Key Features

#### Payment Validation (Lines 12-17)
```typescript
if (!amount || amount < 50) {
  return NextResponse.json(
    { error: 'Minimum donation amount is $0.50' },
    { status: 400 }
  )
}
```
**Teaching Note**: Always validate payment amounts on the server to prevent manipulation.

#### Secure Session Creation (Lines 19-39)
Creates a Stripe checkout session with proper success/cancel URLs and metadata for tracking.

---

## Styling System

### Color Philosophy
Your brand color `#536DE2` is used consistently throughout:
- Primary buttons and CTAs
- Text highlights and glows  
- Progress indicators
- Navigation highlights

### Animation Approach
Three-layer animation system:
1. **Framer Motion**: Component enter/exit animations
2. **GSAP**: Complex scroll-triggered and floating animations
3. **CSS**: Quick hover states and transitions

### Accessibility Features
- `prefers-reduced-motion` support in all animations
- High contrast ratios for text readability
- Keyboard navigation support
- Screen reader friendly structure

### Grid Pattern Background
```css
background-image: 
  linear-gradient(rgba(83, 109, 226, 0.03) 1px, transparent 1px),
  linear-gradient(90deg, rgba(83, 109, 226, 0.03) 1px, transparent 1px);
background-size: 40px 40px;
```
**Teaching Note**: This creates a subtle grid pattern that adds texture without being distracting.

## Performance Optimizations

### Image Optimization
- Next.js Image component for automatic optimization
- WebP format serving when supported
- Responsive image serving

### Code Splitting
- Automatic route-based code splitting
- Dynamic imports for heavy components
- Tree shaking for unused code removal

### Caching Strategy
- Static generation for unchanging content
- ISR (Incremental Static Regeneration) for dynamic content
- Edge caching through Vercel

This architecture creates a professional, conversion-optimized nonprofit website that tells your story while making donations effortless for supporters. 