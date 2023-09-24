import { useContext, useEffect, useState } from "react";
import { DarkModeContext } from "../Root/Root";
// import { useLoaderData } from "react-router-dom";
import bgImg1 from "../../assets/images/bg1.png";
import bgImg2 from "../../assets/images/bg2.png";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication, removeJobApplication } from "../../Utility/LocalStorage";
import JobForApplied from "../JobForApplied/JobForApplied";



const AppliedJobs = () => {
  const jobs = useLoaderData();
  const dark = useContext(DarkModeContext);
const [appliedJobs,setAppliedJobs] = useState([])

const[displayJobs,setDisplayJobs] = useState([]) 


  useEffect(() => {
    const storedJobIds = getStoredJobApplication();
    if (jobs.length > 0) {
      const appliedJobs = jobs.filter((job) => storedJobIds.includes(job.id));

      setAppliedJobs(appliedJobs);
      setDisplayJobs(appliedJobs);
    }
  },[]);

const handleSort = filter => {
  console.log(filter)
  filter === 'All' && setDisplayJobs(appliedJobs)
  filter === 'Onsite' && setDisplayJobs(appliedJobs.filter(job => job.remote_or_onsite === 'Onsite' ))
  filter === 'Remote' && setDisplayJobs(appliedJobs.filter(job => job.remote_or_onsite === 'Remote' ))
}

const handleRemove = id =>{
removeJobApplication(id)

}



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

          <h1 className="text-5xl text-center p-20">Applied Jobs</h1>
        </div>
      </div>
      <div className="container mx-auto flex flex-col gap-5">
        {appliedJobs.length >= 2 && (
          <div className="flex justify-end mt-10">
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn m-1">
                Sort by
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a onClick={() => handleSort("All")}>All</a>
                </li>
                <li>
                  <a onClick={() => handleSort("Onsite")}>Onsite</a>
                </li>
                <li>
                  <a onClick={() => handleSort("Remote")}>Remote</a>
                </li>
              </ul>
            </div>
          </div>
        )}
        {appliedJobs.length <= 0 ? (
          <h1 className="text-5xl my-10 text-center">
            You Haven't Applied for Any Jobs yet!
          </h1>
        ) : (
          displayJobs.map((job) => (
            <JobForApplied
              handleRemove={handleRemove}
              key={job.id}
              job={job}
            ></JobForApplied>
          ))
        )}
      </div>
    </div>
  );
};

export default AppliedJobs;
