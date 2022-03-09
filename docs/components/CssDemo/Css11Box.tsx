import React from 'react';
import c from './Css11Box.less';

export default () => {
  return (
    <div className={c.box}>
      <div className={c.con}>
        <div className={`${c.side} ${c.before}`}>前</div>
        <div className={`${c.side} ${c.back}`}>后</div>
        <div className={`${c.side} ${c.top}`}>上</div>
        <div className={`${c.side} ${c.bottom}`}>下</div>
        <div className={`${c.side} ${c.left}`}>左</div>
        <div className={`${c.side} ${c.right}`}>右</div>
      </div>
  </div>
  )
}
