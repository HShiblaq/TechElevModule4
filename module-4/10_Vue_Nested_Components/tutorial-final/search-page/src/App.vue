<template>
  <div id="app">
    <!-- search box is a child and  made up attribute or url  -->
    <!-- handle results is the method  -->
    <search-box
      search-url="https://vpic.nhtsa.dot.gov/api/vehicles/getmakeformanufacturer/"
      v-on:search-results="handleResults">
    </search-box>
    <!-- search results is bound to the value "searchResults"  -->
    <!-- think of it as one single thing called results bound to searchResults -->
    <!-- onece u change it in one place it will change in other places  -->
    <results-display v-bind:results="searchResults"></results-display>
  </div>
</template>

<script>
import SearchBox from './components/SearchBox.vue';
import ResultsDisplay from './components/ResultsDisplay.vue';

export default {
  name: 'app',
  components: {
    SearchBox,
    ResultsDisplay
  },
  // data element is bound to the display results 
  data() {
    return {
      searchResults: { "Results": [] }
    }
  },
  methods: {
    handleResults(newResults) {
      this.searchResults = newResults;
    }
  }
}
</script>
