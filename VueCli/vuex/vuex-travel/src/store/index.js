import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 모든 컴포넌트에서 다 가져다 쓸 수있는 쉨히들
export default new Vuex.Store({
  // 공유 data 등록하는 자리
  state: {
    items : [
      {
        country : 'France',
        city : 'Paris',
        attraction : '에펠탑',
        entrance_fee : 10
      },
      {
        country : 'Italy',
        city : 'Venezia',
        attraction : '산마르코 대성당',
        entrance_fee : 0
      },
      {
        country : 'Austria',
        city : 'Salzburg',
        attraction : '호엔 잘쯔부르크성',
        entrance_fee : 15.20
      },
      {
        country : 'Germany',
        city : 'Frankfurt',
        attraction : '뢰머광장',
        entrance_fee : 0
      },
      {
        country : 'Nederland',
        city : 'Amsterdam',
        attraction : '국립 미술관',
        entrance_fee : 17.50
      }
    ],
    selectedCountry : ''
  },
  // 원본 데이터를 검색하는 목적
  getters: {
    // 매개변수에 값이 들어온다고 생각
    items : state => {
      return state.items;
    },
    // 관광지 객체 배열에서 클릭한 것의 나라이름에 해당하는
    // 객체만 가져오는 함수
    filteredItems : state => {
      return state.items.filter(item => {
        return item.country == state.selectedCountry;
      });
    }
  },
  // 원본 데이터를 변형, 가공하는 목적
  mutations: {
    // 뮤테이션을 쓸 때 첫 번째 매개변수는 항상 state가 들어와야 함
    // 신경 ㅈ도 안 써도 됨
    // 두 번째만 신경쓰자
    reducePrice : state => {
      state.items.forEach(item => {
        item.entrance_fee = (item.entrance_fee - (item.entrance_fee * 0.2))
      })
    },
    goCountry : (state, inCountry) => {
      state.selectedCountry = inCountry;
    }
  },
  // 비동기 함수일 경우 아래 등록
  actions: {
    // 액션을 쓸 때 첫 번째 매개변수는 항상 context 들어와야 함
    // 신경 ㅈ도 안 써도 됨
    // context가 환경 전체라고 생각하면 됨
    // 한 마디로 밑에 걸 예로 들어보면
    // 이 페이지 전체에 reducePrice라는 함수를 찾아서 비동기 함수를 넣겠다
    reducePrice : context => {
      setTimeout(function(){
        context.commit('reducePrice')
      }, 1000);
    },
    goCountry : (context, inCountry) => {
      context.commit('goCountry', inCountry);
    }
  },
  modules: {
  }
})
