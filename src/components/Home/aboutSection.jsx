import React from "react";

const aboutSection = () => {
  return (
    <div>
      {/* About Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            About Us
          </h2>
          <div className="flex flex-wrap justify-center items-center">
            {/* Image */}
            <div className="w-full md:w-1/2 p-4">
              <img
                src="https://via.placeholder.com/600x400"
                alt="About Us"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            {/* Text Content */}
            <div className="w-full md:w-1/2 p-4">
              <p className="text-lg text-gray-700 mb-6">
                At Oliver Publications, we strive to push the boundaries of
                innovation and creativity. With years of expertise in the
                publishing world, we aim to bring cutting-edge solutions to our
                readers and partners. Our mission is to inspire and empower
                individuals through high-quality content, advanced technology,
                and a commitment to excellence.
              </p>
              <p className="text-lg text-gray-700">
                We are passionate about creating a world where ideas flow freely
                and knowledge is shared openly. Join us on this journey of
                discovery and growth.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default aboutSection;
