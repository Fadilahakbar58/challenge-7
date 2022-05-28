const Faq = () => {
    
    return (
        <>
            <div className="container  grid-service mt-5 pt-5" id="FAQ">
                <div className="row" style={{ paddingTop: 50, height: 'max-content' }}>
                    <div className="col-sm faq">
                        <h4 style={{ fontSize: 24, fontWeight: 700 }}>Frequently Asked Question
                        </h4>
                        <p style={{ fontSize: 14, fontWeight: 300 }}>Lorem ipsum dolor sit amet, consectetur
                            adipiscing</p>
                    </div>
                    <div className="col-md-7">
                        <div className="accordion accordion-flush" id="accordionFlushExample">
                            <div className="accordion-item border border-1">
                                <h2 className="accordion-header" id="flush-headingOne">
                                    <button style={{ fontSize: 14, fontWeight: 300 }}
                                        className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#flush-collapseOne" aria-expanded="false"
                                        aria-controls="flush-collapseOne">
                                        Apa saja syarat yang dibutuhkan?
                                    </button>
                                </h2>
                                <div id="flush-collapseOne" className="accordion-collapse collapse"
                                    aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample"
                                    style={{ fontSize: 14, fontWeight: 300 }}>
                                    <div className="card-body">
                                        <ul>
                                            <li>Nomor pokok wajib pajak (NPWP)</li>
                                            <li>Kartu tanda penduduk (KTP)</li>
                                            <li>Surat izin mengemudi (SIM)</li>
                                            <li>Kartu keluarga (KK)</li>
                                            <li>Kartu tanda pengenal tempat bekerja.</li>
                                            <li>Fotokopi pajak bumi dan bangunan (PBB)</li>
                                            <li>Rekening listrik dan telepon.</li>
                                        </ul>
                                    </div>
                                    <div className="accordion-body"></div>
                                </div>
                            </div>
                            <br />
                            <div className="accordion-item border border-1">
                                <h2 className="accordion-header" id="flush-headingTwo">
                                    <button style={{ fontSize: 14, fontWeight: 300 }}
                                        className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#flush-collapseTwo" aria-expanded="false"
                                        aria-controls="flush-collapseTwo">
                                        Berapa hari minimal sewa mobil lepas kunci?
                                    </button>
                                </h2>
                                <div id="flush-collapseTwo" className="accordion-collapse collapse"
                                    aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample"
                                    style={{ fontSize: 14, fontWeight: 300 }}>
                                    <div className="card-body">
                                        Sewa mobil di Binar Car Rental memiliki batasan hari untuk sewa mobil lepas kunci, yaitu
                                        minimanl 24 jam atau 1 hari.
                                    </div>
                                    <div className="accordion-body"></div>
                                </div>
                            </div>
                            <br />
                            <div className="accordion-item border border-1">
                                <h2 className="accordion-header" id="flush-headingThree">
                                    <button style={{ fontSize: 14, fontWeight: 300 }}
                                        className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#flush-collapseThree" aria-expanded="false"
                                        aria-controls="flush-collapseThree">
                                        Berapa hari sebelumnya sebaiknya <br />booking sewa mobil?
                                    </button>
                                </h2>
                                <div id="flush-collapseThree" className="accordion-collapse collapse"
                                    aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample"
                                    style={{ fontSize: 14, fontWeight: 300 }}>
                                    <div className="card-body">
                                        Di Binar Car Rental anda dapat booking mobil 1 minggu sebelumnya.
                                    </div>
                                    <div className="accordion-body"></div>
                                </div>
                            </div>
                            <br />
                            <div className="accordion-item border border-1">
                                <h2 className="accordion-header" id="flush-headingFour">
                                    <button style={{ fontSize: 14, fontWeight: 300 }}
                                        className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#flush-collapseFour" aria-expanded="false"
                                        aria-controls="flush-collapseFour">
                                        Apakah ada biaya antar-jemput?
                                    </button>
                                </h2>
                                <div id="flush-collapseFour" className="accordion-collapse collapse"
                                    aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample"
                                    style={{ fontSize: 14, fontWeight: 300 }}>
                                    <div className="card-body">
                                        Ada, tergantung dari lokasi yang akan dituju. dan setiap lokasi berbeda - beda harga
                                        antar-jemputnya.
                                    </div>
                                    <div className="accordion-body"></div>
                                </div>
                            </div>
                            <br />
                            <div className="accordion-item border border-1">
                                <h2 className="accordion-header" id="flush-headingFive">
                                    <button style={{ fontSize: 14, fontWeight: 300 }}
                                        className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#flush-collapseFive" aria-expanded="false"
                                        aria-controls="flush-collapseFive">
                                        Bagaimana jika terjadi kecelakaan?
                                    </button>
                                </h2>
                                <div id="flush-collapseFive" className="accordion-collapse collapse"
                                    aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample"
                                    style={{ fontSize: 14, fontWeight: 300 }}>
                                    <div className="card-body">
                                        <ul>
                                            <li> Segala bentuk kerusakan, kehilangan dan kerugian lainnya yang di sebabkan atas
                                                kelalaian penyewa sepenuhnya adalah tanggung jawab penyewa.</li>
                                            <li> Kecelakan besar atau parah yang mengakibatkan kendaraan berlubang, tidak bisa
                                                jalan, terbakar atau kaca pecah dan kerusakan lainnya dan kehilangan
                                                bagian-bagian pada kendaraan atau unit tersebut yang disebabkan oleh
                                                kelalaian penyewa baik sengaja maupun tidak sengaja. Maka wajib dilakukan
                                                penggantian oleh penyewa sesuai nilai kerusakan atau kehilangan unit tersebut di
                                                tambah biaya rental selama waktu perbaikan kendaraan, yang
                                                dihitung sesuai dengan harga rental perhari dari kendaraan yang mengalami
                                                perbaikan.</li>
                                            <li>Jika kendaraan digunakan pada jalan yang tidak sepantasnya. Seperti pada medan
                                                extreme untuk off road, medan yang berlumpur, berbatu atau daerah perbukitan
                                                terjal. Maka segala kerusakan akibat pengunaan diatas, sepenuhnya
                                                ditanggung oleh penyewa kendaraan.</li>
                                            <li>untuk kegiatan balapan, baik balapan resmi ataupun balapan tidak resmi tidak
                                                kami perkenankan. Jika terjadi kerusakan pada kendaraan, maka segala kerusakan
                                                akibat pengunaan diatas, sepenuhnya ditanggung oleh penyewa
                                                kendaraan.
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Faq