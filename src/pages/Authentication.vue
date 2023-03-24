<template>
    <RouterView></RouterView>
</template>

<script setup>
import { onMounted } from 'vue';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from "../firebase/config"
import { useRouter } from 'vue-router';
const router = useRouter()

onMounted( () => {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            console.log(user);
            console.log("logged");
            router.replace( { path: "/layout"})
        } else {
            console.log(user);
            console.log("unlogged")
        }
    })
})
</script>