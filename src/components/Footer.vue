<template>
  <div class="footer">
    <div class="container">
      <div class="footer-box">
        <div class="footer__items">
          <div class="footer__socials">
            <a href="#" class="footer__social-link"
              ><ThemifyIcon icon="twitter"></ThemifyIcon
            ></a>
          </div>
          <div class="footer__socials">
            <a href="#" class="footer__social-link"
              ><ThemifyIcon icon="facebook"></ThemifyIcon
            ></a>
          </div>
          <div class="footer__socials">
            <a href="#" class="footer__social-link"
              ><ThemifyIcon icon="dribbble"></ThemifyIcon
            ></a>
          </div>
          <div class="footer__socials">
            <a href="#" class="footer__social-link"
              ><ThemifyIcon icon="instagram"></ThemifyIcon
            ></a>
          </div>
        </div>
        <div class="footer__copyright">
          <p>2022 © Design by Unvab. Code by Haru</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ThemifyIcon from "vue-themify-icons";

export default {
  components: {
    ThemifyIcon,
  },
};
</script>
<style scoped>
.footer {
    padding: 40px 0;
    background-color: #ebebeb;
}
.footer__items {
  display: flex;
  
}
.footer-box {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.footer__social-link {
  display: block;
  padding: 3px 10px;
  color: #969696;
  opacity: 0.6;
  transition: all 0.5;
}
.footer__social-link:hover {
  opacity: 1;
}
.footer__copyright {
    font-family: 'Work Sans',sans-serif;
    margin-top: 20px;
    color: #5f5f5f;
}
</style>
