
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Heart } from "lucide-react";

export default function Counter() {
  const [timeData, setTimeData] = useState({
    years: 0,
    months: 0,
    days: 0,
    totalDays: 0
  });

  useEffect(() => {
    const calculateTime = () => {
      const startDate = new Date('2022-09-20');
      const currentDate = new Date();
      
      // Calcular diferença total em dias
      const timeDiff = currentDate.getTime() - startDate.getTime();
      const totalDays = Math.floor(timeDiff / (1000 * 3600 * 24));
      
      // Calcular anos, meses e dias
      let years = currentDate.getFullYear() - startDate.getFullYear();
      let months = currentDate.getMonth() - startDate.getMonth();
      let days = currentDate.getDate() - startDate.getDate();
      
      if (days < 0) {
        months--;
        const lastDayOfPrevMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();
        days += lastDayOfPrevMonth;
      }
      
      if (months < 0) {
        years--;
        months += 12;
      }
      
      setTimeData({ years, months, days, totalDays });
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000 * 60 * 60); // Atualiza a cada hora
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-stone-50 to-amber-100 relative overflow-hidden">
      {/* Elementos decorativos de fundo */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-gradient-to-br from-amber-200/20 to-stone-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-gradient-to-br from-stone-200/20 to-amber-200/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-amber-100/30 to-stone-100/30 rounded-full blur-3xl"></div>
      </div>

      {/* Botão voltar */}
      <Link to={createPageUrl("Quiz")}>
        <Button
          variant="ghost"
          className="fixed top-6 left-6 z-10 bg-white/80 backdrop-blur-sm rounded-full shadow-lg"
        >
          <ArrowLeft className="w-4 h-4" />
        </Button>
      </Link>

      {/* Conteúdo principal */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-6">
        <div className="text-center max-w-4xl">
          {/* Título */}
          <div className="mb-12">
            <Heart className="w-16 h-16 text-red-500 mx-auto mb-6 animate-pulse" />
            <h1 className="serif-heading text-4xl md:text-6xl font-bold text-stone-800 mb-4">
              Nosso Tempo Juntos
            </h1>
            <p className="serif-body text-xl text-stone-600 mb-2">
              Desde 20 de Setembro de 2022
            </p>
            <p className="serif-body text-lg text-stone-500">
              Cada dia é um novo capítulo da nossa história princesa
            </p>
          </div>

          {/* Contador principal */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-amber-200/50">
              <div className="text-5xl md:text-6xl font-bold text-amber-600 serif-heading mb-2">
                {timeData.years}
              </div>
              <div className="text-lg text-stone-700 serif-body font-medium">
                {timeData.years === 1 ? 'Ano' : 'Anos'}
              </div>
            </div>

            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-stone-200/50">
              <div className="text-5xl md:text-6xl font-bold text-stone-600 serif-heading mb-2">
                {timeData.months}
              </div>
              <div className="text-lg text-stone-700 serif-body font-medium">
                {timeData.months === 1 ? 'Mês' : 'Meses'}
              </div>
            </div>

            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-amber-200/50">
              <div className="text-5xl md:text-6xl font-bold text-amber-700 serif-heading mb-2">
                {timeData.days}
              </div>
              <div className="text-lg text-stone-700 serif-body font-medium">
                {timeData.days === 1 ? 'Dia' : 'Dias'}
              </div>
            </div>
          </div>

          {/* Total de dias */}
          <div className="bg-gradient-to-r from-amber-600 to-stone-600 rounded-2xl p-8 text-white shadow-2xl mb-12">
            <div className="text-4xl md:text-5xl font-bold serif-heading mb-2">
              {timeData.totalDays.toLocaleString()}
            </div>
            <div className="text-xl serif-body">
              Dias de amor e cumplicidade
            </div>
          </div>

          {/* Mensagem especial */}
          <div className="bg-white/40 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-amber-200/30">
            <p className="text-lg md:text-xl text-stone-700 serif-body leading-relaxed mb-4">
              "O tempo não para, mas nosso amor só cresce. Cada segundo ao seu lado 
              é um presente que guardo no coração."
            </p>
            <p className="text-stone-600 serif-body italic">
              Com todo amor, para você ♥
            </p>
          </div>

          {/* Botão voltar ao início */}
          <div className="mt-12">
            <Link to={createPageUrl("Home")}>
              <Button 
                size="lg" 
                className="bg-stone-700 hover:bg-stone-800 text-white px-8 py-4 rounded-full text-lg serif-body font-medium shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                Voltar ao Início
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Corações flutuantes animados */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <Heart
            key={i}
            className="absolute text-red-300/30 animate-bounce"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
              fontSize: `${1 + Math.random() * 0.5}rem`
            }}
          />
        ))}
      </div>
    </div>
  );
}
