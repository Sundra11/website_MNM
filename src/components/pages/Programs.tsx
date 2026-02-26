import { useRef, useEffect, useState } from "react";

import Img1 from "../../assets/ProgramPics/images.jpg";
import Img2 from "../../assets/ProgramPics/2.jpg";
import Img3 from "../../assets/ProgramPics/3.jpg";
import Img4 from "../../assets/ProgramPics/4.jpg";
import { motion } from "framer-motion";

function Programs() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    });

    const element = document.getElementById("about-section");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const ProgramArray = [
    { id: 1, title: "Hindu Teachers Course", image: Img1 },
    { id: 2, title: "Religious Youth Activities", image: Img2 },
    { id: 3, title: "Online classes", image: Img3 },
    { id: 4, title: "Palan Tharum Pathigam", image: Img4 },
    { id: 5, title: "Palan Tharum Pathigam", image: Img4 },
    { id: 6, title: "Palan Tharum Pathigam", image: Img4 },
  ];

  const scrollRef = useRef<HTMLDivElement | null>(null);
  const cardWidth = 280; // width of each card including gap

  // Manual scroll with arrows
  const handleNext = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += cardWidth;
    }
  };

  const handlePrev = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft -= cardWidth;
    }
  };

  // Detect active index based on scroll position
  const handleScroll = () => {
    if (!scrollRef.current) return;
    // const index = Math.round(scrollRef.current.scrollLeft / cardWidth);
  };

  // Auto-scroll
  useEffect(() => {
    const interval = setInterval(() => {
      if (!scrollRef.current) return;

      const maxScroll = (ProgramArray.length - 1) * cardWidth;
      const current = scrollRef.current.scrollLeft;

      if (current >= maxScroll) {
        scrollRef.current.scrollLeft = 0; // restart from beginning
      } else {
        scrollRef.current.scrollLeft += cardWidth;
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      id="about-section"
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      className="w-full gap-12 items-center"
    >
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h2 className="flex items-center text-2xl font-bold text-center my-8">
            <span className="grow border-t border-orange-500"></span>
            <span className="px-4 font-bold">Our Programs</span>
            <span className="grow border-t border-orange-500"></span>
          </h2>

          <div className="relative">
            {/* Left Arrow */}
            <button
              onClick={handlePrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow p-2 rounded-full z-10 hover:bg-gray-100"
            >
              ◀
            </button>

            {/* Scrollable Card Row */}
            <div
              ref={scrollRef}
              onScroll={handleScroll}
              className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth p-10"
            >
              {ProgramArray.map((program) => (
                <div
                  key={program.id}
                  className="min-w-65 bg-white rounded-2xl shadow-md hover:shadow-lg transition overflow-hidden group relative"
                >
                  {/* IMAGE WITH ZOOM + GRADIENT */}
                  <div className="relative h-48 w-full overflow-hidden">
                    <img
                      src={program.image}
                      alt={program.title}
                      className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent"></div>
                  </div>

                  <div className="p-5">
                    <p className="text-xs text-orange-500 font-semibold mb-1">
                      Community
                    </p>
                    <h3 className="text-lg font-bold text-gray-800 mb-2">
                      {program.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      A short description about {program.title.toLowerCase()}.
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Arrow */}
            <button
              onClick={handleNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow p-2 rounded-full z-10 hover:bg-gray-100"
            >
              ▶
            </button>
          </div>

          {/* ● ● ● ● Dots Indicator */}
          {/* <div className="flex justify-center mt-6 gap-2">
          {ProgramArray.map((_, i) => (
            <div
              key={i}
              className={`h-3 w-3 rounded-full transition-all ${
                activeIndex === i
                  ? "bg-orange-500 w-6"
                  : "bg-gray-300"
              }`}
            ></div>
          ))}
        </div> */}
        </div>
      </section>
    </motion.div>
  );
}

export default Programs;
