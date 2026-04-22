# Design Help Desk - Digital Magazine & Reasoning Engine

A premium, SEO-optimized digital magazine platform for the Singapore Interior Design market. This project serves as a standalone "Knowledge-as-a-Service" (KaaS) engine with built-in creator attribution and AI-driven architectural reasoning.

## Mission
To bridge the gap between luxury design inspiration and budget-conscious execution through high-fidelity storytelling and technical AI transparency.

## Tech Stack
- **Framework**: Next.js 16+ (App Router)
- **Styling**: Vanilla CSS (Liquid Glass v3 Design System)
- **Reasoning Engine**: Gemini 1.5 Pro (SDK Integration)
- **Content**: File-based dynamic registry (`src/lib/articles.ts`)
- **Animations**: Framer Motion & CSS Smooth Scroll

## Editorial Design System
The visual language is built on **Liquid Glass v4**, optimized for sensory luxury and atmospheric depth:
- **Dual Themes**: Switchable between `Deep Midnight` (dark mode) and `Gallery White` (paper-style light mode). 
- **Typography**: Utilizing `Cormorant Garamond` for editorial weight and `Outfit` for technical clarity.
- **Motion**: Every reveal uses a "Slowing-Time" easing curve (`0.22, 1, 0.36, 1`) to simulate an expensive, relaxed reading experience.
- **Showcase**: A responsive 5-element (PC) and 1-element (Mobile) horizontal slider for immersive design exploration.

## Modular Plugin Architecture
This repository is architected for "Drop-in" integration into other developer ecosystems:

### 1. The Iframe Method (Universal)
To embed the Conversation Engine into any site (WordPress, Webflow, Shopify):
```html
<iframe 
  src="https://your-helpdesk-domain.com/embed/conversation" 
  width="100%" 
  height="600px" 
  style="border:none; border-radius: 24px; box-shadow: 0 20px 40px rgba(0,0,0,0.1);"
></iframe>
```

### 2. The React/Next.js Method (Native)
Import the components directly into your other Atrellis projects:
```tsx
import { ConversationEngine } from 'design-help-desk/components';
```

## Lead Capture & CRM
All high-intent interactions (Brief generation, Magazine redirects) are routed through `src/lib/crm.ts`. This allows you to track exactly which website the lead came from and what their design budget is before they even hit your CRM.

## Getting Started
1. **Clone**: `git clone [your-repo-url]`
2. **Configure**: Add `GEMINI_API_KEY` and `CRM_WEBHOOK_URL` to `.env`.
3. **Run**: `npm install && npm run dev`.
