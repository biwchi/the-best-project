<template>
    <div class="profile">
        <div class="profile-btn-back">
            <button><img src="../assets/images/profile/back-arrow.svg" alt=""></button>
            <div class="profile-name">
                <p>{{ userProfile.userName }}</p>
                <span>{{ userProfile.userPostsCount }} posts</span>
            </div>
        </div>
        <div class="profile-edit">
            <div class="profile-bg"><img :src="userProfile.userProfileBackground" alt="bg"></div>
            <div class="profile-avatar-edit">
                <div class="profile-avatar"><img :src="userProfile.userAvatar" alt=""></div>
                <button @click="openPopUp = !openPopUp" class="profile-edit-btn">Edit profile</button>
            </div>
        </div>
        <div class="profile-info">
            <h2 class="profile-user-name">{{ userProfile.userName }}</h2>
            <span class="profile-user-id">@{{ userProfile.userId }}</span>
            <div class="profile-spec">Front-end developer</div>
            <ul class="profile-data">
                <li><img src="../assets/images/profile/Location.svg" alt=""><span>{{ userProfile.userLocation }}</span></li>
                <li><img src="../assets/images/profile/Calendar.svg" alt=""><span>joined {{ userProfile.userJoinDate
                }}</span></li>
            </ul>
            <div class="profile-stats">
                <div class="profile-following">
                    <span>{{ userProfile.userFollowing }}</span>
                    <p>Following</p>
                </div>
                <div class="profile-followers">
                    <span>{{ userProfile.userFollowers }}</span>
                    <p>Followers</p>
                </div>
            </div>
        </div>
        <div class="profile-buttons">
            <button class="prifle-btn-tweets active">Tweets</button>
            <button class="prifle-btn-media">Media</button>
            <!-- <button @click="$router.replace({
                name: 'NotFound',
                // preserve current path and remove the first char to avoid the target URL starting with `//`
                params: { pathMatch: $route.path.substring(1).split('/') },
                // preserve existing query and hash if any
                query: $route.query,
                hash: $route.hash,
            })">test</button> -->
        </div>
        <div class="profile-tweets">
            <Post v-for="(post, idx) in postsData" :key="idx" :userProfile="userProfile" :postData="post" />
        </div>
        <Transition>
            <div class="edit-popup" v-show="openPopUp">
                <div class="edit-popup-body">
                    <div class="edit-popup-close-btn" @click="openPopUp = !openPopUp">X</div>
                    <div class="edit-popup-profile-pic"><input type="file" name="avatar" id="profPic"
                            @change="changeAvatar"><label for="profPic"><img :src="userProfile.userAvatar" alt=""></label>
                        <p>Change your profile picture</p>
                    </div>
                    <div class="edit-popup-profile-bg"><input type="file" name="changeBackground" id="changeBackground"
                            @change="changeBackground"><label for="changeBackground"><img
                                :src="userProfile.userProfileBackground" alt=""></label>
                        <p>Change your profile picture</p>
                    </div>

                </div>
            </div>
        </Transition>
    </div>
</template>

<script setup>
import { ref, onMounted, watch } from "vue"
import Post from "../components/Post.vue";
import { db } from "../firebase/config"
import { collection, onSnapshot, updateDoc, doc, getDocs } from "firebase/firestore";
import { useRoute } from "vue-router";
const postsData = ref([])
const userProfile = ref({})
const openPopUp = ref(false)
const userAvatar = ref("")
const userAvatarFile = ref("")
const userBackground = ref("")
const userBackgroundFile = ref("")
onMounted(async () => {
    const users = await getDocs(collection(db, "users"))
    users.forEach(doc => {
        onSnapshot(collection(db, "users", doc.id, "posts"), (querySnapshot) => {
            const fbposts = []
            querySnapshot.forEach((doc) => {
                const post = {
                    "id": doc.id,
                    "userName": doc.data().userName,
                    "userId": doc.data().userId,
                    "content": doc.data().content,
                    "date": doc.data().date,
                    "media": doc.data().media,
                    "likes": doc.data().likes,
                    "retweet": doc.data().retweet,
                    "share": doc.data().share,
                    "commentsCount": doc.data().commentsCount,
                    "comments": doc.data().comments,
                    "postLifeTime": doc.data().postLifeTime
                }
                fbposts.push(post)
            })
            postsData.value = fbposts.sort((post, post1) => post1.postLifeTime - post.postLifeTime, 0)
            console.log(postsData.value)
        })
        onSnapshot(collection(db, "users"), (querySnapshot) => {
            querySnapshot.forEach((doc) => {
                const user = {
                    "id": doc.id,
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
            })
        })
    });
})

function changeAvatar(e) {
    userAvatar.value = e.target.files
    let fileReader = new FileReader()
    fileReader.onload = function (event) {
        userAvatarFile.value = event.target.result
    }
    fileReader.readAsDataURL(userAvatar.value[0])
}

function changeBackground(e) {
    userBackground.value = e.target.files
    let fileReader = new FileReader()
    fileReader.onload = function (event) {
        userBackgroundFile.value = event.target.result
    }
    fileReader.readAsDataURL(userBackground.value[0])
}

watch(userBackgroundFile, async () => {
    console.log(userBackgroundFile.value)
    await updateDoc(doc(db, "users", userProfile.value.id), {
        userProfileBackground: userBackgroundFile.value
    })
})

watch(userAvatarFile, async () => {
    await updateDoc(doc(db, "users", userProfile.value.id), {
        userAvatar: userAvatarFile.value,
    })
})

const { params: routeParams } = useRoute()
console.log(routeParams.userId)


</script>