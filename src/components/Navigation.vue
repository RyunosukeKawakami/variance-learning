<template>
    <b-navbar>
        <b-navbar-brand href="/home" class="text-white">Valiance-Learning</b-navbar-brand>
        
        <b-navbar-nav class="ml-auto">
            <b-nav pills class="navbar-default">
                <nav-item v-for="NavItemObj of NavItemObjList" :key="NavItemObj.id"
                v-bind="NavItemObj">
                </nav-item>
            </b-nav>
        </b-navbar-nav>
    </b-navbar>
</template>

<script>
import NavItem from "@/components/NavItem.vue"

class NavItemObj{
    constructor(id, name, url){
        this.id = id
        this.name = name;
        this.url = url;
    }    
}
const NavItemObjList = [
    new NavItemObj(1, "ホーム", "/"),
    new NavItemObj(2, "学習する", "/study"),
    new NavItemObj(3, "登録する", "/submit"),
    new NavItemObj(4, "詳細ページ", "/detail"),
]
export default {
    data(){
        return{
            NavItemObjList
        }
    },
    components:{
        NavItem
    }
}
</script>

<style modules>
nav{
    background-color: #601615
}    
</style>