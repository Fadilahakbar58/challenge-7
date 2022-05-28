import './css/style.css';

const Navbar = () => {
    return (

        <nav className="navbar navbar-expand-lg navbar-light bg-all">
            <div className="container">
                <a className="navbar-brand brand" href="/">&nbsp;</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight"
                    aria-controls="offcanvasRight" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="offcanvas offcanvas-end w-50" tabindex="-1" id="offcanvasRight"
                    aria-labelledby="offcanvasRightLabel">
                    <div className="offcanvas-header">

                        <h5 id="offcanvasRightLabel">BCR</h5>
                        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas"
                            aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body" id="offcanvasRight">
                        <div className="navbar-nav ms-auto" style={{ fontSize: 14 }}>
                            <a className="nav-link text-dark " aria-current="page" href="/OurService">Our Services</a>
                            <a className="nav-link text-dark " href="/WhyUs">Why Us</a>
                            <a className="nav-link text-dark " href="/Testimoni">Testimonial</a>
                            <a className="nav-link text-dark " href="/FAQ" tabindex="-1" aria-disabled="true">FAQ</a>
                            <button type="button" className="btn bg-btn"
                                style={{ marginRight: 10, fontWeight: 'bold' }}>Register</button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>

    )
}

export default Navbar
