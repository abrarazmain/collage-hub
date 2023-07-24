import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { useForm } from "react-hook-form";
import { Fade } from "react-awesome-reveal";
import Swal from "sweetalert2";

const SubmitCollage = () => {
  const { id } = useParams();
  const [collage, setCollage] = useState({});
  const { register, handleSubmit } = useForm();
  const { user } = useContext(AuthContext);
  const { email, displayName } = user || {};

  useEffect(() => {
    fetch(`http://localhost:5000/singleCollage/${id}`)
      .then((res) => res.json())
      .then((data) => setCollage(data));
  }, [id]);
  const { collegeName } = collage;
  const onSubmit = (data) => {
    const processedData = {
      ...data,
      collage: collegeName,
    };

    fetch("http://localhost:5000/submitCollages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(processedData),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if (result.insertedId) {
          Swal.fire("Success!", "class added successfully!", "ok");
        }
      });
  };

  return (
    <form className="mb-36 rounded" onSubmit={handleSubmit(onSubmit)}>
      <h1 className="text-2xl md:text-5xl uppercase text-center text-red-600 mt-12">
        <Fade delay={1} cascade damping={1e-1}>
          Add A CLass
        </Fade>
      </h1>
      <div className="grid gap-6  md:grid-cols-2 bg-base-400 py-4 px-3  ">
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 ">
            Collage name
          </label>
          <input
            value={collegeName || ""}
            {...register("collage")}
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Collage"
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 ">
            Candidate name
          </label>
          <input
            defaultValue={displayName || ""}
            {...register("name")}
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Name"
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900">
            Candidate Email
          </label>
          <input
            value={email || ""}
            {...register("email")}
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Candidate Email"
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900">
            Phone Number
          </label>
          <input
            {...register("phone")}
            type="number"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder="Phone"
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900">
            Subject
          </label>
          <input
            {...register("subject")}
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder="Subject"
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900">
            Address
          </label>
          <input
            {...register("Address")}
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder="Address"
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900">
            Date of Birth
          </label>
          <input
            {...register("Birth")}
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder="DD/MM/YYYY"
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900">
            Image URl
          </label>
          <input
            {...register("img")}
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder="URL"
          />
        </div>
        <input
          className="btn bg-[#65C3C8] text-black"
          type="submit"
          value="Add"
        />
      </div>
    </form>
  );
};

export default SubmitCollage;
