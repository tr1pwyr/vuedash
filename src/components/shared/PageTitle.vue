<template>
	<article class="single-post text-center">
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

<style scoped>
h1 {	margin: 0; padding: 0;}
h3 {margin: 0 0 1rem 0 !important; padding: 0 !important; line-height: 1;}
h5 {margin: 3rem 0 1rem 0 !important; padding: 0 !important;}
img {margin: 0 0 2rem 0 !important;}
</style>