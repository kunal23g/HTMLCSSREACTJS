import React from 'react';
import img1 from "../assets/img1.png"
import img2 from "../assets/img2.png"
import img3 from "../assets/img3.png"

const StylePhotos = () => {
  const cards = [
    {
      image: img1,
      title: "Sed ut perspiciatis",
      description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia.",
      alt: "Laptop screen showing revenue interface"
    },
    {
      image: img2,
      title: "Lorem ipsum dolor",
      description: "Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
      alt: "Digital flowchart diagram"
    },
    {
      image: img3,
      title: "Nemo enim ipsam",
      description: "Consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
      alt: "City buildings with digital overlay"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 font-inter md:px-6 lg:px-8">
      {/* Header Section */}
      <div className="text-center mb-12 md:mb-16">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          Make your photos more stylish
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto px-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {cards.map((card, index) => (
          <div 
            key={index} 
            className="bg-white h-[400px] rounded-lg overflow-hidden shadow-xl hover:scale-105 duration-500"
          >
            <div className="aspect-w-16 aspect-h-9 relative">
              <img
                src={card.image}
                alt={card.alt}
                className="w-full h-60 p-3 object-cover"
              />
            </div>
            <div className="px-12 py-6 text-justify">
              <h2 className="text-xl  font-bold text-gray-900 mb-2">
                {card.title}
              </h2>
              <p className="text-gray-600">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StylePhotos;