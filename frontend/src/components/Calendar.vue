<template>
  <div id="calendar" class="tool-container">
    <TitleBar></TitleBar>
    <div class="calendar tool-body">
      
      <!-- <Day v-for="day in days" :day="day" :key="day"></Day> -->
      <div class="weekdays" v-for="weekday in weekdays" :key="weekday">
        <p>{{ weekday }}</p>
      </div>
      <Day day="1"></Day>
      <Day day="2"></Day>
      <Day day="3"></Day>
      <Day day="4"></Day>
      <Day day="5"></Day>
      <Day day="6"></Day>
      <Day day="7"></Day>
      <Day day="8"></Day>
      <Day day="9"></Day>
      <Day day="10"></Day>
      <Day day="11"></Day>
      <Day day="12"></Day>
      <Day day="13"></Day>
      <Day day="14"></Day>
      <Day day="15"></Day>
      <Day day="16"></Day>
      <Day day="17"></Day>
      <Day day="18"></Day>
      <Day day="19"></Day>
      <Day day="20"></Day>
      <Day day="21"></Day>
      <Day day="22"></Day>
      <Day day="23"></Day>
      <Day day="24"></Day>
      <Day day="25"></Day>
      <Day day="26"></Day>
      <Day day="27"></Day>
      <Day day="28"></Day>
      <Day day="29"></Day>
      <Day day="30"></Day>
      <Day day="31"></Day>
    </div>
  </div>
</template>

<script>
import TitleBar from "./TitleBar"
import Day from "./Day"
import moment from "moment"

export default {
  components: {
    TitleBar,
    Day
  },
  data() {
    return {
        today: moment(),
        dateContext: moment(),
        weekdays: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    }
  },
  mounted() {
  },
  computed: {
    year: function () {
      return this.dateContext.format('Y');
    },
    month: function () {
      return this.dateContext.format('M');
    },
    monthName: function () {
      return this.dateContext.format('MMMM');
    },
    day: function () {
      return this.dateContext.get('date');
    },
    daysInMonth: function () {
      return this.dateContext.daysInMonth();
    },
    firstDayOfMonth: function () {
      var firstDay = moment(this.dateContext).subtract((this.currentDate - 1), 'days');
      return firstDay.weekday();
    },
    initialDate: function () {
        return this.today.get('date');
    },
    initialMonth: function () {
        return this.today.format('MMMM');
    },
    initialYear: function () {
        return this.today.format('Y');
    }
  },
  methods: {
    next: function () {
        this.dateContext = moment(this.dateContext).add(1, 'month');
    },
    prev: function () {
        this.dateContext = moment(this.dateContext).subtract(1, 'month');
    }
  }
}
</script>

<style scoped>
.weekdays {
  display: inline-block;
  width: 14.286%;
  text-align: center;
}

.weekdays p {
  font-weight: bold;
  font-size: calc(0.4em + 1vw);
  color: rgb(27, 155, 240);
}
</style>
