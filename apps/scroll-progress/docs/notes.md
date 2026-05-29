## Reading Progress Bar

### The Math

```
maxScrollable = scrollHeight - innerHeight
progress = (scrollY / maxScrollable) * 100
```

Subtract `innerHeight` because you can never scroll the full document — the last viewport-worth is always visible.

### The Math Visualized

```
BEFORE SCROLLING (scrollY = 0)

┌─────────────────┐ ─┐
│                 │  │
│   VISIBLE AREA  │  │ innerHeight (800px)
│                 │  │
└─────────────────┘ ─┘
│                 │
│  HIDDEN CONTENT │
│                 │
│                 │
└─────────────────┘ ← scrollHeight (2000px)

progress = 0 / (2000 - 800) * 100 = 0%
```

```
HALFWAY SCROLLED (scrollY = 600)

                   ─┐
│                 │  │ already scrolled past (600px)
                   ─┘
┌─────────────────┐ ─┐
│                 │  │
│   VISIBLE AREA  │  │ innerHeight (800px)
│                 │  │
└─────────────────┘ ─┘
│                 │
│  HIDDEN CONTENT │
└─────────────────┘ ← scrollHeight (2000px)

progress = 600 / (2000 - 800) * 100
         = 600 / 1200 * 100
         = 50%
```

```
FULLY SCROLLED (scrollY = 1200)

                   ─┐
│                 │  │
│                 │  │
│ SCROLLED PAST   │  │ scrollY (1200px)
│                 │  │
│                 │  │
                   ─┘
┌─────────────────┐ ─┐
│                 │  │
│   VISIBLE AREA  │  │ innerHeight (800px)
│  (at bottom)    │  │
└─────────────────┘ ─┘ ← scrollHeight (2000px)

progress = 1200 / (2000 - 800) * 100
         = 1200 / 1200 * 100
         = 100%
```

```
Key insight: At 100%, scrollY equals exactly scrollHeight - innerHeight.
You can never scroll further because the viewport always occupies the
bottom 800px. That's why we subtract innerHeight — it's the portion
you can never scroll past.
```

### Clamp

```ts
Math.min((scrollY / maxScrollable) * 100, 100);
```

Guards against `NaN` when page has no scroll (0/0) and values exceeding 100.

### Classes

**Outer bar (gray track)**

- `fixed top-0 left-0` — pinned to viewport
- `w-full` — spans entire width
- `h-1.5` — thin height
- `z-50` — sits above all content
- `bg-gray-300` — unfilled track color

**Inner bar (green fill)**

- `h-full` — matches parent height
- `bg-green-600` — fill color
- `transition-all duration-150` — smooth animation as width changes
- `style={{ width: \`${progress}%\` }}` — only dynamic part, driven by prop
