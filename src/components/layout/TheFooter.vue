<template>
  <footer class="main-footer">
    <div class="container footer-wrapper">
      <div class="row">
        <div v-for="section in sections" :key="section.title" class="col-lg-3 col-md-6 col-sm-12">
          <h5>{{ section.title }}</h5>
          <ul class="list-unstyled">
            <li v-for="link in section.links" :key="link.id">
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

// this was throwing an order of initialization error?
const hotLinks = ref([
  { title: "Privacy Policy", link: "/page/privacy", id: "16" },
  { title: "Charts", link: "/page/charts", id: "17" },
  { title: "Sign Up", link: "/login", id: "18" },
  { title: "Register", link: "/register", id: "19" }
]);

const sections = ref([
  {
    title: "Pages",
    links: [
      { title: "Home Page", link: "/", id: "1" },
      { title: "About Us", link: "/page/about", id: "2" },
      { title: "Contact Us", link: "/page/contact", id: "3" },
      { title: "User Login", link: "/login", id: "4" }
    ]
  },
  {
    title: "External",
    links: [
      { title: "Priv-Mssg", link: "https://priv-mssg.com", id: "6" },
      { title: "Trip Kendall", link: "https://tripkendall.com", id: "7" },
      { title: "Tr1pwyr@Twitter", link: "https://twitter.com/tr1pwyr", id: "8" },
      { title: "Kay-so Podcast", link: "https://kay-so.com/", id: "9" }
    ]
  },
  {
    title: "Links",
    links: [
      { title: "More...", link: "/more", id: "11" },
      { title: "Latest Links", link: "/search/latest", id: "12" },
      { title: "List of Links", link: "/search/full", id: "13" },
      { title: "Add Link", link: "/add", id: "14" }
    ]
  },
  {
    title: "Search",
    links: hotLinks.value
  }
]);
</script>
