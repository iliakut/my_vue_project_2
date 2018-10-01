<template>
  <div>
    <h1>Редактирование пользователя</h1>

    <div
      v-if="!user"
      class="alert alert-warning">
      Загрузка...
    </div>
    <user-form
      v-else
      :user="user"/>
    
    <pre>{{ user }}}</pre>

  </div>
</template>

<script>
export default {
  name: 'Edit'
}
</script>

<style scoped>
</style>
