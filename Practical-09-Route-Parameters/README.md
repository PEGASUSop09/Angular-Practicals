# Practical 09: Dynamic Route Parameters with ActivatedRoute

## Objective
Demonstrate defining parameterized routes (`/user/:id`) and retrieving data in component classes using Angular's `ActivatedRoute` service.

---

## 💡 Concept Explanation
Parameterized routes allow passing dynamic identifier tokens (such as user IDs or order codes) directly within the URL path.
- In `app.routes.ts`: `{ path: 'user/:id', component: UserComponent }` where `:id` acts as a route parameter token.
- In `UserComponent`: `ActivatedRoute.snapshot.paramMap.get('id')` extracts the parameter value synchronously.

---

## 📂 Source Code Structure
- [`src/app/app.routes.ts`](./src/app/app.routes.ts): Routes including static `/home` and dynamic `/user/:id`.
- [`src/app/app.component.ts`](./src/app/app.component.ts) & [`src/app/app.component.html`](./src/app/app.component.html): Nav menu linking to user IDs `101`, `202`, and `203`.
- [`src/app/user/user.component.ts`](./src/app/user/user.component.ts): Injects `ActivatedRoute` and reads the `:id` parameter.
- [`src/app/user/user.component.html`](./src/app/user/user.component.html): Displays the active User ID dynamically.
