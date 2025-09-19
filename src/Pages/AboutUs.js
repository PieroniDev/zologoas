
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Camera, ArrowLeft } from "lucide-react";

export default function AboutUs() {
  // Fotos para a seção "Sobre Nós"
  const polaroidPhotos = [
    { src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68ccaceec0a6ef99bbf4a44b/3f034316b_img3.jpg", alt: "Pôr do sol" },
    { src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68ccaceec0a6ef99bbf4a44b/4710ad8d7_img2.jpg", alt: "Jantar especial" },
    { src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68ccaceec0a6ef99bbf4a44b/92d278a81_img5.jpg", alt: "Viagem" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 via-amber-50 to-stone-100">
      {/* Botão voltar */}
      <Link to="/">
        <Button
          variant="ghost"
          className="fixed top-6 left-6 z-10 bg-white/80 backdrop-blur-sm rounded-full"
        >
          <ArrowLeft className="w-4 h-4" />
        </Button>
      </Link>

      <div className="container mx-auto px-6 py-12 h-screen flex items-center">
        <div className="grid lg:grid-cols-4 gap-8 w-full h-full items-center">
          {/* Seção de texto - 75% */}
          <div className="lg:col-span-3 space-y-8">
            <div>
              <h1 className="serif-heading text-5xl md:text-6xl font-bold text-stone-800 mb-6">
                Sobre Nós
              </h1>
              
              <div className="space-y-6 text-stone-700 serif-body text-lg leading-relaxed max-w-4xl">
                <p className="text-xl">
                  Nossa história começou como uma bela melodia, crescendo a cada dia com mais amor, 
                  cumplicidade e sonhos compartilhados, te amo minha gata.
                </p>
                
                <p>
                  Desde nosso primeiro encontro, soubemos que havia algo especial entre nós. 
                  Cada momento juntos se tornou uma memória preciosa, cada risada compartilhada 
                  fortaleceu nossos laços, é muito bom dividir a vida com minha linda.
                </p>
                
                <p>
                  Hoje, celebramos não apenas o tempo que passou, mas todos os momentos 
                  maravilhosos que ainda estão por vir. Nossa jornada é feita de pequenos 
                  gestos, grandes aventuras e um coraçao amarelo que cresce a cada dia.
                </p>
                
                <div className="pt-8">
                  <Link to="/galeria">
                    <Button 
                      size="lg" 
                      className="bg-stone-700 hover:bg-stone-800 text-white px-8 py-4 rounded-full text-lg serif-body font-medium shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                    >
                      <Camera className="mr-2 w-5 h-5" />
                      Abrir Galeria
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Seção de fotos - 25% */}
          <div className="lg:col-span-1 h-full flex flex-col justify-center">
            <div className="grid grid-cols-2 lg:grid-cols-1 gap-4">
              {polaroidPhotos.map((photo, index) => (
                <div 
                  key={index} 
                  className="polaroid-frame transform hover:scale-105 hover:rotate-1 transition-all duration-300"
                  style={{
                    transform: `rotate(${Math.random() * 6 - 3}deg)`,
                    filter: 'sepia(10%) brightness(1.1)'
                  }}
                >
                  <div className="bg-white p-3 shadow-lg">
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      className="w-full h-32 lg:h-40 object-cover"
                    />
                    <div className="h-8 bg-white flex items-center justify-center">
                      <span className="text-xs text-stone-500 serif-body">
                        {photo.alt}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
