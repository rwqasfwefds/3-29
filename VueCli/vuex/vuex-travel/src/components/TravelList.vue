<template>
    <div id="travel-list">
        <p>유럽 여행</p>
        <ul>
            <li
                v-for="item in items"
                :key="item.attraction"
                @click="goCountry(item.country)"
            >
                <span>국가 : {{item.country}}</span>
                <span>도시 : {{item.city}}</span>
                <span>명소 : {{item.attraction}}</span>
                <!-- 달러나 원화 표시 $ 이런거 때문에 필터를 걸음 -->
                <span>요금 : {{item.entrance_fee | currency}}</span>
            </li>
        </ul>
        <!-- mutations 속성에 등록된 함수 호출 -->
        <button @click="reducePrice">특별 입장료 할인</button>
        <br>
        <!-- 자식 컴포넌트(자식 안에 또 다른 자식 형태) -->
        <TravelListDetails></TravelListDetails>
    </div>
</template>

<script>
import TravelListDetails from '@/components/TravelListDetails.vue'

export default {
    components : {
        TravelListDetails
    },
    methods : {
        // vuex 저장소에서 데이터 호출
        goCountry(inValue){
            this.$store.dispatch('goCountry', inValue);
            // this.$store.commit('goCountry', inValue);
            // selectedCountry 이 새끼는 저장소에서 아무 값도 없었는디
            // 클릭 이벤트가 실행되면 item.country 얘가 들어 감
            // this.$store.state.selectedCountry = inValue;

        },
        reducePrice(){
            this.$store.dispatch('reducePrice')
            // this.$store.commit('reducePrice');
        }
    },
    filters : {
        currency(value){
            // 돈을 그 나라에 맞게 맞춰줌 달러면 달러 유로면 유로 엔이면 엔
            // 함수명 : NumberFormat
            // 1st 매개변수 : 나라명(독일)
            // 2nd 매개변서 : 통화 표시
            return new Intl.NumberFormat("de-DE", {style : 'currency', currency : 'EUR'}).format(value)
        }
    },
    // 공유 저장소에 있는 함수를 가져 옴
    // 그 함수는 state의 객체배열의 값임
    computed : {
        items(){
            return this.$store.getters.items;
        }
    }
};
</script>

<style>
#travel-list{
    color: white;
    background: blue;
    padding: 10px 20px;
}
#travel-list ul{
    padding: 0;
    list-style: none;
}
#travel-list li{
    margin: 10px;
    padding: 20px;
    background: #1565c0;
}
</style>
