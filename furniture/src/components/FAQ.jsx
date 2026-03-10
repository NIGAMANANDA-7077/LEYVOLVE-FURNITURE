import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, MessageCircleQuestion } from 'lucide-react';

const faqs = [
    {
        question: "How do I get started with LEYVOLVE FURNITURE?",
        answer: "Getting started is simple. Contact us through our form or give us a call to schedule your initial consultation. We'll discuss your vision and guide you through the next steps."
    },
    {
        question: "Do you offer design services or only construction?",
        answer: "We offer end-to-end services. Our team includes expert architects and interior designers who work alongside our construction teams to bring your project to life seamlessly."
    },
    {
        question: "How long does a typical renovation take?",
        answer: "Timelines vary based on project scope. A bathroom remodel might take 2-3 weeks, while a full home renovation could take 3-6 months. We provide a detailed timeline during the planning phase."
    },
    {
        question: "What areas do you serve?",
        answer: "We currently serve the greater metropolitan area and surrounding suburbs. Please contact us to check if your specific location is within our service range."
    },
    {
        question: "Are your estimates free?",
        answer: "Yes, we provide complimentary initial estimates. For detailed project planning and architectural drawings, we move into a paid design phase."
    },
    {
        question: "Do you handle permits and inspections?",
        answer: "Absolutely. We handle all necessary permitting and schedule inspections to ensure your project complies with all local building codes and regulations."
    }
];

const FAQItem = ({ question, answer, isOpen, onClick }) => {
    return (
        <motion.div
            initial={false}
            className="bg-white rounded-2xl overflow-hidden mb-4 shadow-sm hover:shadow-md transition-shadow duration-300"
        >
            <button
                onClick={onClick}
                className="w-full px-6 py-6 flex items-center justify-between text-left gap-4"
            >
                <span className="text-lg md:text-xl font-medium text-gray-800">{question}</span>
                <span className={`flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                    {isOpen ? (
                        <Minus className="w-6 h-6 text-gray-400 font-light" />
                    ) : (
                        <Plus className="w-6 h-6 text-gray-400 font-light" />
                    )}
                </span>
            </button>
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        key="content"
                        initial="collapsed"
                        animate="open"
                        exit="collapsed"
                        variants={{
                            open: { opacity: 1, height: "auto" },
                            collapsed: { opacity: 0, height: 0 }
                        }}
                        transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                    >
                        <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                            {answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <section className="py-24" style={{ backgroundColor: '#FFF8F0' }}>
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-300 bg-white/50 text-gray-600 text-sm font-semibold tracking-wide uppercase mb-6"
                    >
                        <MessageCircleQuestion className="w-4 h-4" />
                        FAQ's
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-serif text-gray-900 mb-6"
                    >
                        Frequently Asked <span className="text-gray-600">Questions</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-500 text-lg max-w-2xl mx-auto"
                    >
                        We know home renovation comes with big questions. Here are answers
                        to the ones we hear most — so you can feel confident from the start.
                    </motion.p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <FAQItem
                            key={index}
                            question={faq.question}
                            answer={faq.answer}
                            isOpen={index === openIndex}
                            onClick={() => setOpenIndex(index === openIndex ? -1 : index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
