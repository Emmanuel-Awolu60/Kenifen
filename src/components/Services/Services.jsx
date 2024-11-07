import React from 'react';
import "./Services.css";
import { IoBagCheck } from "react-icons/io5";
import { IoHomeOutline } from "react-icons/io5";
import { IoBagOutline } from "react-icons/io5";

// const ServiceCard = ({ title, description, imageClass }) => {
//     return (
//         <div className="col-md-4 hvr-bounce-in my-3 imgSection">
//             <div className={`card bg-dark text-white card-img servicesImg1 ${imageClass}`}>
//                 <div className="card-img-overlay bg-transparent imgText">
//                     <h5 className="card-title aquatico-regular">{title}</h5>
//                     <p className="card-text my-5 roboto-regular text-justify">
//                         {description}
//                     </p>
//                     <p className="card-text">
//                         <IoBagCheck className='servicesIcon' />
//                     </p>
//                 </div>
//             </div>
//         </div>
//     );
// };

export const Services = () => {
    return (
        <div>


            {/* <!-- services --> */}
            <div id="services">
                <div className=" my-generic text-center" >
                    <h2 className="mb-3 mt-5 aquatico-regular">Services</h2>
                    <p className="roboto-regular text-center lead">
                        Elevate your style with our suit fashion company, offering
                        impeccable craftsmanship, personalized fittings, and timeless
                        designs for a wardrobe of sophistication and confidence.
                    </p>
                </div>

                <div className=" imgSS row justify-content-center align-items-center my-5 mx-auto">
                    <div className=" servicesImg1 col-md-4 hvr-bounce-in my-3">
                        <div className="imgCard card bg-dark text-white">
                            <img
                                src="./img/kenifenS1.jpg"
                                className="card-img"
                                alt="Stony Beach"
                            />
                            <div className=" imgText card-img-overlay bg-transparent">
                                <h5 className="card-title aquatico-regular">Custom Tailoring</h5>
                                <p className="card-text my-5 roboto-regular text-justify">
                                    Our suit fashion company specializes in crafting bespoke suits
                                    tailored to your unique measurements and preferences, ensuring
                                    a perfect fit and personalized style.
                                </p>
                                <p className="card-text">
                                    <IoBagCheck className='servicesIcon' />
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 hvr-bounce-in my-3">
                        <div className="imgCard card bg-dark text-white">
                            <img
                                src="./img/kenifenS2.jpg"
                                className="card-img"
                                alt="Stony Beach"
                            />
                            <div className=" imgText card-img-overlay bg-transparent">
                                <h5 className="card-title aquatico-regular">
                                    Ready-to-Wear Collections
                                </h5>
                                <p className="card-text my-5 roboto-regular text-justify">
                                    Explore our curated range of ready-to-wear suits featuring a
                                    variety of classic and contemporary designs, ideal for those
                                    seeking stylish options without the need for customization.
                                </p>
                                <p className="card-text">
                                    <IoBagCheck className='servicesIcon' />
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 hvr-bounce-in my-3">
                        <div className="imgCard card bg-dark text-white">
                            <img
                                src="./img/kenifenS3.jpg"
                                className="card-img"
                                alt="Stony Beach"
                            />
                            <div className=" imgText card-img-overlay bg-transparent">
                                <h5 className="card-title aquatico-regular">
                                    Alterations and Repairs
                                </h5>
                                <p className="card-text my-5 roboto-regular text-justify">
                                    We offer expert alteration and repair services to ensure your
                                    suits always look their best, whether it's adjusting the fit,
                                    fixing minor damages, or refreshing your wardrobe.
                                </p>
                                <p className="card-text">
                                    <IoBagCheck className='servicesIcon' />
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="col-md-4 hvr-bounce-in my-3">
                    <div className=" imgCard card bg-dark text-white">
                        <img
                            src="./img/kenifenS3.jpg"
                            className="card-img"
                            alt="Stony Beach"
                        />
                        <div className=" imgText card-img-overlay bg-transparent">
                            <h5 className="card-title aquatico-regular">
                                Alterations and Repairs
                            </h5>
                            <p className="imgText card-text my-5 roboto-regular text-justify">
                                We offer expert alteration and repair services to ensure your
                                suits always look their best, whether it's adjusting the fit,
                                fixing minor damages, or refreshing your wardrobe.
                            </p>
                            <p className="card-text">
                                <IoBagCheck className='servicesIcon' />
                            </p>
                        </div>
                    </div>
                </div> */}
            </div>
            {/* <div className="my-generic text-center" id="services">
                <h2 className="mb-3 mt-5 aquatico-regular text-black">Services</h2>
                <p className="roboto-regular text-center lead">
                    Elevate your style with our suit fashion company, offering impeccable craftsmanship,
                    personalized fittings, and timeless designs for a wardrobe of sophistication and confidence.
                </p>
            </div>

            <div className="row justify-content-center align-items-center my-5 mx-auto" id="servicesImg">
                <ServiceCard
                    title="Custom Tailoring"
                    description="Our suit fashion company specializes in crafting bespoke suits
                       tailored to your unique measurements and preferences, ensuring
                       a perfect fit and personalized style."
                    imageClass="servicesImg1"
                />
                <ServiceCard
                    title="Ready-to-Wear Collections"
                    description="Explore our curated range of ready-to-wear suits featuring a
                       variety of classic and contemporary designs, ideal for those
                       seeking stylish options without the need for customization."
                    imageClass="servicesImg2"

                />
                <ServiceCard
                    title="Alterations and Repairs"
                    description="We offer expert alteration and repair services to ensure your
                       suits always look their best, whether it's adjusting the fit,
                       fixing minor damages, or refreshing your wardrobe."
                    imageClass="servicesImg3"
                />
            </div> */}
            {/* 
            <div className="container px-4 py-5 my-generic" id="hanging-icons">
                <h2 className="pb-2 border-bottom text-center aquatico-regular getStartedText getReadyText text-black">
                    Are you ready to get started?
                </h2>
                <div className="row g-4 py-5 row-cols-1 row-cols-lg-2 nowNow">
                    <div className="col d-flex align-items-start bg-white rounded-5 shadow-3 pt-5 hvr-sink callToAction">
                        <div className="icon-square bg-light text-dark flex-shrink-0 me-3">
                            <i className="bi bi-bag-check-fill"></i>
                            <IoBagOutline className='icon-square' />
                        </div>
                        <div>
                            <h2 className="roboto-bold">Unlock Your Sartorial Elegance</h2>
                            <p className="roboto-regular text-justify">
                                Elevate your style with our exclusive suits, whether custom-made or from our
                                collection, and experience the confidence of a perfect fit and timeless sophistication.
                            </p>
                            <a href="#" className="btn btn-outline-info hvr-sweep-to-top btn-lg my-3 roboto-medium">
                                Get Started
                            </a>
                        </div>
                    </div>
                    <div className="col d-flex align-items-start bg-white rounded-5 shadow-3 pt-5 hvr-sink callToAction">
                        <div className="icon-square bg-light text-dark flex-shrink-0 me-3">
                            <i className="bi bi-house-heart"></i>
                            <IoHomeOutline className='icon-square' />
                        </div>
                        <div>
                            <h2 className="roboto-bold">Tailored to Perfection</h2>
                            <p className="roboto-regular text-justify">
                                Redefine your wardrobe with extraordinary craftsmanship and statement-making styles.
                                Embrace the suit that suits you and start your transformation today.
                            </p>
                            <a href="#" className="btn btn-outline-info hvr-sweep-to-top btn-lg my-3 roboto-medium">
                                Dive In
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className=''></div> */}

            {/* <!-- portfolio --> */}
            <div className="my-generic text-center container" id="portfolio">
                <h2 className="mb-3 mt-5 aquatico-regular text-black">Portfolio</h2>
                <p className="roboto-regular text-center lead">
                    Explore our portfolio of exquisite suits, showcasing precision
                    tailoring and impeccable design, embodying the sophistication and
                    versatility we offer.
                </p>
            </div>

            <div className="container row justify-content-center align-items-center my-5 mx-auto portfolioImg">
                <div className="col-md-4 hvr-bounce-in my-3">
                    <div className="card  text-white">
                        <img
                            src="./img/Portfolio1.jpg"
                            className="card-img"
                            alt="Stony Beach"
                        />
                    </div>
                </div>

                <div className="col-md-4 hvr-bounce-in my-3">
                    <div className="card text-white">
                        <img
                            src="./img/Portfolio2.jpg"
                            className="card-img"
                            alt="Stony Beach"
                        />
                    </div>
                </div>

                <div className="col-md-4 hvr-bounce-in my-3">
                    <div className="card text-white">
                        <img
                            src="./img/Portfolio3.jpg"
                            className="card-img"
                            alt="Stony Beach"
                        />
                    </div>
                </div>

                <div className="col-md-4 hvr-bounce-in my-3">
                    <div className="card  text-white">
                        <img
                            src="./img/Portfolio4.jpg"
                            className="card-img"
                            alt="Stony Beach"
                        />
                    </div>
                </div>

                <div className="col-md-4 hvr-bounce-in my-3">
                    <div className="card text-white">
                        <img
                            src="./img/Portfolio5.jpg"
                            className="card-img"
                            alt="Stony Beach"
                        />
                    </div>
                </div>

                <div class="col-md-4 hvr-bounce-in my-3">
                    <div class="card  text-white">
                        <img
                            src="./img/Portfolio6.jpg"
                            className="card-img"
                            alt="Stony Beach"
                        />
                    </div>
                </div>

                <div className="col-md-4 hvr-bounce-in my-3">
                    <div className="card text-white">
                        <img
                            src="./img/Portfolio7.jpg"
                            class="card-img"
                            alt="Stony Beach"
                        />
                    </div>
                </div>

                <div className="col-md-4 hvr-bounce-in my-3">
                    <div className="card  text-white">
                        <img
                            src="./img/Portfolio8.jpg"
                            className="card-img"
                            alt="Stony Beach"
                        />
                    </div>
                </div>

                <div className="col-md-4 hvr-bounce-in my-3">
                    <div className="card  text-white">
                        <img
                            src="./img/Portfolio9.jpg"
                            className="card-img"
                            alt="Stony Beach"
                        />
                    </div>
                </div>
            </div>

            {/* <!-- testimonials --> */}
            <div className="my-generic text-center" id="testimonials">
                <h2 className="text-black mb-3 mt-5 aquatico-regular">Testimonials</h2>
                <p className="roboto-regular text-center lead">
                    See what our customers have to say about their experiences with our
                    suits. Explore these testimonials to witness the confidence and
                    elegance we deliver.
                </p>

                <div className="testimonialsText row justify-center align-items-center">
                    <div className="col-md-4">
                        <div
                            className=" img-testimonialText card my-4 text-center border border-1 border-info hvr-sink bg-tranparent shadow-4"
                        >
                            <div className="card-body">
                                <img
                                    src="./img/og.jpg"
                                    className="img-testimonial"
                                    alt="testimonial"
                                />

                                <h5 className="card-title my-3 aquatico-regular text-left">
                                    Ogunleye Mayowa
                                </h5>
                                <p className="card-text roboto-regular text-justify">
                                    <i className="bi bi-quote text-info"></i>
                                    Absolutely impeccable tailoring! Their suits are a perfect
                                    fit, and I always feel like a million bucks wearing them.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div
                            className="img-testimonialText card my-4 text-center border border-1 border-info hvr-sink bg-tranparent shadow-4"
                        >
                            <div className="card-body">
                                <img
                                    src="./img/emmanuel.jpg"
                                    className="img-testimonial"
                                    alt="testimonial"
                                />

                                <h5 className="card-title my-3 aquatico-regular text-left">
                                    Awolu Emmanuel
                                </h5>
                                <p className="card-text roboto-regular text-justify">
                                    <i className="bi bi-quote text-info"></i>
                                    I've never received so many compliments on my style until I
                                    started wearing suits from this company.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div
                            className="img-testimonialText card my-4 text-center border border-1 border-info hvr-sink bg-tranparent shadow-4"
                        >
                            <div className="card-body">
                                <img
                                    src="./img/soovica.jpg"
                                    className="img-testimonial"
                                    alt="testimonial"
                                />

                                <h5 className="card-title my-3 aquatico-regular text-left">
                                    Dogo Emmanuel
                                </h5>
                                <p className="card-text roboto-regular text-justify">
                                    <i className="bi bi-quote text-info"></i>
                                    Absolutely impeccable tailoring! Their suits are a perfect
                                    fit, and I always feel like a million bucks wearing them.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
