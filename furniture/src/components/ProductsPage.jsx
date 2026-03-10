import React, { useState, useMemo, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useSearchParams } from 'react-router-dom';
import CategoryTabs from './CategoryTabs';
import ProductGrid from './ProductGrid';
import { products, categories } from '../data/productsData';

const ProductsPage = () => {
    const [searchParams] = useSearchParams();
    const [activeCategory, setActiveCategory] = useState('All');
    const [itemsToShow, setItemsToShow] = useState(12);

    useEffect(() => {
        const categoryParam = searchParams.get('category');
        if (categoryParam && categories.includes(categoryParam)) {
            setActiveCategory(categoryParam);
        }
    }, [searchParams]);

    const filteredProducts = useMemo(() => {
        if (activeCategory === 'All') {
            return products;
        }
        return products.filter(product => product.category === activeCategory);
    }, [activeCategory]);

    const displayedProducts = filteredProducts.slice(0, itemsToShow);
    const hasMore = itemsToShow < filteredProducts.length;

    const handleLoadMore = () => {
        setItemsToShow(prev => prev + 8);
    };

    const handleCategoryChange = (category) => {
        setActiveCategory(category);
        setItemsToShow(12);
        window.scrollTo({ top: 300, behavior: 'smooth' });
    };

    return (
        <div className="min-h-screen bg-[#FFF8F0]">
            {/* Header */}
            <section className="py-20 bg-white border-b border-gray-100">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center max-w-3xl mx-auto"
                    >
                        <h1 className="text-5xl md:text-6xl font-serif text-gray-900 mb-6">
                            Our Products
                        </h1>
                        <p className="text-gray-500 text-lg">
                            Discover our curated collection of premium furniture pieces designed to elevate your living spaces.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Category Filters */}
            <section className="py-12">
                <div className="container mx-auto px-6">
                    <CategoryTabs
                        categories={categories}
                        activeCategory={activeCategory}
                        onCategoryChange={handleCategoryChange}
                    />
                </div>
            </section>

            {/* Products Grid */}
            <section className="pb-20">
                <div className="container mx-auto px-6">
                    <ProductGrid products={displayedProducts} />

                    {/* Load More Button */}
                    {hasMore && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-center mt-16"
                        >
                            <button
                                onClick={handleLoadMore}
                                className="px-10 py-4 bg-white border border-gray-200 text-gray-900 rounded-full hover:bg-gray-50 hover:shadow-md transition-all duration-300 font-medium"
                            >
                                Load More
                            </button>
                        </motion.div>
                    )}

                    {/* No more items */}
                    {!hasMore && filteredProducts.length > 12 && (
                        <p className="text-center text-gray-400 mt-16">
                            You've reached the end of our {activeCategory === 'All' ? 'products' : activeCategory.toLowerCase()} collection.
                        </p>
                    )}
                </div>
            </section>
        </div>
    );
};

export default ProductsPage;
