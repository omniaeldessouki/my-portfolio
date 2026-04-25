"use client";

import Carousel from "@/components/ui/carousel";
export function CarouselDemo() {
   const slideData = [
    {
      title: "AI Vision Systems",
    //   button: "Explore AI",
      src: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2400&auto=format&fit=crop",
    },
    {
      title: "Neural Networks",
    //   button: "Explore AI",
      src: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2400&auto=format&fit=crop",
    },
    {
      title: "Smart Automation",
    //   button: "Explore AI",
      src: "https://images.unsplash.com/photo-1555255707-c07966088b7b?q=80&w=2400&auto=format&fit=crop",
    },
    {
      title: "Cloud Intelligence",
    //   button: "Explore AI",
      src: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2400&auto=format&fit=crop",
    },
  ];
  return (
    <div className="relative overflow-hidden w-full h-full py-20">
      <Carousel slides={slideData} />
    </div>
  );
}
