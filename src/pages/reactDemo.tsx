import React, { Suspense, useReducer, useEffect, useState } from 'react';

// const Hooks = React.lazy(() => import ('./hooks'));

interface IProps {}

const ErrorChild = () => (
  <div>
    dldle
  </div>
)

class ReactDemo extends React.Component<any, any> {
  constructor (props: IProps) {
    super(props);
    this.state = {
      hasError: false,
      name: 'zhangsan'
    };
  }
  // UNSAFE_componentWillMount () {
  //   console.log('UNSAFE_componentWillMount')
  // }

  // UNSAFE_componentWillReceiveProps (preProps: any, preState: any) {
  //   console.log('UNSAFE_componentWillReceiveProps preProps', preProps)
  //   console.log('UNSAFE_componentWillReceiveProps preState', preState)
  // }

  // UNSAFE_componentWillUpdate (preProps: any, preState: any) {
  //   console.log('UNSAFE_componentWillUpdate preProps', preProps);
  //   console.log('UNSAFE_componentWillUpdate preState', preState);
  // }

  componentDidMount () {
    console.log('componentDidMount')
  }

  getSnapshotBeforeUpdate (preProps: any, preState: any) {
    console.log('getSnapShotBeforeUpdate', preProps, preState);
    return 'snapshot'
  }
  componentDidUpdate (props: any, state: any, snapshot: any) {
    console.log('componentDidUpdate', props, state, snapshot);
  }

  shouldComponentUpdate (preProps: any, preState: any) {
    console.log('shouldComponentUpdate', true)
    return true;
  }

  static getDerivedStateFromError (error: any) {
    console.log('hasError', error)
    return {
      hasError: true
    }
  }

  componentDidCatch (error: any, info: any) {
    console.log('componentDidCatch')
  }

  static getDerivedStateFromProps (props: any, state: any) {
    console.log('getDerivedStateFromProps', props, state)
    if (props.state.age === 3) {
      return {}
    }
    return {
      age: props.state.age
    };
  }

  componentWillUnmount () {
    console.log('componentWillUnmount');
  }

  render () {
    console.log('component render')
    if (this.state.hasError) {
      return (
        <div>
          出错了
        </div>
      )
    }
    const { age } = this.props.state;
    return (
      <div>
        <h3>react:</h3>
        <div>
          <button onClick={this.onBtnClick} style={{marginRight: 10}}>add</button>
          <span>age: {age}</span>
          <span>; name: {this.state.name}</span>
          <span>; state age: {this.state.age}</span>
        </div>
        <ErrorChild />
        {/* <Suspense fallback={<span />}>
          <Hooks />
        </Suspense> */}
      </div>
    )
  }
  onBtnClick = () => {
    const { dispatch, state } = this.props;
    dispatch({
      type: 'add',
      age: state.age + 1,
    })
  }
}

const reducer = (state: any, action: any) => {
  if (action.type === 'add') {
    return Object.assign({}, state, action);
  }
  console.log('reducer')
  return state;
}

const initialState: any = {
  age: 1,
};

const ReactDemoContainer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [count, setCount] = useState({ value: 1 });
  console.log('ReactDemoContainer render')
  useEffect(() => {
    console.log('this is useEffect')
    return () => {
      console.log('this is useEffect inner')
    }
  }, [state])
  return (
    <>
      <ReactDemo 
        state={state}
        dispatch={dispatch}
      /> 
      <div>
        <button 
          style={{marginRight: 10}}
          onClick={() => {
            setTimeout(() => {
              setCount({ value: count.value + 1 });
            }, 1000)
          }}
        >click</button>
        <span>{count.value}</span>
      </div>
    </>
  )
}
export default ReactDemoContainer;

/**
 * react 生命周期
 * constructor
 * UNSAFE_componentWillMount UNSAFE_componentWillReceiveProps UNSAFE_componentWillUpdate 
 * 上述三个UNSAFE_ 与 getSnapshotBeforeUpdate 不能同时存在
 * 
 * getDerivedStateFromError
 * componentDidCatch
 * 捕获的子组件的错误
 * 
 * hooks
 * useState useEffect useReducer 
 * useLayoutEffect
 * useMemo useCallback
 * useRef
 * forwardRef
 * useImperativeHandle
 * 
 */
