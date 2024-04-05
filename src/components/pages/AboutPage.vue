<template>
  <section class="section pt-5">
    <div class="page-container">

      <SectionTitle :heading="content" />

      <div class="about-text">
     
     
        <p class="about-text text-center ">{{ content.more }}</p>
        <hr class="m-5" id="download"/>
        <h3> {{ content.subTitle }} </h3>
        <p class="text">{{ content.details }}</p>
        <p class="download-link"><a href="https://github.com/tr1pwyr/vuedash">Download This Dashboard</a></p>

        <div class="blockquote-wrapper">
          <div class="blockquote">
            <h1>
              People sleepin' on the blockquote...
            </h1>
            <h4>&mdash;Tr1pwyr</h4>
          </div>
        </div>


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


const content = ref(
  {
    title: 'About VueDash.org',
    intro: "I started looking around for a Vue template that I could use for the begginings of a dashboard part of a project I was working on.  I could not find anything that was simple, easy to integrate, and professional.  Suffice to say I did not find what I was looking for.",
    more: "This being the case I decided to make one, and make it available.",
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
    }
  ]
);

</script>

<style scoped>
.download-link{
  font-weight: 800;
  font-size: 1.5rem;
}
h4 {
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  color: #6D6E72;
}

h6 {
  font-size: 1.5rem;
  margin-bottom: .5rem;
  color: #505050;
}

.page-container {
  margin: 0 auto;
  padding-left: .5rem;
}

img {
  margin: 0 1rem .5rem 1rem;
  margin-bottom: 1rem;
  width: 360px;
  border-radius: .33rem;
}

.about-text {
  margin-right: 2rem;
  margin-left: 1rem;
  font-size: 1.2rem;
  color: #aaa;
}

p {
  color: #F0F1F2;
}
</style>