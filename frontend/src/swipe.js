import store from './store'

var swiper = {

  touchStartX: 0,
  touchEndX: 0,
  minSwipePixels: 40,
  detectionZone: undefined,
  swiperCallback: function () {},

  init: function (detectionZone, callback) {
    swiper.swiperCallback = callback
    detectionZone.addEventListener('touchstart', function (event) {
      swiper.touchStartX = event.changedTouches[0].pageX;
    }, false);
    detectionZone.addEventListener('touchend', function (event) {
      swiper.touchEndX = event.changedTouches[0].pageX;
      if (swiper.touchStartX < document.body.clientWidth / 8 || store.state.isSidebarOpen) {
        swiper.handleSwipeGesture();
      }    
    }, false);
  },

  handleSwipeGesture: function () {
    var direction,
      moved
    if (swiper.touchEndX <= swiper.touchStartX) {
      moved = swiper.touchStartX - swiper.touchEndX
      direction = "left"
    }
    if (swiper.touchEndX >= swiper.touchStartX) {
      moved = swiper.touchEndX - swiper.touchStartX
      direction = "right"
    }
    if (moved > swiper.minSwipePixels && direction !== "undefined") {
      swiper.swipe(direction, moved)
    }
  },

  swipe: function (direction, movedPixels) {
    var ret = {}
    ret.direction = direction
    ret.movedPixels = movedPixels
    swiper.swiperCallback(ret)
    if (direction == "right" ^ store.state.isSidebarOpen) {
      store.commit('toggleSidebar');
    }
  }
}

var gestureZone = document;
swiper.init(gestureZone, function () {})

export default {};