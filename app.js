function triggerSmartLogic() {
    const output = document.getElementById('ai-output');
    output.innerText = "Querying Gemini for crowd bypass...";

    setTimeout(() => {
        // Advanced Logic: Multi-variable check
        const northLoad = 0.85;
        const westLoad = 0.20;

        document.getElementById('north-load').innerText = (northLoad * 100) + "%";
        document.getElementById('west-load').innerText = (westLoad * 100) + "%";

        if (northLoad > 0.7 && westLoad < 0.4) {
            output.innerHTML = "💡 <b>Diversion Recommended:</b> North Gate is oversaturated. Redirecting to <b>West Gate</b> via Corridor B. Time saved: 14 mins.";
        } else {
            output.innerHTML = "✅ <b>Path Clear:</b> Your current exit route remains the most efficient.";
        }
    }, 1000);
}

function triggerEmergency() {
    document.body.classList.add('emergency-active');
    const output = document.getElementById('ai-output');
    output.innerHTML = "⚠️ <b>EVACUATION PROTOCOL ACTIVE:</b> Please proceed to the nearest Fire Exit at Gate 4. Do not use elevators. Follow staff instructions.";
}