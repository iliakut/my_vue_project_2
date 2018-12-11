<template>

  <div>
    <label>Аватарка</label>
    <input
      v-model="picture"
      type="text"
      class="form-control mr-sm-2" readonly>


    <input ref="image" type="file" class="hidden" readonly>

    <div>
      <img :src="picture">
    </div>
    <form ref="dropzone" class="dropzone"/>
    <!--
      загрузка фотографий с помощью кнопки
    <input ref="image" type="file" class="hidden" @change="upload()">
    <button type="button" class="btn btn-dark" @click="selectNewFile()">
      Выбрать новую...
    </button>
    //Vue2 dropzone
        <vue-dropzone id="dropzone" ref="myVueDropzone" :options="dropzoneOptions"/>
    -->

  </div>

</template>

<script>
//import axios from 'axios'
//import vue2Dropzone from 'vue2-dropzone'
import 'vue2-dropzone/dist/vue2Dropzone.min.css'
import Dropzone from 'dropzone'
import 'dropzone/dist/dropzone.css'

export default {
  name: 'AvatarUploader',
  components: {
    /*
    vueDropzone: vue2Dropzone
      */
  },
  model: {
    prop: 'picture'
  },

  props: {
    picture: {
      type: String,
      required: true
    }
  },
  data: function() {
    return {
      size: 0
      /*
        параметро Vue2-dropZone
      dropzoneOptions: {
        maxFiles: 1,
        url: 'https://api.imgur.com/3/image',
        headers: {
          'Cache-Control': null,
          'X-Requested-With': null,
          Authorization: 'Client-ID 2cc16b58de99649'
        }
        */
    }
  },
  mounted() {
    this.initDropzone()
  },
  methods: {
    //инициализация DropZone
    initDropzone() {
      new Dropzone(this.$refs.dropzone, {
        url: 'https://api.imgur.com/3/image',
        paramName: 'image',
        acceptedFiles: 'image/*',
        method: 'post',
        maxFiles: 1,
        headers: {
          'Cache-Control': null,
          'X-Requested-With': null,
          Authorization: 'Client-ID 2cc16b58de99649'
        },
        success: (file, response) => {
          this.setNewAvatar(response.data.link)
          this.$refs.image.value = ''
        }
      })
    },

    //отправить наверх
    setNewAvatar(picture) {
      this.$emit('input', picture)
    }
    /*
      для загрузки фотографий с помощью кнопки
          selectNewFile: function() {
      this.$refs.image.click()
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
    */
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
form {
  width: 190px;
  margin-top: 10px;
}
</style>
