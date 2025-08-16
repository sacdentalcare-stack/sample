import React, { useState, useEffect } from 'react';

const VideoCarousel = ({ onVideoLoad }) => {
  const [currentVideo, setCurrentVideo] = useState(0);
  const [mediaLoaded, setMediaLoaded] = useState(false);
  const [loadError, setLoadError] = useState(false);

  const videos = [
    {
      id: 1,
      title: "Brand Identity Design",
      description: "Creating memorable brand experiences that resonate with your audience",
      src: "https://ik.imagekit.io/67mog36hf/Smari%20sample/03_240223_Cencora_Casefilm_No-Audio_Small.mp4?updatedAt=1753717688072",
      duration: "2:15"
    },
    {
      id: 2,
      title: "Digital Campaigns",
      description: "Strategic digital campaigns that drive engagement and conversion",
      src: "https://ik.imagekit.io/67mog36hf/Smari%20sample/14_240223_Cencora_Casefilm_SoMe_01_No_Audio.mp4?updatedAt=1753717689149",
      duration: "1:45"
    },
    {
      id: 3,
      title: "Creative Strategy",
      description: "Innovative strategies that set your brand apart from the competition",
      src: "https://ik.imagekit.io/67mog36hf/Smari%20sample/POR_CD_23_Video_2_short.mp4?updatedAt=1753888668454",
      duration: "3:20"
    },
    {
      id: 4,
      title: "Visual Storytelling",
      description: "Compelling narratives through powerful visual communication",
      src: "https://ik.imagekit.io/67mog36hf/Smari%20sample/POR_CD_23_Video_2_short.mp4?updatedAt=1753888668454",
      duration: "2:55"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideo((prev) => (prev + 1) % videos.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [videos.length]);

  useEffect(() => {
    setMediaLoaded(false);
  }, [currentVideo]);

  const goToVideo = (index) => {
    setCurrentVideo(index);
    setMediaLoaded(false);
  };

  const current = videos[currentVideo];

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden bg-gray-900">
      {/* Media Container */}
      <div className="absolute inset-0 transition-all duration-1000 ease-out">
        <video
          src={current.src}
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          onCanPlay={() => {
            setMediaLoaded(true);
            setLoadError(false);
            if (onVideoLoad) {
              onVideoLoad();
            }
          }}
          onError={() => {
            setLoadError(true);
            setMediaLoaded(true);
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 will-change-opacity transition-opacity duration-300"></div>

        {/* Info Bottom Left */}
        <div className="absolute bottom-8 left-8 right-8 text-white transition-all duration-500">
          <div className="space-y-3">
            <h3 className="text-3xl lg:text-4xl font-light leading-tight">{current.title}</h3>
            <p className="text-white/90 text-xl font-light max-w-lg">{current.description}</p>
            <div className="flex items-center space-x-4 mt-6 text-white/70 text-base">
              <span>{current.duration}</span>
              <span>•</span>
              <span>HD Quality</span>
              <span>•</span>
              <span className="uppercase tracking-wider">Our Work</span>
            </div>
          </div>
        </div>
      </div>

      {/* Loading Spinner removed as requested */}

      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-0 right-0 flex items-center justify-center space-x-4 z-20">
        {videos.map((_, index) => (
          <button
            key={index}
            onClick={() => goToVideo(index)}
            className={`relative overflow-hidden transition-all duration-300 rounded-full ${
              index === currentVideo
                ? 'w-16 h-4 bg-metadesign-red shadow-lg'
                : 'w-4 h-4 bg-white/30 hover:bg-white/60'
            }`}
          >
            {index === currentVideo && (
              <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
            )}
          </button>
        ))}
      </div>

      {/* Video Counter */}
      <div className="absolute bottom-8 right-8 text-white/80 text-base font-light z-20">
        <div className="bg-black/20 backdrop-blur-sm px-4 py-2 rounded-full">
          {String(currentVideo + 1).padStart(2, '0')} / {String(videos.length).padStart(2, '0')}
        </div>
      </div>
      
      {/* Loading Indicator */}
      {!mediaLoaded && !loadError && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-900 z-10">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 border-4 border-metadesign-red border-t-transparent rounded-full animate-spin"></div>
            <p className="text-white mt-4 font-light">Loading video...</p>
          </div>
        </div>
      )}
      
      {/* Error Message */}
      {loadError && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-900 z-10">
          <div className="text-center p-6">
            <div className="text-5xl mb-4">⚠️</div>
            <h3 className="text-white text-2xl font-light mb-2">Video Loading Failed</h3>
            <p className="text-white/80 mb-4">Sorry, we couldn't load the video. Please try again later.</p>
            <button
              onClick={() => {
                setLoadError(false);
                setMediaLoaded(false);
                // Try to reload the current video
                const videoElement = document.querySelector('video');
                if (videoElement) {
                  videoElement.load();
                }
              }}
              className="bg-metadesign-red text-white px-6 py-2 rounded-full font-light hover:bg-red-600 transition-colors duration-300"
            >
              Retry
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoCarousel;
