import { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";

const Collages = () => {
  const [colleges, setColleges] = useState([]);

  useEffect(() => {
    fetch("https://my-collage-server.vercel.app/collages")
      .then((res) => res.json())
      .then((data) => setColleges(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  console.log(colleges);
  return (
    <>
      <h2 className="text-3xl sm:text-5xl block font-extrabold text-[#65C3C8] text-center my-12 ">
        <Fade delay={1} cascade damping={1e-1}>
          Available Collages
        </Fade>
      </h2>

      {colleges &&
        colleges.map((collage) => (
          <div
            key={collage._id}
            className="card lg:card-side bg-base-100 shadow-xl m-4"
          >
            <figure>
              <img
                className="w-[400px]"
                src={collage.collegeImage}
                alt="Album"
              />
            </figure>
            <div className="card-body text-left">
              <h2 className="card-title text-3xl">{collage.collegeName}</h2>
              <p className="card-title">
                <span>ADMISSION DATE:</span>
                {collage.admissionDates}
              </p>
              <p className="card-title">EVENTS:</p>
              {collage.events.map((event, i) => (
                <li key={i}>{event.eventName}</li>
              ))}
              <p className="card-title">Research History:</p>
              {collage.researchHistory.map((event, i) => (
                <li key={i}>{event.title}</li>
              ))}
              <p className="card-title">Sports:</p>
              {collage.sports.map((sport, i) => (
                <li key={i}>{sport.category}</li>
              ))}
              <div></div>
              <div className="card-actions justify-end">
                <Link
                  to={`/singleCollage/${collage._id}`}
                  className="btn btn-primary"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default Collages;
