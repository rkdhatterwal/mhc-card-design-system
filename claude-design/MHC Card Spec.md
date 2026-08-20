# MHC product card — design spec

Paste this into the mobile PDP project as context. Everything below is settled unless
marked **OPEN**.

## Type
- Poppins throughout, weights 400 / 600 / 700.
- Copy stack, in this order, tight leading (line-height 1.12), all caps:
  - `MODERN HERB CO` — 15px, weight 400, colour #6B6A6B
  - `THCA LIQUID DIAMONDS` — 20px, weight 700, colour #393839
  - `POD KIT` — 15px, weight 400, colour #6B7280
- All product titles share one size — the largest that fits every card, not per-card shrink.
- Minimum 11px for any metadata.

## Colour
- Text and glyphs: `#393839`
- Strokes: `#807E7F` (lighter tone of the same near-black family)
- Muted informational gray: `#9CA3AF`
- Warm neutrals: `#F0EAE4` putty, `#F9F8F4` beige
- Primary CTA + star fill: `#e3e829`
- Effect circles (three-colour, light): sleep `#DCEDEC`, energy `#F7F7DD`, balance `#F0EAE4`
- No blue-purple anywhere. No gradients. No shadows except deliberate ones.

## Geometry
- Strokes 1–1.5px. Add-to-cart is 1.5px, same as every other control — never heavier.
- Radii: card 14px, image well 13px, controls 9px (selector, dropdown, stepper, add-to-cart).
- Effect icons and count chips share the control radius, not a pill.
- Dropdown radius always matches the trigger that opens it.
- One vertical spacing step: 8px through the whole stack.

## Locked content
- Potency word (`MAX`) top-left of the product photo — no background, no border, no chip.
- Brand line above the product title, not over the photo.
- Rating: one star, `#e3e829` fill with a `#807E7F` outline, numeric average beside it.

## Icons
- MHC effect set: solid **Moon** (sleep), **Lightning** (energy), **Rainbow** (balance).
- Glyphs `#393839`. Line-weight versions exist as an alternate — **OPEN**.

## Informational vs interactive
Informational (effects, counts) must never look pressable. Chosen approach:
effects and counts as one light-gray block (`#9CA3AF`), effect glyphs on the top line,
counts (`1ct / 5ct / 20ct`) directly beneath, both on 8px spacing, no tiles / fills /
outlines. Only the dropdown and add-to-cart carry stroke and fill.

## Variant dropdown
Row order: effect icon → flavour → count → price. Count small and gray immediately
before the price; flavour gets all remaining width. Selected state shows the same
arrangement in the trigger.

## Buy controls — **OPEN**
Quantity stepper removed, add-to-cart full width. Rationale: at 375px two controls on one
row shrink add-to-cart to ~half width, and the stepper's − / + are 30px, under the 44px
minimum tap target. Counter-argument: if multi-pack buyers routinely add 2–3 from the
grid, keep it. Decide from sales data.

## Other settled behaviour
- Price stated once — the selected variant's price, not a range.
- Sold out shows the word "Sold out" in place of the price, not just a faded button.
- Promo badges flat: 1px stroke, no drop shadow.
- Image well: **OPEN** — white or `#F0EAE4`.

## Platform note
Shopify Dawn, heavily customised. Flag anything requiring theme surgery vs. a
section/CSS change.
