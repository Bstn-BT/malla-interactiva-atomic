import React from 'react';

export const BatRain = () => {
  // Posiciones y delays extraídos manualmente de tu CSS (.snowflake:nth-child...)
  const config = [
    { left: '1%', delay: '0s, 0s' },
    { left: '10%', delay: '1s, 1s' },
    { left: '20%', delay: '6s, 0.5s' },
    { left: '30%', delay: '4s, 2s' },
    { left: '40%', delay: '2s, 2s' },
    { left: '50%', delay: '8s, 3s' },
    { left: '60%', delay: '6s, 2s' },
    { left: '70%', delay: '2.5s, 1s' },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-[1000] overflow-hidden">
      {config.map((item, i) => (
        <div 
          key={i} 
          className="absolute -top-[10%] animate-snowflakes-fall"
          style={{ 
            left: item.left, 
            animationDelay: item.delay.split(',')[0], // Delay de caída
            animationDuration: '10s' 
          }}
        >
          <div 
            className="animate-snowflakes-shake"
            style={{ 
              animationDelay: item.delay.split(',')[1], // Delay de oscilación
              animationDuration: '3s'
            }}
          >
            <img 
              src="../../../public/gif/bat.webp" 
              className="w-10 opacity-80 filter-bat-red" // Usamos la clase filter exacta
              alt="bat" 
            />
          </div>
        </div>
      ))}
    </div>
  );
};