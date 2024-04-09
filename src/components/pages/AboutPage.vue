<style>
.about-text {
  text-align: center;
}

.section {
  margin-top: 1.5rem;
}
#download-btn{
  color: #ffffff!important;
  opacity: 1!important;
  text-decoration: none;
  margin-bottom: 2rem;
}
.page-content{
  padding: 2rem 1rem;
  margin: 1rem;
  color: #7d7d7d;
  background-color: #ffffff;
  border-radius: .33rem;
  border: 1 px solid #dedede;
  box-shadow: -1px 14px 14px -11px rgba(0,0,0,0.1)!important;
  -webkit-box-shadow: -1px 14px 14px -11px rgba(0,0,0,0.1)!important;
  -moz-box-shadow: -1px 14px 14px -11px rgba(0,0,0,0.1)!important;
}

.dark .page-content{
  background-color: #0e0e0e;

}

</style>

<template>
  <section class="section container-fluid">

    <div class="about-text">

      <div class="page-content">

        <SectionTitle :heading="content" />

        <p class="">{{ content.more }}</p>

      <hr class="m-5" id="download" />
      <h3> {{ content.subTitle }} </h3>
      <p class="text mb-5">{{ content.details }}</p>
      

      <a @click="handleClick()" class="btn btn-primary" id="download-btn">
        <span id="download-btn"><BIconGithub /> Download Dashboard</span>
      </a>
    </div>

      <div class="blockquote-wrapper">
        <div class="blockquote">
          <h1>
            People sleepin' on the blockquote...
          </h1>
          <h4>&mdash;Tr1pwyr</h4>
        </div>
      </div>

      <div class="page-content">
      <div class="my-5" v-for="d in data" key="d">
        <h6>{{ d.title }}</h6>
        <p>{{ d.text }}
          <!-- <a :href="d.link">{{ d.linkText }}</a> -->
        </p>
      </div>
      </div>

    </div>

  </section>

  <PhotoGallery />

</template>

<script setup>
import { ref } from 'vue'
import SectionTitle from "../shared/SectionTitle.vue"
import PhotoGallery from "../shared/PhotoGallery.vue"
import { BIconGithub } from "bootstrap-icons-vue";
const handleClick = () => {
  window.location.href = 'https://github.com/tr1pwyr/vuedash';
}

const content = ref(
  {
    title: 'About VueDash.org',
    intro: "I started looking around for a Vue template that I could use for the begginings of a dashboard part of a project I was working on.  I could not find anything that was simple, easy to integrate, and professional.  Suffice to say I did not find what I was looking for.",
    more: "This being the case I decided to make one, and make it available in case anyone else could use such a thing.",
    subTitle: "Use Terms",
    details: 'You are free to download this template and use it as you see fit.  I do not warranty it, do not offer free support, etc.',
  });

// 
const data = ref(
  [
    {
      title: 'Component Based',
      text: 'If you are looking for a specific chart or part of the homepage you best bet is to look at the /components folder.  The header and footer are in the layout sub-folder, most of the rest of the components are in the shared and pages sub folders respectively.',
      linkText: 'Here\'s a brief outline of the proces',
      link: '/topic/risk'
    },
    {
      title: 'CSS Style',
      text: 'I have moved (almost) all of the CSS from the component files to the main style.css file.  I know that this is not dogmatically Vue but since there isn\'t much that\'s not shown right away scoping doesn\'t buy you much...  This may not be my final answer, but it is different this version so I thought I would mention it. ',
      linkText: 'Here are some key steps involved in implementing such measures',
      link: '/topic/sec'
    },
    {
      title: 'Page Views',
      text: 'The pages ( this page, contact, etc.) use the PageView.vue file in the views folder.  It uses userRoute() to handle route.params to direct it to the correct page.  The components for pages are in /components/pages',
      linkText: 'Here are somw strategies for ensuring critical systems resilience.',
      link: '/topic/critical'
    },
    {
      title: 'Custom / Consulting',
      text: 'If you want to hire me for customization of this theme, consulting on how to get your api working with it, etc. you can mssg 850.270.3180 and I\'ll get back to you within 24 hours. A $50 deposit of ETH @ 0xef83ee26838B306aE2cDDE9eC8eEa38D15B41C2F get you on the schedule and buys you an hour of consulting.',
      linkText: 'Here are somw strategies for ensuring critical systems resilience.',
      link: '/topic/critical'
    }
  ]
);

</script>
