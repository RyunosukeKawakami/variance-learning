<template>
        <div class="d-flex justify-content-center mt-4">
            <show-rest-of-question-badge></show-rest-of-question-badge>
            <show-rest-of-answer-badge></show-rest-of-answer-badge>
        </div>
</template>

<script>
import ShowRestOfQuestionBadge from "@/components/ShowRestOfQuestionBadge.vue"
import ShowRestOfAnswerBadge from "@/components/ShowRestOfAnswerBadge.vue"

export default {
    components:{
        ShowRestOfQuestionBadge,
        ShowRestOfAnswerBadge
    }
}

</script>

<style>

</style>