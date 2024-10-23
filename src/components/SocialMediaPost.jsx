import React from 'react';
import social from "../assets/socialmedia.png"

const SocialMediaPost = () => {
  return (
    <div className="max-w-7xl mx-auto p-4 md:p-6 bg-white text-justify">
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Text Content */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
              Have you ever posted any photo on social media?
            </h1>
            <p className="text-base md:text-lg text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
            </p>
          </div>

          <div className="space-y-6">
            <section className="space-y-2">
              <h2 className="text-xl font-bold text-gray-900">Sed ut perspiciatis</h2>
              <p className="text-gray-600">
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-xl font-bold text-gray-900">Lorem ipsum dolor</h2>
              <p className="text-gray-600">
                Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-xl font-bold text-gray-900">Nemo enim ipsam</h2>
              <p className="text-gray-600">
                Consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem.
              </p>
            </section>
          </div>
        </div>

        {/* Image */}
        <div className="lg:mt-0 mt-6">
          <div className="relative h-full min-h-[400px] w-full overflow-hidden rounded-lg shadow-lg">
            <img
              src={social}
              alt="Modern skyscrapers viewed from below"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaPost;