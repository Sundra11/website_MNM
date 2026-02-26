import Img1 from "../../assets/ProgramPics/images.jpeg";
import Img2 from "../../assets/ProgramPics/2.jpeg";
import Img3 from "../../assets/ProgramPics/3.jpeg";
import Img4 from "../../assets/ProgramPics/4.jpg";
import HoverGalleryCard from "../../Animations/HoverGalleryCard";

const UpcomingEvents = () => {
  const ProgramArray = [
    {
      id: 1,
      title: "Hindu Teachers Course",
      desc: "Providing academic resources and mentorship to students in our community.",
      image: Img1,
    },
    {
      id: 2,
      title: "Religious Youth Activities",
      desc: "Empowering the next generation through leadership and development programs.",
      image: Img2,
    },
    {
      id: 3,
      title: "Online Classes",
      desc: "Learn anywhere, anytime with our engaging online programs.",
      image: Img3,
    },
    {
      id: 4,
      title: "Palan Tharum Pathigam",
      desc: "Celebrating our heritage with spiritual activities for all ages.",
      image: Img4,
    },
  ];

  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* TITLE stays exactly like your style */}
        <h2 className="flex items-center text-2xl font-bold text-center my-8">
          <span className="grow border-t border-orange-500"></span>
          <span className="px-4 font-bold">Stay Updated With Our Events</span>
          <span className="grow border-t border-orange-500"></span>
        </h2>

        {/* NEW GRID LAYOUT */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {ProgramArray.map((item) => (
            <HoverGalleryCard key={item.id} image={item.image} title={item.title}  />
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
