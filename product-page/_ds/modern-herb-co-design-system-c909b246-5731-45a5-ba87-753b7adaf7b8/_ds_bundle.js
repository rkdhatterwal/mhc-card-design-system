/* @ds-bundle: {"format":4,"namespace":"ModernHerbCoDesignSystem_c909b2","components":[{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Chip","sourcePath":"components/core/Chip.jsx"},{"name":"EFFECT_WORD","sourcePath":"components/core/EffectIcon.jsx"},{"name":"EFFECT_LABEL","sourcePath":"components/core/EffectIcon.jsx"},{"name":"STRAIN_NAME","sourcePath":"components/core/EffectIcon.jsx"},{"name":"EFFECT_TINT","sourcePath":"components/core/EffectIcon.jsx"},{"name":"EFFECT_ORDER","sourcePath":"components/core/EffectIcon.jsx"},{"name":"EffectIcon","sourcePath":"components/core/EffectIcon.jsx"},{"name":"ICON_PATHS","sourcePath":"components/core/Icon.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"QuantityStepper","sourcePath":"components/core/QuantityStepper.jsx"},{"name":"Rating","sourcePath":"components/core/Rating.jsx"},{"name":"Modal","sourcePath":"components/feedback/Modal.jsx"},{"name":"PerksBar","sourcePath":"components/feedback/PerksBar.jsx"},{"name":"BottomNavBar","sourcePath":"components/navigation/BottomNavBar.jsx"},{"name":"SiteFooter","sourcePath":"components/navigation/SiteFooter.jsx"},{"name":"TopAppBar","sourcePath":"components/navigation/TopAppBar.jsx"},{"name":"EffectCountRow","sourcePath":"components/product/EffectCountRow.jsx"},{"name":"OptionTile","sourcePath":"components/product/OptionTile.jsx"},{"name":"ProductCard","sourcePath":"components/product/ProductCard.jsx"},{"name":"PurchaseOptions","sourcePath":"components/product/PurchaseOptions.jsx"},{"name":"SizeButton","sourcePath":"components/product/SizeButton.jsx"},{"name":"VariantSelect","sourcePath":"components/product/VariantSelect.jsx"}],"sourceHashes":{"components/core/Button.jsx":"9bed0c3162e9","components/core/Chip.jsx":"656e2291cca5","components/core/EffectIcon.jsx":"9afb2e7d7a29","components/core/Icon.jsx":"7747d13458c3","components/core/IconButton.jsx":"c8216c5aa87d","components/core/QuantityStepper.jsx":"5667bb32ed53","components/core/Rating.jsx":"a9aded322105","components/feedback/Modal.jsx":"10e91f0fc3c7","components/feedback/PerksBar.jsx":"893a25013e7f","components/navigation/BottomNavBar.jsx":"b7c48d9a54df","components/navigation/SiteFooter.jsx":"75c00eed3087","components/navigation/TopAppBar.jsx":"caccad2f2e61","components/product/EffectCountRow.jsx":"3da21e81f858","components/product/OptionTile.jsx":"a242edfade78","components/product/ProductCard.jsx":"17baefd19fb6","components/product/PurchaseOptions.jsx":"3ab0bbe379db","components/product/SizeButton.jsx":"bf71ad054fdb","components/product/VariantSelect.jsx":"22e91ca486fc","ui_kits/storefront/PlpScreen.jsx":"557f53be13e7","ui_kits/storefront/QuickView.jsx":"334511ac3374","ui_kits/storefront/data.js":"d712120a853a"},"inlinedExternals":[],"unexposedExports":[{"name":"splitOption","sourcePath":"components/product/VariantSelect.jsx"}]} */

(() => {

const __ds_ns = (window.ModernHerbCoDesignSystem_c909b2 = window.ModernHerbCoDesignSystem_c909b2 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Chip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Informational only. Chips must never look pressable: cream tile, no stroke,
   400 weight. The 'promo' tone is the one exception — it carries the 1px
   control stroke that marks a promotion, still flat, no shadow. */
const TONES = {
  tile: {
    background: 'var(--surface-tile)',
    color: 'var(--text-body)',
    border: 'none',
    fontWeight: 'var(--weight-regular)'
  },
  promo: {
    background: 'var(--surface-tile)',
    color: 'var(--text-body)',
    border: 'var(--border-width-hairline) solid var(--border-control)',
    fontWeight: 'var(--weight-bold)'
  },
  effect: {
    background: 'var(--surface-tile)',
    color: 'var(--text-meta)',
    border: 'none',
    fontWeight: 'var(--weight-regular)'
  },
  count: {
    background: 'var(--surface-tile)',
    color: 'var(--text-body)',
    border: 'none',
    fontWeight: 'var(--weight-regular)'
  }
};
function Chip({
  tone = 'tile',
  size = 12,
  pad = '5px 11px',
  children,
  style,
  ...rest
}) {
  const t = TONES[tone] || TONES.tile;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      boxSizing: 'border-box',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 4,
      fontFamily: 'var(--font-body)',
      fontSize: size + 'px',
      lineHeight: 'var(--leading-tight)',
      letterSpacing: 'var(--track-none)',
      borderRadius: 'var(--radius-control)',
      padding: pad,
      whiteSpace: 'nowrap',
      background: t.background,
      color: t.color,
      border: t.border,
      fontWeight: t.fontWeight,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Chip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Chip.jsx", error: String((e && e.message) || e) }); }

// components/core/EffectIcon.jsx
try { (() => {
/* The MHC effect set: solid Moon (sleep/indica), Lightning (energy/sativa),
   Rainbow (balance/hybrid). Paths verbatim from the source. Line-weight
   alternates exist in the brand but were left OPEN — solid is the shipped set. */
const PATHS = {
  indica: ['M11.6 4.1 A5 5 0 1 0 11.6 11.9 A3.6 3.6 0 1 1 11.6 4.1 Z'],
  sativa: ['M9.6 1.4 3.3 9.2h3.5l-.7 5.4 6.6-8.1H9.1z'],
  hybrid: ['M0.8 13.2 A7.2 7.2 0 0 1 15.2 13.2 L12.7 13.2 A4.7 4.7 0 0 0 3.3 13.2 Z', 'M4.6 13.2 A3.4 3.4 0 0 1 11.4 13.2 L9 13.2 A1 1 0 0 0 7 13.2 Z']
};
const EFFECT_WORD = {
  indica: 'Sleep',
  hybrid: 'Happy',
  sativa: 'Energy'
};
const EFFECT_LABEL = {
  indica: 'Sleep',
  hybrid: 'Balance',
  sativa: 'Energy'
};
const STRAIN_NAME = {
  indica: 'Indica',
  hybrid: 'Hybrid',
  sativa: 'Sativa'
};
const EFFECT_TINT = {
  indica: 'var(--effect-sleep)',
  hybrid: 'var(--effect-balance)',
  sativa: 'var(--effect-energy)'
};
const EFFECT_ORDER = {
  indica: 0,
  hybrid: 1,
  sativa: 2
};
function EffectIcon({
  strain,
  size = 14,
  style
}) {
  const paths = PATHS[strain];
  if (!paths) return null;
  return /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 16 16",
    "aria-hidden": "true",
    style: {
      display: 'block',
      flexShrink: 0,
      ...style
    }
  }, paths.map((d, i) => /*#__PURE__*/React.createElement("path", {
    key: i,
    d: d,
    fill: "currentColor"
  })));
}
Object.assign(__ds_scope, { EFFECT_WORD, EFFECT_LABEL, STRAIN_NAME, EFFECT_TINT, EFFECT_ORDER, EffectIcon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/EffectIcon.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* The source pages carry their UI glyphs inline: 24x24 viewBox, no fill,
   currentColor stroke, round caps/joins, 1.8 default weight. Paths below are
   copied from the source's ICON map verbatim. */
const ICON_PATHS = {
  menu: {
    d: '<line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>'
  },
  person: {
    d: '<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>'
  },
  bag: {
    d: '<path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/>'
  },
  store: {
    d: '<path d="M3 9 4.5 4h15L21 9"/><path d="M4 9v11h16V9"/><path d="M3 9a3 3 0 0 0 6 0 3 3 0 0 0 6 0 3 3 0 0 0 6 0"/>'
  },
  explore: {
    d: '<circle cx="12" cy="12" r="9"/><polygon points="16 8 10.5 10.5 8 16 13.5 13.5"/>'
  },
  close: {
    d: '<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>'
  },
  chevleft: {
    d: '<polyline points="15 18 9 12 15 6"/>',
    sw: 2.2
  },
  chevright: {
    d: '<polyline points="9 18 15 12 9 6"/>',
    sw: 2.2
  },
  chevdown: {
    d: '<polyline points="6 9 12 15 18 9"/>',
    sw: 2.2
  },
  share: {
    d: '<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.6" y1="10.5" x2="15.4" y2="6.5"/><line x1="8.6" y1="13.5" x2="15.4" y2="17.5"/>'
  },
  minus: {
    d: '<line x1="5" y1="12" x2="19" y2="12"/>',
    sw: 2.2
  },
  plus: {
    d: '<line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>',
    sw: 2.2
  },
  truck: {
    d: '<rect x="1" y="6" width="13" height="11" rx="1"/><path d="M14 9h4l3 3.5V17h-7z"/><circle cx="5.5" cy="19" r="1.8"/><circle cx="17.5" cy="19" r="1.8"/>'
  },
  verified: {
    d: '<path d="M12 2 14.6 5 18.6 5.2 19.4 9.1 22 12 19.4 14.9 18.6 18.8 14.6 19 12 22 9.4 19 5.4 18.8 4.6 14.9 2 12 4.6 9.1 5.4 5.2 9.4 5z"/><polyline points="8.6 12 11.2 14.5 15.6 9.8"/>'
  },
  sync: {
    d: '<polyline points="21 4 21 10 15 10"/><polyline points="3 20 3 14 9 14"/><path d="M19 10a7.5 7.5 0 0 0-13-3.3L3 10"/><path d="M5 14a7.5 7.5 0 0 0 13 3.3l3-3.3"/>'
  },
  cancel: {
    d: '<circle cx="12" cy="12" r="9"/><line x1="9" y1="9" x2="15" y2="15"/><line x1="15" y1="9" x2="9" y2="15"/>'
  },
  tag: {
    d: '<path d="M20.6 13.4 12.4 21.6a2 2 0 0 1-2.8 0l-7.2-7.2a2 2 0 0 1-.6-1.4V4a2 2 0 0 1 2-2h9a2 2 0 0 1 1.4.6l6.4 6.4a2 2 0 0 1 0 2.8z"/><circle cx="7.5" cy="7.5" r="1.4"/>'
  },
  users: {
    d: '<path d="M16 20v-1.6a3.4 3.4 0 0 0-3.4-3.4H6.4A3.4 3.4 0 0 0 3 18.4V20"/><circle cx="9.5" cy="7.5" r="3.4"/><path d="M21 20v-1.6a3.4 3.4 0 0 0-2.6-3.3"/><path d="M15.5 4.3a3.4 3.4 0 0 1 0 6.4"/>'
  },
  play: {
    d: '<circle cx="12" cy="12" r="9"/><polygon points="10 8.5 16 12 10 15.5"/>'
  },
  pdf: {
    d: '<path d="M14 2H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7z"/><polyline points="14 2 14 7 19 7"/><line x1="9" y1="13" x2="15" y2="13"/><line x1="9" y1="17" x2="13" y2="17"/>'
  },
  star: {
    d: '<path d="M12 2l2.9 6.26L21.5 9.27l-4.75 4.42L18 20.5 12 17l-6 3.5 1.25-6.81L2.5 9.27l6.6-1.01z"/>',
    sw: 1.4
  },
  cartplus: {
    d: '<circle cx="9" cy="23" r="1.4"/><circle cx="19" cy="23" r="1.4"/><path d="M2 4h3l2.4 12.1a1.8 1.8 0 0 0 1.8 1.4h8.7a1.8 1.8 0 0 0 1.8-1.4l1.1-5.6"/><line x1="17" y1="2" x2="17" y2="9"/><line x1="13.5" y1="5.5" x2="20.5" y2="5.5"/>',
    box: '0 0 26 26',
    sw: 2
  }
};
function Icon({
  name,
  size = 20,
  fill = 'none',
  strokeWidth,
  style,
  ...rest
}) {
  const g = ICON_PATHS[name];
  if (!g) return null;
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: g.box || '0 0 24 24',
    fill: fill,
    stroke: "currentColor",
    strokeWidth: strokeWidth ?? g.sw ?? 1.8,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
    style: {
      display: 'block',
      flexShrink: 0,
      ...style
    },
    dangerouslySetInnerHTML: {
      __html: g.d
    }
  }, rest));
}
Object.assign(__ds_scope, { ICON_PATHS, Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Three variants, all on the 9px control radius and the same 1.5px stroke.
   The stroke weight never changes between them — add-to-cart is not heavier. */
const VARIANTS = {
  cta: {
    background: 'var(--accent-cta)',
    color: 'var(--text-on-accent)',
    borderColor: 'var(--border-control)'
  },
  dark: {
    background: 'var(--surface-inverse)',
    color: 'var(--text-inverse)',
    borderColor: 'var(--border-control)'
  },
  outline: {
    background: 'var(--surface-card)',
    color: 'var(--text-body)',
    borderColor: 'var(--border-control)'
  }
};
const SIZES = {
  sm: {
    padding: '8px',
    fontSize: 'var(--text-13)'
  },
  md: {
    padding: '0 16px',
    height: 56,
    fontSize: 'var(--text-14)'
  }
};
function Button({
  variant = 'cta',
  size = 'sm',
  icon,
  iconSize = 22,
  added,
  disabled,
  full,
  children,
  style,
  ...rest
}) {
  const v = disabled ? {
    background: 'var(--disabled-bg)',
    color: 'var(--disabled-fg)',
    borderColor: 'var(--disabled-border)'
  } : VARIANTS[variant] || VARIANTS.cta;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    disabled: disabled,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 6,
      flex: full ? '1 1 auto' : '0 0 auto',
      minWidth: 'var(--tap-min)',
      border: 'var(--border-width-control) solid ' + v.borderColor,
      background: v.background,
      color: v.color,
      fontFamily: 'inherit',
      fontWeight: 'var(--weight-bold)',
      letterSpacing: 'var(--track-2)',
      borderRadius: 'var(--radius-control)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      ...SIZES[size],
      ...style
    }
  }, rest), icon && !added ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: iconSize
  }) : null, children ? /*#__PURE__*/React.createElement("span", null, children) : null, added ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-15)'
    }
  }, "\u2713") : null);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Two shapes: 'bare' (top app bar, stepper) and 'circle' (carousel arrows,
   modal close) — a 40px white circle on a hairline stroke. */
function IconButton({
  name,
  size = 22,
  shape = 'bare',
  label,
  children,
  style,
  ...rest
}) {
  const circle = shape === 'circle';
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 4,
      padding: circle ? 0 : 0,
      cursor: 'pointer',
      fontFamily: 'inherit',
      color: 'var(--text-body)',
      width: circle ? 40 : 'auto',
      height: circle ? 40 : 'auto',
      borderRadius: circle ? 'var(--radius-circle)' : 0,
      background: circle ? 'var(--surface-card)' : 'none',
      border: circle ? 'var(--border-width-hairline) solid var(--border-hairline)' : 'none',
      boxShadow: circle ? 'var(--shadow-nav)' : 'none',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: name,
    size: size
  }), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/QuantityStepper.jsx
try { (() => {
/* Quick-view only. The stepper was removed from the card: at 375px its
   -/+ hit targets fell to 30px, under the 44px minimum. */
function QuantityStepper({
  value = 1,
  onChange,
  width = 120,
  style
}) {
  const step = d => onChange && onChange(Math.max(1, Math.min(999, value + d)));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      border: 'var(--border-width-control) solid var(--border-control)',
      borderRadius: 'var(--radius-control)',
      padding: '0 12px',
      background: 'var(--surface-card)',
      width,
      flexShrink: 0,
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    name: "minus",
    size: 20,
    label: "Decrease",
    onClick: () => step(-1),
    style: {
      padding: 4
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-13)',
      fontWeight: 'var(--weight-semibold)',
      color: 'var(--text-body)'
    }
  }, value), /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    name: "plus",
    size: 20,
    label: "Increase",
    onClick: () => step(1),
    style: {
      padding: 4
    }
  }));
}
Object.assign(__ds_scope, { QuantityStepper });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/QuantityStepper.jsx", error: String((e && e.message) || e) }); }

// components/core/Rating.jsx
try { (() => {
/* One star, accent fill with a control-tone outline, then the numeric average
   and the review count. Never five stars on a card. */
function Rating({
  average,
  count,
  size = 14,
  style
}) {
  if (!average) return null;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 3,
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-13)',
      fontWeight: 'var(--weight-semibold)',
      color: 'var(--text-body)',
      whiteSpace: 'nowrap',
      ...style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "var(--accent-star-fill)",
    stroke: "var(--accent-star-stroke)",
    strokeWidth: "1.4",
    strokeLinejoin: "round",
    "aria-hidden": "true",
    style: {
      display: 'block',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 2l2.9 6.26L21.5 9.27l-4.75 4.42L18 20.5 12 17l-6 3.5 1.25-6.81L2.5 9.27l6.6-1.01z"
  })), /*#__PURE__*/React.createElement("span", null, average), count ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-meta)',
      fontWeight: 'var(--weight-regular)'
    }
  }, count) : null);
}
Object.assign(__ds_scope, { Rating });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Rating.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Modal.jsx
try { (() => {
/* Quick view shell: an ink scrim at 60% with a 4px backdrop blur, a
   14px-radius panel on the page surface, and a floating circular close. */
function Modal({
  open,
  onClose,
  label,
  maxWidth = 1200,
  children
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    "aria-modal": "true",
    "aria-label": label,
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 100,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--backdrop-scrim)',
      backdropFilter: 'blur(var(--blur-backdrop))'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      background: 'var(--surface-page)',
      width: '100%',
      maxWidth,
      maxHeight: '90vh',
      overflow: 'hidden',
      borderRadius: 'var(--radius-card)',
      boxShadow: 'var(--shadow-panel)',
      display: 'flex',
      flexDirection: 'column',
      fontFamily: 'var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    name: "close",
    size: 20,
    shape: "circle",
    label: "Close",
    onClick: onClose,
    style: {
      position: 'absolute',
      top: 16,
      right: 16,
      zIndex: 50,
      boxShadow: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "hide-scrollbar",
    style: {
      overflowY: 'auto',
      padding: 24
    }
  }, children)));
}
Object.assign(__ds_scope, { Modal });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Modal.jsx", error: String((e && e.message) || e) }); }

// components/feedback/PerksBar.jsx
try { (() => {
/* Reassurance row under the buy controls. Icons are the stroke set at 18px. */
function PerksBar({
  items = [{
    icon: 'truck',
    label: 'Free Shipping $50+'
  }, {
    icon: 'verified',
    label: 'Lab Tested'
  }],
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 24,
      padding: 16,
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-card)',
      border: 'var(--border-width-hairline) solid var(--border-hairline)',
      ...style
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: it.label
  }, i ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: 1,
      height: 16,
      background: 'var(--border-hairline)'
    }
  }) : null, /*#__PURE__*/React.createElement("span", {
    key: it.label,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      fontSize: 'var(--text-12)',
      color: 'var(--text-body)',
      whiteSpace: 'nowrap'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: it.icon,
    size: 18
  }), it.label))));
}
Object.assign(__ds_scope, { PerksBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/PerksBar.jsx", error: String((e && e.message) || e) }); }

// components/navigation/BottomNavBar.jsx
try { (() => {
const ITEMS = [{
  key: 'shop',
  label: 'Shop',
  icon: 'store',
  size: 22
}, {
  key: 'discover',
  label: 'Discover',
  icon: 'explore',
  size: 22
}, {
  key: 'account',
  label: 'Account',
  icon: 'person',
  size: 20
}, {
  key: 'cart',
  label: 'Cart',
  icon: 'bag',
  size: 22
}];

/* Mobile only — hidden at 768px and up, where the footer takes over. */
function BottomNavBar({
  current = 'shop',
  onSelect,
  style
}) {
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      position: 'sticky',
      bottom: 0,
      left: 0,
      width: '100%',
      zIndex: 50,
      height: 'var(--bottomnav-height)',
      background: 'var(--surface-page)',
      borderTop: 'var(--border-width-hairline) solid var(--border-hairline)',
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      ...style
    }
  }, ITEMS.map(it => /*#__PURE__*/React.createElement("button", {
    key: it.key,
    type: "button",
    "aria-current": current === it.key ? 'page' : undefined,
    onClick: () => onSelect && onSelect(it.key),
    style: {
      flex: 1,
      height: '100%',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      fontFamily: 'inherit',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 4,
      fontSize: 'var(--text-9-5)',
      fontWeight: 'var(--weight-bold)',
      lineHeight: 'var(--leading-normal)',
      color: current === it.key ? 'var(--text-body)' : 'var(--text-tertiary)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: it.icon,
    size: it.size
  }), /*#__PURE__*/React.createElement("span", null, it.label))));
}
Object.assign(__ds_scope, { BottomNavBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/BottomNavBar.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SiteFooter.jsx
try { (() => {
/* Desktop only (>=768px). One row: copyright left, legal links right. */
function SiteFooter({
  copyright = '\u00A9 2024 Modern Herb Co. All rights reserved.',
  links = ['Terms', 'Privacy'],
  style
}) {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--surface-page)',
      borderTop: 'var(--border-width-hairline) solid var(--border-hairline)',
      padding: '32px 0',
      marginTop: 40,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--page-max-width)',
      margin: '0 auto',
      padding: '0 40px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      fontSize: 'var(--text-14)',
      color: 'var(--text-footer)'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0
    }
  }, copyright), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    onClick: e => e.preventDefault()
  }, l)))));
}
Object.assign(__ds_scope, { SiteFooter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SiteFooter.jsx", error: String((e && e.message) || e) }); }

// components/navigation/TopAppBar.jsx
try { (() => {
/* 64px fixed bar. Below 768px: hamburger + brand + cart glyph. At 768px and up
   the hamburger is replaced by the nav links and Account/Cart gain labels. */
function TopAppBar({
  brand = 'Modern Herb Co',
  links = ['Shop', 'Discover'],
  cartCount = 0,
  wide,
  onMenu,
  onCart,
  style
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      left: 0,
      width: '100%',
      zIndex: 50,
      height: 'var(--topbar-height)',
      background: 'var(--surface-page)',
      borderBottom: 'var(--border-width-hairline) solid var(--border-hairline)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: wide ? '0 40px' : '0 20px',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 24
    }
  }, wide ? null : /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    name: "menu",
    size: 22,
    label: "Menu",
    onClick: onMenu
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-15)',
      fontWeight: 'var(--weight-regular)',
      letterSpacing: 'var(--track-5)',
      textTransform: 'uppercase',
      color: 'var(--text-body)'
    }
  }, brand), wide ? /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 24,
      fontSize: 'var(--text-14)',
      fontWeight: 'var(--weight-semibold)'
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    onClick: e => e.preventDefault()
  }, l))) : null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16
    }
  }, wide ? /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 4,
      fontSize: 'var(--text-14)',
      fontWeight: 'var(--weight-semibold)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "person",
    size: 20
  }), /*#__PURE__*/React.createElement("span", null, "Account")) : null, /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    name: "bag",
    size: 22,
    label: "Cart",
    onClick: onCart
  }, wide ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-14)',
      fontWeight: 'var(--weight-semibold)'
    }
  }, "Cart (", cartCount, ")") : null)));
}
Object.assign(__ds_scope, { TopAppBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/TopAppBar.jsx", error: String((e && e.message) || e) }); }

// components/product/EffectCountRow.jsx
try { (() => {
/* Informational, never pressable: the effect words on the top line, the pack
   counts directly beneath, both as flat cream tiles, no stroke, 6px apart. */
function EffectCountRow({
  strains = [],
  counts = []
}) {
  if (!strains.length && !counts.length) return null;
  const ordered = strains.slice().sort((a, b) => __ds_scope.EFFECT_ORDER[a] - __ds_scope.EFFECT_ORDER[b]);
  return /*#__PURE__*/React.createElement("div", {
    "aria-label": "Effects and counts",
    style: {
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: 6,
      overflow: 'hidden'
    }
  }, ordered.length ? /*#__PURE__*/React.createElement("div", {
    style: {
      alignSelf: 'stretch',
      display: 'flex',
      flexWrap: 'nowrap',
      alignItems: 'center',
      gap: 4,
      minWidth: 0
    }
  }, ordered.map(s => /*#__PURE__*/React.createElement(__ds_scope.Chip, {
    key: s,
    tone: "effect",
    size: 11,
    pad: "4px 9px"
  }, __ds_scope.EFFECT_WORD[s]))) : null, counts.length ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'nowrap',
      alignItems: 'center',
      gap: 4,
      minWidth: 0
    }
  }, counts.map(c => /*#__PURE__*/React.createElement(__ds_scope.Chip, {
    key: c,
    tone: "count",
    pad: "5px 10px",
    style: {
      letterSpacing: 'var(--track-3)',
      lineHeight: 'var(--leading-relaxed)'
    }
  }, c))) : null);
}
Object.assign(__ds_scope, { EffectCountRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/product/EffectCountRow.jsx", error: String((e && e.message) || e) }); }

// components/product/OptionTile.jsx
try { (() => {
/* Quick-view flavour tile: a white 1.5px-stroke button with the effect circle
   above the flavour name, and the effect chip pinned top-right. */
function OptionTile({
  label,
  strain,
  selected,
  disabled,
  onClick,
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-pressed": !!selected,
    disabled: disabled,
    onClick: onClick,
    style: {
      background: selected ? 'var(--surface-tile)' : 'var(--surface-card)',
      border: 'var(--border-width-control) solid ' + (selected ? 'var(--ink)' : 'var(--border-hairline)'),
      borderRadius: 'var(--radius-control)',
      padding: 8,
      cursor: disabled ? 'not-allowed' : 'pointer',
      textAlign: 'left',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 8,
      opacity: disabled ? 'var(--disabled-opacity)' : 1,
      fontFamily: 'inherit',
      transition: 'border-color 150ms ease',
      ...style
    }
  }, strain ? /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 4,
      right: 4,
      display: 'inline-flex',
      alignItems: 'center',
      gap: 4,
      padding: '3px 8px',
      borderRadius: 'var(--radius-control)',
      background: __ds_scope.EFFECT_TINT[strain],
      fontSize: 'var(--text-11)',
      fontWeight: 'var(--weight-bold)',
      color: 'var(--text-body)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.EffectIcon, {
    strain: strain,
    size: 11
  }), __ds_scope.STRAIN_NAME[strain]) : null, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 40,
      height: 40,
      borderRadius: 'var(--radius-circle)',
      marginTop: 16,
      background: strain ? __ds_scope.EFFECT_TINT[strain] : 'var(--surface-raised)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--text-body)'
    }
  }, strain ? /*#__PURE__*/React.createElement(__ds_scope.EffectIcon, {
    strain: strain,
    size: 18
  }) : children), /*#__PURE__*/React.createElement("span", {
    style: {
      width: '100%',
      textAlign: 'center',
      fontSize: 'var(--text-13)',
      fontWeight: 'var(--weight-semibold)',
      color: 'var(--text-body)',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  }, label));
}
Object.assign(__ds_scope, { OptionTile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/product/OptionTile.jsx", error: String((e && e.message) || e) }); }

// components/product/PurchaseOptions.jsx
try { (() => {
/* Two radios: one-time and Subscribe & Save. The selected one carries the
   control stroke; the unselected drops to the subtle tone so only one row
   reads as active. Subscribe copy is fixed. */
const radio = on => ({
  flex: '0 0 15px',
  boxSizing: 'border-box',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 15,
  height: 15,
  borderRadius: 'var(--radius-circle)',
  border: 'var(--border-width-control) solid var(--border-control)',
  background: 'var(--surface-card)'
});
const dot = on => ({
  display: 'block',
  width: 7,
  height: 7,
  borderRadius: 'var(--radius-circle)',
  background: on ? 'var(--ink)' : 'transparent'
});
const label = {
  flex: '1 1 auto',
  minWidth: 0,
  fontFamily: 'var(--font-body)',
  fontSize: 'var(--text-12)',
  fontWeight: 'var(--weight-semibold)',
  color: 'var(--text-body)',
  lineHeight: 'var(--leading-snug)'
};
const price = {
  flexShrink: 0,
  fontSize: 'var(--text-12)',
  fontWeight: 'var(--weight-regular)',
  color: 'var(--text-meta)'
};
function PurchaseOptions({
  oncePrice,
  subPrice,
  value = 'sub',
  onChange,
  note = 'Save 30% on your first order, then 10% on every order after.'
}) {
  const sub = value === 'sub';
  return /*#__PURE__*/React.createElement("div", {
    role: "radiogroup",
    "aria-label": "Purchase type",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    role: "radio",
    "aria-checked": !sub,
    onClick: () => onChange && onChange('once'),
    style: {
      boxSizing: 'border-box',
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      cursor: 'pointer',
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-control)',
      padding: '9px 11px',
      border: 'var(--border-width-control) solid ' + (sub ? 'var(--disabled-bg)' : 'var(--border-control)')
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: radio()
  }, /*#__PURE__*/React.createElement("span", {
    style: dot(!sub)
  })), /*#__PURE__*/React.createElement("span", {
    style: label
  }, "One-time purchase"), /*#__PURE__*/React.createElement("span", {
    style: price
  }, oncePrice)), /*#__PURE__*/React.createElement("div", {
    role: "radio",
    "aria-checked": sub,
    onClick: () => onChange && onChange('sub'),
    style: {
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      gap: 3,
      cursor: 'pointer',
      background: sub ? 'var(--surface-tile)' : 'var(--surface-card)',
      borderRadius: 'var(--radius-control)',
      padding: '9px 11px',
      border: 'var(--border-width-control) solid ' + (sub ? 'var(--border-subtle)' : 'var(--disabled-bg)')
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: radio()
  }, /*#__PURE__*/React.createElement("span", {
    style: dot(sub)
  })), /*#__PURE__*/React.createElement("span", {
    style: label
  }, "Subscribe & Save"), /*#__PURE__*/React.createElement("span", {
    style: price
  }, subPrice)), /*#__PURE__*/React.createElement("span", {
    style: {
      paddingLeft: 23,
      fontSize: 'var(--text-11)',
      fontWeight: 'var(--weight-regular)',
      color: 'var(--text-meta)',
      lineHeight: 'var(--leading-normal)',
      textWrap: 'pretty'
    }
  }, note)));
}
Object.assign(__ds_scope, { PurchaseOptions });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/product/PurchaseOptions.jsx", error: String((e && e.message) || e) }); }

// components/product/SizeButton.jsx
try { (() => {
/* Quick-view size / option pill-less button. Sold-out sizes stay visible and
   struck through rather than disappearing. */
function SizeButton({
  selected,
  disabled,
  onClick,
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-pressed": !!selected,
    disabled: disabled,
    onClick: onClick,
    style: {
      background: selected ? 'var(--surface-tile)' : 'var(--surface-card)',
      border: 'var(--border-width-control) solid ' + (selected ? 'var(--ink)' : 'var(--border-hairline)'),
      borderRadius: 'var(--radius-control)',
      padding: '8px 16px',
      cursor: disabled ? 'not-allowed' : 'pointer',
      fontFamily: 'inherit',
      fontSize: 'var(--text-13)',
      fontWeight: 'var(--weight-semibold)',
      color: selected ? 'var(--text-body)' : 'var(--text-tertiary)',
      opacity: disabled ? 'var(--disabled-opacity)' : 1,
      textDecoration: disabled ? 'line-through' : 'none',
      transition: 'border-color 150ms ease',
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { SizeButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/product/SizeButton.jsx", error: String((e && e.message) || e) }); }

// components/product/VariantSelect.jsx
try { (() => {
/* Row order is fixed: effect icon -> flavour -> count -> price. The count is
   small and grey immediately before the price; flavour takes the rest of the
   width. The trigger shows the same arrangement as the selected row. */
function splitOption(title) {
  const parts = String(title || '').split(' / ');
  if (parts.length < 2) return {
    count: '',
    flavor: title || ''
  };
  return {
    count: parts[0],
    flavor: parts.slice(1).join(' / ')
  };
}
const tile = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 24,
  height: 24,
  borderRadius: 'var(--radius-circle)',
  boxSizing: 'border-box',
  flexShrink: 0,
  background: 'var(--surface-tile)',
  color: 'var(--text-body)'
};
const countTile = {
  flexShrink: 0,
  boxSizing: 'border-box',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  minWidth: 32,
  height: 26,
  padding: '0 8px',
  borderRadius: 'var(--radius-control)',
  background: 'var(--surface-tile)',
  fontSize: 'var(--text-12)',
  fontWeight: 'var(--weight-regular)',
  color: 'var(--text-body)'
};
function VariantSelect({
  options = [],
  value = 0,
  open,
  onToggle,
  onSelect
}) {
  const sel = options[value];
  if (!sel) return null;
  const s = splitOption(sel.title);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      minHeight: 'var(--control-height)'
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-haspopup": "listbox",
    "aria-expanded": !!open,
    onClick: onToggle,
    style: {
      position: 'relative',
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      fontFamily: 'inherit',
      fontSize: 'var(--text-13)',
      fontWeight: 'var(--weight-semibold)',
      color: 'var(--text-body)',
      background: 'var(--surface-card)',
      border: 'var(--border-width-control) solid var(--border-control)',
      borderRadius: 'var(--radius-control)',
      padding: '8px 30px 8px 10px',
      cursor: 'pointer',
      textAlign: 'left',
      opacity: sel.soldOut ? 'var(--soldout-opacity)' : 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      flex: '1 1 auto',
      minWidth: 0
    }
  }, sel.strain ? /*#__PURE__*/React.createElement("span", {
    style: tile
  }, /*#__PURE__*/React.createElement(__ds_scope.EffectIcon, {
    strain: sel.strain,
    size: 14
  })) : null, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: '1 1 auto',
      minWidth: 0,
      fontFamily: 'var(--font-body)',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      textDecoration: sel.soldOut ? 'line-through' : 'none'
    }
  }, s.flavor), s.count ? /*#__PURE__*/React.createElement("span", {
    style: countTile
  }, s.count) : null), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 'var(--weight-regular)',
      color: 'var(--text-meta)',
      flexShrink: 0,
      textDecoration: sel.soldOut ? 'line-through' : 'none'
    }
  }, sel.price), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevdown",
    size: 14,
    strokeWidth: 2.4,
    style: {
      position: 'absolute',
      right: 10,
      top: '50%',
      transform: 'translateY(-50%)',
      pointerEvents: 'none',
      color: 'var(--text-form)'
    }
  })), open ? /*#__PURE__*/React.createElement("ul", {
    role: "listbox",
    style: {
      listStyle: 'none',
      margin: 0,
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 50,
      padding: 0,
      overflowX: 'hidden',
      background: 'var(--surface-card)',
      border: 'var(--border-width-control) solid var(--border-control)',
      borderRadius: 'var(--radius-control)',
      boxShadow: 'var(--shadow-menu)',
      maxHeight: 'var(--menu-max-height)',
      overflowY: 'auto'
    }
  }, options.map((o, i) => {
    const sp = splitOption(o.title);
    const groupLabel = o.strain && (i === 0 || o.strain !== options[i - 1].strain) ? __ds_scope.EFFECT_WORD[o.strain] + ' (' + __ds_scope.STRAIN_NAME[o.strain] + ')' : '';
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: i
    }, groupLabel ? /*#__PURE__*/React.createElement("li", {
      style: {
        margin: (i === 0 ? '0' : '6px') + ' 0 3px',
        padding: '6px 12px',
        background: 'var(--surface-tile)',
        color: 'var(--text-body)',
        borderTop: i === 0 ? 'none' : 'var(--border-width-hairline) solid var(--border-control)',
        borderBottom: 'var(--border-width-hairline) solid var(--border-control)',
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--text-11)',
        fontWeight: 'var(--weight-bold)',
        letterSpacing: 'var(--track-6)',
        lineHeight: 'var(--leading-tight)'
      }
    }, groupLabel) : null, /*#__PURE__*/React.createElement("li", {
      role: "option",
      "aria-selected": i === value,
      onClick: () => onSelect && onSelect(i),
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 7,
        margin: '0 4px 4px',
        padding: '9px 8px',
        boxSizing: 'border-box',
        borderRadius: 'var(--radius-row)',
        cursor: 'pointer',
        fontSize: 'var(--text-13)',
        opacity: o.soldOut ? 'var(--disabled-opacity)' : 1,
        background: i === value ? 'var(--state-selected-row)' : 'transparent'
      }
    }, o.strain ? /*#__PURE__*/React.createElement("span", {
      style: tile
    }, /*#__PURE__*/React.createElement(__ds_scope.EffectIcon, {
      strain: o.strain,
      size: 14
    })) : null, /*#__PURE__*/React.createElement("span", {
      style: {
        flex: '1 1 auto',
        minWidth: 0,
        fontFamily: 'var(--font-body)',
        fontWeight: 'var(--weight-semibold)',
        lineHeight: 'var(--leading-snug)',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        textDecoration: o.soldOut ? 'line-through' : 'none'
      }
    }, sp.flavor), sp.count ? /*#__PURE__*/React.createElement("span", {
      style: countTile
    }, sp.count) : null, /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 'var(--weight-regular)',
        color: 'var(--text-meta)',
        flexShrink: 0
      }
    }, o.price)));
  })) : null);
}
Object.assign(__ds_scope, { splitOption, VariantSelect });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/product/VariantSelect.jsx", error: String((e && e.message) || e) }); }

// components/product/ProductCard.jsx
try { (() => {
/* The MHC product card, sideways layout.
   - photo well is 34% of the card, stretched full height, radius 13px 0 0 13px
   - copy stack is one 8px rhythm step top to bottom, 11px padding
   - reading order: form factor, product title, brand line
   - potency word sits over the photo, top-left, with no chip or border
   - price is stated once: the selected variant's price, never a range */
function money(p, factor) {
  const n = parseFloat(String(p).replace(/[^0-9.]/g, '')) || 0;
  return '$' + (Math.round(n * factor * 100) / 100).toFixed(2);
}
function ProductCard({
  product,
  selectedIndex = 0,
  open,
  purchaseMode = 'sub',
  added,
  onToggleVariants,
  onSelectVariant,
  onPurchaseModeChange,
  onAdd,
  onDetails,
  style
}) {
  const p = product || {};
  const options = p.options || [];
  const sel = options[selectedIndex];
  const allSold = options.length ? options.every(o => o.soldOut) : false;
  const disabled = allSold || (sel ? !!sel.soldOut : false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'row',
      height: '100%',
      background: 'var(--surface-card)',
      border: 'var(--border-width-hairline) solid var(--border-control)',
      borderRadius: 'var(--radius-card)',
      ...style
    }
  }, p.potencyWord ? /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 11,
      left: 11,
      zIndex: 5,
      whiteSpace: 'nowrap',
      fontFamily: 'var(--font-body)',
      color: 'var(--text-body)',
      fontSize: 'var(--text-12)',
      fontWeight: 'var(--weight-medium)',
      background: 'var(--surface-tile)',
      borderRadius: 'var(--radius-control)',
      padding: '5px 11px',
      lineHeight: 'var(--leading-tight)'
    }
  }, p.potencyWord, " Potency") : null, p.promo ? /*#__PURE__*/React.createElement(__ds_scope.Chip, {
    tone: "promo",
    style: {
      position: 'absolute',
      top: 44,
      left: 11,
      zIndex: 5
    }
  }, p.promo) : null, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      position: 'relative',
      display: 'block',
      flex: '0 0 34%',
      alignSelf: 'stretch',
      minHeight: 150,
      borderRadius: 'var(--radius-image-left)',
      overflow: 'hidden',
      background: 'var(--surface-image-well)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--surface-card)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transform: 'translateX(15%) scale(1.55)',
      transformOrigin: 'center center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: p.img,
    alt: p.title,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'contain'
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      flex: '1 1 auto',
      minWidth: 0,
      padding: 'var(--space-8)',
      gap: 'var(--space-step)'
    }
  }, p.sub ? /*#__PURE__*/React.createElement("p", {
    style: {
      order: -3,
      margin: 0,
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-12)',
      fontWeight: 'var(--weight-regular)',
      color: 'var(--text-body)',
      lineHeight: 'var(--leading-tight)',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, p.sub) : null, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      order: -2,
      display: 'block',
      margin: '-5px 0 0',
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-20)',
      fontWeight: 'var(--weight-bold)',
      color: 'var(--text-body)',
      lineHeight: 'var(--leading-title)',
      textTransform: 'uppercase',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, p.title), p.brand ? /*#__PURE__*/React.createElement("p", {
    style: {
      order: -1,
      margin: '-5px 0 0',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-12)',
      fontWeight: 'var(--weight-regular)',
      color: 'var(--text-meta)',
      lineHeight: 'var(--leading-title)',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, p.brand) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '1 1 auto',
      minHeight: 8,
      margin: '-6px 0'
    }
  }), /*#__PURE__*/React.createElement(__ds_scope.EffectCountRow, {
    strains: p.strains,
    counts: p.counts
  }), options.length ? /*#__PURE__*/React.createElement(__ds_scope.VariantSelect, {
    options: options,
    value: selectedIndex,
    open: open,
    onToggle: onToggleVariants,
    onSelect: onSelectVariant
  }) : /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      minHeight: 'var(--control-height)'
    }
  }), sel ? /*#__PURE__*/React.createElement(__ds_scope.PurchaseOptions, {
    value: purchaseMode,
    onChange: onPurchaseModeChange,
    oncePrice: sel.price,
    subPrice: money(sel.price, 0.7)
  }) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'stretch',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "dark",
    onClick: onDetails,
    style: {
      order: 1,
      flex: '0 0 34%',
      fontSize: 'var(--text-13)'
    }
  }, "Details"), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "cta",
    icon: "cartplus",
    iconSize: 22,
    full: true,
    added: added,
    disabled: disabled,
    onClick: onAdd,
    style: {
      order: 2
    }
  }, disabled ? 'Sold Out' : null)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      gap: 6,
      flexWrap: 'wrap'
    }
  }, p.shipNote ? /*#__PURE__*/React.createElement(__ds_scope.Chip, null, p.shipNote) : null, /*#__PURE__*/React.createElement(__ds_scope.Rating, {
    average: p.ratingAvg,
    count: p.ratingCount
  }))));
}
Object.assign(__ds_scope, { ProductCard, splitOption: __ds_scope.splitOption });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/product/ProductCard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/storefront/PlpScreen.jsx
try { (() => {
const {
  TopAppBar,
  BottomNavBar,
  SiteFooter,
  ProductCard
} = window.ModernHerbCoDesignSystem_c909b2;

/* Product listing page. Below 768px it is a single column with the bottom nav;
   at 768px and up the grid fills auto-fit columns of at least 380px and the
   footer replaces the tab bar. */
function PlpScreen({
  wide,
  products,
  cartCount,
  sel,
  open,
  mode,
  added,
  on
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100%',
      background: 'var(--surface-page)'
    }
  }, /*#__PURE__*/React.createElement(TopAppBar, {
    wide: wide,
    cartCount: cartCount,
    onCart: () => on.cart(),
    onMenu: () => on.menu()
  }), /*#__PURE__*/React.createElement("main", {
    style: {
      flexGrow: 1,
      width: '100%',
      maxWidth: 1400,
      margin: '0 auto',
      padding: wide ? '24px 40px 40px' : '20px 20px 24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      paddingBottom: 18,
      borderBottom: '1px solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-ui)',
      fontSize: 'var(--text-26)',
      fontWeight: 'var(--weight-heavy)',
      letterSpacing: 'var(--track-tight)',
      color: 'var(--text-body)'
    }
  }, "Shop all"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '4px 0 0',
      fontSize: 'var(--text-14)',
      color: 'var(--text-form)'
    }
  }, products.length, " products \xB7 lab tested, fast shipping")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      margin: '22px 0 10px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      width: 9,
      height: 9,
      borderRadius: '50%',
      background: 'var(--accent)',
      border: '1.5px solid var(--ink)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 'var(--text-13)',
      fontWeight: 'var(--weight-heavy)',
      letterSpacing: 'var(--track-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--text-body)'
    }
  }, "All products")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 20,
      gridTemplateColumns: wide ? 'repeat(auto-fit,minmax(380px,1fr))' : '1fr'
    }
  }, products.map(p => /*#__PURE__*/React.createElement(ProductCard, {
    key: p.id,
    product: p,
    selectedIndex: sel[p.id] || 0,
    open: open === p.id,
    purchaseMode: mode[p.id] || 'sub',
    added: added === p.id,
    onToggleVariants: () => on.toggle(p.id),
    onSelectVariant: i => on.select(p.id, i),
    onPurchaseModeChange: m => on.mode(p.id, m),
    onAdd: () => on.add(p.id),
    onDetails: () => on.details(p.id)
  })))), wide ? /*#__PURE__*/React.createElement(SiteFooter, null) : /*#__PURE__*/React.createElement(BottomNavBar, {
    current: "shop",
    onSelect: () => {}
  }));
}
Object.assign(window, {
  PlpScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/storefront/PlpScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/storefront/QuickView.jsx
try { (() => {
const {
  Modal,
  Button,
  PerksBar,
  QuantityStepper,
  OptionTile,
  SizeButton,
  Rating,
  Icon,
  EffectIcon,
  EFFECT_TINT,
  STRAIN_NAME,
  splitOption
} = window.ModernHerbCoDesignSystem_c909b2;

/* Quick view — the card's Details target. Selection is shared with the card
   behind it, so changing a variant here updates both. Gallery, video and lab
   PDF slots are left as placeholders: the source has no such assets. */
function money(n) {
  return '$' + (Math.round(n * 100) / 100).toFixed(2);
}
function priceNum(p) {
  return parseFloat(String(p).replace(/[^0-9.]/g, '')) || 0;
}
function axes(c) {
  const twoAxis = c.options.some(o => o.title.indexOf(' / ') !== -1);
  if (!twoAxis) return {
    twoAxis: false,
    flavors: [],
    sizes: c.options.map((o, i) => ({
      label: o.title,
      idx: i,
      soldOut: !!o.soldOut
    }))
  };
  const flavors = [],
    sizes = [];
  c.options.forEach(o => {
    const sp = splitOption(o.title);
    if (!flavors.some(x => x.label === sp.flavor)) flavors.push({
      label: sp.flavor,
      strain: o.strain
    });
    if (sizes.indexOf(sp.count) === -1) sizes.push(sp.count);
  });
  return {
    twoAxis: true,
    flavors,
    sizes
  };
}
function findOption(c, flavor, size) {
  for (let i = 0; i < c.options.length; i++) {
    const sp = splitOption(c.options[i].title);
    if (sp.flavor === flavor && sp.count === size) return i;
  }
  return -1;
}
function QuickView({
  product,
  wide,
  selectedIndex = 0,
  mode = 'sub',
  qty = 1,
  added,
  on
}) {
  if (!product) return null;
  const c = product;
  const sel = c.options[selectedIndex];
  const sp = splitOption(sel.title);
  const ax = axes(c);
  const sub = mode === 'sub';
  const unit = sub ? priceNum(sel.price) * 0.7 : priceNum(sel.price);
  const disabled = c.options.every(o => o.soldOut) || !!sel.soldOut;
  const pad = wide ? 40 : 24;
  const pick = (flavor, size) => {
    let i = findOption(c, flavor, size);
    if (i === -1) i = c.options.findIndex(o => splitOption(o.title).flavor === flavor);
    if (i === -1) i = c.options.findIndex(o => splitOption(o.title).count === size);
    on.select(c.id, Math.max(0, i));
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: pad - 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: wide ? 'grid' : 'block',
      gridTemplateColumns: '1fr 1fr',
      gap: 40,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("section", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: '100%',
      aspectRatio: '1/1',
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-card)',
      border: '1px solid var(--border-hairline)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 16,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 16,
      left: 16,
      zIndex: 10,
      fontSize: 'var(--text-13)',
      fontWeight: 'var(--weight-semibold)',
      color: 'var(--text-body)'
    }
  }, c.potencyWord, " Potency"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 16,
      right: 16,
      zIndex: 10,
      color: 'var(--border-control)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "share",
    size: 18
  })), c.promo ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 16,
      left: 16,
      zIndex: 10,
      background: 'var(--accent)',
      border: '1px solid var(--border-control)',
      color: 'var(--text-body)',
      fontSize: 'var(--text-12)',
      fontWeight: 'var(--weight-heavy)',
      padding: '5px 10px',
      borderRadius: 'var(--radius-pill)'
    }
  }, c.promo) : null, /*#__PURE__*/React.createElement("img", {
    src: c.img,
    alt: c.title,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'contain'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      padding: '8px 0'
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-pressed": "true",
    style: {
      width: 80,
      height: 80,
      padding: 4,
      background: 'var(--surface-card)',
      border: '1.5px solid var(--ink)',
      borderRadius: 'var(--radius-control)',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: c.img,
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'contain'
    }
  })), ['play', 'pdf'].map(g => /*#__PURE__*/React.createElement("div", {
    key: g,
    style: {
      width: 80,
      height: 80,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--surface-raised)',
      border: '1px solid var(--border-hairline)',
      borderRadius: 'var(--radius-control)',
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: g,
    size: 26
  }))))), /*#__PURE__*/React.createElement("section", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 24,
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-15)',
      color: 'var(--text-tertiary)'
    }
  }, c.brand), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-26)',
      fontWeight: 'var(--weight-bold)',
      lineHeight: 'var(--leading-title)',
      textTransform: 'uppercase',
      color: 'var(--text-body)'
    }
  }, c.title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-15)',
      color: 'var(--text-muted)'
    }
  }, c.sub), /*#__PURE__*/React.createElement(Rating, {
    average: c.ratingAvg,
    count: c.ratingCount,
    size: 16
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: 'var(--border-hairline)',
      width: '100%'
    }
  }), ax.twoAxis ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-13)',
      fontWeight: 'var(--weight-semibold)'
    }
  }, "Flavor: ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 'var(--weight-regular)'
    }
  }, sp.flavor)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,minmax(0,1fr))',
      gap: 10
    }
  }, ax.flavors.map(fl => /*#__PURE__*/React.createElement(OptionTile, {
    key: fl.label,
    label: fl.label,
    strain: fl.strain,
    selected: fl.label === sp.flavor,
    onClick: () => pick(fl.label, sp.count)
  })))) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-13)',
      fontWeight: 'var(--weight-semibold)'
    }
  }, ax.twoAxis ? 'Size' : 'Option'), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 10
    }
  }, ax.twoAxis ? ax.sizes.map(sz => {
    const i = findOption(c, sp.flavor, sz);
    return /*#__PURE__*/React.createElement(SizeButton, {
      key: sz,
      selected: sz === sp.count,
      disabled: i !== -1 && c.options[i].soldOut,
      onClick: () => pick(sp.flavor, sz)
    }, sz);
  }) : ax.sizes.map(o => /*#__PURE__*/React.createElement(SizeButton, {
    key: o.label,
    selected: o.idx === selectedIndex,
    disabled: o.soldOut,
    onClick: () => on.select(c.id, o.idx)
  }, o.label)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      border: '1px solid var(--border-hairline)',
      borderRadius: 'var(--radius-card)',
      overflow: 'hidden',
      background: 'var(--surface-card)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    role: "radio",
    "aria-checked": sub,
    onClick: () => on.mode(c.id, 'sub'),
    style: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      padding: 16,
      borderBottom: '1px solid var(--border-hairline)',
      background: sub ? 'var(--surface-tile)' : 'var(--surface-card)',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      marginTop: 2,
      flex: '0 0 18px',
      width: 18,
      height: 18,
      borderRadius: '50%',
      border: '1.5px solid var(--border-control)',
      background: 'var(--surface-card)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 9,
      height: 9,
      borderRadius: '50%',
      background: sub ? 'var(--ink)' : 'transparent'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '1 1 auto',
      display: 'flex',
      flexDirection: 'column',
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-13)',
      fontWeight: 'var(--weight-semibold)'
    }
  }, "Subscribe & Save"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-15)',
      fontWeight: 'var(--weight-bold)'
    }
  }, money(priceNum(sel.price) * 0.7))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-raised)',
      border: '1px solid var(--border-hairline)',
      borderRadius: 'var(--radius-control)',
      padding: 12,
      marginTop: 12,
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, [['tag', 'Save 30% on first order, then 10% thereafter'], ['sync', 'Swap, skip, pause anytime'], ['cancel', 'Cancel after 2nd delivery'], ['users', 'Join 200k+ happy customers'], ['truck', 'Prioritized, faster shipping']].map(([ic, tx]) => /*#__PURE__*/React.createElement("span", {
    key: tx,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      fontSize: 'var(--text-12)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 16
  }), tx))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      right: 0,
      background: 'var(--accent)',
      color: 'var(--text-body)',
      fontSize: 'var(--text-11)',
      fontWeight: 'var(--weight-bold)',
      letterSpacing: '1px',
      padding: '4px 8px',
      borderRadius: '0 0 0 9px'
    }
  }, "SAVE 30%")), /*#__PURE__*/React.createElement("div", {
    role: "radio",
    "aria-checked": !sub,
    onClick: () => on.mode(c.id, 'once'),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: 16,
      cursor: 'pointer',
      background: sub ? 'var(--surface-card)' : 'var(--surface-tile)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      flex: '0 0 18px',
      width: 18,
      height: 18,
      borderRadius: '50%',
      border: '1.5px solid var(--border-control)',
      background: 'var(--surface-card)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 9,
      height: 9,
      borderRadius: '50%',
      background: sub ? 'transparent' : 'var(--ink)'
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: '1 1 auto',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-13)',
      fontWeight: 'var(--weight-semibold)',
      color: sub ? 'var(--text-tertiary)' : 'var(--text-body)'
    }
  }, "One-time purchase"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-15)',
      fontWeight: 'var(--weight-bold)',
      color: sub ? 'var(--text-tertiary)' : 'var(--text-body)'
    }
  }, money(priceNum(sel.price)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'stretch',
      gap: 8,
      height: 56,
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement(QuantityStepper, {
    value: qty,
    onChange: q => on.qty(q)
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "cta",
    size: "md",
    full: true,
    disabled: disabled,
    onClick: () => on.add(c.id)
  }, disabled ? 'Sold Out' : 'Add to Cart - ' + money(unit * qty) + (added ? '  \u2713' : ''))), /*#__PURE__*/React.createElement(PerksBar, null))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      margin: '32px 0 16px'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      on.close();
    },
    style: {
      fontSize: 'var(--text-15)',
      textDecoration: 'underline',
      textUnderlineOffset: 4
    }
  }, "Continue Shopping")));
}
Object.assign(window, {
  QuickView
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/storefront/QuickView.jsx", error: String((e && e.message) || e) }); }

// ui_kits/storefront/data.js
try { (() => {
/* Product data for the storefront kit. Titles, form factors, flavours, counts,
   prices and ratings are the ones that appear in the source pages and
   screenshots — nothing invented. */
window.MHC_PRODUCTS = [{
  id: 1,
  img: '../../assets/products/thca-uncut-podkit-wedding-cake.jpg',
  title: 'THCA Liquid Diamonds',
  sub: 'Pod Kit',
  brand: 'Modern Herb Co',
  potencyWord: 'Max',
  promo: 'B2G1',
  shipNote: 'Fast Shipping',
  strains: ['indica', 'hybrid', 'sativa'],
  counts: ['1ct', '5ct', '20ct'],
  options: [{
    title: '1ct / Huckleberry',
    price: '$5',
    strain: 'indica'
  }, {
    title: '5ct / Huckleberry',
    price: '$10',
    strain: 'indica'
  }, {
    title: '20ct / Huckleberry',
    price: '$50',
    strain: 'indica'
  }, {
    title: '1ct / Passionfruit',
    price: '$5',
    strain: 'hybrid'
  }, {
    title: '5ct / Passionfruit',
    price: '$10',
    strain: 'hybrid'
  }, {
    title: '20ct / Passionfruit',
    price: '$50',
    strain: 'hybrid'
  }, {
    title: '1ct / Strawberry Rhubarb',
    price: '$5',
    strain: 'sativa'
  }, {
    title: '5ct / Strawberry Rhubarb',
    price: '$25',
    strain: 'sativa'
  }, {
    title: '20ct / Strawberry Rhubarb',
    price: '$50',
    strain: 'sativa'
  }],
  ratingAvg: '4.5',
  ratingCount: '(2)'
}, {
  id: 2,
  img: '../../assets/products/gummies-rosin-3ct-peaches-cream.png',
  title: 'Peaches & Cream',
  sub: 'Gummies',
  brand: 'Modern Herb Co',
  potencyWord: 'Enhanced',
  promo: '',
  shipNote: 'Fast Shipping',
  strains: ['indica', 'hybrid', 'sativa'],
  counts: ['3ct', '10ct', '30ct'],
  options: [{
    title: '3ct',
    price: '$15',
    strain: 'hybrid'
  }, {
    title: '10ct',
    price: '$42',
    strain: 'hybrid'
  }, {
    title: '30ct',
    price: '$99',
    strain: 'hybrid',
    soldOut: true
  }],
  ratingAvg: '4.8',
  ratingCount: '(22)'
}, {
  id: 3,
  img: '../../assets/products/rosin-gummies-30ct-mixed-berry.png',
  title: 'Mixed Berry',
  sub: 'Rosin Gummies',
  brand: 'Modern Herb Co',
  potencyWord: 'Max',
  promo: 'SALE',
  shipNote: 'Fast Shipping',
  strains: ['indica'],
  counts: ['10ct', '30ct'],
  options: [{
    title: '10ct',
    price: '$18',
    strain: 'indica'
  }, {
    title: '30ct',
    price: '$42',
    strain: 'indica'
  }],
  ratingAvg: '5.0',
  ratingCount: '(41)'
}, {
  id: 4,
  img: '../../assets/products/carts-live-rosin-pouch-headband.png',
  title: 'Headband',
  sub: 'Live Rosin Carts',
  brand: 'Modern Herb Co',
  potencyWord: 'Max',
  promo: '',
  shipNote: 'Fast Shipping',
  strains: ['sativa'],
  counts: ['1g', '2g'],
  options: [{
    title: '1g',
    price: '$49',
    strain: 'sativa'
  }, {
    title: '2g',
    price: '$79',
    strain: 'sativa'
  }],
  ratingAvg: '4.7',
  ratingCount: '(47)'
}, {
  id: 5,
  img: '../../assets/products/caramel-sample-pouch-hybrid.png',
  title: 'Caramel',
  sub: 'Sample Pouch',
  brand: 'Modern Herb Co',
  potencyWord: 'Max',
  promo: 'New!',
  shipNote: 'Fast Shipping',
  strains: ['hybrid'],
  counts: ['1ct'],
  options: [{
    title: '1ct',
    price: '$6',
    strain: 'hybrid'
  }],
  ratingAvg: '4.0',
  ratingCount: '(8)'
}];
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/storefront/data.js", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Chip = __ds_scope.Chip;

__ds_ns.EFFECT_WORD = __ds_scope.EFFECT_WORD;

__ds_ns.EFFECT_LABEL = __ds_scope.EFFECT_LABEL;

__ds_ns.STRAIN_NAME = __ds_scope.STRAIN_NAME;

__ds_ns.EFFECT_TINT = __ds_scope.EFFECT_TINT;

__ds_ns.EFFECT_ORDER = __ds_scope.EFFECT_ORDER;

__ds_ns.EffectIcon = __ds_scope.EffectIcon;

__ds_ns.ICON_PATHS = __ds_scope.ICON_PATHS;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.QuantityStepper = __ds_scope.QuantityStepper;

__ds_ns.Rating = __ds_scope.Rating;

__ds_ns.Modal = __ds_scope.Modal;

__ds_ns.PerksBar = __ds_scope.PerksBar;

__ds_ns.BottomNavBar = __ds_scope.BottomNavBar;

__ds_ns.SiteFooter = __ds_scope.SiteFooter;

__ds_ns.TopAppBar = __ds_scope.TopAppBar;

__ds_ns.EffectCountRow = __ds_scope.EffectCountRow;

__ds_ns.OptionTile = __ds_scope.OptionTile;

__ds_ns.ProductCard = __ds_scope.ProductCard;

__ds_ns.PurchaseOptions = __ds_scope.PurchaseOptions;

__ds_ns.SizeButton = __ds_scope.SizeButton;

__ds_ns.VariantSelect = __ds_scope.VariantSelect;

})();
