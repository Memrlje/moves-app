<template>
    <div class="search-container">
        <input
            ref="searchInput"
            class="search-input"
        />
    </div>
</template>

<script>
export default {
    props: {
        
    },
    // data() {
    //     return {
    //         searchPhrase: this.value
    //     }
    // },
    // methods: {
    //     clearSearchField() {
    //             // Clear only if not empty string
    //             this.searchPhrase = "";
    //         },
    // },
    // watch: {
    //         searchPhrase(val) {
    //             if (this.searchPhrase && this.searchPhrase.length > 0) {
    //                 if (this.onChange) {
    //                     this.onChange(val);
    //                 }
    //             } else {
    //                 if (this.onClear) {
    //                     this.onClear();
    //                 }
    //             }
    //         },
    //         value(val) {
    //             if (this.watchValue) {
    //                 this.searchPhrase = val;
    //             }
    //         }
    //     }
}
</script>

<style scoped>
    .search-container {
        padding: 1em;
    }
    .search-input {
        border-radius: 16px;
        width: 40%;
        max-width: 400px;
        height: 2em;
        background: rgb(224, 251, 252);
        padding: 0 1em;
    }
    @media screen and (max-width: 800px) {
        .search-input {
            width: 80%
        }
    }
</style>