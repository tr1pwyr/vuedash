<template>
	<div id="drop-down">
		
		<!-- This is the "clock", but really it's an example of using the useInterval -->
		
		<div id="display-time">{{ displayTime }}</div>

		<div class="d-flex justify-content-between">

			<section class="container drop-downs">
				<div class="d-flex justify-content-center ">
					
					<div class="drop-down-icons">
						<BIconFire />
					</div>
					
					<select id="selected-tab" name="selected-tab" v-model="link" class="form-control main">
						<option v-for="l in links" :key="l">{{ l }}</option>
					</select>
					
					<transition name="fade">
						<div class="rating"> {{ risk }}% </div>
					</transition>

				</div>
			</section>

			<section class="container drop-downs">
				<div class="d-flex justify-content-start">
					<div class="drop-down-icons">
						<BIconShieldFillCheck />
					</div>
					<select id="selected-tab" name="selected-tab" v-model="choice" class="form-control main">
						<option v-for="c in choices" :key="c">{{ c }}</option>
					</select>
					<transition name="fade">
						<div class="rating"> {{ rating }}% </div>
					</transition>
				</div>

			</section>

		</div>
	</div>
</template>

<script setup>
import { ref, watch, computed, onBeforeUnmount } from 'vue'
import Swal from "sweetalert2";
import { BIconFire, BIconShieldFillCheck } from "bootstrap-icons-vue";
import { useInterval } from '../../js/useInterval';

const choices = ['Reset Data', 'Update Data', 'Reboot System', 'Network Sec', 'IP Address Log', 'Threats', 'Cloud Services', 'User Devices', 'Sec Systems']
const choice = ref(choices[0]);
const links = ['VueDash.org', 'Tech Posts', 'Priv-Mssg.com', 'HackGuardia', 'TripKendall.com', 'Tr1pwyr@X', 'BitHost', 'Cloudflare', 'Github']
const link = ref(links[0]);
const answer = ref('')
const loading = ref(false)
const rating = ref(93)
const risk = ref(16)
const displayTime = ref('')
const time = ref(new Date());

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
			rating.value -= 4;
			risk.value += 3
			break;
		case 4:
			risk.value -= 2;
			rating.value += 3
			break;
		case 5:
			rating.value -= 4;
			risk.value += 2
			break;
		case 6:
			rating.value += 3;
			risk.value += 3;
			break;
		case 7:
			rating.value -= 4;
			risk.value -= 4
			break;
		default:
			rating.value++;
			risk.value--;
			break;
	}
}

const handleClick = async (url) => {
	try {
		window.location.href = url;
	} catch(error){
		console.log(error)
	} finally {

	}
}

const pulse= async => {
	const randomNumber = Math.floor(Math.random() * 8) + 1;
	if (randomNumber === 7) {
		updateData();
		console.log('The random number is 7!');
	} else {
		// console.log('The random number is not 7:', randomNumber);
	}
}

watch(link, async () => {
	try {
		updateData();
		answer.value = 'yes'

		if (link.value=='VueDash.org'){
			handleClick('/')
		}

		if (link.value=='Tech Posts'){
			handleClick('https://tech.foundzed.com')
		}

		if (link.value=='Priv-Mssg.com'){
			handleClick('https://priv-mssg.com')
		}

		if (link.value=='TripKendall.com'){
			handleClick('https://tripkendall.com')
		}

		if (link.value=='Tr1pwyr@X'){
			handleClick('https://twitter.com/tr1pwyr')
		}

		if (link.value=='BitHost'){
			handleClick('https://bithost.io')
		}

		if (link.value=='Cloudflare'){
			handleClick('https://cloudflare.com')
		}

		if (link.value=='Github'){
			handleClick('https://github.com/tr1pwyr')
		}


	} catch (error) {
		answer.value = 'Error! Could not reach the API. ' + error
	} finally {
		loading.value = false
	}
})

watch(choice, async () => {
	try {
		updateData();
		// handleClick();
		answer.value = 'yes'
	} catch (error) {
		answer.value = 'Error! Could not reach the API. ' + error
	} finally {
		loading.value = false
	}
})
 
function intervalHandler() {
	time.value = new Date();
	pulse();
}

useInterval(intervalHandler);
displayTime.value = computed(() => time.value.toTimeString());

onBeforeUnmount(() => {
	displayTime.value = null
});

</script>

<style scoped>

#drop-down{
}

.drop-downs{
	margin: none!important;
}

#display-time {
	text-align: right;
	margin: 3.5rem 2.5rem 2rem 0;
	font-size: 13px;
	color: #555;
}

.drop-down-icons {
	color: #CCCCCC;
	font-size: 2.25rem;
	margin-right: 5px;
	margin-top: -4px;
}

.dark .drop-down-icons {
	color: #222222;
}

.rating {
	color: #CCCCCC;
	font-size: 2.25rem;
	margin-left: 5px;
	margin-top: -2px;
	font-weight: 800;
	letter-spacing: -.1rem;
}

.dark .rating {
	color: #222222;
}

#selected-tab {
	max-width: 320px;
	background-color: #FFFFFF;
	border: 2px solid #cccccc50;
	color: #1e033a80!important;
}

#selected-tab:hover {
	background-color: #FFFFFF !important;
	color: #1e033a80!important;
	border: 2px solid #1e033a50!important;
}

.dark #selected-tab {
	background-color: #151515;
	border: 2px solid #2c2c2c;
	color: #dae0e77d !important;
}

.dark #selected-tab:hover {
	background-color: #101010 !important;
	color: #dae0e7 !important;
	border: 2px solid rgba(255, 255, 255, .25);
}
</style>