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
import { db, auth } from "../firebase/config"
import { doc, getDoc } from "firebase/firestore";
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter()
const userProfile = ref([])
onMounted( async () => {
        const userIs = await getDoc(doc(db, "users", auth.currentUser.uid))
        const currentUser = {
            "uid": userIs.data().uid,
            "userName": userIs.data().userName,
            "userId":userIs.data().userId,
            "userAvatar": userIs.data().userAvatar,
            "userProfileBackground": userIs.data().userProfileBackground,
            "userLocation": userIs.data().userLocation,
            "userFollowing": userIs.data().userFollowing,
            "userFollowers": userIs.data().userFollowers,
            "userJoinDate": userIs.data().userJoinDate,
            "userPostsCount": userIs.data().userPostsCount,
        }
        userProfile.value = currentUser
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