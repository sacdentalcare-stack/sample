import React from 'react';

const VideoHero = () => (
  <section className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] h-[60vh] overflow-hidden mb-0 p-0 mt-[100px]">
    <video
      className="absolute top-0 left-0 w-full h-full object-cover z-0"
      autoPlay
      loop
      muted
      playsInline
    >
      <source
        src="https://ik.imagekit.io/67mog36hf/Smari%20sample/210929_Meta_Reel_Update_01-1.mp4?updatedAt=1753817019839"
        type="video/mp4"
      />
    </video>
    <div className="relative z-10 w-full h-full bg-black/60 flex items-center px-6 md:px-10 lg:px-20">
      <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight">
        Smart Talks – What’s next?
      </h1>
    </div>
  </section>
);

const dummyPosts = [
  {
    id: 1,
    type: 'News',
    title: "Rupali Steinmeyer joins UNICEF Germany's Committee",
    author: 'MetaDesign Editorial',
    date: 'Jul 08, 2025',
    readTime: '3 min read',
    image: 'https://ik.imagekit.io/67mog36hf/Smari%20sample/06_240223_Cencora_Casefilm_No-Audio_Small-2.jpg?updatedAt=1753717579130'
  },
  {
    id: 2,
    type: 'Blog',
    title: 'What remains of brands in AI interactions?',
    author: 'Andreas Faschner',
    date: 'May 13, 2025',
    readTime: '5 min read',
    image: 'https://ik.imagekit.io/67mog36hf/Smari%20sample/06_240223_Cencora_Casefilm_No-Audio_Small-2.jpg?updatedAt=1753717579130'
  },
  {
    id: 3,
    type: 'News',
    title: 'MetaDesign Gives Artificial Intelligence a Brand Personality',
    author: 'MetaDesign Editorial',
    date: 'Apr 23, 2025',
    readTime: '4 min read',
    image: 'https://ik.imagekit.io/67mog36hf/Smari%20sample/06_240223_Cencora_Casefilm_No-Audio_Small-2.jpg?updatedAt=1753717579130'
  },
  {
    id: 4,
    type: 'Blog',
    title: 'Inclusivity means stronger brand equity',
    author: 'Joshua Englander',
    date: 'Oct 01, 2024',
    readTime: '6 min read',
    image: 'https://ik.imagekit.io/67mog36hf/Smari%20sample/06_240223_Cencora_Casefilm_No-Audio_Small-2.jpg?updatedAt=1753717579130'
  }
];

const SmartTalks = () => {
  return (
    <div className="bg-white text-black text-left mx-8 md:mx-32 lg:mx-64 text-lg md:text-xl leading-relaxed">
      {/* Hero Section as separate component */}
      <VideoHero />

      {/* Featured Blog */}
      <section className="max-w-screen-xl mx-auto px-6 md:px-10 lg:px-20 mt-16">
        <div className="bg-white rounded-xl overflow-hidden flex flex-col lg:flex-row items-stretch shadow-xl">
          <div className="w-full lg:w-1/2 h-96 lg:h-auto">
            <img
              src={dummyPosts[0].image}
              alt={dummyPosts[0].title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full lg:w-1/2 p-8 flex flex-col justify-center">
            <span className="uppercase text-base text-gray-500 mb-2">{dummyPosts[0].type}</span>
            <h2 className="text-4xl md:text-5xl font-semibold mb-4 leading-tight">
              {dummyPosts[0].title}
            </h2>
            <p className="text-base text-gray-500">
              {dummyPosts[0].date} &nbsp;&nbsp;·&nbsp;&nbsp; {dummyPosts[0].readTime}
            </p>
          </div>
        </div>
      </section>

      {/* Popular on SmartTalks (Horizontal Text Cards) */}
      <section className="max-w-screen-xl mx-auto px-6 md:px-10 lg:px-20 mt-20 border-t pt-12">
        <h3 className="uppercase text-base tracking-wider text-gray-700 font-medium mb-8">Popular on SmartTalks</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {dummyPosts.slice(1).map((post) => (
            <div key={post.id} className="space-y-3">
              <span className="uppercase text-sm text-gray-400 font-medium">{post.type}</span>
              <h4 className="text-2xl font-semibold leading-snug text-black">
                {post.title}
              </h4>
              <p className="text-base text-gray-500">
                {post.author && <span className="mr-2">{post.author}</span>}
                <span className="mr-2">{post.date}</span>
                <span>{post.readTime}</span>
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Filter Section */}
      <div className="flex justify-start gap-6 mt-20 mb-10 text-base border-t border-b py-4 px-6 md:px-10 lg:px-20">
        {['All', 'Webinar', 'Blog', 'Podcast', 'News'].map((cat) => (
          <button
            key={cat}
            className="text-gray-600 hover:text-metadesign-red border-b-2 border-transparent hover:border-metadesign-red pb-1 transition"
          >
            {cat}
          </button>
        ))}
      </div>

      {/* All Articles Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6 md:px-12 lg:px-20 pb-24">
        {dummyPosts.map((post) => (
          <div key={post.id} className="group cursor-pointer text-left">
            <div className="overflow-hidden rounded-md">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-64 object-cover transform group-hover:scale-105 transition duration-300"
              />
            </div>
            <div className="mt-4 space-y-2">
              <span className="uppercase text-sm text-gray-500">{post.type}</span>
              <h3 className="text-2xl font-semibold leading-snug group-hover:text-metadesign-red transition">
                {post.title}
              </h3>
              <p className="text-base text-gray-500">
                by {post.author} · {post.date} · {post.readTime}
              </p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default SmartTalks;
