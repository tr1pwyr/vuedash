
<script setup>
import { ref } from 'vue'
const tags = [
	{
		id: 1,
		name: 'Exploit',
		link: '#',
		cat: 'hack',
		count: 9,
	},
	{
		id: 2,
		name: 'DDOS',
		link: '#',
		cat: 'attack',
		count: 3,
	},
	{
		id: 3,
		name: 'Ransomware',
		link: '#',
		cat: 'malware',
		count: 6
	},
	{
		id: 4,
		name: 'SSH Logins',
		link: '#',
		cat: 'sucsess',
		count: 1,
	},
	{
		id: 5,
		name: 'Alert',
		link: '#',
		cat: 'alert',
		count: 3,
	},
	{
		id: 6,
		name: 'DDOS',
		link: '#',
		cat: 'attack',
		count: 1,
	},
	{
		id: 7,
		name: 'BTC Price',
		link: '#',
		cat: 'caution',
		count: 9,
	},
	{
		id: 8,
		name: 'Attempted Login',
		link: '#',
		cat: 'alert',
		count: 3,
	},
	{
		id: 9,
		name: 'Warning',
		link: '#',
		cat: 'warning',
		count: 5,
	},
	{
		id: 10,
		name: 'Unhandled Request',
		link: '#',
		cat: 'alert',
		count: 3,
	},
	{
		id: 11,
		name: 'Zero Days',
		link: '#',
		cat: 'hack',
		count: 2,
	},
	{
		id: 4,
		name: 'Application Accessed',
		link: '#',
		cat: 'attack',
		count: 3,
	},
	{
		id: 4,
		name: 'App Launched',
		link: '#',
		cat: 'sucsess',
		count: 5,
	},
	{
		id: 4,
		name: 'SSH Attempts',
		link: '#',
		cat: 'alert',
		count: 1,
	},
	{
		id: 4,
		name: 'email sent',
		link: '#',
		cat: 'sucsess',
		count: 13,
	},
]
</script>

<template>
	<section class="container mt-4">
		<ul class="tags">
			<a :href="tag.link" v-for="tag in tags" :key="tag.id">
			<li :class="tag.cat" class="tag" >
					{{ tag.name }}({{ tag.count }})
			</li>
		</a>
		</ul>
	</section>
</template>

<style scoped>

ul{
  list-style-type: none!important;
  text-align: center!important; 
  padding: 0;
  margin: 0;
}

li.tag {
  display: inline-block!important;
	margin-right: 10px!important;
}

.tags{
	margin: 1rem 0 0 2rem;
}

.tag{
  color: white;
  padding: 4px 8px;
  text-align: center;
  border-radius: 5px;
	font-size: 11px;
	margin-top: .5rem;
}
.tag:hover {
	cursor:pointer;
}
.hack {
	border: 1px solid #0171d9;
	color: #0171d9!important;
  background-color: #081f39;
}
li.hack:hover{
	border: 1px solid #0177e5;
	color: #0177e5!important;
  background-color: #06172a!important;
}

.malware {
	border: 1px solid #7e5ac6;
	color: #7e5ac6;
  background-color: #1f1b36;
}
li.malware:hover {
	border: 1px solid #916bdd;
	color: #9573d9;
  background-color: #1b172e;
}
.attack {
	border: 1px solid #2c96c3;
	color: #2c96c3;
  background-color: #102635;
}
li.attack:hover {
	border: 1px solid #49add8;
	color: #3caddd;
  background-color: #0d202c;
}
.alert {
	border: 1px solid #ce5353;
	color: #ce5353;
  background-color: #2d1a21;
}
li.alert:hover {
	border: 1px solid #de6767;
	color: #e16161;
  background-color: #25151b;
}
.caution {
	border: 1px solid #e26b10;
	color: #e26b10;
  background-color: #311e15;
}
li.caution:hover {
	border: 1px solid #f0802a;
	color: #ea7d29;
  background-color: #2c1b12;
}
.warning {
	border: 1px solid #f4c022;
	color: #f4c022;
  background-color: #342e18;
}
li.warning:hover {
	border: 1px solid #fdcd3c;
	color: #fccb3a;
  background-color: #2c2714;
}
.sucsess {
	border: 1px solid #55a66c;
	color: #55a66c;
  background-color: #172925;
}
li.sucsess:hover {
	border: 1px solid #74c78b;
	color: #73ca8b;
  background-color: #13221e;
}
</style>