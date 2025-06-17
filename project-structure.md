# Hope Foundation - Project Structure & Component Guide

## Overview
This documentation provides a detailed breakdown of every component and file in our nonprofit website, explaining how each piece works together to create a cohesive, engaging user experience.

## File Structure & Components

### Core Configuration Files

#### `package.json` (Lines 1-34)
**Purpose**: Defines project dependencies and scripts
**Key Features**:
- Next.js 15 with TypeScript support
- Framer Motion for animations (line 17)
- GSAP for advanced scroll animations (line 18)  
- Stripe integration for payments (lines 20-21)
- Tailwind CSS v4 for styling (line 22)

**Teaching Note**: Raza, this file is like the blueprint of your project - it tells Node.js what libraries your website needs to function. Think of it as a shopping list for code!

#### `tailwind.config.js` (Lines 1-63)
**Purpose**: Customizes Tailwind CSS with your brand colors and animations
**Key Features**:
- Primary color scheme using your brand blue #536DE2 (line 12)
- Custom grid pattern backgrounds (lines 21-25)
- Smooth animations that respect user accessibility preferences (lines 30-58)
- Thin font weights for modern typography (lines 60-62)

**Teaching Note**: This is where we define your website's visual identity. The primary colors here will be used throughout the entire site for consistency.

### Layout & Structure

#### `app/layout.tsx` (Lines 1-39)
**Purpose**: The main wrapper for all pages
**Key Features**:
- SEO metadata for search engines (lines 5-20)
- Font loading optimization (lines 32-33)
- Dark theme setup with pure black background (line 35)

**Teaching Note**: This is like the frame of a house - every page of your website will be wrapped in this layout.

#### `app/globals.css` (Lines 1-76)
**Purpose**: Global styling and accessibility features
**Key Features**:
- Accessibility-first design with prefers-reduced-motion support (lines 28-40)
- Custom scrollbar styling in your brand colors (lines 42-54)
- Grid pattern utility classes (lines 56-60)
- Glassmorphism effects for modern UI (lines 62-66)

### Core Components

#### `components/Navigation.tsx` (Lines 1-117)
**Purpose**: Responsive navigation header with smooth scrolling
**Key Features**:
- Glassmorphism effect that appears on scroll (line 38)
- Logo with heart icon representing your mission (lines 46-53)
- Smooth scroll navigation between sections (line 27)
- Mobile-responsive hamburger menu (lines 74-84)

**Teaching Note**: This navigation automatically becomes more opaque as users scroll, creating a professional floating effect.

#### `components/Hero.tsx` (Lines 1-147)
**Purpose**: Impactful landing section with animated elements
**Key Features**:
- 3D floating shapes animated with GSAP (lines 14-30, 48-54)
- Gradient text effect for "One Story at a Time" (lines 62-65)
- Statistics showcase with icons (lines 33-37, 109-126)
- Dual call-to-action buttons (lines 85-102)

**Teaching Note**: The floating shapes use GSAP to create subtle 3D movement that makes the page feel alive without being distracting.

#### `components/DonateButton.tsx` (Lines 1-95)
**Purpose**: Stripe-integrated donation button (can be sticky or inline)
**Key Features**:
- Stripe Checkout integration (lines 20-48)
- Loading states with spinner animation (line 74)
- Sticky positioning option for persistent visibility (lines 80-90)
- Hover animations that respect accessibility preferences

**Teaching Note**: This button integrates with Stripe to process real payments. The sticky version follows users as they scroll, making donations always accessible.

#### `components/EventsTimeline.tsx` (Lines 1-104)
**Purpose**: Visual timeline showing past and upcoming fundraisers
**Key Features**:
- Vertical timeline with glassmorphism cards (lines 60-90)
- Different icons for past vs. upcoming events (line 85)
- Progress tracking for fundraising goals (lines 100-101)
- Smooth reveal animations on scroll

**Teaching Note**: This timeline tells your organization's story chronologically, building trust by showing past successes and future goals.

### API & Backend

#### `app/api/create-checkout-session/route.ts` (Lines 1-48)
**Purpose**: Server-side Stripe payment processing
**Key Features**:
- Secure payment session creation (lines 18-39)
- Donation amount validation (lines 12-17)
- Success/cancel URL handling (lines 33-34)
- Error handling for payment failures

**Teaching Note**: This API route runs on the server and securely communicates with Stripe. Users never see your secret keys.

### Utility Functions

#### `lib/utils.ts` (Lines 1-25)
**Purpose**: Helper functions for styling and accessibility
**Key Features**:
- Class name merging for Tailwind CSS (lines 4-6)
- Animation properties that respect reduced motion preferences (lines 9-16)
- Smooth scrolling utility for navigation (lines 19-25)

#### `types/index.ts` (Lines 1-35)
**Purpose**: TypeScript type definitions for data consistency
**Key Features**:
- FundraiserEvent interface for timeline data (lines 1-10)
- TeamMember interface for staff profiles (lines 19-28)
- DonationTier interface for giving levels (lines 30-35)

## Animation Philosophy

The website uses a layered approach to animations:

1. **Framer Motion**: For component entrance/exit animations
2. **GSAP**: For complex scroll-triggered animations and floating elements
3. **CSS Transitions**: For hover states and quick interactions
4. **Accessibility**: All animations respect `prefers-reduced-motion`

## Color System

Your brand color #536DE2 is used throughout:
- Primary buttons and CTAs
- Text highlights and glows
- Progress bars and success states
- Navigation highlights

## Performance Optimizations

- Images are optimized through Next.js Image component
- Code splitting ensures fast loading
- Server-side rendering improves SEO
- Reduced motion preferences are respected
- Smooth scrolling enhances UX

## Deployment-Ready Features

- Environment variable setup for Stripe keys
- Vercel-optimized configuration
- SEO metadata for search engines
- Responsive design for all devices
- Error handling for edge cases

This architecture creates a professional, engaging nonprofit website that tells your story while making it easy for supporters to take action. 