<script setup>
const apiKey = "640c28517fa296c1fd91d22c" 

</script>

<template>
    <div class="body">
        <img class="user-pic" src="../assets/images/user-pic.jfif" alt="">
        <div class="add-post">
            <textarea placeholder="What's happening?" type="textarea" class="input"></textarea>
            <div class="attachment">
                <ul>
                    <li><img src="../assets/images/feed/media.svg" alt=""></li>
                    <li><img src="../assets/images/feed/gif.svg" alt=""></li>
                    <li><img src="../assets/images/feed/pull.svg" alt=""></li>
                    <li><img src="../assets/images/feed/emoji.svg" alt=""></li>
                    <li><img src="../assets/images/feed/schedule.svg" alt=""></li>
                </ul>
                <button>Tweet</button>
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
            img {
                width: 24px;
                height: 24px;
            }
        }
    }
}
</style>