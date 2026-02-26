import { useState } from "react";
import Logo from "../../assets/mnm-logo-HQ.png";
import { Menu, X } from "lucide-react";
import "@fontsource/montserrat/400.css";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const NavItems = [
    {
      label: "About",
      submenu: [
        { label: "Our Story", href: "#our-story" },
        { label: "Vision & Mission", href: "#vision" },
      ],
    },
    {
      label: "Programs",
      submenu: [
        { label: "Hindu Teachers Course", href: "#hindu-teachers-course" },
        { label: "Youth Programs", href: "#youth" },
      ],
    },
    { label: "Store", href: "#store" },
    { label: "Contact", href: "#contact" },
  ];

  // const NavbarLinks = ['Home', 'Profile', 'Our Team', 'News Update', 'Contact'];
  return (
    <nav className="w-full bg-white shadow-sm font-montserrat sticky">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
        <div className="flex items-center space-x-2">
          <img src={Logo} alt="MNM-Logo" width={"100px"} height={"100px"} />
          <div className="flex flex-col">
            <span>மலேசிய நால்வர் மன்றம்</span>
            <span>Malaysia Naalvar Mandram</span>
          </div>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          {NavItems.map((item) => {
            return (
              <a key={item.label} href={item.href} className="relative group cursor-pointer">
                {item.label}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            );
          })}

          <button className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition cursor-pointer">
            Support Us
          </button>
        </div>

        <div className="flex items-center md:hidden space-x-4">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }} // start hidden & slightly up
            animate={{ opacity: 1, y: 0 }} // fade in & slide down
            exit={{ opacity: 0, y: -20 }} // fade out & slide up
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-white shadow-md px-6 py-6 space-y-4"
          >
            {NavItems.map((item, i) => (
              <motion.a
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="block text-gray-700 hover:text-orange-600 transition"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                {item.label}
              </motion.a>
            ))}

            <motion.button
              className="w-full bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Support Us
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
