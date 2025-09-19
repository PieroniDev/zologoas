import React from "react";
import { Link, useLocation } from "react-router-dom";
import MusicPlayer from "./Components/MusicPlayer";

export default function Layout({ children, currentPageName }) {
    return (
        <div className="min-h-screen bg-gradient-to-br from-amber-50 to-stone-100">
            <style>
                {`
          @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Lora:wght@300;400;500&display=swap');
          
          :root {
            --primary-gold: #d4af37;
            --warm-beige: #f5f1e8;
            --soft-brown: #8b7355;
            --cream: #fefcf3;
            --dark-brown: #5d4e37;
          }
          
          .serif-heading {
            font-family: 'Playfair Display', serif;
          }
          
          .serif-body {
            font-family: 'Lora', serif;
          }
          
          body {
            font-family: 'Lora', serif;
          }
                #root > div > div.min-h-screen.w-full.relative.app-preview > div.fixed.z-50.text-white.bottom-4.right-4.flex.items-center.gap-2.bg-black.pt-2.pb-2.pl-3.pr-3.rounded-md.shadow-lg.cursor-pointer.transition-all.hover\:shadow-xl.border.border-neutral-800{display:none !important;}
        `}
            </style>

            <MusicPlayer />

            <main className="relative">
                {children}
            </main>
        </div>
    );
}