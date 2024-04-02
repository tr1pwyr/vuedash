<template>
	<section class="stats">
		<div class="row">

			<div class="col-sm stat">
				<transition name="fade">
					<span v-if="total">
						<BIconCalendar2DateFill />{{ total }}
					</span>
				</transition>
				<div class="data">The Last 30 Days</div>
			</div>

			<div class="col-sm stat">
				<transition name="fade">
					<span v-if="totalAvg">
						<BIconCalendar2EventFill />{{ totalAvg }}
					</span>
				</transition>
				<div class="data">The Last 7 Days</div>
			</div>

			<div class="col-sm stat">
				<transition name="fade">
					<span v-if="averageAvg" class="average-avg">
						<BIconCalendar2HeartFill />{{ averageAvg }}%
					</span>
				</transition>
				<div class="data">Average / Goal</div>
			</div>

			<div class="col-sm stat">
				<a @click="handleClick" class="cdr">
					<BIconCalendar2CheckFill />
				</a>
				<transition name="fade">
					<span v-if="dashDate" class="dash-date">{{ dashDate }}</span>
				</transition>

				<div class="data">Enter Custom Date Range</div>


			</div>
		</div>

	</section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { plByMonth } from '../../js/data'
import { BIconCalendar2CheckFill, BIconCalendar2DateFill, BIconCalendar2EventFill, BIconCalendar2HeartFill } from "bootstrap-icons-vue";
import Swal from "sweetalert2";

const total = ref('')
const totalAvg = ref('')
const averageAvg = ref('')
const dashDate = ref('')

const processData = async () => {
	console.log('processessing data...')
	total.value = plByMonth.reduce((acc, curr) => acc + curr.pl, 0);
	totalAvg.value = plByMonth.reduce((acc, curr) => acc + curr.avg, 0);
	const temp = totalAvg.value / plByMonth.length;
	averageAvg.value = Math.round(temp) * .10
};

const reProcessData = async (d) => {
	let temp = 0
	let runningTotal = 0
	let tempString = ""

	console.log('re processessing data...')
	total.value = Math.round(total.value * (Math.random() / 3.33));

	if (d[6] > d[9]) {
		temp = d[6] - d[9]
	} else {
		temp = d[9] - d[6]
	}

	totalAvg.value = Math.round(totalAvg.value / Math.round(((Math.random() * temp) / .33)));

	console.log(temp)
	if (Math.round(totalAvg.value + temp) > 100) {
		let x = temp.toString()
		runningTotal = x.slice(0, 2);
	} else
		runningTotal = totalAvg.value + temp

	let y = runningTotal.toString()
	averageAvg.value = y.slice(0, 2);
};


const handleClick = async () => {

	const { value: date } = await Swal.fire({
		title: "select proj date",
		input: "date",
		didOpen: () => {
			const today = (new Date()).toISOString();
			Swal.getInput().min = today.split("T")[0];
		}
	});
	if (date) {
		dashDate.value = date
		Swal.fire("Projected date", date);
		reProcessData(date);
	}
}

onMounted(() => {
	try {
		processData();
	} catch (err) {
		console.log(`processData error: ${err}`);
	}
});


</script>

<style scoped>
.stats {
	padding: 2rem 1rem 1rem 1rem;
	margin: 0 2rem;
	font-weight: 700;
	font-size: 1.75rem;
	background-color: rgba(17, 17, 17, .5) !important;
	border-bottom: 25px solid #111111;
	border-radius: .33rem;
}

.stat {
	margin-left: 1rem;
	color: rgba(255, 255, 255, .75);
}

.stat:hover{
	color: #ffffff;
}

.stat svg {
	color: #222222;
	margin-right:10px;
}

.stat svg:hover {
	color: #726b66;
}

.cdr {
	cursor: pointer;
}

.cdr:hover {
	color: #bd303d!important;
}

.data {
	padding-top: 2px;
	font-size: .85rem;
	color: #bd303d;
}

.dash-date {
	font-size: 1.25rem;
	/* padding-left: 7px;
	color: #7d7771; */
}
</style>