<script setup>
import { ref, onMounted } from 'vue';
import {
	BIconCurrencyBitcoin, BIconBarChartFill, BIconHeartFill,
	BIconSun, BIconPieChartFill, BIconCurrencyExchange
} from "bootstrap-icons-vue";

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

<template>
	<div class="container my-5">
		<div class="row m-5">
			<!-- <div>
    <div v-if="fetchBTCPrice">
      <p v-for="(item, index) in fetchBTCPrice.bpi.USD" :key="index">{{ item }}</p>
    </div>
    <div v-else>
      <p>Loading...</p>
    </div>
  </div> -->
			<div class="col-md-4 mb-4">
				<div class="card card-body h-100 hack">
					<div class="d-flex align-content-center flex-wrap">
						<a href="#" class="icon-link">
							<BIconBarChartFill /> NET 404.5 Mb/S
						</a> This is very fast for here
					</div>
				</div>
			</div>

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

			<div class="col-md-4 mb-4">
				<div class="card card-body h-100 info">
					<div class="d-flex align-content-center flex-wrap">
						<a href="#" class="icon-link">
							<BIconHeartFill /> VUE VER <span class="version">3.3.8</span>
						</a> This App's Vue Version.
					</div>
				</div>
			</div>

			<div class="col-md-4 mb-4">
				<div class="card card-body h-100 poll">
					<div class="d-flex align-content-center flex-wrap">
						<a href="#" class="icon-link">
							<BIconPieChartFill />
							Trump <span class="poll-percentage">43</span> Biden <span class="poll-percentage">35</span>
						</a> VDash Scrape and Compiled...
					</div>
				</div>
			</div>

			<div class="col-md-4 mb-4">
				<div class="card card-body h-100 hack">
					<div class="d-flex align-content-center flex-wrap">
						<a href="#" class="icon-link">
							<BIconSun /> 78 Degrees
						</a> Today in the Fla
					</div>
				</div>
			</div>

			<div class="col-md-4 mb-4">
				<div class="card card-body h-100 success">
					<div class="d-flex align-content-center flex-wrap">
						<a href="#" class="icon-link">
							<BIconCurrencyExchange /> Crypto:<span class="up">Up</span>
						</a> The Broader Crypto Market
					</div>
				</div>
			</div>

		</div>
	</div>
</template>

<style>
.icon-link {
	display: block;
	text-decoration: none;
	font-weight: 800;
	font-size: 1.33rem;
	letter-spacing: -1px;
	word-spacing: -1px;
	padding-bottom: .33rem;
	margin-top: -.25rem;
}

.row {
	display: flex;
	flex-wrap: wrap;
}

.col-md-4 {
	display: flex;
}

.card {
	margin-bottom: .75rem;
	cursor: pointer;
}

.card a {
	text-decoration: none;
}

.info {
	border: 1px solid #1d9bf0;
	background-color: #1d9bf0;
}

.info a,
.info {
	color: #f2f2f2
}

.info:hover{
	background-color: #7856ff;
} 

.info .version{color:#1b3cd18f;}


.dark .info {
	border: 1px solid #f4c022;
	color: #f4c022;
	background-color: rgba(52, 46, 24, .8);
}

.dark .info:hover {
	border: 1px solid #fdcd3c;
	color: #fccb3a;
	background-color: #373119;
}

.dark .info a, .info:hover .version {
	color: #fccb3a;
}

.dark .info:hover a {
	color: #fff;
}

.dark .info .version {
	color: #ffe7a0;
}

.success a {
	color: #ffffff;
}

/* .success a {color: #b0f2c3;} */
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

.dark .vue a {
	color: rgba(255, 255, 255, .25);
}

.hack a {
	color: #ffffff;
}

.dark .vue:hover a,
.hack:hover a {
	color: #fff;
}

.hack {
	border: 1px solid #1b3cd1;
	color: #ffffff !important;
	background-color: #1b3cd1;
	font-weight: 700;
}

.hack:hover {
	border: 1px solid #2194ff;
	color: #1a90ff !important;
	background-color: #031070 !important;
}

.dark .hack {
	border: 1px solid #0171d9;
	color: #0171d9 !important;
	background-color: rgb(8, 31, 57, .9);
}

.dark .hack:hover {
	border: 1px solid #0177e5;
	color: #0177e5 !important;
	background-color: #06172a !important;
}


.poll a {
	color: #ffffff;
}

.poll {
	border: 1px solid #e60000;
	color: #FFFFFF;
	background-color: #e60000;
}

.poll:hover,
.bitcoin:hover {
	border: 1px solid #f91880;
	background-color: #f91880;
	color: #ffffff;
}

.dark .poll {
	border: 1px solid #ce5353;
	color: #ce5353;
	background-color: rgba(45, 26, 33, .9);
}

.dark .poll:hover {
	border: 1px solid #de6767;
	color: #e16161;
	background-color: #25151b;
}

.dark .poll a:hover {
	color: #de6767;
}

.poll-percentage {
	color: #ffc1c1;
}
</style>