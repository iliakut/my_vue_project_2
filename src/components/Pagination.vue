<template>
  <div>
    <p>Количество пользователей на странице {{ usersPerPage }}</p>
    <rows-per-page
      @changeRaws="rows => usersPerPage = rows"
    />
  </div>
</template>

<script>
export default {
  name: 'Pagination',
  components: {
    'rows-per-page': () => import('@/components/Pagination/RowsPerPage')
  },
  data: () => ({
    usersPerPage: 0
  })
}
</script>
