"use client";

import { useState } from "react";
import images from "../data/images";

const ITEMS_PER_PAGE = 6;

export default function Gallery() {
  const [filter, setFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredImages = filter === "all"
    ? images
    : images.filter(img => img.category === filter);

  const totalPages = Math.ceil(filteredImages.length / ITEMS_PER_PAGE);
  const start = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedImages = filteredImages.slice(start, start + ITEMS_PER_PAGE);

  return (
    <div className="bg-white min-h-screen text-black px-4 py-12">
      <h2 className="text-3xl text-center mb-8 font-bold">Gallery</h2>

      {/* Filter Buttons */}
      <div className="flex justify-center mb-8 gap-4">
        {["all", "men", "women", "others"].map(cat => (
          <button
            key={cat}
            onClick={() => { setFilter(cat); setCurrentPage(1); }}
            className={`px-6 py-2 rounded bg-teal-600 hover:bg-teal-500 uppercase text-sm ${
              filter === cat ? "bg-teal-700" : ""
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
        {paginatedImages.map(img => (
          <div key={img.id} className="relative group overflow-hidden">
            <img
              src={img.url}
              alt="Gallery"
              className="w-full h-80 object-cover transform group-hover:scale-105 transition duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
              <span className="text-white text-xl">🔍</span>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-10 gap-2">
        {[...Array(totalPages)].map((_, index) => {
          const pageNum = index + 1;
          return (
            <button
              key={pageNum}
              onClick={() => setCurrentPage(pageNum)}
              className={`w-10 h-10 rounded-full ${
                currentPage === pageNum
                  ? "bg-teal-600 text-white"
                  : "bg-white text-black"
              }`}
            >
              {pageNum}
            </button>
          );
        })}
      </div>
    </div>
  );
}
