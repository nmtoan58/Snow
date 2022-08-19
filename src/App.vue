<template>
  <div>
    <header-vue/>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import HeaderVue from "./components/Header.vue";
import Footer from './components/Footer.vue'
export default {
  components: {
    HeaderVue,Footer
  },
};
</script>

<style scoped></style>
