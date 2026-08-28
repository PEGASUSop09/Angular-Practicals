# Practical 05: One-Way Data Binding - Weekly Timetable

## Objective
Create an Angular application to display a college weekly academic timetable using one-way data binding and nested arrays.

---

## 💡 Concept Explanation
One-way data binding transfers data in a single direction: from the TypeScript component class to the HTML template view.
In this practical:
- `days` array stores column headers (Monday to Friday).
- `periods` array stores the daily time slots.
- `timetable` 2D matrix (`string[][]`) stores the assigned subjects for each day and slot.
Nested `*ngFor` directives iterate through the rows and cells dynamically.

---

## 📂 Source Code Structure
- [`src/app/app.component.ts`](./src/app/app.component.ts): Timetable data matrix and periods definition.
- [`src/app/app.component.html`](./src/app/app.component.html): Dynamic table rendered with nested `*ngFor` loops.
- [`src/app/app.component.css`](./src/app/app.component.css): Clean, modern table styling.
