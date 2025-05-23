import ServiceCarousel from "@/components/ServiceCarousel";
import  TestimonialCarousel from "@/components/TestimonialCarousel";
import AppointmentForm from "@/components/AppointmentForm";

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-white">
      {/* Hero Section */}
      <div
        className="w-full h-screen"
        style={{
          backgroundImage:
            "url('https://th.bing.com/th/id/OIP.ZuSlxifN8xBWimpIpSs2GwHaE8?w=255&h=180&c=7&r=0&o=5&cb=thvnextc1&dpr=1.5&pid=1.7')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex flex-col items-start gap-10 justify-center h-full w-[50%] pl-10">
          <h1 className="text-black text-7xl font-bold">Brush touch of perfection</h1>
          <button className="mt-4 px-6 py-2 bg-black text-white rounded-md">
            View our Services
          </button>
        </div>
      </div>

      {/* Services Section */}
      <ServiceCarousel />
      <TestimonialCarousel />
        <AppointmentForm />
    </div>
  );
}
