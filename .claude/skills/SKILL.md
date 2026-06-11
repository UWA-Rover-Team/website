# Design System Skill

## Overview
This design skill ensures all UI components follow a cohesive, professional design system. Every component must align with these specifications — no random Tailwind defaults or generic AI aesthetics.

## Typography Scale

**Base Font Family:** `font-sans` (system stack: `system-ui, -apple-system, sans-serif`)

| Level | Size | Weight | Line Height | Usage |
|-------|------|--------|-------------|-------|
| **Heading 1** | 2.5rem (40px) | 700 | 1.2 | Page titles, hero sections |
| **Heading 2** | 2rem (32px) | 700 | 1.3 | Section headings |
| **Heading 3** | 1.5rem (24px) | 600 | 1.4 | Subsection headings |
| **Heading 4** | 1.25rem (20px) | 600 | 1.5 | Card titles, form labels |
| **Body Large** | 1.125rem (18px) | 400 | 1.6 | Lead paragraphs, featured text |
| **Body** | 1rem (16px) | 400 | 1.6 | Standard body text, descriptions |
| **Body Small** | 0.875rem (14px) | 400 | 1.5 | Helper text, captions, metadata |
| **Label** | 0.75rem (12px) | 500 | 1.4 | Form labels, badges, tags |

**Guidance:**
- Never use arbitrary font sizes like `text-17px` or `text-2.3xl`
- Always use the scale above — it's intentional for visual hierarchy
- Maintain 1.4–1.6 line height for readability; never go below 1.4

---

## Spacing System (8px Grid)

All spacing, padding, margins, and gaps use an 8px base unit. Never use arbitrary spacing.

| Token | Value | Usage |
|-------|-------|-------|
| **xs** | 4px | Tight internal spacing (rare) |
| **sm** | 8px | Tight element spacing |
| **md** | 16px | Standard spacing between elements |
| **lg** | 24px | Larger gaps, section separation |
| **xl** | 32px | Major section spacing |
| **2xl** | 48px | Layout-level spacing |
| **3xl** | 64px | Hero/full-width spacing |

**Tailwind Mapping:**
- `gap-1` = 4px (xs)
- `gap-2` = 8px (sm)
- `gap-4` = 16px (md)
- `gap-6` = 24px (lg)
- `gap-8` = 32px (xl)
- `gap-12` = 48px (2xl)
- `gap-16` = 64px (3xl)

**Guidance:**
- Never use `gap-3`, `gap-5`, `gap-7`, `gap-9` — these break the grid
- Padding inside containers should be `md` (16px) on mobile, `lg` (24px) on desktop minimum
- Margin between major sections should be `2xl` (48px) minimum

---

## Color Tokens

### Primary Colors
- **Primary**: `#0066CC` (blue) — CTAs, active states, primary interactions
- **Primary Dark**: `#004FA3` — Hover state, darker backgrounds
- **Primary Light**: `#E6F0FF` — Backgrounds, light emphasis

### Neutral Colors
- **Text Primary**: `#1A1A1A` — Headlines, body text
- **Text Secondary**: `#666666` — Helper text, metadata, disabled states
- **Text Tertiary**: `#999999` — Placeholders, very muted text
- **Background**: `#FFFFFF` — Default backgrounds
- **Background Subtle**: `#F5F5F5` — Subtle backgrounds, borders
- **Border**: `#E0E0E0` — Dividers, subtle borders
- **Border Dark**: `#CCCCCC` — Stronger borders, input outlines

### Semantic Colors
- **Success**: `#00B341` — Success states, confirmations
- **Warning**: `#FF9800` — Warnings, caution states
- **Error**: `#D32F2F` — Errors, destructive actions, negative feedback
- **Info**: `#0099FF` — Informational content, tooltips

### Usage Rules
- **No random hex codes** — always use tokens above
- **Text on light backgrounds:** Use Text Primary (`#1A1A1A`)
- **Text on colored backgrounds:** Ensure WCAG AA contrast minimum (4.5:1)
- **Borders:** Use Border (`#E0E0E0`); use Border Dark only for focus states
- **Backgrounds:** Use Background Subtle for secondary containers, Background for primary

---

## Component Patterns

### Button
```
Size variants:
- sm: text-label, padding-sm, height 32px
- md: text-body-small, padding-md, height 40px (default)
- lg: text-body, padding-lg, height 48px

States:
- Default: bg-primary, text-white, border-none, cursor-pointer
- Hover: bg-primary-dark, shadow-md
- Active: scale-98, shadow-sm
- Disabled: bg-background-subtle, text-text-tertiary, cursor-not-allowed
- Ghost (outline): border border-primary, text-primary, bg-transparent
- Ghost Hover: bg-primary-light

Examples:
<button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
  Click me
</button>
```

### Card
```
Structure:
- Padding: md (16px) on mobile, lg (24px) on desktop
- Border: 1px solid border (subtle)
- Border Radius: 8px
- Background: white
- Shadow: subtle (0 1px 3px rgba(0,0,0,0.1))
- Hover: shadow-md, slight scale up (1.02)

Example:
<div className="bg-white border border-gray-200 rounded-lg p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow">
  Content here
</div>
```

### Form Input
```
Structure:
- Height: 40px (md size)
- Padding: 8px 12px (sm padding)
- Border: 1px solid border-dark
- Border Radius: 6px
- Background: white
- Text: body-small, text-primary
- Placeholder: text-tertiary

States:
- Default: border-dark, bg-white
- Focus: border-primary, ring-2 ring-primary-light, outline-none
- Error: border-error, ring-2 ring-error-light
- Disabled: bg-background-subtle, border-border, text-text-tertiary

Example:
<input 
  type="text"
  className="w-full h-10 px-3 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
  placeholder="Enter text..."
/>
```

### Badge / Tag
```
Structure:
- Padding: 4px 8px
- Text: label (12px, 500 weight)
- Border Radius: 12px (pill)
- Background: background-subtle
- Text color: text-secondary

Variants:
- Default: bg-background-subtle, text-text-secondary
- Primary: bg-primary-light, text-primary
- Success: bg-success (with 10% opacity), text-success
- Error: bg-error (with 10% opacity), text-error

Example:
<span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
  Tag
</span>
```

---

## Design Principles

### ✅ Do This
- Use the typography scale — it creates visual hierarchy
- Stick to the 8px grid — everything aligns cleanly
- Use semantic color tokens — consistency matters
- Add proper whitespace — breathing room improves readability
- Test contrast ratios (WCAG AA minimum 4.5:1)
- Use subtle shadows and transitions (not flashy)
- Include focus states for accessibility
- Round corners at 6-8px for a modern feel

### ❌ Avoid Generic AI Aesthetics
- **Don't use gradients everywhere** — use solid colors with semantic meaning
- **Don't add unnecessary animations** — motion should have purpose (feedback, guidance)
- **Don't use neon or extremely saturated colors** — they're jarring
- **Don't over-round everything** — 6-8px corners, not 20px+
- **Don't use multiple competing visual systems** — one consistent design language
- **Don't add decorative illustrations** — focus on clarity and function
- **Don't use generic "AI" fonts or effects** — professional simplicity wins
- **Don't ignore spacing** — cramped layouts feel cheap and hard to use
- **Don't mix multiple shadow systems** — one subtle shadow language
- **Don't use high-contrast borders everywhere** — reserve for important elements

---

## Implementation Checklist

When Claude Code builds a UI component:
- [ ] Typography uses the scale above (never arbitrary sizes)
- [ ] All spacing aligns to 8px grid
- [ ] Colors use semantic tokens (no `#ABC123`)
- [ ] Component follows one of the patterns above
- [ ] Focus states are visible and accessible
- [ ] Contrast ratio ≥ 4.5:1 (WCAG AA)
- [ ] No excessive animations or decorative elements
- [ ] Whitespace is intentional and generous
- [ ] Mobile and desktop layouts are considered

---

## Resources
- **Tailwind Config:** Use 8px base spacing, custom color tokens from this skill
- **Accessibility:** Test with browser DevTools, ensure keyboard navigation works
- **Testing:** Verify on real devices, not just viewport simulations
