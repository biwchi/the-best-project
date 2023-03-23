<template>
    <div class="auth">
        <div class="auth__body">
            <div class="auth__logo">
                <svg width="29" height="24" viewBox="0 0 29 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M28.5538 3.17125C27.51 3.63375 26.3888 3.94625 25.21 4.0875C26.4125 3.3675 27.335 2.225 27.77 0.865002C26.645 1.5325 25.3988 2.0175 24.0725 2.2775C23.01 1.1475 21.4975 0.440002 19.8225 0.440002C16.6075 0.440002 14 3.0475 14 6.265C14 6.72 14.0525 7.1625 14.15 7.59C9.30876 7.34625 5.02001 5.0275 2.14751 1.505C1.64751 2.3675 1.36001 3.3675 1.36001 4.4325C1.36001 6.4525 2.38876 8.23625 3.95001 9.28C2.99501 9.24875 2.09751 8.9875 1.31251 8.55125V8.62625C1.31251 11.4475 3.31876 13.8013 5.98376 14.3363C5.49376 14.4688 4.98001 14.5388 4.45001 14.5388C4.07501 14.5388 3.70876 14.5038 3.35376 14.4363C4.09501 16.7488 6.24501 18.4338 8.79376 18.4788C6.80001 20.0413 4.28876 20.9725 1.56126 20.9725C1.09126 20.9725 0.627515 20.945 0.171265 20.8913C2.74876 22.545 5.80876 23.5075 9.09626 23.5075C19.8088 23.5075 25.665 14.635 25.665 6.94C25.665 6.69 25.6588 6.4375 25.6475 6.1875C26.785 5.365 27.7725 4.34125 28.5513 3.175L28.5538 3.17125Z"
                        fill="white" />
                </svg>
            </div>
            <div class="auth__content">
                <h1 class="auth__title">Join Twitter today</h1>
                <div class="auth__form">
                    <div class="auth__input-box">
                        <input type="text" name="fullName" placeholder="Full name" v-model="fullName">
                    </div>
                    <div class="auth__input-box">
                        <input type="email" name="email" placeholder="Email" v-model="email">
                    </div>
                    <div class="auth__input-box">
                        <input type="password" name="password" placeholder="Password" v-model="password">
                    </div>
                    <div class="auth__input-box">
                        <input type="text" name="username" placeholder="Username" v-model="userName">
                    </div>
                    <div class="auth__button">
                        <button @click="register" class="auth__submit">Register</button>
                    </div>
                    <ul class="auth__options" style="margin-top: 30px;">
                        <RouterLink :to="{ name: routeNames.Login }">
                            <li class="auth__option">Go back</li>
                        </RouterLink>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth, db } from '../firebase/config';
import { routeNames } from '../router/routeNames';
import { doc, collection, addDoc, setDoc } from 'firebase/firestore';
const email = ref("")
const password = ref("")
const userName = ref("")
const fullName = ref("")
const register = () => {
    createUserWithEmailAndPassword(auth, email.value, password.value)
        .then((newUser) => {
            const monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
            const date = new Date();
            console.log(newUser);
            setDoc(doc(db, "users", newUser.user.uid), {
                "uid": newUser.user.uid,
                "userEmail": newUser.user.email,
                "userName": fullName.value,
                "userId": userName.value,
                "userAvatar": "https://cdn-icons-png.flaticon.com/512/847/847969.png",
                "userProfileBackground": "https://img.freepik.com/free-photo/background_53876-32169.jpg?w=360",
                "userLocation": "",
                "userFollowing": 0,
                "userFollowers": 0,
                "userSpec": "-",
                "userJoinDate": monthNames[date.getMonth()] + " " + date.getFullYear(),
                "userPostsCount": 0,
            })
        })
        .catch((error) => {
            console.log(error.message)
            alert(error.message)
        })
} 
</script>