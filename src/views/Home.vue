<template>
    <div class="home">
        <p>这里是华南理工大学学生会物资管理系统</p>
        <p>欢迎，{{userID}}</p>
    </div>
</template>

<script>
export default {
    name: "home",
    computed: {
        userID: () => "dalao"
    }
};
</script>
