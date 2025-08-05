'use client';

import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface BeforeAfterItem {
  id: string;
  title: string;
  beforeImage: string;
  afterImage: string;
  description: string;
}

interface BeforeAfterSliderProps {
  items: BeforeAfterItem[];
}

const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({ items }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    arrows: true,
    adaptiveHeight: true,
  };

  return (
    <div className="before-after-slider bg-white rounded-lg shadow-lg overflow-hidden">
      <Slider {...settings}>
        {items.map((item) => (
          <div key={item.id} className="px-4 py-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center product-name-shadow">
              {item.title}
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Before Image */}
              <div className="relative">
                <div className="bg-red-50 border-2 border-red-200 rounded-lg p-8 h-64 flex items-center justify-center">
                  <div className="text-center text-red-600">
                    <div className="text-6xl mb-4">🏠</div>
                    <p className="font-semibold">BEFORE</p>
                    <p className="text-sm text-caption mt-2">Traditional Setup</p>
                  </div>
                </div>
                <div className="absolute top-2 left-2 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Before
                </div>
              </div>

              {/* After Image */}
              <div className="relative">
                <div className="bg-green-50 border-2 border-green-200 rounded-lg p-8 h-64 flex items-center justify-center">
                  <div className="text-center text-green-600">
                    <div className="text-6xl mb-4">🏡</div>
                    <p className="font-semibold">AFTER</p>
                    <p className="text-sm text-caption mt-2">Smart Home Solution</p>
                  </div>
                </div>
                <div className="absolute top-2 left-2 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  After
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="mt-6 text-center">
              <p className="text-gray-600 text-lg">{item.description}</p>
            </div>
          </div>
        ))}
      </Slider>

      <style jsx global>{`
        .before-after-slider .slick-dots {
          bottom: -50px;
        }
        
        .before-after-slider .slick-dots li button:before {
          color: #007BFF;
          font-size: 12px;
        }
        
        .before-after-slider .slick-dots li.slick-active button:before {
          color: #007BFF;
          opacity: 1;
        }
        
        .before-after-slider .slick-prev,
        .before-after-slider .slick-next {
          z-index: 1;
        }
        
        .before-after-slider .slick-prev {
          left: 10px;
        }
        
        .before-after-slider .slick-next {
          right: 10px;
        }
        
        .before-after-slider .slick-prev:before,
        .before-after-slider .slick-next:before {
          color: #007BFF;
          font-size: 20px;
        }
      `}</style>
    </div>
  );
};

export default BeforeAfterSlider;