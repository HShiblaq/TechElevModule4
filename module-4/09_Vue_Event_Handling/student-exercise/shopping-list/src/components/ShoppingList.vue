<template>
    <div class="shopping-list">
        <h1>My Shopping List</h1>
        <ul>
            <li v-on:click="changeStatus(item.id)" v-for="item in groceries" v-bind:key="item.id" v-bind:class="{ completed: item.completed }">
               <input type="checkbox" v-model = "item.completed" v-bind:id="item.id" />  {{item.name}} 
                <i class="far fa-check-circle" v-bind:class="{ completed: item.completed }"></i>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            groceries: [
                { id: 1,name: 'Oatmeal', completed: false }, //name is property of the item 
                { id: 2,name: 'Milk', completed: false },
                { id: 3,name: 'Banana', completed: false },
                { id: 4,name: 'Strawberries', completed: false },
                { id: 5,name: 'Lunch Meat', completed: false },
                { id: 6,name: 'Bread', completed: false },
                { id: 7,name: 'Grapes', completed: false },
                { id: 8,name: 'Steak', completed: false },
                { id: 9,name: 'Salad', completed: false }
            ]
        }
    },
    // model is groceries until you change some elements, vue - when completed changes , VUE rerenders the ui, 
    methods: {
        // assign function to a property
         changeStatus: function(id) {
             //toggling values 
            this.groceries[id-1].completed = !this.groceries[id-1].completed ;
            
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
i.far.fa-check-circle { 
    float:right;
    color: darkgray;
}

i.far.fa-check-circle.completed {
    color:green;
}
input[type="checkbox"] {
    font-size:40px;
    vertical-align: middle;
    margin-top:0px;
}

li:hover{
 cursor: pointer;
}
</style>
