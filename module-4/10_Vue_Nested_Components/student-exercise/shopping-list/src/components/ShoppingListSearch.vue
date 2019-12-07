<template>
  <div class="shopping-list-search">
    <h2>{{title}}</h2>
    <ul>
      <li
        v-for="todo in todos"
        v-bind:key="todo.id"
        v-bind:class="{'todo-completed': todo.completed}"
        v-on:click="changeStatus(todo.id, $event)"><input type="checkbox" />
        {{todo.task}}
        <i class="far fa-check-circle" v-bind:class="{completed: todo.completed}"></i>
      </li>
    </ul>
    
  </div>
</template>