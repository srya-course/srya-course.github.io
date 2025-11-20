# Anime-Inspired Personal Blog

## Overview

A 2D anime-inspired personal blog web application built with React and Express. The application allows users to showcase diary entries, gallery images, notes, and videos in a kawaii (cute) aesthetic inspired by Japanese illustration platforms like Pixiv and Booth.pm. The design emphasizes flat, geometric shapes with playful visual elements, rounded fonts, and a clean, approachable interface.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build Tools**
- React with TypeScript for type-safe component development
- Vite as the build tool and development server
- Wouter for lightweight client-side routing

**UI Component System**
- Shadcn/ui component library with Radix UI primitives for accessible, customizable components
- Tailwind CSS for utility-first styling with custom design tokens
- Custom theme system supporting light/dark modes with anime-inspired color palettes

**State Management**
- TanStack Query (React Query) for server state management, caching, and data fetching
- React Hook Form with Zod for form validation and type-safe schema validation

**Design Philosophy**
- Flat design with rounded corners and soft shadows
- Japanese typography support (Noto Sans JP, M PLUS Rounded 1c)
- Playful accent fonts (Comfortaa, Quicksand) for headings
- Kawaii decorative elements (stars, hearts, sparkles)
- Generous whitespace and clear visual hierarchy
- Responsive grid layouts for content sections

### Backend Architecture

**Server Framework**
- Express.js with TypeScript
- RESTful API design pattern
- Middleware-based request processing

**API Structure**
- CRUD endpoints for four main content types:
  - `/api/diary-entries` - Personal diary posts
  - `/api/notes` - Categorized notes with tagging
  - `/api/gallery-images` - Image portfolio with descriptions
  - `/api/videos` - Video content with thumbnails and metadata

**Data Validation**
- Zod schemas shared between frontend and backend
- Runtime type validation for API requests
- Drizzle-Zod integration for database schema validation

**Storage Strategy**
- Abstract storage interface (`IStorage`) for flexibility
- In-memory storage implementation (`MemStorage`) for development
- Designed to support PostgreSQL through Drizzle ORM in production

### Database Design

**ORM & Schema Management**
- Drizzle ORM configured for PostgreSQL
- Schema-first approach with TypeScript type inference
- Migration support via Drizzle Kit

**Data Models**
- `users` - User authentication (username, hashed password)
- `diary_entries` - Personal diary posts with title, content, mood, date
- `notes` - Categorized notes with tags array and date
- `gallery_images` - Image portfolio with URL, title, description
- `videos` - Video content with thumbnail, embed URL, duration, category

**Schema Features**
- UUID primary keys via `gen_random_uuid()`
- Automatic timestamp tracking (`created_at`)
- Text array support for tags
- Shared schema types exported from `shared/schema.ts`

### Development Tooling

**Type Safety**
- Strict TypeScript configuration across client, server, and shared code
- Path aliases for clean imports (`@/`, `@shared/`, `@assets/`)
- Compile-time type checking without emit

**Development Experience**
- Hot module replacement via Vite
- Replit-specific plugins for runtime error overlays and dev banners
- Centralized logging for API requests
- File-based routing structure

**Code Quality**
- ESM modules throughout the codebase
- Consistent formatting with component-based architecture
- Separation of concerns between client, server, and shared code

## External Dependencies

### Core Libraries
- **@neondatabase/serverless** - PostgreSQL serverless driver for Neon database
- **drizzle-orm** - TypeScript ORM for type-safe database queries
- **drizzle-zod** - Integration between Drizzle schemas and Zod validation

### UI Component Libraries
- **@radix-ui/react-*** - Comprehensive set of unstyled, accessible UI primitives (accordion, dialog, dropdown, popover, etc.)
- **class-variance-authority** - Type-safe variant API for component styling
- **tailwindcss** - Utility-first CSS framework
- **lucide-react** - Icon library for consistent iconography

### Form Handling
- **react-hook-form** - Performant form management
- **@hookform/resolvers** - Validation resolver integration
- **zod** - TypeScript-first schema validation

### Data Fetching
- **@tanstack/react-query** - Powerful async state management with caching

### Date & Time
- **date-fns** - Modern date utility library

### Session Management
- **connect-pg-simple** - PostgreSQL session store for Express

### Additional Frontend Libraries
- **cmdk** - Command menu component
- **embla-carousel-react** - Carousel/slider functionality
- **vaul** - Drawer/sheet component primitives

### Development Dependencies
- **vite** - Next-generation frontend build tool
- **tsx** - TypeScript execution for Node.js
- **esbuild** - Fast JavaScript bundler for production builds

### Fonts
- Google Fonts integration for Japanese and playful typography:
  - M PLUS Rounded 1c (rounded, friendly Japanese-compatible)
  - Noto Sans JP (professional Japanese sans-serif)
  - Quicksand/Comfortaa (playful, rounded accent fonts)