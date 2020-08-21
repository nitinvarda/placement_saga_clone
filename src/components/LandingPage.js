import React from 'react';
import './LandingPage.css';
const LandingPage = () => {
    return (
        <div>



            <div className="main">






                <div id="demo" className="carousel  carouselStart" data-ride="carousel" >



                    <div className="main-carousel "  >
                        <div className=" carouselText" >
                            <div >
                                <p >Master Your<br /> Destiney With<br /> <b>PlacementSaga</b></p>
                                <button className="btn btn-primary">View Sample Question</button>

                            </div>
                        </div>

                        <div className="carousel-inner " >
                            <div className="carousel-item active ">
                                <div className=" carouselSlide ">

                                    <div className="first-slide">
                                        <h4 className="text-in">QUESTION LIBRARY</h4>
                                        <div className="top-design">

                                        </div>
                                    </div>
                                    <div className="second-part" >
                                        <h3 className="text-side-in">
                                            250 HANDPICKED QUETIONS FOR CODING INTERVIEW IN LEADING COMPANIES
                                        </h3>
                                        <div className="bottom-design">

                                        </div>

                                    </div>
                                </div>

                            </div>
                            <div className="carousel-item">
                                <div className="  carouselSlide ">

                                    <div className="first-slide">
                                        <h4 className="text-in">HIGHLY
                                        QUALIFIED
                                        MENTORS</h4>
                                        <div className="top-design">

                                        </div>
                                    </div>
                                    <div className="second-part">
                                        <h3 className="text-side-in">
                                            HIGHLY QUALIFIED MENTORS FROM LEADING TECH GIANTS.
                                        </h3>
                                        <div className="bottom-design">

                                        </div>


                                    </div>
                                </div>

                            </div>
                            <div className="carousel-item">
                                <div className="  carouselSlide ">

                                    <div className="first-slide">
                                        <h4 className="text-in">THE PERFECT<br /> PLAYGROUND</h4>
                                        <div className="top-design">

                                        </div>
                                    </div>
                                    <div className="second-part">
                                        <h3 className="text-side-in">
                                            250 HANDPICKED QUETIONS FOR CODING INTERVIEW IN LEADING COMPANIES
                                        </h3>
                                        <div className="bottom-design">

                                        </div>

                                    </div>
                                </div>

                            </div>
                            <div className="carousel-item">
                                <div className="  carouselSlide ">

                                    <div className="first-slide">
                                        <h4 className="text-in">MOCK
                                        TESTS</h4>
                                        <div className="top-design">


                                        </div>
                                    </div>
                                    <div className="second-part">
                                        <h3 className="text-side-in">
                                            FINAL TOUCH WITH COMPANY SPECIFIC MOCK TESTS
                                        </h3>
                                        <div className="bottom-design">

                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>


                    </div>



                    <ul className="carousel-indicators">
                        <li data-target="#demo" data-slide-to="0" class="active"></li>
                        <li data-target="#demo" data-slide-to="1"></li>
                        <li data-target="#demo" data-slide-to="2"></li>
                        <li data-target="#demo" data-slide-to="3"></li>
                    </ul>
                </div>
            </div>
            <hr />
            <div className=" companies"  >
                <img alt="adobe" src="https://logos-world.net/wp-content/uploads/2020/06/Adobe-Logo.png" width="120px" height="100px" style={{ marginTop: -10 }} />
                <img alt="amazon" src="https://1000logos.net/wp-content/uploads/2016/10/Amazon-Logo.png" width="120px" height="80px" style={{ marginTop: 10 }} />
                <img alt="microsoft" src="https://www.freepnglogos.com/uploads/microsoft-logo-png-transparent-background-1.png" width="150px" height="50px" style={{ marginTop: 10 }} />
                <img alt="flipkart" src="https://logos-download.com/wp-content/uploads/2016/09/Flipkart_logo.png" width="120px" height="50px" style={{ marginTop: 10 }} />
                <img alt="google" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1920px-Google_2015_logo.svg.png" width="120px" height="50px" style={{ marginTop: 12 }} />
                <img alt="paytm" src="https://www.searchpng.com/wp-content/uploads/2019/02/Paytm-Logo-With-White-Border-PNG-image-1024x325.png" width="120px" height="50px" />
            </div>

        </div>


    );
}

export default LandingPage;
