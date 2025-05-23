export default function Contact() {
  return (
    <div>
      {/* Navbar */}
      

      {/* Contact Cards */}
      <section className="py-12 px-6 bg-gray-100 grid md:grid-cols-3 gap-8 text-center h-[80vh]">
        <div className="bg-white shadow-lg p-6 rounded-lg h-[80%] border-2 hover:Shadow-2xl transition duration-300 hover:scale-105">
          <h2 className="text-xl font-semibold mb-2">Location</h2>
          <p>128 Winston St,<br />New York, NY 05120</p>
          <a href="#" className="text-yellow-500 font-semibold block mt-4">Get Directions →</a>
        </div>

        <div className="bg-white shadow-lg p-6 rounded-lg h-[80%] border-2 hover:Shadow-2xl transition duration-300 hover:scale-105">
          <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
          <p>Call: 1.800.218.20.20</p>
          <p>Write: hello@example.com</p>
          <a href="#" className="text-yellow-500 font-semibold block mt-4">Appointment →</a>
        </div>

        <div className="bg-white shadow-lg p-6 rounded-lg h-[80%] border-2 hover:Shadow-2xl transition duration-300 hover:scale-105">
          <h2 className="text-xl font-semibold mb-2">Working Hours</h2>
          <p>Mon – Sat: 9am – 8pm<br />Sun: 9am – 6pm</p>
          <a href="#" className="text-yellow-500 font-semibold block mt-4">Choose a Stylist →</a>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 px-6 bg-white text-center">
        <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
        <form className="max-w-lg mx-auto space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
            required
          />
          <textarea
            placeholder="Message"
            rows="5"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
            required
          />
          <button
            type="submit"
            className="bg-yellow-400 text-black px-6 py-2 rounded-lg font-semibold hover:bg-yellow-300"
          >
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
}
