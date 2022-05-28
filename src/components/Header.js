import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import './css/style.css';

const Header = () => {
    const location = useLocation()
    const [showButton, setShowButton] = useState(false)
    useEffect(() => {
        setShowButton(location.pathname === '/')
    }, [location.pathname])
    return (
        <div className="row" style={{backgroundColor: '#F1F3FF'}}>
            <div className="col-md-6 grid-left tulisan-car">
                <h1 style={{ color: 'black', fontWeight: 700, fontSize: 36, marginTop: 50 }}>Sewa Rental Mobil
                    Terbaik di Kawasan Jakarta</h1>
                <p style={{ color: 'black', fontWeight: 300, fontSize: 14, marginTop: 50 }}>Selamat datang di Binar
                    Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani
                    kebutuhanmu untuk sewa mobil selama 24 jam.</p>
                {showButton ?
                    <Link to="/cars" className="btn btn-success">Mulai Sewa Mobil</Link>
                    :
                    ''
                }
            </div>
            <div className="col-md-6 mt-5 pt-5 grid-right">
                <img src="/images/img_car.png" className="car-img" alt="" />
            </div>
        </div>
    )
}

export default Header
