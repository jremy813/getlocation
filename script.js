const ipLocation = document.getElementById("ip");
const country = document.getElementById("country");
const city = document.getElementById("city");
const isp = document.getElementById("isp");
const latitude = document.getElementById("latitude");
const longitude = document.getElementById("longitude");
const goodbyeMessage = document.getElementById("ending");

function getLocation() {
  fetch("https://get.geojs.io/v1/ip/geo.json/")
    .then(res => res.json())
    .then(data => {
      ipLocation.textContent = `IP Address: ${data.ip}`;
      country.textContent = `Location: ${data.country_code3}`;
      city.textContent = `City: ${data.city}`;
      isp.textContent = `ISP: ${data.organization_name}`;
      latitude.textContent = `Latitude: ${data.latitude}`;
      longitude.textContent = `Longitude: ${data.longitude}`;
      goodbyeMessage.textContent = `How's the weather in ${data.city}, ${data.region}? :)`;
    });
}

getLocation();
