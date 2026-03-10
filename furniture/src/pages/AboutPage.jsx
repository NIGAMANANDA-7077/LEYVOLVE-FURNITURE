import React from 'react';
import AboutHero from '../components/AboutHero';
import AboutStory from '../components/AboutStory';
import AboutSplitSection from '../components/AboutSplitSection';
import AboutStats from '../components/AboutStats';
import AboutFeedGallery from '../components/AboutFeedGallery';
import AboutFloatingProduct from '../components/AboutFloatingProduct';
import AboutCTA from '../components/AboutCTA';

const AboutPage = () => {
    return (
        <div className="min-h-screen bg-[#FFF8F0]">
            {/* Hero Section with Parallax */}
            <AboutHero />

            {/* Story Section */}
            <AboutStory />

            {/* Split Section 1: Craftsmanship */}
            <AboutSplitSection
                title="Craftsmanship, Technology, and Design United"
                description="We blend time-honored woodworking traditions with cutting-edge design technology. Every piece is meticulously crafted by skilled artisans who understand that furniture is more than function—it's an expression of art, a commitment to quality, and a legacy that lives in your home. From the first sketch to the final finish, we obsess over every detail to ensure perfection."
                image="https://images.squarespace-cdn.com/content/v1/55043d4ee4b014e3fcfc125d/1604158264841-13SSFBQG7PEVFE89UFBS/For+the+love+of+beauty%3A+craftsmanship"
                reverse={false}
            />

            {/* Stats Row */}
            <AboutStats />

            {/* Split Section 2: Sustainability */}
            <AboutSplitSection
                title="Powered by Sustainability and Timeless Quality"
                description="Our commitment to the planet is woven into every grain. We source only sustainably harvested wood and eco-friendly materials, ensuring that your beautiful furniture doesn't come at the cost of our environment. Each piece is built to last generations, reducing waste and celebrating the beauty of natural, renewable resources."
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4ZSxw6za8aPnwVoon7oXZwgOXt-qt3WbKbQ&s"
                reverse={true}
                link={{
                    text: "Learn about our sustainability practices",
                    url: "/sustainability"
                }}
            />

            {/* Feed Gallery */}
            <AboutFeedGallery />

            {/* Floating Product */}
            <AboutFloatingProduct />

            {/* CTA */}
            <AboutCTA />
        </div>
    );
};

export default AboutPage;
