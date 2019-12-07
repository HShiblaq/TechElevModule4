<template>
  <div id="app">
    <h1>Nested Components Exercise</h1>
    <shopping-list-search></shopping-list-search>
    <shopping-list v-bind:todos="groceries"></shopping-list>
    <shopping-list v-bind:todos="costco"></shopping-list>
    <shopping-list v-bind:todos="target"></shopping-list>
    <shopping-list-search v-on:filter-tasks="handleSearch"></shopping-list-search>
    <input type="text" id="search" name="search" v-on:keyup="filterTasks" placeholder="Search Todo's..."/>
  </div>
</template>
 
<script>
import ShoppingList from './components/ShoppingList.vue'
import ShoppingListSearch from './components/ShoppingListSearch.vue'

export default {
  name: 'app',
  components: {
    ShoppingList,
    ShoppingListSearch

  },


  data() {
    return { 
            search : '',
            groceries: [
                { id: 1, name: 'Oatmeal', completed: false },
                { id: 2, name: 'Milk', completed: false },
                { id: 3, name: 'Banana', completed: false },
                { id: 4, name: 'Strawberries', completed: false },
                { id: 5, name: 'Lunch Meat', completed: false }
                ],
            costco: [
                { id: 1, name: 'Paper Towels', completed: false },
                { id: 2, name: 'Toilet Paper', completed: false },
                { id: 3, name: 'Bottled Water', completed: false },
                { id: 4, name: 'Paper Plates', completed: false },
                { id: 5, name: 'Pepsi', completed: false }
                ],
            target: [
                { id: 1, name: 'Baby Food', completed: false },
                { id: 2, name: 'Candles', completed: false },
                { id: 3, name: 'Aspirin', completed: false },
                { id: 4, name: 'Dish Soap', completed: false },
                { id: 5, name: 'Laundry Soap', completed: false }
                ]
        }
      
    }
  ,
  methods: {

  }
}
</script>

<style>
body {
  background: rgb(61,201,164);
  background: radial-gradient(circle, rgba(61,201,164,1) 50%, rgba(92,133,120,1) 100%);
}
#app {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
}
h1 {
  grid-row: 1;
  grid-column: 1 / 4;
  text-align:center;
  color:#f2f2f2;
  text-transform: uppercase;
  font-family: 'Roboto Condensed', sans-serif;
}
.search { 
  grid-column: 2 / 3;
  grid-row: 2;
}
.shopping-list {
  grid-row: 3;
}
</style>
