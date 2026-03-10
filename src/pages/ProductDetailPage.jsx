import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, ShoppingBag, ArrowLeft, ChevronDown, Star, Truck, Shield, RefreshCw } from 'lucide-react';
import { products } from '../data/productsData';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/ProductCard';

// Accordion Component
const Accordion = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-gray-200">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full py-4 flex justify-between items-center text-left hover:text-gray-600 transition-colors"
            >
                <span className="font-medium text-gray-900">{title}</span>
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                </motion.div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                    >
                        <div className="pb-4 text-gray-600 leading-relaxed">
                            {children}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const ProductDetailPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { addToCart } = useCart();

    const [product, setProduct] = useState(null);
    const [mainImage, setMainImage] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [selectedColor, setSelectedColor] = useState('Beige');
    const [activeTab, setActiveTab] = useState('description');

    // Scroll to top on mount and id change
    useEffect(() => {
        window.scrollTo(0, 0);
        const foundProduct = products.find(p => p.id === parseInt(id));

        if (foundProduct) {
            setProduct(foundProduct);
            setMainImage(foundProduct.image);
        } else {
            // Handle not found
            navigate('/products');
        }
    }, [id, navigate]);

    if (!product) return null;

    // Derived State
    const relatedProducts = products
        .filter(p => p.category === product.category && p.id !== product.id)
        .slice(0, 4);

    // Mock Data for enriched experience
    const galleryImages = [
        product.image,
        'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=800&q=80'
    ];

    const colors = [
        { name: 'Beige', value: '#E5D0B1' },
        { name: 'Charcoal', value: '#374151' },
        { name: 'Terra', value: '#A0522D' }
    ];

    const handleAddToCart = () => {
        addToCart(product, quantity, { color: selectedColor });
        // Optional: Show toast or feedback
    };

    return (
        <div className="min-h-screen bg-[#FFF8F0] pt-24 pb-20">
            <div className="container mx-auto px-6 max-w-7xl">
                {/* Breadcrumb */}
                <button
                    onClick={() => navigate(-1)}
                    className="flex items-center text-gray-500 hover:text-gray-900 mb-8 transition-colors"
                >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Products
                </button>

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 mb-20">
                    {/* Left: Image Gallery */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6"
                    >
                        {/* Main Image */}
                        <div className="aspect-[4/5] bg-gray-100 rounded-2xl overflow-hidden shadow-sm">
                            <motion.img
                                key={mainImage}
                                src={mainImage}
                                alt={product.name}
                                initial={{ opacity: 0.8 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.3 }}
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 cursor-zoom-in"
                            />
                        </div>

                        {/* Thumbnails */}
                        <div className="grid grid-cols-4 gap-4">
                            {galleryImages.map((img, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setMainImage(img)}
                                    className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${mainImage === img ? 'border-gray-900' : 'border-transparent hover:border-gray-300'
                                        }`}
                                >
                                    <img src={img} alt={`View ${idx + 1}`} className="w-full h-full object-cover" />
                                </button>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right: Product Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="mb-2">
                            <span className="text-sm font-medium text-gray-500 tracking-wider uppercase">
                                {product.category}
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-5xl font-serif text-gray-900 mb-4">
                            {product.name}
                        </h1>

                        <div className="flex items-center gap-4 mb-8">
                            <p className="text-3xl text-gray-900 font-light">
                                ₨ {product.price.toLocaleString()}
                            </p>
                            <div className="flex items-center gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                ))}
                                <span className="text-sm text-gray-500 ml-2">(12 reviews)</span>
                            </div>
                        </div>

                        <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                            Experience the perfect blend of form and function. This piece is crafted from sustainably
                            sourced materials, featuring premium upholstery and structurally sound joinery.
                            Designed to be the focal point of your modern living space.
                        </p>

                        {/* Configurator */}
                        <div className="space-y-8 border-t border-gray-200 py-8">
                            {/* Colors */}
                            <div>
                                <h3 className="text-sm font-medium text-gray-900 mb-3 uppercase tracking-wide">Color</h3>
                                <div className="flex gap-3">
                                    {colors.map((color) => (
                                        <button
                                            key={color.name}
                                            onClick={() => setSelectedColor(color.name)}
                                            className={`w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all ${selectedColor === color.name
                                                    ? 'border-gray-900 ring-2 ring-gray-200 ring-offset-2'
                                                    : 'border-transparent hover:scale-110'
                                                }`}
                                            title={color.name}
                                        >
                                            <span
                                                className="w-full h-full rounded-full border border-gray-200 block"
                                                style={{ backgroundColor: color.value }}
                                            />
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="flex flex-col sm:flex-row gap-4 mb-12">
                            {/* Quantity */}
                            <div className="flex items-center border border-gray-300 rounded-lg w-fit">
                                <button
                                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                    className="p-4 hover:text-gray-600 transition-colors"
                                >
                                    <Minus className="w-4 h-4" />
                                </button>
                                <span className="w-12 text-center font-medium">{quantity}</span>
                                <button
                                    onClick={() => setQuantity(quantity + 1)}
                                    className="p-4 hover:text-gray-600 transition-colors"
                                >
                                    <Plus className="w-4 h-4" />
                                </button>
                            </div>

                            {/* Add to Cart */}
                            <button
                                onClick={handleAddToCart}
                                className="flex-1 bg-gray-900 text-white py-4 rounded-lg font-medium text-lg hover:bg-gray-800 transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl active:scale-95"
                            >
                                <ShoppingBag className="w-5 h-5" />
                                Add to Cart
                            </button>
                        </div>

                        {/* Features / FAQ */}
                        <div className="space-y-1">
                            <Accordion title="Features & Dimensions">
                                <ul className="list-disc list-inside space-y-2">
                                    <li>Premium hardwood frame</li>
                                    <li>High-density foam cushioning</li>
                                    <li>Dimensions: 32"W x 34"D x 30"H</li>
                                    <li>Hand-finished details</li>
                                </ul>
                            </Accordion>
                            <Accordion title="Shipping & Returns">
                                <p>Free standard shipping on all orders. We accept returns within 30 days of delivery for a full refund, minus return shipping costs.</p>
                            </Accordion>
                            <Accordion title="Care Instructions">
                                <p>Spot clean with mild detergent. Avoid direct sunlight to prevent fading. Vacuum regularly to remove dust.</p>
                            </Accordion>
                        </div>
                    </motion.div>
                </div>

                {/* Related Products */}
                <div className="border-t border-gray-200 pt-16">
                    <div className="flex justify-between items-end mb-12">
                        <h2 className="text-4xl font-serif text-gray-900">In the Same Mood</h2>
                        <button
                            onClick={() => navigate('/products')}
                            className="text-gray-600 hover:text-gray-900 underline underline-offset-4"
                        >
                            View Collection
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {relatedProducts.map(related => (
                            <ProductCard key={related.id} product={related} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailPage;
