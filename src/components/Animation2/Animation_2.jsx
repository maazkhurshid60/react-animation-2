//Main Imports
import React, { useEffect } from 'react'

//Anime.JS Import
import  anime from "animejs/lib/anime.es";

//Style Imports
import './animation_2.style.scss';

//Icon Import
import { IoCheckmark } from "react-icons/io5";

//Adding this line for git activity

export default function Animation2Component() {

    //Function to animate on scroll
    function animateOnScroll(element, speed=100, offset=0) {
        const scrollPercent = window.scrollY - element.offsetTop;
        return (scrollPercent + offset) / speed;
    }

    useEffect(() => {

        const firstDiv = window.document.querySelector('.first-div');

        //Fade-Out Animation For the Red Line
        const fadeOutAnimation = anime({
            targets: ['.red-line-parent', '.desktop-animation', '.mobile-animation'],
            opacity: [0, 1],
            autoplay: false,
            easing: 'easeOutSine'
        });

        // Desktop Animations Start

        // Created a single function for creating anime object instead of declaring for each cont separately. // Optimized form
        function setUpDesktopSlideRightAnimation(className) {
            return anime({
                targets: [`.${className}`],
                translateX: [100, 0],
                opacity: [0, 1],
                autoplay: false,
                easing: 'linear'
            });
        }

        // Created a single function for creating anime object instead of declaring for each cont separately. // Optimized forms
        function setUpDesktopSlideLeftAnimation(className) {
            return anime({
                targets: [`.${className}`],
                translateX: [-100, 0],
                opacity: [0, 1],
                autoplay: false,
                easing: 'linear'
            });
        }

        //Storing Dom Elements For Desktop
        const redLineSec2 = window.document.querySelector('.desktop-animation');

        //Adding Scroll Event Listener on Window for handling animations on Desktop
        window.addEventListener('scroll', () => {

            //First we animate the red line animation
            fadeOutAnimation.seek((animateOnScroll(firstDiv, 100, -300)) * fadeOutAnimation.duration);

            //Second we animate the Desktop container 1 and 2
            const dkFirstCont = setUpDesktopSlideRightAnimation('desk-first-cont');
            dkFirstCont.seek((animateOnScroll(redLineSec2, 200, 300)) * dkFirstCont.duration);

            const dkSecondCont = setUpDesktopSlideLeftAnimation('desk-second-cont');
            dkSecondCont.seek((animateOnScroll(redLineSec2, 200, 150)) * dkSecondCont.duration);

            //Third we animate the Desktop container 3 and 4
            const dkThirdCont = setUpDesktopSlideRightAnimation('desk-third-cont');
            dkThirdCont.seek((animateOnScroll(redLineSec2, 200, 0)) * dkThirdCont.duration);

            const dkFourthCont = setUpDesktopSlideLeftAnimation('desk-fourth-cont');
            dkFourthCont.seek((animateOnScroll(redLineSec2, 200, -150)) * dkFourthCont.duration);

            //Lastly we animate the Desktop container 5
            const dkFifthCont = setUpDesktopSlideRightAnimation('desk-fifth-cont');
            dkFifthCont.seek((animateOnScroll(redLineSec2, 200, -300)) * dkFifthCont.duration);

        });

        // Desktop Animations End

        // Mobile Animations Start

        // Created a single for creating anime object instead of declaring for each cont separately. // Optimized form
        function setUpMobileBottomUpAnimation(className) {
            return anime({
                targets: [`.${className}`],
                translateY: [100, 0],
                opacity: [0, 1],
                autoplay: false,
                easing: 'linear'
            });
        }

        //Storing Dom Elements For Mobile
        const redLineMobile = window.document.querySelector('.mobile-animation');

        //Adding Scroll Event Listener on Window for handling animations on Mobile
        window.addEventListener('scroll', () => {

            //First we animate the mobile cont 1
            const mbFirstCont = setUpMobileBottomUpAnimation('mobile-first-cont');
            mbFirstCont.seek((animateOnScroll(redLineMobile, 200, 300)) * mbFirstCont.duration);

            //Second we animate the mobile cont 2
            const mbSecondCont = setUpMobileBottomUpAnimation('mobile-second-cont');
            mbSecondCont.seek((animateOnScroll(redLineMobile, 200, 150)) * mbSecondCont.duration);

            //Third we animate the mobile cont 3
            const mbThirdCont = setUpMobileBottomUpAnimation('mobile-third-cont');
            mbThirdCont.seek((animateOnScroll(redLineMobile, 200, -150)) * mbThirdCont.duration);

            //Fourth we animate the mobile cont 4
            const mbFourthCont = setUpMobileBottomUpAnimation('mobile-fourth-cont');
            mbFourthCont.seek((animateOnScroll(redLineMobile, 200, -350)) * mbFourthCont.duration);

            //Fifth we animate the mobile cont 5
            const mbFifthCont = setUpMobileBottomUpAnimation('mobile-fifth-cont');
            mbFifthCont.seek((animateOnScroll(redLineMobile, 200, -600)) * mbFifthCont.duration);

        });

        // Mobile Animations End

    }, []);


    return (
        <>
            <div className='first-div'></div>
            <div className='parent'>
                {/* Desktop Animation */}
                <div className='red-line-parent'>
                    <div className='red-line'/>
                </div>
                <div className='desktop-animation'>
                    {/* First Block */}
                    <div className="container right desk-first-cont">
                        <div className="content">
                            <h2>Research</h2>
                            <div className='li'>
                                <IoCheckmark className='li-i' size={24}/>
                                <p className='li-h'>Interview stakeholders</p>
                            </div>
                            <div className='li'>
                                <IoCheckmark className='li-i' size={24}/>
                                <p className='li-h'>Analysis of Competitor's apps</p>
                            </div>
                            <div className='li'>
                                <IoCheckmark className='li-i' size={24}/>
                                <p className='li-h'>User Research</p>
                            </div>
                        </div>
                    </div>
                    {/* Second Block */}
                    <div className="container left desk-second-cont">
                        <div className="content">
                        <h2>Analysis</h2>
                            <div className='li'>
                                <IoCheckmark className='li-i' size={24}/>
                                <p className='li-h'>Develop Personas</p>
                            </div>
                            <div className='li'>
                                <IoCheckmark className='li-i' size={24}/>
                                <p className='li-h'>Outline Cross-Platform Functionality</p>
                            </div>
                            <div className='li'>
                                <IoCheckmark className='li-i' size={24}/>
                                <p className='li-h'>Develop User-Centric Experience Maps and Flowcharts</p>
                            </div>
                        </div>
                    </div>
                    {/* Third Block */}
                    <div className="container right desk-third-cont">
                        <div className="content">
                        <h2>Design</h2>
                            <div className='li'>
                                <IoCheckmark className='li-i' size={24}/>
                                <p className='li-h'>Apply User-Centric Design Principles</p>
                            </div>
                            <div className='li'>
                                <IoCheckmark className='li-i' size={24}/>
                                <p className='li-h'>Create Wireframes & Interactive Prototypes</p>
                            </div>
                            <div className='li'>
                                <IoCheckmark className='li-i' size={24}/>
                                <p className='li-h'>Prepare Visual Design & Animate Interface</p>
                            </div>
                        </div>
                    </div>
                    {/* Fourth Block */}
                    <div className="container left desk-fourth-cont">
                        <div className="content">
                        <h2>Implementation</h2>
                            <div className='li'>
                                <IoCheckmark className='li-i' size={24}/>
                                <p className='li-h'>Supervise the Designs</p>
                            </div>
                            <div className='li'>
                                <IoCheckmark className='li-i' size={24}/>
                                <p className='li-h'>Create Design System</p>
                            </div>
                            <div className='li'>
                                <IoCheckmark className='li-i' size={24}/>
                                <p className='li-h'>Establish Design Standards</p>
                            </div>
                        </div>
                    </div>
                    {/* Fifth Block */}
                    <div className="container right desk-fifth-cont">
                        <div className="content">
                        <h2>Post-release support</h2>
                            <div className='li'>
                                <IoCheckmark className='li-i' size={24}/>
                                <p className='li-h'>Analyze User Experience</p>
                            </div>
                            <div className='li'>
                                <IoCheckmark className='li-i' size={24}/>
                                <p className='li-h'>Design Optimization</p>
                            </div>
                            <div className='li'>
                                <IoCheckmark className='li-i' size={24}/>
                                <p className='li-h'>Continous Improvement Feedback Iteration</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile Animation */}
                <div className='mobile-animation'>
                    {/* First Block */}
                    <div className='cirlce-parent'>
                        <div className='mb-red-circle' />
                    </div>
                    <div className="container mobile-first-cont">
                        <div className="content">
                        <h2>Research</h2>
                            <div className='li'>
                                <IoCheckmark className='li-i' size={24}/>
                                <p className='li-h'>Interview Stakeholder</p>
                            </div>
                            <div className='li'>
                                <IoCheckmark className='li-i' size={24}/>
                                <p className='li-h'>Analysis of Competitor's apps</p>
                            </div>
                            <div className='li'>
                                <IoCheckmark className='li-i' size={24}/>
                                <p className='li-h'>User Research</p>
                            </div>
                        </div>
                    </div>
                    {/* Second Block */}
                    <div className='cirlce-parent'>
                        <div className='mb-red-circle' />
                    </div>
                    <div className="container mobile-second-cont">
                        <div className="content">
                        <h2>Analysis</h2>
                            <div className='li'>
                                <IoCheckmark className='li-i' size={24}/>
                                <p className='li-h'>Develop Persona</p>
                            </div>
                            <div className='li'>
                                <IoCheckmark className='li-i' size={24}/>
                                <p className='li-h'>Outline Cross-Platform Functionality</p>
                            </div>
                            <div className='li'>
                                <IoCheckmark className='li-i' size={24}/>
                                <p className='li-h'>Develop User-Centric Experience Maps and Flowcharts</p>
                            </div>
                        </div>
                    </div>
                    {/* Third Block */}
                    <div className='cirlce-parent'>
                        <div className='mb-red-circle' />
                    </div>
                    <div className="container mobile-third-cont">
                        <div className="content">
                        <h2>Design</h2>
                            <div className='li'>
                                <IoCheckmark className='li-i' size={24}/>
                                <p className='li-h'>Apply User-Centric Design Principles</p>
                            </div>
                            <div className='li'>
                                <IoCheckmark className='li-i' size={24}/>
                                <p className='li-h'>Create Wireframes & Interactive Prototypes</p>
                            </div>
                            <div className='li'>
                                <IoCheckmark className='li-i' size={24}/>
                                <p className='li-h'>Prepare Visual Design & Animate Interface</p>
                            </div>
                        </div>
                    </div>
                    {/* Fourth Block */}
                    <div className='cirlce-parent'>
                        <div className='mb-red-circle' />
                    </div>
                    <div className="container mobile-fourth-cont">
                        <div className="content">
                        <h2>Implementation</h2>
                            <div className='li'>
                                <IoCheckmark className='li-i' size={24}/>
                                <p className='li-h'>Supervise the Design</p>
                            </div>
                            <div className='li'>
                                <IoCheckmark className='li-i' size={24}/>
                                <p className='li-h'>Create Design System</p>
                            </div>
                            <div className='li'>
                                <IoCheckmark className='li-i' size={24}/>
                                <p className='li-h'>Establish Design Standards</p>
                            </div>
                        </div>
                    </div>
                    {/* Fifth Block */}
                    <div className='cirlce-parent'>
                        <div className='mb-red-circle' />
                    </div>
                    <div className="container mobile-fifth-cont">
                        <div className="content">
                        <h2>Post-release support</h2>
                            <div className='li'>
                                <IoCheckmark className='li-i' size={24}/>
                                <p className='li-h'>Analyze User Experience</p>
                            </div>
                            <div className='li'>
                                <IoCheckmark className='li-i' size={24}/>
                                <p className='li-h'>Design Optimization</p>
                            </div>
                            <div className='li'>
                                <IoCheckmark className='li-i' size={24}/>
                                <p className='li-h'>Continous Imrpovement Feedback Iteration</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='second-div'></div>
        </>
    );
}
