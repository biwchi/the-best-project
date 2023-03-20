<template>
    <div class="auth">
        <div class="auth__body">
            <!-- <div class="auth__btn-close">
                <svg width="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="SVGRepo_bgCarrier" stroke-width="0" />
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />
                    <g id="SVGRepo_iconCarrier">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M19.207 6.207a1 1 0 0 0-1.414-1.414L12 10.586 6.207 4.793a1 1 0 0 0-1.414 1.414L10.586 12l-5.793 5.793a1 1 0 1 0 1.414 1.414L12 13.414l5.793 5.793a1 1 0 0 0 1.414-1.414L13.414 12l5.793-5.793z" fill="#000000" />
                    </g>
                </svg>
            </div> -->
            <div class="auth__content">
                <h1 class="auth__title">Create your account</h1>
                <div class="auth__form">
                    <div class="auth__input-box">
                        <input type="text" name="email" placeholder="Email" v-model="email">
                    </div>
                    <div class="auth__input-box">
                        <input type="password" name="password" placeholder="Password" v-model="password">
                    </div>
                    <div class="auth__button"><button class="auth__submit">Register</button></div >
                </div>
            </div >
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
// import { ui } from "../firebase/config"
import { getAuth, createUserWithEmailAndPassword} from "firebase/auth"

const auth = getAuth();
const email = ref("")
const password = ref("")

const register = () => {
    createUserWithEmailAndPassword(auth,email.value, password.value)
        .then((userCredential) => {
            const user = userCredential.user
            console.log(user)
        })
}
</script>