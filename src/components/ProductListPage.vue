<template>
  <!-- top header start -->

  <div class="top-header-strip">
    <div class="top-header-strip-left">
      <p>COMPLIMENTARY GIFT BOX PACKING ON ALL PRE-PAID ORDERS</p>
    </div>
    <div class="top-header-strip-right">
      <ul>
        <li class="flegDrop">
          <a href="#" class="toggle-icon pull-right"><img src="" /></a>
        </li>
        <li>
          <a href="#">our stores</a>
        </li>
        <li>
          <a href="#">my account</a>
        </li>
        <li><a href="#">blog </a></li>
      </ul>
    </div>
  </div>
  <!-- top header end -->
  <!--header start -->
  <div class="top-header for-mobile-view">
    <nav class="header navbar-light">
      <div>
        <button
          type="button"
          class="navbar-toggler collapsed"
          v-on:click="isHidden = !isHidden"
        >
          <span class="navbar-toggler-icon"> </span>
        </button>
        <div v-if="isHidden" class="collapse navbar-collapse active" :class="isHidden ? 'active' : '' ">
          <div class="mobile-menu-container">
            <div class="mobile-heading">
              <h2>
                <img
                  src="../assets/login-mobile-icon.png"
                  class="profile-icon"
                />
              </h2>
              <div class="close" v-on:click="isHidden = !isHidden">
                <i class="fa fa-times" aria-hidden="true"></i>
              </div>
              <ul id="login-hide" class="navbar-nav mobile-top-nav">
                <li class="nav-item dropdown">
                  <a style="width: 100%"
                    >Login
                   
                  </a>
                </li>
              </ul>
            </div>
            <ul class="navbar-nav">
              <li class="nav-item dropdown">
                <a class="nav-link font-bold dropdown_toggle">Women</a>
                <div class="dropdown-menu dropdown-main"></div>
               
                
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link font-bold dropdown_toggle">Men</a>
                <div class="dropdown-menu dropdown-main"></div>
            
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link font-bold dropdown_toggle">Decor</a>
                <div class="dropdown-menu dropdown-main"></div>
              
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link font-bold dropdown_toggle"
                  >Online Exclusive Sale</a
                >
                <div class="dropdown-menu dropdown-main"></div>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link font-bold dropdown_toggle">Our Story</a>
                <div class="dropdown-menu dropdown-main"></div>
               
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link font-bold dropdown_toggle">Craftmanship</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="top-logo-m">
        <a
          class="navbar-brand mobile-logo nuxt-link-exact-active nuxt-link-active"
          href="#"
        >
          <img
            src="../assets/mobile-logo.svg"
            alt="Ahujasons"
            title="ahujasons"
          />
        </a>
      </div>

      <div class="top-icon">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="#">
              <img src="../assets/selectCountry.png"
            /></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <img src="../assets/search.svg" alt="" title="" />
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <img src="../assets/wish.svg" alt="" title="" />
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <img src="../assets/cart.svg" alt="" title="" />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
  <div class="top-header for-dekhtop-view">
    <nav class="header navbar-light">
      <div class="left-menu">
        <ul class="navbar-nav">
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Women
            </a>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Men
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"
              >Sale<span class="sr-only">(current)</span></a
            >
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Collection
            </a>
          </li>
        </ul>
      </div>
      <div class="top-logo">
        <a class="navbar-brand nuxt-link-active" href="#">
          <img src="../assets/lgo.png" alt="Ahujasons" title="ahujasons" />
        </a>
      </div>

      <div class="right-menu">
        <ul class="navbar-nav">
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Our Story
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"
              ><span class="sr-only">(current)</span>CRAFTMANSHIP</a
            >
          </li>
        </ul>
      </div>

      <div class="top-icon">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="#">
              <img src="../assets/search.png" alt="" title="" />
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <img src="../assets/wishlist.png" alt="" title="" />
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <img src="../assets/cart.png" alt="" title="" />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </div>

  <!--header end -->
  <!--section start -->
  <div id="container">
    <div class="container-fluid product-list-main">
      <div class="container-fluid d-inline-block">
        <div class="col-md-12 product-cntr">
          <div class="item">
            <h1>Women Pashima shawls</h1>
            <p class="product-item">{{ products.length }} items</p>
          </div>
        </div>
      </div>
      <div class="container-fluid d-inline-block p-0">
        <div class="row m-0 for-dekhtop-view">
          <div class="col-lg-6 col-sm-6">
            <div class="sidebar-header"  v-on:click="isFilterToggle = !isFilterToggle">
              <h3 v-on:click="toggleButton()">
                <p class="hideFilterWrap" >
                  <img src="../assets/filter-icon.svg" />{{detailVisible ? "Hide Filter" : "Show Filter"}}
                </p>
              </h3>
            </div>
          </div>
          <div class="col-lg-6 col-sm-6">
            <div class="product-sort">
              <select
                class="sortnew"
                v-model="selectedSorting"
                @change="sorting"
              >
                <option v-for="sorting in sort" :key="sorting.id" :value="sorting">{{sorting.label}}</option>
                <!-- <option value="low_high">Price (Low to High)</option>
                <option value="high_low">Price (High to Low)</option>
                <option value="discount">Discount</option>
                <option value="product_position">Newest</option> -->
              </select>
            </div>
            
          </div>
        </div>
            <div class="row m-0 sortFilter for-mobile-view">
          <div class="col-lg-6 col-sm-6">
            <div class="sidebar-header"  v-on:click="isFilterToggle = !isFilterToggle">
              <h3 v-on:click="toggleButton()">
                <p class="hideFilterWrap" >
                  <img src="../assets/filter-icon.svg" />{{detailVisible ? "Hide Filter" : "Show Filter"}}
                </p>
              </h3>
            </div>
          </div>
          <div class="col-lg-6 col-sm-6">
            <div class="product-sort">
              <select
                class="sortnew-m"
                v-model="selectedSorting"
                @change="sorting"
              >
                <option v-for="sorting in sort" :key="sorting.id" :value="sorting">{{sorting.label}}</option>
                <!-- <option value="low_high">Price (Low to High)</option>
                <option value="high_low">Price (High to Low)</option>
                <option value="discount">Discount</option>
                <option value="product_position">Newest</option> -->
              </select>
            </div>
            
          </div>
        </div>
      </div>
      <div class="container-fluid d-inline-block p-0">
        <div class="row m-0">
           
          <div class="col-lg-2 col-md-4" v-if="!isFilterToggle">
            <nav id="sidebar">
              <div class="accordion" id="filterAccordion">
                <div
                  class="accordion-item"
                  v-for="(filter, index) in filters"
                  :key="index"
                >
                  <h2 class="accordion-header">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      :data-bs-target="'#' + filter.id"
                      aria-expanded="true"
                      :aria-controls="filter.id"
                      v-on:click="
                        filter.isOptionFilter = !filter.isOptionFilter
                      "
                    >
                      {{ filter.filter_lable }}
                    </button>
                  </h2>
                  <div
                    v-if="filter.isOptionFilter"
                    :id="filter.id"
                    class="accordion-collapse"
                    data-bs-parent="#filterAccordion"
                  >
                    <li
                      class="list-unstyled"
                      v-for="option in filter.options"
                      :key="option.value_key"
                    >
                      <a href="#"
                        ><input
                          type="checkbox"
                          class="checkbox"
                           @change="
                        filterProduct(
                        $event,
                        option,
                        filter.filter_lable
                      )"
                    
                        /><span
                          >{{ option.value }} ({{ option.total }})</span
                        ></a
                      >
                    </li>
                  </div>
                </div>
              </div>
            </nav>
          </div>
          <div class="col-lg-10 col-md-8" v-if="isFilterToggle == false">
            <div class="col-md-12 product-list">
              <div class="container-fluid d-inline-block p-0">
                <div class="row">
                  <div
                    class="col-md-3 col-sm-6 col-xs-6 col-6 new-class"
                    v-for="product in products"
                    :key="product.id"
                  >
                    <div class="slide-box">
                      <img
                        class="card-img-top"
                        :src="product.image"
                        alt="Card image cap"
                      /><a class="wishlist"><img src="../assets/wish.png" /></a>
                      <div class="card-body">
                        <h5 class="card-title">{{ product.name }}</h5>
                        <p class="card-text">
                          Rs.{{ product.selling_price }} {{ product.discount }}%
                        </p>

                        <p class="card-text" style="color: green">
                          {{ product.stock_status }}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-12 col-md-12" v-if="isFilterToggle == true" >
            <div class="col-md-12 product-list">
              <div class="container-fluid d-inline-block p-0">
                <div class="row">
                  <div
                    class="col-md-3 col-sm-6 col-xs-6 col-6 new-class"
                    v-for="product in products"
                    :key="product.id"
                  >
                    <div class="slide-box">
                      <img
                        class="card-img-top"
                        :src="product.image"
                        alt="Card image cap"
                      /><a class="wishlist"><img src="../assets/wish.png" /></a>
                      <div class="card-body">
                        <h5 class="card-title">{{ product.name }}</h5>
                        <p class="card-text">
                          Rs.{{ product.selling_price }} {{ product.discount }}%
                        </p>

                        <p class="card-text" style="color: green">
                          {{ product.stock_status }}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
         <div class="product_error">{{error_message}}</div>
        </div>
      </div>
    </div>
  </div>
  <!--section end -->
  <!--pagination start -->
  <div class="container-fluid">
    <span class="page-count">Page 1 to 6</span>
    <ul class="pagination">
      <li class="page-item"><a class="page-1" aria-label="1">1</a></li>
      <li class="page-item"><a class="" aria-label="2">2</a></li>
      <li class="page-item"><a class="" aria-label="3">3</a></li>
      <li class="page-item"><a class="" aria-label="4">4</a></li>
      <li class="page-item"><a class="" aria-label="5">5</a></li>
      <li class="page-item"><a class="" aria-label="6">6</a></li>
      <li class="page-item next">
        <a class="" aria-label="Next">Next<span>&nbsp;></span></a>
      </li>
    </ul>
  </div>

  <!--pagination end -->
  <!--footer start -->

  <footer id="footer" class="section-bg">
    <div class="footer_main_container">
      <div class="footer_text_content">
        <span></span>
      </div>

      <div class="footerLogo">
        <div class="footerLogoWrap">
          <img src="../assets/flogo.png" />
        </div>
      </div>
      <div class="social-mob for-mobile-view">
        <div class="customer_menu link_column home-links">
          <h2>Follow Us</h2>
          <div class="mobile-view">
            <ul>
              <li>
                <a target=""><img src="../assets/facebook.svg" /></a>
              </li>
              <li>
                <a target=""><img src="../assets/instagram.svg" /></a>
              </li>
              <li>
                <a target=""><img src="../assets/linkedin.svg" /></a>
              </li>
              <li>
                <a target=""><img src="../assets/pinterest.svg" /></a>
              </li>
              <li>
                <a target=""><img src="../assets/twitter.svg" /></a>
              </li>
              <li>
                <a target=""><img src="../assets/youtube.svg" /></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="footer-btm-center for-mobile-view">
        <div class="homepage_newsletter">
          <div class="block newsletter">
            <div class="title text-left">
              <strong>Subscribe to our newsletter </strong>
            </div>
            <div class="content">
              <form class="form subscribe">
                <div class="field newsletter">
                  <div class="control">
                    <input
                      name="email"
                      type="text"
                      id="newsletter"
                      placeholder="Enter your email address"
                    />
                  </div>
                </div>
                <div class="actions">
                  <button id="Submit" title="Subscribe" class="action">
                    <span>Subscribe</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div class="footer-links-container">
        <div class="footer_links">
          <div class="customer_menu link_column home-links">
            <h2 class="" v-on:click="isFooter1 = !isFooter1">Shop</h2>
            <div class="for-mobile-view" v-if="!isFooter1">
              <ul>
                <li class="men">
                  <a href="#">Men</a>
                </li>
                <li class="woman">
                  <a href="#">Woman</a>
                </li>
                <li class="home">
                  <a href="#">Home</a>
                </li>
                <li class="sale">
                  <a href="#">Sale</a>
                </li>
                <li class="collection">
                  <a href="#">Collection</a>
                </li>
              </ul>
            </div>
            <div class="for-dekhtop-view">
             <ul>
                <li class="men">
                  <a href="#">Men</a>
                </li>
                <li class="woman">
                  <a href="#">Woman</a>
                </li>
                <li class="home">
                  <a href="#">Home</a>
                </li>
                <li class="sale">
                  <a href="#">Sale</a>
                </li>
                <li class="collection">
                  <a href="#">Collection</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="customer_menu link_column home-links">
            <h2 class="" v-on:click="isFooter2 = !isFooter2">QUICK LINKS</h2>
            <div class="for-mobile-view" v-if="!isFooter2">
              <ul>
                <li class="men">
                  <a href="#">Ahujasons Export</a>
                </li>
                <li class="woman">
                  <a href="#">Ahujasons Wholesale</a>
                </li>
                <li class="our story">
                  <a href="#">Our Story</a>
                </li>
                <li class="legacy">
                  <a href="#">Legacy</a>
                </li>
                <li class="craftman ship">
                  <a href="#">Craftsman ship </a>
                </li>
                <li class="our store blogs">
                  <a href="#">Our Store Blogs </a>
                </li>
              </ul>
            </div>
            <div class="for-dekhtop-view">
              <ul>
                <li class="men">
                  <a href="#">Ahujasons Export</a>
                </li>
                <li class="woman">
                  <a href="#">Ahujasons Wholesale</a>
                </li>
                <li class="our story">
                  <a href="#">Our Story</a>
                </li>
                <li class="legacy">
                  <a href="#">Legacy</a>
                </li>
                <li class="craftman ship">
                  <a href="#">Craftsman ship </a>
                </li>
                <li class="our store blogs">
                  <a href="#">Our Store Blogs </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="customer_menu link_column home-links">
            <h2 class="" v-on:click="isFooter3 = !isFooter3">CUSTOMER SERVICE</h2>
            <div class="for-mobile-view" v-if="!isFooter3">
              <ul>
                <li class="men">
                  <a href="#">Terms and Condition </a>
                </li>
                <li class="woman">
                  <a href="#">Shipping & Delivery</a>
                </li>
                <li class="home">
                  <a href="#">Returns & Cancellation</a>
                </li>
                <li class="sale">
                  <a href="#">Contact us </a>
                </li>
                <li class="collection">
                  <a href="#">Store appointment</a>
                </li>
              </ul>
            </div>
               <div class="for-dekhtop-view">
              <ul>
                <li class="men">
                  <a href="#">Terms and Condition </a>
                </li>
                <li class="woman">
                  <a href="#">Shipping & Delivery</a>
                </li>
                <li class="home">
                  <a href="#">Returns & Cancellation</a>
                </li>
                <li class="sale">
                  <a href="#">Contact us </a>
                </li>
                <li class="collection">
                  <a href="#">Store appointment</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="customer_menu link_column home-links">
            <h2 class="" v-on:click="isFooter4 = !isFooter4">MY PROFILE</h2>
            <div class="for-mobile-view" v-if="!isFooter4">
              <ul>
                <li class="men">
                  <a href="#">My Account </a>
                </li>
                <li class="woman">
                  <a href="#">Track Order</a>
                </li>
                <li class="home">
                  <a href="#">My Cart</a>
                </li>
                <li class="sale">
                  <a href="#">Wishlist </a>
                </li>
                <li class="collection">
                  <a href="#">Order History</a>
                </li>
              </ul>
            </div>
             <div class="for-dekhtop-view">
              <ul>
                <li class="men">
                  <a href="#">My Account </a>
                </li>
                <li class="woman">
                  <a href="#">Track Order</a>
                </li>
                <li class="home">
                  <a href="#">My Cart</a>
                </li>
                <li class="sale">
                  <a href="#">Wishlist </a>
                </li>
                <li class="collection">
                  <a href="#">Order History</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="gh_logo_bottom for-mobile-view mobile-copyright">
            <p>Copyright © 2021 by Ahujasons | Powered by GreenHonchos</p>
          </div>
        </div>
        <div class="footer-btm-center for-dekhtop-view">
          <div class="homepage_newsletter">
            <div class="block newsletter">
              <div class="title text-left">
                <h3>SIGN UP AND SAVE</h3>
                <strong
                  >Subscribe to our newsletter and get 10% off your first
                  purchase</strong
                >
              </div>
              <div class="content">
                <form id="newsletter-validate-detail" class="form subscribe">
                  <div class="field newsletter">
                    <div class="control">
                      <input
                        name="email"
                        type="text"
                        id="newsletter"
                        placeholder="Enter your email address"
                      />
                    </div>
                  </div>
                  <div class="actions">
                    <button id="Submit" title="Subscribe" class="action">
                      <span>Subscribe</span>
                    </button>
                  </div>
                </form>
              </div>
              <div class="socialIcons">
                <h3>GIVE US A FOLLOW</h3>
                <div class="socialIconsWrap">
                  <a target="blank" href="#">
                    <img src="../assets/social.png" />
                  </a>

                  <a target="blank" href="#">
                    <img src="../assets/linkedin.png" />
                  </a>
                  <a target="blank" href="#">
                    <img src="../assets/twitter.png" />
                  </a>
                  <a target="blank" href="#">
                    <img src="../assets/pinterest.png" />
                  </a>
                  <a target="blank" href="#">
                    <img src="../assets/youtube.png" />
                  </a>
                </div>
              </div>
              <div class="gh_logo_bottom">
                <p>Copyright © 2021 by Ahujasons | Powered by GreenHonchos</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
  <!--footer end -->
</template>

<script>
import axios from "axios";
export default {
  name: "ProductListPage",
  data() {
    return {
      selectedSorting: {},
      products: [],
      filters: [],
      sort: [],
      isFilter: false,
      isOptionFilter: true,
      isFilterToggle:true,
      isFooter1:true,
      isFooter2:true,
      isFooter3:true,
      isFooter4:true,
      isHidden: false,
      error_message: '',
       moreData: {
        page: 1,
        count: 20,
        sort_by: "",
        sort_dir: "desc",
        filter: ""
      },
    };
  },
  async mounted() {
    this.apiCall(this.moreData)
  },
  methods: {
    async apiCall(moreData){
      let resp = await axios.get(
      `https://pim.wforwoman.com/pim/pimresponse.php/?service=category&store=1&url_key=top-wear-kurtas&page=${moreData.page}&count=${moreData.count}&sort_by=${moreData.sort_by}&sort_dir=${moreData.sort_dir}&filter=${moreData.filter}`
    );
    console.warn("api data", resp.data.result.filters);
    if(resp.data.response.success_message === "success"){
    this.products = resp.data.result.products;
    if(this.filters.length === 0){
      this.filters = resp.data.result.filters;
      this.sort = resp.data.result.sort;
      this.sort.forEach(element => {
        if(element.label === 'Price'){
          element.label = 'Price(Low to High)';
          element.sortBy = 'asc'
        } else {
          element.sortBy = 'desc';
        }
      });
      this.sort.push({ code: 'selling_price', label: 'Price(High to Low)', sortBy: 'desc'})
    }
    } else {
      this.products = [];
      this.error_message = resp.data.response.error_message;
    }
    },
    toggleButton(){
      this.detailVisible = !this.detailVisible
    },
    sorting() {
      this.moreData.sort_by = this.selectedSorting.code;
      this.moreData.sort_dir = this.selectedSorting.sortBy;
      this.apiCall(this.moreData)
    },
  
    filterProduct(checkbox, filter, heading) {
      console.log(heading)
      if(heading === 'Price'){
          filter.value = filter.value.replaceAll(' ', '+')
        }
      if (checkbox.target.checked) {
        var comaSeparate = ""
        if(this.moreData.filter !== ""){
           comaSeparate = ","
        }        
        this.moreData.filter = `${this.moreData.filter}${comaSeparate}${filter.code}-${filter.value}`
        this.apiCall(this.moreData);
      }else {
        this.moreData.filter = this.moreData.filter.replaceAll(filter.code+'-'+filter.value, '');
        const last = this.moreData.filter.charAt(this.moreData.filter.length - 1);
        const first = this.moreData.filter.charAt(0);
        if(last === ',' || first === ','){
          this.moreData.filter = last === ',' ?this.moreData.filter.slice(0, -1) : this.moreData.filter.slice(1, this.moreData.length)
        }
        this.apiCall(this.moreData);
      }
    },
  },
 
};
</script>
<style lang="css">
@import "~bootstrap/dist/css/bootstrap.css";
@import "../assets/main.scss";
</style>
