# react学习笔记
1. 创建组件的方式一般有两种，一种是通过函数，另一种是通过继承类
```javascript
function MyComponent(){
    return <h2>这是一个组件，通过函数创建的</h2>
}
ReactDOM.render(<MyComponent/>,document.getElementById('XXX'));

class MyComponent1 extends React.Component{
    render(){
        return return <h2>这是一个组件，通过继承类创建的</h2>
    }
}
ReactDOM.render(<MyComponent1/>,document.getElementById('XXX'));

```

2. 组件的`state`，不能直接更改，要调用方法`setState()`
3. 组件类中的方法，是在组件的原型对象上的，直接调用会报undefined，所以需要bind操作：

```javascript
this.changeWeather = this.changeWeather.bind(this)
```

4. 在`jsx`的标签中，回调方法不能加调用括号，不然会把执行的结果返回给这个地方，具体语法：

```javascript
return <h1 onClick={this.changeWeather}>今天天气很{isHot ? '炎热' : '凉爽'}，{wind}</h1>
# 其中this.changeWeather是组建类中定义的方法（前提得先bind）
```

5. 在写类组件的时候，不一定要用构造器，直接对state赋值就行，方法也不需要bind，可以用箭头函数赋值给类变量方法，如下所示：

```javascript
        class Weather extends React.Component {
            state = { isHot: true };
            changeWeather = () => {
                this.setState({
                    isHot: !this.state.isHot
                })
            }
            render() {
                return (
                    <div onClick={this.changeWeather}>
                        今天天气很{this.state.isHot ? '炎热' : '寒冷'}
                    </div>
                )
            }
        }
```

