import MultiItemSlider from "@/components/slider/MultiItemSlider"
import SignatureCourses from "@/pages/Home/components/SignatureCourse"
import GetStarted from "@/pages/Home/components/GetStarted";
import Discover from "@/pages/Home/components/Discover";
import PopularCourses from "@/pages/Home/components/PopularCourses";
import MultiItemSliderNoCount from "@/components/slider/MultiItemSliderNoCount";
import Mentors from "@/pages/Home/components/Mentors";
const Home = () => {
    return (
        <div className="w-full lg:w-[90%] mx-auto">
            <GetStarted></GetStarted>
            <Discover />
            <div className="bg-base-100 p-4 mt-12">
                <div className='hidden lg:flex flex-col px-10 lg:px-0  items-center justify-center gap-6 my-8'>
                    <p className='text-xs font-bold px-2 py-1 justify-self-center self-center bg-info/10 rounded-full text-custom-blue '>WHY CHOOSE US</p>
                    <p className='text-2xl lg:text-4xl font-bold text-center lg:text-start'>Explore Our Signature Courses</p>
                </div>
                <MultiItemSlider>
                    <SignatureCourses></SignatureCourses>
                </MultiItemSlider>
            </div>
            <PopularCourses></PopularCourses>
            <div className="bg-base-100 p-4 mt-12">
                <div className='hidden lg:flex flex-col px-10 lg:px-0  items-center justify-center gap-6 my-8'>
                    <p className='text-xs font-bold px-2 py-1 justify-self-center self-center bg-info/10 rounded-full text-custom-blue '>OUR EXPERT MENTOR</p>
                    <p className='text-2xl lg:text-4xl font-bold text-center lg:text-start'>Learn from the Best to Become the Best</p>
                </div>
                <MultiItemSliderNoCount>
                    <Mentors></Mentors>
                </MultiItemSliderNoCount>
            </div>
        </div>
    );
}

export default Home;
