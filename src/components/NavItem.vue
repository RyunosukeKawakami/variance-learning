<template>
    <b-nav-item class="nav-item" :active="isActive" :href="url">
        <a class="nav-link text-light p-0 text-right" >
            {{name}}
        </a>
    </b-nav-item>
</template>

<script>
export default {
    props:[
        "name",
        "isActive",
        "url"
    ],
}
</script>