import { Link } from "react-router-dom"

const Banner = () => {
    return (
        <>
            <div className="container grid-service" style={{ marginTop: 100 }}>
                <div className=" grid-rentcar">
                    <div className="row">
                        <div className="col-sm text-center text-light">
                            <h1 className="pb-3 pt-5" style={{ fontSize: 36, fontWeight: 'bold' }}>Sewa Mobil di Jakarta Sekarang
                            </h1>
                            <p className="text-14-light" style={{ fontSize: 14 }}>Lorem ipsum dolor sit amet, consectetur adipiscing
                                elit, sed do eiusmod <br /> tempor incididunt ut labore et dolore magna aliqua. </p>
                            <Link className="btn bg-btn mt-5 mb-5" to="/#" style={{ backgroundColor: '#5CB85F' }}>Mulai Sewa Mobil</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner