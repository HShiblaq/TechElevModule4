<template>
  <div class="notfound">
    <h1>Not Found</h1>
    <p>The page you are looking for was not found. Below is a list of our most popular pages: </p>
    <ul>
      <li><router-link to="/" exact>Home</router-link></li>
      <li><router-link to="/personal">Personal Todos</router-link></li>
      <li><router-link to="/work">Work Todos</router-link></li>
      <li><router-link to="/house">Household Todos</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'not-found-component'
}
</script>

<style scoped>
ul {
  list-style-type: none;
}
li a, li a:visited {
  color:black;
  background-color: none;
}

</style>
