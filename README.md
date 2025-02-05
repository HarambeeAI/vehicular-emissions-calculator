# The Verst Carbon Vehicular Emissions Calculator

## 🚗 About the Project
The **Verst Carbon Vehicular Emissions Calculator** is a web-based tool that allows users to estimate their vehicle's CO2 emissions based on trip distance, driving mode, and vehicle specifications. The calculator utilizes real-world vehicular emissions data to provide accurate estimations.

## 🌍 Features
- **Dynamic Vehicle Selection**: Users can choose their car make, model, and year.
- **Trip Distance Input**: Enter the trip distance in kilometers.
- **Driving Mode Options**:
  - City driving (stop-and-go traffic)
  - Highway driving (steady speed)
  - Mixed (combined rating) (55% city, 45% highway)
- **Real-time Emissions Calculation**: Estimates fuel consumption and CO2 emissions based on the dataset.

## 📂 Project Structure
```
vehicular-emissions-calculator/
│── data/
│   ├── vehicle_emissions.csv  # Raw dataset (CSV format)
│   ├── vehicle_emissions.json # JSON format for frontend processing
│── src/
│   ├── index.html  # Main frontend UI
│   ├── style.css   # CSS styles (optional, if needed)
│   ├── script.js   # JavaScript logic
│── README.md       # Project documentation
│── .gitignore      # Ignore unnecessary files
│── LICENSE         # Open-source license (optional)
```

## 📌 How to Use
1. Open the `index.html` file in a browser.
2. Select your vehicle make and model from the dropdown.
3. Enter your trip distance in kilometers.
4. Choose a driving mode (City, Highway, or Mixed).
5. Click **Calculate CO2 Emissions** to get the estimated emissions.

## 🛠️ Technologies Used
- **HTML5, CSS3, JavaScript** for frontend development
- **JSON dataset** for easy vehicle data processing

## 📊 Dataset
The dataset used in this project is sourced from the **Canada Government Open Data Portal**. The dataset covers **7 years of emissions data** from various vehicle models.

**Disclaimer:** The dataset has been taken from the Canada Government official open data website. This is a compiled version that contains data over a period of 7 years.

## 🏗️ Future Enhancements
- Integrate a backend API for dynamic data fetching
- Expand dataset coverage with additional vehicle makes/models
- Improve UI/UX with enhanced styling and responsiveness

## 📜 License
This project is licensed under the **MIT License**.

## 🤝 Contributing
Contributions are welcome! Feel free to fork the repo and submit pull requests.

## 📩 Contact
For any questions or suggestions, feel free to reach out!

---

🚀 **Built to help reduce carbon footprints and promote sustainable transportation!**
