<template>
    <div>
        <navigation/>

        <show-rest-badge-list/>
        <answer-card/>
        
        <b-button block variant="outline-secondary" to="/study">次の問題に行く</b-button>
        <b-button block variant="outline-secondary" to="/">ここまでにしておく</b-button>
    </div>
</template>

<script>
import Navigation from "@/components/Navigation.vue"
import AnswerCard from "@/components/AnswerCard.vue"
import ShowRestBadgeList from "@/components/ShowRestBadgeList.vue"

export default {
    components:{
        Navigation,
        AnswerCard,
        ShowRestBadgeList
    },
    methods:{
        SendAnswerResult(difficalty){
            //受け取った引数データベースに登録する。
            console.log(difficalty);
            this.$emit('switch-is-show-question')
        }
    }
}
</script>

<style>

</style>