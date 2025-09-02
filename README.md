# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

Redux is a state management library for JavaScript apps.
It helps you manage global state in a predictable way.

Without Redux → components pass data via props (can get messy).
With Redux → you have a single store that holds all state, and components can read/update it directly

Core Concepts

Store → Single source of truth (holds global state).

Actions → Plain objects that describe what happened ({ type: "INCREMENT" }).

Reducers → Pure functions that update state based on actions.

Dispatch → Function to send actions to reducers.

Selectors → Functions to get specific pieces of state.

basic structure

src/
├─ store.js
├─ features/
│ ├─ authSlice.js
│ └─ cartSlice.js
├─ App.jsx
├─ components/
│ ├─ Navbar.jsx
│ └─ Cart.jsx
│ └─ Products.jsx
