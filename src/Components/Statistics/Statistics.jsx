import { useContext } from "react";
import { DarkModeContext } from "../Root/Root";
// import { useLoaderData } from "react-router-dom";
import bgImg1 from "../../assets/images/bg1.png";
import bgImg2 from "../../assets/images/bg2.png";

const Statistics = () => {

  const dark = useContext(DarkModeContext);


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

          <h1 className="text-5xl text-center p-20">Statistics</h1>
        </div>
      </div>
      <div className="h-screen"></div>
    </div>
  );
};

export default Statistics;
