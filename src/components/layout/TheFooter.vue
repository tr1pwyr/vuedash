<template>
  <footer class="main-footer">
    <div class="container footer-wrapper">
      <div class="row">

        <div class="col-lg-3 col-md-6 col-sm-12">
          <h5>Internal Links:</h5>
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
          <h5>Articles:</h5>
          <ul class="list-unstyled">
            <li v-for="link in hotLinks" :key="link.id">
              <a :href="link.link">{{ link.title }}</a>
            </li>
          </ul>
        </div>

        <div class="col-lg-3 col-md-6 col-sm-12">
          <h5>Links:</h5>
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
    title: "Technology",
    link: "https://tech.foundzed.com/",
    id: "11",
  },
  {
    title: "Entertainment",
    link: "https://ent.foundzed.com/",
    id: "12",
  },
  {
    title: "Politics",
    link: "https://pol.foundzed.com/",
    id: "13",
  },
  {
    title: "Business",
    link: "https://biz.foundzed.com",
    id: "14",
  },

]);

const hotLinks = ref([
  {
    title: "Digital Security",
    link: "https://hackguardia/article/security",
    id: "16",
  },
  {
    title: "Ransomeware",
    link: "https://hackguardia/article/ransomware",
    id: "17",
  },
  {
    title: "Persoanl Privacy",
    link: "https://hackguardia/article/privacy",
    id: "18",
  },
  {
    title: "Deep Fakes",
    link: "https://hackguardia/article/deepfakes",
    id: "19",
  },

]);
</script>
