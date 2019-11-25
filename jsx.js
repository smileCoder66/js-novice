//React 写法示例,不同框架间会有细微的用法差距
//变量在单一花括号内使用,可运算
//所有组件的开头字母必须大写

let fl = 1;
const props = {
  name:'zxl',
  skill:['js','css','node']
};

<div>
  <p className="react"></p>
  <p>{fl}</p>
  <p>{fl+3}</p>
  <MyComponent message="&lt;3" />
  <MyComponent message={'<3'} />
  <MyComponent simpleTrue />
  <MyComponent simpleTrue={true} />
  <MyComponent {...props} />
  <MyComponent name="zxl" skill={['js','css','node']} />
</div>

//创建组件
const MyComponents = {
  First(props){
    return <div>{props.num}</div>
  }
}

//可点
function NumComponents(num){
  return <MyComponents.First num={num}/>
}

function CapFirst(props){
  return <div>{props.name}</div>
}

function MustCapFirst(){
  return <CapFirst name="zxl"/>
}

function Story(props) {
  const SpecificStory = components[props.storyType];
  return <SpecificStory story={props.story} />;
}

function TodoList() {
  const todos = ['a', 'b', 'c'];
  return (
    <ul>
      {todos.map((message) => <Item key={message} message={message} />)}
    </ul>
  );
}

function TodoJudge() {
  const todos = ['a', 'b', 'c'];
  return (
    <ul>
      {todos.map((message) => {
        message == 'a'?<Item key={message} message={message} />:''
      })}
      {todos[0] == 'a' && <Other key={message} message={message} />}
    </ul>
  );
}