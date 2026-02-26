import { useEffect, useState, useRef } from "react";
import { motion, useInView, useMotionValue, animate } from "framer-motion";
import { GraduationCap, PartyPopper, UsersRound } from "lucide-react";

const stats = [
  {
    id: 1,
    number: 200,
    label: "Hindu Teachers Graduated",
    icon: <GraduationCap className="text-orange-500 w-8 h-8" />,
  },
  {
    id: 2,
    number: 50,
    label: "Events Organized",
    icon: <PartyPopper className="text-orange-500 w-8 h-8" />,
  },
  {
    id: 3,
    number: 200,
    label: "Active Volunteers",
    icon: <UsersRound className="text-orange-500 w-8 h-8" />,
  },
];

type AnimatedNumberProps = {
  value: number;
  isVisible: boolean;
};

const AnimatedNumber = ({ value, isVisible }: AnimatedNumberProps) => {
  const motionValue = useMotionValue(0);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    const controls = animate(motionValue, value, {
      duration: 2,
      ease: "easeOut",
      onUpdate: (latest) => {
        setDisplay(Math.round(latest));
      },
    });

    return () => controls.stop();
  }, [isVisible, value, motionValue]);

  return <span>{display}+</span>;
};

export default function Impact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px", once: true });

  return (
    <section className="bg-[#FAF9F6] py-20">
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900">
          Our Impact in Numbers
        </h2>
        <p className="text-gray-600 text-center mt-2 max-w-xl mx-auto">
          Together, we are making a tangible difference in the lives of many.
          Here's a snapshot of our collective achievements.
        </p>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.2, duration: 0.8 }}
              className="bg-white rounded-xl shadow-sm p-10 text-center border"
            >
              <div className="flex justify-center mb-4">{stat.icon}</div>

              <h3 className="text-4xl font-bold text-gray-900">
                <AnimatedNumber value={stat.number} isVisible={isInView} />
              </h3>

              <p className="text-gray-600 mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
