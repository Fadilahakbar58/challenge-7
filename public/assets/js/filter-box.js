function createFilterBox() {
    craeteParentElement()

    let formGroup1 = document.getElementById("form-group1")
    let formGroup2 = document.getElementById("form-group2")
    let formGroup3 = document.getElementById("form-group3")
    let formGroup4 = document.getElementById("form-group4")
    let formGroup5 = document.getElementById("form-group5")

    let drivers = ["Pilih Tipe Driver", "Dengan Sopir", "Tanpa Sopir"]
    let options = []
    drivers.forEach((a, b) => {
        let option = document.createElement("option")
        if (b > 0) {
            option.value = a
        }
        option.text = a
        options.push(option)
    })

    // definisikan isi form-group 1 disini ...

    let labelDriver = document.createElement("label")
    labelDriver.innerText = "Tipe Driver"

    let selectDriver = document.createElement("select")
    selectDriver.id = "select-driver"
    selectDriver.classList.add("form-control")
    formGroup1.append(labelDriver, selectDriver)
    selectDriver.append(...options)
    selectDriver.onfocus = showBackdrop
    selectDriver.onblur = hideBackdrop
    selectDriver.onchange = hideBackdrop

    // definisikan isi form-group 2 disini ...

    let labelTanggal = document.createElement("label")
    labelTanggal.innerText = "Tanggal"

    let inputTanggal = document.createElement("input")
    inputTanggal.id = "input-tanggal"
    inputTanggal.type = "date"
    inputTanggal.classList.add("form-control")
    inputTanggal.onfocus = showBackdrop
    inputTanggal.onblur = hideBackdrop
   
    formGroup2.append(labelTanggal, inputTanggal)
    // definisikan isi form-group 3 disini ...

    let labelJemput = document.createElement("label")
    labelJemput.innerText = "Waktu Jemput/Ambil"

    let inputJemput = document.createElement("input")
    inputJemput.id = "input-jemput"
    inputJemput.type = "time"
    inputJemput.classList.add("form-control")
    inputJemput.onfocus = showBackdrop
    inputJemput.onblur = hideBackdrop

    formGroup3.append(labelJemput, inputJemput)
    // definisikan isi form-group 4 disini ...

    let labelPenumpang = document.createElement("label")
    labelPenumpang.innerText = "Jumlah Penumpang"

    let inputGroupPenumpang = document.createElement("div")
    inputGroupPenumpang.classList.add("input-group")

    let inputPenumpang = document.createElement("input")
    inputPenumpang.id = "input-penumpang"
    inputPenumpang.type = "number"
    inputPenumpang.classList.add("form-control", "border-end-0")
    inputPenumpang.placeholder = "Jumlah Penumpang"
    inputPenumpang.onfocus = showBackdrop
    inputPenumpang.onblur = hideBackdrop

    let iconUserContainer = document.createElement("div")
    iconUserContainer.classList.add("input-group-append")

    let iconUserWrapper = document.createElement("div")
    iconUserWrapper.classList.add("input-group-text", "bg-white")

    let iconUser = document.createElement("img")
    iconUser.src = "assets/img/user-icon.svg"
    iconUserWrapper.append(iconUser)

    inputGroupPenumpang.append(inputPenumpang, iconUserContainer, iconUserWrapper)

    formGroup4.append(labelPenumpang, inputGroupPenumpang)

    // definisikan isi form-group 5 disini ...

    let labelButton = document.createElement("label")
    labelButton.innerHTML = "&nbsp"

    let buttonCari = document.createElement("button")
    buttonCari.id = "button-cari"
    buttonCari.type = "button"
    buttonCari.classList.add("btn", "btn-success", "col-sm-12")
    buttonCari.innerText = "Cari Mobil"
    buttonCari.onclick = onButtonClicked

    formGroup5.append(labelButton, buttonCari)


}

async function onSearch(props) {
    console.log(props)
    let cars = await Binar.listCars()

    console.log(cars)
    let carsList = document.getElementById("cars-list")
    let result = []
    
    for(let i in cars){
        
        let dateCars = cars[i].availableAt.toString();
        let dateCarss = dateCars.split(" ");
        
        if(props.datetime !== null) {
            if(dateCarss[1] !== props.datetime[1]) {
                continue;
            }
        }

        if(props.withDriver !== null) {
            if(props.withDriver === false && cars[i].withDriver === true){
                continue;
            }

            if(props.withDriver === true && cars[i].withDriver === false){
                continue;
            }
        }

        if(cars[i].capacity < props.passenger) {
            continue;
        }
        let drive = cars[i];
        let car = new Car(cars[i])
        // console.log(car instanceof Car)
        result.push(car.render())
    }
    carsList.innerHTML = result.join('')
}

createFilterBox()
