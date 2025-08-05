'use client';

import React, { useRef, useEffect } from 'react';

interface ProductMockup3DProps {
  productName: string;
  productModel?: string;
  icon?: string;
  description?: string;
  className?: string;
}

const ProductMockup3D: React.FC<ProductMockup3DProps> = ({ 
  productName, 
  productModel, 
  icon = "📱", 
  description,
  className = ""
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = (y - centerY) / 10;
      const rotateY = (centerX - x) / 10;
      
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
    };

    const handleMouseLeave = () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    };

    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div 
      ref={cardRef}
      className={`product-mockup-3d bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-200 rounded-xl p-6 transition-all duration-300 ease-out cursor-pointer ${className}`}
      style={{
        transformStyle: 'preserve-3d',
        transition: 'transform 0.3s ease-out'
      }}
    >
      {/* Product Icon/Image Placeholder */}
      <div className="text-center mb-4">
        <div className="text-6xl mb-2 filter drop-shadow-lg">
          {icon}
        </div>
        <div className="bg-white rounded-lg p-2 inline-block shadow-md">
          <span className="text-blue-600 font-semibold text-sm">3D Mockup</span>
        </div>
      </div>

      {/* Product Details */}
      <div className="text-center">
        <h3 className="text-xl font-bold text-gray-900 mb-2 product-name-shadow">
          {productName}
        </h3>
        
        {productModel && (
          <p className="text-sm font-semibold text-blue-600 mb-2">
            Model: {productModel}
          </p>
        )}
        
        {description && (
          <p className="text-sm text-gray-600 text-caption">
            {description}
          </p>
        )}
      </div>

      {/* 3D Effect Indicators */}
      <div className="absolute top-2 right-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
        3D
      </div>
      
      {/* Hover Instruction */}
      <div className="absolute bottom-2 left-2 bg-black bg-opacity-50 text-white px-2 py-1 rounded text-xs opacity-75">
        Hover for 3D effect
      </div>
    </div>
  );
};

export default ProductMockup3D;