document.addEventListener("DOMContentLoaded", function () {
    loadMakes();
});

const vehicleData = {
    "Toyota": [
        { model: "Corolla 2020", fuel: "Gasoline", transmission: "Automatic", city: 7.5, highway: 5.8, combined: 6.7, co2: 150 },
        { model: "Camry 2021", fuel: "Gasoline", transmission: "Automatic", city: 8.1, highway: 6.0, combined: 7.0, co2: 160 }
    ],
    "Honda": [
        { model: "Civic 2019", fuel: "Gasoline", transmission: "Manual", city: 7.2, highway: 5.6, combined: 6.5, co2: 140 }
    ]
};

function loadMakes() {
    const makeSelect = document.getElementById("make");
    for (let make in vehicleData) {
        let option = document.createElement("option");
        option.value = make;
        option.textContent = make;
        makeSelect.appendChild(option);
    }
}

function loadModels() {
    const make = document.getElementById("make").value;
    const modelSelect = document.getElementById("model");
    modelSelect.innerHTML = '<option value="">-- Select Model --</option>';
    if (make && vehicleData[make]) {
        vehicleData[make].forEach(vehicle => {
            let option = document.createElement("option");
            option.value = JSON.stringify(vehicle);
            option.textContent = vehicle.model;
            modelSelect.appendChild(option);
        });
    }
}

function calculateEmissions() {
    const selectedVehicle = JSON.parse(document.getElementById("model").value);
    const distance = parseFloat(document.getElementById("distance").value);
    const mode = document.getElementById("mode").value;
    
    if (!selectedVehicle || isNaN(distance) || distance <= 0) {
        document.getElementById("result").textContent = "Please enter valid inputs.";
        return;
    }

    let fuelRate = mode === "city" ? selectedVehicle.city : mode === "highway" ? selectedVehicle.highway : selectedVehicle.combined;
    let co2Emissions = selectedVehicle.co2 * distance;
    
    document.getElementById("result").innerHTML = `
        <strong>Results:</strong><br>
        Fuel Type: ${selectedVehicle.fuel} <br>
        Transmission: ${selectedVehicle.transmission} <br>
        Fuel Consumption: ${fuelRate} L/100 km <br>
        Total CO2 Emissions: <strong>${co2Emissions.toFixed(2)} grams</strong>
    `;
}
