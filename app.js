function triggerSmartLogic() {
    const output = document.getElementById('ai-output');
    output.style.opacity = "0.5";
    output.innerText = "Recalculating flow vectors...";

    setTimeout(() => {
        output.style.opacity = "1";
        // Logic: Compare Gate Loads
        const nLoad = 0.82;
        const wLoad = 0.15;

        // Visual update of stats
        document.getElementById('north-load').innerText = "82%";
        document.getElementById('west-load').innerText = "15%";
        document.getElementById('wait-time').innerText = "22m";

        output.innerHTML = "<b>Bottleneck Detected:</b> North Gate is oversaturated. Path to <b>West Gate</b> via Tunnel A4 is 16 mins faster.";
    }, 800);
}

function triggerEmergency() {
    document.body.classList.add('emergency-active');
    document.getElementById('ai-output').innerHTML = "<b>⚠️ CRITICAL ALERT:</b> Emergency protocols active. Gates 1-4 are now Exit-Only. Follow floor lights to the nearest safe zone.";
}

function initMap() {
    try {
        const map = new google.maps.Map(document.getElementById("map"), {
            center: { lat: 18.5204, lng: 73.8567 },
            zoom: 17,
            disableDefaultUI: true,
            // ... your styles
        });
    } catch (error) {
        console.log("Map failed to load, but Assistant Logic is active.");
        document.getElementById('map').innerHTML =
            `<div style="display:flex; justify-content:center; align-items:center; height:100%; color:#555; text-align:center; padding:20px;">
                Spatial Data Offline <br> (API Key Required for Production)
             </div>`;
    }
}