<template>
    <main>
        <div>组件props 接收到的参数：{{propsData}}</div>
        <pre>
            我们在每个组件试图中,当子组件需要接收来自组件视图的数据时,组件传参的则会很重要.
            使用方法非常类似与vue component-- 组件的使用. 子组件通过props 接收来自父组件的值
            使用示例:
                组件传参:
                &lt;router-view name=&quot;views&quot; :uname=&quot;user.name&quot;&gt;&lt;/router-view&gt;
                父组件接收来自子组件的数据:
                props:['uname'],
        </pre>

        <pre>
            当然我们在使用VUE 开发时,每一个vue file 都被理解成为一个组件。
            组件之间值与值的传递不应该通过router-view 来使用，自己大可通过自己编写的组件模块，通过import 导入共用组件的方式。
            因此我们更多的尽量保证vue-router 是处理页面间路径的跳转处理。
        </pre>
    </main>
</template>
<script>
export default {
    props:['uname','addresss'],
    data() {
        return {
            propsData:''
        }
    },
    created() {
        this.propsData = JSON.stringify(this.$props);
    }
}
</script>
