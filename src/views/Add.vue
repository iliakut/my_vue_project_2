<template>
  <div>
    <h1>Добавить пользователя</h1>
    <user-form
      :user="user"
      @sendInput="currUser => user = currUser"/>
    <div>
      <button
        type="button"
        class="btn btn-dark"
        @click="save"
      >
        Создать
      </button>
    </div>
  </div>
</template>

<script>
import UserForm from '@/components/UserForm.vue'
import axios from 'axios'

const userTemplate = {
  id: 0,
  isActive: false,
  balance: '',
  picture: '',
  age: 0,
  accessLevel: '',
  firstName: '',
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
      user: userTemplate,
      url: 'http://localhost:3004/users/',
      test: 0
    }
  },
  methods: {
    save: function() {
      axios.post(this.url, this.user).then(() => {
        this.$router.push({ path: '/users' })
      })
    }
  }
}
</script>
