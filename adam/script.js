const Http = new XMLHttpRequest();
const url='http://api.weatherbit.io/v2.0/forecast/hourly?key=63905b681ef44e068d0331081d44c8e8&postal_code=50010&hours=168'
Http.open("GET", url);
Http.send();

const hour = 0;

Http.onreadystatechange = (e) => {
    const apiQuery = JSON.parse(Http.responseText);
    console.log(apiQuery.data[hour].weather.description)
    
    day0 = apiQuery.data.slice(0, 23);
    day1 = apiQuery.data.slice(24, 47);
    day2 = apiQuery.data.slice(48, 71);
    day3 = apiQuery.data.slice(72, 95);
    day4 = apiQuery.data.slice(96, 119);
    day5 = apiQuery.data.slice(120, 143);
    day6 = apiQuery.data.slice(144, 167);

    day0Temperature = apiQuery.data[hour].temp;
    day1Temperature = apiQuery.data[hour].temp;
    day2Temperature = apiQuery.data[hour].temp;
    day3Temperature = apiQuery.data[hour].temp;
    day4Temperature = apiQuery.data[hour].temp;
    day5Temperature = apiQuery.data[hour].temp;
    day6Temperature = apiQuery.data[hour].temp;

    day0WeatherDescription = apiQuery.data[hour].weather.description;
    day1WeatherDescription = apiQuery.data[hour].weather.description;
    day2WeatherDescription = apiQuery.data[hour].weather.description;
    day3WeatherDescription = apiQuery.data[hour].weather.description;
    day4WeatherDescription = apiQuery.data[hour].weather.description;
    day5WeatherDescription = apiQuery.data[hour].weather.description;
    day6WeatherDescription = apiQuery.data[hour].weather.description;

    console.log(day0WeatherDescription)
}