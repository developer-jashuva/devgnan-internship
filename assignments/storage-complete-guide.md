 LocalStorage & SessionStorage - Simple React Guide

Today we'll learn browser storage with very simple React examples!

🎯 What is LocalStorage & SessionStorage?

🏠 Simple Example

LocalStorage = Your Wallet
- Keep money until you spend it
- Money stays even when you sleep

SessionStorage = Your Pocket  
- Keep coins while shopping
- Empty pocket when you go home

---

💾 Part 1: LocalStorage (Keeps Data Forever)

How to Use LocalStorage


// 1. SAVE data
localStorage.setItem('name', 'John');
localStorage.setItem('age', '25');

// 2. GET data
const name = localStorage.getItem('name');
console.log(name); // 'John'

// 3. REMOVE data
localStorage.removeItem('name');

// 4. CLEAR everything
localStorage.clear();


Simple React Example - Remember User Name

jsx
import React, { useState } from 'react';

function NameRemember() {
    const [name, setName] = useState('');
    const [savedName, setSavedName] = useState('');
    
    const saveName = () => {
        localStorage.setItem('userName', name);
        alert('Name saved!');
    };
    
    const showName = () => {
        const saved = localStorage.getItem('userName');
        setSavedName(saved || 'No name saved');
    };
    
    const clearName = () => {
        localStorage.removeItem('userName');
        setSavedName('');
        alert('Name cleared!');
    };
    
    return (
        <div>
            <h1>Remember My Name</h1>
            
            <input 
                type="text" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
            />
            
            <button onClick={saveName}>Save Name</button>
            <button onClick={showName}>Show Saved Name</button>
            <button onClick={clearName}>Clear Name</button>
            
            <p>Saved name: {savedName}</p>
        </div>
    );
}

export default NameRemember;


---

📝 Part 2: SessionStorage (Keeps Data Until Tab Closes)

How to Use SessionStorage


// 1. SAVE data
sessionStorage.setItem('cart', '3 items');
sessionStorage.setItem('page', 'checkout');

// 2. GET data
const cart = sessionStorage.getItem('cart');
console.log(cart); // '3 items'

// 3. REMOVE data
sessionStorage.removeItem('cart');

// 4. CLEAR everything
sessionStorage.clear();


Simple React Example - Shopping Cart

jsx
import React, { useState } from 'react';

function ShoppingCart() {
    const [cartCount, setCartCount] = useState(0);
    
    const addItem = () => {
        const currentItems = sessionStorage.getItem('cartItems') || '0';
        const newCount = parseInt(currentItems) + 1;
        sessionStorage.setItem('cartItems', newCount);
        setCartCount(newCount);
        alert('Item added! Total: ' + newCount);
    };
    
    const showCart = () => {
        const items = sessionStorage.getItem('cartItems') || '0';
        setCartCount(parseInt(items));
    };
    
    const clearCart = () => {
        sessionStorage.removeItem('cartItems');
        setCartCount(0);
        alert('Cart cleared!');
    };
    
    return (
        <div>
            <h1>My Shopping Cart</h1>
            
            <button onClick={addItem}>Add Item</button>
            <button onClick={showCart}>Show Cart</button>
            <button onClick={clearCart}>Clear Cart</button>
            
            <p>Cart has: {cartCount} items</p>
        </div>
    );
}

export default ShoppingCart;


---

🔐 Part 3: Simple Zerodha Login Example

What We'll Build


User logs in → Save login info → Show dashboard → Remember user


Simple Zerodha Login in React

jsx
import React, { useState } from 'react';

function ZerodhaLogin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userEmail, setUserEmail] = useState('');
    const [loginTime, setLoginTime] = useState('');
    
    const checkIfLoggedIn = () => {
        const savedEmail = localStorage.getItem('zerodha_email');
        const savedTime = sessionStorage.getItem('zerodha_loginTime');
        
        if (savedEmail) {
            setUserEmail(savedEmail);
            setLoginTime(savedTime || 'Unknown');
            setIsLoggedIn(true);
        } else {
            setIsLoggedIn(false);
        }
    };
    
    const handleLogin = () => {
        if (email && password) {
            // Save email in localStorage (permanent)
            localStorage.setItem('zerodha_email', email);
            
            // Save login time in sessionStorage (temporary)
            const currentTime = new Date().toLocaleString();
            sessionStorage.setItem('zerodha_loginTime', currentTime);
            
            setUserEmail(email);
            setLoginTime(currentTime);
            setIsLoggedIn(true);
            
            alert('Login successful!');
        } else {
            alert('Please enter email and password');
        }
    };
    
    const handleLogout = () => {
        // Clear localStorage
        localStorage.removeItem('zerodha_email');
        
        // Clear sessionStorage
        sessionStorage.clear();
        
        setIsLoggedIn(false);
        setUserEmail('');
        setLoginTime('');
        setEmail('');
        setPassword('');
        
        alert('Logged out successfully!');
    };
    
    // Check login status when component loads
    const handleCheckLogin = () => {
        checkIfLoggedIn();
    };
    
    if (isLoggedIn) {
        return (
            <div style={{ padding: '20px', border: '1px solid ccc' }}>
                <h2>🎉 Welcome to Zerodha Dashboard!</h2>
                
                <div style={{ background: 'f0f0f0', padding: '15px', margin: '10px 0' }}>
                    <h3>User Information:</h3>
                    <p><strong>Email:</strong> {userEmail}</p>
                    <p><strong>Login Time:</strong> {loginTime}</p>
                </div>
                
                <div style={{ background: 'e8f5e8', padding: '15px', margin: '10px 0' }}>
                    <h3>Portfolio Summary:</h3>
                    <p>Total Value: ₹2,45,000</p>
                    <p>Today's P&L: +₹1,250</p>
                    <p>Holdings: 8 stocks</p>
                </div>
                
                <button onClick={handleLogout} style={{ background: 'red', color: 'white', padding: '10px 20px' }}>
                    Logout
                </button>
            </div>
        );
    }
    
    return (
        <div style={{ padding: '20px', border: '1px solid ccc' }}>
            <h2>🔐 Zerodha Login</h2>
            
            <div style={{ marginBottom: '15px' }}>
                <input 
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter email"
                    style={{ padding: '10px', width: '200px', marginRight: '10px' }}
                />
            </div>
            
            <div style={{ marginBottom: '15px' }}>
                <input 
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter password"
                    style={{ padding: '10px', width: '200px', marginRight: '10px' }}
                />
            </div>
            
            <button onClick={handleLogin} style={{ background: 'blue', color: 'white', padding: '10px 20px', marginRight: '10px' }}>
                Login
            </button>
            
            <button onClick={handleCheckLogin} style={{ background: 'green', color: 'white', padding: '10px 20px' }}>
                Check If Already Logged In
            </button>
            
            <div style={{ background: 'f9f9f9', padding: '10px', marginTop: '20px' }}>
                <h4>Storage Information:</h4>
                <p><strong>LocalStorage Email:</strong> {localStorage.getItem('zerodha_email') || 'None'}</p>
                <p><strong>SessionStorage Time:</strong> {sessionStorage.getItem('zerodha_loginTime') || 'None'}</p>
            </div>
        </div>
    );
}

export default ZerodhaLogin;


Complete App Component

jsx
import React from 'react';
import ZerodhaLogin from './ZerodhaLogin';

function App() {
    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h1>LocalStorage & SessionStorage Demo</h1>
            <ZerodhaLogin />
        </div>
    );
}

export default App;


---

🧪 Quick Tests

Test 1: localStorage (Permanent)


// Save data
localStorage.setItem('test', 'hello');

// Close browser completely
// Open browser again
// Check data
console.log(localStorage.getItem('test')); // Still shows 'hello'


Test 2: sessionStorage (Temporary)


// Save data
sessionStorage.setItem('test', 'hello');

// Close tab
// Open new tab
// Check data
console.log(sessionStorage.getItem('test')); // Shows null (gone!)


Test Your Zerodha App

1. Login with any email/password
2. Refresh page → Click "Check If Already Logged In"
3. Close tab → Open new tab → Check storage in console
4. Logout → Check if storage is cleared

---

📚 Key Points to Remember

✅ LocalStorage:
- Data stays forever
- Survives browser restart
- Shared across all tabs

✅ SessionStorage:
- Data deleted when tab closes
- Each tab has separate storage
- Good for temporary things

🔧 Basic Commands:


// Same for both localStorage and sessionStorage
.setItem('key', 'value')  // Save
.getItem('key')           // Get
.removeItem('key')        // Delete one
.clear()                  // Delete all


🎯 When to Use:

- LocalStorage: Login status, user preferences, settings
- SessionStorage: Shopping cart, form data, current page

💻 React Tips:

- Use `useState` to show storage data in UI
- Call storage methods in event handlers (onClick)
- Use button to check storage instead of useEffect
- Always handle null values from storage
