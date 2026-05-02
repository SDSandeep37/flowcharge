# FlowCharge Frontend

React + Vite frontend for the FlowCharge API marketplace and billing system.

## Setup

```bash
npm install
npm run dev
```

The app usually runs at `http://localhost:5173`.

## Environment

Create `flowcharge/.env`:

```env
VITE_API_URL=http://localhost:5000/flowcharge
```

For deployment, set `VITE_API_URL` to the deployed backend base path, for example:

```env
VITE_API_URL=https://flowcharge-backend.onrender.com/flowcharge
```

## Scripts

```bash
npm run dev       # local development
npm run build     # production build
npm run preview   # preview production build
npm run lint      # eslint
```

## Main Routes

| Route | Description |
| --- | --- |
| `/login` | Login page |
| `/register` | Consumer registration |
| `/dashboard` | Role-aware dashboard |
| `/admin/users` | Admin user management |
| `/admin/owners` | Admin owner management |
| `/admin/apis` | Admin API management |
| `/owner/apis` | Owner API management |
| `/consumer/apis` | Consumer API marketplace |
| `/consumer/api/detail/:id` | Usage logs and billing for a subscribed API |
| `/success` | Stripe payment success |
| `/cancel` | Stripe payment cancel |

## Frontend Flow

1. On app load, `AuthContext` calls `/users/session` with cookies included.
2. The dashboard layout renders role-specific navigation.
3. Admins can view consumers, owners, and APIs.
4. Owners can register APIs.
5. Consumers browse APIs and create API keys.
6. Consumers view API usage logs and billing.
7. Pending bills redirect to Stripe Checkout through the backend payment route.

## Important Files

- `src/App.jsx`: route definitions.
- `src/Contexts/AuthContext.jsx`: current user session state.
- `src/Configs/dashboardMenuConfig.jsx`: role-based sidebar items.
- `src/components/ApiCards/ApiCards.jsx`: consumer API marketplace cards.
- `src/components/Billing/Billing.jsx`: billing details and payment button.
- `src/pages/Consumer/ConsumerApiDetail/ConsumerApiDetail.jsx`: usage logs and billing page.
