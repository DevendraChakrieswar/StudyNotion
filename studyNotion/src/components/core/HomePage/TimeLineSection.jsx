import React from 'react';

import Logo1 from "../../../assets/TimeLineLogo/Logo1.svg"
import Logo2 from "../../../assets/TimeLineLogo/Logo2.svg"
import Logo3 from "../../../assets/TimeLineLogo/Logo3.svg"
import Logo4 from "../../../assets/TimeLineLogo/Logo4.svg"
import timelineImage from '../../../assets/Images/TimelineImage.png'

const timeLine = [
    {
        Logo: Logo1,
        heading: "Leadership",
        Description: "Fully committed to the success company",
    },
    {
        Logo: Logo2,
        heading: "Responsibility",
        Description: "Students will always be our top priority",
    },
    {
        Logo: Logo3,
        heading: "Flexibility",
        Description: "The ability to switch is an important skills",
    },
    {
        Logo: Logo4,
        heading: "Solve the problem",
        Description: "Code your way to a solution",
    },
]

const TimeLineSection = () => {
  return (
    <div>
        <div className='flex flex-row gap-16 items-center'>

            <div className='w-[45%] flex flex-col gap-5'>
                {
                    timeLine.map( (element, index) => {
                        return (
                            <div className="flex flex-col lg:gap-3" key={index}>
                                <div className="flex gap-6" key={index}>
                                    <div className="w-[52px] h-[52px] bg-white rounded-full flex justify-center items-center shadow-[#00000012] shadow-[0_0_62px_0]">
                                        <img src={element.Logo} alt="" />
                                    </div>
                                    <div>
                                        <h2 className="font-semibold text-[18px]">{element.heading}</h2>
                                        <p className="text-base">{element.Description}</p>
                                    </div>
                                </div>
                                <div className={
                                    `hidden ${ timeLine.length - 1 === index ? "hidden" : "lg:block"
                                    } h-14 border-dotted border-r border-[#AFB2BF] w-[26px]`}
                                ></div>
                            </div>
                        )
                    })
                }

            </div>

            <div className='relative w-fit h-fit shadow-[#118AB2] shadow-[0px_0px_30px_0px]'>

                <img src={timelineImage} alt="Time Line Image" 
                className='shadow-[#fff] shadow-[20px_20px_0px_0px] object-cover h-[400px] lg:h-fit'/>

                <div className='absolute lg:left-[50%] lg:bottom-0 lg:translate-x-[-50%] lg:translate-y-[50%] bg-[#014A32] flex lg:flex-row flex-col text-[#fff] uppercase py-5 gap-4 lg:gap-0 lg:py-10'>
                    <div className='flex flex-row gap-4 items-center border-r border-[#05A77B] px-7 lg:px-14'>
                        <p className='text-3xl font-bold w-[75px]'>10</p>
                        <p className='text-[#05A77B] text-sm w-[75px]'>Years of Experience</p>
                    </div>

                    <div className='flex gap-5 items-center px-7 lg:px-14'>
                        <p className='text-3xl font-bold w-[75px]'>250</p>
                        <p className='text-[#05A77B] text-sm w-[75px]'>Type of Courses</p>
                    </div>

                </div>

            </div>

        </div>
    </div>
  )
}

export default TimeLineSection