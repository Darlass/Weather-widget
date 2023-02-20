const url = "https://api.openweathermap.org/data/2.5/weather?lat=54.53&lon=73.23&appid=5d066958a60d315387d9492393935c19&units=metric";

fetch(url).then((response) =>
  response.json().then(function (data) {
    console.log(data);
    const icon = data.weather[0].icon;
    const img = document.createElement("img");
    img.src = `http://openweathermap.org/img/w/${icon}.png`;
    document.getElementById("name").innerHTML = data.name;
    document.getElementById("icon").appendChild(img);
    document.getElementById("temp").innerHTML = data.main.temp;
    document.getElementById("pasc").innerHTML = data.main.pressure;
    document.getElementById("vlash").innerHTML = data.main.humidity;
    document.getElementById("descr").innerHTML = data.weather[0].description;
    document.getElementById("U_vetr").innerHTML = data.wind.speed;
    document.getElementById("deg_vetr").innerHTML = data.wind.deg;
  })
);
