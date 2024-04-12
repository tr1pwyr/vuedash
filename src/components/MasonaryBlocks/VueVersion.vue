<template>
  <div class="col-md-4 mb-3">
    <!-- <div class="card card-body h-100 info"> -->
			<div class="card card-body h-100">
      <div class="d-flex align-content-center flex-wrap">
        <a href="#" class="icon-link">
          <BIconHeartFill /> VUE VER <span class="version">3.3.8</span>
        </a> This App's Vue Version.
      </div>
    </div>
  </div>
</template>

<script setup>
import {BIconHeartFill} from "bootstrap-icons-vue";
</script>

<style scoped>
.info {
	border: 1px solid #1d9bf0;
	background-color: #1d9bf0;
}

.info a,
.info {
	color: #f2f2f2
}

.info:hover{
	background-color: #7856ff;
} 

.info .version{color:#1b3cd18f;}


.dark .info {
	border: 1px solid #f4c022;
	color: #f4c022;
	background-color: rgba(52, 46, 24, .8);
}

.dark .info:hover {
	border: 1px solid #fdcd3c;
	color: #fccb3a;
	background-color: #373119;
}

.dark .info a, .info:hover .version {
	color: #fccb3a;
}

.dark .info:hover a {
	color: #fff;
}

.dark .info .version {
	color: #ffe7a0;
}
</style>