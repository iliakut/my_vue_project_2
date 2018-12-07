<template>
  <div class="input-group mb-3">
    <div class="input-group-prepend">
      <span class="input-group-text">Зарегистрирован</span>
    </div>
    <input
      ref="datePicker"
      :value="registered"
      type="text"
      class="form-control mr-sm-2">
  </div>
</template>

<script>
import flatpickr from 'flatpickr'
import 'flatpickr/dist/flatpickr.css'
export default {
  name: 'DatePick',
  model: {
    prop: 'registered'
  },
  props: {
    registered: {
      type: String,
      required: true
    }
  },
  data: () => ({
    // экземпляр плагина
    fp: null
  }),
  watch: {
    registered() {
      this.fp.setDate(this.registered)
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      this.fp = flatpickr(this.$refs.datePicker, {
        dateFormat: 'd.m.Y',
        // событие плагина
        onChange: (selectedDates, dateStr) => {
          // передает значение наверх
          this.$emit('input', dateStr)
        }
      })
    }
  }
}
</script>

<style scoped>
</style>
