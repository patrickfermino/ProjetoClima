document.querySelector('#search').addEventListener('submit', async (event) => {
    event.preventDefault();
  
    const cityName = document.querySelector('#city_name').value;
  
    if (!cityName === 0) {
      return showAlert("Você precisa digitar uma cidade");
    }
  
    const apiKey = '4026b41927d70f0610c4ec4310378c96'; // Substitua pela sua chave de API
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(cityName)}&appid=${apiKey}&units=metric&lang=pt_br`;
 


  
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error(`Erro ao buscar o clima gatinho(a): ${response.status}`);
      }
      const data = await response.json();
      console.log(data); // Aqui você pode processar os dados recebidos
      // Atualize o DOM com os dados recebidos
      document.getElementById('title').textContent = data.name;
      document.getElementById('temp_value').innerHTML = `${data.main.temp} <sup>C°</sup>`;
      document.getElementById('temp_description').textContent = data.weather[0].description;
      document.getElementById('temp_max').innerHTML = `${data.main.temp_max} <sup>C°</sup>`;
      document.getElementById('temp_min').innerHTML = `${data.main.temp_min} <sup>C°</sup>`;
      document.getElementById('umidity').textContent = `${data.main.humidity}%`;
      document.getElementById('vento').textContent = `${data.wind.speed} km/h`;
      document.querySelector('#temp_img').setAttribute('src', `https://openweathermap.org/img/wn/${json.temp_img}@2x.png`)

    } catch (error) {
      console.error('Erro ao buscar os dados:', error);
      showAlert('Erro ao buscar o clima gatinho(a)...');
    }
  });
  
  function showAlert(msg) {
    document.querySelector('#alert').innerHTML = msg;
  }
 