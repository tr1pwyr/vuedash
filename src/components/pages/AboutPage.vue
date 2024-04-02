<template>
  <section class="section pt-5">
    <div class="page-container">

      <img :src="content.img" :alt="content.title" class="img-fluid float-start col-4">

      <div class="about-text">
        <h3>{{ content.title }}</h3>
        <p class="about-text">{{ content.intro }}</p>
        <p class="about-text">{{ content.more }}</p>
        <hr class="m-5" />
        <h3> {{ content.subTitle }} </h3>
        <p class="text">{{ content.details }}</p>

        <div class="mx-5 mb-5" v-for="d in data" key="d">
          <h6>{{ d.title }}</h6>
          <p>{{ d.text }}  - <a :href="d.link">{{ d.linkText }}</a></p>
         
        </div>
      </div>

    </div>

  </section>
</template>

<script setup>
import { ref } from 'vue'
const content = ref(
  {
    title: 'About HackGuardia',
    intro: "From proactive risk assessments to the implementation of robust security measures, we work closely with our clients to identify vulnerabilities and deploy tailored solutions that mitigate risks effectively.",
    more: "Leveraging cutting-edge technologies and best practices, we empower our clients to navigate the digital landscape with confidence, knowing that their assets and data are safeguarded against evolving threats.  Specifically we manage and lock-down networks, impliment secure web apps, and trouble-shoot legacy infrastructure and devices.",
    subTitle: "What We Do",
    details: 'Chances are we can help you too.  What follows is a more in depth look at what we do. The links are to our "checklists" as it were. Feel free to use them as guidelines whether or not we work together.  A safer Internet is in everyone\'s best interest.',
    img: '/images/about.webp'
  });
const data = ref(
  [
    {
      title: 'Risk Assessment',
      text: 'Risk assessment involves identifying, analyzing, and evaluating potential risks and threats to an organization\'s information systems, data, and technology infrastructure. The primary goal of risk assessment is to understand the vulnerabilities and potential impacts of cyber threats to prioritize and implement appropriate security measures effectively',
      linkText: 'Here\'s a brief outline of the proces',
      link: '/topic/risk'
    },
    {
      title: 'Implement Security Measures',
      text: 'By implementing robust security measures, organizations can significantly reduce their exposure to cyber threats, enhance their resilience to security incidents, and safeguard their critical assets and sensitive information from unauthorized access and exploitation.',
      linkText: 'Here are some key steps involved in implementing such measures',
      link: '/topic/sec'
    },
    {
      title: 'Secure Critical Systems',
      text: 'Ensuring the resilience of critical server systems is paramount for maintaining business continuity and minimizing the impact of potential disruptions or cyber attacks',
      linkText: 'Here are somw strategies for ensuring critical systems resilience.',
      link: '/topic/critical'
    }
  ]
);

</script>

<style scoped>
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