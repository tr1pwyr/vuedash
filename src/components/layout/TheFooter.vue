<template>
  <footer class="main-footer">
    <div class="container footer-wrapper">
      <div class="row">

        <div class="col-lg-3 col-md-6 col-sm-12">
          <h5>Pages:</h5>
          <ul class="list-unstyled">
            <li v-for="link in internalLinks" :key="link.id">
              <a :href="link.link">{{ link.title }}</a>
            </li>
          </ul>
        </div>

        <div class="col-lg-3 col-md-6 col-sm-12">
          <h5>External:</h5>
          <ul class="list-unstyled">
            <li v-for="link in externalLinks" :key="link.id">
              <a :href="link.link">{{ link.title }}</a>
            </li>
          </ul>
        </div>

        <div class="col-lg-3 col-md-6 col-sm-12">
          <h5>Links:</h5>
          <ul class="list-unstyled">
            <li v-for="link in hotLinks" :key="link.id">
              <a :href="link.link">{{ link.title }}</a>
            </li>
          </ul>
        </div>

        <div class="col-lg-3 col-md-6 col-sm-12">
          <h5>Search:</h5>
          <ul class="list-unstyled">
            <li v-for="link in moreLinks" :key="link.id">
              <a :href="link.link">{{ link.title }}</a>
            </li>
          </ul>
        </div>

      </div>
    </div>

    <div class="copyright-text">
      <p class="mt-2">&copy; {{ data.year }} 
        <a :href="data.link"> {{ data.site }}</a> 
        {{ data.copy }}
      </p>
    </div>

  </footer>
</template>

<script setup>
import { ref } from 'vue'
const data = ref({
  year: new Date().getFullYear(),
  link: "https://vuedash.org",
  site: "VueDash.org",
  copy: "All Rights Reserved.",
});
const internalLinks = ref([
  {
    title: "Home Page",
    link: "/",
    id: "1",
  },
  {
    title: "About Us",
    link: "/page/about",
    id: "2",
  },
  {
    title: "Contact Us",
    link: "/page/contact",
    id: "3",
  },
  {
    title: "User Login",
    link: "/login",
    id: "4",
  },
]);

const externalLinks = ref([
  {
    title: "Priv-Mssg",
    link: "https://priv-mssg.com",
    id: "6",
  },
  {
    title: "Trip Kendall",
    link: "https://tripkendall.com",
    id: "7",
  },
  {
    title: "Tr1pwyr@Twitter",
    link: "https://twitter.com/tr1pwyr",
    id: "8",
  },
  {
    title: "Top Threats",
    link: "/topic/threat",
    id: "9",
  },
]);

const moreLinks = ref([
  {
    title: "More...",
    link: "/more",
    id: "11",
  },
  {
    title: "Latest Links",
    link: "/search/latest",
    id: "12",
  },
  {
    title: "List of Links",
    link: "/search/full",
    id: "13",
  },
  {
    title: "Add Link",
    link: "/add",
    id: "14",
  },

]);

const hotLinks = ref([
  {
    title: "Privacy Policy",
    link: "/page/privacy",
    id: "16",
  },
  {
    title: "Charts",
    link: "/page/charts",
    id: "17",
  },
  {
    title: "Sign Up",
    link: "/login",
    id: "18",
  },
  {
    title: "Register",
    link: "/register",
    id: "19",
  },

]);
</script>
