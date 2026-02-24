import React from "react";
import { motion } from "framer-motion";
import Hero from "../../assets/Bg-hero.jpg";
import TextType from "@/Animations/TextType";
import Vision from "./Vision";
import FadeContent from "../../components/FadeContent";
import AboutUs from "./AboutUs";
import Programs from "./Programs";
import UpcomingEvents from "./UpcomingEvents";
import Impact from "./Impact";
import FooterCTA from "./Footer";


function HomePage() {
  return (
    <>
      <motion.div
        initial={{ x: "100%", opacity: 0 }} // start off-screen to the right
        animate={{ x: 0, opacity: 1 }} // slide to normal position
        exit={{ x: "-100%", opacity: 0 }} // optional: slide out to the left
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="min-h-screen bg-white"
      >
        <main className="flex flex-col">
          <section>
            <section
              id="home"
              className="relative min-h-screen flex items-center justify-center text-center bg-gray-800 text-white"
            >
              <img
                src={Hero}
                alt="Hero Background"
                className="object-cover opacity-30 absolute top-0 left-0 w-full h-full"
              />
              <div className="relative z-10 px-4">
                <div className="text-3xl font-bold mb-4">
                  <TextType
                    text={["மலேசிய நால்வர் மன்றம்", "Malaysia Naalvar Mandram"]}
                    typingSpeed={75}
                    pauseDuration={1500}
                    showCursor={true}
                    cursorCharacter="|"
                  />
                </div>
                <p className="mt-4 text-lg md:text-xl">
                  Serving the community with devotion and unity
                </p>
                <div className="mt-6 flex justify-center gap-4">
                  <button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-lg transition">
                    Learn More
                  </button>
                  <button className="border border-white px-6 py-2 rounded-lg hover:bg-white hover:text-gray-900 transition">
                    Get Involved
                  </button>
                </div>
              </div>
            </section>
          </section>
          <FadeContent>
            <section>
              <Vision />
            </section>
          </FadeContent>

          <section>
            <AboutUs />
          </section>

          <FadeContent>
            <section>
              <Programs />
            </section>
          </FadeContent>

          <FadeContent>
            <section>
              <UpcomingEvents />
            </section>
          </FadeContent>

          <FadeContent>
            <section>
              <Impact />
            </section>
          </FadeContent>

          <FadeContent>
            <section>
              <FooterCTA />
            </section>
          </FadeContent>
        </main>
      </motion.div>
    </>
  );
}

export default HomePage;
