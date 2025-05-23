export default function AppointmentForm() {
  return (
    <section
      className="relative w-full bg-cover bg-center bg-no-repeat py-24 px-6 md:px-12"
      style={{
        backgroundImage: `url('/appointment-bg.jpg')`, // Replace with your image path
      }}
    >
      <div className="max-w-4xl mx-auto text-center text-black">
        <h2 className="text-4xl md:text-5xl font-light mb-8">Make An Appointment</h2>
        <div className="w-20 h-0.5 bg-black mx-auto mb-8"></div>

        <form className="grid md:grid-cols-4 gap-4 items-center">
          <input
            type="text"
            placeholder="Name"
            className="w-full px-4 py-3 bg-transparent border-2 border-black text-black placeholder-black text-sm uppercase font-semibold focus:outline-none"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 bg-transparent border-2 border-black text-black placeholder-black text-sm uppercase font-semibold focus:outline-none"
          />
          <input
            type="tel"
            placeholder="Phone"
            className="w-full px-4 py-3 bg-transparent border-2 border-black text-black placeholder-black text-sm uppercase font-semibold focus:outline-none"
          />
          <button
            type="submit"
            className="bg-[#00a8c4] text-white font-bold px-6 py-3 uppercase text-sm hover:bg-[#008ea7] transition-all duration-300"
          >
            Send Message
          </button>
        </form>

        <div className="mt-6 flex items-center justify-center gap-2">
          <input type="checkbox" id="agree" className="accent-[#00a8c4] w-4 h-4" />
          <label htmlFor="agree" className="text-sm">
            I have read and agree with the <a href="#" className="underline">Privacy Policy</a>.
          </label>
        </div>
      </div>
    </section>
  );
}
