<template>
	<div id="drop-down">
		<SubHeader />
		<div class="d-flex justify-content-between">
			<section class="drop-downs">
				<div class="d-flex justify-content-center ">
					<div class="drop-down-icons">
						<BIconFire />
					</div>
					<select id="selected-tab" class="form-control"
						name="selected-tab" v-model="link">
						<option v-for="l in links" :key="l">{{ l }}</option>
					</select>
					<transition name="fade">
						<div class="rating"> {{ risk }}% </div>
					</transition>
				</div>
			</section>
			<section class="drop-downs" id="ratings-tab">
				<div class="d-flex justify-content-start">
					<div class="drop-down-icons">
						<BIconShieldFillCheck />
					</div>
					<select id="rating-tab" class="form-control" 
						name="selected-tab" v-model="choice">
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
import { ref, watch} from 'vue'
import { BIconFire, BIconShieldFillCheck } from "bootstrap-icons-vue";
import SubHeader from './SubHeader.vue'
// import { useInterval } from '../../js/useInterval';
// import { store } from "../../store";
const choices = ['Reset Data', 'Update Data', 'Reboot System', 'Network Sec', 'IP Address Log', 'Threats', 'Cloud Services', 'User Devices', 'Sec Systems']
const choice = ref(choices[0]);

// Be careful changing this bit, I know you want to use these keys instead of the links array... 
const links = [
	'VueDash.org', 'Tech Posts', 'Priv-Mssg.com', 'HackGuardia', 'TripKendall.com', 'Tr1pwyr@X', 'BitHost', 'Cloudflare', 'Github', 'addy'
]
const link = ref(links[0]);
const linkUrlMap = {
  'VueDash.org': '/',
  'Tech Posts': 'https://tech.foundzed.com',
  'Priv-Mssg.com': 'https://priv-mssg.com',
  'TripKendall.com': 'https://tripkendall.com',
  'Tr1pwyr@X': 'https://twitter.com/tr1pwyr',
  'BitHost': 'https://bithost.io',
  'Cloudflare': 'https://cloudflare.com',
  'Github': 'https://github.com/tr1pwyr',
  'Addy': 'https://app.addy.io/'
};

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
    console.log(error);
  } finally {
    loading.value = false;
  }
};

// const pulse= async => {
// 	const randomNumber = Math.floor(Math.random() * 8) + 1;
// 	if (randomNumber === 7) {
// 		updateData();
// 		console.log('The random number is 7!');
// 	} else {
// 		// console.log('The random number is not 7:', randomNumber);
// 	}
// }

watch(link, async () => {
  try {
    updateData();
    const url = linkUrlMap[link.value];
    if (url) {
      handleClick(url);
    }
		answer.value = 'yes';
  } catch (error) {
    answer.value = 'Error! Could not reach the API. ' + error;
  } finally {
    loading.value = false;
  }
});

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
 

</script>

<style scoped>

#drop-down{
	padding: 3.5rem 0 0 0;
}

#selected-tab, #rating-tab{
	min-width: 300px;
}

@media (max-width: 991.98px) {
	#ratings-tab{
		display: none;
	}
}

.drop-downs{
	margin: 0 3rem;
}

.drop-down-icons {
	color: #CCCCCC;
	font-size: 1.75rem;
	margin-right: 5px;
	margin-top: -3px;
}

.dark .drop-down-icons {
	color: #222222;
}

.rating {
	color: #CCCCCC;
	font-size: 1.75rem;
	margin-left: 5px;
	margin-top: -2px;
	font-weight: 800;
	letter-spacing: -.1rem;
}

.dark .rating {
	color: #222222;
}

#selected-tab, #rating-tab {
	background-color: #FFFFFF;
	border: 2px solid #cccccc50;
	color: #1e033a80!important;
}

#selected-tab:hover, #rating-tab:hover  {
	background-color: #FFFFFF !important;
	color: #1e033a80!important;
	border: 2px solid #9f9f9f50!important;
}

.dark #selected-tab, .dark #rating-tab {
	background-color: #151515;
	border: 2px solid #1a1a1a;
	color: #dae0e77d !important;
}

.dark #selected-tab:hover, .dark #rating-tab:hover  {
	background-color: #101010 !important;
	color: #dae0e7 !important;
	border: 2px solid rgba(0, 0, 0, 0.500)!important;
}
</style>