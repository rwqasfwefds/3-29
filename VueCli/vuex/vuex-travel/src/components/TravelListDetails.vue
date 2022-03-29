<template>
    <div id="travelist-details">
        <p>{{ this.$store.state.selectedCountry }}</p>
        <ul>
            <li v-for="item in filterdItems" :key="item.attraction">
                <span>도시 : {{ item.city }}</span>
                <span>명소 : {{ item.attraction }}</span>
                <span>요금 : {{ item.entrance_fee | currency }}</span>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    filters: {
        currency(value) {
            // 돈을 그 나라에 맞게 맞춰줌 달러면 달러 유로면 유로 엔이면 엔
            // 함수명 : NumberFormat
            // 1st 매개변수 : 나라명(독일)
            // 2nd 매개변서 : 통화 표시
            return new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "EUR",
            }).format(value);
        },
    },
    computed: {
        filterdItems() {
            return this.$store.getters.items.filter((item) => {
            return item.country == this.$store.state.selectedCountry;
            });
        },
    },
};
</script>

<style>
#travelist-details{
    color: white;
    background: teal;
    padding: 10px 20px;
}
#travelist-details ul{
    padding: 0;
    list-style: none;
}
#travelist-details ul li{
    margin: 10px;
    padding: 20px;
    background: #00695c;
}
</style>
