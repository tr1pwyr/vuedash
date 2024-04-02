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
          <h5>Topics:</h5>
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
          <h5>External:</h5>
          <ul class="list-unstyled">
            <li v-for="link in moreLinks" :key="link.id">
              <a :href="link.link">{{ link.title }}</a>
            </li>
          </ul>
        </div>

      </div>
    </div>

    <div class="copyright-text">
      <img :src="data.img" :alt="data.site">
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
  link: "/",
  site: "HackGuardia",
  img: "/images/footer-logo.webp",
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
    link: "/contact",
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
    title: "Risk Assessment",
    link: "/topic/risk",
    id: "6",
  },
  {
    title: "Critical Systems",
    link: "/topic/critical",
    id: "7",
  },
  {
    title: "Security Measures",
    link: "/topic/sec",
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
    link: "/article/security",
    id: "16",
  },
  {
    title: "Ransomeware",
    link: "/article/ransomware",
    id: "17",
  },
  {
    title: "Persoanl Privacy",
    link: "/article/privacy",
    id: "18",
  },
  {
    title: "Deep Fakes",
    link: "/article/deepfakes",
    id: "19",
  },

]);
</script>
