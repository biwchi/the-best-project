<template>
    <div class="body">
        <SideBar :userProfile="userProfile" />
        <div></div>
        <RouterView />
        <div></div>
    </div>
</template>

<script setup>
import SideBar from "../components/SideBar.vue"
import { db } from "../firebase/config"
import { collection, getDocs, onSnapshot, deleteDoc, updateDoc, doc, addDoc } from "firebase/firestore";
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter()
const userProfile = ref([])
onMounted(async () => {
    const users = await getDocs(collection(db, "users"))
    users.forEach(doc => {
        const user = {
            "uid": doc.data().uid,
            "userName": doc.data().userName,
            "userId": doc.data().userId,
            "userAvatar": doc.data().userAvatar,
            "userProfileBackground": doc.data().userProfileBackground,
            "userLocation": doc.data().userLocation,
            "userFollowing": doc.data().userFollowing,
            "userFollowers": doc.data().userFollowers,
            "userJoinDate": doc.data().userJoinDate,
            "userPostsCount": doc.data().userPostsCount,
        }
        userProfile.value = user
    });
})
</script>

<style scoped lang="scss">
.body {
    margin: 0 auto;
    max-width: 1210px;
    padding: 0px 15px;
    min-height: 100vh;
    display: grid;
    grid-template-columns: 270px 600px 350px
}
</style>