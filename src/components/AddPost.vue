<script setup>
import { ref, watch } from "vue"
import Posts from "../assets/data/posts.json"
const postsData = ref(Posts)
const postContent = ref("")
const postMedia = ref("")
const fileLoaded = ref('')
const howFilled = ref(0)
const maxWords = ref(false)
let id = 0
function loadFile(e) {
    postMedia.value = e.target.files
    let fileReader = new FileReader()

    fileReader.onload = function(event) {
        fileLoaded.value = event.target.result
    }
    fileReader.readAsDataURL(postMedia.value[0])
}
function addPost() {
    const content = postContent.value
    const date = new Date
    const month = "0" + (date.getUTCMonth() + 1)
    const day = date.getUTCDate()
    const year = date.getUTCFullYear()
    const postData = day + '.' + month + "." + year
    let newPost = {
        "id": id++,
        "userName": "Sergey Bondar",
        "userId": "hodame",
        "content": content,
        "date": postData,
        "media": fileLoaded.value,
        "likes": 0,
        "retweet": 0,
        "share": 0,
        "commentsCount": 0,
        "comments": [
        ]
    }
    if (postContent.value == "") {
        window.alert('piska')
    } else {
        fileLoaded.value = ""
        postContent.value = ""
        postsData.value.unshift(newPost)
    }
}

watch( postContent, () => {
    const maxPostlength = 200
    if (postContent.value.length <= maxPostlength) {
        maxWords.value = false
        howFilled.value = postContent.value.length / 2
    } else {
        maxWords.value = true
    }
})

</script>

<template>
    <div class="body">
        <img class="user-pic" src="../assets/images/user-pic.jfif" alt="">
        <div class="add-post">
            <textarea v-model="postContent" placeholder="What's happening?" type="textarea" class="input"></textarea>
            <div v-show="fileLoaded" class="pre-view-media"><img :src="fileLoaded" alt=""></div>
            <div class="attachment">
                <ul>
                    <li><input type="file" name="loadFile" id="loadMedia" @change="loadFile"><label for="loadMedia"><img src="../assets/images/feed/media.svg" alt=""></label></li>
                    <li><img src="../assets/images/feed/gif.svg" alt=""></li>
                    <li><img src="../assets/images/feed/pull.svg" alt=""></li>
                    <li><img src="../assets/images/feed/emoji.svg" alt=""></li>
                    <li><img src="../assets/images/feed/schedule.svg" alt=""></li>
                </ul>
                <div class="words-fill">
                    <p>{{ postContent.length }}</p>
                    <div><span :class="{filled: maxWords}" :style="{width: howFilled + '%'}"></span></div>
                </div>
                <button @click="addPost">Tweet</button>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.body {
    padding: 10px 15px;
    display: flex;
    width: 100%;
    border-bottom: 1px var(--dark4) solid;
}
.user-pic {
    width: 50px;
    height: 50px;
    object-fit: cover;
    border-radius: 50%;
}
.add-post {
    flex: 1 1 100%;
    textarea {
        resize: none;
        padding: 5px 5px 5px 10px;
        color: var(--white);
        width: 100%;
        height: 70px;
        font-size: 20px;
        background-color: transparent;
        ::placeholder {
            font-size: 20px;
            color: var(--dark6);
        }
    }
}
.pre-view-media {
    img {
        max-width: 100px;
        max-height: 70px;
        border: 1px solid var(--dark4);
        border-radius: 10px;
    }
}
.attachment {
    display: flex;
    button {
        padding: 10px 17.5px;
        font-weight: 700;
        background-color: var(--main-blue);
        font-size: 15px;
        border-radius: 9999px;
        color: var(--white);
    }
    ul {
        margin-left: 10px;
        display: flex;
        list-style-type: none;
        flex: 1 1 100%;
        align-items: center;
        li {
            cursor: pointer;
            margin-right: 15px;
            input {
                opacity: 0;
                width: 0px;
            }
            img {
                cursor: pointer;
                width: 24px;
                height: 24px;
            }
        }
    }
}
.words-fill {
    margin-right: 20px;
    width: 100px;
    display: flex;
    align-items: center;
    p {
        font-size: 14px;
        font-weight: 400;
        color: var(--wihte);
    }
    div {
        margin-left: 5px;
        position: relative;
        width: 100px;
        height: 2px;
        background-color: var(--dark4);
        span {
            position: absolute;
            display: inline-block;
            width: 0%;
            height: 2px;
            background-color: var(--main-blue);
            &.filled {
                background-color: var(--red);
            }
        }
    }
}
</style>