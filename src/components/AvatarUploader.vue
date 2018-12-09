<template>

  <div>
    <label>Аватарка</label>
    <input
      v-model="picture"
      type="text"
      class="form-control mr-sm-2">

    <div class="input-group mb-3">
      <img :src="picture">
    </div>

    <input ref="image" type="file" class="hidden" @change="upload()">
    <button type="button" class="btn btn-dark" @click="selectNewFile()">
      Выбрать новую...
    </button>
  </div>

</template>

<script>
import axios from 'axios'

export default {
  name: 'AvatarUploader',
  model: {
    prop: 'picture'
  },
  props: {
    picture: {
      type: String,
      required: true
    }
  },
  methods: {
    selectNewFile: function() {
      this.$refs.image.click()
    },
    setNewAvatar(picture) {
      this.$emit('input', picture)
    },
    upload: function() {
      const url = 'https://api.imgur.com/3/image'
      const data = new FormData()
      data.append('image', this.$refs.image.files[0])

      const config = {
        headers: {
          Authorization: 'Client-ID 2cc16b58de99649'
        }
      }

      axios
        .post(url, data, config)
        .then(response => response.data)
        .then(response => {
          this.setNewAvatar(response.data.link)
          this.$refs.image.value = ''
        })
    }
  }
}
</script>

<style scoped>
.hidden {
  display: none;
}
img {
  margin-top: 15px;
}
button {
  margin-bottom: 10px;
}
</style>
