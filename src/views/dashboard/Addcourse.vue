<template>
    <Base />
    <AddcourseItem />
</template>
<script>
import AddcourseItem from '../../components/dashboard/AddcourseItem.vue'
import Base from '../../components/dashboard/Base.vue'
export default {
    name:'Addcourse',
    components:{
        AddcourseItem, Base
    }
}
</script>