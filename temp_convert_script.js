function convertTemperature() {
    const temperatureInput = document.getElementById('temperatureInput').value;
    const unitSelect = document.getElementById('unitSelect').value;
    let convertedTemp;
  
    if (isNaN(temperatureInput)) {
      alert('Please enter a valid number for temperature');
      return;
    }
  
    const temperature = parseFloat(temperatureInput);
  
    switch (unitSelect) {
      case 'celsius':
        convertedTemp = {
          fahrenheit: (temperature * 9 / 5) + 32,
          kelvin: temperature + 273.15
        };
        break;
      case 'fahrenheit':
        convertedTemp = {
          celsius: (temperature - 32) * 5 / 9,
          kelvin: (temperature - 32) * 5 / 9 + 273.15
        };
        break;
      case 'kelvin':
        convertedTemp = {
          celsius: temperature - 273.15,
          fahrenheit: (temperature - 273.15) * 9 / 5 + 32
        };
        break;
      default:
        break;
    }
  
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `Converted Temperature:
      ${convertedTemp.celsius ? convertedTemp.celsius.toFixed(2) + ' °C' : ''}
      ${convertedTemp.fahrenheit ? convertedTemp.fahrenheit.toFixed(2) + ' °F' : ''}
      ${convertedTemp.kelvin ? convertedTemp.kelvin.toFixed(2) + ' K' : ''}`;
  }
  