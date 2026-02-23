import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React, { use, useEffect } from 'react'
import { FaArrowRight, FaDownload, FaFilePdf } from 'react-icons/fa'

const Certificate = () => {

useEffect(()=>{
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(".heading",{
        opacity:0.9,
        scale:0.9,
        duration:1.3,
        ease:"power2.out",
        scrollTrigger:{
            trigger:"#cert",
            start:"top 80%",
            once:true,
            toggleActions:"restart none none none"
        }
    })
},[])

    return (
        <section id="cert" className="relative w-full bg-[#F3F4F4]  flex justify-center">
            <div className='w-full h-full flex flex-col justify-center items-center pb-8  text-black'>
                <h1 className='heading text-8xl font-extrabold text-center mt-10'>CERTIFICATES</h1>
                <p className='text-[15px] font-serif text-center mb-10'>Learning. Certified. Applied</p>

                <div className='w-full flex justify-around items-center gap-1.2'>

                    {/* 1st card */}
                    <div className='h-105 w-[30%] shadow-2xl rounded-2xl bg-[#5F9598] border-gray-50 flex flex-col justify-center gap-4 p-4 overflow-hidden'>
                        <h3 className='text-xl font-bold mt-3'>Full Stack Web Development 1.0</h3>
                        <p className='text-lg font-medium'>Physics Wallah</p>
                        <p className='text-lg'>Sep 2024</p>
                        <div className="mt-3 bg-[#F3F4F4] rounded-xl p-4 flex flex-col items-center text-[#061E29]"> <FaFilePdf className="text-2xl mb-3" /> <p className="text-xl font-medium">PDF Document</p> <div className="w-full h-3 bg-white/30 rounded mt-3" /> </div>
                        <button
                            onClick={() =>
                                window.open("../web-development.jpeg", "_blank")
                            }
                            className="flex justify-center items-center text-xl text-black"
                        >

                            View Full Certificate <FaArrowRight />
                        </button>
                        <a
                            href="../web-development.jpeg"
                            download
                            className="flex justify-center items-center ml-4.8 gap-2 text-xl text-gray-600"
                        >
                            <FaDownload /> Download PDF
                        </a>


                    </div>
                    {/* 2nd card */}
                    <div className='h-105 w-[30%] shadow-2xl rounded-2xl bg-[#5F9598] border-gray-50 flex flex-col justify-center gap-4 p-4 overflow-hidden'>
                        <h3 className='text-xl font-bold mt-3'>Geospatial Analysis using Google Earth Engine</h3>
                        <p className='text-lg font-medium'>Indian Space Research Organisation</p>
                        <p className='text-lg'>Sep 2024</p>
                        <div className="mt-3 bg-[#F3F4F4] rounded-xl p-4 flex flex-col items-center text-[#061E29]"> <FaFilePdf className="text-2xl mb-3" /> <p className="text-xl font-medium">PDF Document</p> <div className="w-full h-3 bg-white/30 rounded mt-3" /> </div>
                        <button
                            onClick={() =>
                                window.open("../isro.jpeg", "_blank")
                            }
                            className="flex justify-center items-center text-xl text-black"
                        >

                            View Full Certificate <FaArrowRight />
                        </button>
                        <a
                            href="../isro.jpeg"
                            download
                            className="flex justify-center items-center ml-4.8 gap-2 text-xl text-gray-600"
                        >
                            <FaDownload /> Download PDF
                        </a>


                    </div>
                    {/* 3rd card */}
                    <div className='h-105 w-[30%] shadow-2xl rounded-2xl bg-[#5F9598] border-gray-50 flex flex-col justify-center gap-4 p-4 overflow-hidden'>
                        <h3 className='text-xl font-bold mt-3'>Google Solution Challenge Participation</h3>
                        <p className='text-lg font-medium'>Google Developer Group</p>
                        <p className='text-lg'>Sep 2025</p>
                        <div className="mt-3 bg-[#F3F4F4] rounded-xl p-4 flex flex-col items-center text-[#061E29]"> <FaFilePdf className="text-2xl mb-3" /> <p className="text-xl font-medium">PDF Document</p> <div className="w-full h-3 bg-white/30 rounded mt-3" /> </div>
                        <button
                            onClick={() =>
                                window.open("../solution-challenge.jpeg", "_blank")
                            }
                            className="flex justify-center items-center text-xl text-black"
                        >

                            View Full Certificate <FaArrowRight />
                        </button>
                        <a
                            href="../solution-challenge.jpeg"
                            download
                            className="flex justify-center items-center ml-4.8 gap-2 text-xl text-gray-600"
                        >
                            <FaDownload /> Download PDF
                        </a>


                    </div>



                </div>


            </div>

        </section>
    )
}

export default Certificate
