import nobel1 from '../../assets/img/nobel1.jpg'
import nobel2 from '../../assets/img/nobel2.jpg'
import thriller1 from '../../assets/img/thriller1.jpeg'
import thriller2 from '../../assets/img/thriller2.jpeg'
import comedy1 from '../../assets/img/comedy1.jpeg'
import comedy2 from '../../assets/img/comedy4.jpeg'
import history1 from '../../assets/img/history1.jpeg'
import history2 from '../../assets/img/history2.jpeg'
import drama1 from '../../assets/img/drama1.jpeg'
import drama2 from '../../assets/img/drama3.jpeg'
import scifi1 from '../../assets/img/scifi1.jpeg'
import scifi2 from '../../assets/img/scifi2.jpeg'
import Marquee from "react-fast-marquee";

const MarqueeSlider = () => {
    return (
        <div>
            <Marquee>
                <div className='mr-7'>
                    <img className='w-[100px] h-[160px] rounded-md shadow-xl' src={nobel1} alt="" />
                </div>
                <div className='mr-7'>
                    <img className='w-[100px] h-[160px] rounded-md shadow-xl' src={nobel2} alt="" />
                </div>
                <div className='mr-7'>
                    <img className='w-[100px] h-[160px] rounded-md shadow-xl' src={thriller1} alt="" />
                </div>
                <div className='mr-7'>
                    <img className='w-[100px] h-[160px] rounded-md shadow-xl' src={thriller2} alt="" />
                </div>
                <div className='mr-7'>
                    <img className='w-[100px] h-[160px] rounded-md shadow-xl' src={comedy1} alt="" />
                </div>
                <div className='mr-7'>
                    <img className='w-[100px] h-[160px] rounded-md shadow-xl' src={comedy2} alt="" />
                </div>
                <div className='mr-7'>
                    <img className='w-[100px] h-[160px] rounded-md shadow-xl' src={history1} alt="" />
                </div>
                <div className='mr-7'>
                    <img className='w-[100px] h-[160px] rounded-md shadow-xl' src={history2} alt="" />
                </div>
                <div className='mr-7'>
                    <img className='w-[100px] h-[160px] rounded-md shadow-xl' src={drama1} alt="" />
                </div>
                <div className='mr-7'>
                    <img className='w-[100px] h-[160px] rounded-md shadow-xl' src={drama2} alt="" />
                </div>
                <div className='mr-7'>
                    <img className='w-[100px] h-[160px] rounded-md shadow-xl' src={scifi1} alt="" />
                </div>
                <div className='mr-7'>
                    <img className='w-[100px] h-[160px] rounded-md shadow-xl' src={scifi2} alt="" />
                </div>
            </Marquee>
        </div>
    );
};

export default MarqueeSlider;