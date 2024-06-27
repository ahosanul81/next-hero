import React from 'react';

export const generateMetadata = ({params})=>{
    return {
        title: product.title,
        openGraph: {
          images: ['/some-specific-page-image.jpg', ...previousImages],
        },
      }
} 

const DetailsPage = ({params}) => {
    console.log(params.slug);

    const blogs = [
        {
            "slug": "sustainable-living-guide",
            "title": "A Comprehensive Guide to Sustainable Living",
            "description": "Discover practical tips and strategies for reducing your environmental footprint and living a more sustainable lifestyle. From eco-friendly products to energy-saving habits, this guide covers everything you need to make a positive impact on the planet."
        },
        {
            "slug": "mastering-remote-work",
            "title": "Mastering Remote Work: Tips for Productivity and Balance",
            "description": "Learn how to excel in a remote work environment with our expert tips on maintaining productivity, creating a balanced work-life routine, and setting up an efficient home office. This blog post provides valuable insights for remote workers and freelancers alike."
        },
        {
            "slug": "ultimate-travel-checklist",
            "title": "The Ultimate Travel Checklist: Essential Items for Every Trip",
            "description": "Ensure you never forget a travel essential again with our ultimate checklist. From packing must-haves to travel gadgets and safety tips, this post will help you prepare for any journey, whether it's a weekend getaway or an international adventure."
        },
        {
            "slug": "mental-health-awareness",
            "title": "Mental Health Awareness: Breaking the Stigma and Finding Support",
            "description": "Explore the importance of mental health awareness and learn how to support yourself and others. This blog post delves into common mental health issues, ways to seek help, and strategies for promoting mental well-being in your community."
        },
        {
            "slug": "healthy-eating-habits",
            "title": "Healthy Eating Habits: Tips for a Balanced Diet",
            "description": "Transform your diet with our guide to healthy eating habits. Learn how to make nutritious food choices, understand the benefits of various food groups, and discover delicious recipes that support a balanced diet and overall wellness."
        },
        {
            "slug": "diy-home-decor",
            "title": "DIY Home Decor: Creative Ideas to Refresh Your Space",
            "description": "Unleash your creativity with these DIY home decor projects. From upcycling old furniture to creating custom art pieces, this blog post provides step-by-step instructions and inspiration to help you transform your living space on a budget."
        },
        {
            "slug": "fitness-for-beginners",
            "title": "Fitness for Beginners: How to Start Your Workout Journey",
            "description": "Kickstart your fitness journey with our beginner-friendly guide. This post offers workout routines, tips for staying motivated, and advice on setting achievable fitness goals. Perfect for those new to exercise or looking to get back into shape."
        },
        {
            "slug": "financial-planning-basics",
            "title": "Financial Planning Basics: Building a Secure Future",
            "description": "Take control of your finances with our essential guide to financial planning. Learn how to create a budget, save for retirement, manage debt, and invest wisely to ensure a secure and prosperous future."
        },
        {
            "slug": "parenting-tips-for-toddlers",
            "title": "Parenting Tips for Toddlers: Navigating the Terrible Twos",
            "description": "Survive the toddler years with our expert parenting tips. From managing tantrums to encouraging positive behavior, this blog post provides practical advice for parents dealing with the challenges and joys of raising toddlers."
        },
        {
            "slug": "tech-trends-2024",
            "title": "Tech Trends 2024: What to Expect in the Coming Year",
            "description": "Stay ahead of the curve with our overview of the top tech trends to watch in 2024. This post explores emerging technologies, innovative gadgets, and digital advancements that are set to shape the future of various industries."
        }
    ]

    const {title, description} = blogs.find(blog=> blog.slug === params.slug)
    // console.log(singlePost);


    return (
        <div>
            <h3 className='text-2xl font-bold'>{title}</h3>
            <h5 className='text-gray-500'>{description}</h5>
        </div>
    );
};

export default DetailsPage;