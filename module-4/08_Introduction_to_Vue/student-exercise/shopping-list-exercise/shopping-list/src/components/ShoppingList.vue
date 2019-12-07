<template>
  <div class="shopping-list">
    <h1>My Shopping List</h1>
    <ul>
      <!-- if completed for loop executes list item//Completed is the class name from CSS  -->
      <!-- add this class completed if item competed is true then add completed to item -->
    <li v-for = "item in groceries" v-bind:key ="item.name" v-bind:class ="{completed:item.completed}">{{item.name}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
     groceries: [{
        name: 'Salt',completed: false, 
      }, {
        name: 'Pepper', completed: true,
      },{
        name: 'Mint', completed: true,
      },{
        name: 'Basil', completed: false,
      },{
        name: 'Duck',completed: true,
      },{
        name: 'Cheese',completed: true,
      },{
        name: 'Rosemary',completed: true,
      },{
        name: 'Olives', completed: true,
      },{
        name: 'Bread',completed: true,
      }],
    }
  }
}
</script>

<style>
.shopping-list {
  width:450px;
  background: #fff;
  margin: 50px auto;
  font-family: 'Roboto Condensed', sans-serif;
  border-radius: 10px;
}
h1 {
  background:#f2f2f2;
  color:#5c8578;
  padding:10px;
  font-size:24px;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 0px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}
ul {
  list-style-type: none;
  margin:0px;
  padding:0px;
}
li {
  font-size: 24px;
  border-bottom:1px solid #f2f2f2;
  padding:10px 20px;
}
li:last-child{
  border:0px;
}
li.completed {
  text-decoration: line-through;
  color:darkgrey;
}
</style>
