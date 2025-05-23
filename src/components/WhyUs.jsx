


export default function WhyUs() {
  return (
    <section className="min-h-screen bg-white text-black flex flex-col md:flex-row py-10">
      {/* Left: Image with play button */}
      <div className="relative w-full md:w-1/2 h-96 md:h-auto">
        <img
          src="https://th.bing.com/th/id/OIP.ds80VcU1oRT-syocteOgPAHaFD?w=240&h=180&c=7&r=0&o=5&cb=thvnextc1&dpr=1.5&pid=1.7" // Replace with your actual image path
          alt="Hair Salon"
          fill
          className="object-cover h-[90% ] w-[90%] rounded-lg shadow-lg"
        />
        
      </div>

      {/* Right: Text Content */}
      <div className="w-full md:w-1/2 flex flex-col justify-center px-8 py-12">
        <h2 className="text-4xl font-light leading-tight mb-4">
          Why choose <br /> our hair salon?
        </h2>
        <hr className="w-16 border-white mb-6" />
        <p className="text-gray-300 max-w-md">
          Our salon is the territory created purely for people who appreciate
          premium quality, time and flawless look. At our place, you have a
          chance to have a really good time.
        </p>
      </div>
    </section>
  );
}