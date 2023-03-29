<script>
import axios from 'axios';

export default {
    name: "AppMain",
    data() {
        return {
            projects: [],
            currentPage: 1,
            lastPage: 1
        };
    },
    created() {
        this.getPosts();
    },
    methods: {
        changePage(page) {
            this.currentPage = page;

            this.getPosts();
        },
        getPosts() {
            axios
                .get('http://127.0.0.1:8000/api/projects', {
                    params: {
                        page: this.currentPage
                    }
                })
                .then(response => {
                    console.log(response.data);

                    this.projects = response.data.projects.data;
                    this.lastPage = response.data.projects.last_page;
                });
        }
    }
};
</script>

<template>
    <main>
        <div class="container">
            <div class="row mb-4">
                <div class="col">
                    <h1>
                        Boolpress Frontend
                    </h1>
                </div>
            </div>
            <div class="row mb-4">
                <div class="col">
                    <div v-for="i in lastPage" style="display: inline-block;">
                        <button @click="changePage(i)">
                            Pagina {{ i }}
                        </button>
                    </div>
                </div>
            </div>
            <div class="row mb-4">
                <div v-for="project in projects" class="col-12 col-sm-4 col-md-3">
                    <div class="my-card">
                        <h2>
                            {{ project.title }}
                        </h2>

                        <div v-if="project.img_path">
                            <img :src="project.img_path" alt="">
                        </div>
                        <p>
                            {{ project.content }}
                        </p>
                        <div>
                            <h4>type:</h4> <span>{{ project.type ? project.type.name : '---' }}</span>
                        </div>
                        <div v-if="project.technologies.length > 0">
                            <h4>
                                Technologies:
                            </h4>
                            <ul>
                                <li v-for="tech in project.technologies">
                                    {{ tech.name }}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<style scoped>
img {
    height: 100px;
}
.my-card{
    border: 1px solid black;
    margin: 10px 0;
    padding: 20px;
}
h4{
    margin-top: 5px;
    display: inline-block;
}
</style>
