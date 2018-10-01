<template>
  <div>

    <div class="input-group mb-3">
      <div class="input-group-prepend">
        <span class="input-group-text">Имя</span>
      </div>
      <input
        v-model="userToChange.firstName"
        type="text"
        class="form-control mr-sm-2"
      >
    </div>

    <div class="input-group mb-3">
      <div class="input-group-prepend">
        <span class="input-group-text">Фамилия</span>
      </div>
      <input
        v-model="userToChange.lastName"
        type="text"
        class="form-control mr-sm-2"
      >
    </div>

    <div class="input-group mb-3">
      <div class="input-group-prepend">
        <span class="input-group-text">Баланс</span>
      </div>
      <input
        v-model="userToChange.balance"
        type="text"
        class="form-control mr-sm-2"
      >
    </div>

    <div class="input-group mb-3">
      <div class="input-group-prepend">
        <span class="input-group-text">Email</span>
      </div>
      <input
        v-model="userToChange.email"
        type="text"
        class="form-control mr-sm-2"
      >
    </div>

    <div class="input-group mb-3">
      <div class="input-group-prepend">
        <span class="input-group-text">Телефон</span>
      </div>
      <input
        v-model="userToChange.phone"
        type="text"
        class="form-control mr-sm-2"
      >
    </div>

    <div class="input-group mb-3">
      <div class="input-group-prepend">
        <span class="input-group-text">Зарегистрирован</span>
      </div>
      <input
        v-model="userToChange.registered"
        type="text"
        class="form-control mr-sm-2"
      >
    </div>

    <div class="input-group mb-3">
      <div class="input-group-prepend">
        <span class="input-group-text">Возраст</span>
      </div>
      <input
        v-model="userToChange.age"
        type="text"
        class="form-control mr-sm-2"
      >
    </div>

    <div class="input-group mb-3">
      <div class="input-group-prepend">
        <span class="input-group-text">Компания</span>
      </div>
      <input
        v-model="userToChange.company"
        type="text"
        class="form-control mr-sm-2"
      >
    </div>

    <div class="input-group mb-3">
      <div class="input-group-prepend">
        <span class="input-group-text">О себе</span>
      </div>
      <input
        v-model="userToChange.about"
        type="text"
        class="form-control mr-sm-2"
      >
    </div>

    <pre>{{ userToChange }}</pre>
  </div>

</template>

<script>
export default {
  name: 'UserForm',
  props: {
    user: {
      type: Object,
      required: true
    }
  },

  data: function() {
    return {
      userToChange: null
    }
  },

  watch: {
    userToChange: {
      deep: true,
      handler: function() {
        this.$emit('sendInput', this.userToChange)
      }
    }
  },

  created: function() {
    this.userToChange = Object.assign({}, this.user)
  }
}
</script>

<style>
span {
  width: 150px;
}
</style>
<!--
 test git-->
