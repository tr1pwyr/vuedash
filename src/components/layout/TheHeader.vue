<template>
  <header class="main-header sticky">
    <nav class="navbar">
      <div class="brand">
        <a class="" href="/">VueDash.org</a>
      </div>
      <div class="help-button">
        <a @click="handleClick()" class="btn btn-primary">
        Download Dashboard
        </a>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
const handleClick = () => {
  router.push("/page/help/#help")
}
</script>

