<template>
    <div>
        <navigation/>

        <show-rest-badge-list/>
        <answer-card/>
        
        <b-button block variant="outline-secondary">次の問題に行く</b-button>
        <b-button block variant="outline-secondary">ここまでにしておく</b-button>
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
    }
}
</script>

<style>

</style>