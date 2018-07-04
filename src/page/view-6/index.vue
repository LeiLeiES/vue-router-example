<template>
    <main>
        <p class="title-tip margin-t-0">路由组件之间的传参</p>

        <router-view name="views" :uname="user.name" :addresss="user.addresss"></router-view>
    </main>
</template>
<script>
export default {
    data() {
        return{
            user:{
                name:'GuanQun',
                addresss:'上海松江临港'
            }
        }
    }
}
</script>

