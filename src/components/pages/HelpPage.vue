<template>
  <section class="section pt-5">
    <div class="page-container" id="help">

      <img :src="content.img" :alt="content.title" class="img-fluid float-start col-4">

      <div class="about-text pb-5">
        <h3>{{ content.title }}</h3>
        <p class="about-text">{{ content.intro }}</p>
        <h4>{{ content.subTitle }}</h4>

        <hr class="my-4" />

        <p>If you are currently expereincing what you think may be a cyber attack, hack, malware outbreak
          etc. txt the word "HELP" to <a href="tel:+18502703180">850.270.3180</a> and we will respond asap.
        </p>
        
        <p>
          If you notice any signs of a cyber attack it's essential to act quickly to investigate and mitigate the
          potential impact.
          This may involve isolating affected systems, implementing security patches, updating antivirus software,
          and notifying relevant stakeholders, including IT security teams and law enforcement authorities if necessary.
        </p>

        <blockquote>
          Signs of a cyber attack, hack, or malware outbreak can vary depending on the nature of the attack and the
          systems affected. However, here are some common signs that may indicate such incidents.
        </blockquote>

        <h3 class="mx-5">Signs of Potential Hack:</h3>

        <div class="mx-5 mb-5" v-for="d in data" key="d">
          <h6>{{ d.title }}</h6>
          <p>{{ d.text }}</p>
        </div>
      </div>

    </div>

  </section>
</template>

<script setup>
import { ref } from 'vue'
const content = ref(
  {
    title: 'HackGuardia Help!',
    intro: "There\'s nothing worse than the feeling you get from losing control of your digital infrastructure.",
    subTitle: 'We understand.  We help our clients reclaim their devices and data at reasonable rates.',
    img: '/images/overhead.webp'
  });
const data = ref(
  [
    {
      title: 'Unusual Network Activity',
      text: 'Unexpected spikes or drops in network traffic can be indicative of unauthorized access or data exfiltration.'
    },
    {
      title: 'Strange System Behavior',
      text: ' If computers or devices start behaving oddly, such as running slower than usual, crashing frequently, or displaying unexpected error messages, it could be a sign of malware or hacking.'
    },
    {
      title: 'Unauthorized Access',
      text: 'Evidence of unauthorized access attempts, such as login failures, or login attempts from unfamiliar locations or at odd hours, may indicate a cyber attack.'
    },
    {
      title: 'Changes in File Permissions',
      text: 'If there are sudden changes in file permissions or unauthorized changes to critical system files, it could be a sign of a cyber intrusion'
    },
    {
      title: 'Unexplained File Modifications or Deletions',
      text: 'Files being modified, encrypted, or deleted unexpectedly, especially sensitive files or system files, may indicate a malware infection or unauthorized access.'
    }, {
      title: 'Unusual Outgoing Traffic',
      text: 'Monitoring outgoing network traffic for unusual patterns or connections to suspicious IP addresses can help identify potential malware communicating with command-and-control servers.'
    }, {
      title: 'Phishing Emails or Messages',
      text: 'An increase in phishing emails or suspicious messages targeting employees or users may indicate attempts to gain unauthorized access or spread malware'
    },
    {
      title: 'Security Software Alerts',
      text: 'Warnings or alerts from antivirus, anti-malware, or intrusion detection systems indicating the presence of malicious software or unusual activity.'
    },
    {
      title: 'Unexpected Pop-Ups or Browser Redirects',
      text: 'Pop-up windows, browser redirects, or changes in homepage settings can be symptoms of adware or malware infections.'
    },
    {
      title: 'Ransomware Messages',
      text: 'If users receive messages demanding payment in exchange for access to encrypted files, it\'s a clear sign of a ransomware attack.'
    },
    {
      title: 'Unexplained Reboots',
      text: 'Malware or hacking attempts may cause systems to reboot or shut down unexpectedly.'
    },
    {
      title: 'Increased CPU or Memory Usage',
      text: 'Unexplained spikes in CPU or memory usage could be caused by malware running in the background.'
    },
    {
      title: 'Missing or Altered Data',
      text: 'Data disappearing or being altered without explanation can indicate unauthorized access or data manipulation.'
    },
    {
      title: 'Suspicious Log Entries',
      text: 'Reviewing system logs for unusual activities, such as login attempts from unfamiliar accounts or repeated failed login attempts, can help detect potential security breaches'
    },
    {
      title: 'Reports from Users',
      text: 'Employees or users reporting unusual computer behavior, strange emails, or suspicious activities should be taken seriously and investigated promptly.'
    },
  ]
);

</script>

<style scoped>
h4 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #6D6E72;
}

h6 {
  font-size: 1.3rem;
  margin-bottom: 0 !important;
  margin-top: 1.5rem !important;
  color: #8b8b8b;
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