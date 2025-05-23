"use client";
import Slider from "react-slick";

const testimonials = [
  {
    quote:
      "Everything about this place is simply great! I loved the atmosphere and friendly staff. Incredible job, I wish you luck!",
    name: "EMMA GRACELAND",
  },
  {
    quote:
      "Being in the business for almost a decade, I can tell that this place is absolutely worth your time and money. Thank you so much!",
    name: "FIONA WILLSON",
  },
  {
    quote:
      "You don’t get many offers while looking for a quick styling and cut. Thanks for the wonderful experience at Nelson Salon.",
    name: "HELEN BLACKWOOD",
  },
  {
    quote:
      "I got my makeup and hair done here for my wedding. It was perfect! Will definitely come back for more.",
    name: "SARAH MITCHELL",
  },
];

export default function TestimonialCarousel() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section className="w-full py-20 px-4 md:px-16 bg-white text-center">
      <h2 className="text-4xl font-bold text-gray-900 mb-10">What clients say</h2>
      <Slider {...settings}>
        {testimonials.map((t, index) => (
          <div key={index} className="px-4">
            <div className="p-6 bg-white shadow-md rounded-md h-full flex flex-col justify-between border">
              <div className="text-4xl text-blue-500 mb-4">“</div>
              <p className="text-gray-700 text-sm mb-6">{t.quote}</p>
              <h3 className="text-blue-600 font-bold text-sm">{t.name}</h3>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}
