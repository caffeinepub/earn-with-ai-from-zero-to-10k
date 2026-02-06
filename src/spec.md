# Specification

## Summary
**Goal:** Replace the existing Cake King single-page site with a single-page sales landing page for the digital PDF ebook “Earn with AI from Zero to 10k” (₹199), optimized for WhatsApp conversions.

**Planned changes:**
- Replace the current homepage content with exactly 6 sections in this order: Hero, Product Preview, Why Choose This Guide, Social Proof/Reviews, Final CTA, Footer.
- Implement the Hero section with a prominent ebook cover image, the specified heading/subheading, and a “Contact on WhatsApp to Buy” CTA opening the provided WhatsApp link in a new tab.
- Implement the Product Preview section with the ebook image (smaller), price text “₹199 Only”, the provided one-line description, and a “Buy Now on WhatsApp” CTA using the same WhatsApp link.
- Implement “Why Choose This Guide?” with the exact title and the 5 user-provided bullet points.
- Implement Social Proof/Reviews with exactly 3 reviews matching the provided text verbatim (including the ⭐ symbol).
- Implement the Final CTA section with the specified headline/subtext and “Contact on WhatsApp Now” button linking to the same WhatsApp URL.
- Replace the Footer with the provided disclaimer text and WhatsApp number “+91 9279282274”.
- Ensure all WhatsApp CTAs use exactly: https://wa.me/919279282274?text=Hi%20I%20want%20to%20buy%20the%20AI%20ebook and remove/replace any old Cake King WhatsApp message links.
- Update styling to a clean, modern, professional tech look using a blue/green/white palette with clear spacing, readable typography, and mobile-first responsiveness.
- Add required generated images under `frontend/public/assets/generated` and render the ebook cover at minimum in both Hero and Product Preview (no backend image serving).

**User-visible outcome:** Visitors see a modern, mobile-friendly ebook sales landing page with the specified sections and copy, and can tap prominent WhatsApp buttons to contact the seller to buy the ebook.
