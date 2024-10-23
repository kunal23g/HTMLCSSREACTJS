import React from 'react';

const FeatureCard = ({ title, description }) => (
  <div className="flex flex-col space-y-4 text-justify">
    <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
    <p className="text-gray-600 leading-relaxed">
      {description}
    </p>
    <button className="bg-blue-500 text-white font-semibold py-2 px-6 rounded-lg w-fit hover:bg-blue-600 transition-colors duration-300">
      Learn more
    </button>
  </div>
);

const FeaturesSection = () => {
  const features = [
    {
      title: "Sed ut perspiciatis",
      description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est."
    },
    {
      title: "Lorem ipsum dolor",
      description: "Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi."
    },
    {
      title: "Nemo enim ipsam",
      description: "Consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam."
    },
    {
      title: "Tempor incididunt",
      description: "Eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora."
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Main Heading */}
      <div className="max-w-3xl mb-16">
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-4">
          Snap photos and share like never before
        </h2>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;