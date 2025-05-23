"use client"; // if using Next.js App Router
import Slider from "react-slick";
import Image from "next/image";

const services = [
    {
        title: "Hairstyle",
        desc: "Everything starts with a haircut! We can also...",
        icon: "/hairstyle-icon.png",
    },
    {
        title: "Makeup",
        desc: "For a special occasion our makeup artists make...",
        icon: "/makeup-icon.png",
    },
    {
        title: "Cosmetology",
        desc: "We offer top skin care programs for your...",
        icon: "/cosmetology-icon.png",
    },
    {
        title: "Manicure",
        desc: "Basic manicure and pedicure, gel, or acrylic...",
        icon: "/manicure-icon.png",
    },
    {
        title: "Depilation",
        desc: "Hair removal at our salon is painless, fast...",
        icon: "/depilation-icon.png",
    },
];

export default function ServiceCarousel() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 800,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
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
        <section className="w-full py-16 px-4 md:px-16 bg-white">
            <div className="w-full flex flex-col items-center justify-center mb-10">
               <div className="w-[40%] flex flex-col items-center justify-center">
                 <h2 className="text-5xl font-bold text-center mb-10">Service beyond
                expectation</h2>
            <p className="text-center text-lg text-gray-600">Our hair salon is the territory created purely for women who
                appreciate premium quality, time and flawless look. At our place,
                you have a chance to have really good time.</p>
               </div>
            </div>
            <Slider {...settings}>
                {services.map((service, idx) => (
                    <div key={idx} className="px-4">
                        <div className="bg-[#f7f3ec] rounded-lg shadow p-6 h-full text-center">
                            <div className="flex justify-center mb-4">
                                <Image src={service.icon} alt={service.title} width={50} height={50} />
                            </div>
                            <h3 className="text-xl font-semibold text-black mb-2">{service.title}</h3>
                            <p className="text-gray-600 text-sm mb-4">{service.desc}</p>
                            <a href="#" className="text-blue-600 font-semibold text-sm hover:underline">
                                READ MORE →
                            </a>
                        </div>
                    </div>
                ))}
            </Slider>
        </section>
    );
}
