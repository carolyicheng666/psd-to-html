<template>
  <div id="app">
    <div class="public-header">
      <div class="public-container clearfix">
        <div class="header-logo">
          <a href=""></a>
        </div>
        <ul class="header-nav">
          <li class="item" v-for="item in header"><a href="">{{item}}</a></li>
        </ul>
      </div>
    </div>
    <div class="index-banner">
      <div class="index-banner-bg">
        <img src="./images/demo1.jpg" alt="banner">
      </div>
      <div class="index-banner-text">
        <div class="text-logo"></div>
        <p class="text-info">
          <i class="line line-l"></i>
          <span class="txt">resto restaurant home page website template</span>
          <i class="line line-r"></i>
        </p>
      </div>
    </div>
    <div class="index-menu">
      <div class="menu-tips">The Menu</div>
      <div class="public-container menu-list">
        <ul class="clearfix">
          <template v-for="item in menu">
            <li class="menu-item clearfix">
              <a class="title">
                <h4>{{item.title}}</h4>
                <p class="comment">{{item.comment}}</p>
              </a>
              <div class="line"></div>
              <div class="price">{{item.price}}</div>
            </li>
          </template>
        </ul>
      </div>
      <a href="" class="menu-more-btn">
        load more 
        <span>|</span>
        <span class="icon"></span>
      </a>
    </div>
    <div class="public-container index-panel">
      <div class="index-panel-header clearfix">
        <h3>Featured Dishes</h3>
        <div class="line"></div>
        <div class="btn-group">
          <a v-for="(btn, index) in 4" href="" :class="{btn, active: index===1}"></a>
        </div>
      </div>
      <div class="index-panel-body index-food-list">
        <ul class="clearfix">
          <template>
            <li class="food-item" v-for="(item, index) in food">
              <a href="">
                <img class="banner" :src="item.src">
                <div class="name"><span class="price">{{item.price}}</span>{{item.name}}</div>
                <div class="star-bar" >
                  <span v-for="(star, i) in 5" :class="{star, nostar: ((index<=1||index===3)&&i===4)||(index===1&&i===3)}"></span>
                </div>
              </a>
            </li>
          </template>
        </ul>
      </div>
    </div>
    <div class="public-container index-panel">
      <div class="index-panel-header clearfix">
        <h3>The Gallery</h3>
        <div class="line"></div>
      </div>
      <div class="index-panel-body index-pics">
        <a class="pic-col pic-col-m"><img class="sr-foods" src="./images/food5.jpg"></a>
        <div class="pic-col pic-col-s">
          <a class="pic-row"><img class="sr-foods" src="./images/food6.jpg"></a>
          <a class="pic-row"><img class="sr-foods" src="./images/food7.jpg"></a>
        </div>
        <a class="pic-col pic-col-l"><img class="sr-foods" src="./images/food8.jpg"></a>
      </div>
    </div>
    <div class="public-footer">
      <div class="public-container">
        <div class="footer-col">
          <p>New York Restaurant<br>3926 Anmoore Road<br>New York, NY 10014<a tel="">718-749-1714</a></p>
        </div>
        <div class="footer-col">
          <p>France Restaurant<br>68, rue  de la Couronne<br>75002 PARIS<br>02.94.23.69.56</p>
        </div>
        <div class="footer-col">
          <a href="">Blog</a>
          <a href="">Careers</a>
          <a href="">Privacy Policy</a>
          <a>Contact</a>
        </div>
        <div class="footer-col footer-col-last">
          <div class="footer-logo"></div>
          <div class="foot-info">&copy; All Rights Reserved 2014.<br>Find  More at Pixelhint.com</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        header: ['Our Story', 'Menu', 'Reservations', 'News', 'Rviews'],
        menu: [
          { title: 'Voluptate cillum fugiat.', comment: 'Cheese, tomato, mushrooms, onions.', price: '$50' },
          { title: 'Voluptate cillum fugiat.', comment: 'Cheese, tomato, mushrooms, onions.', price: '$50' },
          { title: 'Voluptate cillum fugiat.', comment: 'Cheese, tomato, mushrooms, onions.', price: '$50' },
          { title: 'Voluptate cillum fugiat.', comment: 'Cheese, tomato, mushrooms, onions.', price: '$50' },
          { title: 'Voluptate cillum fugiat.', comment: 'Cheese, tomato, mushrooms, onions.', price: '$50' },
          { title: 'Voluptate cillum fugiat.', comment: 'Cheese, tomato, mushrooms, onions.', price: '$50' },
          { title: 'Voluptate cillum fugiat.', comment: 'Cheese, tomato, mushrooms, onions.', price: '$50' },
          { title: 'Voluptate cillum fugiat.', comment: 'Cheese, tomato, mushrooms, onions.', price: '$50' }
        ],
        food: [
          { src: require('./images/food1.jpg'), price: '$30', name: 'Fugiat nulla sint' },
          { src: require('./images/food2.jpg'), price: '$24', name: 'Daute irure dolor' },
          { src: require('./images/food3.jpg'), price: '$60', name: 'Officia deserunt mollit' },
          { src: require('./images/food4.jpg'), price: '$17', name: 'Pim minim veniam' }
        ]
      }
    },
    mounted: function() {
      window.sr = ScrollReveal();
      sr.reveal('.banner', {
        duration: 600,
        scale: 0.3,
        distance: '0px',
        reset: true
      }, 200);
      sr.reveal('.sr-foods', {
        duration: 600,
        scale: 0.3,
        distance: '0px',
        reset: true
      }, 100);
    }
  }
</script>
<style lang="scss">
  @import './sass/reset.scss';
  @import './sass/common.scss';
  @import './sass/index.scss';
</style>