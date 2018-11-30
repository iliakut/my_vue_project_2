<template>
  <div class="about">
    <h1>Список пользователей</h1>
    <pagination-form
      @changeRaws="usersPerPage => rows = usersPerPage"
    />
    <div
      v-if="!users.length"
      class="alert alert-warning">
      Загрузка...
    </div>
    <user-list
      v-else
      :users="users"
      :rows="rows"/>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Users',
  components: {
    'user-list': () => import('@/components/UserList.vue'),
    'pagination-form': () => import('@/components/Pagination/Pagination.vue')
  },
  data: () => ({
    users: [],
    rows: '2'
  }),
  computed: {},
  mounted() {
    this.loadUsers()
  },
  methods: {
    loadUsers() {
      axios
        .get('http://localhost:3004/users')
        .then(response => response.data)
        .then(users => (this.users = users))
        .catch(error => console.log(error))
    }
  }
}
</script>

<style scoped>
h1 {
  color: #4e0435;
}
</style>
