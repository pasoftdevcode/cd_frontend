<template>
    <div class="adminx-container d-flex justify-content-center align-items-center">
        <div class="page-login">
            <div class="text-center">
                <a class="navbar-brand mb-4 h1" href="#">
            Đăng nhập
          </a>
            </div>
            <div class="card mb-0">
                <div class="card-body">
                    <form>
                        <div class="form-group">
                            <label for="user_name" class="form-label">Tên Tài Khoản</label>
                            <input type="email" class="form-control" id="user_name" placeholder="Tên Tài Khoản">
                        </div>
                        <div class="form-group">
                            <label for="password" class="form-label">Mật Khẩu</label>
                            <input type="password" class="form-control" id="password" placeholder="Mật khẩu">
                        </div>
                        <button type="submit" class="btn btn-sm btn-block btn-primary">Đăng nhập</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
    @import '../assets/css/app.css';
    .adminx-container{
        padding-top: 0px !important;
    }
</style>