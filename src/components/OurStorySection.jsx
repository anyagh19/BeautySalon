// components/OurStorySection.js
export default function OurStorySection() {
    return (
        <section className="bg-white text-black p-10 flex flex-col md:flex-row justify-between items-center">
            <div className="space-y-4 md:w-1/2">
                <h2 className="text-4xl font-bold">Our story</h2>
                <div className="flex gap-4 mt-4">
                    <div className="bg-teal-600 px-4 py-2">2017</div>
                    <div className="border border-teal-500 px-4 py-2">2018</div>
                    <div className="border-2 border-teal-500 px-4 py-2 font-bold ">2019</div>
                </div>
                <p className="text-gray-300 mt-4">
                    Lorem ipsum dolor sit amet, eprehenderit adipisicing elit, minim veniam.

                    Quis nostrud exercitation laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit voluptate velit esse cillum dolore eu fugiat nulla
                </p>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0">
                <img src="https://hair.nelson.themerex.net/wp-content/uploads/2019/08/image-1-copyright.jpg" alt="Haircut" className="rounded shadow-md" />
            </div>
        </section>
    );
}
