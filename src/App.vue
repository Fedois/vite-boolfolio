<script>
import { store } from './store';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';

export default {
    name: "App",
    data() {
        return {
            store
        }
    },
    components: {
        AppHeader,
        AppMain,
        AppFooter
        
    },
    methods: {
    }
};
</script>

<template>
    <AppHeader />
    <RouterView />
    <AppFooter />
</template>

<style lang="scss">
@import './styles/main';
</style>
