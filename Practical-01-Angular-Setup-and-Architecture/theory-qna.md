# Theory & Architecture Q&A

### Q.1. Explain the role of components in Angular. How do components interact to build a complete application?

#### **Answer:**
In Angular, a **Component** is the fundamental building block of the user interface (UI). Every Angular application consists of at least one root component (`AppComponent`) and typically forms a hierarchical component tree.

#### **Structure of a Component:**
An Angular component combines three core elements:
1. **TypeScript Class:** Contains application state, properties, and business logic methods.
2. **HTML Template:** Defines the visual layout and structure rendered on the DOM.
3. **CSS / Stylesheet:** Scoped styles that encapsulate the look and feel of that specific component.
4. **`@Component` Decorator:** Metadata configuration specifying the `selector`, `templateUrl`, and `styleUrls`.

```typescript
@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  userName: string = 'Pranav';
}
```

#### **How Components Interact:**
Components communicate using standard communication patterns:
1. **Parent-to-Child Communication (`@Input()`):**
   The parent component passes data down into child properties using property binding (`[prop]="value"`).
2. **Child-to-Parent Communication (`@Output()` & `EventEmitter`):**
   The child component raises custom events (`event.emit()`) which parent handles via event binding (`(event)="handler()"`).
3. **Unrelated / Cross-Component Communication (Services & RxJS Subjects):**
   Angular Services act as singletons to share state across decoupled components using dependency injection.
4. **Template Reference Variables & `@ViewChild()`:**
   Enables direct access to child component methods and native DOM elements.

---

### Q.2. What is data binding in Angular? Describe the different types of data binding.

#### **Answer:**
**Data Binding** is the automatic synchronization mechanism between the component class logic (TypeScript) and the view (HTML Template).

Angular provides 4 primary categories of data binding:

| Binding Type | Syntax | Direction | Example |
| :--- | :---: | :---: | :--- |
| **Interpolation** | `{{ expression }}` | Component → Template | `<h3>Welcome, {{ username }}</h3>` |
| **Property Binding** | `[property]="expression"` | Component → Template | `<img [src]="profilePicUrl" [disabled]="isDisabled" />` |
| **Event Binding** | `(event)="handler()"` | Template → Component | `<button (click)="onSubmit()">Submit</button>` |
| **Two-Way Data Binding** | `[(ngModel)]="property"` | Component ↔ Template | `<input [(ngModel)]="username" />` |
