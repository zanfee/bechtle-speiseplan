<template>
<div class="page">
    <div class="center">
        <div class="container" id="calendar">
            <div class="containerHeader">
                <h1>Month</h1>
            </div>
        </div>
        <div class="container" id="station">
            <div class="containerHeader">
                <h1>Station: one</h1>
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
  height: 500px;
  width: 500px;
  background-color: #505050;
  border-radius: 20px;
}

#calendar {
  float: left;
}

#station {
  float: right;
}

.containerHeader {
  height: 70px;
  width: 100%;
  border-radius: 20px;
  background-color: #757575;
}

h1 {
  text-align: center;
  margin: 0;
  font-size: 50px;
}
</style>