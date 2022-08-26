<template>
    <div>
        <slot></slot>
    </div>
</template>
<script>
export default {
    props: {
        title: {
            type: String,
            required: true,
        },
    },
    mounted() {
        document.title = this.title;
        window.scrollTo(0, 0);
    },
};
</script>
<style lang=""></style>
