# Project 3 — Interactive Web Elements

Part of the DecodeLabs Frontend Development Industrial Training Kit (Batch 2026).

## Overview

An extension of the Project 2 site for **Fernweg Trail Co.**, adding real interactivity with vanilla JavaScript and DOM manipulation — a shopping cart flow, a dark mode toggle, and an FAQ accordion.

## Live Preview

Open `index.html` in any browser. No build step or server required.

## Features

- **Quantity selectors** — `+` / `-` buttons on each product update the displayed count in real time (won't go below 1)
- **Add to Cart** — clicking adds the selected quantity and price to a running cart total, updates the on-page cart summary, and shows brief "Added!" feedback on the button
- **Dark mode toggle** — switches the whole page theme using `classList.toggle()`, with the button label updating to match the current state
- **FAQ accordion** — click a question to expand/collapse its answer; the `+` / `−` icon updates to reflect open/closed state
- **Responsive layout** — carried over from Project 2 (mobile-first CSS, hamburger nav, breakpoints at 768px and 480px)

## Tech Stack

- HTML5
- CSS3 (Flexbox, Grid, transitions, media queries)
- Vanilla JavaScript (DOM manipulation, event listeners, no frameworks or libraries)

## File Structure

```
Project-3/
├── index.html
├── style.css
└── script.js
```

## How to Run

1. Clone or download this folder — **all three files must stay in the same directory**, or the styling and interactivity won't load.
2. Open `index.html` directly in a browser.

## Key JavaScript Concepts Practiced

- `addEventListener()` for click-based interactivity
- `classList.toggle()` / `classList.contains()` for state-driven UI changes
- `textContent` for safely updating displayed data (no `innerHTML`)
- Basic state tracking with `let` variables (cart count and total)
- `data-*` attributes to connect markup to JavaScript logic
- `setTimeout()` for temporary UI feedback

## Author

Built as part of the DecodeLabs Industrial Training Kit, Batch 2026.