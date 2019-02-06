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
      <td>Here</td>
      <td>is</td>
    </tr>
    <tr>
      <td>some</td>
      <td>random</td>
    </tr>
    <tr>
      <td>data</td>
      <td>:)</td>
    </tr>
    <tr>
      <td>WIP</td>
      <td>...</td>
    </tr>
  </table>
</template>

<script>
export default {};
</script>

<style>
table {
  width: 100%;
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
