import React from "react";

// Importing React Icons
import { HiUsers } from "react-icons/hi";
import { ImTree } from "react-icons/im";

const CourseCard = ({cardData, currentCard, setCurrentCard}) => {
  return (
    <div
      className={`max-w-[360px] w-[360px] lg:w-[30%] ${
        currentCard === cardData?.heading
          ? "bg-[#fff] shadow-[12px_12px_0_0] shadow-[#FFD60A]"
          : "bg-[#161D29]"
      }  text-[#DBDDEA] h-[300px] box-border cursor-pointer hover:shadow-[12px_12px_0_0] hover:shadow-[#FFD60A] hover:border-[#FFD166] hover:scale-[1.07] transition-all ease-in-out`}
      onClick={() => setCurrentCard(cardData?.heading)}
    >
      <div className="border-b-[2px] border-[#6E727F] border-dashed h-[80%] p-6 flex flex-col gap-3">
        <div
          className={` ${
            currentCard === cardData?.heading && "text-[#161D29]"
          } font-semibold text-[20px] hover:font-extrabold`}
        >
          {cardData?.heading}
        </div>

        <div
          className={`text-[#6E727F]  transition-all ease-linear ${
            currentCard === cardData?.heading
              ? "hover:text-[#000]"
              : "hover:text-[#fff]"
          }`}
        >
          {cardData?.description}
        </div>
      </div>

      <div
        className={`flex justify-between  transition-all ease-linear ${
          currentCard === cardData?.heading
            ? "text-[#0F7A9D] hover:text-[#0A5A72]"
            : "text-[#838894] hover:text-[#fff]"
        } px-6 py-3 font-medium`}
      >
        {/* Level */}
        <div className="flex items-center gap-2 text-[16px]">
          <HiUsers />
          <p>{cardData?.level}</p>
        </div>

        {/* Flow Chart */}
        <div className="flex items-center gap-2 text-[16px]">
          <ImTree />
          <p>{cardData?.lessonNumber} Lessons</p>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;