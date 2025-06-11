                        DAY-7

 Bootstrap Grid System - Building Professional Layouts with Multiple Assignments

Today we'll master the Bootstrap Grid System through multiple hands-on assignments, focusing on desktop layouts and grid fundamentals without responsive design complexity.

🎯 Today's Learning Journey


Grid Basics → 12-Column System → Layout Patterns → Real-World Examples → Multiple Practice Assignments


---

📐 Part 1: Bootstrap Grid System Fundamentals

What is Bootstrap Grid System?

Bootstrap Grid is a powerful layout system that uses a 12-column structure to create organized, professional layouts. Think of it as a digital ruler where you can divide your page into precise sections.

Visual Understanding: The 12-Column System


Bootstrap 12-Column Grid (Desktop):
┌─┬─┬─┬─┬─┬─┬─┬─┬─┬─┬─┬─┐
│1│2│3│4│5│6│7│8│9│10│11│12│ ← Each column = 1/12 of width
└─┴─┴─┴─┴─┴─┴─┴─┴─┴─┴─┴─┘

Common Layout Examples:

┌───────────────────────────┐ col-12 (full width)
│        Full Width         │
└───────────────────────────┘

┌─────────────┬─────────────┐ col-6 + col-6 (half each)
│   Half 1    │   Half 2    │
└─────────────┴─────────────┘

┌─────┬─────────────┬─────┐ col-3 + col-6 + col-3
│  3  │      6      │  3  │ (sidebar + main + sidebar)
└─────┴─────────────┴─────┘

┌───┬───┬───┬───┬───┬───┐ col-2 each (6 equal columns)
│ 2 │ 2 │ 2 │ 2 │ 2 │ 2 │
└───┴───┴───┴───┴───┴───┘


Essential Grid Components

1. Container - The Foundation

<!-- Fixed-width container (1140px max-width on large screens) -->
<div class="container">
    <!-- Content goes here -->
</div>

<!-- Full-width container (takes entire viewport) -->
<div class="container-fluid">
    <!-- Content goes here -->
</div>


2. Row - Horizontal Groups

<div class="container">
    <div class="row">
        <!-- Columns must go inside rows -->
    </div>
</div>


3. Columns - The Content Areas

<div class="container">
    <div class="row">
        <div class="col-6">Column 1 (6/12 = 50% width)</div>
        <div class="col-6">Column 2 (6/12 = 50% width)</div>
    </div>
</div>




Best Practices Checklist

✅ Do's:

1. Always use container → row → col structure
2. Keep total columns = 12 in each row
3. Use semantic class names for styling
4. Test layouts at different screen sizes
5. Use nested grids for complex layouts

❌ Don'ts:

1. Don't put columns directly in container (missing row)
2. Don't exceed 12 columns in a single row
3. Don't use fixed heights unnecessarily
4. Don't forget gutters between columns
5. Don't mix grid systems (Bootstrap + custom)