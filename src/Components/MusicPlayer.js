import React, { useState, useRef, useEffect } from "react";
import { Play, Pause, Volume2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.3);
  const audioRef = useRef(null);

  // URL de exemplo - você pode substituir por sua música
  const musicUrl = "https://open.spotify.com/intl-pt/track/6ccKu0LwJzOhLAxBwP2PTk?si=d72aa91b6bd74375";

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
      audioRef.current.loop = true;
    }
  }, [volume]);

  useEffect(() => {
    // Auto-play quando carregar (alguns browsers podem bloquear)
    const playMusic = async () => {
      try {
        if (audioRef.current && !isPlaying) {
          await audioRef.current.play();
          setIsPlaying(true);
        }
      } catch (error) {
        console.log("Auto-play foi bloqueado pelo browser");
      }
    };
    
    // Só tenta tocar na primeira vez quando o componente monta
    if (!isPlaying) {
      playMusic();
    }
  }, []); // Remove isPlaying da dependência para evitar loop

  const togglePlay = async () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        try {
          await audioRef.current.play();
          setIsPlaying(true);
        } catch (error) {
          console.log("Erro ao reproduzir música");
        }
      }
    }
  };

  return (
    <div className="fixed top-6 right-6 z-50 bg-white/80 backdrop-blur-sm rounded-full p-3 shadow-lg">
      <audio ref={audioRef} preload="auto">
        {/* Substitua por sua música */}
        <source src={musicUrl} type="audio/mpeg" />
      </audio>
      
      <div className="flex items-center gap-3">
        <Button
          variant="ghost"
          size="sm"
          onClick={togglePlay}
          className="rounded-full w-10 h-10 p-0"
        >
          {isPlaying ? (
            <Pause className="w-4 h-4" />
          ) : (
            <Play className="w-4 h-4" />
          )}
        </Button>
        
        <div className="flex items-center gap-2">
          <Volume2 className="w-4 h-4 text-stone-600" />
          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={volume}
            onChange={(e) => setVolume(parseFloat(e.target.value))}
            className="w-16 h-1 bg-stone-300 rounded-lg appearance-none cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}