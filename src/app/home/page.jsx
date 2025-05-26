import ServiceCarousel from "@/components/ServiceCarousel";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import AppointmentForm from "@/components/AppointmentForm";
import ServicesSection from "@/components/ServicesSection";
import BlogSlider from "@/components/BlogSlider";
import ShopProduct from "@/components/ShopProduct";
import Contact from "@/components/Contact";
import ImageStrip from "@/components/ImageStrip";

export default function Home1() {
  return (
    <div className="w-full min-h-screen bg-white overflow-hidden">
      {/* Hero Section */}
      <div
        className="w-full h-[90vh] sm:h-screen bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage:
            "url('https://th.bing.com/th/id/OIP.7vu7NfE_JWi32Eh-Nc4hdgHaE8?w=295&h=197&c=7&r=0&o=5&cb=thvnextc1&dpr=1.5&pid=1.7')",
        }}
      >
        <div className="absolute inset-0 bg-black/10 backdrop-blur-sm"></div>
        <div className="relative z-10 flex flex-col items-start justify-center h-full px-4 sm:px-8 lg:px-16 w-full sm:w-3/4 lg:w-1/2 gap-6 animate-fade-up">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-black dark:text-white transition-all duration-700">
            Feel your new Nelson style
          </h1>
          <button className="mt-4 px-6 py-3 bg-black text-white rounded-md text-sm sm:text-base hover:bg-gray-800 transition duration-300">
            View our Services
          </button>
        </div>
      </div>

      {/* Services Section */}
      <section className="animate-fade-in">
        <ServiceCarousel />
      </section>

      <section className="animate-fade-in">
        <ServicesSection />
      </section>

      <section className="animate-fade-in">
        <BlogSlider />
      </section>

      {/* Testimonials Section */}
      <section className="animate-fade-in delay-100">
        <TestimonialCarousel />
      </section>

<section className="animate-fade-in delay-100">
        <ShopProduct />
      </section>

<Contact />

<ImageStrip />
      {/* Appointment Form */}
      
    </div>
  );
}
