<template>
  <div class="col-md-4 mb-4">
    <!-- <div class="card card-body h-100 net"> -->
			<div class="card card-body h-100">
      <div class="d-flex align-content-center flex-wrap">
        <a href="#" class="icon-link">
          <BIconBarChartFill /> NET 404.5 Mb/S </a> This is very fast for here
      </div>
    </div>
  </div>
</template>

<script setup>
import {BIconBarChartFill} from "bootstrap-icons-vue";
</script>

<style scoped>
.net a {
	color: #ffffff;
}

.dark .vue:hover a,
.net:hover a {
	color: #fff;
}

.net {
	border: 1px solid #1b3cd1;
	color: #ffffff !important;
	background-color: #1b3cd1;
	font-weight: 700;
}

.net:hover {
	border: 1px solid #2194ff;
	color: #1a90ff !important;
	background-color: #031070 !important;
}

.dark .net {
	border: 1px solid #0171d9;
	color: #0171d9 !important;
	background-color: rgb(8, 31, 57, .9);
}

.dark .net:hover {
	border: 1px solid #0177e5;
	color: #0177e5 !important;
	background-color: #06172a !important;
}
</style>