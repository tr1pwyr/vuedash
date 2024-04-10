<template>
  <section class="masonary-lists mt-5">
    <MasonaryNews />
    <MasonaryLists />
    <EthPayment />
    <div class="list-footer container">
      <BIconExclamationTriangleFill /> Data last reset March 24th 2024
      <IpAddress />
    </div>
  </section>
</template>

<script setup>
import MasonaryLists from '../components/shared/MasonaryLists.vue';
import MasonaryNews from '../components/shared/MasonaryNews.vue';
import IpAddress from '../components/shared/IpAddress.vue';
import EthPayment from '../components/shared/EthPayment.vue'
import { BIconExclamationTriangleFill } from "bootstrap-icons-vue";
</script>

<style scoped>
.masonary-lists{
  padding-top:5rem;
}
.list-footer{
  margin: 25px 0 100px 25px;
  font-size: .9rem;
  color:#7d7d7d;
}
</style>
