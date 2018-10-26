<template>
    <div class="home">
        <vMenu />
        <div class="adminx-main-content mt-5">
            <div class="container-fluid">
                <router-view/>
            </div>
        </div>
    </div>
</template>
<script>
import vMenu from '../components/vMenu.vue'

export default {
    name: 'home',
    components: {
        vMenu,
    },
}
</script>