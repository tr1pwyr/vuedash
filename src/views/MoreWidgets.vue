<template>
  <section class="masonary-lists">
    <MasonaryLists />
    <div class="list-footer">
      <BIconExclamationTriangleFill />
      Data last reset March 24th 2024
    </div>
  </section>
</template>


<script setup>
import MasonaryLists from '../components/shared/MasonaryLists.vue';
import { BIconExclamationTriangleFill } from "bootstrap-icons-vue";
</script>


<style scoped>
.masonary-lists{
  padding-top:5rem;
}
.list-footer{
  margin: 0 0 25px 25px;
  font-size: .9rem;
  color:#7d7d7d;
}
</style>
