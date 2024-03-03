<script async>
	import { getWeather } from '../services/weather.js'
</script>

<h1>Bar Taperia Castillo</h1>
<!-- 
{#await getWeather then weather}
	<h2>{weather.location.name}, {weather.location.region}</h2>
  <h2>{weather.location.localtime}, {weather.current.last_updated}</h2>
{/await} -->


<style>
	* {
		font-family:
			BlinkMacSystemFont,
			-apple-system,
			system-ui,
			'Segoe UI',
			Roboto,
			Oxygen,
			Ubuntu,
			Cantarell,
			'Open Sans',
			'Helvetica Neue',
			sans-serif;
	}
</style>
