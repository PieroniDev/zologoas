
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Gallery() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  // Fotos da galeria
  const galleryPhotos = [
    { id: 1, src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68ccaceec0a6ef99bbf4a44b/953abdd23_img1.jpg", alt: "24/08/2025, Rodeio" },
    { id: 2, src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68ccaceec0a6ef99bbf4a44b/4710ad8d7_img2.jpg", alt: "13/06/2025, La Pasta" },
    { id: 3, src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68ccaceec0a6ef99bbf4a44b/3f034316b_img3.jpg", alt: "07/06/2025, Pedra do Calhau" },
    { id: 4, src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68ccaceec0a6ef99bbf4a44b/3940cc738_img4.jpg", alt: "10/05/2025, Pedra do Calhau" },
    { id: 5, src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68ccaceec0a6ef99bbf4a44b/92d278a81_img5.jpg", alt: "08/04/2025, Rio Quente" },
    { id: 6, src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68ccaceec0a6ef99bbf4a44b/1bdda0924_img6.jpg", alt: "06/04/2025, Parque das Fontes" },
    { id: 7, src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68ccaceec0a6ef99bbf4a44b/153947cad_img7.jpg", alt: "15/03/2025, Roça" },
    { id: 8, src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68ccaceec0a6ef99bbf4a44b/fa5f0370f_img8.jpg", alt: "14/02/2025, Classic Burguer" },
    { id: 9, src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68ccaceec0a6ef99bbf4a44b/cc75abf97_img9.jpg", alt: "14/12/2024, Festa do Sicoob" },
    { id: 10, src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68ccaceec0a6ef99bbf4a44b/bd49fa21e_img10.jpg", alt: "09/10/2023, Búzios" },
    { id: 11, src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68ccaceec0a6ef99bbf4a44b/838b8e8c7_img11.jpg", alt: "15/06/2024, Festa Junina Sicoob" },
    { id: 12, src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68ccaceec0a6ef99bbf4a44b/35f6d3e13_img12.jpg", alt: "01/01/2024, Réveillon" },
    { id: 13, src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68ccaceec0a6ef99bbf4a44b/9330f6801_img13.jpg", alt: "08/10/2023, Búzios" },
  ];

  const positions = [
    { top: '8%', left: '10%', rotate: '-8deg' },
    { top: '5%', left: '30%', rotate: '5deg' },
    { top: '10%', left: '50%', rotate: '-10deg' },
    { top: '8%', left: '75%', rotate: '12deg' },
    { top: '35%', left: '5%', rotate: '7deg' },
    { top: '32%', left: '28%', rotate: '-5deg' },
    { top: '38%', left: '55%', rotate: '15deg' },
    { top: '35%', left: '80%', rotate: '-7deg' },
    { top: '65%', left: '12%', rotate: '10deg' },
    { top: '60%', left: '35%', rotate: '-8deg' },
    { top: '68%', left: '60%', rotate: '6deg' },
    { top: '62%', left: '82%', rotate: '-12deg' },
    { top: '5%', left: '90%', rotate: '4deg' },
  ];

  return (
    <div className="min-h-screen relative overflow-y-auto pb-32">
      {/* Fundo de cortiça */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-amber-100 to-stone-200"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 20%, rgba(139, 115, 85, 0.1) 1px, transparent 1px),
            radial-gradient(circle at 80% 80%, rgba(139, 115, 85, 0.1) 1px, transparent 1px),
            radial-gradient(circle at 40% 60%, rgba(139, 115, 85, 0.05) 2px, transparent 2px)
          `,
          backgroundSize: '30px 30px, 50px 50px, 80px 80px'
        }}
      />

      {/* Botão voltar */}
      <Link to="/sobre">
        <Button
          variant="ghost"
          className="fixed top-6 left-6 z-40 bg-white/80 backdrop-blur-sm rounded-full shadow-lg"
        >
          <ArrowLeft className="w-4 h-4" />
        </Button>
      </Link>

      {/* Título */}
      <div className="relative z-10 pt-20 pb-8 text-center">
        <h1 className="serif-heading text-4xl md:text-5xl font-bold text-stone-800 mb-4">
          Nossa Galeria de Memórias
        </h1>
        <p className="serif-body text-stone-600 text-lg">
          Clique nas fotos para vê-las melhor
        </p>
      </div>

      {/* Galeria de fotos */}
      <div className="relative w-full h-[120vh]">
        {galleryPhotos.map((photo, index) => (
          <motion.div
            key={photo.id}
            className="absolute cursor-pointer group"
            style={{
              top: positions[index % positions.length]?.top,
              left: positions[index % positions.length]?.left,
              transform: `rotate(${positions[index % positions.length]?.rotate})`,
              zIndex: selectedPhoto ? 10 : 20
            }}
            whileHover={{ 
              scale: 1.1, 
              rotate: 0,
              zIndex: 30,
              transition: { duration: 0.3 }
            }}
            onClick={() => setSelectedPhoto(photo)}
          >
            {/* Pin vermelho */}
            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 z-10">
              <div className="w-4 h-4 bg-red-500 rounded-full shadow-lg border-2 border-red-600">
                <div className="w-2 h-2 bg-red-600 rounded-full absolute top-1 left-1"></div>
              </div>
            </div>

            {/* Foto polaroid */}
            <div className="bg-white p-4 pb-8 shadow-xl transform transition-all duration-300 group-hover:shadow-2xl">
              <img
                src={photo.src}
                alt={photo.alt.split(',')[1] || photo.alt.split(',')[0]}
                className="w-48 h-60 object-cover"
                style={{ filter: 'sepia(15%) brightness(1.05)' }}
              />
              <div className="mt-3 text-center">
                <p className="text-xs text-stone-500 serif-body">
                  {photo.alt}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal da foto expandida */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedPhoto(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative bg-white p-6 pb-10 shadow-2xl max-w-lg w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Button
                variant="ghost"
                size="sm"
                className="absolute -top-12 right-0 text-white hover:text-stone-300"
                onClick={() => setSelectedPhoto(null)}
              >
                <X className="w-6 h-6" />
              </Button>
              
              <img
                src={selectedPhoto.src}
                alt={selectedPhoto.alt}
                className="w-full h-auto object-cover"
              />
              <div className="mt-4 text-center">
                <p className="text-sm text-stone-600 serif-body">
                  {selectedPhoto.alt}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Botão do Quiz */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-30">
        <Link to="/quiz">
          <Button 
            size="lg" 
            className="bg-stone-700 hover:bg-stone-800 text-white px-8 py-4 rounded-full text-lg serif-body font-medium shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            Responder um Quiz
          </Button>
        </Link>
      </div>
    </div>
  );
}
