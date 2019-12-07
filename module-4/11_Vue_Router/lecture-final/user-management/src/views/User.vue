<template>
  <div class="user-profile">
    <pre>{{user}}</pre>
    <router-link to="/users">Back to Users List</router-link>
  </div>
</template>

<script>
import userService from '@/service/UserService';

export default {
  name: 'user-profile',
  data() {
    return {
      user: null,
    }
  },
  methods: {
    getUser(id) {
      userService.get(id).then(user => this.user = user);
    }
  },
  created() {
    this.getUser(this.$route.params.id);
  }
}
</script>
