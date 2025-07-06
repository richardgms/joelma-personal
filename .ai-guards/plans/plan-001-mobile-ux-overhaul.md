---
id: plan-001
title: Mobile UX and Performance Overhaul
createdAt: 2024-07-26
author: CLOUD-4-SONNET
status: ready-for-implementation
---

## 🧩 Scope

This plan outlines a comprehensive mobile-first refactoring for key components of the website. The objective is to enhance the user experience on small viewports (≤ 640px) by improving layout, performance, accessibility, and usability, without altering the existing desktop design.

## ✅ Functional Requirements

- **Hero.tsx:**
  - The hero section must not take up the full screen height on mobile, occupying roughly 60% of the viewport height (`min-h-[60vh]`).
  - Content order must be reversed on mobile (`flex-col-reverse`), showing text content before the main image.
  - The image wrapper must be constrained to prevent layout shifts and maintain aspect ratio.
  - Call-to-action (CTA) buttons must be centered and have an adequate tap target size.

- **Transformations.tsx:**
  - The vertical list of transformations must be converted into a horizontal, swipeable carousel on mobile.
  - The carousel must use native CSS `scroll-snap` for a smooth, performant "locking" experience on each item.
  - Each item in the carousel must have a defined width (`w-[68vw]`) and aspect ratio (`aspect-[3/4]`).

- **StoryText.tsx:**
  - Long-form text paragraphs must be optimized for readability with a max-width and fluid typography (`clamp()`).

- **Plans.tsx:**
  - The multi-column grid must collapse to a single-column layout on mobile.
  - Badges on plan cards must be moved to an `absolute` position on mobile to save vertical space.

- **Testimonials.tsx:**
  - The layout must stack vertically (`flex-col`) on mobile.
  - The testimonial image must be appropriately sized for mobile screens.

- **Footer.tsx:**
  - Links must have increased padding to ensure easy tapping.
  - The entire footer must respect iOS safe-area insets to avoid UI elements being obscured.

## ⚙️ Non-Functional Requirements

- **Performance:**
  - All images must use `loading="lazy"` and `decoding="async"`.
  - A `sizes` attribute must be provided to all images to optimize LCP: `(max-width: 640px) 80vw, 33vw`.
  - The root element of the page must prevent horizontal overflow (`overflow-x-hidden`).

- **Accessibility:**
  - All interactive elements (links, buttons) must have a minimum tap target size of 44x44px.
  - Keyboard navigation must be clear; footer links will have a visible focus state (`focus-visible`).
  - Text must be legible, using fluid typography (`clamp()`) to adapt to different screen sizes.

- **Usability:**
  - The layout must feel native to mobile devices, using common patterns like horizontal carousels.
  - The UI must adapt to iOS device notches and home bars (`env(safe-area-inset-*)`).

## 📚 Guidelines & Packages

- **Guidelines:** Follow existing project structure using Next.js and Tailwind CSS utility-first classes. All changes for mobile should be prefixed with responsive modifiers (e.g., `sm:`, `md:`) to ensure they do not affect desktop views.
- **Packages:** No new packages required. The implementation will use features from `next/image` and `tailwindcss`.

## 🔐 Threat Model

- No new security threats are introduced. This plan is scoped to front-end layout and performance improvements and does not alter data handling, authentication, or server-side logic.

## 🔢 Execution Plan

1.  **Global CSS Setup (`app/globals.css`):**
    - Apply `overflow-x-hidden` to the root `body` or `html` element.
    - Add base styles to respect safe-area insets if not already present.

2.  **Component Refactoring (File-by-File):**
    - **`src/components/Hero.tsx`**:
      - Modify the main section wrapper: apply `min-h-[60vh] sm:min-h-screen`, `flex-col-reverse sm:flex-row`, and safe-area padding (`pt-[env(safe-area-inset-top)]`).
      - Adjust image wrapper and CTA button classes for mobile layout.
    - **`src/components/Transformations.tsx`**:
      - Refactor the main container to a `flex` element with `overflow-x-auto` and `scroll-snap` properties.
      - Apply `shrink-0`, `snap-start`, and sizing classes to child `figure` elements.
    - **`src/components/StoryText.tsx`**:
      - Update the `<p>` tag with `max-w-prose` and fluid text size using `text-[clamp(1rem,3.5vw,1.125rem)]`.
    - **`src/components/Plans.tsx`**:
      - Change the grid class to `grid sm:grid-cols-1 md:grid-cols-3`.
      - Adjust badge classes to be `absolute sm:static`.
    - **`src/components/Testimonials.tsx`**:
      - Change the wrapper to `flex flex-col sm:flex-row`.
      - Update image classes with `w-full max-w-[320px]`.
    - **`src/components/Footer.tsx`**:
      - Add safe-area padding classes to the footer element.
      - Add padding and `focus-visible` classes to all `<a>` tags within the footer.

3.  **Verification & Testing:**
    - Test all changes in a mobile viewport (e.g., Chrome DevTools, width < 640px).
    - Verify that no horizontal scrollbar appears.
    - Inspect tap targets to confirm they meet the 44x44px requirement.
    - Test on a physical iOS device (if possible) to confirm safe-area insets are working.
    - Verify that desktop layouts (width > 768px) remain completely unchanged. 