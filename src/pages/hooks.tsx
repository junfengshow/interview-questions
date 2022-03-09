import React, { useState, useEffect } from 'react';

setTimeout(() => {
  console.log('setTimeout111')
})

new Promise((resolve) => {
  resolve('')
})
.then(() => {
  console.log('then')
  setTimeout(() => {
    console.log('setTimeout222')
  })
})

const Hooks = () => {
  const [age, setAge] = useState(0);
  const [name, setName] = useState('zhangsan');

  useEffect(() => {
    setAge(age + 1);
    setTimeout(() => {
      console.log('age', age);
    }, 1000)
  }, [])
  return (
    <div>
      <a onClick={() => {
        setAge(age + 1);
      }}>click</a>
      <a onClick={() => {
        setName('lisi')
      }}>name</a>
      ldldle: {age}
    </div>
  )
}
export default Hooks;
