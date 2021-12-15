<template>
    <div class="header">
        <p>MemrljDB ratings</p>
        <Search></Search>
        <tabs>
            <tab title="Movies">
                <slot name="movies-tab"></slot>
            </tab>
            
            <tab title="TV Shows">
                <slot name="shows-tab"></slot>
            </tab>
        </tabs>
    </div>
</template>

<script>
    import Tab from '../tabs/Tab.vue';
    import Tabs from '../tabs/Tabs.vue';
    import Search from '../ui/Search.vue'

    export default {
        components: {
            Tabs,
            Tab,
            Search
        },
        data() {
            return {
            }
        }
    }
</script>

<style scoped>
    .header {
        width: 100%;
        height: 13em;
        background: rgb(37, 50, 55);
    }
    
    .logo {
        width: 3em;
        height: auto;
        margin: .5em;
    }
    p {
        color: rgb(224, 251, 252);
        font-size: 2.5em;
        margin: 0;
    }

</style>