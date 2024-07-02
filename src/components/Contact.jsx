import React from 'react';

export default function Contact() {
  return (
    <div className="bg-gray-100 relative min-h-screen">
      {/* Video Background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <video autoPlay muted loop className="absolute top-0 left-0 w-full h-full object-cover">
          <source src="https://assets.mixkit.co/videos/43374/43374-720.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>
      </div>

      {/* Contact Section */}
      <section className="min-h-screen flex items-center justify-center relative z-10">
        <div className="container mx-auto px-6 flex justify-center items-center">
          <div className="max-w-md bg-white bg-opacity-75 rounded-md overflow-hidden shadow-md p-8">
            <h2 className="text-3xl font-bold text-pink-600 mb-6">Contact Us</h2>
            <p className="text-lg text-pink-600 leading-relaxed mb-6">Have questions or feedback? Reach out to us!</p>
            <form action="#" method="POST">
              <div className="mb-4">
                <label htmlFor="name" className="block text-pink-600 font-bold mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full border rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
                  placeholder="Your Name"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-pink-600 font-bold mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full border rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
                  placeholder="Your Email"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-pink-600 font-bold mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full border rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
                  rows="4"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <div className="mb-4 flex justify-between items-center">
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Send
                </button>
                {/* Social Media Icons */}
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-600 hover:text-blue-600"><i className="fab fa-facebook-f fa-lg"></i></a>
                  <a href="#" className="text-gray-600 hover:text-blue-400"><i className="fab fa-twitter fa-lg"></i></a>
                  <a href="#" className="text-gray-600 hover:text-pink-500"><i className="fab fa-instagram fa-lg"></i></a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
