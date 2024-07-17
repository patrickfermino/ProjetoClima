
document.querySelector('#search').addEventListener('submit', async (event)=>{
    event.preventDefault();
    
    const cityName = document.querySelector('#city_name').value;

    if (!cityName){
        return showAlert("Você precisa digitar uma cidade");
    }       
   
        const apiKey = 'ef2177cfa077b801391d46ad9ef0b17e';
        const apiUrl =  `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(cityName)}&appid={apiKey}$units=metric&Lang=pt_br`;
        const results = await fetch(apiUrl);
        const json = await results.json();

        if(json.cod === 200){
            showInfo({
                city: json.name,
                country: json.sys.country,
                temp: json.main.temp,
                temMax: json.main.temp_max,
                temMain: json.main.temp_min
             /*  description: json.weather[0].description,
               tempIcon: json.weather[0].icon,
               windSpeed: json.wind.speed,
               humidity: json.main.humidity,*/
            });
            
        }else {
            showAlert('Não foi possível localicar...')
        }
    
});

function showInfo(json){
    showAlert('');

    document.querySelector('#weather').classList.add('show');

    document.querySelector('#title').innerHTML = `${json.city}`, `${json.country}`; 

}

function showAlert(msg){
    document.querySelector('#alert').innerHTML = msg;
}