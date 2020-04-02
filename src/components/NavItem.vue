<template>
    <b-nav-item class="nav-item" :active="isActivate" >
        <router-link class="nav-link text-light p-0 text-right" :to="url">
            {{name}}
        </router-link>
    </b-nav-item>
</template>

<script>
export default {
    props:[
        "name",
        "url",
        "id"
    ],
    data(){
        return{
            isActivate : false,
        }
    },
    created(){
        console.log("hoge");
        if(this.$store.state.ActivateId === this.id){
            this.isActivate = true;
        }
    }
}
</script>