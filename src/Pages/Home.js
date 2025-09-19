import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          className="w-full h-full object-cover"
          style={{ filter: 'brightness(0.7)' }}
        >
          {/* Substitua por seu vídeo */}
          <source src="https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4" type="video/mp4" />
        </video>
        
        {/* Overlay escuro sutil */}
        <div className="absolute inset-0 bg-gradient-to-br from-stone-900/30 via-amber-900/20 to-stone-900/40"></div>
      </div>

      {/* Conteúdo */}
      <div className="relative z-10 min-h-screen flex items-center justify-center">
        <div className="text-center px-6">
          {/* Título principal */}
          <h1 className="serif-heading text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-8 tracking-wide">
            André
            <span className="block text-5xl md:text-7xl lg:text-8xl text-amber-200 mt-2">
              &
            </span>
            <span className="block">
              Mariana
            </span>
          </h1>
          
          {/* Subtítulo delicado */}
          <p className="serif-body text-lg md:text-xl text-amber-100 mb-12 max-w-md mx-auto opacity-90">
            Nossa história de amor em páginas
          </p>

          {/* Botão elegante */}
          <Link to={createPageUrl("AboutUs")}>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white px-8 py-4 rounded-full text-lg serif-body font-medium shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              Sobre Nós
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </div>

      {/* Elementos decorativos */}
      <div className="absolute top-1/4 left-10 w-2 h-2 bg-amber-400 rounded-full opacity-60 animate-pulse"></div>
      <div className="absolute bottom-1/3 right-16 w-3 h-3 bg-amber-300 rounded-full opacity-40 animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-1 h-1 bg-white rounded-full opacity-80 animate-pulse delay-500"></div>
    </div>
  );
}