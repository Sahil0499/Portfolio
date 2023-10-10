import React from "react";

const Resume = () => {
  return (
    <div id="resume" className=" container m-auto   mt-16">
      {/* heading */}
      <div data-aos="fade-up" className="relative mb-5">
        <h3 className=" text-3xl font-black text-gray-400 sm:text-2xl">
          Resume
        </h3>
        <span className="h-[1.1px] right-0 absolute w-[92%] bg-gray-300 block"></span>
      </div>
      <div data-aos="fade-up" className="left flex-1 w-full">
        <p className=" text-gray-700 font-medium w-[100%]">
          Here are my experiences.
        </p>
      </div>
      {/* card*/}
      <div className="card-wrapper w-[90%] sm:w-full mt-5 flex md:flex-col sm:gap-5 mx-auto ">
        <div className="left flex-1 flex items-center justify-center">
          <fieldset
            data-aos="zoom-in"
            className=" w-[80%] p-5 py-12 sm:py-8 sm:w-full sm:p-2"
          >
            <legend className=" w-auto ml-[50%] translate-x-[-50%] border-2 border-gray-200 rounded-3xl py-1 px-8 font-semibold text-xl text-yellow-500">
              Experience
            </legend>
            <div className=" relative">
              {/* design */}
              <div className="design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px] ">
                <div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
                <div className="line w-[230px] bg-gray-300 h-[2px] sm:w-[250px]"></div>
                <div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
              </div>
              {/* design */}
              <div className=" flex flex-col gap-1 sm:gap-1 border-2 border-yellow-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                  Software Engineer
                </h1>
                <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                  HCLTech
                </span>
                <span className=" text-[.9rem] font-semibold text-yellow-500 sm:text-base">
                  May 2022 - Present
                </span>
                <span className=" text-[.9rem] font-bold text-yellow-500 sm:text-base">
                  MICROSOFT
                </span>
                <p className=" text-[.9rem] text-justify break-words text-gray-500">
                • Designed and developed a comprehensive Chrome extension tool for
                creating <span className="font-bold">ICM incidents,</span> resulting in a <span className="font-bold">50% reduction in incident creation
                time.</span> <br />
                • Integrated a screenshot feature into the extension to enhance user
                experience. <br />
                • Implemented a streamlined workflow system that assigns incidents to
                the most appropriate team, resulting in a <span className="font-bold">20% increase in incident
                resolution efficiency.</span> <br />
                • Created Power Bi dashboard that enables client to track & analyze
                incidents data and necessary information. <br />
                • Successfully maintained and stabilized <span className="font-bold">450+ test cases for Outlook
                (Dynamics 365)</span> across multiple web browsers, reducing browser
                compatibility issues. <br />
                <br /> 
                </p>
              </div>
            </div>
          </fieldset>
        </div>
        <div className="right flex-1 flex items-center justify-center">
          <fieldset
            data-aos="zoom-in"
            className=" w-[80%] p-5 py-12 sm:py-8 sm:w-full sm:p-2"
          > <br />
      
            <div className=" relative">
              {/* design */}
              <div className="design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px] ">
                <div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
                <div className="line w-[230px] bg-gray-300 h-[2px] sm:w-[250px]"></div>
                <div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
              </div>
              {/* design */}
              <div className=" flex flex-col gap-1 border-2 border-yellow-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">

              <p className=" text-[.9rem] text-justify text-gray-500">
              
               • Improved test case design and execution processes, resulting in a <span className="font-bold">26%
                increase in the passing rate</span> from 69% to 95.4%.<br />
                <br />
                </p>
                
                <span className=" text-[.9rem] font-bold text-yellow-500 sm:text-base">
                  HIGHSPOT
                </span>
                <p className=" text-[.9rem] text-justify text-gray-500">
                • Successfully <span className="font-bold">automated 400+ test cases</span> within a span of two and half
                months, showcasing strong coding skills and commitment to
                maintainable and efficient code. <br />
                • Leveraged TestCafe and Node.js to build robust automated testing
                infrastructure, ensuring product reliability and stability. <br />
                • Collaborated effectively within a team environment, utilizing Git for
                version control and ensuring smooth code integration and collaboration. <br />
                • Demonstrated proficiency in developing clean, maintainable, and
                efficient code to meet project objectives and deliver high-quality results.<br /><br /> 
            
                </p>
              </div>
            </div>  
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default Resume;
