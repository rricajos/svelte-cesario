
const url = 'https://weatherapi-com.p.rapidapi.com/current.json?q=42.270873%2C%20-7.650826';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};



export async function getWeather() {
  try {
    const response = await fetch(url, options);
    const result = await response.text();
    console.log(result);
    return result;
  } catch (error) {
    console.error(error);
  }
}

