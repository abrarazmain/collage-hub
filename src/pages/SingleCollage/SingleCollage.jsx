import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleCollage = () => {
  const { id } = useParams();
  const [collage, setCollage] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/singleCollage/${id}`)
      .then((res) => res.json())
      .then((data) => setCollage(data));
  }, [id]);

  console.log(collage);

  if (!collage.collegeName) {
    return <div>Loading...</div>;
  }

  return (
    <div className="my-12">
      <div className="hero min-h-screen bg-base-200 ">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={collage.collegeImage}
            className="max-w-lg rounded-lg shadow-2xl"
          />
          <div className="text-left">
            <h1 className="text-5xl font-bold">{collage.collegeName}</h1>
            <div>
              <h2 className="text-xl font-bold mt-6">EVENTS:</h2>
              {collage.events.map((event, index) => (
                <div key={index}>
                  <p className="text-xl font-bold">{index + 1}</p>
                  <p>NAME: {event.eventName}</p>
                  <p>DATE: {event.date}</p>
                  <p>DESCRIPTION: {event.description}</p>
                </div>
              ))}
              <h2 className="text-xl font-bold mt-6">RESEARCH WORKS:</h2>
              {collage.researchHistory.map((event, index) => (
                <div key={index}>
                  <p className="text-xl font-bold">{index + 1}</p>
                  <p>TITLE: {event.title}</p>
                  <p>AUTHORS: {event.authors}</p>
                  <p>DATE: {event.publicationDate}</p>
                  <p>DESCRIPTION: {event.description}</p>
                </div>
              ))}
              <h2 className="text-xl font-bold mt-6">SPORTS</h2>
              {collage.sports.map((event, index) => (
                <div key={index}>
                  <p className="text-xl font-bold">{index + 1}</p>
                  <p>CATEGORY: {event.category}</p>
                  <p>COACH: {event.coach}</p>
                  <p>SCHEDULE: {event.practiceSchedule}</p>
                  <p>DESCRIPTION: {event.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCollage;
