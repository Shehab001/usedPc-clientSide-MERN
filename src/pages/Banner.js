import React from "react";

const Banner = () => {
  return (
    <div>
      <div className="carousel w-9/12 rounded mx-auto my-20">
        <div id="slide1" className="carousel-item relative w-full h-full">
          <img
            src="https://res.cloudinary.com/dc9bjecdl/image/upload/v1669434537/Assignment%2012/photo-1514826786317-59744fe2a548_gklc9u.jpg"
            alt="mac"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://res.cloudinary.com/dc9bjecdl/image/upload/v1669434537/Assignment%2012/download_lpno2c.jpg"
            alt="random"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://res.cloudinary.com/dc9bjecdl/image/upload/v1669434537/Assignment%2012/images_i5incq.jpg"
            alt="random"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
