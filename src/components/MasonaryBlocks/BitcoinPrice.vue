<style>
.success a {
	color: #ffffff;
}

.success a:hover {
	color: #fff;
}

.success .up {
	color: #e7ff7a;
}

.dark .up {
	color: #49add8;
}

.success {
	border: 1px solid #00ba7c;
	color: #ffffff;
	background-color: #00ba7c;
}

.success:hover {
	border: 1px solid #008055;
	color: #ffffff;
	background-color: #008055;
}

.dark .success {
	border: 1px solid #2c96c3;
	color: #2c96c3;
	background-color: #102635;
}

.dark .success:hover {
	border: 1px solid #49add8;
	color: #3caddd;
	background-color: #0d202c;
}
</style>

<template>
  <!-- BITCOIN PRICE FROM COINDESK! -->
  <div class="col-md-4 mb-4">
    <div class="card card-body h-100 success">
      <div class="d-flex align-content-center flex-wrap">
        <a href="#" class="icon-link">
          <BIconCurrencyBitcoin /><span class="btc">BTC </span>
          <span v-if="fetchBTCPrice">
            {{ fetchBTCPrice.bpi.USD.rate }}
          </span>
          <span v-else>
            <p>Loading data from: api.coindesk...</p>
          </span>
        </a> Data from: api.coindesk
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { BIconCurrencyBitcoin } from "bootstrap-icons-vue";

const fetchBTCPrice = ref(null);
const apiUrl = 'https://api.coindesk.com/v1/bpi/currentprice/USD.json';

onMounted(async () => {
	try {
		const response = await fetch(apiUrl);
		if (response.ok) {
			// Parse response as JSON
			const data = await response.json();
			// Update the fetched data
			fetchBTCPrice.value = data;
			console.log(typeof (fetchBTCPrice))
		} else {
			console.error('Failed to fetch data:', response.statusText);
		}
	} catch (error) {
		console.error('Error fetching data:', error);
	}
});


</script>
