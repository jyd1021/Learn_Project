<template>
<div>
    <!--三级联动全局组件：已经注册为全局组件，不需要引入-->
    <TypeNav></TypeNav>
    <ListContainer></ListContainer>
    <Recommend></Recommend>
    <Rank></Rank>
    <Like></Like>
    <Floor></Floor>
    <Floor></Floor>
    <Brand></Brand>

</div>
</template>

<script>
import TypeNav from "./TypeNav/index.vue";
import ListContainer from "./ListContainer/index.vue";
import Recommend from "./Recommend/index.vue";
import Rank from "./Rank/index.vue";
import Like from "./Like/index.vue";
import Floor from "./Floor/index.vue";
import Brand from "./Brand/index.vue";


export default{
    name: "",
    components: { TypeNav, ListContainer, Recommend, Rank, Like, Floor, Brand }
}
</script>


<style>

</style>