import React from 'react';

const OfficePage = () => {
  return (
    <div className="bg-white min-h-screen mx-0 md:mx-8 lg:mx-40 px-8 lg:px-32 py-24 text-left">
      {/* Page Title */}
      <h1 className="text-6xl lg:text-7xl font-bold mb-6 text-left">Offices</h1>

      {/* Subtitle */}
      <p className="text-xl lg:text-2xl max-w-4xl text-gray-700 mb-16 leading-relaxed text-left">
        One office. One vision. From the heart of Kampala, we drive impactful strategy, design,
        and digital solutions tailored for brands across Africa and beyond.
      </p>

      {/* Office Card */}
      <div>
        <img
          src="https://ik.imagekit.io/67mog36hf/Smari%20sample/09_Mask-group.jpg?updatedAt=1753717575780"
          alt="Kampala Office"
          className="w-full h-96 object-cover rounded-md mb-6"
        />
        <h2 className="text-3xl lg:text-4xl font-medium text-left">Kampala</h2>
        <div className="mt-4 flex flex-col md:flex-row md:space-x-12">
          <div className="text-gray-800 space-y-1 text-lg leading-relaxed text-left md:w-2/3">
            <p className="font-semibold">Address</p>
            <p>Victoria Building</p>
            <p>Jinja Road</p>
            <p>Kampala, Uganda</p>
          </div>
          <div className="text-gray-800 space-y-4 text-lg leading-relaxed text-right md:w-1/3 md:flex md:flex-col md:justify-center md:items-end mt-8 md:mt-0">
            <div>
              <span className="font-semibold">Email:</span> <a href="mailto:info@yourcompany.com" className="text-blue-600 underline">info@yourcompany.com</a>
            </div>
            <div>
              <span className="font-semibold">Phone:</span> +256 XXX XXX XXX
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfficePage;
