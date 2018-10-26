<template>
    <nav class="navbar navbar-expand justify-content-between fixed-top bg-white">
      <router-link class="navbar-brand mb-0 h1 d-none d-md-block logo-name" to="/">
        Cửa hàng cầm đồ Phong Loan
      </router-link>
      <div class="d-flex flex-1 d-block d-md-none">
        <a href="#" class="sidebar-toggle ml-3">
          <i data-feather="menu"></i>
        </a>
      </div>

      <ul class="navbar-nav d-flex justify-content-end mr-2">
        <!-- Button in đơn hàng -->
        <li class="nav-item">
            <a href="#" class="btn btn-pill btn-sm btn-outline-danger">In đơn hàng</a>
        </li>
        <!-- Notifications -->
        <li class="nav-item dropdown">
          <a class="nav-link avatar-with-name" id="navbarDropdownMenuLink" data-toggle="dropdown" href="#">
                User
          </a>
          <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
            <a class="dropdown-item" href="#">My Profile</a>
            <a class="dropdown-item" href="#">My Tasks</a>
            <a class="dropdown-item" href="#">Settings</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item text-danger" href="#">Sign out</a>
          </div>
        </li>
      </ul>
    </nav>
</template>
<style type="text/css">
    .logo-name{
        text-transform: uppercase;
    }
</style>