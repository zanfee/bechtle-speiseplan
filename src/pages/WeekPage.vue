<template>
<table>
  <tr>
    <th>Montag</th>
    <th>Dienstag</th>
    <th>Mittwoch</th> 
    <th>Donnerstag</th> 
    <th>Freitag</th> 
  </tr>
  <tr>
    
    <td>Jill</td>
    <td>94</td>
  </tr>
  <tr>
    
    <td>Eve</td>
    <td>Jackson</td> 
  </tr>
  <tr>
    
    <td>Eve</td>
    <td>Jackson</td> 
  </tr>
  <tr>
    
    <td>Eve</td>
    <td>Jackson</td> 
  </tr>
</table>
<!-- <div>
  <div class="block station">
    <h1 class="heading">Station</h1>
  </div>
  <div class="block weekday">
    <h1 class="heading">Montag</h1>
  </div>
  <div class="block weekday">
    <h1 class="heading">Dienstag</h1>
  </div>
  <div class="block weekday">
    <h1 class="heading">Mittwoch</h1>
  </div>
  <div class="block weekday">
    <h1 class="heading">Donnerstag</h1>
  </div>
  <div class="block weekday">
    <h1 class="heading">Freitag</h1>
  </div>
</div> -->
</template>

<script>
export default {};
</script>

<style>
table {
  width: 100%;
  /* table; */
}

th {
  font-size: 3em;
}

.fit th {
  font-size: 4vw;
}

td {
  text-align: center;
}

.heading {
  font-size: 1em;
  text-align: center;
}

.fit .heading {
  font-size: 1em;
  text-align: center;
}

.block {
  display: inline-block;
  font-size: 3vw;
  margin: 0;
  font-size: 3.5em;
}

.weekday {
  width: 326px;
}

.fit .weekday {
  width: 17%;
}

.station {
  width: 288px;
  height: 100%;
}

.fit .station {
  width: 15%;
  height: 100%;
}

.title {
  text-align: center;
  margin: 0;
  font-size: 3.5em;

}
</style>
