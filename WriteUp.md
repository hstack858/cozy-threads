# Cozy Threads — Take-Home Write-Up

## Overall Architecture & Design

- **Frontend**: Built with React.js and TypeScript using Next.js. Styling is handled primarily via inline styles, with CSS modules used selectively (e.g., for hover effects).
- **Backend**: Express.js server written in TypeScript. It integrates with Stripe using the Payment Intents API.
- **Testing**:
  - **End-to-End**: Playwright is used for simulating real user interactions in the browser.
  - **Integration**: Jest covers server logic and API endpoints.
- **CI/CD**: GitHub Actions automates linting, formatting, type-checking, testing, and builds.
- **Deployment**:
  - **Client**: Deployed to [Vercel](https://vercel.com) for its native Next.js support and ease of use.
  - **Server**: Hosted on [Render](https://render.com), chosen for simplicity and built-in environment variable management.
- **Tooling**: ESLint, Prettier, and TypeScript ensure code quality and consistency across the project.

---

## Key Decisions

- Chose **TypeScript** throughout the stack to catch errors early and enforce consistent types.
- Selected **Next.js** to utilize server-side rendering and automatic routing for an optimized developer and user experience.
- Opted for the **Stripe Payment Intents API** over Checkout Sessions to allow for customization using the Payment Element.
- Employed a **monorepo structure** for quicker development, shared tooling, and coupled CI/CD.
- Used **environment variables** for managing sensitive keys and URLs between environments.
- **Kept the backend minimal** (a single file) to prioritize clarity and reduce boilerplate for this project’s scope.

---

## Trade-Offs

- **Inline Styles**: Prioritized speed over scalability by using inline styles instead of CSS modules. For larger projects, I’d adopt a more structured styling solution (e.g. CSS Modules).
- **Hosting Platforms**: Used Vercel and Render for their convenience, though Render’s free tier may suspend the server due to inactivity. In a production setting, I’d consider a more scalable infrastructure like AWS.
- **State Management**: The cart is managed using React Context and `localStorage`. For more complex scenarios,a library like Zustand or Redux would provide finer-grained control over re-renders and include helpful developer tooling.

---

## Areas for Improvement

### UI/UX

- Improve responsiveness on mobile (notably around 400px width), especially the navbar and product layout.
- Add loading indicators for product cards and async operations like checkout.
- Implement graceful error states for network or server issues.

### Testing

- Add frontend tests with **React Testing Library** to cover component interactions and state updates.
- Expand backend test coverage to include edge cases and failure scenarios.
- Add tests for failure states such as invalid payment details or backend downtime.

---

## Future Enhancements

- **Stripe Integrations**:

  - Use the **Stripe Products API** to manage inventory dynamically without hardcoding product data.
  - Implement **Stripe Tax** to auto-calculate and collect tax based on location.
  - Add the **Address Element** for collecting shipping details.
  - Add a **Stripe webhook** endpoint to handle events like `payment_intent.succeeded` for order fulfillment.

- **Payment Flexibility**:

  - Support for multiple currencies based on browser locale or user selection.

- **Observability**:
  - Integrate with **Datadog** for monitoring performance and usage.
  - Use **Splunk** for centralized logging and incident tracing.
