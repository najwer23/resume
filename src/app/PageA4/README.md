# PageA4

A React component that puts **any content** on A4 sheets and splits it between pages.
Text is cut at line boundaries, so a paragraph can start on one page and continue on the next.
Works on mobile (the sheets shrink to fit the screen) and prints through the browser (`window.print()`).

No dependencies except React 18+. TypeScript included.

## Install

Copy the `PageA4` folder into your project. If TypeScript complains about the CSS module import, add
a `global.d.ts` (Vite, Next.js and Create React App already include this):

```ts
declare module '*.module.css' {
  const classes: Record<string, string>;
  export default classes;
}
```

## Use

```tsx
import PageA4, { PageBreak, NoSplit } from './PageA4';

export function Document() {
  return (
    <PageA4 margin={15} toolbar={<Navigation />}>
      <MyHeader />
      <MyLongArticle />
      <PageBreak /> {/* new page starts here */}
      <NoSplit>
        {' '}
        {/* never cut through this block */}
        <MyTable />
      </NoSplit>
      <img src="photo.jpg" alt="" /> {/* images are never cut */}
    </PageA4>
  );
}
```

Print with `window.print()`, for example from a button inside the `toolbar`.

## Props

| Prop            | Type                      | Default  | Description                                                                      |
| --------------- | ------------------------- | -------- | -------------------------------------------------------------------------------- |
| `children`      | `ReactNode`               |          | Your content                                                                     |
| `margin`        | `number` (mm)             | `10`     | Page margin, on screen and as the printer margin                                 |
| `scale`         | `'auto' \| number`        | `'auto'` | `'auto'` fits the screen width; a number is a fixed zoom (`1` = real size)       |
| `topSpacing`    | `number` (px)             | `10`     | Extra empty space above the first line of every page after the first             |
| `sidePadding`   | `number` (px)             | `10`     | Space left and right of the paper on screen                                      |
| `gap`           | `number` (px)             | `16`     | Space between sheets on screen                                                   |
| `contentStyle`  | `CSSProperties`           |          | Font, size, colour of the content (default is 12pt Georgia)                      |
| `toolbar`       | `ReactNode`               |          | Shown above the first sheet on screen only, scaled with the paper, never printed |
| `className`     | `string`                  |          | Class for the outer wrapper                                                      |
| `onPagesChange` | `(count: number) => void` |          | Called when the number of pages changes                                          |

## Helpers

- **`<PageBreak />`** starts a new page at that point.
- **`<NoSplit>`** moves the whole block to the next page if it does not fit. It accepts normal `div` props.
- Always kept whole, without wrapping: `img`, `svg`, `canvas`, `video`, `picture`, `figure` and table rows (`tr`).
  Add or remove selectors in `ATOMIC` in `constants.ts`.
- **`className="no-print"`** hides any element when printing. It is a global class defined in
  `PageA4.module.css`.

## Printing, headers and footers

`margin` is also used as the printer page margin (`@page`). The browser draws its own header and footer
(date, title, URL, page numbers) inside that margin, so there are no custom page numbers.

In the print dialog:

- tick **Headers and footers** to show them, untick to hide them;
- leave **Margins** on _Default_. _None_ or _Custom_ override your `margin` and the pages can be cut or shifted;
- keep `margin` at 10 mm or more, otherwise the header and footer can be clipped or overlap the content.

Do not add another `@page { margin: ... }` rule anywhere else in your app.

## How it works

1. A hidden copy of the content is rendered at the printable width of a page.
2. `collect` reads the position of every line of text, every unsplittable element and every `<PageBreak />`.
3. `computeRanges` picks, for every page, the last place before the page is full where the content can be
   cut without slicing a line or a protected block. The result is a list of `[start, end]` bands in px.
4. Every sheet shows its own band: the content is rendered again inside a clipped window and moved up by `start`.
5. When printing, each sheet is exactly the printable area (A4 minus the margin), and the browser draws
   its header and footer around it.

## Limits

- **The children are rendered once per page**, plus a hidden copy for measuring. Keep them presentational.
  Local `useState` inside them is not shared between pages: keep state in a parent and pass it as props.
  `id` attributes will appear several times in the page.
- Content is measured on screen at A4 width, so fonts and images must have loaded. The component re-measures
  automatically when they do.
- A block taller than one page and not splittable (a huge image) is cut by force at the page end.
- Styles in `PageA4.module.css` live in `@layer PaperA4`. Unlayered global CSS (for example a reset like
  `div { ... }`) wins over them. If the sheets look different than expected, check for that first.
- Parents of `<PageA4>` must not have `overflow: hidden` or a fixed height while printing, otherwise
  only the visible part is printed.

## Troubleshooting

| Problem                                    | Fix                                                                                   |
| ------------------------------------------ | ------------------------------------------------------------------------------------- |
| First line of the next page looks clipped  | Increase `PAD` in `constants.ts` (default 3 px)                                       |
| Text starts too close to the top of a page | Increase `topSpacing`                                                                 |
| A page ends with room for one more line    | Lower `topSpacing`, or check that your content has no large bottom margins at the cut |
| Blank page at the end when printing        | Make sure nothing else on the page (footer, spacer) is rendered after `<PageA4>`      |
| Buttons or menus appear on paper           | Add `className="no-print"`, or put them in the `toolbar` prop                         |
| Toolbar does not scale                     | Remove `position: fixed` / `sticky` from it                                           |
