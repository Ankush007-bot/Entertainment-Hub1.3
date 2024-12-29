import axios from "axios";
import React, { useEffect, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { img_300, noPicture } from "../../config/config";
//import "./Carousel.css";

const handleDragStart = (e) => e.preventDefault();

const Gallery = ({ id, media_type }) => {
  const [credits, setCredits] = useState([]);

  const items = credits.map((c) => (
    <div className="carouselItem">
      <img
        src={c.profile_path ? `${img_300}/${c.profile_path}` : noPicture}
        alt={c?.name}
        onDragStart={handleDragStart}
        className="carouselItem__img"
      />
      <b className="carouselItem__txt">{c?.name}</b>
    </div>
  ));

  const responsive = {
    0: {
      items: 3,
    },
    512: {
      items: 5,
    },
    1024: {
      items: 7,
    },
  };

  const url = `https://api.themoviedb.org/3/${media_type}/${id}/credits?language=en-US`;

  const options = {
      method: 'GET',
      headers: {
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYzI0YmZiMDY4ZGM1NzYxNzNjOTJkNzZmODMwZjY5ZCIsIm5iZiI6MTczNTM3MTEwMi42NDMwMDAxLCJzdWIiOiI2NzZmYTk1ZWY5YmMwMmU0OTg5MmJjNjYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.P-3TRspZ0IR32QjkAqQMLNZLxeeTSZc0soB3rSuG9rM',
          accept: 'application/json',
      },
  };

  const fetchCredits = async () => {
    const { data } = await axios.get(url,options);
    setCredits(data.cast);
  };

  useEffect(() => {
    fetchCredits();
    // eslint-disable-next-line
  }, []);

  return (
    <AliceCarousel
      mouseTracking
      infinite
      disableDotsControls
      disableButtonsControls
      responsive={responsive}
      items={items}
      autoPlay
    />
  );
};

export default Gallery;
