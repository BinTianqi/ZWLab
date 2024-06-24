<script lang="ts">
import 'mdui/components/button-icon.js';
import '@mdui/icons/content-copy.js';
export default {
    props: {
        label: String,
        zwchar: String
    },
    mounted() {
        this.$refs.copybutton.addEventListener('click', this.copy);
    },
    methods: {
        copy() {
            if(!navigator.clipboard) {
                alert('Your browser does not support Clipboard API');
            } else {
                navigator.clipboard.writeText(this.zwchar).then(
                    function() {
                        alert('OK');
                    },
                    function(error) {
                        alert('Failed to copy');
                    }
                )
            }
        }
    }
}
</script>

<template>
<div>
    <h3>{{label}}</h3>
    <mdui-button-icon ref="copybutton">
        <mdui-icon-content-copy></mdui-icon-content-copy>
    </mdui-button-icon>
</div>
</template>

<style scoped lang="scss">
mdui-button-icon {
    margin-left: 1rem;
}
div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 14rem;
    text-align: center;
}
</style>
