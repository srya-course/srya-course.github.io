# Design Guidelines: 2D Anime-Inspired Personal Blog

## Design Approach

**Reference-Based Approach**: Drawing from Japanese anime/illustration platforms like Pixiv, Booth.pm, and modern portfolio sites with kawaii aesthetics. The design embraces flat design principles with playful, youthful energy characteristic of 二次元 (2D/anime) culture.

**Core Principles:**
- Flat, geometric shapes with clean edges
- Playful, approachable visual language
- Clear information hierarchy with generous whitespace
- Cute iconography and decorative elements
- Smooth, subtle animations (minimal, purposeful)

## Typography

**Font Families:**
- Primary: 'Noto Sans JP' or 'M PLUS Rounded 1c' (rounded, friendly Japanese-compatible sans-serif)
- Accent: 'Comfortaa' or 'Quicksand' (playful, rounded for headings)

**Hierarchy:**
- Hero/Name: text-5xl to text-6xl, font-bold
- Section Headers: text-3xl to text-4xl, font-semibold
- Subheadings: text-xl to text-2xl, font-medium
- Body Text: text-base to text-lg, font-normal
- Labels/Meta: text-sm, font-medium

## Layout System

**Spacing Primitives**: Consistent use of Tailwind units: 4, 6, 8, 12, 16
- Component padding: p-6 to p-8
- Section spacing: py-16 to py-24
- Card gaps: gap-6 to gap-8
- Container max-width: max-w-6xl

**Grid System:**
- Diary/Notes: Single column, max-w-3xl for readability
- Drawings Gallery: grid-cols-2 md:grid-cols-3 lg:grid-cols-4
- Videos: grid-cols-1 md:grid-cols-2
- Profile Section: Centered single column, max-w-2xl

## Component Library

### Navigation
- Sticky top navigation with rounded pill-style links
- Decorative small icons next to menu items (star, heart, sparkle shapes)
- Mobile: Hamburger menu with slide-in drawer

### Hero/Profile Section
- Centered layout with avatar placeholder (circular, bordered with decorative frame)
- Name displayed prominently with decorative elements (stars, hearts, small geometric shapes scattered around)
- Self-introduction in friendly, conversational tone
- Contact info with icon (envelope) in subtle card

### Content Cards
**Diary Entries:**
- Soft rounded corners (rounded-2xl)
- Date badge in corner (small pill shape)
- Preview text with "Read more" link
- Decorative corner accent (small geometric shape)

**Drawing Gallery:**
- Image cards with hover lift effect
- Aspect ratio maintained (square or 4:3)
- Overlay with title on hover
- Lightbox modal for full view

**Notes Section:**
- Card-based layout with category tags (rounded pills)
- Icon indicators for note type
- Clean, organized list view with dividers

**Videos:**
- Embedded player cards with rounded corners
- Thumbnail with play button overlay
- Title and description below

### Decorative Elements
- Scattered geometric shapes (circles, triangles, stars) as background accents
- Corner decorations on major sections
- Dividers with small centered icons (sparkles, hearts)
- Subtle floating animation on decorative elements

### Buttons & Interactive Elements
- Primary buttons: Rounded-full, medium padding (px-8 py-3)
- Secondary actions: Outlined style with rounded borders
- Icon buttons: Circular with soft shadows
- Tags/pills: Small, rounded-full with minimal padding

## Images

**Hero Section:**
- Large decorative illustration or pattern background (full-width, subtle, non-photographic)
- Anime-style character illustration or abstract geometric pattern
- Profile avatar: Circular, 150-200px diameter with decorative border

**Gallery Section:**
- Placeholder anime-style artwork/illustrations (landscape, portrait, character art variations)
- Minimum 8-12 images showcasing variety
- Consistent aspect ratios within grid

**Decorative Elements:**
- Small SVG icons throughout (stars, hearts, sparkles, musical notes)
- Background patterns (subtle dots, lines, geometric shapes)
- Section divider illustrations (small cute characters or objects)

## Accessibility

- Maintain WCAG AA contrast ratios despite playful aesthetic
- Focus indicators with rounded outlines matching design language
- Aria labels for all interactive elements
- Semantic HTML structure with proper heading hierarchy

## Layout Specifications

**Page Structure:**
1. Navigation (sticky, 60-70px height)
2. Hero/Profile Section (auto height, centered content)
3. Content Sections (Diary, Drawings, Notes, Videos) - each with clear headers and decorative dividers
4. Footer (contact reiteration, social links, copyright)

**Content Density:**
- Generous spacing between sections (py-20 to py-24)
- Cards with breathing room (gap-6 to gap-8)
- Maximum 3-4 items per row on desktop
- Single column on mobile with comfortable padding

This design creates a warm, inviting anime-inspired blog that feels personal, creative, and distinctly 二次元 while maintaining professionalism and usability.