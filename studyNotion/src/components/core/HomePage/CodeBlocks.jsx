import React, {useState} from "react";
import CTAButton from "./Button";
import { TypeAnimation } from "react-type-animation";
import { FaArrowRight } from "react-icons/fa";


const CodeBlocks = ({
  position,
  heading,
  subheading,
  ctabtn1,
  ctabtn2,
  codeblock,
  backgroundGradient,
  codeColor,
}) => {

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2; // Center relative
    const y = e.clientY - rect.top - rect.height / 2;
    setMousePosition({ x, y });
  };


  return (
    
    <div className={`flex ${position} my-20 justify-between flex lg:gap-10 gap-10`}>
      {/* <Tilt style={{height: 100, width: 700 }}>   */}

      {/* Section 1  */}
      <div className="w-[100%] lg:w-[50%] flex flex-col gap-8">
        {heading}

        {/* Sub Heading */}
        <div className="text-[#838894] text-base font-bold w-[85%] -mt-3">
          {subheading}
        </div>

        {/* Button Group */}
        <div className="flex gap-7 mt-7">
          <CTAButton active={ctabtn1.active} linkto={ctabtn1.link}>
            <div className="flex items-center gap-2">
              {ctabtn1.btnText}
              <FaArrowRight />
            </div>
          </CTAButton>
          <CTAButton active={ctabtn2.active} linkto={ctabtn2.link}>
            {ctabtn2.btnText}
          </CTAButton>
        </div>
      </div>
      {/* </Tilt> */}

      {/* Section 2 */}
      {/*  <Tilt> */}
      <div className="code-block z-[100]">

      <div className="h-fit code-border flex flex-row py-3 text-[10px] sm:text-sm leading-[18px] sm:leading-6 relative w-[100%] lg:w-[470px]"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setMousePosition({ x: 0, y: 0 })}>
        {React.cloneElement(backgroundGradient, {
            style: {
              ...backgroundGradient.props.style,
              transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
            },
          })}
        {/* {backgroundGradient} */}
        {/* Indexing */}
        <div className="text-center flex flex-col w-[10%] select-none text-[#6E727F] font-primary font-bold ">
          <p>1</p>
          <p>2</p>
          <p>3</p>
          <p>4</p>
          <p>5</p>
          <p>6</p>
          <p>7</p>
          <p>8</p>
          <p>9</p>
          <p>10</p>
          <p>11</p>
        </div>

        {/* Codes */}
        <div
          className={`w-[90%] flex flex-col gap-2 font-bold font-mono ${codeColor} pr-1`}
        >
          <TypeAnimation
            sequence={[codeblock, 1000, ""]}
            cursor={true}
            repeat={Infinity}
            style={{
              whiteSpace: "pre-line",
              display: "block",
            }}
            omitDeletionAnimation={true}
          />
        </div>
      </div>

      </div>
      {/* </Tilt> */}

      
      
    </div>
  );
};

export default CodeBlocks;