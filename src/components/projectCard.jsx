import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function ProjectCard({ title, description, tech, images, frontend, backend, demo, fullstack }) {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-md p-6 
                transform transition-transform duration-300 
                hover:scale-105 hover:shadow-xl hover:shadow-indigo-500/40">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={10}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation
        autoplay={{ delay: 3000 }}
        loop
        className="rounded-xl mb-4"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <img src={img} alt={`Slide ${index}`} className="rounded-xl w-full h-48 object-cover" />
          </SwiperSlide>
        ))}
      </Swiper>

      <h3 className="text-2xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400 mb-3">{description}</p>
      <p className="text-sm text-gray-500 mb-4 italic">Tech: {tech.join(", ")}</p>

      <div className="flex flex-wrap gap-4">
        {fullstack && (
          <a href={fullstack} className="text-blue-600 hover:underline" target="_blank">Fullstack Code</a>
        )}
        {frontend && (
          <a href={frontend} className="text-blue-600 hover:underline" target="_blank">Frontend Code</a>
        )}
        {backend && (
          <a href={backend} className="text-green-600 hover:underline" target="_blank">Backend Code</a>
        )}
        {demo && (
          <a href={demo} className="text-purple-600 hover:underline" target="_blank">Live Demo</a>
        )}
      </div>
    </div>
  );
}
