<template>
  <div>
    <div class="">
      <label>Имя</label>
      <form class="form-inline mt-2 mt-md-0">
        <input
          v-model="user.firstName"
          type="text"
          class="form-control mr-sm-2"
        >
      </form>
    </div>
    <div>
      <label>Фамилия</label>
      <input
        v-model="user.lastName"
        type="text"
      >
    </div>
    <div>
      <label>Активен</label>
      <input
        v-model="user.isActive"
        type="text"
      >
    </div>
    <div>
      <label>Баланс</label>
      <input
        v-model="user.balance"
        type="text"
      >
    </div>
    <div>
      <label>Email</label>
      <input
        v-model="user.email"
        type="text"
      >
    </div>
    <div>
      <label>Email</label>
      <input
        v-model="user.email"
        type="text"
      >
    </div>
    <div>
      <label>Телефон</label>
      <input
        v-model="user.phone"
        type="text"
      >
    </div>
    <div>
      <label>Зарегистрирован</label>
      <input
        v-model="user.registered"
        type="text"
      >
    </div>
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
    return {}
  }
}
</script>
