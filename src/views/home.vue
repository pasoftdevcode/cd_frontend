<template>
  <div class="home">

    <div class="adminx-container d-flex justify-content-center align-items-center">
        <div class="page-login">
            <div class="text-center">
                <a class="navbar-brand mb-4 h1" href="login.html">
                    AdminX
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
                        <button type="submit" class="btn btn-sm btn-block btn-primary">Sign in</button>
                    </form>
                </div>
            </div>
        </div>
    </div>


</div>
</template>

<script>

    import HelloWorld from '@/components/HelloWorld.vue'

    export default {
      name: 'home',
      components: {
        HelloWorld
    }
}
</script>
