<template>
  <div class="page">
    <div class="center">
      <div class="container" id="calendar">
        <Day></Day>
        <!--<div class="containerHeader">
                <h1>Month</h1>
            </div>
            <a class="day1"><div class="day"><p>1</p><p class="WeekDay">Montag</p></div></a>
            <div class="pointer">▲</div>
        <div class="row1"></div>-->
      </div>
      <div class="container" id="station">
        <div class="containerHeader">
          <h1 class="title">Station: one¹</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Day from "../components/Day";

export default {
  components: {
    Day
  },
  data() {
    return {};
  },
  methods: {
    getDays() {
      var day = "";
      for (var i = 1; i < 32; i++) {
        day += "<Day></Day>";
      }
      document.getElementById("calendar").innerHTML = day;
    }
  },
  mounted() {
    this.getDays();
  }
};
</script>

<style scoped>
.page {
  float: left;
  position: relative;
  left: 50%;
}

.primary {
  width: 1050px;
  float: left;
  position: relative;
  top: 100px;
  left: -50%;
}

.container {
  height: 520px;
  width: 500px;
  border-radius: 20px;
}

#calendar {
  float: left;
}

#calendar a {
  margin: 0;
}

#station {
  float: right;
}

.containerHeader {
  height: 70px;
  width: 100%;
  border-radius: 20px;
}

.title {
  text-align: center;
  margin: 0;
  font-size: 3.5em;
}

.day {
  height: 60px;
  width: 60px;
  margin: 10px 0 0 10px;
  float: left;
}

p {
  text-align: center;
  font-family: "Source Sans Pro", "sans serif";
  font-size: 30px;
  margin: 10px 0 0 0;
}

.WeekDay {
  font-size: 10px;
  margin: 0 0 0 0;
}

.row1 {
  height: 0;
  width: 100%;
  bottom: 5px;
  position: relative;
  -webkit-transition: height 0.3s;
  transition: height 0.3s;
}

#calendar:active .row1 {
  height: 50px;
}

.pointer {
  font-size: 20px;
  color: #3c3c3c;
}

#calendar:active .pointer {
  font-size: 20px;
  margin: 0 0 0 30px;
}
</style>