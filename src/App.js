
// react 라이브러리에서 Component를 가져오는 것
import React, {Component} from "react";
// css import 하기!
import "./App.css";
// 제공되는 Component를 사용하기 위해 extends(확장)해주는 것
export default class App extends Component {
  render() {
    return(
      <div className="container">
        <div className="todoBlock">
<div className="title">
  <h1>할 일 목록</h1>

</div>

        </div>
      
      </div>
    )
  }
}