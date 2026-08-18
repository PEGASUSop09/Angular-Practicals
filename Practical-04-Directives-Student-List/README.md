# Practical 04: Angular Directives - Display Student List with *ngFor

## Objective
Write an Angular program to display a list of 10 student names using an array and Angular's built-in structural directive `*ngFor`.

---

## 💡 Concept Explanation
Structural directives are responsible for HTML layout. They shape or reshape the DOM's structure, typically by adding, removing, or manipulating elements.
`*ngFor` repeats a portion of the HTML template once per each item from an iterable collection (like an Array).

---

## 📂 Source Code Structure
- [`src/app/student-list.component.ts`](./src/app/student-list.component.ts): Component with an array of 10 students.
- [`src/app/student-list.component.html`](./src/app/student-list.component.html): Template iterating over `studentNames` using `*ngFor`.
- [`src/app/student-list.component.css`](./src/app/student-list.component.css): Styled numbered card list with hover highlights.
