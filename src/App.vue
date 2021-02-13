<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return {
      res:''
    }
  },
  mounted(){
    //mock
    // this.axios.get('/user/login').then((res) => {
    //   this.res = res;
    // })
  }
  
}
</script>

<style lang="scss">
@import './assets/scss/reset.scss';
@import './assets/scss/config.scss';
</style>
