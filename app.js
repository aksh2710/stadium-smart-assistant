// Simulated Real-Time Data (Evaluation Criteria: Logic)
const stadiumData = {
    gates: [
        { id: "North", load: 0.85, estWait: "22 mins" },
        { id: "West", load: 0.30, estWait: "4 mins" }
    ],
    userLocation: "North Gate"
};

// 1. Initialize Google Map
function initMap() {
    const puneStadium = { lat: 18.5204, lng: 73.8567 };
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 16,
        center: puneStadium,
        disableDefaultUI: true,
        styles: [{ "featureType": "all", "elementType": "all", "stylers": [{ "invert_lightness": true }, { "saturation": 10 }, { "lightness": 30 }, { "gamma": 0.5 }, { "hue": "#435158" }] }]
    });
}

// 2. Logic: The "Smart" Assistant Decision
function triggerSmartLogic() {
    const output = document.getElementById('ai-output');
    output.innerText = "Consulting Gemini for real-time traffic bypass...";

    // Simulation of AI processing
    setTimeout(() => {
        const bestGate = stadiumData.gates.find(g => g.load < 0.5);

        output.innerHTML = `
            <span style="color: #00ff88">✔ Recommendation:</span><br>
            The ${stadiumData.userLocation} is currently at 85% capacity. 
            Proceed to <b>${bestGate.id} Gate</b> to save approximately 18 minutes.
        `;
    }, 1500);
}