'use client';

import React from 'react';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="relative h-[600px] pt-16">
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/logo-bg.webp"
          alt="Kalinka Hero Image"
          layout="fill"
          priority
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>
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
