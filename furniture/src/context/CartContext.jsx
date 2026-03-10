import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(() => {
        try {
            const localData = localStorage.getItem('cart');
            return localData ? JSON.parse(localData) : [];
        } catch (e) {
            return [];
        }
    });

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems]);

    const addToCart = (product, quantity = 1, variant = null) => {
        setCartItems(prevItems => {
            const existingItemIndex = prevItems.findIndex(
                item => item.id === product.id &&
                    JSON.stringify(item.variant) === JSON.stringify(variant)
            );

            if (existingItemIndex > -1) {
                const newItems = [...prevItems];
                newItems[existingItemIndex].quantity += quantity;
                return newItems;
            }

            return [...prevItems, { ...product, quantity, variant }];
        });
    };

    const removeFromCart = (id, variant = null) => {
        setCartItems(prevItems =>
            prevItems.filter(item =>
                !(item.id === id && JSON.stringify(item.variant) === JSON.stringify(variant))
            )
        );
    };

    const updateQuantity = (id, delta, variant = null) => {
        setCartItems(prevItems =>
            prevItems.map(item => {
                if (item.id === id && JSON.stringify(item.variant) === JSON.stringify(variant)) {
                    return { ...item, quantity: Math.max(1, item.quantity + delta) };
                }
                return item;
            })
        );
    };

    const clearCart = () => setCartItems([]);

    const getCartTotal = () => {
        return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    };

    const getCartCount = () => {
        return cartItems.reduce((count, item) => count + item.quantity, 0);
    };

    const value = {
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getCartTotal,
        getCartCount
    };

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
};
