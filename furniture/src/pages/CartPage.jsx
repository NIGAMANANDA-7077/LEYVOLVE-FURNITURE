import React from 'react';
import { motion } from 'framer-motion';
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const CartPage = () => {
    const {
        cartItems,
        removeFromCart,
        updateQuantity,
        getCartTotal
    } = useCart();

    const subtotal = getCartTotal();
    const shipping = subtotal > 50000 ? 0 : 1500;
    const total = subtotal + shipping;

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: [0.6, 0.05, 0.01, 0.9]
            }
        }
    };

    return (
        <div className="min-h-screen bg-[#FFF8F0] py-20 px-6">
            <div className="container mx-auto max-w-6xl">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-12"
                >
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-gray-900 mb-4">
                        Shopping Cart
                    </h1>
                    <p className="text-gray-600 text-lg">
                        {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'} in your cart
                    </p>
                </motion.div>

                {cartItems.length === 0 ? (
                    // Empty Cart
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-white rounded-2xl p-16 text-center shadow-lg"
                    >
                        <ShoppingBag className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                        <h2 className="text-2xl font-serif text-gray-900 mb-2">Your cart is empty</h2>
                        <p className="text-gray-600 mb-8">Add some beautiful furniture to get started</p>
                        <Link
                            to="/products"
                            className="inline-flex items-center gap-2 px-8 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
                        >
                            Browse Products
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </motion.div>
                ) : (
                    <div className="grid lg:grid-cols-3 gap-8">
                        {/* Cart Items */}
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                            className="lg:col-span-2 space-y-4"
                        >
                            {cartItems.map((item) => (
                                <motion.div
                                    key={item.id}
                                    variants={itemVariants}
                                    layout
                                    className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
                                >
                                    <div className="flex gap-6">
                                        {/* Product Image */}
                                        <div className="w-32 h-32 flex-shrink-0 rounded-lg overflow-hidden bg-gray-100">
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>

                                        {/* Product Details */}
                                        <div className="flex-1">
                                            <div className="flex justify-between items-start mb-2">
                                                <div>
                                                    <h3 className="text-xl font-medium text-gray-900">{item.name}</h3>
                                                    <p className="text-sm text-gray-500">{item.category}</p>
                                                </div>
                                                <button
                                                    onClick={() => removeFromCart(item.id, item.variant)}
                                                    className="text-gray-400 hover:text-red-500 transition-colors"
                                                >
                                                    <Trash2 className="w-5 h-5" />
                                                </button>
                                            </div>

                                            <div className="flex justify-between items-end mt-4">
                                                {/* Quantity Controls */}
                                                <div className="flex items-center gap-3 border border-gray-200 rounded-lg px-3 py-2">
                                                    <button
                                                        onClick={() => updateQuantity(item.id, -1, item.variant)}
                                                        className="text-gray-600 hover:text-gray-900"
                                                    >
                                                        <Minus className="w-4 h-4" />
                                                    </button>
                                                    <span className="w-8 text-center font-medium">{item.quantity}</span>
                                                    <button
                                                        onClick={() => updateQuantity(item.id, 1, item.variant)}
                                                        className="text-gray-600 hover:text-gray-900"
                                                    >
                                                        <Plus className="w-4 h-4" />
                                                    </button>
                                                </div>

                                                {/* Price */}
                                                <div className="text-right">
                                                    <p className="text-2xl font-serif text-gray-900">
                                                        ₹{(item.price * item.quantity).toLocaleString()}
                                                    </p>
                                                    {item.quantity > 1 && (
                                                        <p className="text-sm text-gray-500">
                                                            ₹{item.price.toLocaleString()} each
                                                        </p>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* Order Summary */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="lg:col-span-1"
                        >
                            <div className="bg-white rounded-xl p-6 shadow-lg sticky top-24">
                                <h2 className="text-2xl font-serif text-gray-900 mb-6">Order Summary</h2>

                                <div className="space-y-4 mb-6">
                                    <div className="flex justify-between text-gray-600">
                                        <span>Subtotal</span>
                                        <span>₹{subtotal.toLocaleString()}</span>
                                    </div>
                                    <div className="flex justify-between text-gray-600">
                                        <span>Shipping</span>
                                        <span>{shipping === 0 ? 'Free' : `₹${shipping.toLocaleString()}`}</span>
                                    </div>
                                    {shipping === 0 && (
                                        <p className="text-sm text-green-600">✓ Free shipping on orders above ₹50,000</p>
                                    )}
                                    <div className="border-t pt-4">
                                        <div className="flex justify-between text-xl font-serif text-gray-900">
                                            <span>Total</span>
                                            <span>₹{total.toLocaleString()}</span>
                                        </div>
                                    </div>
                                </div>

                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full bg-gray-900 text-white py-4 rounded-lg font-medium text-lg hover:bg-gray-800 transition-colors mb-4"
                                >
                                    Proceed to Checkout
                                </motion.button>

                                <Link
                                    to="/products"
                                    className="block text-center text-gray-600 hover:text-gray-900 transition-colors"
                                >
                                    Continue Shopping
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CartPage;
