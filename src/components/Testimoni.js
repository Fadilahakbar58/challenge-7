import { useEffect } from 'react'

const Testimoni = () => {
    useEffect(() => {
        if (window.loadOwlCarousel) {
            window.loadOwlCarousel()
        }
    }, [])
    return (
        <>
            <div className="container-fluid grid-service grid-service1" id="TS">
                <div className="row">
                    <div className="col-sm text-center">
                        <h3><b>Testimonial</b></h3>
                        <p className="pt-2 mobile">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
                    </div>
                </div>
            </div>

            <div className="owl-carousel owl-theme">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="card item">
                            <div className="card-body">
                                <div className="card-left">
                                    <img src="images/img_photo-1.png" alt="" />
                                </div>
                                <div className="card-right">
                                    <div className="faq-icon icon-pos faq">
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                    </div>
                                    <p className="icon-pos">“Lorem ipsum dolor sit amet, consectetur furete elit, sed do eiusmod
                                        lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum
                                        dolor sit amet, consectetur adipiscing elit, sed do eiusmod”</p>
                                    <p className="fw-bold">John Dee 32, Bromo</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="card item">
                            <div className="card-body">
                                <div className="card-left">
                                    <img src="images/img_photo-2.png" alt="" />
                                </div>
                                <div className="card-right">
                                    <div className="faq-icon icon-pos faq">
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                    </div>
                                    <p className="icon-pos">“Lorem ipsum dolor sit amet, consectetur furete elit, sed do eiusmod
                                        lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum
                                        dolor sit amet, consectetur adipiscing elit, sed do eiusmod”</p>
                                    <p className="fw-bold">John Dee 32, Bromo</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="card item">
                            <div className="card-body">
                                <div className="card-left">
                                    <img src="images/img_photo-1.png" alt="" />
                                </div>
                                <div className="card-right">
                                    <div className="faq-icon icon-pos faq">
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                    </div>
                                    <p className="icon-pos">“Lorem ipsum dolor sit amet, consectetur furete elit, sed do eiusmod
                                        lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum
                                        dolor sit amet, consectetur adipiscing elit, sed do eiusmod”</p>
                                    <p className="fw-bold">John Dee 32, Bromo</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Testimoni