<template>
	<article class="text-center">
		<h1 class="post-title">{{ heading.title }}</h1>
		<h3>{{ heading.subtitle }}</h3>
		<img v-if="heading.image" :src="heading.image" :alt="heading.subtitle" class="img-fluid">
		<div v-if="heading.intro" class="mb-5">{{ heading.intro }}</div>
	</article>
</template>
    
<script setup>
const props = defineProps({
	heading: {
		type: Object,
		required: true,
	},
})
</script>
