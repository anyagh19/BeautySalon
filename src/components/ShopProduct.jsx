import React from "react";

const products = [
  {
    name: "Shampoo For Colored Hair",
    description: "Keep your hair looking clean and...",
    price: "$41.00",
    image: "https://hair.nelson.themerex.net/wp-content/uploads/2019/08/image-30-copyright-600x600.jpg"
  },
  {
    name: "Face & Hands Cream",
    description: "Morbi fermentum tortor sit amet dui hendrerit non. Lorem ipsum..",
    price: "$17.00",
    image: "https://hair.nelson.themerex.net/wp-content/uploads/2019/08/image-29-copyright-600x600.jpg"
  },
  {
    name: "Hair Spray",
    description: "Tame your flyaways, add shine and smooth your hair with....",
    price: "$23.00",
    image: "https://hair.nelson.themerex.net/wp-content/uploads/2019/08/image-28-copyright-600x600.jpg"
  },
  {
    name: "Lavender Balm",
    description: "Moisture plus magic manages dryness, and comes to the rescue...",
    price: "$12.00",
    originalPrice: "$21.00",
    discount: "-43%",
    image: "https://hair.nelson.themerex.net/wp-content/uploads/2019/08/image-25-copyright-600x600.jpg"
  }
];

const ShopProduct = () => {
  return (
    <div className="bg-white text-black font-sans">

      {/* Product Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-8">
        {products.map((product, index) => (
          <div key={index} className="bg-white p-6 w-[250px] rounded-lg relative border-2 shadow-md hover:shadow-lg transition-shadow duration-300">
            {product.discount && (
              <span className="absolute top-4 right-4 bg-cyan-700 text-black px-2 py-1 text-xs rounded-full">
                {product.discount}
              </span>
            )}
            <img src={product.image} alt={product.name} className="mx-auto h-[250px] mb-4" />
            <h3 className="text-2xl font-semibold mb-2 text-center">{product.name}</h3>
            <p className="text-gray-400 text-sm text-center mb-2">{product.description}</p>
            <div className="text-center">
              {product.originalPrice && (
                <span className="line-through mr-2 text-gray-400">{product.originalPrice}</span>
              )}
              <span className="text-purple-500 text-2xl font-semibold">{product.price}</span>
            </div>
          </div>
        ))}
      </section>

     
    </div>
  );
};

export default ShopProduct;