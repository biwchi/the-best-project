<script setup>
</script>

<template>
    <div class="post-body">
        <img class="user-pic" src="../assets/images/user-pic.jfif" alt="">
        <div class="post">
            <div class="post-data">
                <div class="post-user-name">Sergey Bondar</div>
                <div class="post-user-id">@hodame</div>
                <div class="post-date">33s</div>
            </div>
            <div class="post-content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi sit quasi sint nam tempora ex doloribus aut ipsa aperiam beatae ullam ab facere accusantium cupiditate voluptatibus, doloremque voluptatum incidunt aspernatur!</div>
            <div class="post-media"><img src="../assets/images/post-pic.JPG" alt=""></div>
            <ul class="post-actions">
                <li class="post-comments">
                    <img src="../assets/images/feed/comment.svg" alt="">
                    <span>31</span>
                </li>
                <li class="post-retweets">
                    <img src="../assets/images/feed/retweet.svg" alt="">
                    <span>4</span>
                </li>
                <li class="post-likes">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.9999 16.2285H8.9894C7.05215 16.1925 1.4624 11.142 1.4624 6.35853C1.4624 4.06053 3.35615 2.04303 5.51465 2.04303C7.23215 2.04303 8.38715 3.22803 8.99915 4.09053C9.60965 3.22953 10.7647 2.04303 12.4829 2.04303C14.6429 2.04303 16.5359 4.06053 16.5359 6.35928C16.5359 11.1413 10.9454 16.1918 9.00815 16.227H8.9999V16.2285Z" fill="#F4245E"/>
                    </svg>
                    <span>35</span>
                </li>
                <li class="post-share">
                    <img src="../assets/images/feed/share.svg" alt="">
                    <span>51</span>
                </li>
            </ul>
            <button class="post-thread-btn">Show this thread</button>
        </div>
    </div>
</template>

<style scoped lang="scss">
.user-pic {
    width: 50px;
    height: 50px;
    object-fit: cover;
    border-radius: 50%;
}
</style>