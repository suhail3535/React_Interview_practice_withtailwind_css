
import React from 'react';
import Carousel from "./Carousel";
import "./Carousel.css"


function CaroselMain () {
    const items = [
        <div className='project_card'>
            <div className='card_img'>
                <img src="https://spn-sta.spinny.com/blog/20221004191046/Hyundai-Venue-2022.jpg?compress=true&quality=80&w=1200&dpr=2.6" alt="" />
            </div>
            <div className='details'>
                Lorem, ipsum dolor sit amet
                consectetur adipisicing elit.
                Ipsa deserunt minus nihil est
                odit provident alias sapiente unde,
                itaque delectus.
            </div>


        </div>,
        <div className='project_card'>
            <div className='card_img'>
                <img src="https://spn-sta.spinny.com/blog/20221004191046/Hyundai-Venue-2022.jpg?compress=true&quality=80&w=1200&dpr=2.6" alt="" />
            </div>
            <div className='details'>
                Lorem, ipsum dolor sit amet
                consectetur adipisicing elit.
                Ipsa deserunt minus nihil est
                odit provident alias sapiente unde,
                itaque delectus.
            </div>


        </div>,
        <div className='project_card'>
            <div className='card_img'>
                <img src="https://spn-sta.spinny.com/blog/20221004191046/Hyundai-Venue-2022.jpg?compress=true&quality=80&w=1200&dpr=2.6" alt="" />
            </div>
            <div className='details'>
                Lorem, ipsum dolor sit amet
                consectetur adipisicing elit.
                Ipsa deserunt minus nihil est
                odit provident alias sapiente unde,
                itaque delectus.
            </div>


        </div>, <div className='project_card'>
            <div className='card_img'>
                <img src="https://spn-sta.spinny.com/blog/20221004191046/Hyundai-Venue-2022.jpg?compress=true&quality=80&w=1200&dpr=2.6" alt="" />
            </div>
            <div className='details'>
                Lorem, ipsum dolor sit amet
                consectetur adipisicing elit.
                Ipsa deserunt minus nihil est
                odit provident alias sapiente unde,
                itaque delectus.
            </div>


        </div>,
        <div className='project_card'>
            <div className='card_img'>
                <img src="https://spn-sta.spinny.com/blog/20221004191046/Hyundai-Venue-2022.jpg?compress=true&quality=80&w=1200&dpr=2.6" alt="" />
            </div>
            <div className='details'>
                Lorem, ipsum dolor sit amet
                consectetur adipisicing elit.
                Ipsa deserunt minus nihil est
                odit provident alias sapiente unde,
                itaque delectus.
            </div>


        </div>, <div className='project_card'>
            <div className='card_img'>
                <img src="https://spn-sta.spinny.com/blog/20221004191046/Hyundai-Venue-2022.jpg?compress=true&quality=80&w=1200&dpr=2.6" alt="" />
            </div>
            <div className='details'>
                Lorem, ipsum dolor sit amet
                consectetur adipisicing elit.
                Ipsa deserunt minus nihil est
                odit provident alias sapiente unde,
                itaque delectus.
            </div>


        </div>,
        <div className='project_card'>
            <div className='card_img'>
                <img src="https://spn-sta.spinny.com/blog/20221004191046/Hyundai-Venue-2022.jpg?compress=true&quality=80&w=1200&dpr=2.6" alt="" />
            </div>
            <div className='details'>
                Lorem, ipsum dolor sit amet
                consectetur adipisicing elit.
                Ipsa deserunt minus nihil est
                odit provident alias sapiente unde,
                itaque delectus.
            </div>


        </div>, <div className='project_card'>
            <div className='card_img'>
                <img src="https://spn-sta.spinny.com/blog/20221004191046/Hyundai-Venue-2022.jpg?compress=true&quality=80&w=1200&dpr=2.6" alt="" />
            </div>
            <div className='details'>
                Lorem, ipsum dolor sit amet
                consectetur adipisicing elit.
                Ipsa deserunt minus nihil est
                odit provident alias sapiente unde,
                itaque delectus.
            </div>


        </div>,
        <div className='project_card'>
            <div className='card_img'>
                <img src="https://spn-sta.spinny.com/blog/20221004191046/Hyundai-Venue-2022.jpg?compress=true&quality=80&w=1200&dpr=2.6" alt="" />
            </div>
            <div className='details'>
                Lorem, ipsum dolor sit amet
                consectetur adipisicing elit.
                Ipsa deserunt minus nihil est
                odit provident alias sapiente unde,
                itaque delectus.
            </div>


        </div>, <div className='project_card'>
            <div className='card_img'>
                <img src="https://spn-sta.spinny.com/blog/20221004191046/Hyundai-Venue-2022.jpg?compress=true&quality=80&w=1200&dpr=2.6" alt="" />
            </div>
            <div className='details'>
                Lorem, ipsum dolor sit amet
                consectetur adipisicing elit.
                Ipsa deserunt minus nihil est
                odit provident alias sapiente unde,
                itaque delectus.
            </div>


        </div>,
        <div className='project_card'>
            <div className='card_img'>
                <img src="https://spn-sta.spinny.com/blog/20221004191046/Hyundai-Venue-2022.jpg?compress=true&quality=80&w=1200&dpr=2.6" alt="" />
            </div>
            <div className='details'>
                Lorem, ipsum dolor sit amet
                consectetur adipisicing elit.
                Ipsa deserunt minus nihil est
                odit provident alias sapiente unde,
                itaque delectus.
            </div>


        </div>, <div className='project_card'>
            <div className='card_img'>
                <img src="https://spn-sta.spinny.com/blog/20221004191046/Hyundai-Venue-2022.jpg?compress=true&quality=80&w=1200&dpr=2.6" alt="" />
            </div>
            <div className='details'>
                Lorem, ipsum dolor sit amet
                consectetur adipisicing elit.
                Ipsa deserunt minus nihil est
                odit provident alias sapiente unde,
                itaque delectus.
            </div>


        </div>,
        <div className='project_card'>
            <div className='card_img'>
                <img src="https://spn-sta.spinny.com/blog/20221004191046/Hyundai-Venue-2022.jpg?compress=true&quality=80&w=1200&dpr=2.6" alt="" />
            </div>
            <div className='details'>
                Lorem, ipsum dolor sit amet
                consectetur adipisicing elit.
                Ipsa deserunt minus nihil est
                odit provident alias sapiente unde,
                itaque delectus.
            </div>


        </div>, <div className='project_card'>
            <div className='card_img'>
                <img src="https://spn-sta.spinny.com/blog/20221004191046/Hyundai-Venue-2022.jpg?compress=true&quality=80&w=1200&dpr=2.6" alt="" />
            </div>
            <div className='details'>
                Lorem, ipsum dolor sit amet
                consectetur adipisicing elit.
                Ipsa deserunt minus nihil est
                odit provident alias sapiente unde,
                itaque delectus.
            </div>


        </div>,
        <div className='project_card'>
            <div className='card_img'>
                <img src="https://spn-sta.spinny.com/blog/20221004191046/Hyundai-Venue-2022.jpg?compress=true&quality=80&w=1200&dpr=2.6" alt="" />
            </div>
            <div className='details'>
                Lorem, ipsum dolor sit amet
                consectetur adipisicing elit.
                Ipsa deserunt minus nihil est
                odit provident alias sapiente unde,
                itaque delectus.
            </div>


        </div>
    ];

    return (
        <div className="main_slider_app">
            <h1>React Carousel with Multiple Cards Example</h1>
            <Carousel items={items} />
        </div>
    );
}

export default CaroselMain;
