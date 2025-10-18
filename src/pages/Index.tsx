import { useState } from 'react';

const Index = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const farmElements = [
    { id: 'pumpkin1', type: 'pumpkin', x: 15, y: 15, size: 'large', rotation: -5 },
    { id: 'pumpkin2', type: 'pumpkin', x: 75, y: 20, size: 'medium', rotation: 8 },
    { id: 'pumpkin3', type: 'pumpkin', x: 25, y: 70, size: 'small', rotation: -3 },
    { id: 'pumpkin4', type: 'pumpkin', x: 80, y: 75, size: 'medium', rotation: 5 },
    
    { id: 'tree1', type: 'tree', x: 10, y: 45, size: 'large' },
    { id: 'tree2', type: 'tree', x: 85, y: 50, size: 'medium' },
    
    { id: 'grave1', type: 'grave', x: 20, y: 30, rotation: -2 },
    { id: 'grave2', type: 'grave', x: 78, y: 38, rotation: 3 },
    
    { id: 'ghost1', type: 'ghost', x: 30, y: 25 },
    { id: 'ghost2', type: 'ghost', x: 70, y: 65 },
    
    { id: 'skeleton', type: 'skeleton', x: 65, y: 45 },
    
    { id: 'path1', type: 'path', x: 40, y: 30, direction: 'horizontal' },
    { id: 'path2', type: 'path', x: 50, y: 40, direction: 'vertical' },
    { id: 'path3', type: 'path', x: 60, y: 30, direction: 'horizontal' },
  ];

  const renderElement = (element: any) => {
    const isHovered = hoveredItem === element.id;
    const baseClass = "absolute transition-all duration-300 cursor-pointer";

    switch (element.type) {
      case 'pumpkin':
        const pumpkinSizes = { small: 40, medium: 60, large: 80 };
        const size = pumpkinSizes[element.size as keyof typeof pumpkinSizes];
        return (
          <div
            key={element.id}
            className={`${baseClass} ${isHovered ? 'scale-110' : ''}`}
            style={{
              left: `${element.x}%`,
              top: `${element.y}%`,
              transform: `rotate(${element.rotation}deg)`,
            }}
            onMouseEnter={() => setHoveredItem(element.id)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <div className="relative" style={{ width: size, height: size }}>
              <div className={`w-full h-full rounded-full bg-gradient-to-br from-orange-500 to-orange-700 shadow-lg ${isHovered ? 'animate-glow' : ''}`}>
                <div className="absolute inset-0 flex items-center justify-center text-yellow-300 text-2xl animate-glow">
                  🎃
                </div>
              </div>
              <div className={`absolute -inset-1 bg-orange-400 rounded-full opacity-50 blur-md ${isHovered ? 'animate-pulse' : ''}`}></div>
            </div>
          </div>
        );

      case 'tree':
        return (
          <div
            key={element.id}
            className={`${baseClass} ${isHovered ? 'scale-105' : ''}`}
            style={{
              left: `${element.x}%`,
              top: `${element.y}%`,
            }}
            onMouseEnter={() => setHoveredItem(element.id)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <div className={`${element.size === 'large' ? 'w-20 h-24' : 'w-16 h-20'} animate-sway`}>
              <div className="relative">
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-12 bg-gradient-to-b from-amber-900 to-amber-950"></div>
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-orange-800 to-red-900 rounded-full opacity-80"></div>
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-orange-700 to-red-800 rounded-full opacity-90"></div>
                <div className="absolute top-6 left-1/2 -translate-x-1/2 text-2xl">🍂</div>
              </div>
            </div>
          </div>
        );

      case 'grave':
        return (
          <div
            key={element.id}
            className={`${baseClass} ${isHovered ? 'scale-110' : ''}`}
            style={{
              left: `${element.x}%`,
              top: `${element.y}%`,
              transform: `rotate(${element.rotation}deg)`,
            }}
            onMouseEnter={() => setHoveredItem(element.id)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <div className="w-10 h-14 bg-gradient-to-b from-gray-600 to-gray-800 rounded-t-lg shadow-xl">
              <div className="flex items-center justify-center h-full text-gray-400 text-xs">RIP</div>
            </div>
          </div>
        );

      case 'ghost':
        return (
          <div
            key={element.id}
            className={`${baseClass} animate-float`}
            style={{
              left: `${element.x}%`,
              top: `${element.y}%`,
            }}
            onMouseEnter={() => setHoveredItem(element.id)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <div className={`text-5xl transition-all ${isHovered ? 'scale-125' : ''}`}>
              👻
            </div>
          </div>
        );

      case 'skeleton':
        return (
          <div
            key={element.id}
            className={`${baseClass} ${isHovered ? 'animate-wiggle' : ''}`}
            style={{
              left: `${element.x}%`,
              top: `${element.y}%`,
            }}
            onMouseEnter={() => setHoveredItem(element.id)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <div className="text-5xl">💀</div>
          </div>
        );

      case 'path':
        return (
          <div
            key={element.id}
            className="absolute"
            style={{
              left: `${element.x}%`,
              top: `${element.y}%`,
            }}
          >
            <div
              className={`bg-gradient-to-br from-gray-500 to-gray-700 shadow-inner ${
                element.direction === 'horizontal' ? 'w-16 h-8' : 'w-8 h-16'
              }`}
              style={{
                clipPath: element.direction === 'horizontal' 
                  ? 'polygon(10% 0%, 90% 0%, 100% 50%, 90% 100%, 10% 100%, 0% 50%)'
                  : 'polygon(0% 10%, 50% 0%, 100% 10%, 100% 90%, 50% 100%, 0% 90%)'
              }}
            ></div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-8">
      <div className="max-w-4xl w-full">
        <h1 className="text-5xl font-bold text-center mb-4 text-orange-400 drop-shadow-[0_0_20px_rgba(249,115,22,0.5)]">
          Хеллоуинское украшение фермы 🎃
        </h1>
        <p className="text-center text-orange-200 mb-8 text-lg">
          Наведите на элементы чтобы они ожили!
        </p>

        <div className="relative w-full aspect-square max-w-2xl mx-auto bg-gradient-to-br from-emerald-950 to-green-900 rounded-2xl shadow-2xl overflow-hidden border-4 border-orange-600/30">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(45,80,22,0.4),transparent_70%)]"></div>
          
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="relative w-32 h-40 flex flex-col items-center">
              <div className="w-20 h-32 bg-gradient-to-b from-gray-400 to-gray-600 rounded-lg shadow-2xl relative">
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-800 rounded-full shadow-lg animate-glow"></div>
                <div className="absolute top-12 w-full h-2 bg-gray-700"></div>
                <div className="absolute bottom-8 w-full h-2 bg-gray-700"></div>
              </div>
              <div className="w-24 h-6 bg-gradient-to-b from-gray-700 to-gray-800 rounded-lg mt-2"></div>
            </div>
          </div>

          {farmElements.map(renderElement)}

          <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/20 to-transparent"></div>
        </div>

        <div className="mt-6 text-center text-sm text-orange-300/70">
          Элементы: тыквы со свечением, мрачные деревья, надгробия, призраки и скелет
        </div>
      </div>
    </div>
  );
};

export default Index;
