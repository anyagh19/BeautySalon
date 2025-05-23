import Appointment from "@/components/Appointment";

export default function AppointmentPage() {
  return (
    <div>
        <div
        className="w-full py-40"
        style={{
          backgroundImage:
            "url('https://th.bing.com/th/id/OIP.F6Alrap_Jaw6vKjF6O8SpAHaEJ?w=270&h=180&c=7&r=0&o=5&cb=thvnextc1&dpr=1.5&pid=1.7')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex flex-col items-start gap-5 justify-center h-full w-[50%] pl-10">
          <h1 className="text-black text-7xl font-bold">About Us</h1>
          <p className="text-sm text-gray-600">Home : About Us</p>
        </div>
      </div>
      
      <Appointment />
    </div>
  );
}
