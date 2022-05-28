const Footer = () => {
    return (
        <div className="row text-left" style={{ marginLeft: 100, marginTop: 100 }}>
            <div className="col-lg-3 " style={{ listStyleType: 'none' }}>
                <li className="mb-3">Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</li>
                <li className="mb-3">binarcarrental@gmail.com</li>
                <li className="mb-3">081-233-334-808</li>
            </div>

            <div className="col-lg-3" style={{ listStyleType: 'none', fontWeight: 'bold' }}>
                <li className="mb-2">Our Services</li>
                <li className="mb-2">Why Us</li>
                <li className="mb-2">Testimonial</li>
                <li className="mb-2">FAQ</li>
            </div>

            <div className="col-lg-3">
                <p>Connect With Us</p>
                <img src="/images/icon_facebook.png" alt="" />
                <img src="/images/icon_instagram.png" alt="" />
                <img src="/images/icon_mail.png" alt="" />
                <img src="/images/icon_twitter.png" alt="" />
                <img src="/images/icon_twitch.png" alt="" />
            </div>

            <div className="col-lg-3">
                <p>Copyright Binar 2022</p>
                <img src="/images/logo.png" alt="" />
            </div>
        </div>
    )
}

export default Footer