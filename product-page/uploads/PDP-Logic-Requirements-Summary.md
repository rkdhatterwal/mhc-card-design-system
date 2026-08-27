# Custom PDP with Flavor & Size Variant Selectors — Logic & Design Requirements Summary

A consolidated record of every functional requirement, design rule, and behavioral spec given while building the custom PDP (Product Detail Page) experience, from the original standalone section through the later rebuild as native Product Information blocks. Organized by topic, not chronology.

---

## Overview of Product Offerings & Purchase Scenarios

Requirements:   
*Types of Product Variant Scenarios:* 

* Some products have no variants.  
  * Some offer subscription plans.   
  * Some do not offer subscription plans.  
* Some products may have flavor variant options only.    
  * Some offer subscription plans.   
  * Some do not offer subscription plans.  
  * Some may offer subscription plans on some variants and not others.   
* Some products may have size variant options only.  
  * Some offer subscription plans.   
  * Some do not offer subscription plans.  
  * Some may offer subscription plans on some variants and not others.   
* Some products may have both flavor and size variant options.    
  * Some offer subscription plans.   
  * Some do not offer subscription plans.  
  * Some may offer subscription plans on some variants and not others. 

## Guide to Desired Elements/Blocks

* Custom Product Information Grid:   
  * A page section populated from variable data that is unique to each product and, if applicable, selected variant.  
  * Separated into two columns of equal width.   
  * Columns both have sticky behavior so whichever column is longer will scroll while the shorter column remains sticky.  
    * **Column A (Left):**   
      * Hero Image  
        * Main image visible on the PDP, showcasing product appearance and characteristics.   
        * Hero image is swipeable on mobile and clickable on desktop; both actions populate additional images in carousel, if present.  
        * Defaults to populating the product render, which is either:  
          * *If no variants exist, or no variant images exist:* Main product image  
          * *If variants exist with images:* Variant image  
      * Image Carousel  
        * Carousel of thumbnails below hero image container.  
        * Scrollable / swipeable left to right.  
        * If enough images exist in the carousel to extend beyond the limitation of the column width, the last visible image is cut off to indicate to the user that they can scroll to see additional images  
        * Selecting an image in the carousel populates that image in the hero image container  
      * Photos  
    * **Column B (Right):**  
      * Heading:  
        * Brand  
          * Populates from Shopify native Vendor field.

        * Product Line Name  
          * Populates from Product-level metafeld custom.product\_line  
            * Fall back to native Product title field if this metafield has no entry.  
        * Product Type  
          * Populates from Shopify native Type field.   
          * Do not populate this if there is no entry in custom.product\_line and the fall back to native Product title is active. 

      * Reviews summary line:   
        * Rating & number of reviews  
        * Populates from [Judge.me](http://Judge.me) reviews  
        * If no reviews exist, this should not be present.

      * Description:  
        * *If variants exist:*   
          * Dynamic & populates from Variant-level metafield custom.variant\_description  
          * Updates as variant option combinations are selected  
        * *If no variants exist, or no entry present in custom.variant\_description:*  
          * Populates from Shopify native parent product description.

      * Flavor Selector:  
        * Populates only if variants have Flavor options.  
        * Populates variant flavor options as card (also referred to as swatches) according to design. (Design differentiates between flavor and size card shape.)   
        * For products with both Flavor and Size variant options, Flavor options are the top variant selector section. regardless of the order configured in Shopify admin.  
        * Defaults to selecting the **first** listed available flavor variant option.   
        * Selected variant option highlighted in green. (Hex:   
        * Flavor options that do not have an available variant for the currently selected size should be visible but greyed out. (These should still be clickable so available sizes for that flavor can be viewed.)  
        * Flavor options that exist but have no available variants are not displayed. 

      * Size Selector:   
        * Populates only if variants have Size options.   
        * Populates size options as cards (also referred to as swatches) according to design. (Design differentiates between flavor and size card shape.)  
        * Size cards display both the name of the size option as well as the price.  
        * For products with both Flavor and Size variant options, Size options are the bottom variant selector section.  
        * Defaults to selecting the **last** listed available size variant option.   
        * Selected variant option highlighted in green. (Hex:   
        * Size options that do not have an available variant for the currently selected flavor should be visible but greyed out. (These should still be clickable so available flavors for that flavor can be viewed.)  
        * Size options that exist but have no available variants are not displayed.

      * Delivery Frequency (Subscription) Widget:  
        * Only present when subscription plans are present.  
          * If one or more variant but not all variants don’t have subscription plans, hide this widget when that variant is selected but reveal when variants with subscriptions are selected.  
          * Displays purchase frequency options:	  
            * Subscription  
            * One-time  
        * Only one purchase frequency option can be selected at a time.   
        * Subscription is default selection and appears above One-time  
        * Subscription details hardcoded:  
          * Save 30% on your first order  
          * Ongoing 10% off thereafter  
          * Swap or skip anytime  
          * Cancel after 2nd delivery (Have claude make an X icon in the same style as the others)  
          * Join 200k+ happy customers  
          * *Add conditional logic:*  
            * If the product type is “Pod Starter Kit” add the following bullet point:   
              * Kits convert to refills after first shipment with reduced cost (Use the same arrow circle icon as swap/skip)  
        * Subscription plan dropdown options populate from Recharge subscription plans

      * Quantity Selector & Add to Cart Buttons  
        * If a higher quantity than 1 is selected using the quantity selector, the total price is shown in the Add to Cart button; 

* Existing Blocks in Product Information Section:   
  * There are several blocks in the existing Shopify product information section that 

* Additional Visual Components that Exist Within Elements:  
  * Strength Indicator  
  * Flavor & Size Icons  
  * Strain Type Label  
  * Variable Labels:   
    * Hero Image  
    * Flavor Option Swatches  
    * Size Option Swatches  
    * Flavor Name  
    * Size Name

*Visibility & Order of Variant Selector Blocks:*

* No variants:   
  * Flavor and size selection blocks are not present.  
* No variant option titled “Flavor”:  
  * Flavor selection block is not present.  
* No variant option titled “Size”:  
  * Size selection block is not present.

*Visibility & Order of Frequency Selector (Subscription Widget):* 

* Subscription option should be on top and the default selection.   
  * "Best Value" should be larger font size without increasing height of black header.

  * Instead of 1 month subscription with 30%, replace this with Subscribe and Save and decrease size of "Save 30%" label so all of this fits in one line.

  * Subscription details and the icons should be slightly larger font size.

  * Hardcode the subscription details with existing icons and change copy to:  
    * Save 30% on your first order  
    * Ongoing 10% off thereafter  
    * Swap or skip anytime  
    * Cancel after 2nd delivery (Have claude make an X icon in the same style as the others)  
    * Join 200k+ happy customers

  * Add conditional logic:  
    * If the product type is “Pod Starter Kit” add the following bullet point:   
      * Kits convert to refills after first shipment with reduced cost (Use the same arrow circle icon as swap/skip)  
* One-time is second option. 

  \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

  Variant Selection & Availability Logic

- **Default selection rule:** the *first* flavor with any available variant, then the *last* available size for that flavor. This is a deliberate, custom rule — not Shopify's own `selected_or_first_available_variant` default.  
- If the currently selected flavor/size combination becomes unavailable (e.g., after changing one dimension), re-apply the same default rule rather than leaving an invalid or unexplained state.  
- **Availability must be computed independently**, from the product's own variant data — not by relying on the native variant picker's own disabled-state marking. (Confirmed via live testing: native disabled-marking was unreliable and did not consistently flag real sold-out variants or nonexistent option combinations.)  
- **Two-directional dimming:**  
  - Selecting a **size** dims flavors that aren't available at that size.  
  - Selecting a **flavor** dims sizes that aren't available for that flavor.  
- Dimmed options remain **clickable**. Clicking a dimmed option auto-switches the *other* dimension to a valid pairing, rather than leaving the shopper on an unexplained sold-out combination.  
- A flavor (or size) with **zero available variants anywhere** — not just at the current selection — should not render at all, rather than showing as a permanently disabled/dimmed option.  
- **Flavor options must always render before Size options**, regardless of block order in the theme editor. This is hardcoded in the template, not dependent on drag-and-drop position.  
- Must correctly handle both failure modes: a combination that is genuinely **out of stock** (a real variant, `available: false`) and a combination that **doesn't exist at all** as a variant.

---

## 2\. Frequency Selection (Presence of Subscription Widget)

## 

## 

## Metafield-Driven Content

| Metafield | Used for |
| :---- | :---- |
| `variant.metafields.custom.strain_type` | Strain pill (Indica / Sativa / Hybrid) with matching glyph icon |
| `variant.metafields.custom.flavor_image` | Flavor swatch image |
| `variant.metafields.custom.flavor_label` (falls back to `.label`) | Corner badge on the flavor swatch (e.g. "Sale," "Best Seller") |
| `variant.metafields.custom.size_icon` (falls back to `.size_image`) | Size swatch icon |
| `variant.metafields.custom.variant_description` (rich text) | Per-variant description text, scoped to the *currently selected* variant only — **planned as a separate block, not yet built** in the rebuild |

All object-presence checks use **truthiness**, not `!= blank` — nil objects were found to evaluate `!= blank` as `true` on the Liquid engine in use, a real bug hit and standardized around throughout the build.

---

## 3\. Layout & Spacing

- **One consistent gap value** governs the vertical rhythm of the buy column: reviews → flavor → size → subscription → one-time → quantity, originally set to match the description's own internal spacing (bold sentence to bullet list) — **16px on desktop, 28px on mobile**.  
- **Subscription ↔ one-time** and **quantity ↔ Add to Cart** are a deliberately *tighter*, separate spacing value (8px), explicitly **not linked** to the main rhythm or to each other — a fixed snapshot, since the subscription widget isn't present on every product.

- **Spacing must stay consistent even when an element is absent** — e.g., with no reviews or no subscription option, the gap to whatever follows must match what it would be if the missing element were present.

- **Flavor swatch card:**  
  - The strain-type pill's **top edge aligns with the top edge** of the flavor image.  
  - The flavor **name is vertically centered** at the midpoint between the pill's bottom edge and the image's bottom edge — or centered on the image's own midpoint if there is no strain pill.  
  - This centering rule must hold even when the name **wraps to two lines**.  
  - A corner label (e.g. "Sale") must be **horizontally centered on the image's own midpoint** (not the card's), while never overflowing outside the card at any screen width.  
- **Size swatch card:**  
  - Must always reserve visible space for the icon, even on a variant with no icon image set, so every card in a row stays the same height.  
  - Card proportions (height/width) should match provided reference mockups — container sizing only, not a request to change the icon/label/price styling itself.  
- **Responsive scaling:** uses container queries (not viewport-based media queries) so text and elements scale to their own card's width, shrinking gracefully without overflowing or clipping at any width, down to very narrow cards.  
- **No element may overflow its container** at any screen size.

---

## 4\. Sticky Column Behavior

- Both the gallery (media) column and the buy column should be able to become the "sticky" one, depending on which is **shorter** at a given moment — not hardcoded to assume the gallery is always the short column.  
- Confirmed live: Dawn's native Product Information section already provides this via plain CSS (`position: sticky` applied to *both* columns via a shared class) — whichever column is shorter naturally stays pinned, with no custom JavaScript required. This was a key reason the block-based rebuild doesn't need its own sticky-column logic.

---

## 5\. Cart, Checkout & Native Integration

- The add-to-cart mechanism must be **genuinely cart-agnostic** — correct on Dawn's native drawer (dev store) and on Recharge (live store), without hardcoding assumptions about either.  
    
- **Must not reimplement** `/cart/add.js` payloads, cart drawer rendering, or discount/promo computation. All of that must go through Shopify's real, native product form and native cart mechanism, so that:  
    
  - BOGO promotions  
  - Free-gift spending thresholds  
  - Subscription discounts


  all compute correctly automatically, with no custom logic duplicating what Shopify/the theme/the cart app already does correctly.


- Selecting a subscription frequency and adding to cart must submit the correct `selling_plan`, so Recharge creates the subscription properly.  
    
- **B2B customers must not be offered a subscription option at all** — Shopify rejects selling plans on B2B orders, so the subscription block should not render for B2B, falling back to one-time purchase automatically.

---

## 6\. Quantity & Add to Cart Controls

- Custom-styled quantity stepper (not the theme's native stepper).  
- Gap between the quantity selector and the Add to Cart button matches the subscription/one-time gap (8px), as a fixed value independent of whether other elements are present.

---

## 7\. Block Architecture (Rebuild Phase)

- Move away from one large custom section that fully replaces the native product form, toward **reusable blocks added inside Shopify's native "Product Information" section** — preserving native cart, app, and form compatibility (Recharge, EarlyBird, and other installed apps depend on the real native form existing on the page).  
- **Test on a separate product template first** — do not modify the theme's default/live product template during development.  
- Do **not** simply reskin the native variant picker as a shortcut. Build genuinely custom UI and logic (availability, defaulting, dimming), but have it **drive Shopify's real backend mechanism** for the actual variant selection and cart submission — i.e., real `<variant-selects>` inputs and a real native form submit — rather than inventing a parallel selection/cart system.  
- **File naming must clearly group by block:** every file belonging to one block should share the same name stem, so anyone browsing the theme's file list can immediately tell which files go together.  
- **No "MHC" prefix** (or any custom abbreviation) anywhere in file or block names.  
- The block itself should appear in the theme editor's block list as **"Custom Variant Selector."**  
- Deferred/parked for later: letting the merchant choose which column (left/right) the Description block populates in.

---

## 8\. Description Block (Planned, Not Yet Built)

- A dedicated Description block, populating from the `variant_description` rich-text metafield the same way the original section did — via `metafield_tag`, scoped to the **currently selected variant only** (not all variants at once).  
- Column placement (left vs. right) to be merchant-configurable, once built — deferred from the initial block rebuild.

---

*This document reflects requirements as stated through the current point in the build. It does not describe implementation status of every item — some (e.g., the Description block, column-choice setting) are explicitly deferred and not yet built.*  
