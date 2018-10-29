<template>
  <div class="home">

    <div class="adminx-container d-flex justify-content-center align-items-center">
        <div class="page-login">
            <div class="text-center">
                <a class="navbar-brand mb-4 h1" href="login.html">
                    Hệ thống quản trị
                </a>
            </div>
            <div class="card mb-0">
                <div class="card-body">
                    <form>
                        <div class="form-group">
                            <label for="exampleDropdownFormEmail1" class="form-label">Email address</label>
                            <input type="email" class="form-control" id="exampleDropdownFormEmail1" placeholder="email@example.com">
                        </div>
                        <div class="form-group">
                            <label for="exampleDropdownFormPassword1" class="form-label">Password</label>
                            <input type="password" class="form-control" id="exampleDropdownFormPassword1" placeholder="Password">
                        </div>
                        <button @click="run_login()" type="button" class="btn btn-sm btn-block btn-primary">Sign in</button>
                    </form>
                </div>
            </div>
        </div>
    </div>

</div>
</template>

<script>
    import { loginUrl, client_id, client_secret, userUrl, getHeader } from '@/env'
    export default {
        data() {
            return {
                login: {
                    username: 'admin@gmail.com',
                    password: '112233'
                },
            }
        },
        methods: {
            run_login() {
                const postData = {
                    grant_type: 'password',
                    client_id: client_id,
                    client_secret: client_secret,
                    username: this.login.username,
                    password: this.login.password,
                    scope: ''
                }
                const authUser = {}
                this.$axios.post(loginUrl, postData)
                .then(response => {
                    console.log(response.data)
                    console.log(response.status)
                    if(response.status === 200){
                        authUser.access_token = response.data.access_token
                        authUser.refresh_token = response.data.refresh_token
                        window.localStorage.setItem('authUser', JSON.stringify(authUser))
                        /* ==== > Lấy thông tin đăng nhập < ==== */
                        this.$axios.get(userUrl, {headers: getHeader()})
                        .then(response => {
                            authUser.name = response.data.name
                            authUser.userName = response.data.email
                            window.localStorage.setItem('authUser', JSON.stringify(authUser))
                            this.$router.push({name: 'home'}) // Chuyển hướng khi đăng nhập thành công
                        })
                        /* ==== > / Lấy thông tin đăng nhập < ==== */
                    }
                })
                .catch(error => {
                    console.log(error)
                })
            },
        },
    }
</script>

