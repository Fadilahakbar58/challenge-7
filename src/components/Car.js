import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAsyncData } from "../reducers/api-store";

function rupiah(price) {
    let convertPrice = price.toString();
    let convertString = convertPrice.split("");
    let array = [];
    let temp = 3;

    for (let i = convertString.length - 1; i >= 0; i--) {
        temp -= 1;
        array.unshift(convertString[i]);
        if (temp === 0 && i !== 0) {
            array.unshift(".");
            temp = 3;
        }
    }
    return array.join("");
}
const CarList = () => {
    const dispatch = useDispatch();
    const listCarsJson = useSelector((state) => state.api.cars);
  
    const filter = useSelector((state) => state.api.filter);
  
    const FilterCars = [];
  
    function filteringCars() {
        let driverFilter = "";
        if (filter.driver === "1") {
            driverFilter = true;
        } else {
            driverFilter = false;
        }
        for (let i in listCarsJson) {
            let car = listCarsJson[i];
            let dateConversion = new Date(car.availableAt);
            if (
                car.available === true &&
                dateConversion <= new Date(filter.date) &&
                car.capacity >= filter.passengger &&
                car.driver === driverFilter
            ) {
                FilterCars.push(listCarsJson[i]);
            }
        }
    }
    filteringCars();
    useEffect(() => {
        dispatch(getAsyncData());
    }, [dispatch]);
    return (
      <>
        <div className="row" id="cars-list">
                    {FilterCars.map((car) => {
                        return (
                            <div className="col-lg-4 d-flex justify-content-center" style={{ marginTop: "40px" }}
                                key={car.id}>
                                <div className="listcar-card card" style={{ width: "25rem" }}>
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <img src={car.image} style={{ objectfit: "contain", width: 320, height: 250}}
                                                className="card-img-top" alt={car.manufacture} />
                                        </div>
                                    </div>

                                    <div className="card-body" style={{ fontfamily: "Helvetica" }}>
                                        <div className="row">
                                            <div className="col-lg-12">
                                                {car.manufacture} {car.model}
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <b>Rp {rupiah(car.rentPerDay)} / hari</b>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <p>{car.description}</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-12"></div>
                                        </div>
                                        <img src="/images/fi_users.png" width="16" height="16" alt='' />
                                        {car.capacity} orang
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <img src="/images/fi_settings.png" width="16" height="16" alt='' />
                                                {" "}
                                                {car.transmission}
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <img src="/images/fi_calendar.png" width="16" height="16" alt='' />
                                                Tahun {car.year}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-footer">
                                        <button className="btn btn-success col-lg-12">
                                            Pilih Mobil
                                        </button>
                                    </div>
                                </div>
                            </div>
                        );
                    })}

                </div>
      </>
    );
  };
  
  export default CarList;
  