# Practical 03: String Interpolation in Angular

## Objective
Write an Angular program to demonstrate **string interpolation** by displaying dynamic messages, dates, method returns, and mathematical expressions stored in a component class onto the HTML template.

---

## 💡 Concept Explanation
String interpolation refers to embedding expressions into marked-up text using double curly braces: `{{ expression }}`.
Angular evaluates the expression within the braces and replaces it with the string representation of the result.

---

## 📂 Source Code Structure
- [`src/app/app.component.ts`](./src/app/app.component.ts): Component defining title, username, date object, and greeting method.
- [`src/app/app.component.html`](./src/app/app.component.html): Template displaying interpolated values and date pipe.
- [`src/app/app.component.css`](./src/app/app.component.css): Styled presentation card.

---

## 🖥️ Expected Output
- Title: *Angular String Interpolation Demo*
- Greeting: *Welcome back, DevUser!*
- Formatted Date (using Angular DatePipe)
- Arithmetic evaluation: `2 + 3 = 5`
