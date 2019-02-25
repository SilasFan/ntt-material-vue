//目前还没做的：User名的同步（用prop）

<template>
    <div class="nav-bar_1">
        <p class="time_dis">{{timeNow}}</p>
        <ul>
            <li>{{day_section}}好,&ensp;{{user}}</li>
            <li>
                <a class="borderA" href="url_record">我的记录</a>
            </li>
            <li style="margin-right:10px">
                <router-link to="/login">退出</router-link>
            </li>
        </ul>
    </div>
</template>

<script scoped>
export default {
    name: "nav-bar1",
    computed: {
        timeNow: function() {
            let today = this.TN;
            var weekday = new Array(7);
            weekday[0] = "日";
            weekday[1] = "一";
            weekday[2] = "二";
            weekday[3] = "三";
            weekday[4] = "四";
            weekday[5] = "五";
            weekday[6] = "六";
            var date_1 =
                today.getFullYear() +
                "-" +
                (today.getMonth() + 1) +
                "-" +
                today.getDate();
            return (
                date_1 +
                "\xa0\xa0\xa0\xa0\xa0\xa0\xa0" +
                today.getHours() +
                ":" +
                (today.getMinutes() < 10
                    ? "0" + today.getMinutes()
                    : today.getMinutes()) +
                "\xa0\xa0\xa0\xa0\xa0\xa0\xa0" +
                "星期" +
                weekday[today.getDay()]
            );
        },
        user: function() {
            return "dalao";
            //getUser_currentLogined
        },
        day_section: function() {
            var today = this.TN;
            if (today.getHours() >= 6 && today.getHours() <= 12) return "早上";
            else if (today.getHours() > 12 && today.getHours() < 15)
                return "中午";
            else if (today.getHours() >= 15 && today.getHours() < 19)
                return "下午";
            else if (today.getHours() >= 19 && today.getHours() <= 24)
                return "晚上";
            else return "深夜";
        }
    },
    data() {
        return {
            TN: new Date()
        };
    },
    mounted: function() {
        let _this = this;
        this.timer = setInterval(function() {
            _this.TN = new Date();
        }, 1000);
    },
    beforeDestroy: function() {
        if (this.timer) {
            clearInterval(this.timer);
        }
    }
};
</script>

<style>
.nav-bar_1 {
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #19673a;
    color: white;
    float: left;
    width: 100%;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}
.time_dis {
    float: left;
    margin-left: 30px;
    margin-top: 3px;
    margin-bottom: 2px;
}
.nav-bar_1 ul {
    float: right;
    list-style-type: none;
    margin: 2px 0;
}
.nav-bar_1 ul li {
    float: left;
}

.nav-bar_1 ul a {
    text-decoration: none;
}
.nav-bar_1 ul a:visited {
    text-decoration: none;
    color: white;
}
.nav-bar_1 ul a:link {
    text-decoration: none;
    color: white;
}

.borderA {
    padding: 0 15px;
    margin: 0 15px;
    border: 2px solid;
    border-top: none;
    border-bottom: none;
    border-color: white;
}
</style>