
document.querySelector('#search').addEventListener('submit', async (event)=>{
    event.preventDefault();
    
    const cityName = document.querySelector('#city_name').value;

    if (!cityName){
        return showAlert("Você precisa digitar uma cidade");
    }       
        const apiKey = 'd3ea3e474f4d84b06bdf2ecfb0284e84'
        const apiUrl =  'api.openweathermap.org/data/2.5/forecast?q=${encodeURI(cityName)}&appid=${apiKey}r$units=metric&Lang=pt_br'
        const results = await fetch(apiUrl);
        const json = await results.json();

        if(json.cod === 200){
            
        }else {
            showAlert('Não foi possível localicar...')
        }
    
});

function showAlert(msg){
    document.querySelector('#alert').innerHTML = msg;
}