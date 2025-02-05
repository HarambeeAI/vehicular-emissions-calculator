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
        vehicleData[make].forEach((vehicle, index) => {
            if (vehicle.model) { // Ensure the vehicle entry has a model field
                let option = document.createElement("option");
                option.value = index;  // Store index instead of full JSON
                option.textContent = vehicle.model;
                modelSelect.appendChild(option);
            }
        });
    }
}

function calculateEmissions() {
    const make = document.getElementById("make").value;
    let modelIndex = document.getElementById("model").value;
    modelIndex = parseInt(modelIndex, 10); // Ensure index is an integer
    const distance = parseFloat(document.getElementById("distance").value);
    const mode = document.getElementById("mode").value;

    if (!make || isNaN(modelIndex) || isNaN(distance) || distance <= 0) {
        document.getElementById("result").textContent = "Please enter valid inputs.";
        return;
    }

    const selectedVehicle = vehicleData[make][modelIndex]; // Fetch correct vehicle object

    if (!selectedVehicle) {
        document.getElementById("result").textContent = "Invalid selection. Please choose a valid vehicle.";
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
