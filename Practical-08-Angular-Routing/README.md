# Practical 08: Single Page Application (SPA) Routing in Angular

## Objective
Implement client-side page navigation in an Angular application using the Angular Router (`RouterModule`, `Routes`, `routerLink`, `routerLinkActive`, and `<router-outlet>`).

---

## 💡 Concept Explanation
In a Single Page Application (SPA), navigation occurs dynamically without reloading the entire HTML page from the server.
- `app.routes.ts`: Maps URL paths to specific components.
- `<router-outlet>`: A placeholder directive that Angular dynamically fills with the component associated with the active route.
- `routerLink`: Replaces standard HTML `href` to intercept click events and execute client-side routing.
- `routerLinkActive`: Conditionally adds a CSS class when its corresponding route is active.

---

## 📂 Source Code Structure
- [`src/app/app.routes.ts`](./src/app/app.routes.ts): Route definitions for default/Home and About views.
- [`src/app/app.component.ts`](./src/app/app.component.ts): Root component importing router directives.
- [`src/app/app.component.html`](./src/app/app.component.html): Navigation bar and `<router-outlet>`.
- [`src/app/home/`](./src/app/home/): Home view component.
- [`src/app/about/`](./src/app/about/): About view component.
