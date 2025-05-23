import React from "react";

const ShopPage = () => {
  return (
    <div className="bg-black text-white  font-sans">
     

      {/* Hero Section */}
      <section className="relative h-[80vh] bg-cover bg-center flex items-center justify-center"
       style={{ backgroundImage: 'url(https://th.bing.com/th/id/OIP.OFnnU17IwVwn49rzfEA9kgHaE8?w=288&h=192&c=7&r=0&o=5&cb=thvnextc1&dpr=1.5&pid=1.7)' }}>
        <div className="text-center">
          <h2 className="text-5xl font-light mb-6">We're here for you</h2>
          <button className="bg-purple-600 hover:bg-purple-700 text-white py-3 px-6 font-semibold rounded">
            MAKE AN APPOINTMENT
          </button>
        </div>
      </section>

    

      

      
    </div>
  );
};

export default ShopPage;