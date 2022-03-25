<template>
<div class="header_wrapper  search_show">
<div class="top-header-strip">
  <div class="top-header-strip-left">
    <p class="mb-0">
        Biggest Online range of Pure Pashmina Shawls ! Shop Now.
    </p>
  </div>
  <div class="top-header-strip-right">
    <ul>
      <li class="nav-item dropdown flegDrop" style="pointer-events: auto;">
        <a href="#" class="toggle-icon pull-right">
          <img src="../assets/indFlag.jpg"/>INR
        </a>
      </li>
      <li>
        <a href="#">Our stores </a>
      </li>
      <li class="logion option">
        <a href="#"><span class="toggle-icon pull-right"></span>Login</a>
      </li>
    </ul>
  </div>
</div>
<div class="header sticky" >
  <nav class="navbar navbar-expand-md"> 
    
    <div id="myNavbar" class="">
      <div class="mobile-menu-container">
          <ul class="navbar-nav">
            <li id="women1" class="nav-item dropdown" style="pointer-events: auto;">
              <a class="nav-link font-bold dropdown_toggle" style="font-weight: bold;">WOMEN</a>
            </li>
            <li id="men27" class="nav-item dropdown" style="pointer-events: auto;">
              <a class="nav-link font-bold dropdown_toggle" style="font-weight: bold;">MEN</a>
            </li>
             <li id="home41" class="nav-item dropdown" style="pointer-events: auto;">
              <a class="nav-link font-bold dropdown_toggle" style="font-weight: bold;">SALE</a>
            </li>
             <li id="gift-cards434" class="nav-item dropdown" style="pointer-events: auto;">
              <a class="nav-link font-bold dropdown_toggle" style="font-weight: bold;">CoLLECTION</a>
            </li>
          </ul>
      </div>
    </div>
  </nav>
  <a class="navbar-brand desktop-logo nuxt-link-active">
    <img src="../assets/logo.svg" alt="Ahujasons" title="ahujasons"/>
  </a>
  <div class="user-logins">
    <div class="rightNav for-desktop">
      <ul class="navbar-nav">
        <li class="nav-item dropdown float-left">
          <a href="" class="nav-link font-bold dropdown_toggle">OUR STORY</a>
          </li>
          <li class="nav-item float-left">
          <a href="" class="nav-link font-bold">CRAFTMANSHIP</a>
          </li>
      </ul>
    </div>
    <div class="user-logins-icons">
      <ul>
        <li class=" flegDrop for_mobile_only">
          <a class="">
            <span>
              <i aria-hidden="true" class="fa fa-heart-o"></i>
            </span>
            wishlist
          </a>
        </li>
      </ul>
    </div>
  </div>
</div>
</div>
<div class="container-fluid message-container">
  <div id="page_loader" class="page_loader" style="display:none"></div>
  
</div>
<div id="st-container-hide"></div>



</template>

<script>
// import Vue from 'vue';
// import axios from 'axios';
// import VueAxios from 'vue-axios';

// Vue.use(VueAxios, axios);
export default {
  name: 'ProductListPage',
  props: {
    msg: String
  },
  // mounted() {
  //   Vue.axios.get('https://pim.wforwoman.com/pim/pimresponse.php/?service=category&store=1&url_key=top-wear-kurtas&page=1&count=20&sort_by=&sort_dir=desc&filter=')
  //   .then((resp)=>{
  //     console.warn(resp)
  //   })
  // }
}
</script>
<style>
  @import "../assets/main.scss";



</style>