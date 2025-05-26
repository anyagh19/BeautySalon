import { FaCut, FaBrush, FaPalette, FaBroom } from 'react-icons/fa';

const services = [
  {
    title: "Haircut",
    description: "Any cut to your taste followed by a...",
    icon: <FaCut className="text-purple-500 text-5xl mb-4" />,
  },
  {
    title: "Styling",
    description: "Keep looking your best with our professional stylists...",
    icon: <FaBrush className="text-teal-300 text-5xl mb-4" />,
  },
  {
    title: "Color",
    description: "For premium result, at our barbershop, we combine...",
    icon: <FaPalette className="text-purple-500 text-5xl mb-4" />,
  },
  {
    title: "Treatment",
    description: "Looking to try something new with your hair?...",
    icon: <FaBroom className="text-purple-500 text-5xl mb-4" />,
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto flex justify-center items-center flex-col md:flex-row gap-10">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white text-black p-8 rounded-lg text-center hover:shadow-lg transition-shadow duration-300 border-2 h-[350px] w-[200px] "
          >
            <h1 className='text-center ml-8'>{service.icon}</h1>
            <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-400 mb-4">{service.description}</p>
            <a href="#" className="text-teal-300 font-medium hover:underline">
              READ MORE →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
