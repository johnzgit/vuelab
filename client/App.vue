<template>
  <div id="app">
        <navbar :title="$store.state.navbar.title" :options="navBarOptions"></navbar>
        <transition :name="pageTransition">
            <router-view></router-view>
        </transition>
      </div>
</template>

<script>
    import Navbar from 'components/Navbar'
    export default {
        components:{
            Navbar
        },
        data(){
            return {
                pageTransition:'slide-right'
            }
        },
        watch:{
            $route(to,from){
                const toDepth = to.path.split('/').length
                const fromDepth = from.path.split('/').length
                this.pageTransition = toDepth < fromDepth ? 'slide-right' : 'slide-left'
            }
        },
        computed:{
            navBarOptions(){
                return {
                    backText:this.$store.state.navbar.backText,
                    showBack:this.$route.path!=='/'
                }
            }
        }
    }
</script>

<style>
    html{
        position: relative;
        height: 100%;
        width: 100%;
        overflow-x: hidden;
    }
    body {
        margin: 0;
        width: 100%;
        height: 100%;
        font-size: 2rem;
        font-family: -apple-system, BlinkMacSystemFont, 'avenir next', avenir, helvetica, 'helvetica neue', Ubuntu, 'segoe ui', arial, sans-serif;
    }
    #app{
        width: 100%;
        height: 100%;
    }
    .page {  
        width: 100%;
        height: 100%;
        transition: all .5s cubic-bezier(.55,0,.1,1);
        &.slide-left-enter, &.slide-right-leave-active {
            opacity: 0;
            transform: translate(30px, 0);
        }
        &.slide-right-enter, &.slide-left-leave-active {
            opacity: 0;
            transform: translate(-30px, 0);
        }
    }
</style>