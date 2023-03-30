<script>
import axios from 'axios';

export default {
    name: "AppHeader",
    data() {
        return {
           linksNav: [
            {
                label: 'home',
                active: false
            },
            {
                label: 'boh',
                active: false
            }
           ]
        };
    },
};
</script>

<template>
    <header>
        <div class="container mb-4">
            <h1 class="text-center">BOOLPRESS FRONTEND</h1>

            <nav>
                <ul>
                    <li v-for="link in linksNav" class="d-inline-block me-3">
                        <Router-link :to="{name: 'projects' }">{{ link.label }}</Router-link>
                    </li>
                </ul>
                
            </nav>
        </div>
    </header>
</template>

<style scoped>
</style>