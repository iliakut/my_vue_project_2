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
  </div>
</template>

<script>
import axios from 'axios'
import UserForm from '@/components/UserForm.vue'

export default {
  name: 'EditUser',
  components: {
    UserForm
  },
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
        .then(user => (this.user = user))
        .catch(error => console.log(error))
    }
  }
}
</script>

<style scoped>
</style>
