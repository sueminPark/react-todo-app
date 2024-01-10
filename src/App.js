
// react 라이브러리에서 Component를 가져오는 것
import React, {Component} from "react";
// css import 하기!
import "./App.css";
// 제공되는 Component를 사용하기 위해 extends(확장)해주는 것
export default class App extends Component {
  btnStyle = {
    color: "#ffff",
    border: "none",
    padding: "5px 9px",
    borderRadius: "50%",
    cursor: "pointer",
    float: "right",
  }

  getStyle = () => {
    return {
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: "none",
    }
  }

  todoData = [
    {
      id: "1",
      title: "Docker 공부하기",
      completed: true
    },
    {
      id: "2",
      title: "react 마스터하기",
      completed: false
    }
  ]

  render() {
    return(
      <div className="container">
        <div className="todoBlock">
          <div className="title">
          <h1>할 일 목록</h1>
          </div>
        
        {this.todoData.map((data) => (
          <div style={this.getStyle()}>
            <input type="checkbox" defaultChecked={false} />
            {data.title}
            <button style={this.btnStyle}>x</button>
          </div>
        ))}

        </div>
      </div>
    );
  }
}