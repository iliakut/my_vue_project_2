<template>
  <div>
    <h2>Редактирование пользователя {{ id }}</h2>
    <div v-if="!user"
         class="alert alert-warning">
      Загрузка...
    </div>
    <user-form
      v-else
      :user="user"
      @sendInput="currUser => user = currUser"/>
    <pre>{{ user }}</pre>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'EditUser',
  data: function() {
    return {
      user: null
    }
  },
  computed: {
    id() {
      return this.$route.params.id
    },
    url() {
      return `http://localhost:3004/users/${this.id}`
    }
  },
  mounted() {
    this.loadUser()
  },
  methods: {
    loadUser() {
      axios
        .get(this.url)
        .then(response => response.data)
        .then(user => (this.users = user))
        .catch(error => console.log(error))
    }
  }
}
</script>

<style scoped>
</style>
