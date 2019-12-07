<template>
  <div class="work">
    <h1>Work</h1>
    <todo-list :todos="work"/>
  </div>
</template>

<script>
import TodoList from '@/components/TodoList'

export default {
  name: 'work',
  components: {
    TodoList
  },
  data() {
    return {
      work: [
        { id: 1, title: '8:00 AM Meeting with Marketing about the new blog post' },
        { id: 2, title: '9:00 AM - 10:00 AM work on the new student book material' },
        { id: 3, title: '10:00 AM Standup' },
        { id: 4, title: '12:00 PM - 1:00 PM Lunch' },
        { id: 5, title: '1:30 PM - 2:30 PM Instructor call'},
        { id: 6, title: '3:00 PM - 4:00 PM Lecture notes for the new content' },
        { id: 7, title: '4:30 PM - 5:30 PM All Team Meeting' }
      ]
    }
  }
}
</script>
