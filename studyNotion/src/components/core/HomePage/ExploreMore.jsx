import React, { useState } from 'react'
import {HomePageExplore} from '../../../data/homepage-explore'
import HighlightText from './HighlightText';
import CourseCard from './CourseCard';

const tabsName = [
    "Free",
    "New to coding",
    "Most popular",
    "Skills paths",
    "Career paths",
];

const ExploreMore = () => {

    const [currentTab, setCurrentTab] = useState(tabsName[0]);
    const [courses, setCourses] = useState(HomePageExplore[0].courses);
    const [currentCard, setCurrentCard] = useState(HomePageExplore[0].courses[0].heading);

    const setMyCards = (value) => {
        setCurrentTab(value);
        const result = HomePageExplore.filter((course) => course.tag === value);
        setCourses(result[0].courses);
        setCurrentCard(result[0].courses[0].heading);
    }


  return (
    <div>

        <div className='text-4xl font-semibold text-center '>
            Unlock The 
            <HighlightText text = {"Power of Code"} />
        </div>

        <p className='text-center text-[#838894] text-lg font-semibold mt-3'>
            Learn to Build Anything You Can Imagine
        </p>

        <div className='flex flex-row rounded-full gap-5 p-1 bg-[#161D29] mb-5 border-[#AFB2BF] mt-5 drop-shadow-[0_1.5px_rgba(255,255,255,0.25)]'>
            {
                tabsName.map( (element, index) => {
                    return (
                        <div
                        className={`text-[16px] flex flex-row items-center gap-2
                        ${currentTab === element ? "bg-[#000814] text-[#F1F2FF] font-medium" 
                        : "text-[#999DAA]"} rounded-full transition-all duration-200 cursor-pointer
                        hover:bg-[#000814] hover:text-[#F1F2FF] px-7 py-2`}
                        key ={index}
                        onClick={() => setMyCards(element)}>
                            {element}
                        </div>
                    )
                })
            }
        </div>

        <div className='h-[200px]'></div>

        {/* Course Card Group */}

        <div className='lg:absolute gap-10 justify-center lg:gap-0 flex flex-row lg:justify-between flex-wrap w-full lg:bottom-[0] lg:left-[50%] lg:translate-x-[-50%] lg:translate-y-[45%] text-[#000] lg:mb-0 mb-7 lg:px-0 px-3'>
            {
                courses.map( (element, index) => {
                    return (
                        <CourseCard 
                        key = {index}
                        cardData = {element}
                        currentCard = {currentCard}
                        setCurrentCard = {setCurrentCard}/>
                    )
                } )
            }
        </div>

    </div>
  )
}

export default ExploreMore