<template>
  <div>
    <div class="about">
      <h1>Добавить пользователя</h1>
      <div
        v-if="!user"
        class="alert alert-warning">
        Загрузка...
      </div>
      <user-form
        v-else
        :user="user"/>
    </div>
  </div>
</template>

<script>
import UserForm from '@/components/UserForm.vue'
const userTemplate = {
  id: 0,
  isActive: false,
  balance: '',
  picture: '',
  age: 0,
  accessLevel: '',
  firstName: '1',
  lastName: '',
  company: '',
  email: '',
  phone: '',
  address: '',
  about: '',
  registered: ''
}

export default {
  name: 'AddUser',
  components: {
    'user-form': UserForm
  },
  data: function() {
    return {
      user: null
    }
  },
  mounted: function() {
    this.loadData()
  },
  methods: {
    loadData: function() {
      this.user = Object.assign({}, userTemplate)
    }
  }
}
</script>
