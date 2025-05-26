'use client';
import images from '@/data/images';

export default function ImageStrip() {
  return (
    <section className="bg-white py-20"> {/* Increased padding */}
      <div className="max-w-7xl mx-auto px-4 overflow-x-auto scrollbar-hide overflow-hidden">
        <div className="flex justify-center md:justify-between min-w-max">
          {images.map((img) => (
            <div
              key={img.id}
              className="flex-shrink-0 w-44 h-44 md:w-56 md:h-56 relative rounded overflow-hidden"
            >
              <img
                src={img.url}
                alt={`style-${img.id}`}
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
