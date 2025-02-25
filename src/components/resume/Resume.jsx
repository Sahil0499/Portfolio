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
                  Lead Engineer
                </h1>
                <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                  HCLTech
                </span>
                <span className=" text-[.9rem] font-semibold text-yellow-500 sm:text-base">
                  July 2024 - Present
                </span>
                <span className=" text-[.9rem] font-bold text-yellow-500 sm:text-base">
                  MICROSOFT
                </span>
                <p className=" text-[.9rem] text-justify break-words text-gray-500">
                • Analyzed <span className="font-bold">large datasets</span> to identify patterns and deliver <span className="font-bold">actionable insights</span>, driving process improvements and supporting strategic <span className="font-bold">decision-making.</span> <br />
                • <span className="font-bold">Optimized SQL queries</span> for Microsoft’s internal reporting by applying <span className="font-bold">indexing and query tuning techniques,</span> improving data retrieval speed by <span className="font-bold">20%</span> and enhancing <span className="font-bold">dashboard performance.</span> <br />
                • Maintained and optimized <span className="font-bold">450+</span> test cases for <span className="font-bold">Outlook (Dynamics 365)</span> across multiple browsers, reducing compatibility issues and increasing the pass rate from <span className="font-bold">69% to 95.4%.</span> Provided <span className="font-bold">development support</span> to streamline issue resolution. <br />
               
                <br /> 
                </p>

                <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                  Associate
                </h1>
                <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                  HCLTech
                </span>
                <span className=" text-[.9rem] font-semibold text-yellow-500 sm:text-base">
                  May 2022 - June 2024
                </span>
                <span className=" text-[.9rem] font-bold text-yellow-500 sm:text-base">
                  MICROSOFT
                </span>
                <p className=" text-[.9rem] text-justify break-words text-gray-500">
                • <span className="font-bold">Designed and developed a Chrome extension tool</span> to automate incident creation on
                 <span className="font-bold">Microsoft’s internal platform</span>, reducing manual effort by <span className="font-bold">50%</span> 
                 and streamlining operational processes. <br />
                
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
               • Processed and transformed client data using <span className="font-bold">DAX</span> and <span className="font-bold">Excel</span>, 
                ensuring <span className="font-bold">data completeness, accuracy,</span> and <span className="font-bold">consistency</span> across reports,
                 resulting in reliable <span className="font-bold">performance tracking</span> and increased stakeholder confidence. <br />
                
               • Built <span className="font-bold">ETL pipelines</span> using <span className="font-bold">Python and SQL</span> to clean and transform multi-source datasets, reducing processing time by <span className="font-bold">25%.</span> Conducted <span className="font-bold">EDA</span> to 
                identify <span className="font-bold">trends</span>, improving reporting accuracy by <span className="font-bold">15%</span>. <br />
               • Integrated a screenshot feature into the extension to enhance user experience. <br />
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
