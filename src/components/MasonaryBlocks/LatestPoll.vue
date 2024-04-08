<template>
  <div class="col-md-4 mb-4">
      <div class="card card-body h-100 poll">
        <div class="d-flex align-content-center flex-wrap">
          <a href="#" class="icon-link">
            <BIconPieChartFill />
            Trump <span class="poll-percentage">43</span> Biden <span class="poll-percentage">35</span>
          </a> VDash Scrape and Compiled...
        </div>
      </div>
    </div>
</template>

<script setup>
import {BIconPieChartFill} from "bootstrap-icons-vue";
</script>

<style>

.poll a {
	color: #ffffff;
}

.poll {
	border: 1px solid #e60000;
	color: #FFFFFF;
	background-color: #e60000;
}

.poll:hover,
.bitcoin:hover {
	border: 1px solid #f91880;
	background-color: #f91880;
	color: #ffffff;
}

.dark .poll {
	border: 1px solid #ce5353;
	color: #ce5353;
	background-color: rgba(45, 26, 33, .9);
}

.dark .poll:hover {
	border: 1px solid #de6767;
	color: #e16161;
	background-color: #25151b;
}

.dark .poll a:hover {
	color: #de6767;
}

.poll-percentage {
	color: #ffc1c1;
}

</style>
