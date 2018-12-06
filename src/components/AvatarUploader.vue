<template>
  <div>

    <div class="input-group-prepend">
      <span class="input-group-text">Аватарка</span>
      <input
        v-model="picture"
        type="text"
        class="form-control mr-sm-2"
      >
    </div>
    <div class="input-group mb-3">
      <img :src="picture">
    </div>
    <div>
      <input ref="image" type="file" @change="upload()">
      <button type="button" class="btn btn-dark" @click="selectNewFile()">
        Выбрать новую...
      </button>
    </div>

  </div>
</template>

<script>
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
    upload: function() {
      //...
    }
  }
}
</script>

<style scoped>
</style>
