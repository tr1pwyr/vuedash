<template>
  <div class="col-md-4 mb-4">
      <div class="card card-body h-100 success">
        <div class="d-flex align-content-center flex-wrap">
          <a href="#" class="icon-link">
            <BIconCurrencyExchange /> Crypto:<span class="up">Up</span>
          </a> The Broader Crypto Market
        </div>
      </div>
    </div>
</template>

<script setup>
import {BIconCurrencyExchange} from "bootstrap-icons-vue";
</script>

<style>
.success a {
	color: #ffffff;
}

/* .success a {color: #b0f2c3;} */
.success a:hover {
	color: #fff;
}

.success .up {
	color: #e7ff7a;
}

.dark .up {
	color: #49add8;
}

.success {
	border: 1px solid #00ba7c;
	color: #ffffff;
	background-color: #00ba7c;
}

.success:hover {
	border: 1px solid #008055;
	color: #ffffff;
	background-color: #008055;
}

.dark .success {
	border: 1px solid #2c96c3;
	color: #2c96c3;
	background-color: #102635;
}

.dark .success:hover {
	border: 1px solid #49add8;
	color: #3caddd;
	background-color: #0d202c;
}
</style>