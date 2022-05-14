// api = 02f418e834d8478b1268dab0444fba8b

// api.openweathermap.org/data/2.5/forecast?q=Los Angeles&appid=02f418e834d8478b1268dab0444fba8b

let nameCity = document.querySelector("input");
nameCity.addEventListener("keyup", function (e) {
	if (e.key == "Enter") {
		let top = document.getElementById("mainToday");
		let bottom = document.querySelectorAll("div.future");
		top.style.backgroundColor = "yellow";
		for (var i = 0; i < bottom.length; i++) {
			bottom[i].className = "futures";
		}
		getWeather(e.target.value);
	} else {
		return;
	}
});

function getWeather(city) {
	var xhr = new XMLHttpRequest();
	xhr.open(
		"GET",
		"http://api.openweathermap.org/data/2.5/forecast?q=" +
			encodeURIComponent(city) +
			"&appid=02f418e834d8478b1268dab0444fba8b"
	);
	xhr.addEventListener("readystatechange", function () {
		if (
			(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) ||
			xhr.status === 0
		) {
			let output = JSON.parse(xhr.responseText);
			valueCallBack(output);
		} else if (
			xhr.readyState === XMLHttpRequest.DONE &&
			xhr.status != 200
		) {
			alert("bad");
		}
	});
	// xhr.open('GET', './city.list.min.json', true);
	// xhr.addEventListener('readystatechange', function() {
	//     if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200 || xhr.status === 0) {
	//         let output = JSON.parse(xhr.responseText);
	//         valueCallBack(output);
	//     } else if (xhr.readyState === XMLHttpRequest.DONE && xhr.status != 200) {
	//         alert('bad');
	//     }
	// });
	xhr.send();

	// var txt = '';
	// var xmlhttp = new XMLHttpRequest();
	// xmlhttp.onreadystatechange = function(){
	// if(xmlhttp.status == 200 && xmlhttp.readyState == 4){
	//     txt = xmlhttp.responseText;
	//     valueCallBack(txt);
	// }
	// };
	// xmlhttp.open("GET","city.list.min.txt",true);
	// xmlhttp.send();

	// var xhr = new XMLHttpRequest();

	// xhr.open('GET', 'city.list.min.json');
	// valueCallBack(xhr.responseText);

	// xhr.send();
	// var rawFile = new XMLHttpRequest();
	// rawFile.open("GET", 'city.list.min.txt', false);
	// rawFile.onreadystatechange = function ()
	// {
	//     if(rawFile.readyState === 4)
	//     {
	//         if(rawFile.status === 200 || rawFile.status == 0)
	//         {
	//             var allText = rawFile.responseText;
	//             valueCallBack(allText);
	//         }
	//     }
	// }
	// rawFile.send(null);
	// xhr.send(null);
}

function valueCallBack(value) {
	// console.log(value['city']['name']);
	console.log(value);
	var city = document.getElementById("cityName");
	var weekDay = document.getElementById("date");
	var weatherIcon = document.getElementById("weatherIcon");
	var temp = document.getElementById("temp");
	var description = document.getElementById("description");

	let dayArray = [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
	];
	const d = new Date();
	let day = d.getDay();
	let dayWeek = dayArray[day];

	var cityName = value["city"]["name"];
	var icon = value["list"]["0"]["weather"]["0"]["icon"];
	var iconurl = "http://openweathermap.org/img/w/" + icon + ".png";
	var temperature = value["list"]["0"]["main"]["temp"];
	var convertedTemp = (parseFloat(temperature) - 273.15) * 1.8 + 32;
	var describe = value["list"]["0"]["weather"]["0"]["description"];

	city.textContent = cityName;
	weekDay.textContent = dayWeek;
	weatherIcon.setAttribute("src", iconurl);
	temp.textContent = convertedTemp.toFixed(2) + " °F";
	description.textContent = describe;

	var wind = document.getElementById("wind");
	var humidity = document.getElementById("humidity");
	var pressure = document.getElementById("pressure");
	var cloud = document.getElementById("cloud");

	let windLevel = value["list"]["0"]["wind"]["speed"];
	let humid = value["list"]["0"]["main"]["humidity"];
	let press = value["list"]["0"]["main"]["pressure"];
	let gloom = value["list"]["0"]["clouds"]["all"];

	wind.textContent = `Wind level: ${windLevel} m/s`;
	humidity.textContent = `Humidity: ${humid} %`;
	pressure.textContent = `Pressure: ${press} hPa`;
	cloud.textContent = `Cloudiness: ${gloom} %`;

	var weekDay1 = document.getElementById("date1");
	var weatherIcon1 = document.getElementById("weatherIcon1");
	var temp1 = document.getElementById("temp1");
	var description1 = document.getElementById("description1");

	var icon1 = value["list"]["8"]["weather"]["0"]["icon"];
	var iconurl1 = "http://openweathermap.org/img/w/" + icon1 + ".png";
	var temperature1 = value["list"]["8"]["main"]["temp"];
	var convertedTemp1 = (parseFloat(temperature1) - 273.15) * 1.8 + 32;
	var describe1 = value["list"]["8"]["weather"]["0"]["description"];

	weekDay1.textContent = dayArray[day + 1];
	weatherIcon1.setAttribute("src", iconurl1);
	temp1.textContent = convertedTemp1.toFixed(2) + " °F";
	description1.textContent = describe1;

	var weekDay2 = document.getElementById("date2");
	var weatherIcon2 = document.getElementById("weatherIcon2");
	var temp2 = document.getElementById("temp2");
	var description2 = document.getElementById("description2");

	var icon2 = value["list"]["16"]["weather"]["0"]["icon"];
	var iconurl2 = "http://openweathermap.org/img/w/" + icon2 + ".png";
	var temperature2 = value["list"]["16"]["main"]["temp"];
	var convertedTemp2 = (parseFloat(temperature2) - 273.15) * 1.8 + 32;
	var describe2 = value["list"]["16"]["weather"]["0"]["description"];

	weekDay2.textContent = dayArray[(day + 2) % 7];
	weatherIcon2.setAttribute("src", iconurl2);
	temp2.textContent = convertedTemp2.toFixed(2) + " °F";
	description2.textContent = describe2;

	var weekDay3 = document.getElementById("date3");
	var weatherIcon3 = document.getElementById("weatherIcon3");
	var temp3 = document.getElementById("temp3");
	var description3 = document.getElementById("description3");

	var icon3 = value["list"]["16"]["weather"]["0"]["icon"];
	var iconurl3 = "http://openweathermap.org/img/w/" + icon3 + ".png";
	var temperature3 = value["list"]["24"]["main"]["temp"];
	var convertedTemp3 = (parseFloat(temperature3) - 273.15) * 1.8 + 32;
	var describe3 = value["list"]["24"]["weather"]["0"]["description"];

	weekDay3.textContent = dayArray[(day + 3) % 7];
	weatherIcon3.setAttribute("src", iconurl3);
	temp3.textContent = convertedTemp3.toFixed(2) + " °F";
	description3.textContent = describe3;

	var weekDay4 = document.getElementById("date4");
	var weatherIcon4 = document.getElementById("weatherIcon4");
	var temp4 = document.getElementById("temp4");
	var description4 = document.getElementById("description4");

	var icon4 = value["list"]["16"]["weather"]["0"]["icon"];
	var iconurl4 = "http://openweathermap.org/img/w/" + icon4 + ".png";
	var temperature4 = value["list"]["32"]["main"]["temp"];
	var convertedTemp4 = (parseFloat(temperature4) - 273.15) * 1.8 + 32;
	var describe4 = value["list"]["32"]["weather"]["0"]["description"];

	weekDay4.textContent = dayArray[(day + 4) % 7];
	weatherIcon4.setAttribute("src", iconurl4);
	temp4.textContent = convertedTemp4.toFixed(2) + " °F";
	description4.textContent = describe4;
}

function getJ() {
	var xhttp = new XMLHttpRequest();
	xhttp.open("GET", "city.list.min.json");
	xhttp.onreadystatechange = function () {
		if (
			(xhttp.readyState === XMLHttpRequest.DONE &&
				xhttp.status === 200) ||
			xhttp.status === 0
		) {
			// let output = JSON.parse(xhttp.responseText);
			console.log(xhttp.responseText);
		} else if (
			xhttp.readyState === XMLHttpRequest.DONE &&
			xhttp.status != 200
		) {
			alert("bad");
		}
	};
	xhttp.send();
}
getJ();

xhr.open("GET", "./city.list.min.json");
xhr.addEventListener("readystatechange", function () {
	if (
		(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) ||
		xhr.status === 0
	) {
		let output = JSON.parse(xhr.responseText);
		valueCallBack(output);
	} else if (xhr.readyState === XMLHttpRequest.DONE && xhr.status != 200) {
		alert("bad");
	}
});
xhr.send();

fetch("city.list.min.txt")
	.then((response) => response.text())
	.then((data) => {
		// Do something with your data
		console.log(data);
	});
