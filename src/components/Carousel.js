import React, { useRef } from 'react';

const Carousel = () => {
    const carouselRef = useRef(null);

    const scrollLeft = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollLeft -= 300; 
        }
    };

    const scrollRight = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollLeft += 300; 
        }
    };

  
    const items = [
        {
            image: '/images/food.png',
            title: 'Pizza',
            description: 'Seafood',
            price: '$30'
        },
        {
            image: '/images/food.png',
            title: 'Tomato Salad',
            description: 'Vegetable',
            price: '$20'
        },
        {
            image: '/images/food.png',
            title: 'Pizza',
            description: 'Seafood',
            price: '$30'
        },
        {
            image: '/images/food.png',
            title: 'Tuna Salad',
            description: 'Tuna',
            price: '$60'
        },
        {
            image: '/images/food.png',
            title: 'Chicken Salad',
            description: 'Chicken',
            price: '$25'
        },
        {
            image: '/images/tamato.png',
            title: 'Fruit Salad',
            description: 'Mixed Fruits',
            price: '$15'
        },
        {
            image: '/images/food.png',
            title: 'Caesar Salad',
            description: 'Chicken & Lettuce',
            price: '$20'
        },
        {
            image: '/images/food.png',
            title: 'Greek Salad',
            description: 'Feta & Olives',
            price: '$18'
        },
        {
            image: '/images/food.png',
            title: 'Pasta Salad',
            description: 'Pasta & Veggies',
            price: '$22'
        },
        {
            image: '/images/food.png',
            title: 'Quinoa Salad',
            description: 'Quinoa & Veggies',
            price: '$28'
        }
    ];

    return (
        <div className="relative w-full dark:bg-gray-800 dark:border-gray-700">
            <button
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-green-700 text-white p-2 rounded-full z-10"
                onClick={scrollLeft}
            >
                &lt;
            </button>
            <div
                ref={carouselRef}
                className="flex overflow-x-scroll space-x-4 no-scrollbar p-4"
            >
                {items.map((item, index) => (
                    <div
                        key={index}
                        className="min-w-[200px] dark:bg-gray-600 rounded-lg shadow-lg p-4 "
                    >
                        <img
                            src={item.image}
                            alt={`Item ${index + 1}`}
                            className="w-full h-32 object-cover rounded-lg"
                        />
                        <h3 className="mt-2 font-bold text-lg dark:text-white ml-9">{item.title}</h3>
                        <p className="text-gray-600 dark:text-white ml-10 ">{item.description}</p>
                        <p className="mt-2 font-bold text-lg ml-10">{item.price}</p>
                    </div>
                ))}
            </div>
            <button
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-orange-500 text-white p-2 rounded-full z-10"
                onClick={scrollRight}
            >
                &gt;
            </button>
        </div>
    );
};

export default Carousel;
