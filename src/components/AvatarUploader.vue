<template>
  <div>
    <div>
      <div class="input-group-prepend">
        <span class="input-group-text">Аватарка</span>
      </div>
      <input
        v-model="picture"
        type="text"
        class="form-control mr-sm-2"
      >
    </div>
    <div class="input-group mb-3">
      <img :src="picture">
    </div>
  </div>
</template>

<script>
export default {
  name: 'AvatarUploader',
  model: {
    //prop: 'picture'
  },
  props: {
    picture: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
</style>
