<template>
  <header class="main-header sticky">
    <nav class="navbar">
      <div class="brand">
        <a class="" href="/"><BIconReception3 class="b-icon" />VueDash.org</a>
      </div>
      <div class="help-button">
        <a @click="handleClick()" class="btn btn-primary">
        <BIconGithub class="b-icon" /> Download Dashboard
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
import { 
	BIconGithub, BIconReception3
	} from "bootstrap-icons-vue";
</script>

<style>
.b-icon{
  margin-top: -4px;
}
</style>