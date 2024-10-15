import React from 'react'

const About = () => {
    return (

        //   <!-- main content -->
        <main class="py-5">
            {/* <!-- about us --> */}
            <div class="mt-5 text-center" id="about">
                <h2 class="mb-3 aquatico-regular">About Us</h2>
                <p class="roboto-regular text-center lead">
                    Discover the epitome of luxury and comfort at our exquisite suites –
                    your perfect home away from home.
                </p>
            </div>

            <div class="container-main mt-5 mb-5">
                <div class="row">
                    <div class="col-md-4">
                        <div
                            class="card my-4 text-center border border-1 hvr-float shadow-4"
                        >
                            <div class="card-body">
                                <div
                                    class="icon-square bg-info text-white flex-shrink-0 me-3 mb-3"
                                >
                                    <i class="bi bi-check2-circle"></i>
                                </div>

                                <h5 class="card-title text-info mb-3 aquatico-regular">
                                    Custom Suit Design
                                </h5>
                                <p class="card-text roboto-regular">
                                    Tailors can work with clients to design a custom suit
                                    tailored to their preferences and requirements. This
                                    includes choosing the fabric, style, and details such as
                                    lapel type, buttons, and lining.
                                </p>
                                <a
                                    href="#"
                                    class="btn btn-outline-info hvr-sweep-to-top btn-lg my-3 roboto-medium"
                                >Read More</a
                                >
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div
                            class="card my-4 text-center border border-1 hvr-float shadow-4"
                        >
                            <div class="card-body">
                                <div
                                    class="icon-square bg-info text-white flex-shrink-0 me-3 mb-3"
                                >
                                    <i class="bi bi-exclude"></i>
                                </div>

                                <h5 class="card-title text-info mb-3 aquatico-regular">
                                    Measurement and Fitting
                                </h5>
                                <p class="card-text roboto-regular">
                                    Taking precise measurements is a crucial step in tailoring.
                                    Tailors ensure that the suit fits perfectly by measuring the
                                    client's body and making adjustments as needed during
                                    multiple fittings.
                                </p>
                                <a
                                    href="#"
                                    class="btn btn-outline-info hvr-sweep-to-top btn-lg my-3 roboto-medium"
                                >Read More</a
                                >
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div
                            class="card my-4 text-center border border-1 hvr-float shadow-4"
                        >
                            <div class="card-body">
                                <div
                                    class="icon-square bg-info text-white flex-shrink-0 me-3 mb-3"
                                >
                                    <i class="bi bi-patch-exclamation"></i>
                                </div>

                                <h5 class="card-title text-info mb-3 aquatico-regular">
                                    Bespoke Tailoring
                                </h5>
                                <p class="card-text roboto-regular">
                                    Bespoke tailoring involves creating a suit from scratch,
                                    with every aspect customized to the client's specifications.
                                    This is a highly personalized service, often associated with
                                    luxury tailors.
                                </p>
                                <a
                                    href="#"
                                    class="btn btn-outline-info hvr-sweep-to-top btn-lg my-3 roboto-medium"
                                >Read More</a
                                >
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>

    )
}

export default About