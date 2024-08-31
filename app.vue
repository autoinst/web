<template>
  <div id="main">
    <TopNav />
    <NuxtRouteAnnouncer />
    <NuxtPage />
  </div>
</template>


<script>
import TopNav from './components/TopNav.vue'

export default {
  name: 'main',
  components: {
    TopNav
  }
}
</script>