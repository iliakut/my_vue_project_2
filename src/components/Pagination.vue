<template>
  <rows-per-page/>
</template>

<script>
export default {
  name: 'Pagination',
  components: {
    'rows-per-page': () => import('@/components/Pagination/RowsPerPage')
  }
}
</script>
