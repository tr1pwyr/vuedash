<script setup>
import CryptoMarket from '../MasonaryBlocks/CryptoMarket.vue'
import BitcoinPrice from '../MasonaryBlocks/BitcoinPrice.vue';
import VueVersion from '../MasonaryBlocks/VueVersion.vue'
import LatestPoll from '../MasonaryBlocks/LatestPoll.vue'
import NetworkStats from '../MasonaryBlocks/NetworkStats.vue'
import LatestWeather from '../MasonaryBlocks/LatestWeather.vue'
</script>

<template>
	<div class="container my-5">
		<div class="row m-5">
			<NetworkStats />
			<BitcoinPrice />
			<VueVersion />
			<LatestPoll />
			<LatestWeather />
			<CryptoMarket />
		</div>
	</div>
</template>
