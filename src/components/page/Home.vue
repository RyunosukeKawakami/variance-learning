<template>
  <div>
    <navigation></navigation>

  <!-- 新規と復習の数を表示するカード -->
    <div class="my-5 mx-5">
      <b-card-group deck>
        <!-- 新規学習の数を表す -->
        <b-card bg-variant="info" text-variant="white" header="新規学習" class="text-center">
          <b-card-text class="py-2"><font size="6">ここに数字</font></b-card-text>
        </b-card>

        <!--復習の数を表す -->
        <b-card bg-variant="secondary" text-variant="white" header="復習" class="text-center">
          <b-card-text class="py-2"><font size="6">ここに数字</font></b-card-text>
        </b-card>
      </b-card-group>
    </div>
  </div>
</template>

<script>
import Navigation from "@/components/Navigation.vue"

export default {
  components:{
    Navigation
  }
}
</script>

<style>

</style>