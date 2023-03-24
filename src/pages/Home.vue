<script setup>
import { ref, onMounted } from "vue"
import { db, auth } from "../firebase/config"
import { collection, onSnapshot, getDoc, doc, query } from "firebase/firestore";
import AddPost from "../components/AddPost.vue"
import Post from "../components/Post.vue"
const userPosts = ref([1])
const userProfile = ref({})
onMounted(async () => {
    const userProfilePostsRef = query(collection(db, "users", auth.currentUser.uid, "posts"))
    const getUserPosts = onSnapshot(userProfilePostsRef, (querySnapshot) => {
        const arrUserPosts = []
        querySnapshot.forEach((post) => {
            const userPost = {
                "id": post.id,
                "userName": post.data().userName,
                "userId": post.data().userId,
                "content": post.data().content,
                "date": post.data().date,
                "media": post.data().media,
                "likes": post.data().likes,
                "retweet": post.data().retweet,
                "share": post.data().share,
                "commentsCount": post.data().commentsCount,
                "comments": post.data().comments,
                "postLifeTime": post.data().postLifeTime
            }
            arrUserPosts.push(userPost)
        })
        userPosts.value = arrUserPosts.sort((post, post1) => post1.postLifeTime - post.postLifeTime, 0)
    })
    const currentUserIs = await getDoc(doc(db, "users", auth.currentUser.uid))
    const currentUser = {
        "uid": currentUserIs.data().uid,
        "userName": currentUserIs.data().userName,
        "userId": currentUserIs.data().userId,
        "userAvatar": currentUserIs.data().userAvatar,
        "userProfileBackground": currentUserIs.data().userProfileBackground,
        "userLocation": currentUserIs.data().userLocation,
        "userFollowing": currentUserIs.data().userFollowing,
        "userFollowers": currentUserIs.data().userFollowers,
        "userJoinDate": currentUserIs.data().userJoinDate,
        "userPostsCount": currentUserIs.data().userPostsCount,
    }
    userProfile.value = currentUser
})

</script>

<template>
    <div class="container">
        <div class="branch">
            <h2>Home</h2>
            <img src="../assets/images/feed/stars.svg" alt="">
        </div>
        <AddPost :userProfile="userProfile" />
        <div class="decor"></div>
        <Post v-for="(userPost, idx) in userPosts" :userProfile="userProfile" :key="idx" :postData="userPost" />
    </div>
</template>

<style scoped lang="scss">
.container {
    border-right: 1px solid var(--dark4);
    border-left: 1px solid var(--dark4);
}

.branch {
    padding: 0px 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px var(--dark4) solid;

    h2 {
        font-size: 19px;
        font-weight: 700;
        padding: 15px 0;
    }
}

.decor {
    width: 100%;
    height: 10px;
    background-color: var(--dark2);
    border-bottom: 1px var(--dark4) solid;
}
</style>