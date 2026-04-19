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

## Modular Plugin Architecture
This repository is architected for "Drop-in" integration into other developer ecosystems:
- **ConversationEngine**: Can be integrated into portfolio sites via iframe or as a standalone React component.
- **MagazineStack**: Designed to serve as a blog/article layer for external domains.

## Lead Capture & CRM
Contains a modular `lib/crm.ts` for unified lead routing and redirect management.

## Getting Started
1. Clone the repository.
2. Add `GEMINI_API_KEY` to `.env`.
3. `npm install && npm run dev`.
