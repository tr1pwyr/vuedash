<template>
	<div class="drop-downs-wrapper">

		<section class="container drop-downs">
			<div class="d-flex justify-content-center ">
				<div class="drop-down-icons">
					<BIconFire />
				</div>
				<select id="selected-tab" name="selected-tab" v-model="choice" class="form-control main">
					<option v-for="c in choices" :key="c">{{ c }}</option>
				</select>
				<transition name="fade">
					<div class="rating"> {{ rating }}% </div>
				</transition>
			</div>
		</section>

		<section class="container drop-downs">
			<div class="d-flex justify-content-start">
				<div class="drop-down-icons">
					<BIconShieldFillCheck />
				</div>
				<select id="selected-tab" name="selected-tab" v-model="link" class="form-control main">
					<option v-for="l in links" :key="l">{{ l }}</option>
				</select>
				<transition name="fade">
					<div class="rating"> {{ risk }}% </div>
				</transition>
			</div>
		</section>

	</div>
</template>

<script setup>
import { ref, watch } from 'vue'
import Swal from "sweetalert2";
import { BIconFire, BIconShieldFillCheck } from "bootstrap-icons-vue";

const choices = ['AI Automation', 'Malware', 'Threat Detection', 'Network Sec', 'IP Address Log', 'WW Threats', 'Cloud Services', 'User Devices', 'Sec Systems']
const choice = ref(choices[0]);
const links = ['Reset Logs', 'Update Data', 'Reboot System', 'Network Sec', 'IP Address Log', 'WW Threats', 'Cloud Services', 'User Devices', 'Sec Systems']
const link = ref(links[0]);
const answer = ref('')
const loading = ref(false)
const rating = ref(93)
const risk = ref(16)

const updateData = async () => {
	const n = Math.floor(Math.random() * 10)
	switch (n) {
		case 1:
			rating.value++;
			risk.value--;
			break;
		case 2:
			rating.value--;
			risk.value++;
			break;
		case 3:
			rating.value -= 2;
			risk.value +=3
			break;
		case 4:
			risk.value += 2;
			rating.value +=3
			break;
		case 5:
			rating.value -= 2;
			risk.value +=4
			break;
		case 6:
			rating.value += 3;
			risk.value += 3;
			break;
		case 7:
			rating.value -= 2;
			risk.value -=2
			break;
		default:
			rating.value++;
			risk.value--;
			break;
	}
}

const handleClick = async () => {
	Swal.fire({
		title: "Set Range",
		icon: "question",
		input: "range",
		inputLabel: "Set Upper Limit",
		inputAttributes: {
			min: "8",
			max: "120",
			step: "1"
		},
		inputValue: 25
	}).then(
		console.log(input)
	).catch(
		console.log('watch fired')
	)
}

watch(link, async () => {
	try {
		console.log('watch fired')
		updateData();
		// handleClick();
		answer.value = 'yes'
	} catch (error) {
		answer.value = 'Error! Could not reach the API. ' + error
	} finally {
		loading.value = false
	}
})

watch(choice, async () => {
	try {
		console.log('watch fired')
		updateData();
		// handleClick();
		answer.value = 'yes'
	} catch (error) {
		answer.value = 'Error! Could not reach the API. ' + error
	} finally {
		loading.value = false
	}
})

</script>

<style scoped>

.drop-downs-wrapper{
	margin-top: 5rem;
	
}
.drop-down-icons {
	color: #222222;
	font-size: 2.25rem;
	margin-right: 5px;
	margin-top: -2px;
}

.rating {
	color: #222222;
	font-size: 2.25rem;
	margin-left: 5px;
	margin-top: -2px;
	font-weight: 800;
	letter-spacing: -.1rem;
}

#selected-tab {
	max-width: 320px;
	background-color: #151515;
	border: 2px solid #2c2c2c;
	color: #dae0e77d !important;
}

#selected-tab:hover {
	background-color: #101010 !important;
	color: #dae0e7 !important;
	border: 2px solid rgba(255, 255, 255, .25);
}
</style>