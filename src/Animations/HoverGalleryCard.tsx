import React from "react";

export default function HoverGalleryCard({ image, title }) {
  return (
    <div className="relative group rounded-xl overflow-hidden shadow-md cursor-pointer">
      {/* IMAGE */}
      <img
        src={image}
        alt={title}
        className="w-full h-64 object-cover transition-all duration-500 
        grayscale group-hover:grayscale-0 scale-100 group-hover:scale-105"
      />

      {/* DARK OVERLAY (DEFAULT) */}
      <div
        className="absolute inset-0 bg-gray/40 
        group-hover:bg-gradient-to-t group-hover:from-orange-600 group-hover:via-orange-500/50 group-hover:to-transparent 
        transition-all duration-500"
      ></div>

      {/* TEXT + BUTTON */}
      <div
        className="absolute bottom-4 left-4 right-4 
        opacity-0 group-hover:opacity-100 
        translate-y-4 group-hover:translate-y-0 
        transition-all duration-500"
      >
        <h3 className="text-white text-xl font-semibold mb-2">{title}</h3>

        <button className="text-white font-medium inline-flex items-center gap-2">
          Learn More →
        </button>
      </div>
    </div>
  );
}
