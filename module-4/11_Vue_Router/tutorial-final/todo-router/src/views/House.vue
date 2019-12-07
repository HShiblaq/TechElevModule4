<template>
  <div class="house">
    <h1>House</h1>
    <todo-list :todos="house"/>
  </div>
</template>

<script>
import TodoList from '@/components/TodoList'

export default {
  name: 'house',
  components: {
    TodoList
  },
  data() {
    return {
      house: [
        { id: 1, title: 'Cut the grass and blow off the back patio' },
        { id: 2, title: 'Trim the bushes' },
        { id: 3, title: 'Clean out the garage' },
        { id: 4, title: 'Power wash driveway and house' },
        { id: 5, title: 'Get estimate for a new bathtub in the main bathroom' },
        { id: 6, title: 'Replace carpet in the basement' },
        { id: 7, title: 'Paint the guest bedroom' },
        { id: 8, title: 'Find new indoor / outdoor carpet for the sunroom' }
      ]
    }
  }
}
</script>
