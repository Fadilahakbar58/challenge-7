import '../components/css/style.css'

const Ourservice = () => {
   
    return (
        <>
            <div className="row">
                <div className="col-sm grid-service grid-best">
                    <img src="/images/img_service.png" style={{ marginTop: 20 }} className="size-service Our-service-img" alt="" />
                </div>
                <div className="col-lg" style={{ fontSize: 14 }}>
                    <h3 style={{ marginTop: 100, fontSize: 24, }}><strong><br /> Best Car Rental For Any Kind Of Trip In
                        Jakarta!
                        <br /></strong></h3>
                    <p>Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain,
                        kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding,
                        meeting, dll.</p>
                    <div className="d-flex flex-row">
                        <div className="p-2">
                            <i className="bi bi-check rounded-circle px-1 icon-tick"></i>
                        </div>
                        <div className="p-2">Sewa Mobil Dengan Supir di Bali 12 Jam</div>
                    </div>
                    <div className="d-flex flex-row">
                        <div className="p-2">
                            <i className="bi bi-check rounded-circle px-1 icon-tick"></i>
                        </div>
                        <div className="p-2">Sewa Mobil Lepas Kunci di Bali 24 Jam</div>
                    </div>
                    <div className="d-flex flex-row">
                        <div className="p-2">
                            <i className="bi bi-check rounded-circle px-1 icon-tick"></i>
                        </div>
                        <div className="p-2">Sewa Mobil Jangka Panjang Bulanan</div>
                    </div>
                    <div className="d-flex flex-row">
                        <div className="p-2">
                            <i className="bi bi-check rounded-circle px-1 icon-tick"></i>
                        </div>
                        <div className="p-2">Gratis Antar - Jemput Mobil di Bandara</div>
                    </div>
                    <div className="d-flex flex-row">
                        <div className="p-2">
                            <i className="bi bi-check rounded-circle px-1 icon-tick"></i>
                        </div>
                        <div className="p-2">Layanan Airport Transfer / Drop In Out</div>
                    </div>
                </div>
            </div>

        </>

    )
}

export default Ourservice