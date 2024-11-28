async function fetchWeather(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=882160e8b7d98e1be1c28de45851c9ea&units=metric`;

    try {
        
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Weather data not found');
        }
        const data = await response.json();

        
        const temperature = data.main.temp;
        const weatherDescription = data.weather[0].description;
        const humidity = data.main.humidity;
        const windSpeed = data.wind.speed;

        
        document.getElementById('weather-result').innerHTML = `
            <h2>Weather in ${city}</h2>
            <p>Temperature: ${temperature}°C</p>
            <p>Condition: ${weatherDescription}</p>
            <p>Humidity: ${humidity}%</p>
            <p>Wind Speed: ${windSpeed} m/s</p>
        `;
    } catch (error) {
        console.error('Error fetching weather data:', error);
        document.getElementById('weather-result').innerHTML = `<p>Error fetching data. Please try again later.</p>`;
    }
}

document.getElementById('weather-form').addEventListener('submit', function(event) {
    event.preventDefault(); 
    const city = document.getElementById('city-input').value;
    fetchWeather(city);
});