# Modern Herb Co — Design System

Modern Herb Co (MHC) is a direct-to-consumer hemp/THC brand selling gummies, live
rosin carts, disposable pod kits and sample pouches. The storefront runs on
**Shopify Dawn, heavily customised**. This design system is built from a working
redesign of the mobile product card and product listing page (PLP), plus the
settled card specification that came out of it.

The system covers one product surface: the **customer-facing storefront** —
product listing page, product card, variant selection, subscription options and
the quick-view (mini PDP) modal. There is no admin, app or marketing-site
material in the source, so none is invented here.

## Sources

Everything in this system was read from a mounted local codebase; nothing was
recreated from memory.

| Source | What it gave |
| --- | --- |
| `claude-design-update/MHC Card Spec.md` | The settled product-card spec: type stack, colour list, geometry, locked content, icon set, open questions |
| `claude-design-update/redesign-comparison.html` | The primary implementation — every accepted change applied. Palette, card markup, variant dropdown, subscribe rows, quick view, app bar, bottom nav, footer |
| `claude-design-update/tailwind.config.js` | The same palette as named tokens (`mhcaccent`, `mhcink`, `mhcstroke`, …), radii, shadows, font stacks |
| `claude-design-update/Redesign Comparison.dc.html` | The A/B version with the toggle panel and the "current" column — source of record for the pre-redesign card |
| `claude-design-update/proposed-cards.html`, `proposedcards.html`, `redesign-comparison-tailwind.html`, `out.css`, `input.css` | Tailwind-compiled variants of the same page |
| `claude-design-update/Mobile Product Card Grid.dc.html` | Earlier iteration (used Assistant, not Poppins — superseded) |
| `claude-design-update/uploads/*.png|.jpg` | Product renders (copied into `assets/products/`) and annotated screenshots of the live storefront and the redesign (kept in `refs/`) |

No Figma file, GitHub repository or slide deck was provided. No standalone logo
file exists in the source — see **Logo** below.

## Index

**Root**
- `styles.css` — the one file consumers link. `@import` lines only.
- `tokens/` — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `radius.css`, `elevation.css`, `motion.css`, `base.css`
- `thumbnail.html` — the system's homepage tile
- `SKILL.md` — Agent Skills wrapper
- `readme.md` — this file

**Assets**
- `assets/products/` — five product renders, transparent PNG / JPG
- `assets/icons/effects/` — the three MHC effect glyphs as SVG
- `refs/` — annotated screenshots of the live site and the redesign (reference only, not brand assets)

**Foundations** — `guidelines/*.html`, 20 specimen cards across Colors, Type, Spacing, Geometry and Brand.

**Components**
- `components/core/` — `Icon`, `EffectIcon`, `Button`, `IconButton`, `Chip`, `Rating`, `QuantityStepper`
- `components/product/` — `ProductCard`, `VariantSelect`, `PurchaseOptions`, `EffectCountRow`, `OptionTile`, `SizeButton`
- `components/navigation/` — `TopAppBar`, `BottomNavBar`, `SiteFooter`
- `components/feedback/` — `Modal`, `PerksBar`

**Templates**
- `templates/product-listing/` — Product listing page. A shop-all grid of real product cards, wired to the variant dropdown, subscribe rows and add-to-cart. Copy the folder into a project and edit `ds-base.js`'s base path.

**UI kits**
- `ui_kits/storefront/` — the shop-all PLP with a working quick view (`index.html`, `PlpScreen.jsx`, `QuickView.jsx`, `data.js`)

## Content fundamentals

**Voice.** Flat, transactional, unadorned. The storefront states what a thing is
and what it costs. No lifestyle language, no wellness claims, no jokes. The
longest sentence in the entire source is 14 words.

**Person.** Second person, and only where an action or a benefit needs an owner:
"Save 30% on your first order, then 10% on every order after." Never "we".
Never "I". Product copy itself is impersonal — a noun phrase, not a sentence.

**Casing.** Three registers, used consistently:
- Product names: ALL CAPS — `THCA LIQUID DIAMONDS`, `PEACHES & CREAM`, `OG KUSH`
- Everything else: Title Case for labels and controls — `Add to Cart`,
  `One-time purchase`, `Subscribe & Save`, `Fast Shipping`, `Max Potency`,
  `Sold Out`, `Continue Shopping`
- Sentence case only inside the one multi-word explanatory line (the subscribe note)
- Eyebrows and dropdown group headers are caps with tracking: `ALL PRODUCTS`,
  `SLEEP (INDICA)`

**Product naming.** Four stacked lines, in this reading order: form factor
(`Pod Kit`, `Gummies`, `Rosin Gummies`), product name (`THCA LIQUID DIAMONDS`),
brand line (`Modern Herb Co`), then variants. The brand line sits under the
title, never over the photo.

**Effect vocabulary is fixed.** Effects get a plain word, not a strain name, on
the card: **Sleep / Happy / Energy**. Strain names (**Indica / Hybrid /
Sativa**) appear only in the dropdown group header and in the quick view's
flavour chips, always paired: `Sleep (Indica)`. `Balance` is the label form of
`Happy`. Never "relaxing", "uplifting", "euphoric", or any effect claim beyond
those three words.

**Numbers.** Counts are written tight and lowercase: `1ct`, `5ct`, `20ct`,
`30ct`, `15ml`, `1g`, `2g`. Prices are stated once, for the selected variant —
never a range (`$5 – $50` was explicitly rejected). Money is `$5`, or
`$15.00` where a total is calculated. Ratings show one number and a
parenthesised count: `4.5 (2)`.

**Promotions.** Short, shouted, no punctuation beyond an exclamation mark:
`B2G1`, `SALE`, `New!`, `SAVE 30%`.

**Unavailable states are spoken, not implied.** A sold-out variant shows the
words `Sold Out` in place of the price, struck through in the list — never just
a faded button.

**Emoji: never.** There is not one emoji anywhere in the source, and none
belongs here. Unicode is used for exactly two glyphs: the checkmark `✓` after
an add-to-cart, and `©` in the footer.

## Visual foundations

**The idea.** Warm off-white paper, near-black ink, one acid-yellow accent, and
everything drawn with a thin line. It reads like a printed spec sheet more than
a web store: no depth, no colour beyond what's needed to tell things apart.

**Colour.** Backgrounds are warm neutrals — page `#faf9f5`, tiles `#F7F6F1`,
beige `#F9F8F4`, putty `#F0EAE4`. Cards are pure white. Text is one near-black
family (`#393839`) with three greys below it (`#4A4A49`, `#5f5e5f`, `#9CA3AF`).
Exactly one accent, `#e3e829`, doing three jobs: add-to-cart fill, selected
dropdown row, rating-star fill. Cool greys appear only in disabled states
(`#e5e7eb` / `#d1d5db` / `#9ca3af`). **No blue-purple anywhere. No gradients.**
The three effect tints (`#DCEDEC` sleep, `#F0EAE4` balance, `#F7F7DD` energy)
are the only other colours in the system, and they only ever sit behind an
effect glyph.

**Type.** Poppins for page chrome (app bar, headings, footer, button labels);
Space Grotesk for card copy, chips and controls; a broken/gothic display face
(BrokenScript, see Caveats) for product titles. Product titles are all caps at
20px on a card, 26px in the quick view, on 1.12 leading. **Every title in a grid
gets one shared size** — the largest that fits all of them, not per-card shrink.
11px is the hard floor for any metadata.

**Spacing.** The card stack runs on a single 8px step from top to bottom — there
is no larger "section" gap. Card padding is 11px on all sides. Inside a block,
tiles sit 4–6px apart. Values are the source's literals (5px, 9px, 11px, 13px);
do not round them to a 4/8 grid.

**Corner radii.** Card 14px, image well 13px, every control 9px — selector,
dropdown, stepper, add-to-cart, chips, effect tiles. A dropdown's radius always
matches the trigger that opens it. Effect icons and count chips take the control
radius, not a pill; the only 999px pill in the system is the quick-view promo
badge.

**Borders and cards.** A card is a white rectangle with a **1px `#807E7F`
stroke and no shadow**. Controls take 1.5px of the same stroke — and add-to-cart
is 1.5px too, never heavier than its neighbours. Hairlines and dividers are
`#e3e2df`. Promo badges are flat: 1px stroke, no drop shadow.

**Shadows** are reserved for things that genuinely float, and there are exactly
four: carousel slide `0 10px 30px rgba(17,24,39,.08)`, nav/arrow
`0 4px 12px rgba(17,24,39,.10)`, dropdown `0 8px 28px rgba(0,0,0,.18)`, modal
panel `0 24px 60px rgba(17,24,39,.35)`. No inner shadows anywhere.

**Backgrounds.** Flat colour only. No photography behind content, no full-bleed
imagery, no illustration, no repeating pattern, no texture, no grain, no
gradient. The only image on any surface is the product itself.

**Imagery.** Cut-out product renders on a white well, no drop shadow. On the
card the photo is deliberately oversized and pushed:
`transform: translateX(15%) scale(1.55)` inside a 34%-wide well, so the product
bleeds off the left edge. In the quick view the same render is contained in a
1:1 white frame. Colour of the renders is warm and neutral — the packaging's own
acid-yellow reads as an intentional echo of the accent. No filters, no duotone,
no black and white.

**Transparency and blur.** Used once: the quick-view scrim,
`rgba(57,56,57,.6)` with a 4px backdrop blur. Nothing else in the system is
translucent — there are no protection gradients, no frosted capsules, no
scrim-over-image treatments, because no text is ever set over an image.

**Animation.** Almost none, and nothing decorative. Only two transitions exist:
`border-color 150ms ease` on controls that change selection state, and
`background 150ms ease` on carousel arrows. No entrance animation, no fade-in,
no bounce, no easing curves beyond `ease`. The one timed behaviour is the
add-to-cart checkmark, held for 1300ms.

**Hover.** Bare icon buttons and links drop to 80–90% opacity. App-bar nav links
turn `#e3e829`. Dropdown rows that are not selected fill `#F2F4C4` — a pale
tint of the accent. Circular buttons and bottom-nav items fill
`--surface-raised` (`#f4f4f0`). Selectable controls move their stroke from
hairline to `#807E7F`.

**Press.** Uniformly `transform: scale(.95)`. No colour change on press, no
depth change.

**Selected state.** Stroke goes to `#393839` and the fill to `#F7F6F1`; in the
variant dropdown the whole row fills with the accent instead. Radios are a 15px
ring (18px in the quick view) with a 7px ink dot.

**Layout.** The app bar is fixed at 64px. Below 768px a bottom tab bar is fixed
at 80px and the footer is hidden; at 768px and up the tab bar disappears, the
footer appears, the app bar gains nav links and labels, and gutters go 20px →
40px. Content maxes at 1280px (1400px on the PLP grid). The PLP grid is one
column on mobile and `repeat(auto-fit, minmax(380px, 1fr))` above it. Minimum
tap target is 44px — the reason the card's quantity stepper was removed.

**Informational vs interactive** is the system's central rule. Effects and
counts are flat cream tiles with no stroke and no fill contrast, so they cannot
be mistaken for controls. Only the variant dropdown and add-to-cart carry stroke
*and* fill.

## Iconography

**There is no icon font.** The source pages carry every glyph inline as SVG.
An earlier reference page used Material Symbols; the shipped implementation
replaced it with inline paths so the page pulls no second font. Keep it that
way.

**Two sets:**

1. **UI glyphs** — 24×24 viewBox, `fill: none`, `stroke: currentColor`, round
   caps and joins, 1.8 stroke weight. Feather/Lucide-shaped but hand-written in
   the source, so they are reproduced here verbatim rather than linked from a
   CDN: `menu`, `person`, `bag`, `store`, `explore`, `close`, `chevleft`,
   `chevright`, `chevdown`, `share`, `minus`, `plus`, `truck`, `verified`,
   `sync`, `cancel`, `tag`, `users`, `play`, `pdf`, `star`, `cartplus`.
   Exceptions to the 1.8 weight: chevrons and ± are 2.2, `cartplus` is 2 on a
   26×26 box, `star` is 1.4 and is the only glyph given a fill.
   Use them through `Icon`; do not draw new ones without adding them to
   `ICON_PATHS`.

2. **MHC effect glyphs** — solid, 16×16 viewBox, filled with `currentColor`
   (always `#393839`): **Moon** = sleep/indica, **Lightning** =
   energy/sativa, **Rainbow** = balance/hybrid. Files in
   `assets/icons/effects/`, component `EffectIcon`. Line-weight alternates exist
   in the brand but were left unresolved in the spec — ship solid. These are the
   brand's most recognisable graphic element; never substitute a leaf, a sun, or
   a generic pill icon.

**No emoji, ever.** Unicode is used for `✓` and `©` only. No PNG icons, no
sprite sheets, no icon CDN.

## Logo

**No logo file was provided.** The MHC blackletter monogram appears only baked
into the product-render photography. The source's own app bar renders the brand
as plain type — uppercase, 15px, weight 400, 0.5px tracking — and this system
does the same everywhere a mark would go, including `thumbnail.html`. Nothing
was drawn or reconstructed. Send the real logo files and they will be dropped
into `assets/` and wired into `TopAppBar`.

## Intentional additions

Everything else in `components/` has a direct counterpart in the source. These
two are wrappers added for reuse, not new design:

- **`Icon`** — a single component around the source's inline `ICON` map, so the
  glyph paths live in one place instead of being pasted per call site.
- **`Chip`** — the source emitted potency chips, count chips, effect words,
  shipping notes and promo badges as five near-identical inline spans; they are
  one component with four tones here. Values are unchanged.

## Caveats and substitutions

1. **BrokenScript is missing.** Product titles on the live storefront are set in
   BrokenScript (FontFont, licensed). No binary shipped with the source, so
   `--font-display` lists it first and falls through to Space Grotesk — which is
   exactly what the source pages themselves render, and what the screenshots
   show. Upload `BrokenScript.woff2` and add the `@font-face` to
   `tokens/fonts.css` for the real thing. No third-party lookalike was
   substituted.
2. **Two spec/implementation disagreements**, resolved in favour of the shipped
   render (which the screenshots confirm):
   - The spec sets the brand line and form factor at 15px (`#6B6A6B` /
     `#6B7280`); the implementation's fit routine forces both to 12px
     (`#4A4A49` / `#393839`). The components use 12px.
   - The spec keeps a quantity stepper as an open question; the implementation
     removed it from the card. It exists here only as `QuantityStepper`, for the
     quick view.
3. **Open questions from the spec, unresolved:** whether the card's image well
   is white or `#F0EAE4` (white is used), whether line-weight effect glyphs
   ship as an alternate, and whether the card keeps a quantity stepper.
4. **No PDP.** The quick-view modal is the deepest product surface in the
   source. A full product detail page, cart, checkout, account and search do not
   exist in the material and were not invented.
