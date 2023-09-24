import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {
    const [jobs,setJobs] = useState([])
    const [showAll,setShowAll] = useState(false)
  

    useEffect(()=>{
        fetch('jobs.json')
        .then(res => res.json())
        .then(data => setJobs(data))
    },[])

    
   

let showJobs = [];
const allJobs = [...jobs];
const lessJobs = jobs.slice(0, 4);
showAll ? showJobs = allJobs : showJobs = lessJobs 




const handleClick = () =>{
setShowAll(!showAll);
}

    return (
      <div className=" space-y-5 flex flex-col container mx-auto my-10 px-5 md:px-0">
        <div className="text-center space-y-2">
          <h2 className="text-5xl font-semibold">Featured Jobs</h2>
          <p>
            Explore thousands of job opportunities with all the information you
            need. Its your future
          </p>
        </div>
        <div className="md:grid grid-cols-2 gap-3 justify-center items-center">
          {showJobs.map((job) => (
            <Job key={job.id} job={job}></Job>
          ))}
        </div>
        <div className="text-center">
          <button onClick={handleClick} className="btn bg-purple-400 text-white hover:bg-purple-600">
            Show {showAll? 'Less' : 'All'}
          </button>
        </div>
      </div>
    );
};

export default FeaturedJobs;