import React from 'react';
import "./Services.css";
export const Services = () => {
    return (
        <div>
            <div className="my-generic text-center" id="services">
                <h2 className="mb-3 mt-5 aquatico-regular">Services</h2>
                <p className="roboto-regular text-center lead">
                    Elevate your style with our suit fashion company, offering
                    impeccable craftsmanship, personalized fittings, and timeless
                    designs for a wardrobe of sophistication and confidence.
                </p>
            </div>

            <div className="row justify-content-center align-items-center my-5 mx-auto" id='servicesImg'>
                <div className="col-md-4 hvr-bounce-in my-3">
                    <div className="card bg-dark text-white">
                        <img
                            src="./img/kenifenS1.jpg"
                            className="card-img"
                            alt="Stony Beach"
                        />
                        <div className="card-img-overlay bg-transparent">
                            <h5 className="card-title aquatico-regular">Custom Tailoring</h5>
                            <p className="card-text my-5 roboto-regular text-justify">
                                Our suit fashion company specializes in crafting bespoke suits
                                tailored to your unique measurements and preferences, ensuring
                                a perfect fit and personalized style.
                            </p>
                            <p className="card-text">
                                <i class="bi bi-bag-check-fill"></i>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 hvr-bounce-in my-3">
                    <div className="card bg-dark text-white">
                        <img
                            src="./img/kenifenS2.jpg"
                            className="card-img"
                            alt="Stony Beach"
                        />
                        <div className="card-img-overlay bg-transparent">
                            <h5 className="card-title aquatico-regular">
                                Ready-to-Wear Collections
                            </h5>
                            <p className="card-text my-5 roboto-regular text-justify">
                                Explore our curated range of ready-to-wear suits featuring a
                                variety of classic and contemporary designs, ideal for those
                                seeking stylish options without the need for customization.
                            </p>
                            <p className="card-text">
                                <i className="bi bi-bag-check-fill"></i>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 hvr-bounce-in my-3">
                    <div className="card bg-dark text-white">
                        <img
                            src="./img/kenifenS3.jpg"
                            className="card-img"
                            alt="Stony Beach"
                        />
                        <div className="card-img-overlay bg-transparent">
                            <h5 className="card-title aquatico-regular">
                                Alterations and Repairs
                            </h5>
                            <p className="card-text my-5 roboto-regular text-justify">
                                We offer expert alteration and repair services to ensure your
                                suits always look their best, whether it's adjusting the fit,
                                fixing minor damages, or refreshing your wardrobe.
                            </p>
                            <p className="card-text">
                                <i className="bi bi-bag-check-fill"></i>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- call to action --> */}
            <div className="container px-4 py-5 my-generic" id="hanging-icons">
                <h2 className="pb-2 border-bottom text-center aquatico-regular getStartedText getReadyText" >
                    Are you ready to get started?
                </h2>
                <div className="row g-4 py-5 row-cols-1 row-cols-lg-2">
                    <div
                        className="col d-flex align-items-start bg-white rounded-5 shadow-3 pt-5 hvr-sink"
                    >
                        <div className="icon-square bg-light text-dark flex-shrink-0 me-3">
                            <i className="bi bi-bag-check-fill"></i>
                        </div>
                        <div>
                            <h2 class="roboto-bold">Unlock Your Sartorial Elegance</h2>
                            <p class="roboto-regular text-justify">
                                Elevate your style with our exclusive suits, whether
                                custom-made or from our collection, and experience the
                                confidence of a perfect fit and timeless sophistication.
                            </p>
                            <a
                                href="#"
                                className="btn btn-outline-info hvr-sweep-to-top btn-lg my-3 roboto-medium"
                            >
                                Get Started
                            </a>
                        </div>
                    </div>
                    <div
                        className="col d-flex align-items-start bg-white rounded-5 shadow-3 pt-5 hvr-sink"
                    >
                        <div className="icon-square bg-light text-dark flex-shrink-0 me-3">
                            <i className="bi bi-house-heart"></i>
                        </div>
                        <div>
                            <h2 className="roboto-bold">Tailored to Perfection</h2>
                            <p className="roboto-regular text-justify">
                                Redefine your wardrobe with extraordinary craftsmanship and
                                statement-making styles. Embrace the suit that suits you and
                                start your transformation today.
                            </p>
                            <a
                                href="#"
                                className="btn btn-outline-info hvr-sweep-to-top btn-lg my-3 roboto-medium"
                            >
                                Dive In
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- portfolio --> */}
            <div className="my-generic text-center" id="portfolio">
                <h2 className="mb-3 mt-5 aquatico-regular">Portfolio</h2>
                <p className="roboto-regular text-center lead">
                    Explore our portfolio of exquisite suits, showcasing precision
                    tailoring and impeccable design, embodying the sophistication and
                    versatility we offer.
                </p>
            </div>

            <div className="row justify-content-center align-items-center my-5 mx-auto">
                <div className="col-md-4 hvr-bounce-in my-3">
                    <div className="card bg-dark text-white">
                        <img
                            src="/assets/2-3966b115.jpg"
                            className="card-img"
                            alt="Stony Beach"
                        />
                        <div className="card-img-overlay bg-transparent2">
                            <p className="card-text">
                                <i className="bi bi-bag-check-fill"></i>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 hvr-bounce-in my-3">
                    <div className="card bg-dark text-white">
                        <img
                            src="/assets/5-79352e92.jpg"
                            className="card-img"
                            alt="Stony Beach"
                        />
                        <div className="card-img-overlay bg-transparent2">
                            <p className="card-text">
                                <i className="bi bi-bag-check-fill"></i>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 hvr-bounce-in my-3">
                    <div className="card bg-dark text-white">
                        <img
                            src="/assets/6-06affbeb.jpg"
                            className="card-img"
                            alt="Stony Beach"
                        />
                        <div className="card-img-overlay bg-transparent2">
                            <p className="card-text">
                                <i className="bi bi-bag-check-fill"></i>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 hvr-bounce-in my-3">
                    <div className="card bg-dark text-white">
                        <img
                            src="/assets/3-d3187101.jpg"
                            className="card-img"
                            alt="Stony Beach"
                        />
                        <div className="card-img-overlay bg-transparent2">
                            <p className="card-text">
                                <i className="bi bi-bag-check-fill"></i>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 hvr-bounce-in my-3">
                    <div className="card bg-dark text-white">
                        <img
                            src="/assets/11-a0b41cbc.jpg"
                            className="card-img"
                            alt="Stony Beach"
                        />
                        <div className="card-img-overlay bg-transparent2">
                            <p className="card-text">
                                <i className="bi bi-bag-check-fill"></i>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 hvr-bounce-in my-3">
                    <div className="card bg-dark text-white">
                        <img
                            src="/assets/12-dc243fbe.jpg"
                            className="card-img"
                            alt="Stony Beach"
                        />
                        <div className="card-img-overlay bg-transparent2">
                            <p className="card-text">
                                <i className="bi bi-bag-check-fill"></i>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 hvr-bounce-in my-3">
                    <div className="card bg-dark text-white">
                        <img
                            src="/assets/4-616bbbbd.jpg"
                            className="card-img"
                            alt="Stony Beach"
                        />
                        <div className="card-img-overlay bg-transparent2">
                            <p className="card-text">
                                <i className="bi bi-bag-check-fill"></i>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 hvr-bounce-in my-3">
                    <div className="card bg-dark text-white">
                        <img
                            src="/assets/9-d48b2ace.jpg"
                            className="card-img"
                            alt="Stony Beach"
                        />
                        <div className="card-img-overlay bg-transparent2">
                            <p className="card-text">
                                <i className="bi bi-bag-check-fill"></i>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 hvr-bounce-in my-3">
                    <div className="card bg-dark text-white">
                        <img
                            src="/assets/13-26ef6062.jpg"
                            className="card-img"
                            alt="Stony Beach"
                        />
                        <div className="card-img-overlay bg-transparent2">
                            <p className="card-text">
                                <i className="bi bi-bag-check-fill"></i>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
