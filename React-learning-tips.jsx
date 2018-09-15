//必要的一些指令
var instructions=[
    "create-react-app",
    "npm start",
    "npm build run",
    "npm install --save prop-types",
    "npm install redux react-redux --save",
    "npm install react-router-dom --save-dev"
]



//改变状态值state不能使用正常的赋值方法，而是要调用setState函数
this.setState({
    name:shiwei,
    age:23
})
//setState结束后并不会立刻改变state的值（React特性）,想要同步获取值，增加一个回调函数
this.setState(
    {name:shiwei,age:23},
    function(){console.log(this.state.name);console.log(this.state.age)}
)

//条件返回的方式可以实现某些元素的隐藏
render(){
    const isGood=true;
    return(
        <div>
            "石伟"
            {isGood
            ?<em>is good</em>
            :<span>is not good</span>}
        </div>
    )
}
//另一种完成方式，将JSX元素座位变量
render(){
    const isGood=true;
    const goodtip=<em>is good</em>;
    const notgoodTip=<span>is not good</span>

    return(
        <div>
            "石伟"
            {isGood ?goodtip : notgoodTip}
        </div>
    )
}
//自定义组件的名称必须以大写字母开头，而普通的html标签只能用小写开头
render(){
    return(
        <div>
            <Button/>                //代表自定义的Button组件
            <button></button>        //代表调用的html按钮组件button
        </div>
    )
}
//事件监听必须驼峰法,并且要手动将其绑定到this

<input onClick={this.handleClick.bind(this)}
handleClick(e){
    console.log(e.target.value)
}

//事件监听也可以传参
<input onClick={this.handleClick.bind(this,'石伟')}
handleClick(e,name){
    console.log(e.target.value+name)
}
//使用map渲染列表数据,key不可或缺
const dataArray=[
    {id:0,name:shiwei0},
    {id:1,name:shiwei1},
    {id:2,name:shiwei2},
];
render(){
    return(
        <div>
            dataArray.map((item,i)=><Button data={item} key={i}/>)
        </div>
    )
}

//路由 在/home页面即是Home组件，后面的类似
render() {
    return (
        <Router>
            <div>
                <span className="tip-style">{this.state.tips}</span>
                <ul>
                    <li className="tablar-style"><Link to='/home'><img onClick={this.handleHomeClick.bind(this)} className="image-style"src={require('../images/home.svg')} /></Link></li>
                    <li className="tablar-style"><Link to='/device'><img onClick={this.handleDeviceClick.bind(this)} className="image-style"src={require('../images/device.svg')} /></Link></li>
                    <li className="tablar-style"><Link to='/charts'><img onClick={this.handleChartsClick.bind(this)} className="image-style"src={require('../images/charts.svg')} /></Link></li>
                    <li className="tablar-style"><Link to='/user'><img onClick={this.handleUserClick.bind(this)} className="image-style"src={require('../images/user.svg')} /></Link></li>
                    <li className="tablar-style"><Link to='/warning'><img onClick={this.handleWarningClick.bind(this)} className="image-style"src={require('../images/warning.svg')} /></Link></li>
                </ul>
                <hr/>
                <Route  path="/home" component={Home} />
                <Route path="/charts" component={Charts} />
                <Route path="/device" component={Device} />
                <Route path="/user" component={User} />
                <Route path="/warning" component={Warning} />
            </div>
        </Router>
    );
  }

  <button onClick={()=>this.props.history.push('app')}></button> //点击按钮跳转到url/app页面

  //参数验证方法
  export default class App extends Component{
      constructor(){}

      static propTypes={
          name:PropTypes.string,
          age:PropTypes.number.isRequied,      //表示必须要有，否则报错
          onSubmit:PropTypes.func
      }
  }