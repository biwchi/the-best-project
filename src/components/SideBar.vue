<script setup>
import { ref } from 'vue';
import ExploredIcon from "../assets/Icons/ExploredIcon.vue"
import { signOut } from "firebase/auth";
import { auth } from "../firebase/config"
import { useRouter } from 'vue-router';
const props = defineProps([
    "userProfile"
])
const router = useRouter()
const popupOpened = ref(false)

const logOut = () => {
    signOut(auth).then(() => {
        router.replace({ path: "/auth" })
    })
        .catch((error) => {
            alert(error.message)
        })
}
</script>

<template>
    <div class="container">
        <div class="logo">
            <img src="../assets/images/sidebar/logo.svg" alt="">
        </div>
        <ul class="sections">
            <RouterLink :to="{ name: 'Home' }" custom v-slot="{ navigate }">
                <li @click="navigate">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M22.46 7.56999L12.357 2.11499C12.134 1.99499 11.867 1.99499 11.644 2.11499L1.54299 7.56999C1.17899 7.76699 1.04299 8.22199 1.23999 8.58699C1.37499 8.83699 1.63399 8.97999 1.89999 8.97999C2.01999 8.97999 2.14299 8.94999 2.25599 8.88999L3.07099 8.44999L4.69999 19.963C4.91399 21.178 6.00799 22.025 7.35799 22.025H16.64C17.992 22.025 19.085 21.177 19.303 19.938L20.929 8.44799L21.747 8.88999C22.111 9.08299 22.567 8.94999 22.764 8.58599C22.96 8.22299 22.824 7.76799 22.46 7.56999ZM17.822 19.703C17.715 20.309 17.119 20.525 16.642 20.525H7.35999C6.87999 20.525 6.28499 20.309 6.18199 19.727L4.47999 7.68999L12 3.62799L19.522 7.68799L17.822 19.703Z"
                            fill="white" />
                        <path
                            d="M8.21997 12.184C8.21997 14.268 9.91497 15.964 12 15.964C14.085 15.964 15.78 14.268 15.78 12.184C15.78 10.1 14.085 8.40399 12 8.40399C9.91497 8.40399 8.21997 10.1 8.21997 12.184ZM14.28 12.184C14.28 13.442 13.258 14.464 12 14.464C10.742 14.464 9.71997 13.442 9.71997 12.184C9.71997 10.926 10.742 9.90399 12 9.90399C13.258 9.90399 14.28 10.926 14.28 12.184Z"
                            fill="white" />
                    </svg>
                    <span>
                        Home
                    </span>
                </li>

            </RouterLink>
            <li>
                <ExploredIcon />
                <span>
                    Explore
                </span>
            </li>
            <li>
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M27.1212 20.585C27.0962 20.565 24.4462 18.535 24.4925 13.0475C24.5175 9.88251 23.4775 7.07001 21.5587 5.12876C19.84 3.38751 17.5125 2.42501 15.0062 2.41251H14.99C12.485 2.42501 10.1575 3.38751 8.43748 5.13001C6.51998 7.07126 5.47748 9.88251 5.50498 13.0475C5.55123 18.46 2.97998 20.5063 2.87748 20.585C2.55248 20.8263 2.41998 21.2475 2.54623 21.6325C2.67373 22.0175 3.03373 22.2763 3.43623 22.2763H9.58623C9.71373 25.1638 12.0825 27.4763 14.9987 27.4763C17.915 27.4763 20.2812 25.1638 20.4075 22.2763H26.56C26.9625 22.2763 27.3225 22.0188 27.4475 21.6338C27.5762 21.25 27.4437 20.8275 27.1187 20.5863L27.1212 20.585ZM15 25.5975C13.1187 25.5975 11.5875 24.1263 11.465 22.275H18.535C18.41 24.125 16.8812 25.6 15 25.6V25.5975ZM5.47498 20.4C6.39998 18.985 7.40998 16.615 7.37998 13.03C7.35748 10.33 8.18498 8.05251 9.77123 6.44626C11.1375 5.06251 12.9962 4.29626 15 4.28751C17.0037 4.29751 18.8587 5.06251 20.225 6.44751C21.8125 8.05376 22.6412 10.33 22.6187 13.0313C22.5887 16.6163 23.6 18.9875 24.525 20.4013H5.47498V20.4Z"
                        fill="white" />
                </svg>
                <span>
                    Notifications
                </span>
            </li>
            <li>
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M24.0625 3.77249H5.9375C4.04125 3.77249 2.5 5.31499 2.5 7.21249V22.8312C2.5 24.7287 4.04125 26.2725 5.9375 26.2725H24.0625C25.9587 26.2725 27.5 24.7287 27.5 22.8312V7.21249C27.5 5.31499 25.9587 3.77249 24.0625 3.77249ZM5.9375 5.64749H24.0625C24.925 5.64749 25.625 6.34749 25.625 7.20999V8.10249L15.5625 14.8112C15.2212 15.0362 14.78 15.0387 14.4375 14.8087L4.375 8.10249V7.20999C4.375 6.34749 5.075 5.64749 5.9375 5.64749ZM24.0625 24.395H5.9375C5.075 24.395 4.375 23.695 4.375 22.8325V10.3L13.425 16.3375C13.9037 16.6575 14.4525 16.8175 15 16.8175C15.55 16.8175 16.0963 16.6575 16.575 16.3387L25.625 10.3012V22.8287C25.625 23.6912 24.925 24.3912 24.0625 24.3912V24.395Z"
                        fill="white" />
                </svg>
                <span>
                    Messages
                </span>
            </li>
            <li>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M19.9 23.5C19.743 23.5 19.588 23.45 19.458 23.356L12 17.928L4.54198 23.358C4.31398 23.522 4.01198 23.548 3.75998 23.418C3.50998 23.291 3.34998 23.033 3.34998 22.751V5.60001C3.34998 4.36001 4.35998 3.35001 5.59998 3.35001H18.398C19.638 3.35001 20.648 4.36001 20.648 5.60001V22.75C20.648 23.032 20.49 23.29 20.238 23.418C20.132 23.473 20.015 23.5 19.898 23.5H19.9ZM12 16.25C12.155 16.25 12.31 16.298 12.44 16.394L19.15 21.277V5.60001C19.15 5.18801 18.813 4.85001 18.4 4.85001H5.59998C5.18698 4.85001 4.84998 5.18801 4.84998 5.60001V21.277L11.56 16.394C11.69 16.298 11.845 16.25 12 16.25Z"
                        fill="white" />
                </svg>
                <span>
                    Bookmark
                </span>
            </li>
            <li>
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M24.6875 27.5H5.3125C3.7625 27.5 2.5 26.2375 2.5 24.6875V5.3125C2.5 3.7625 3.7625 2.5 5.3125 2.5H24.6875C26.2375 2.5 27.5 3.7625 27.5 5.3125V24.6875C27.5 26.2375 26.2375 27.5 24.6875 27.5ZM5.3125 4.375C4.795 4.375 4.375 4.79625 4.375 5.3125V24.6875C4.375 25.2038 4.795 25.625 5.3125 25.625H24.6875C25.205 25.625 25.625 25.2038 25.625 24.6875V5.3125C25.625 4.79625 25.205 4.375 24.6875 4.375H5.3125Z"
                        fill="white" />
                    <path
                        d="M21.25 10.8H8.75C8.2325 10.8 7.8125 10.3787 7.8125 9.86249C7.8125 9.34624 8.2325 8.92499 8.75 8.92499H21.25C21.7675 8.92499 22.1875 9.34374 22.1875 9.86249C22.1875 10.3812 21.7675 10.8 21.25 10.8ZM21.25 15.9375H8.75C8.2325 15.9375 7.8125 15.5175 7.8125 15C7.8125 14.4825 8.2325 14.0625 8.75 14.0625H21.25C21.7675 14.0625 22.1875 14.4825 22.1875 15C22.1875 15.5175 21.7675 15.9375 21.25 15.9375ZM15 21.075H8.75C8.2325 21.075 7.8125 20.6562 7.8125 20.1375C7.8125 19.6187 8.2325 19.2 8.75 19.2H15C15.5175 19.2 15.9375 19.6212 15.9375 20.1375C15.9375 20.6537 15.5175 21.075 15 21.075Z"
                        fill="white" />
                </svg>
                <span>
                    Lists
                </span>
            </li>
            <RouterLink :to="{ name: 'profile', params: { userId: userProfile.uid || '0' } }" custom v-slot="{ navigate }">
                <div @click="navigate" class="profile-elem-link">
                    <li>
                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M15 14.77C16.6938 14.77 18.59 14.5825 19.8 13.2C20.8175 12.0375 21.1475 10.24 20.8075 7.71001C20.3325 4.17876 18.1613 2.07001 15 2.07001C11.8388 2.07001 9.6675 4.17876 9.1925 7.71251C8.8525 10.24 9.1825 12.0375 10.2 13.2C11.41 14.5838 13.3063 14.77 15 14.77ZM11.05 7.96001C11.2525 6.46001 12.0338 3.94501 15 3.94501C17.9663 3.94501 18.7475 6.46126 18.95 7.96001C19.2088 9.89751 19.0213 11.2438 18.3875 11.9663C17.8188 12.6163 16.805 12.895 15 12.895C13.195 12.895 12.1813 12.6163 11.6125 11.9663C10.9788 11.2438 10.7913 9.89626 11.05 7.96001ZM25.35 24.045C24.2538 19.6375 19.9975 16.5575 15 16.5575C10.0025 16.5575 5.74625 19.6375 4.65 24.045C4.435 24.91 4.615 25.795 5.14375 26.47C5.65375 27.12 6.44375 27.495 7.31 27.495H22.69C23.5563 27.495 24.3463 27.12 24.8563 26.47C25.3863 25.795 25.565 24.9113 25.3488 24.045H25.35ZM23.38 25.315C23.2225 25.515 22.985 25.6225 22.69 25.6225H7.31C7.01625 25.6225 6.7775 25.5163 6.62 25.315C6.44875 25.0975 6.395 24.8 6.47 24.4975C7.3575 20.9288 10.8663 18.435 15 18.435C19.1338 18.435 22.6425 20.9275 23.53 24.4975C23.605 24.8 23.5513 25.0975 23.38 25.315Z"
                                fill="white" />
                        </svg>
                        <span>
                            Profile
                        </span>
                    </li>
                </div>
            </RouterLink>
            <li>
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M20.625 12.8125C19.4187 12.8125 18.4375 13.7962 18.4375 15C18.4375 16.2037 19.4175 17.1875 20.625 17.1875C21.83 17.1875 22.8125 16.205 22.8125 15C22.8125 13.795 21.83 12.8125 20.625 12.8125ZM20.625 15.9375C20.1075 15.9375 19.6875 15.5175 19.6875 15C19.6875 14.4837 20.1088 14.0625 20.625 14.0625C21.1412 14.0625 21.5625 14.4825 21.5625 15C21.5625 15.5162 21.1425 15.9375 20.625 15.9375ZM15 12.8125C13.7925 12.8125 12.8125 13.7962 12.8125 15C12.8125 16.2037 13.7937 17.1875 15 17.1875C16.2063 17.1875 17.1875 16.205 17.1875 15C17.1875 13.795 16.2075 12.8125 15 12.8125ZM15 15.9375C14.4825 15.9375 14.0625 15.5175 14.0625 15C14.0625 14.4837 14.4837 14.0625 15 14.0625C15.5162 14.0625 15.9375 14.4825 15.9375 15C15.9375 15.5162 15.5175 15.9375 15 15.9375ZM9.375 12.8125C8.16875 12.8125 7.1875 13.7962 7.1875 15C7.1875 16.2037 8.16875 17.1875 9.375 17.1875C10.58 17.1875 11.5625 16.205 11.5625 15C11.5625 13.795 10.5787 12.8125 9.375 12.8125ZM9.375 15.9375C8.8575 15.9375 8.4375 15.5175 8.4375 15C8.4375 14.4837 8.85875 14.0625 9.375 14.0625C9.89125 14.0625 10.3125 14.4825 10.3125 15C10.3125 15.5162 9.8925 15.9375 9.375 15.9375Z"
                        fill="white" />
                    <path
                        d="M15 28.4375C7.59 28.4375 1.5625 22.41 1.5625 15C1.5625 7.59 7.59 1.5625 15 1.5625C22.41 1.5625 28.4375 7.59 28.4375 15C28.4375 22.41 22.41 28.4375 15 28.4375ZM15 3.4375C8.625 3.4375 3.4375 8.625 3.4375 15C3.4375 21.375 8.625 26.5625 15 26.5625C21.375 26.5625 26.5625 21.375 26.5625 15C26.5625 8.625 21.375 3.4375 15 3.4375Z"
                        fill="white" />
                </svg>
                <span>
                    More
                </span>
            </li>
            <button class="tweet-btn">Tweet</button>
        </ul>
        <div class="profile-elem">
            <RouterLink :to="{ name: 'profile', params: { userId: userProfile.uid || '0' } }" custom v-slot="{ navigate }">
                <div @click="navigate" class="profile-elem-link">
                    <div class="user-avatar"><img :src="userProfile.userAvatar" alt=""></div>
                    <div class="user-info">
                        <div class="user-name">{{ userProfile.userName }}</div>
                        <div class="user-id">@{{ userProfile.userId }}</div>
                    </div>
                </div>
            </RouterLink>
            <div @click="popupOpened = !popupOpened" class="dots">
                <ul v-show="popupOpened" class="dots-popup">
                    <li @click="logOut">Log out</li>
                    <li>Edit profile</li>
                </ul>
                <img src="../assets/images/sidebar/dots-settings.svg" alt="">
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.container {
    position: fixed;
    padding-bottom: 20px;
    display: flex;
    height: 100%;
    flex-direction: column;
    width: 270px;
}

.logo {
    padding-top: 10px;
}

.sections {
    margin-top: 30px;
    flex: 1 1 100%;
    padding-left: 0;

    div {
        &.profile-elem-link {
            max-height: 30px;
        }
    }

    li {
        cursor: pointer;
        display: flex;
        align-items: center;
        list-style-type: none;
        margin: 15px 0;
        width: 100%;
        max-height: 30px;

        svg {
            width: 30px;
            height: 30px;
            margin-right: 20px;

            path {
                transition: .2s ease;
                fill: var(--white);
            }
        }

        span {
            transition: .2s ease;
            font-size: 19px;
            font-weight: 700;
        }

        &:hover {
            svg {
                path {
                    fill: var(--main-blue);
                }
            }

            span {
                color: var(--main-blue);
            }
        }
    }
}

.tweet-btn {
    margin-top: 15px;
    cursor: pointer;
    background-color: var(--main-blue);
    font-size: 15;
    font-weight: 700;
    border-radius: 9999px;
    border: none;
    color: var(--white);
    padding: 15px 93px;
}

.profile-elem {
    display: flex;
    align-items: center;
    justify-content: space-between;

    &-link {
        cursor: pointer;
        display: flex;
    }
}

.user-avatar {
    width: 100%;
    border-radius: 50%;
    overflow: hidden;
    img {
        width: 40px;
        height: 40px;
        object-fit: cover;
    }
}

.user-info {
    flex: 1 1 100%;
    margin-left: 10px;
}

.user-name {
    white-space: nowrap;
    font-weight: 700;
    margin-bottom: 3px;
    color: var(--white);
}

.user-id {
    letter-spacing: -0.017em;
    color: var(--dark6);
}

.dots {
    padding: 10px;
    cursor: pointer;
    position: relative;

    &-popup {
        list-style-type: none;
        position: absolute;
        top: -80px;
        right: 10px;
        transform: translateX(50%);
        background-color: var(--dark3);
        padding: 10px;
        border-radius: 5px;

        li {
            cursor: pointer;
            transition: 0.2s ease;
            padding: 5px 0;
            white-space: nowrap;
            color: var(--white);

            &:hover {
                color: var(--main-blue);
            }
        }
    }
}</style>