"use client";
import { useState } from "react";

export default function PropertyGallery({ images }: { images: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prev = () => setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));

  return (
    <div className="relative h-full w-full group">
      <img 
        src={images[currentIndex]} 
        alt={`Foto ${currentIndex + 1} do imóvel`} 
        className="w-full h-full object-cover transition-opacity duration-300"
      />
      
      {/* Setas de Navegação */}
      <button 
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/80 text-white w-10 h-10 flex items-center justify-center rounded-full opacity-0 group-hover:opacity-100 transition-all shadow-md z-20"
        aria-label="Imagem Anterior"
      >
        &#10094;
      </button>
      <button 
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/80 text-white w-10 h-10 flex items-center justify-center rounded-full opacity-0 group-hover:opacity-100 transition-all shadow-md z-20"
        aria-label="Próxima Imagem"
      >
        &#10095;
      </button>

      {/* Pontos de Navegação (Dots) */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {images.map((_, idx) => (
          <button 
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-3 h-3 rounded-full transition-all shadow-sm ${idx === currentIndex ? 'bg-primary scale-125' : 'bg-white/70 hover:bg-white'}`}
            aria-label={`Ir para a imagem ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
