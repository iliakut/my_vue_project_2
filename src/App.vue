<template>
  <div>
    <header>
      <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">

        <div class="collapse navbar-collapse">

          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <router-link to="/" class="nav-link" active-class="active" exact>
                <a class="nav-link"
                   href="#">Главная</a>
              </router-link>
            </li>

            <li class="nav-item active">
              <router-link to="/Users" class="nav-link" active-class="active" exact>
                <a class="nav-link"
                   href="#">Список пользователей</a>
              </router-link>
            </li>

            <li class="nav-item active">
              <router-link to="/Add" class="nav-link" active-class="active" exact>
                <a class="nav-link"
                   href="#">Добавить пользователя</a>
              </router-link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
    <main role="main" class="container">

      <router-view/>

    </main>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'

export default {
  name: 'App'
}
</script>

<style>
#app {
  margin-top: 60px;
}
main {
  margin-top: 100px;
}
pre {
}
</style>
