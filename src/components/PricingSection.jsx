// components/PricingSection.js
const prices = [
  { service: "HAIRCUT SHORT HAIR", price: "40$" },
  { service: "HAIRCUT LONG HAIR", price: "80$" },
  { service: "HIGHLIGHTS", price: "35$" },
  { service: "STYLING", price: "35$" },
  { service: "HAIRCUT + STYLING", price: "70$" },
  { service: "HAIRCUT + COLORING", price: "70$" },
  { service: "PERM", price: "95$" },
  { service: "LAMINATION", price: "115$" },
];

export default function PricingSection() {
  return (
    <div className="py-10">
        <section className="bg-white text-black p-10 border-2 w-[80%] ml-[10%] shadow-md rounded-lg ">
      <h2 className="text-4xl font-bold text-center mb-6">Our prices</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-10 mx-auto">
        {prices.map((item, i) => (
          <div key={i} className="flex justify-between border-b border-gray-700 py-2">
            <span>{item.service}</span>
            <span className="text-purple-400">{item.price}</span>
          </div>
        ))}
      </div>
    </section>
    </div>
  );
}
