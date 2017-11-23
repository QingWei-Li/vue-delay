<template>
  <div>
    <h1>Vue Delay Demo</h1>

    <p>wait 2s</p>
    <delay class="box" :wait="2000">
      <div slot="loading">Ahem...</div>
      <h3>1111</h3>
    </delay>

    <p>wait 3s</p>
    <delay class="box" :from="Date.now() + 1000" :wait="2000">
      <h2>2222</h2>
    </delay>

    <p>wait 4s</p>
    <delay class="box" :wait="4000">
      <h1>3333</h1>
    </delay>
  </div>
</template>

<script>
import Delay from '@/'
import Vue from 'vue'

Vue.use(Delay)

export default {}
</script>

<style>
.box {
  border: 1px solid #f0f0f0;
  width: 200px;
  margin-bottom: 40px;
  height: 80px;
  text-align: center;
}
</style>