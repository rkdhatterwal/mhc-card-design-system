/**
 * Theme for redesign-comparison-tailwind.html.
 *
 * The colours are the original page's :root block, lifted verbatim, so every
 * utility resolves to exactly the value the hand-written CSS used.
 *
 * The page carries its Tailwind output inline. After changing a class, rebuild:
 *   npx tailwindcss@3 -c tailwind.config.js -i input.css -o out.css
 * then paste out.css back into the page's <style id="tw"> block.
 */
module.exports = {
  content: {
    files: ['./redesign-comparison-tailwind.html'],
    // the page carries its own compiled output; scanning that would re-extract
    // class names out of the CSS and let stale rules accumulate
    transform: { html: (c) => c.replace(/<style id="tw">[\s\S]*?<\/style>/, '') }
  },
  // assembled by string concat in build(), so the scanner cannot see it
  safelist: ['flex-[0_0_34%]'],
  theme: {
      extend: {
        colors: {
          'surface':                   '#faf9f5',
          'surface-container-low':     '#f4f4f0',
          'surface-container-highest': '#e3e2df',
          'ink':                       '#393839',
          'tertiary':                  '#5f5e5f',
          'muted-gray':                '#9CA3AF',
          'gray-text':                 '#666666',
          'accent':                    '#e3e829',
          'stroke-alt':                '#807E7F',
          'beige':                     '#F9F8F4',
          'cream':                     '#F7F6F1',
          'effect-sleep':              '#DCEDEC',
          'effect-energy':             '#F7F7DD',
          'effect-balance':            '#F0EAE4',
          /* card-local tones that were inline hexes in the original */
          'meta':        '#4A4A49',
          'sub-stroke':  '#DEDDD6',
          'menu-hover':  '#F2F4C4',
          'track':       '#EDECE7',
          'img-well':    '#f6f6f7'
        },
        fontFamily: {
          /* body { font-family:'Poppins',system-ui,sans-serif } — preflight puts
             fontFamily.sans on <html>, so `sans` carries it. */
          sans:  ['Poppins', 'system-ui', 'sans-serif'],
          body:  ["'Space Grotesk'", 'Poppins', 'sans-serif'],           /* --body-font  */
          title: ["'BrokenScript'", "'Space Grotesk'", 'Poppins', 'sans-serif'] /* --title-font */
        },
        borderRadius: {
          ctrl:  '9px',
          card:  '14px',
          img:   '13px 0 0 13px',
          slide: '20px'
        },
        boxShadow: {
          card:  '0 10px 30px rgba(17,24,39,.08)',
          nav:   '0 4px 12px rgba(17,24,39,.10)',
          menu:  '0 8px 28px rgba(0,0,0,.18)',
          panel: '0 24px 60px rgba(17,24,39,.35)'
        }
      }
  }
};
