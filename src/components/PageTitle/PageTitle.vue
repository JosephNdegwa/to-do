<template>
    <h1>
        {{ title }}
    </h1>
</template>

<script>
    export default {
        name: 'PageTitle',
        props: {
            title: String,
            required: true
        }
    }
</script>

<style>
    .page-title {
        margin-bottom: 2rem;
        color: aqua;
        text-align: center;
        font-weight: 700;
    }
</style>