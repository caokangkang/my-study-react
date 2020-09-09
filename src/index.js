import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
// import logo from  './logo.jpg';

// 这里怎么没有出现React字眼？
// JSX => React.createElement(...)




/* const name = "react study";
const jsx = <div>hello, {name}</div> */


// 函数
/* const obj = {
    firstName: "Harry",
    lastName: "Potter",
}

function formaName (name) {
    return name.firstName + " " + name.lastName;
} */

// 对象
/* const greet = <div>good</div>;
const jsx = <div>{greet}</div> */

// 条件语句
// 条件语句可以基于上面结论实现
/* const show = false;
const greet = <div>good</div>;
const jsx = (
    <div>
        {show?greet : '登陆'}
        {show&&greet}
    </div>
) */


// 数组
/* const a = [0, 1, 2];
const jsx = (
    <div>
        { *//* 数组 *//* }
        <ul>
            { *//* diff时候，首先比较type, 然后key, 所以同级同类型元素，key值必须得到 唯一 *//* }
            {a.map(item => (
                <li key={item}>{item}</li>
            ))}
        </ul>
    </div>
) */


// 属性的使用
// 属性： 静态值引用双引号，动态值用花括号；class、for等要特殊处理
/* const jsx = (
    <div>
        <img src={logo} style={{width: 100}} className="img" />m,n   n nmjnm  nbmjk
    </div>
) */

ReactDOM.render(<App />, document.querySelector('#root'))