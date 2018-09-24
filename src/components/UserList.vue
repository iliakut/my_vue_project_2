<template>

  <table class="table table-hover">
    <caption>
      Общее количество пользователей: {{ users.length }}
    </caption>
    <thead>
      <tr>
        <th>Имя</th>
        <th>Фамилия</th>
        <th>Активен</th>
        <th>Баланс</th>
        <th>Email</th>
        <th>Телефон</th>
        <th>Зарегистрирован</th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="user in users"
        :key="user.id">
        <td>{{ user.firstName }}</td>
        <td>{{ user.lastName }}</td>
        <td>{{ user.isActive }}</td>
        <td>{{ user.balance }}</td>
        <td>{{ user.email }}</td>
        <td>{{ user.phone }}</td>
        <td>{{ user.registered }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'UserList',
  props: {
    // Список пользователей
    users: {
      type: Array,
      required: true
    }
  },
  data: function() {
    return {
      message: 'Hello Vue!',
      shownTable: 'true',
      text: 'The text that is to be copied'
    }
  }
}
</script>

<style scoped>
</style>
