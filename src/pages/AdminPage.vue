<template>
<div class="page">
    <div class="center">
        <div class="container" id="calendar">
            <div class="containerHeader">
                <h1>Month</h1>
            </div>
            <a class="day1"><div class="day"><p>1</p><p class="WeekDay">Montag</p></div></a>
            <a><div class="day"><p>2</p><p class="WeekDay">Dienstag</p></div></a>
            <a><div class="day"><p>3</p><p class="WeekDay">Mittwoch</p></div></a>
            <a><div class="day"><p>4</p><p class="WeekDay">Donnerstag</p></div></a>
            <a><div class="day"><p>5</p><p class="WeekDay">Freitag</p></div></a>
            <a><div class="day"><p>6</p><p class="WeekDay">Samstag</p></div></a>
            <a><div class="day"><p>7</p><p class="WeekDay">Sonntag</p></div></a>
            <div class="pointer">▲</div>
            <div class="row1"></div>
            <a><div class="day"><p>8</p><p class="WeekDay">Montag</p></div></a>
            <a><div class="day"><p>9</p><p class="WeekDay">Dienstag</p></div></a>
            <a><div class="day"><p>10</p><p class="WeekDay">Mittwoch</p></div></a>
            <a><div class="day"><p>11</p><p class="WeekDay">Donnerstag</p></div></a>
            <a><div class="day"><p>12</p><p class="WeekDay">Freitag</p></div></a>
            <a><div class="day"><p>13</p><p class="WeekDay">Samstag</p></div></a>
            <a><div class="day"><p>14</p><p class="WeekDay">Sonntag</p></div></a>
            <a><div class="day"><p>15</p><p class="WeekDay">Montag</p></div></a>
            <a><div class="day"><p>16</p><p class="WeekDay">Dienstag</p></div></a>
            <a><div class="day"><p>17</p><p class="WeekDay">Mittwoch</p></div></a>
            <a><div class="day"><p>18</p><p class="WeekDay">Donnerstag</p></div></a>
            <a><div class="day"><p>19</p><p class="WeekDay">Freitag</p></div></a>
            <a><div class="day"><p>20</p><p class="WeekDay">Samstag</p></div></a>
            <a><div class="day"><p>21</p><p class="WeekDay">Sonntag</p></div></a>
            <a><div class="day"><p>22</p><p class="WeekDay">Montag</p></div></a>
            <a><div class="day"><p>23</p><p class="WeekDay">Dienstag</p></div></a>
            <a><div class="day"><p>24</p><p class="WeekDay">Mittwoch</p></div></a>
            <a><div class="day"><p>25</p><p class="WeekDay">Donnerstag</p></div></a>
            <a><div class="day"><p>26</p><p class="WeekDay">Freitag</p></div></a>
            <a><div class="day"><p>27</p><p class="WeekDay">Samstag</p></div></a>
            <a><div class="day"><p>28</p><p class="WeekDay">Sonntag</p></div></a>
            <a><div class="day"><p>29</p><p class="WeekDay">Montag</p></div></a>
            <a><div class="day"><p>30</p><p class="WeekDay">Dienstag</p></div></a>
            <a><div class="day"><p>31</p><p class="WeekDay">Mittwoch</p></div></a>
            <a><div class="day"><p>1</p><p class="WeekDay">Donnerstag</p></div></a>
            <a><div class="day"><p>2</p><p class="WeekDay">Freitag</p></div></a>
            <a><div class="day"><p>3</p><p class="WeekDay">Samstag</p></div></a>
            <a><div class="day"><p>4</p><p class="WeekDay">Sonntag</p></div></a>
        </div>
        <div class="container" id="station">
            <div class="containerHeader">
                <h1>Station: one¹</h1>
            </div>
        </div>
    </div>    
</div>  
</template>

<script>
export default {
  data() {
    return {
    };
  },
  methods: {
  },
  mounted() {
  }
};
</script>

<style scoped>
.page {
  float: left;
  position: relative;
  left: 50%;
}

.center {
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

#calendar a{
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

h1 {
  text-align: center;
  margin: 0;
  font-size: 50px;
}

.day{
    height: 60px;
    width: 60px;
    margin: 10px 0 0 10px;
    float: left;
}

p{
    text-align: center;
    font-family: 'Source Sans Pro', 'sans serif';
    font-size: 30px;
    margin: 10px 0 0 0;
}

.WeekDay{
    font-size: 10px;
    margin: 0 0 0 0;
}

.row1{
    height: 0;
    width: 100%;
    bottom: 5px;
    position: relative;
    -webkit-transition: height 0.3s;
    transition: height 0.3s;
}

#calendar:active .row1{
    height: 50px;
}

.pointer{
    font-size: 20px;
    color: #3c3c3c;
}

#calendar:active .pointer{
    font-size: 20px;
    margin: 0 0 0 30px;
}
</style>