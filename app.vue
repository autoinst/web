<template>
  <div id="main">
    <TopNav />
    <NuxtRouteAnnouncer />
    <NuxtPage />
    <Footer />
  </div>
</template>


<script>
import Footer from './components/Footer.vue';
import TopNav from './components/TopNav.vue'

export default {
  name: 'main',
  components: {
    TopNav,
    Footer
  }
}
</script>