import React from 'react';
// import { Transaction } from 'react-dom';
import c from './css-1.less';
// console.log(Transaction)
class Css1 extends React.Component {
  constructor (props: any) {
    super(props);
  }
  render() {
    return (
      <>
        <section className={c.section}>
          <div className={c.left}>left</div>
          <div className={c.right}>right</div>
          <div className={c.center}>center</div>
        </section>
        <div>
          <div className={c.itemA}>aaaa</div>
          <div className={c.itemB}>bbbb</div>
          <div className={c.itemB}>bbbb</div>
          <div className={c.itemC}>cccc</div>
        </div>
  
        <div className={c.heart}></div>
  
        <ul className={c.listWrap}>
          <li className={c.listItem}> item aaaa </li>
          <li className={c.listItem}> item bbbb </li>
          <ul className={c.listWrap}>
            <li className={c.listItem}> item aaaa </li>
            <li className={c.listItem}> item bbbb </li>
          </ul>
        </ul>
  
        <div className={c.columnCount}>
          <div>11111</div>
          <div>11111</div>
          <div>11111</div>
        </div>
      </>
    )
  }
} 
export default Css1;
