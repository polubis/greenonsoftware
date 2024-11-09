'use client';

import React, { useRef, useEffect, useState } from 'react';

const HeroSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoVisible, setIsVideoVisible] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVideoVisible(true);
            videoRef.current?.play();
          } else {
            setIsVideoVisible(false);
            videoRef.current?.pause();
          }
        });
      },
      { threshold: 0.5 }
    );

    if (videoRef.current) observer.observe(videoRef.current);

    return () => {
      if (videoRef.current) observer.unobserve(videoRef.current);
    };
  }, []);

  return (
    <section className="relative h-[600px] pt-16">
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster="/images/placeholder.svg"
      >
        <source
          src="https://example.com/path-to-your-stock-video.mp4"
          type="video/mp4"
        />
      </video>
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-5xl font-bold mb-4">
            Kalinka - The Flavors We Love!
          </h1>
          <p className="text-xl mb-8">
            A family store in the heart of Olsztyn. Natural products,
            traditional flavors, and always friendly service!
          </p>
          <button className="bg-yellow-400 text-blue-800 px-6 py-3 rounded-full text-lg font-semibold hover:bg-yellow-300 transition duration-300">
            Check Out Our Offer
          </button>
        </div>
      </div>
    </section>
  );
};

export { HeroSection };
