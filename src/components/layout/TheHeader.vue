<template>
  <header class="main-header sticky">
    <nav class="navbar">
      <div class="brand">
        <a class="" href="/"><BIconReception3 class="brand-icon" />VueDash.org</a>
      </div>
      <!-- <div class="help-button">
        <a @click="handleClick()" class="btn btn-primary">
        <BIconGithub class="b-icon" /> Download Dashboard
        </a>
      </div> -->
      <div class="form-check form-switch">
        <input @click="toggleDark()" class="form-check-input" type="checkbox" role="switch"
          id="flexSwitchCheckDefault">
      </div>
    </nav>
  </header>
</template>

<script setup>
import { useRouter } from "vue-router";
import { useDark, useToggle } from "@vueuse/core";
const isDark = useDark();
const toggleDark = useToggle(isDark);
const router = useRouter();
const handleClick = () => {
  router.push("/page/about/#download")
}
import { 
	BIconGithub, BIconReception3
	} from "bootstrap-icons-vue";
</script>

<style>
.main-header {padding: 0!important;}
.main-header { transition: all 0.5s ease;}

.main-header.sticky {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  width: 100%;
  background: #fff!important;
  box-shadow: -1px 14px 14px -11px rgba(0,0,0,0.1)!important;
  -webkit-box-shadow: -1px 14px 14px -11px rgba(0,0,0,0.1)!important;
  -moz-box-shadow: -1px 14px 14px -11px rgba(0,0,0,0.1)!important;
}

.dark .main-header.sticky {
  background: rgb(17, 17, 17, .9)!important;
  box-shadow: -1px 14px 14px -11px rgba(0, 0, 0, 0.75) !important;
  -webkit-box-shadow: -1px 14px 14px -11px rgba(0, 0, 0, 0.75) !important;
  -moz-box-shadow: -1px 14px 14px -11px rgba(0, 0, 0, 0.75) !important;
}
.navbar {padding-right: 25px;}

.brand {
  padding: .75rem 2rem 1rem .75rem;
  margin: 5px 0;
  background-image: linear-gradient(to bottom left, transparent 50%, #1e033a 50%), linear-gradient(#1e033a, #1e033a), linear-gradient(#1e033a, #1e033a);
  background-size: 25px 25px, 100% 100%, 100% 100%;
  background-position: 100% 0%, -25px 0%, 100% 25px;
  background-repeat: no-repeat;
}

.dark .brand {
  background-image: linear-gradient(to bottom left, transparent 50%, rgb(40, 46, 49) 30%), linear-gradient(#282e31, #282e31), linear-gradient(#282e31, #282e31);
  background-size: 25px 25px, 100% 100%, 100% 100%;
  background-position: 100% 0%, -25px 0%, 100% 25px;
  background-repeat: no-repeat;
}

.brand:hover {
  background-image: linear-gradient(to bottom left, transparent 50%, #e60000 50%), linear-gradient(#e60000, #e60000), linear-gradient(#e60000, #e60000);
  background-size: 25px 25px, 100% 100%, 100% 100%;
  background-position: 100% 0%, -25px 0%, 100% 25px;
  background-repeat: no-repeat;
}

.dark .brand:hover{
  background-image: linear-gradient(to bottom left, transparent 50%, #1e033a 50%), linear-gradient(#1e033a, #1e033a), linear-gradient(#1e033a, #1e033a);
  background-size: 25px 25px, 100% 100%, 100% 100%;
  background-position: 100% 0%, -25px 0%, 100% 25px;
  background-repeat: no-repeat;
}

.brand a {
  color: rgba(254, 254, 254, .99) !important;
  font-weight: 900;
  font-size: 1.2rem;
  letter-spacing: 1px;
  text-decoration: none;
  text-transform: uppercase;
}

dark .brand a {color: rgba(254, 254, 254, .66) !important;}

.brand a:hover {color: #fff !important;}
.brand-icon{margin-top:-5px;}


#flexSwitchCheckDefault {
  min-height: 30px;
  min-width: 60px;
  margin-right: 1rem;
  background-color: #dedede;
}

.dark #flexSwitchCheckDefault {
  background-color: #232323;
  border: 2px solid #121212;
}


</style>