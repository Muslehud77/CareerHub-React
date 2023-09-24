
import PropTypes from 'prop-types';
import { HiOutlineLocationMarker } from "react-icons/hi";
import { Link } from 'react-router-dom';

const Job = ({job}) => {
    const {
      id,
      salary,
      logo,
      company_name,
      job_title,
      remote_or_onsite,
      location,
      job_type
    } = job;
   
    return (
      <div className="flex mb-3 md:mb-0 flex-col border rounded-xl p-8 gap-3">
        <img className="w-16 h-16 bg-white rounded-xl" src={logo} alt="" />
        <h4 className="text-3xl">{job_title}</h4>
        <h5 className="text-2xl font-semibold">{company_name}</h5>
        <div className="flex gap-2">
          <span className="p-2 text-center font-semibold border border-purple-400  rounded-lg">
            {remote_or_onsite}
          </span>
          <span className="p-2 text-center font-semibold border border-purple-400 rounded-lg">
            {job_type}
          </span>
        </div>
        <div className="flex justify-between font-semibold">
          <div className="flex items-center gap-2">
            <HiOutlineLocationMarker></HiOutlineLocationMarker>
            <p>{location}</p>
          </div>
          <div >
            
            <p>{salary}</p>
          </div>
        </div>
        <Link to={`/job/${id}`} className="btn w-36 bg-purple-400 text-white hover:bg-purple-300">
          View Details
        </Link>
      </div>
    );
};

Job.propTypes = {
    job: PropTypes.object.isRequired
};

export default Job;