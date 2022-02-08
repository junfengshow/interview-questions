import React from 'react';
import { NoLanes, SyncLane, DefaultLanes } from '@/constant/lanes';

;(function (a, b) {
  /**
   * 1010 + 1000 (10 + 8) 10010
   * 1. 00010 10000 （2 + 16）
   * 2. 10010 00000 
   * 
   * 101110 
   * 000100
   * 1. 
   * 101010 
   * 001000  000100
   * 2. 
   * 100010 
   * 010000 001000
   * 3.
   * 110010
   * 000000
   * 
   */
  // 二进制 加法
  console.log('a + b =', a + b);
  // 不记进位的和
  let sum = a;
  // 进位
  let move = b;
  while (move) {
    let _sum = sum ^ move;
    let _move = (sum & move) << 1; 
    sum = _sum;
    move = _move;
  }
  console.log('sum = ', sum); 
})(8, 8);
class Binary extends React.Component {
  componentDidMount () {
    // console.log(DefaultLanes.toString(2));
    // this.transToBinary(DefaultLanes & -DefaultLanes);
    // this.transIntToBinary(DefaultLanes);
    // this.transIntToBinary(-DefaultLanes);
    // this.transIntToBinary(DefaultLanes & -DefaultLanes)
  }
  transToBinary = (num: number) => {
    console.log(num.toString(2), ` : ${num}`)
  }
  transIntToBinary = (num: number) => {
    console.log(num.toString(2), ` : ${num}`)
  }
  render () {
    return (
      <div>
        <h3>二进制操作</h3>
        <div>
          <h4>二进制负数</h4>
          <p></p>
        </div>
        <code>
          const lane = lanes & -lanes;
        </code>
      </div>
    )
  }
}
export default Binary;
