const text = document.querySelector('.text')
const button = document.querySelector('.button')
const cityname = document.querySelector('.cityname')
const desc = document.querySelector('.desc')
const temp = document.querySelector('.temp')
const humidity = document.querySelector('.humidity')
const tem = document.querySelector('.tem')
const humid = document.querySelector('.humid')


button.addEventListener('click', function() {
    if(text.value == '') {
        alert('Please enter City name')
    }
    else{
    fetch('http://api.openweathermap.org/data/2.5/weather?q='+text.value+'&appid=38beb26a1b7214da434e11316ea11a2c')
    .then(Response => Response.json())
    .then(data => {
        const namevalue = data['name']
        const tempvalue = data['main']['temp']
        const descvalue = data['weather'][0]['description']
        const humidityvalue = data['main']['humidity']

        tem.innerHTML = 'Temperature(in \u00B0C):'
        humid.innerHTML = 'Humidity(%):'

        cityname.innerHTML = namevalue
        temp.innerHTML = parseFloat((tempvalue - 273).toFixed(2))
        humidity.innerHTML = humidityvalue
        desc.innerHTML = descvalue
    })
    .catch(err => alert('Wrong City Name'))
    }
})