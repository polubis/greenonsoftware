import React from 'react';
import { Star, MapPin, Phone, Mail, Facebook, Instagram } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Header } from '../components/header';
import { HeroSection } from '../components/hero-section';

export default function Index() {
  return (
    <div className="min-h-screen bg-yellow-50">
      <Header />
      <HeroSection />

      {/* About Us Section */}
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Who Are We?</h2>
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <Image
                src="/placeholder.svg"
                alt="Store Owners"
                width={500}
                height={300}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2 md:pl-8">
              <p className="text-lg mb-4">
                Kalinka is a family-owned store run by a young and passionate
                couple. Our mission is to bring Olsztyn residents fresh,
                high-quality products. We love traditional flavors and make sure
                everyone who visits feels at home.
              </p>
              <p className="text-lg">
                We choose our products with local food lovers in mind, as well
                as those missing Ukrainian treats – you&#39;ll also find
                Ukrainian beer here that pairs perfectly with our snacks!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Offer Section */}
      <section id="offer" className="py-16 bg-blue-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            What You&#39;ll Find Here?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              'Sweets',
              'Snacks',
              'Fresh Fish and Meat',
              'Bakery Products',
              'Ukrainian Beer',
            ].map((category, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <Image
                  src="/placeholder.svg"
                  alt={category}
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{category}</h3>
                  <p className="text-gray-600 mb-4">
                    Perfect for a quick meal or a gathering with friends.
                  </p>
                  <button className="bg-yellow-400 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold hover:bg-yellow-300 transition duration-300">
                    Check Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Online Orders Section */}
      <section className="py-16 bg-yellow-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Online Orders</h2>
          <p className="text-lg mb-6">
            We fulfill orders in the Warmia and Mazury region. Contact us via:
          </p>
          <div className="flex justify-center space-x-4">
            <Link
              href="#"
              className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300"
            >
              Facebook
            </Link>
            <Link
              href="#"
              className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300"
            >
              Email
            </Link>
            <Link
              href="#"
              className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300"
            >
              Contact Form
            </Link>
          </div>
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            What Do Our Customers Say?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                name: 'Kasia',
                review:
                  'Kalinka is the best store in the area! Always fresh products and friendly service!',
              },
              {
                name: 'Andrzej',
                review:
                  'I love this place, especially for the Ukrainian beer and great snacks!',
              },
            ].map((review, index) => (
              <div key={index} className="bg-blue-50 p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <Image
                    src="/placeholder.svg"
                    alt={review.name}
                    width={50}
                    height={50}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <h3 className="font-semibold">{review.name}</h3>
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600">{review.review}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location and Contact Section */}
      <section id="contact" className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Where to Find Us?
          </h2>
          <div className="flex flex-col md:flex-row justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h3 className="text-2xl font-semibold mb-4">
                Contact Information
              </h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <MapPin className="w-6 h-6 mr-2" />
                  <span>Kalinka, ul. Przykładowa 12, Olsztyn</span>
                </li>
                <li className="flex items-center">
                  <Phone className="w-6 h-6 mr-2" />
                  <span>+48 123 456 789</span>
                </li>
                <li className="flex items-center">
                  <Mail className="w-6 h-6 mr-2" />
                  <span>kontakt@kalinka.pl</span>
                </li>
              </ul>
              <h3 className="text-2xl font-semibold mt-8 mb-4">
                Opening Hours
              </h3>
              <ul className="space-y-2">
                <li>Monday-Friday: 8:00 - 18:00</li>
                <li>Saturday: 8:00 - 16:00</li>
                <li>Sunday: 10:00 - 14:00</li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/placeholder.svg"
                alt="Map"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <ul className="flex space-x-4">
                <li>
                  <Link href="#about" className="hover:text-yellow-300">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#offer" className="hover:text-yellow-300">
                    Offer
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="hover:text-yellow-300">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-yellow-300">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-yellow-300">
                <Facebook className="w-6 h-6" />
              </Link>
              <Link href="#" className="hover:text-yellow-300">
                <Instagram className="w-6 h-6" />
              </Link>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p>&copy; 2024 Kalinka. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
