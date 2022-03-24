<template>
<header class="header">
  <nav class="navbar">
  <a href="#" class="women">WOMEN<i class="fas fa-sort-desc" aria-hidden="true"></i></a>
  <a href="#" class="men">MEN<i class="fas fa-sort-desc" aria-hidden="true"></i></a>
  <a href="#" class="sale">SALE<i class="fas fa-sort-desc" aria-hidden="true"></i></a>
  <a href="#" class="collection">COLLECTION<i class="fas fa-sort-desc" aria-hidden="true"></i></a>
  <a href="#"  class="logo"></a>
  </nav>
</header>
<div class="products">
  <div class="container">
    <h1 class="lg-title">Women Pashima Shawls</h1>
    <div class="product-items">
      <div class="product">
        <div class="product-content">
          <div class="product-img">
            <img src="../assets/download.jpg"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

</template>

<script>

export default {
  name: 'ProductListPage',
  props: {
    msg: String
  }
}
</script>
<style>
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  outline: none;
  border: none;
  text-decoration: none;
  text-transform: capitalize;
  transition: all .2s linear;
}

.products{
  padding: 3.2rem 0;
}
.products .text-light{
  text-align: center;
  width: 70%;
  margin: 0.9rem;
}
.product{
  margin: 2rem;
  position: relative;
  background: #fff
}
.logo{
background: transparent url('../assets/Group 2.png') 0% 0% no-repeat padding-box;
opacity: 1;
}
.navbar{
  background-color: blue;
  
}



</style>