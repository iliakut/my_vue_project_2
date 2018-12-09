<template>
  <div>
    <label>Зарегистрирован</label>
    <input
      ref="datePicker"
      :value="registered"
      type="text"
      class="form-control mr-sm-2, dark">
  </div>
</template>

<script>
import flatpickr from 'flatpickr'
import 'flatpickr/dist/themes/dark.css'
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
    // при измененити даты регистрации обновлять дату календаря
    registered() {
      this.fp.setDate(this.registered)
    }
  },
  mounted() {
    this.init()
  },
  beforeDestroy() {
    this.fp.destroy()
  },
  methods: {
    init() {
      this.fp = flatpickr(this.$refs.datePicker, {
        // ицициализация отображения
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
