import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Fade } from "react-awesome-reveal";

const MyCollage = () => {
  const [collages, setCollages] = useState([]);

  const { user } = useContext(AuthContext);
  const { displayName, email } = user;

  useEffect(() => {
    fetch("https://my-collage-server.vercel.app/myCollages")
      .then((res) => res.json())
      .then((data) => setCollages(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const myCollages = collages.filter(
    (collage) => collage.name === displayName || collage.email === email
  );

  if (!myCollages) {
    return <div>Loading...</div>;
  } else {
    return (
      <>
        <h2 className="text-3xl sm:text-5xl block font-extrabold text-[#65C3C8] text-center my-12 ">
          <Fade delay={1} cascade damping={1e-1}>
            Your Applied Collages and Details
          </Fade>
        </h2>
        {myCollages.map((collage, i) => (
          <div key={i}>
            <div className="hero min-h-auto bg-base-200 my-12">
              <div className="hero-content text-center">
                <h1 className="text-5xl font-bold">{collage.collage}</h1>
                <div className="">
                  <p className="m-2">
                    <span className="font-bold">CANDIDATE Name:</span>
                    {collage.name}
                  </p>
                  <p className="mb-2">
                    <span className="font-bold">CANDIDATE EMAIL:</span>
                    {collage.email}
                  </p>
                  <p className="mb-2">
                    <span className="font-bold">CANDIDATE PHONE:</span>
                    {collage.phone}
                  </p>
                  <p className="mb-2">
                    <span className="font-bold">CANDIDATE BIRTH:</span>
                    {collage.Birth}
                  </p>
                  <p className="mb-2">
                    <span className="font-bold">CANDIDATE ADDRESS:</span>
                    {collage.Address}
                  </p>
                  <p className="mb-2">
                    <span className="font-bold">SUBJECT:</span>
                    {collage.subject}
                  </p>
                  <button className="btn bg-[#65C3C8]">
                    Give rating and feedback
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </>
    );
  }
};

export default MyCollage;
