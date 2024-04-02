<template>
  <section class="mt-5 pt-5">
    <div v-if="pageRoute == 'help'">
      <HelpPage />
    </div>
    <div v-if="pageRoute == 'about'">
      <AboutPage />
    </div>
    <div v-if="pageRoute == 'privacy'">
      <PrivacyPage />
    </div>
  </section>
</template>

<script setup>
import { useRoute } from "vue-router";
import AboutPage from '../components/pages/AboutPage.vue';
import HelpPage from "../components/pages/HelpPage.vue";
import PrivacyPage from "../components/pages/PrivacyPolicy.vue";
const route = useRoute();
const pageRoute = route.params.name; 
</script>
