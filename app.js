function triggerSmartLogic() {
    const output = document.getElementById('ai-output');
    output.innerText = "Consulting Gemini for live bypass routes...";

    // Mocking real-time sensor data
    const sensors = {
        northGate: Math.random(), // Random load 0.0 to 1.0
        westGate: Math.random(),
        concessionsBusy: true
    };

    setTimeout(() => {
        let recommendation = "";

        // Logical Decision Tree
        if (sensors.northGate > 0.7) {
            recommendation = "🚨 <b>High Density Alert:</b> North Gate is bottlenecked. ";
            recommendation += (sensors.westGate < 0.5)
                ? "Redirect to <b>West Gate</b> for a 2-minute entry."
                : "All gates are currently high-load. Please remain in your zone for 10 minutes to avoid surges.";
        } else {
            recommendation = "✅ <b>Flow Optimal:</b> Your current route is the fastest. Estimated entry: 4 minutes.";
        }

        output.innerHTML = recommendation;
    }, 1200);
}