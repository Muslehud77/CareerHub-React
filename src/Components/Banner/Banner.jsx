
import { useContext } from 'react';
import user from '../../assets/images/user.png'
import { DarkModeContext } from '../Root/Root';


const Banner = () => {
    const dark = useContext(DarkModeContext)
    return (
      <div className={`${dark ? "bg-black" : "bg-purple-50"} `}>
        <div className="md:flex flex-row-reverse items-center container mx-auto px-5 md:px-0">
          <div>
            <img src={user} alt="" />
          </div>
          <div className="w-9/12 space-y-5 py-10 md:py-0">
            <h1 className="text-5xl font-semibold">
              One Step <br /> Closer To Your <br />{" "}
              <span className="text-purple-300"> Dream Job</span>
            </h1>
            <p className="w-8/12">
              Explore thousands of job opportunities with all the information
              you need. Its your future. Come find it. Manage all your job
              application from start to finish.
            </p>
            <button className="btn bg-purple-400 text-white hover:bg-purple-300">
              Get Started
            </button>
          </div>
        </div>
      </div>
    );
};

export default Banner;