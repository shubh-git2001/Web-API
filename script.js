const btn = document.getElementById("search-btn")
const input = document.getElementById("city_btn")

const cityName = document.getElementById('city-name')
const cityTime = document.getElementById('city-time')
const cityTemp = document.getElementById('city-temp')

async function getData (cityName) {
   const promise = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=70b5aef2785b4a73992140943250208&q=${cityName}&aqi=yes`
   );
   return await promise.json();

}

btn.addEventListener('click', async () => {
    const value = input.value;
    const result = await getData(value);
    console.log(result);
    cityName.innerText = `${result.location.name}, ${result.location.region} - ${result.location.country}`;
    cityTime.innerText = result.location.localtime;
    cityTemp.innerText = result.current.temp_c;
});




