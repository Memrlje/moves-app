<template lang="html">
  <div
    class="tabs"
  >
    <ul class="tabs__header">
      <li
        v-for="(tab, index) in tabs"
        :key="tab.title"
        @click="selectTab(index)"
        :class='{"tab__selected": (index == selectedIndex)}'
      >
        {{ tab.title }}
      </li>
    </ul>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        selectedIndex: 0, // the index of the selected tab,
        tabs: []         // all of the tabs
      }
    },
    created () {
      this.tabs = this.$children
    },
    mounted () {
      this.selectTab(0)
    },
    methods: {
      selectTab (i) {
        this.selectedIndex = i

        // loop over all the tabs
        this.tabs.forEach((tab, index) => {
          tab.isActive = (index === i)
        })
      }
    }
  }
</script>

<style>

  ul.tabs__header {
    display: block;
    list-style: none;
    margin: 0 0 0 20px;
    padding: 0;
  }

  ul.tabs__header > li {
    padding: 15px 30px;
    border-radius: 1em 1em 0 0;
    margin: 0;
    display: inline-block;
    margin-right: 5px;
    cursor: pointer;
    
  }

  ul.tabs__header > li.tab__selected {
    font-weight: bold;
    border-radius: 1em 1em 0 0;
  }

  .tab {
    display: inline-block;
    color: black;
    padding: 20px;
    min-height: 400px;
  }

  .tabs .tab{
    background-color: rgb(157, 180, 192);
    width: 100%;
  }

  .tabs li {
    background-color: rgb(37, 50, 55);
    color: rgb(157, 180, 192);
    border-left: 1px solid rgb(157, 180, 192);
    border-top: 1px solid rgb(157, 180, 192);
    border-right: 1px solid rgb(157, 180, 192);
  }

  .tabs li.tab__selected {
    background-color: rgb(157, 180, 192);
    color: rgb(37, 50, 55);

  }
</style>