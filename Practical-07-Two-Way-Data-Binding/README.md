# Practical 07: Two-Way Data Binding with [(ngModel)]

## Objective
Create an Angular application to demonstrate **two-way data binding** using Angular's `FormsModule` and the `[(ngModel)]` directive.

---

## 💡 Concept Explanation
Two-way data binding gives components a way to share data in both directions:
1. Property updates from TypeScript reflect immediately on the HTML view.
2. User input in the HTML input field updates the TypeScript component property synchronously.

The banana-in-a-box syntax `[()]` combines property binding `[]` with event binding `()`.

---

## 📂 Source Code Structure
- [`src/app/app.component.ts`](./src/app/app.component.ts): Standalone component importing `FormsModule` with reactive properties.
- [`src/app/app.component.html`](./src/app/app.component.html): Input element bound via `[(ngModel)]` with dynamic greeting.
- [`src/app/app.component.css`](./src/app/app.component.css): Clean interactive form box.
