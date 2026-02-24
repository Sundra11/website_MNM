import React from "react";
import { motion } from "framer-motion";
import Img1 from "../../assets/img-1.jpg";
import { useEffect, useState } from "react";
import { CheckCircle } from "lucide-react";

const AboutUs = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    });

    const element = document.getElementById("about-section");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const ABOUT_US =
    "We are a community-driven NGO dedicated to promoting Hindu values, empowering youth, and fostering unity through education, welfare, and cultural activities.";

  return (
    <section className="py-20 bg-white" id="about">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          id="about-section"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* LEFT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <img
              src={Img1}
              alt="About us"
              className="rounded-xl shadow-xl object-cover w-full h-[420px]"
            />
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-2">
              Who We Are <span className="text-primary">நாம் யார்</span>
            </h2>

            <p className="text-gray-600 leading-relaxed mb-4">
              A short summary of the organization’s purpose, mission, and core
              values, presented in both English and Tamil to welcome our diverse
              community.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              {ABOUT_US}
            </p>

            {/* BULLET POINTS */}
            <div className="space-y-4">
              {[
                {
                  title: "Community & Togetherness",
                  desc: "Fostering a strong, supportive, and vibrant community.",
                },
                {
                  title: "Education & Culture",
                  desc: "Preserving and promoting our rich cultural heritage through education.",
                },
                {
                  title: "Service & Seva",
                  desc: "Giving back through selfless service and outreach programs.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isVisible ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="text-orange-500 w-6 h-6 mt-1" />
                  <p className="text-gray-800">
                    <span className="font-semibold">{item.title}:</span>{" "}
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
