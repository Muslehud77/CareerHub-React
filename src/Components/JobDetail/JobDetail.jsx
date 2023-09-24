import { useContext, useState } from "react";
import { DarkModeContext } from "../Root/Root";
import { useLoaderData } from "react-router-dom";
import bgImg1 from '../../assets/images/bg1.png'
import bgImg2 from '../../assets/images/bg2.png'
import { ToastContainer, toast } from "react-toastify";
  import "react-toastify/dist/ReactToastify.css";
import { getStoredJobApplication, saveJobApplication } from "../../Utility/LocalStorage";



const JobDetail = () => {
  const job = useLoaderData()
  const dark = useContext(DarkModeContext);
 



const notify = () => {
  const findApplication = getStoredJobApplication().find(jobId => jobId == id)
  findApplication ? errorNotify() : successNotify();
  saveJobApplication(parseInt(id));
}
  
const successNotify = () => {
  toast.success(`Applied for ${job_title} at ${company_name}`, {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: dark ? "dark" : "light",
  });
}
const errorNotify = () => {
  toast.error(`Already applied for ${job_title} at ${company_name}`, {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: dark ? "dark" : "light",
  });
}



const {
  id,
   salary,
   company_name,
   job_title,
   job_description,
   experiences,
   educational_requirements,
   contact_information,
   job_responsibility,
 } = job;

 const {phone,email,address} = contact_information;

  return (
    <div>
      <div className={`${dark ? "bg-black" : "bg-purple-50"}`}>
        <div className="container mx-auto">
          <img
            className="absolute right-0 top-[118px] lg:top-[70px]"
            src={bgImg1}
            alt=""
          />
          <img className="absolute -z-0 top-0 left-0" src={bgImg2} alt="" />

          <h1 className="text-5xl text-center p-20">
            {job_title} at {company_name}
          </h1>
        </div>
      </div>
      <div className="grid md:grid-cols-4 my-16 gap-5 container mx-auto">
        <div className="md:col-span-3 space-y-5">
          <p>
            <span className="font-bold">Job Description: </span>

            {job_description}
          </p>
          <p>
            <span className="font-bold">Job Responsibility: </span>
            {job_responsibility}
          </p>
          <div>
            <p className="font-bold">Educational Requirements:</p>
            <p>{educational_requirements}</p>
          </div>
          <div>
            <p className="font-bold">Experiences:</p>
            <p>{experiences}</p>
          </div>
        </div>
        <div className="md:col-span-1">
          <div
            className={`${
              dark ? "bg-gray-800" : "bg-purple-50"
            } duration-500 p-5 rounded-lg space-y-2`}
          >
            <h4 className="text-2xl font-semibold">Job Details</h4>
            <hr />
            <div>
              <h5 className="text-xl">
                <span className="font-semibold">Salary : </span>
                {salary}
              </h5>
            </div>
            <div>
              <h5 className="text-xl">
                <span className="font-semibold">Job Title : </span>
                {job_title}
              </h5>
            </div>
            <h4 className="text-2xl font-semibold">Contact Information</h4>
            <hr />
            <div>
              <h5 className="text-xl">
                <span className="font-semibold">Phone : </span>
                {phone}
              </h5>
            </div>
            <div>
              <h5 className="text-xl">
                <span className="font-semibold">Email : </span>
                {email}
              </h5>
            </div>
            <div>
              <h5 className="text-xl">
                <span className="font-semibold">Address : </span>
                {address}
              </h5>
            </div>
          </div>
          <button
            onClick={notify}
            className="btn my-2 w-full bg-purple-400 text-white hover:bg-purple-600"
          >
            Apply now
          </button>
        </div>
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default JobDetail;
