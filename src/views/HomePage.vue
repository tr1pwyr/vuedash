
<template>
  <div id="dashboard">
    <section class="dashboard-menu sticky-top side-menu">
      <div class="pt-4 d-flex flex-sm-column flex-row flex-nowrap align-items-center sticky-top">

        <ul
          class="nav flex-sm-column flex-row flex-nowrap mx-auto text-center justify-content-between align-items-center">
          <li>
            <a @click="forceRerender" class="d-block py-2 text-decoration-none cursor-pointer" title="Reset Data">
              <BIconExclamationTriangleFill class="bi-icon fs-2" />
              <div class="icon-label">Reset Data</div>
            </a>
          </li>
          <li>
            <a @click="toggleSettings" class="nav-link py-3" data-bs-toggle="tooltip" data-bs-placement="right"
              data-bs-original-title="Home">
              <BIconGearWideConnected class="bi-icon fs-2" />
              <div class="icon-label details">Details</div>
            </a>
          </li>

          <li>
            <a href="/page/charts" class="nav-link py-3" title="" data-bs-toggle="tooltip" data-bs-placement="right"
              data-bs-original-title="Dashboard">
              <BIconGraphDown class="bi-icon fs-2" />
              <div class="icon-label">The Charts</div>
            </a>
          </li>

          <li>
            <a href="#" class="nav-link py-3" title="" data-bs-toggle="tooltip" data-bs-placement="right"
              data-bs-original-title="Orders">
              <BIconHddNetworkFill class="bi-icon fs-2" />
              <div class="icon-label details">The Network</div>
            </a>
          </li>

          <li>
            <a href="/#logs" class="nav-link py-3 px-2" title="" data-bs-toggle="tooltip"
              data-bs-placement="right" data-bs-original-title="Orders">
              <BIconIncognito class="bi-icon fs-2" />
              <div class="icon-label">View Logs</div>
            </a>
          </li>

        </ul>
        <div class="dropdown">
          <a href="#" class="d-flex align-items-center justify-content-center p-3 text-decoration-none dropdown-toggle"
            id="dropdownUser3" data-bs-toggle="dropdown" aria-expanded="false">
          </a>
        </div>
      </div>

    </section>

    <section class="dashboard-main pt-5">
      <transition name="fade">
        <DashSettings v-if="showSettings" />
      </transition>
      <DropDowns v-if="renderComponent" />
       <div id="monitoring">
        <MasonaryData />
      </div>
      <MasonaryNews />
      <DataStats v-if="renderComponent" />
      <DataTable />
      <TheTags />
      <div id="logs">
        <MasonaryLists />
      </div>
    
    </section>

  </div>

</template>

<script setup>
import MasonaryNews from "../components/shared/MasonaryNews.vue"
import DataStats from "../components/shared/DataStats.vue"
import TheTags from "../components/shared/TheTags.vue"
import DashSettings from "../components/dashboard/DashSettings.vue"
import DataTable from "../components/shared/DataTable.vue"
import DropDowns from "../components/shared/DropDowns.vue"
import MasonaryData from "../components/shared/MasonaryData.vue"
import MasonaryLists from "../components/shared/MasonaryLists.vue";
import { store } from "../store";
import { plByMonth } from '../js/data'
import {
  BIconGearWideConnected,
  BIconGraphDown,
  BIconHddNetworkFill,
  BIconIncognito,
  BIconExclamationTriangleFill
} from "bootstrap-icons-vue";
import { nextTick, ref } from 'vue';

const renderComponent = ref(true);
const showSettings = ref(false);

const forceRerender = async () => {
  renderComponent.value = false;
  await nextTick();
  renderComponent.value = true;
};

function toggleSettings() {
  showSettings.value = !showSettings.value; // Toggle the value of showSettings
}


</script>
