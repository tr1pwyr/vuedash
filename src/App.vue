<script setup>
import Header from './components/layout/TheHeader.vue'
import Footer from './components/layout/TheFooter.vue'
import { ref, onMounted } from "vue";
import { RouterLink, RouterView, useRouter, useRoute } from "vue-router";
import { store } from "./store";

const router = useRouter();
const route = useRoute();

const info = ref({})

const logout = async () => {
  localStorage.clear();
  store.updateHasLogin(false);
  store.updateName(null);
  router.push("/login");
};

async function get_info() {
  try {
    const response = await fetch('http://localhost:3030/info');
    const data = await response.json();
    info.value = {
      "sitename": data.sitename,
      "site_description": data.site_description,
      "version": data.version,
      "repository": data.repository,
      "author": data.author,
      "url": data.url,
      "seed": data.seed
    }

    store.updateInfo(info.value)

    return true;
  } catch (err) {
    return false;
  }
}

onMounted(async () => {
  try{
    await get_info().then(() => {
    // console.log('got info');
  });
  } catch(err){
    console.log("error, could not get info from API:" + err);
  }
});

</script>

<template>
  <Header />
  <!-- <h1 class="mt-5 pt-5">
    oy: {{ info }}
  </h1> -->
  <section class="main-view">
    <router-view :key="$route.fullPath" />
  </section>
  <Footer />
</template>
