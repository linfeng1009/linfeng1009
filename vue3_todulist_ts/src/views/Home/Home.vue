<template>
  <div class="container">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="logo"></div>
      <a class="navbar-brand" href="#">toduList</a>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul
          class="navbar-nav mr-auto d-flex justify-content-between align-items-center"
        >
          <li class="nav-item active ml-2">
            <router-link to="/add">待办事项</router-link>
          </li>
          <li class="nav-item ml-2">
            <router-link to="/done">已完成</router-link>
          </li>
          <li class="nav-item ml-2">
            <router-link to="/delete">已删除</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<style lang="scss">
.logo {
  background: url('~@/assets/logo.png') no-repeat center center;
  height: 40px;
  width: 40px;
  background-size: 100% 100%;
}
.nav-item {
  text-decoration: none;
}
.active {
  color: #000;
  font-weight: 600;
}
</style>
