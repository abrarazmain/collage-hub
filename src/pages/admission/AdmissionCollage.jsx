import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AdmissionCollage = () => {
  const [colleges, setColleges] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/collages")
      .then((res) => res.json())
      .then((data) => setColleges(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  console.log(colleges);

  return (
    <div>
      <div className="overflow-x-auto my-12">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th className="font-bold">#</th>
              <th>Name</th>

              <th>Admission Dates</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {colleges &&
              colleges.map((collage, i) => (
                <>
                  {" "}
                  <tr key={collage.id}>
                    <td className="font-bold">{i + 1}</td>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img
                              src={collage.collegeImage}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">{collage.collegeName}</div>
                        </div>
                      </div>
                    </td>

                    <td>{collage.admissionDates}</td>
                    <th>
                      <Link
                        to={`/submitCollage/${collage._id}`}
                        className="btn btn-xs"
                      >
                        <button>Apply</button>
                      </Link>
                    </th>
                  </tr>
                </>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdmissionCollage;
