import { useEffect } from "react";
import AOS from "aos";
import { Fade } from "react-awesome-reveal";
const Gallery = () => {
  useEffect(() => {
    AOS.init({
      // Global settings for AOS
      duration: 800, // Duration of animations (in milliseconds)
      easing: "ease", // Easing function for animations
      once: true, // Whether animations should be triggered only once
    });
  }, []);
  return (
    <>
      <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-12">
      <h2 className="text-3xl sm:text-5xl block font-extrabold text-[#65C3C8] text-center my-12 ">
                <Fade delay={1} cascade damping={1e-1}>
                Graduates Pictures.
                </Fade>
              </h2>
        <div className="-m-1 flex flex-wrap md:-m-2" data-aos="fade-right">
          <div className="w-full sm:w-1/2 md:w-1/3 p-1 md:p-2">
            <img
              alt="gallery"
              className="block h-full w-full rounded-lg object-cover object-center"
              src="https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?cs=srgb&dl=pexels-pixabay-267885.jpg&fm=jpg"
            />
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 p-1 md:p-2">
            <img
              alt="gallery"
              className="block h-full w-full rounded-lg object-cover object-center"
              src="https://www.shutterstock.com/shutterstock/photos/658847998/display_1500/stock-photo-graduation-caps-thrown-in-the-air-658847998.jpg"
            />
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 p-1 md:p-2">
            <img
              alt="gallery"
              className="block h-full w-full rounded-lg object-cover object-center"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOWLhN_bkIAiAo5c8Q3n-3DZbWGCgVnwdpVA&usqp=CAU"
            />
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 p-1 md:p-2">
            <img
              alt="gallery"
              className="block h-full w-full rounded-lg object-cover object-center"
              src="https://i.ibb.co/XWBgvf0/istockphoto-539350870-170667a.jpg"
            />
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 p-1 md:p-2">
            <img
              alt="gallery"
              className="block h-full w-full rounded-lg object-cover object-center"
              src="https://i.ibb.co/RpG9StL/Child-Toys-Portrait-1296x728-Header.jpg"
            />
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 p-1 md:p-2">
            <img
              alt="gallery"
              className="block h-full w-full rounded-lg object-cover object-center"
              src="https://i.ibb.co/gMdVjmj/images.jpg"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
