# tailwind-color-list

This package lets you to find out tailwind color with shade for a given hex color. If the hex color is not present as a predifiend tailwind color it returns null.
fuchsia-300

```typescript
import { findColorName } from "tailwind-color-list";

findColorName("#000000"); // black
findColorName("#ffffff"); // white

findColorName("#22c55e"); // green-500
findColorName("#f0abfc"); // fuchsia-300

// invalid predifined tailwind-color
findColorName("#94a3b9"); // null

// "#fafafa" will only return "neutral-50" even though,
// "zinc-50" is also "#fafafa"
findColorName("#fafafa"); // neutral-50
```
