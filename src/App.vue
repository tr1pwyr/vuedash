<script setup>
import Header from './components/layout/TheHeader.vue'
import Footer from './components/layout/TheFooter.vue'
import { RouterLink, RouterView, useRouter, useRoute } from "vue-router";
import { store } from "./store";

const router = useRouter();
const route = useRoute();

const logout = async () => {
  localStorage.clear();
  store.updateHasLogin(false);
  store.updateName(null);
  router.push("/login");
};

</script>

<template>
  <Header />
  <section class="">
    <router-view :key="$route.fullPath" />
  </section>
  <Footer />
</template>
