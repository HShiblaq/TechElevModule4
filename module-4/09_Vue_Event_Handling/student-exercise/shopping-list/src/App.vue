<template>
  <div id="app">
    <shopping-list></shopping-list>
  </div>
</template>

<li v-for="item in groceries" v-bind:key="item.id" v-bind:class="{ completed: item.completed }">
  {{item.name}} 
<i class="far fa-check-circle" v-bind:class="{ completed: item.completed }"></i>
</li>

<script>
import ShoppingList from './components/ShoppingList';

export default {
  name: 'app',
  components: {
    ShoppingList
  }
}
</script>

<style>
body {
  background: rgb(61,201,164);
  background: radial-gradient(circle, rgba(61,201,164,1) 50%, rgba(92,133,120,1) 100%);
}
</style>
