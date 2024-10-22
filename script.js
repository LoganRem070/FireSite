document.addEventListener('DOMContentLoaded', () => {
    function fetchWeather() {
        fetch('https://api.weatherapi.com/v1/current.json?q=96008&key=814b348d54604319806202734241910')
            .then(response => response.json())
            .then(data => {
                document.getElementById('temp').innerHTML = `${data.current.temp_f}&deg;F`;
                document.getElementById('humidity').innerHTML = `<span class="superDuperKYS">Humidity:</span><br>${data.current.humidity}%`;
                document.getElementById('feelslike_f').innerHTML = `<span class="superDuperKYS">Real Feel:</span><br>${data.current.feelslike_f}&deg;F`;
                document.getElementById('wind_mph').innerHTML = `<span class="superDuperKYS">Wind Speed:</span><br>${data.current.wind_mph} mph`;
                document.getElementById('sky_text').innerHTML = `${data.current.condition.text}`;
                document.getElementById('wind_dir').innerHTML = `<span class="superDuperKYS">Wind Direction:</span><br>${data.current.wind_dir}`;
                document.getElementById('wind_degree').innerHTML = `<span class="superDuperKYS">Wind Degree:</span><br>${data.current.wind_degree}&deg;`;
                document.getElementById('pressure').innerHTML = `<span class="superDuperKYS">Pressure:</span><br>${data.current.pressure_in} in`;
                document.getElementById('precip').innerHTML = `<span class="superDuperKYS">Precipitation:</span><br>${data.current.precip_in} in`;
                document.getElementById('dewpoint').innerHTML = `<span class="superDuperKYS">DewPoint:</span><br>${data.current.dewpoint_f}&deg;F`;
                document.getElementById('vis_range').innerHTML = `<span class="superDuperKYS">Visibility:</span><br>${data.current.vis_miles} mi`;
                document.getElementById('uv').innerHTML = `<span class="superDuperKYS">UV:</span><br>${data.current.uv}`;
                document.getElementById('gust').innerHTML = `<span class="superDuperKYS">Wind Gust:</span><br>${data.current.gust_mph} mph`;
                document.getElementById('heat_index').innerHTML = `<span class="superDuperKYS">Heat Index:</span><br>${data.current.heatindex_f}&deg;F`;
                document.getElementById('lastUpdt').innerHTML = `<span class="superDuperKYS">Last Updated:</span><br>${data.current.last_updated}`;
            })
            .catch(error => console.error('Error fetching weather data:', error));
    }

    fetchWeather(); // Initial fetch
    setInterval(fetchWeather, 60000); // Fetch every 60 seconds (60000 milliseconds)

    var count = 1;
    function newBG() {
        count++;
        if (count == 1) {
            document.getElementById('top-section').style.backgroundImage = "url('bg1.png')";
        } else if (count == 2) {
            document.getElementById('top-section').style.backgroundImage = "url('bg2.png')";
            count = 0; //MAKE SURE THIS ENDS UP IN THE LAST IF STATEMENT
        }
    }

    newBG(); // Initial fetch
    setInterval(newBG, 300000); // Fetch every 5 minutes
});