<template>
  <section class="d-flex justify-content-between headline">
    <div id="subheading">
      <div id="user-info" v-if="store?.username">
        Welcome: {{ store?.username }} 
        <span @click="logout()" id="logout-link">
          Log out?
        </span>
      </div>
      <div id="login-link" v-else>
        Not Logged in. <a href="/login">Login Here</a>.
      </div>
    </div>
    <div id="display-time">{{ displayTime }}</div>
  </section>
</template>

<script setup>
import { store } from "../../store";
import { ref, computed, onBeforeUnmount } from 'vue'
import { useInterval } from '../../js/useInterval';
const displayTime = ref('')
const time = ref(new Date());

const logout = async () => {
  localStorage.clear();
  store.updateHasLogin(false);
  store.updateName(null);
  router.push("/login");
};

function intervalHandler() {
	time.value = new Date();
	// pulse();
}

useInterval(intervalHandler);
displayTime.value = computed(() => time.value.toTimeString());

onBeforeUnmount(() => {
	displayTime.value = null
});

</script>

<style>
@media screen and (max-width: 767.98px) {
  .headline{ display: block!important;}
}
#display-time {
	text-align: right;
	margin: 0 3.5rem 1.5rem 0;
	font-size: 13px;
	color: #555;
}
#user-info {
	margin: 0 0 2rem 3.5rem;
	font-size: 13px;
	color: #555;
}
#login-link{
	font-size: 13px;
	color: #555;
	margin-left: 3.5rem;
}
#logout-link{
  cursor: pointer;
}
</style>