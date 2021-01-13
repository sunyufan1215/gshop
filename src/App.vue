<template>
  <div id="app">
    <router-view/>
    <FooterGuide v-show="$route.meta.showFooter"/>
  </div>
</template>

<script>
  import FooterGuide from './components/FooterGuide/FooterGuide'
  import {mapActions} from 'vuex'
  import {reqFoodCategorys} from './api'

  export default {
    mounted () {
      this.$store.dispatch('getAddress')
      // const  result = await reqFoodCategorys()
      // console.log(result)
      this.getUserInfo()
    },
    methods:{
      ...mapActions(['getUserInfo'])
    },
    components:{
      FooterGuide
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .app
    width 100%
    height 100%
    background #f5f5f5
</style>
