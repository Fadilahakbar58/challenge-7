import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import CarList from '../components/Car';
import { setFilter } from "../reducers/api-store";
import '../components/css/cars.css'


const Cars = () => {
    const dispatch = useDispatch();

    const [driver, setDriver] = useState();
    const [date, setDate] = useState();
    const [time, setTime] = useState();
    const [passengger, setPassengger] = useState();

    const [data, setData] = useState({});

    useEffect(() => {
        dispatch(setFilter(data));
    }, [dispatch, data]);

    const showBackdrop = () => {
        document.querySelector(".modal-backdrop").style.display = "block"
        document.body.classList.add("modal-open")
    }

    const hideBackdrop = (e) => {
        document.querySelector(".modal-backdrop").style.display = "none"
        document.body.classList.remove("modal-open")
        e.target.blur()
    }
    const onSearch = (e) => {
        e.preventDefault();
        setData({
            driver: driver,
            date: date,
            time: time,
            passengger: parseInt(passengger),
        });
    };

    return (
        <>
            <div className="container mt-4">
                <div id="filter-box">
                    <div className="card mb-4">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-lg-10 col-md-12">
                                    <form className="needs-validation" noValidate>
                                        <div className="row">
                                            <div className="col-lg-3 col-md-6">
                                                <div className="form-group" id="form-group1"><label>Tipe Driver</label>
                                                    <select 
                                                        id="select-driver" 
                                                        className="form-control" 
                                                        onFocus={showBackdrop}
                                                        onBlur={hideBackdrop}
                                                        onChange={(e) => setDriver(e.target.value)}
                                                    >
                                                        <option>Pilih Tipe Driver</option>
                                                        <option value="1">Dengan Sopir</option>
                                                        <option value="2">Tanpa Sopir</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-6">
                                                <div className="form-group" id="form-group2">
                                                    <label>Tanggal</label>
                                                    <input 
                                                        id="date" 
                                                        type="date" 
                                                        className="form-control" 
                                                        onFocus={showBackdrop}
                                                        onBlur={hideBackdrop} 
                                                        onChange={(e) => setDate(e.target.value)}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-6">
                                                <div className="form-group" id="form-group3">
                                                    <label>Waktu Jemput/Ambil</label>
                                                    <input 
                                                        id="waktu" 
                                                        type="time" 
                                                        className="form-control" 
                                                        onFocus={showBackdrop}
                                                        onBlur={hideBackdrop} 
                                                        onChange={(e) => setTime(e.target.value)}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-6">
                                                <div className="form-group" id="form-group4">
                                                    <label>Jumlah passengger</label>
                                                    <div className="input-group">
                                                        <input 
                                                            id="passengger" 
                                                            type="number" 
                                                            className="form-control border-end-0"
                                                            placeholder="Jumlah passengger"
                                                            onFocus={showBackdrop}
                                                            onBlur={hideBackdrop} 
                                                            onChange={(e) => setPassengger(e.target.value)}
                                                        />
                                                        <div className="input-group-append"></div>
                                                        <div className="input-group-text bg-white">
                                                            <img src="/images/fi_users.png" alt='' style={{ width: 24 }} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </form>
                                </div>
                                <div className="col-lg-2 col-md-12">
                                    <div className="form-group" id="form-group5"><label>&nbsp;</label>
                                        <button 
                                            id="button-cari" 
                                            type="button" 
                                            className="btn btn-success col-sm-12" 
                                            onFocus={showBackdrop}
                                            onBlur={hideBackdrop}
                                            onClick={onSearch}
                                            
                                        >   
                                            Cari Mobil
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <CarList/>
            </div>
        </>
    )
}

export default Cars