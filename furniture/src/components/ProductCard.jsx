import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="group cursor-pointer"
        >
            <Link to={`/products/${product.id}`} className="block">
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-[#F5F5F5] mb-4">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        onError={(e) => {
                            e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjUwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjUwMCIgZmlsbD0iI0U1RTVFNSIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiM5OTk5OTkiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5Qcm9kdWN0IEltYWdlPC90ZXh0Pjwvc3ZnPg==';
                        }}
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                </div>

                <div className="space-y-1">
                    <h3 className="text-lg font-medium text-gray-900 group-hover:text-gray-600 transition-colors">
                        {product.name}
                    </h3>
                    <p className="text-gray-500">₨ {product.price.toFixed(2)}</p>
                </div>
            </Link>
        </motion.div>
    );
};

export default ProductCard;
