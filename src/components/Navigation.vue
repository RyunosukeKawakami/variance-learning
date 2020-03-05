<template>
    <b-navbar>
        <b-navbar-brand href="/home" class="text-white">Valiance-Learning</b-navbar-brand>
        
        <b-navbar-nav class="ml-auto">
            <b-nav pills class="navbar-default">
                <nav-item v-for="NavItemObj of NavItemObjList" :key="NavItemObj.id" 
                :name="NavItemObj.name" 
                :isActive="NavItemObj.isActive" 
                :url="NavItemObj.url">
                </nav-item>
            </b-nav>
        </b-navbar-nav>
    </b-navbar>
</template>

<script>
import NavItem from "@/components/NavItem.vue"

class NavItemObj{
    constructor(id, name, isActive, url){
        this.id = id
        this.name = name;
        this.isActive = isActive;
        this.url = url;
    }    
}
const NavItemObjList = [
    new NavItemObj(1, "ホーム", true, "/"),
    new NavItemObj(2, "学習する", false, "/study"),
    new NavItemObj(3, "登録する", false, "/submit"),
    new NavItemObj(4, "詳細ページ", false, "/detail"),
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