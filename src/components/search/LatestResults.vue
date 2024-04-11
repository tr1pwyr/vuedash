<template>
  <section class="section">

    <div class="post-title text-center my-5">
      <h2>Some of the Latest Links</h2>
      <h6 class="mb-5" >Submit your own links <a href="/add">here</a></h6>
      <hr />
    </div>

 
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3">

      <div v-for="data in theLinks" :key="data.term" class="">
        <div class="results text-center mb-5">
          <a :href="data.link" class="mb-2">
            <img :src="data.image" :alt="data.term" class="data-image">
          </a>

          <div class="results-content">
            <a :href="data.link" class="mb-5 small data-link">
            <h5>{{ data.term }}</h5>
              {{ data.text }}
            </a>
          </div>
        </div>

      </div>
      </div>
   

  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
// import dataProcessing from "../../js/util.js";
const theLinks = ref({})

const getLinks = async () => {
  try {
    const response = await fetch('http://localhost:3030/link/show');
    const data = await response.json();
    if (data.links) {
      const processedData = dataProcessing(data.links);
      theLinks.value = processedData;
    }
    // console.log(typeof data);
  } catch (err) {
    console.log(err);
  }
}

const dataProcessing = (data) => {
  let processedData = [];
  data.forEach((item) => {
    let processedItem = {
      term: item.term,
      text: item.text,
      image: item.image,
      link: item.link,
      tags: item.tags,
      rating: item.rating
    }

    processedItem.image = '/images/links/' + processedItem.image;
    console.log(processedItem.image);
    processedItem.text = processedItem.text.substring(0, 100) + '...';

    processedData.push(processedItem);
  });
  return processedData;
}

onMounted(async () => {
  await getLinks().then(() => {
    console.log('done getting news links');
  });
});


</script>

<style scoped>

.data-image{
  height: 80px;
  width: 80px;
}
a.data-link{
  text-decoration: none;
}

.header-image {
  margin-right: 25px;
}

.mini {
  width: 96px;
  height: 96px;
  border-radius: 5px;
  margin: 0 auto;
  display: block;
}

.results {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25px;
  margin-bottom: 50px;
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  position: relative;
  width: 100%;
}

.results img {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  filter: url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\'><filter id=\'grayscale\'><feColorMatrix type=\'matrix\' values=\'0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0\'/></filter></svg>#grayscale"); /* Firefox 3.5+ */
  filter: gray; /* IE6-9 */
  -webkit-filter: grayscale(80%);
}

.results img:hover {
  filter: none;
  -webkit-filter: grayscale(0%);
}


</style>