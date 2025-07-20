React Router DOM: Navigation in React Applications

Welcome to React Router DOM! Today we'll learn how to add navigation and multiple pages to your React applications. Just like how Zerodha has different sections (Dashboard, Orders, Portfolio) that you can navigate between, you'll learn to create multi-page React apps.

🎯 Today's Learning Journey


Why Routing? → What is React Router? → Installation → Core Concepts → Navigation → Assignment


---

🤔 Part 1: Why Do We Need Routing?

The Problem with Single Page Applications (SPAs)
By default, React creates Single Page Applications - everything happens on one page. But real applications need multiple views:


// Without Router - Everything in one component (BAD!)
function App() {
    return (
        <div>
            <Header />
            <Dashboard />      {/* Always shows dashboard */}
            <Orders />         {/* Always shows orders */}
            <Portfolio />      {/* Always shows portfolio */}
            <Settings />       {/* Always shows settings */}
        </div>
    );
}


Real-World Example: Zerodha Navigation

When you use Zerodha:

- `/dashboard` → Shows trading dashboard
- `/orders` → Shows your orders
- `/portfolio` → Shows your holdings
- `/profile` → Shows account settings

Each URL shows different content but it's still the same React app!

What We Want to Achieve

// With Router - Show different components based on URL (GOOD!)
function App() {
    return (
        <div>
            <Header />
            {/* URL: /dashboard → Show Dashboard */}
            {/* URL: /orders → Show Orders */}
            {/* URL: /portfolio → Show Portfolio */}
        </div>
    );
}


---

🚀 Part 2: What is React Router DOM?

Simple Definition
React Router DOM is a library that adds navigation capabilities to React applications. It allows you to:
- Show different components based on the URL
- Navigate between pages without page refresh
- Handle browser back/forward buttons
- Share specific page URLs

Key Benefits
1. URL-based Navigation: Each page has its own URL
2. Browser History: Back/forward buttons work correctly
3. Bookmarkable Pages: Users can bookmark specific pages
4. SEO Friendly: Search engines can index different pages
5. Professional Feel: Works like traditional websites

---

📦 Part 3: Installation and Setup

Step 1: Install React Router DOM

Using npm
npm install react-router-dom

Using yarn
yarn add react-router-dom


Step 2: Basic Setup Structure

// index.js or App.js
import { BrowserRouter } from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
            {/* Your app components go here */}
        </BrowserRouter>
    );
}


Important: `BrowserRouter` must wrap your entire application!

---

🧭 Part 4: Core Routing Concepts

1. Routes and Route
Think of Routes like a traffic controller that decides which component to show:


import { Routes, Route } from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </BrowserRouter>
    );
}


2. Link Component

Use `Link` instead of `<a>` tags for navigation:


import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
        </nav>
    );
}


Why Link instead of `<a>`?

- `<a>` refreshes the entire page (slow)
- `<Link>` updates only the content (fast)

3. useNavigate Hook

For programmatic navigation (like after form submission):


import { useNavigate } from 'react-router-dom';

function LoginForm() {
    const navigate = useNavigate();
    
    const handleLogin = () => {
        // After successful login
        navigate('/dashboard');
    };
    
    return (
        <button onClick={handleLogin}>Login</button>
    );
}

---

🎨 Part 6: Navigation UI Patterns

1. Active Link Styling

import { NavLink } from 'react-router-dom';

function Navigation() {
    return (
        <nav>
            <NavLink 
                to="/dashboard" 
                className={({ isActive }) => isActive ? 'active-link' : 'nav-link'}
            >
                Dashboard
            </NavLink>
        </nav>
    );
}


2. Conditional Navigation

function Header() {
    const location = useLocation();
    
    return (
        <header>
            <h1>Trading App</h1>
            {location.pathname !== '/login' && <Navigation />}
        </header>
    );
}


---

📚 ASSIGNMENT: Add Routing to Your Zerodha Trading Dashboard

🎯 Your Mission
Transform your existing Zerodha-style dashboard into a multi-page application using React Router DOM. Create separate pages for different trading sections just like the real Zerodha platform.

📋 What You Need to Build

Required Pages (5 Different Routes)
1. Dashboard (`/`) - Main trading interface
2. Orders (`/orders`) - Order management page
3. Holdings (`/holdings`) - Portfolio holdings view
4. Positions (`/positions`) - Current positions page
5. Funds (`/funds`) - Account funds management

Navigation Requirements
- Header Navigation: Links to all main sections
- Active States: Highlight current page in navigation
- Responsive: Works on desktop and mobile
- Professional: Matches Zerodha's navigation style

🛠️ Step-by-Step Implementation

Phase 1: Setup Routing (1 hour)
1. Install React Router DOM in your existing project
2. Wrap your App with BrowserRouter
3. Create basic Routes structure with placeholder components
4. Test navigation between pages

Phase 2: Create Page Components (2 hours)
5. Dashboard Page: Move your existing dashboard components here
6. Orders Page: Create dedicated orders management interface
7. Holdings Page: Build portfolio holdings display
8. Positions Page: Show current trading positions
9. Funds Page: Design account balance and funds transfer

Phase 3: Navigation & Polish (1-2 hours)
10. Header Navigation: Add Link components for all pages
11. Active States: Implement NavLink with active styling
12. Breadcrumbs: Add navigation breadcrumbs where appropriate
13. 404 Page: Handle invalid routes

🎯 Page-Specific Requirements

Dashboard Page (`/`)
- Your existing trading dashboard layout
- Watchlist, chart, and quick actions
- Market overview and account summary

Orders Page (`/orders`)
- Order history table with filters
- Pending, executed, and cancelled orders
- Order placement form
- Order status indicators

Holdings Page (`/holdings`)
- Complete portfolio overview
- Stock-wise holdings with P&L
- Performance charts and metrics
- Buy/sell action buttons

Positions Page (`/positions`)
- Current intraday positions
- Realized and unrealized P&L
- Position sizing and risk metrics
- Square-off functionality

Funds Page (`/funds`)
- Account balance display
- Add funds interface
- Withdrawal requests
- Transaction history

💡 Implementation Hints

Basic Router Setup

// App.js structure hint
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
            <Header />  {/* Navigation stays on all pages */}
            <Routes>
                {/* Define your routes here */}
            </Routes>
            <Footer />  {/* Footer stays on all pages */}
        </BrowserRouter>
    );
}


Navigation Component Pattern

// Header.js navigation hint
import { Link, useLocation } from 'react-router-dom';

function Header() {
    const location = useLocation();
    
    return (
        <header>
            <nav>
                {/* Create navigation links */}
            </nav>
        </header>
    );
}


✅ Success Criteria

Routing Implementation:
- React Router DOM properly installed and configured
- All 5 pages accessible via different URLs
- Navigation works without page refresh
- Browser back/forward buttons work correctly
- URLs are bookmarkable and shareable

Navigation Experience:
- Header navigation visible on all pages
- Active page highlighted in navigation
- Smooth transitions between pages
- Mobile-responsive navigation
- Professional styling matching Zerodha

Page Content:
- Each page has relevant trading content
- Dashboard retains your original layout
- Other pages have meaningful trading interfaces
- Consistent header/footer across pages
- 404 page for invalid routes

🏆 Bonus Challenges

1. Advanced Routing Features
   - Add nested routes for sub-sections
   - Implement route parameters for stock details
   - Create protected routes with login simulation

2. Enhanced Navigation
   - Add breadcrumb navigation
   - Implement search functionality in header
   - Create quick action shortcuts

3. User Experience
   - Add loading states during navigation
   - Implement smooth page transitions
   - Add keyboard navigation support

📝 Learning Reflection

After completing the routing implementation, answer these questions:

1. Routing Understanding:
   - How does React Router improve user experience compared to traditional websites?
   - What challenges did you face while implementing navigation?

2. Application Architecture:
   - How did adding routing change your component structure?
   - Which routing patterns did you find most useful?

3. Real-World Application:
   - How does proper routing benefit trading applications?
   - What routing features would you add in a production app?

⏰ Time Expectation
4-5 hours total - Build upon your existing dashboard project.

📚 Learning Outcomes

By completing this assignment, you will understand:

React Router Fundamentals:
- How to install and configure React Router DOM
- Creating routes and navigation between pages
- Using Link and NavLink components effectively

Navigation Patterns:
- Building professional navigation interfaces
- Implementing active states and responsive navigation
- Handling route parameters and nested routing

Application Architecture:
- Structuring multi-page React applications
- Organizing components for scalable routing
- Creating consistent layouts across pages

User Experience:
- Building intuitive navigation flows
- Implementing industry-standard navigation patterns
- Creating bookmarkable and shareable pages

Remember: You're transforming a single-page dashboard into a full-featured trading platform with proper navigation - just like real fintech applications! 🚀
