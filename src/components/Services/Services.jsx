import React from 'react';
import "./Services.css";
import { IoBagCheck } from "react-icons/io5";

const ServiceCard = ({ title, description, imageClass }) => {
    return (
        <div className="col-md-4 hvr-bounce-in my-3 imgSection">
            <div className={`card bg-dark text-white card-img ${imageClass}`}>
                <div className="card-img-overlay bg-transparent imgText">
                    <h5 className="card-title aquatico-regular">{title}</h5>
                    <p className="card-text my-5 roboto-regular text-justify">
                        {description}
                    </p>
                    <p className="card-text">
                        <IoBagCheck className='servicesIcon' />
                    </p>
                </div>
            </div>
        </div>
    );
};

export const Services = () => {
    return (
        <div>
            <div className="my-generic text-center" id="services">
                <h2 className="mb-3 mt-5 aquatico-regular">Services</h2>
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
            </div>

            <div className="container px-4 py-5 my-generic" id="hanging-icons">
                <h2 className="pb-2 border-bottom text-center aquatico-regular getStartedText getReadyText">
                    Are you ready to get started?
                </h2>
                <div className="row g-4 py-5 row-cols-1 row-cols-lg-2 nowNow">
                    <div className="col d-flex align-items-start bg-white rounded-5 shadow-3 pt-5 hvr-sink callToAction">
                        <div className="icon-square bg-light text-dark flex-shrink-0 me-3">
                            <i className="bi bi-bag-check-fill"></i>
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


        </div>
    );
};
