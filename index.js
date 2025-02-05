document.addEventListener("DOMContentLoaded", function () {
    loadVehicleData();
});

let vehicleData = {};

async function loadVehicleData() {
    try {
        const response = await fetch('data/vehicle_emissions.json'); // Ensure this file is accessible
        vehicleData = await response.json();
        loadMakes(); // Populate dropdown once data is loaded
    } catch (error) {
        console.error("Error loading vehicle data:", error);
    }
}

function loadMakes() {
    if (!vehicleData || Object.keys(vehicleData).length === 0) return;
    const makeSelect = document.getElementById("make");
    makeSelect.innerHTML = '<option value="">-- Select Make --</option>'; // Reset dropdown
    
    Object.keys(vehicleData).forEach(make => {
        let option = document.createElement("option");
        option.value = make;
        option.textContent = make;
        makeSelect.appendChild(option);
    });
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
