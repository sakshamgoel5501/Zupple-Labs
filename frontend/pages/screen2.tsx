import Image from 'next/image';
import React, { useState } from 'react';

export default function Home() {
    let currentPage = 1;
    let numPages = 208;

    const cubeStyle: React.CSSProperties = {
        position: 'relative',
        width: '120px',
        height: '120px',
        transformStyle: 'preserve-3d',
        transform: 'rotateX(-5deg) rotateY(-80deg) rotateZ(5deg)',
        transition: 'transform 1s',
    };

    const faceStyle: React.CSSProperties = {
        position: 'absolute',
        width: '120px',
        height: '120px',
        fontSize: '12px',
        fontWeight: 'bold',
    };

    const gradientColorFront = 'linear-gradient(45deg, #111, #3e2723)';
    const gradientColorRight = 'linear-gradient(45deg, #8b4513, #b8860b)';
    const gradientColorTop = 'linear-gradient(45deg, #222, #3e2723)';

    const gradientColorFrontBlue = 'linear-gradient(45deg, #00051e, #2a0359)';
    const gradientColorRightBlue = 'linear-gradient(45deg, #4285f4, #8e44ad)';
    const gradientColorTopBlue = 'linear-gradient(45deg, #00051e, #2a0359)';

    return (
        <main className='bg-black py-10'>
            <div className='h-[165px] mt-14'>
                <div className='w-[48.5%] ml-4 float-left'>
                    <div className="scene rotate-[0.5deg] float-left text-white">
                        <div style={cubeStyle} className="cube">
                            <div style={{ ...faceStyle, transform: 'translateZ(60px)', backgroundImage: gradientColorFront, backgroundSize: '100% 100%' }} className="face front"></div>
                            <div style={{ ...faceStyle, transform: 'rotateY(180deg) translateZ(60px)', backgroundColor: '#e74c3c' }} className="face back"></div>
                            <div style={{ ...faceStyle, transform: 'rotateY(-90deg) translateZ(60px)', backgroundColor: '#2ecc71' }} className="face left"></div>
                            <div style={{ ...faceStyle, transform: 'rotateY(90deg) translateZ(60px)', backgroundImage: gradientColorRight, backgroundSize: '100% 100%' }} className="face right">
                                <p className='text-center mt-1'>~9 sat/vB</p>
                                <p className='text-center mt-1'>9-10 sat/vB</p>
                                <p className='text-center text-xl mt-[3px]'>1.21 MB</p>
                                <p className='text-center mt-[3px]'>1,680 transactions</p>
                                <p className='text-center mt-1'>In ~40 minutes</p>
                            </div>
                            <div style={{ ...faceStyle, transform: 'rotateX(90deg) translateZ(60px)', backgroundImage: gradientColorTop, backgroundSize: '100% 100%' }} className="face top"></div>
                            <div style={{ ...faceStyle, transform: 'rotateX(-90deg) translateZ(60px)', backgroundColor: '#ecf0f1' }} className="face bottom"></div>
                        </div>
                    </div>

                    <div className="scene rotate-[0.5deg] ml-7 float-left text-white">
                        <div style={cubeStyle} className="cube">
                            <div style={{ ...faceStyle, transform: 'translateZ(60px)', backgroundImage: gradientColorFront, backgroundSize: '100% 100%' }} className="face front"></div>
                            <div style={{ ...faceStyle, transform: 'rotateY(180deg) translateZ(60px)', backgroundColor: '#e74c3c' }} className="face back"></div>
                            <div style={{ ...faceStyle, transform: 'rotateY(-90deg) translateZ(60px)', backgroundColor: '#2ecc71' }} className="face left"></div>
                            <div style={{ ...faceStyle, transform: 'rotateY(90deg) translateZ(60px)', backgroundImage: gradientColorRight, backgroundSize: '100% 100%' }} className="face right">
                                <p className='text-center mt-1'>~9 sat/vB</p>
                                <p className='text-center mt-1'>9-10 sat/vB</p>
                                <p className='text-center text-xl mt-[3px]'>1.21 MB</p>
                                <p className='text-center mt-[3px]'>1,680 transactions</p>
                                <p className='text-center mt-1'>In ~40 minutes</p>
                            </div>
                            <div style={{ ...faceStyle, transform: 'rotateX(90deg) translateZ(60px)', backgroundImage: gradientColorTop, backgroundSize: '100% 100%' }} className="face top"></div>
                            <div style={{ ...faceStyle, transform: 'rotateX(-90deg) translateZ(60px)', backgroundColor: '#ecf0f1' }} className="face bottom"></div>
                        </div>
                    </div>

                    <div className="scene rotate-[0.5deg] ml-7 float-left text-white">
                        <div style={cubeStyle} className="cube">
                            <div style={{ ...faceStyle, transform: 'translateZ(60px)', backgroundImage: gradientColorFront, backgroundSize: '100% 100%' }} className="face front"></div>
                            <div style={{ ...faceStyle, transform: 'rotateY(180deg) translateZ(60px)', backgroundColor: '#e74c3c' }} className="face back"></div>
                            <div style={{ ...faceStyle, transform: 'rotateY(-90deg) translateZ(60px)', backgroundColor: '#2ecc71' }} className="face left"></div>
                            <div style={{ ...faceStyle, transform: 'rotateY(90deg) translateZ(60px)', backgroundImage: gradientColorRight, backgroundSize: '100% 100%' }} className="face right">
                                <p className='text-center mt-1'>~9 sat/vB</p>
                                <p className='text-center mt-1'>9-10 sat/vB</p>
                                <p className='text-center text-xl mt-[3px]'>1.21 MB</p>
                                <p className='text-center mt-[3px]'>1,680 transactions</p>
                                <p className='text-center mt-1'>In ~40 minutes</p>
                            </div>
                            <div style={{ ...faceStyle, transform: 'rotateX(90deg) translateZ(60px)', backgroundImage: gradientColorTop, backgroundSize: '100% 100%' }} className="face top"></div>
                            <div style={{ ...faceStyle, transform: 'rotateX(-90deg) translateZ(60px)', backgroundColor: '#ecf0f1' }} className="face bottom"></div>
                        </div>
                    </div>

                    <div className="scene rotate-[0.5deg] ml-7 float-left text-white">
                        <div style={cubeStyle} className="cube">
                            <div style={{ ...faceStyle, transform: 'translateZ(60px)', backgroundImage: gradientColorFront, backgroundSize: '100% 100%' }} className="face front"></div>
                            <div style={{ ...faceStyle, transform: 'rotateY(180deg) translateZ(60px)', backgroundColor: '#e74c3c' }} className="face back"></div>
                            <div style={{ ...faceStyle, transform: 'rotateY(-90deg) translateZ(60px)', backgroundColor: '#2ecc71' }} className="face left"></div>
                            <div style={{ ...faceStyle, transform: 'rotateY(90deg) translateZ(60px)', backgroundImage: gradientColorRight, backgroundSize: '100% 100%' }} className="face right">
                                <p className='text-center mt-1'>~9 sat/vB</p>
                                <p className='text-center mt-1'>9-10 sat/vB</p>
                                <p className='text-center text-xl mt-[3px]'>1.21 MB</p>
                                <p className='text-center mt-[3px]'>1,680 transactions</p>
                                <p className='text-center mt-1'>In ~40 minutes</p>
                            </div>
                            <div style={{ ...faceStyle, transform: 'rotateX(90deg) translateZ(60px)', backgroundImage: gradientColorTop, backgroundSize: '100% 100%' }} className="face top"></div>
                            <div style={{ ...faceStyle, transform: 'rotateX(-90deg) translateZ(60px)', backgroundColor: '#ecf0f1' }} className="face bottom"></div>
                        </div>
                    </div>
                </div>

                <div className="bg-white border-l border-dotted h-56 w-1 float-left -mt-[4.5%]"></div>

                <div className='ml-[51.5vw] float-left -mt-[17.5%]'>
                    <div className='float-left w-fit'>
                        <p className='text-blue-300 text-center'>667314</p>
                        <div className="scene rotate-[0.5deg] float-left text-white mt-5">
                            <div style={cubeStyle} className="cube">
                                <div style={{ ...faceStyle, transform: 'translateZ(60px)', backgroundImage: gradientColorFrontBlue, backgroundSize: '100% 100%' }} className="face front"></div>
                                <div style={{ ...faceStyle, transform: 'rotateY(180deg) translateZ(60px)', backgroundColor: '#e74c3c' }} className="face back"></div>
                                <div style={{ ...faceStyle, transform: 'rotateY(-90deg) translateZ(60px)', backgroundColor: '#2ecc71' }} className="face left"></div>
                                <div style={{ ...faceStyle, transform: 'rotateY(90deg) translateZ(60px)', backgroundImage: gradientColorRightBlue, backgroundSize: '100% 100%' }} className="face right">
                                    <p className='text-center mt-1'>~9 sat/vB</p>
                                    <p className='text-center mt-1 text-yellow-600'>9-10 sat/vB</p>
                                    <p className='text-center text-xl mt-[3px]'>1.21 MB</p>
                                    <p className='text-center mt-[3px]'>1,680 transactions</p>
                                    <p className='text-center mt-1'>40 minutes</p>
                                </div>
                                <div style={{ ...faceStyle, transform: 'rotateX(90deg) translateZ(60px)', backgroundImage: gradientColorTopBlue, backgroundSize: '100% 100%' }} className="face top"></div>
                                <div style={{ ...faceStyle, transform: 'rotateX(-90deg) translateZ(60px)', backgroundColor: '#ecf0f1' }} className="face bottom"></div>
                            </div>
                        </div>
                    </div>

                    <div className='float-left w-fit'>
                        <p className='text-blue-300 text-center'>667313</p>    
                        <div className="scene rotate-[0.5deg] ml-7 float-left text-white mt-5">
                            <div style={cubeStyle} className="cube">
                                <div style={{ ...faceStyle, transform: 'translateZ(60px)', backgroundImage: gradientColorFrontBlue, backgroundSize: '100% 100%' }} className="face front"></div>
                                <div style={{ ...faceStyle, transform: 'rotateY(180deg) translateZ(60px)', backgroundColor: '#e74c3c' }} className="face back"></div>
                                <div style={{ ...faceStyle, transform: 'rotateY(-90deg) translateZ(60px)', backgroundColor: '#2ecc71' }} className="face left"></div>
                                <div style={{ ...faceStyle, transform: 'rotateY(90deg) translateZ(60px)', backgroundImage: gradientColorRightBlue, backgroundSize: '100% 100%' }} className="face right">
                                    <p className='text-center mt-1'>~9 sat/vB</p>
                                    <p className='text-center mt-1 text-yellow-600'>9-10 sat/vB</p>
                                    <p className='text-center text-xl mt-[3px]'>1.21 MB</p>
                                    <p className='text-center mt-[3px]'>1,680 transactions</p>
                                    <p className='text-center mt-1'>40 minutes</p>
                                </div>
                                <div style={{ ...faceStyle, transform: 'rotateX(90deg) translateZ(60px)', backgroundImage: gradientColorTopBlue, backgroundSize: '100% 100%' }} className="face top"></div>
                                <div style={{ ...faceStyle, transform: 'rotateX(-90deg) translateZ(60px)', backgroundColor: '#ecf0f1' }} className="face bottom"></div>
                            </div>
                        </div>
                    </div>

                    <div className='float-left w-fit'>
                        <p className='text-blue-300 text-center'>667312</p>
                        <div className="scene rotate-[0.5deg] ml-7 float-left text-white mt-5">
                            <div style={cubeStyle} className="cube">
                                <div style={{ ...faceStyle, transform: 'translateZ(60px)', backgroundImage: gradientColorFrontBlue, backgroundSize: '100% 100%' }} className="face front"></div>
                                <div style={{ ...faceStyle, transform: 'rotateY(180deg) translateZ(60px)', backgroundColor: '#e74c3c' }} className="face back"></div>
                                <div style={{ ...faceStyle, transform: 'rotateY(-90deg) translateZ(60px)', backgroundColor: '#2ecc71' }} className="face left"></div>
                                <div style={{ ...faceStyle, transform: 'rotateY(90deg) translateZ(60px)', backgroundImage: gradientColorRightBlue, backgroundSize: '100% 100%' }} className="face right">
                                    <p className='text-center mt-1'>~9 sat/vB</p>
                                    <p className='text-center mt-1 text-yellow-600'>9-10 sat/vB</p>
                                    <p className='text-center text-xl mt-[3px]'>1.21 MB</p>
                                    <p className='text-center mt-[3px]'>1,680 transactions</p>
                                    <p className='text-center mt-1'>40 minutes</p>
                                </div>
                                <div style={{ ...faceStyle, transform: 'rotateX(90deg) translateZ(60px)', backgroundImage: gradientColorTopBlue, backgroundSize: '100% 100%' }} className="face top"></div>
                                <div style={{ ...faceStyle, transform: 'rotateX(-90deg) translateZ(60px)', backgroundColor: '#ecf0f1' }} className="face bottom"></div>
                            </div>
                        </div>
                    </div>

                    <div className='float-left w-fit'>
                        <p className='text-blue-300 text-center'>667311</p>
                        <div className="scene rotate-[0.5deg] ml-7 float-left text-white mt-5">
                            <div style={cubeStyle} className="cube">
                                <div style={{ ...faceStyle, transform: 'translateZ(60px)', backgroundImage: gradientColorFrontBlue, backgroundSize: '100% 100%' }} className="face front"></div>
                                <div style={{ ...faceStyle, transform: 'rotateY(180deg) translateZ(60px)', backgroundColor: '#e74c3c' }} className="face back"></div>
                                <div style={{ ...faceStyle, transform: 'rotateY(-90deg) translateZ(60px)', backgroundColor: '#2ecc71' }} className="face left"></div>
                                <div style={{ ...faceStyle, transform: 'rotateY(90deg) translateZ(60px)', backgroundImage: gradientColorRightBlue, backgroundSize: '100% 100%' }} className="face right">
                                    <p className='text-center mt-1'>~9 sat/vB</p>
                                    <p className='text-center mt-1 text-yellow-600'>9-10 sat/vB</p>
                                    <p className='text-center text-xl mt-[3px]'>1.21 MB</p>
                                    <p className='text-center mt-[3px]'>1,680 transactions</p>
                                    <p className='text-center mt-1'>40 minutes</p>
                                </div>
                                <div style={{ ...faceStyle, transform: 'rotateX(90deg) translateZ(60px)', backgroundImage: gradientColorTopBlue, backgroundSize: '100% 100%' }} className="face top"></div>
                                <div style={{ ...faceStyle, transform: 'rotateX(-90deg) translateZ(60px)', backgroundColor: '#ecf0f1' }} className="face bottom"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-white w-[85vw] h-[3px] ml-[85px] mt-10"></div>

            <div className='w-[85vw] h-[60px] ml-[7vw] mt-4'>
                <div className='text-white px-3 float-left py-2 font-semibold text-4xl'>Block <p className='text-blue-300 float-right px-2'>667306</p></div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="text-white font-medium w-8 h-8 mr-3 mt-3 hover:cursor-pointer float-right">
                    <path fillRule="evenodd" d="M5.47 5.47a.60.60 0 0 1 1.06 0L12 10.94l5.47-5.47a.60.60 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.60.60 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.60.60 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.60.60 0 0 1 0-1.06Z" clipRule="evenodd" />
                </svg>

            </div>

            <div className='bg-gray-800 w-[85vw] h-[230px] ml-[7vw] mt-2'>
                <div className='bg-gray-900 text-white w-[45%] h-[45px] ml-[3vw] mt-5 float-left'>
                    <p className='float-left px-3 w-[35%] py-2'>Hash</p>
                    <p className='text-blue-300 px-3 py-2 float-left block truncate dir-rtl w-[31%]'>00000059dd3b45356dc4b0e2a55c76031da2a7be9378520127b5b92ca7c83bfa</p>
                </div>

                <div className='bg-gray-900 text-white w-[45%] h-[45px] mr-[3vw] mt-5 float-right'>
                    <p className='float-left px-3 py-2 w-[35%]'>Total fees</p>
                    <div className='px-3 float-left py-2'>0.43 BTC <p className='text-green-600 float-right px-2'>($13,710)</p></div>
                </div>

                <div className='text-white w-[45%] h-[45px] ml-[3vw] float-left'>
                    <p className='float-left px-3 w-[35%] py-2'>Timestamp</p>
                    <p className='px-3 float-left py-2'>2021-01-23 08:47 <i>(1 hour ago)</i></p>
                </div>

                <div className='text-white w-[45%] h-[45px] mr-[3vw] float-right'>
                    <p className='float-left px-3 py-2 w-[35%]'>Subsidy + fees</p>
                    <div className='px-3 float-left py-2'>6.68 BTC <p className='text-green-600 float-right px-2'>($213,136)</p></div>
                </div>

                <div className='bg-gray-900 text-white w-[45%] h-[45px] ml-[3vw] float-left'>
                    <p className='float-left px-3 w-[35%] py-2'>Size</p>
                    <p className='px-3 float-left py-2'>1.39 MB</p>
                </div>

                <div className='bg-gray-900 text-white w-[45%] h-[45px] mr-[3vw] float-right'>
                    <p className='float-left px-3 w-[35%] py-2'>Miner</p>
                    <div className='bg-blue-600 rounded-md w-fit h-7 ml-3 mt-2 mb-1 float-left'>
                        <p className='px-3 text-center font-bold'>SpiderPool</p>
                    </div>
                </div>

                <div className='text-white w-[45%] h-[45px] ml-[3vw] float-left'>
                    <p className='float-left px-3 w-[35%] py-2'>Weight</p>
                    <p className='px-3 float-left py-2'>3.99 MWU</p>
                </div>
            </div>

            <div className='w-[85vw] h-[60px] ml-[7vw] mt-10'>
                <div className='text-white px-3 float-left py-2 font-semibold text-4xl'>2,060 transactions</div>
                <div className="flex justify-center float-right mt-3 bg-slate-900 font-bold">
                    <nav className="flex">
                        {/* Double Previous button */}
                        <a href="#" className={`px-2 py-2 mx-1 order-1 font-extrabold ${currentPage === 1 ? 'pointer-events-none text-gray-600' : 'hover:text-white text-blue-300'}`}>&#171;&#171;</a>

                        {/* Single Previous button */}
                        <a href="#" className={`px-2 py-2 mx-1 order-2 ${currentPage === 1 ? 'pointer-events-none text-gray-600' : 'hover:text-white text-blue-300'}`}>&#171;</a>

                        {/* Numbers 1 through 5 */}
                        {/* Add your logic for styling the current page differently if needed */}
                        {[1, 2, 3, 4, 5].map((pageNumber) => (
                            <a key={pageNumber} href="#" className={`px-3 py-2 mx-1 ${pageNumber === currentPage ? 'pointer-events-none text-white bg-purple-800' : 'hover:text-white text-blue-300'} hover:text-gray-800 order-${pageNumber + 2}`}>{pageNumber}</a>
                        ))}

                        {/* Ellipsis */}
                        <span className="px-4 py-2 mx-1 text-blue-300 order-8">...</span>

                        {/* Number 208 */}
                        <a href="#" className={`px-4 py-2 mx-1 ${currentPage === numPages ? 'pointer-events-none text-white' : 'hover:text-white text-blue-300'} order-9`}>{numPages}</a>

                        {/* Single Next button */}
                        <a href="#" className={`px-2 py-2 mx-1 order-10 ${currentPage === numPages ? 'pointer-events-none text-gray-600' : 'hover:text-white text-blue-300'}`}>&#187;</a>

                        {/* Double Next button */}
                        <a href="#" className={`px-2 py-2 mx-1 order-11 ${currentPage === numPages ? 'pointer-events-none text-gray-600' : 'hover:text-white text-blue-300'}`}>&#187;&#187;</a>
                    </nav>
                </div>
            </div>

            <div className='bg-gray-800 w-[85vw] h-[60px] ml-[7vw] mt-10'>
                <p className='text-blue-300 py-3 px-3 w-[70%] float-left'>18f40359dd3b45356dc4b0e2a55c76031da2a7be9378520127b5b92cab12802d</p>
                <p className='text-white float-right py-3 px-3'>2021-01-23 08:47</p>
            </div>

            <div className='bg-gray-800 w-[85vw] h-[230px] ml-[7vw] mt-3'>
                <div className='w-[55%] float-left'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-8 text-gray-500 font-extrabold ml-3 float-left mt-[18px]">
                        <path fillRule="evenodd" d="M12.97 3.97a.60.60 0 0 1 1.06 0l7.5 7.5a.60.60 0 0 1 0 1.06l-7.5 7.5a.60.60 0 1 1-1.06-1.06l6.22-6.22H3a.60.60 0 0 1 0-1.5h16.19l-6.22-6.22a.60.60 0 0 1 0-1.06Z" clipRule="evenodd" />
                    </svg>
                    <p className='text-white truncate w-[65%] px-2 py-5'>Coinbase (Newly Generated Coins)</p>
                </div>
                <div className='w-[28%] float-left'>
                    <p className='text-blue-300 w-[70%] px-2 py-5'>125m2H43pneuTwTJN5qRyYu</p>
                </div>
                <div className='float-left'>
                    <p className='text-white truncate px-2 py-5 float-left'>6.67966301 BTC</p>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-8 text-green-600 font-extrabold ml-1 float-right mt-4">
                        <path fillRule="evenodd" d="M12.97 3.97a.60.60 0 0 1 1.06 0l7.5 7.5a.60.60 0 0 1 0 1.06l-7.5 7.5a.60.60 0 1 1-1.06-1.06l6.22-6.22H3a.60.60 0 0 1 0-1.5h16.19l-6.22-6.22a.60.60 0 0 1 0-1.06Z" clipRule="evenodd" />
                    </svg>
                </div>

                <div className='w-[55%] float-left -mt-[30px]'>
                    <p className='text-white truncate w-[65%] px-2 py-5 ml-8 text-xs'>%^^& U&&**&^*&^&*^*& ^%#$%#&G</p>
                </div>
                <div className='w-[28%] float-left -mt-[27px]'>
                    <div className='text-white w-[70%] px-2 py-5 float-left'>OP_RETURN <p className='text-xs float-right py-1 mr-4'>%&%! K$^%*</p></div>
                </div>
                <div className='float-left -mt-[27px]'>
                    <p className='text-white truncate px-2 py-5 float-left'>0.00000000 BTC</p>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-8 text-gray-500 font-extrabold ml-1 float-right mt-4">
                        <path fillRule="evenodd" d="M12.97 3.97a.60.60 0 0 1 1.06 0l7.5 7.5a.60.60 0 0 1 0 1.06l-7.5 7.5a.60.60 0 1 1-1.06-1.06l6.22-6.22H3a.60.60 0 0 1 0-1.5h16.19l-6.22-6.22a.60.60 0 0 1 0-1.06Z" clipRule="evenodd" />
                    </svg>
                </div>

                <div className='w-[55%] float-left -mt-[24px]'>
                    <p className='text-white truncate w-[65%] px-2 py-5 ml-8 text-xs'></p>
                </div>
                <div className='w-[28%] float-left -mt-[27px]'>
                    <div className='text-white w-[70%] px-2 py-5 float-left'>OP_RETURN <p className='text-xs float-right py-1 mr-4'>%&%! K$^%*</p></div>
                </div>
                <div className='float-left -mt-[27px]'>
                    <p className='text-white truncate px-2 py-5 float-left'>0.00000000 BTC</p>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-8 text-gray-500 font-extrabold ml-1 float-right mt-4">
                        <path fillRule="evenodd" d="M12.97 3.97a.60.60 0 0 1 1.06 0l7.5 7.5a.60.60 0 0 1 0 1.06l-7.5 7.5a.60.60 0 1 1-1.06-1.06l6.22-6.22H3a.60.60 0 0 1 0-1.5h16.19l-6.22-6.22a.60.60 0 0 1 0-1.06Z" clipRule="evenodd" />
                    </svg>
                </div>

                <div className='w-[55%] float-left -mt-[24px]'>
                    <p className='text-white truncate w-[65%] px-2 py-5 ml-8 text-xs'></p>
                </div>
                <div className='w-[28%] float-left -mt-[27px]'>
                    <div className='text-white w-[70%] px-2 py-5 float-left'>OP_RETURN <p className='text-xs float-right py-1 mr-4'>$^%* 61&**!</p></div>
                </div>
                <div className='float-left -mt-[27px]'>
                    <p className='text-white truncate px-2 py-5 float-left'>0.00000000 BTC</p>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-8 text-gray-500 font-extrabold ml-1 float-right mt-4">
                        <path fillRule="evenodd" d="M12.97 3.97a.60.60 0 0 1 1.06 0l7.5 7.5a.60.60 0 0 1 0 1.06l-7.5 7.5a.60.60 0 1 1-1.06-1.06l6.22-6.22H3a.60.60 0 0 1 0-1.5h16.19l-6.22-6.22a.60.60 0 0 1 0-1.06Z" clipRule="evenodd" />
                    </svg>
                </div>

                <div className='float-left -mt-[12px]'>
                    <div className='text-white px-3 float-left py-2'></div>
                </div>
                <div className='bg-blue-600 rounded-md w-fit h-7 mr-7 -mt-[1px] mb-1 float-right'>
                    <p className='text-white px-3 text-center font-bold'>6.67966301 BTC</p>
                </div>
            </div>

            <div className='bg-gray-800 w-[85vw] h-[60px] ml-[7vw] mt-10'>
                <p className='text-blue-300 py-3 px-3 w-[70%] float-left'>71a40359dd3b45356dc4b0e2a55c76031da2a7be9378520127b5b92cab189410</p>
                <p className='text-white float-right py-3 px-3'>2021-01-23 08:47</p>
            </div>

            <div className='bg-gray-800 w-[85vw] h-[130px] ml-[7vw] mt-3'>
                <div className='w-[35%] float-left'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-8 text-orange-700 font-extrabold ml-3 float-left mt-[18px]">
                        <path fillRule="evenodd" d="M12.97 3.97a.60.60 0 0 1 1.06 0l7.5 7.5a.60.60 0 0 1 0 1.06l-7.5 7.5a.60.60 0 1 1-1.06-1.06l6.22-6.22H3a.60.60 0 0 1 0-1.5h16.19l-6.22-6.22a.60.60 0 0 1 0-1.06Z" clipRule="evenodd" />
                    </svg>
                    <p className='text-blue-300 truncate w-[65%] px-2 py-5'>71a40359dd3b45356dc4b0e2a55c76031da2a7be9378520127b5b92cab189410</p>
                </div>
                <div className='w-[20%] float-left'>
                    <p className='text-white py-5'>0.00078228 BTC</p>
                </div>
                <div className='w-[28%] float-left'>
                    <p className='text-blue-300 truncate w-[70%] px-2 py-5'>71a40359dd3b45356dc4b0e2a55c76031da2a7be9378520127b5b92cab189410</p>
                </div>
                <div className='float-left'>
                    <p className='text-white truncate px-2 py-5 float-left'>0.00009996 BTC</p>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-8 text-green-600 font-extrabold ml-1 float-right mt-4">
                        <path fillRule="evenodd" d="M12.97 3.97a.60.60 0 0 1 1.06 0l7.5 7.5a.60.60 0 0 1 0 1.06l-7.5 7.5a.60.60 0 1 1-1.06-1.06l6.22-6.22H3a.60.60 0 0 1 0-1.5h16.19l-6.22-6.22a.60.60 0 0 1 0-1.06Z" clipRule="evenodd" />
                    </svg>
                </div>

                <div className='float-left'>
                    <div className='text-white px-3 float-left py-2'>623.1 sat/vB-68,232 sat <p className='text-green-600 float-right px-2'>($21.77)</p></div>
                </div>
                <div className='bg-blue-600 rounded-md w-fit h-7 mr-7 mt-2 mb-1 float-right'>
                    <p className='text-white px-3 text-center font-bold'>0.00009996 BTC</p>
                </div>
            </div>

            <div className='bg-gray-800 w-[85vw] h-[60px] ml-[7vw] mt-10'>
                <p className='text-blue-300 py-3 px-3 w-[70%] float-left'>c9940359dd3b45356dc4b0e2a55c76031da2a7be9378520127b5b92cab128d16</p>
                <p className='text-white float-right py-3 px-3'>2021-01-23 08:47</p>
            </div>

            <div className='bg-gray-800 w-[85vw] h-[145px] ml-[7vw] mt-3'>
                <div className='w-[35%] float-left'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-8 text-orange-700 font-extrabold ml-3 float-left mt-[18px]">
                        <path fillRule="evenodd" d="M12.97 3.97a.60.60 0 0 1 1.06 0l7.5 7.5a.60.60 0 0 1 0 1.06l-7.5 7.5a.60.60 0 1 1-1.06-1.06l6.22-6.22H3a.60.60 0 0 1 0-1.5h16.19l-6.22-6.22a.60.60 0 0 1 0-1.06Z" clipRule="evenodd" />
                    </svg>
                    <p className='text-blue-300 truncate w-[65%] px-2 py-5'>71a40359dd3b45356dc4b0e2a55c76031da2a7be9378520127b5b92cab189410</p>
                </div>
                <div className='w-[20%] float-left'>
                    <p className='text-white py-5'>0.00078228 BTC</p>
                </div>
                <div className='w-[28%] float-left'>
                    <p className='text-blue-300 truncate w-[70%] px-2 py-5'>71a40359dd3b45356dc4b0e2a55c76031da2a7be9378520127b5b92cab189410</p>
                </div>
                <div className='float-left'>
                    <p className='text-white truncate px-2 py-5 float-left'>0.00009996 BTC</p>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-8 text-green-600 font-extrabold ml-1 float-right mt-4">
                        <path fillRule="evenodd" d="M12.97 3.97a.60.60 0 0 1 1.06 0l7.5 7.5a.60.60 0 0 1 0 1.06l-7.5 7.5a.60.60 0 1 1-1.06-1.06l6.22-6.22H3a.60.60 0 0 1 0-1.5h16.19l-6.22-6.22a.60.60 0 0 1 0-1.06Z" clipRule="evenodd" />
                    </svg>
                </div>

                <div className='w-[35%] float-left -mt-[15px]'>
                    <div className='bg-yellow-600 rounded-2xl w-fit h-5 mb-1 float-left ml-10'>
                        <p className='px-3 text-center font-bold text-sm'>multisig 2 of 3</p>
                    </div>
                </div>
                <div className='w-[20%] float-left -mt-[27px]'>
                    <p className='text-white py-5'></p>
                </div>
                <div className='w-[28%] float-left -mt-[27px]'>
                    <p className='text-blue-300 truncate w-[70%] px-2 py-5'>bc140359dd3b45356dc4b0e2a55c76031da2a7be9378520127b5b92cab189zej</p>
                </div>
                <div className='float-left -mt-[27px]'>
                    <p className='text-white truncate px-2 py-5 float-left'>0.00009996 BTC</p>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-8 text-red-600 font-extrabold ml-1 float-right mt-4">
                        <path fillRule="evenodd" d="M12.97 3.97a.60.60 0 0 1 1.06 0l7.5 7.5a.60.60 0 0 1 0 1.06l-7.5 7.5a.60.60 0 1 1-1.06-1.06l6.22-6.22H3a.60.60 0 0 1 0-1.5h16.19l-6.22-6.22a.60.60 0 0 1 0-1.06Z" clipRule="evenodd" />
                    </svg>
                </div>

                <div className='float-left -mt-[12px]'>
                    <div className='text-white px-3 float-left py-2'>623.1 sat/vB-68,232 sat <p className='text-green-600 float-right px-2'>($21.77)</p></div>
                </div>
                <div className='bg-blue-600 rounded-md w-fit h-7 mr-7 -mt-[12px] mb-1 float-right'>
                    <p className='text-white px-3 text-center font-bold'>0.00009996 BTC</p>
                </div>
            </div>
        </main>
    )
}

