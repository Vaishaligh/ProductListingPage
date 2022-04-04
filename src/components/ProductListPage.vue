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
  <div class="top-header">
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
            <p>{{ products.length }} items</p>
          </div>
        </div>
      </div>
      <div class="container-fluid d-inline-block p-0">
        <div class="row">
          <div class="col-md-2 col-12 sidebar-main">
            <div class="top" style="position: sticky; top: 115px">
              <div class="sidebar-header">
                <h3>
                  <p class="hideFilterWrap">
                    <img src="../assets/filter-icon.svg" /><span>Hide</span
                    >Filter
                  </p>
                </h3>
              </div>
            </div>
          </div>
          <div class="col-md-10 col-12 product-section-main">
            <div class="row row-filter pr-3">
              <div class="col-md-9 col-sm-9">
                <div class="list-unstyled components"></div>
                <div class="col-md-3 col-sm-3 product-sort">
                  <select
                    class="sortnew"
                    v-model="selectedSorting"
                    @change="sorting"
                  >
                    <option value="low_high">Price (Low to High)</option>
                    <option value="high_low">Price (High to Low)</option>
                    <option value="discount">Discount</option>
                    <option value="product_position">Newest</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-2 col-12 sidebar-main">
          <nav id="sidebar">
            <div class="sidebar-header">
              <h3 class="font-bold">Filter</h3>
            </div>
            <div class="accordion" id="filterAccordion">
              <div
                class="accordion-item"
                v-for="(filter, index) in filters"
                :key="index"
              >
                <h2 class="accordion-header">
                  <button
                    class="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    :data-bs-target="'#' + filter.id"
                    aria-expanded="true"
                    :aria-controls="filter.id"
                  >
                    {{ filter.filter_lable }}
                  </button>
                </h2>
                <div
                  :id="filter.id"
                  class="accordion-collapse collapse"
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
                        v-model="isFilter"
                        @change="filterProduct(option.value)"
                      /><span>{{ option.value }} ({{ option.total }})</span></a
                    >
                  </li>
                </div>
              </div>
            </div>
          </nav>
        </div>
        <div class="col-md-10 col-12 product-section-main">
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
                      <p class="card-text">{{ product.size }}</p>
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
      </div>
    </div>
  </div>
  <!--section end -->
  <!--pagination start -->
  <div class="container-fluid" style="margin-top: 60px">
    <span class="page-count">Page 1 to 6</span>
    <ul class="pagination">
      <li class="page-item"><a class="page-1" aria-label="1">1</a></li>
      <li class="page-item"><a class="" aria-label="2">2</a></li>
      <li class="page-item"><a class="" aria-label="3">3</a></li>
      <li class="page-item"><a class="" aria-label="4">4</a></li>
      <li class="page-item"><a class="" aria-label="5">5</a></li>
      <li class="page-item"><a class="" aria-label="6">6</a></li>
      <li class="page-item">
        <a class="next" aria-label="Next">Next<span>&raquo;</span></a>
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
            <h2 class="">Shop</h2>
            <div class="mobile-view">
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
            <h2 class="">QUICK LINKS</h2>
            <div class="mobile-view">
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
            <h2 class="">CUSTOMER SERVICE</h2>
            <div class="mobile-view">
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
            <h2 class="">MY PROFILE</h2>
            <div class="mobile-view">
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
      selectedSorting: "A",
      list: [],
      products: [],
      filters: [],
      isFilter: false,
    };
  },
  async mounted() {
    let resp = await axios.get(
      "https://pim.wforwoman.com/pim/pimresponse.php/?service=category&store=1&url_key=top-wear-kurtas&page=1&count=20&sort_by=&sort_dir=desc&filter="
    );
    console.warn("api data", resp.data.result.filters);
    this.products = resp.data.result.products;
    this.filters = resp.data.result.filters;
  },
  methods: {
    sorting() {
      if (this.selectedSorting == "low_high") {
        this.products = this.products.sort(this.low_high);
      } else if (this.selectedSorting == "high_low") {
        this.products = this.products.sort(this.high_low);
      } else if (this.selectedSorting == "discount") {
        this.products = this.products.sort(this.discount);
      } else if (this.selectedSorting == "product_position") {
        this.products = this.products.sort(this.product_position);
      }
    },
    low_high(a, b) {
      if (a.price.toLowerCase() < b.price.toLowerCase()) {
        return -1;
      }
      if (a.price.toLowerCase() > b.price.toLowerCase()) {
        return 1;
      }
      return 0;
    },
    high_low(a, b) {
      if (a.price.toLowerCase() > b.price.toLowerCase()) {
        return -1;
      }
      if (a.price.toLowerCase() < b.price.toLowerCase()) {
        return 1;
      }
      return 0;
    },
    discount(a, b) {
      if (a.discount.toLowerCase() > b.discount.toLowerCase()) {
        return -1;
      }
      if (a.discount.toLowerCase() < b.discount.toLowerCase()) {
        return 1;
      }
      return 0;
    },
    product_position(a, b) {
      if (a.product_position.toLowerCase() > b.product_position.toLowerCase()) {
        return -1;
      }
      if (a.product_position.toLowerCase() < b.product_position.toLowerCase()) {
        return 1;
      }
      return 0;
    },
    filterProduct(filtervalue) {
      this.isFilter = !this.isFilter;
      if (this.isFilter) {
        this.products = this.products.filter(
          (product) => product.category === filtervalue
        );
      }
    },
  },
};
</script>
<style lang="css">
@import "~bootstrap/dist/css/bootstrap.css";
@import "../assets/main.scss";
</style>
