<script>
import axios from 'axios';

export default {
    name: "AppSingleProj",
    data() {
        return {
            project: null
        };
    },
    created(){
        this.getProject();
    },
    methods: {
        changePage(index) {
            this.currentPage = index;

            this.getProject();
        },
        getProject() {
            axios
                .get(`http://127.0.0.1:8000/api/projects/${this.$route.params.slug}`)
                .then(response => {
                    console.log(response.data);

                    if(response.data.project){
                        this.project = response.data.project;
                    }
                    else{
                        this.$router.push({name: 'NotFound'});
                    }
                        
 
                    
                });
        }
    },
};
</script>

<template>
    <main>
        <div class="container" v-if="project">
            <h2> titolo:
                {{ project.title }}
            </h2>
            
            <div class="my-2">
                <img :src="project.img_path" alt="">
            </div>
            
            <p>contenuto: {{ project.content }}</p>

            <div>
                tecnologie:
                <ul>
                    <li v-for="tech in project.technologies">
                        {{ tech.name }}
                    </li>
                </ul>
            </div>
        </div>
    </main>
</template>

<style scoped>
img{
    width: 500px;
}
</style>
