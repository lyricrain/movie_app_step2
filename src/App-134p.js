import React from 'react';

class App extends React.Component {
  constructor(props){
    super(props);
    console.log('hello');
  }
  // 클래스 멤버변수에는 let 이나 var 를 명시하지 않는다 
  state = {
    count: 0
  };
  add = () => {
    // console.log('add');
    // this.state.count = 1; //아래 warning setState 로 변경해야 함 
    // current 에서는 현재 state 가 넘어옴
    // setState 의 인자로 state를 전달하면  이전 state 와  새로운 state를 비교해
    // 바뀐 데이터만 업데이트 합니다. 변경 대상이 아닌 키와 키값은 그대로 유지됨       
    this.setState( current => ({ count: current.count + 1 }));
  }
  minus = () => {
    // console.log('minus');
    // this.state.count = -1; //아래 warning setState 로 변경해야 함 
    this.setState( current => ({ count: current.count - 1 }));
  }
  // 컴포넌트에 화면이 그려지면 실행되는 함수
  componentDidMount(){
    console.log('renderd');
  }
  render() {
    console.log('render');
    return (
      <div>
        <h1>이 숫자는 : {this.state.count}</h1>
        {/* 버튼을 누르면 add 함수 실행  setState 실행되어 state 의 json 정보가 업데이트
        reder() 함수 실행 후 화면 업데이트 */}
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    )
  }
}
export default App;
