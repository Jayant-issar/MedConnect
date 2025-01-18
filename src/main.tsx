import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import React from 'react'
// Import your Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY
import { ClerkProvider } from '@clerk/clerk-react'

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

createRoot(document.getElementById("root")!).render(

    <React.StrictMode>
        <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/" afterSignInUrl='/dashboard'>
            <App />
        </ClerkProvider>
    </React.StrictMode>

);
