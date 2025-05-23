// components/TechnologySection.js
export default function TechnologySection() {
  return (
    <section className="bg-white text-black p-10 flex flex-col md:flex-row items-center">
      <div className="md:w-1/2">
        <img src="https://hair.nelson.themerex.net/wp-content/uploads/2019/08/image-10-copyright.jpg" alt="Hair Wash" className="rounded shadow-md" />
      </div>
      <div className="md:w-1/2 text-right md:pl-10 mt-6 md:mt-0">
        <h2 className="text-4xl font-bold">About our technology</h2>
        <p className="text-gray-700 mt-4">
         Our hair & tattoo salon is the territory created purely for people who appreciate premium quality, time and flawless look. Welcome to Nelson!
        </p>
        <button className="mt-6 border-2 border-teal-500 px-6 py-2 text-black hover:bg-teal-500 transition">
          READ MORE ABOUT US
        </button>
      </div>
    </section>
  );
}
