import OurStorySection from "@/components/OurStorySection";
import WhyUs from "@/components/WhyUs";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import ShopPage from "@/components/ShopPage";

export default function About() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <div
        className="w-full py-24 sm:py-32 relative"
        style={{
          backgroundImage:
            "url('https://th.bing.com/th/id/OIP.F6Alrap_Jaw6vKjF6O8SpAHaEJ?w=270&h=180&c=7&r=0&o=5&cb=thvnextc1&dpr=1.5&pid=1.7')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="bg-white/60 dark:bg-black/40 w-full h-full absolute inset-0 backdrop-blur-sm" />

        <div className="relative z-10 flex flex-col items-start gap-5 justify-center h-full px-4 sm:px-8 lg:px-16 w-full sm:w-3/4 lg:w-1/2 animate-fade-up">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-black dark:text-white transition duration-700 ease-out">
            About Us
          </h1>
          <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
            Home : About Us
          </p>
        </div>
      </div>

      {/* Other Sections */}
      <section className="animate-fade-in">
        <OurStorySection />
      </section>

      <section className="animate-fade-in delay-100">
        <WhyUs />
      </section>

      <section className="animate-fade-in delay-200">
        <TestimonialCarousel />
      </section>

      <section className="animate-fade-in delay-300">
        <ShopPage />
      </section>
    </div>
  );
}
