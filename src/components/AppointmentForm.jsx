export default function AppointmentForm() {
  return (
    <section
      className="relative w-full bg-cover bg-center bg-no-repeat py-16 sm:py-24 px-4 sm:px-8 md:px-12 animate-fade-in"
      style={{
        backgroundImage: `url('https://media.gettyimages.com/id/1425300476/photo/beautiful-woman.jpg?s=612x612&w=0&k=20&c=28YQv1CJHZZb2sJvqQnik4deij-msjuOAx68_N7sXEo=')`,
        backgroundPosition: "cover"
      }}
    >
      <div className="max-w-5xl mx-auto text-center text-white">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-light mb-6 animate-fade-up">
          Make An Appointment
        </h2>
        <div className="w-20 h-0.5 bg-black mx-auto mb-8 animate-fade-up delay-100"></div>

        <form className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-center animate-fade-up delay-200">
          <input
            type="text"
            placeholder="Name"
            className="w-full px-4 py-3 bg-transparent border-2 border-white text-white placeholder-white text-sm uppercase font-semibold focus:outline-none transition duration-300"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 bg-transparent border-2 border-white text-white placeholder-white text-sm uppercase font-semibold focus:outline-none transition duration-300"
          />
          <input
            type="tel"
            placeholder="Phone"
            className="w-full px-4 py-3 bg-transparent border-2 border-white text-white placeholder-white text-sm uppercase font-semibold focus:outline-none transition duration-300"
          />
          <button
            type="submit"
            className="bg-[#00a8c4] text-white font-bold px-6 py-3 uppercase text-sm hover:bg-[#008ea7] transition-all duration-300"
          >
            Send Message
          </button>
        </form>

        <div className="mt-6 flex items-start sm:items-center justify-center gap-2 animate-fade-up delay-300">
          <input type="checkbox" id="agree" className="accent-[#00a8c4] w-4 h-4 mt-1 sm:mt-0" />
          <label htmlFor="agree" className="text-sm">
            I have read and agree with the <a href="#" className="underline">Privacy Policy</a>.
          </label>
        </div>
      </div>
    </section>
  );
}
