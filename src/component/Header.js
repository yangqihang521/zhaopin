import React from "react"
import { useState } from 'react';
import '../assets/style/css/header.css'
import Newjob from './Newjob'
function Header() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div className="head">
        <div className="head-main">
          <div className="head-menu">
              <a className="logo"><img src="https://img.alicdn.com/tfs/TB1Zv8_lxSYBuNjSspjXXX73VXa-390-63.png" height="20" alt=""/></a>
              <i>|</i>
              <i className="wen">社招官网</i>
              <ul>
                <li><a href="#">首 &nbsp;&nbsp;页</a></li>
                <li><a href="https://job.alibaba.com/zhaopin/positionList.htm">社会招聘</a></li>
                <li><a href="https://campus.alibaba.com" target="blank">校园招聘</a></li>
                <li><a href="https://job.alibaba.com/zhaopin/about.htm">了解阿里</a></li>
                <li><a href="https://job.alibaba.com/zhaopin/apply.htm">个人中心</a></li>
                <div className="login" style={{opacity: 0.8}}>
                欢迎来到阿里巴巴集团招聘！
                  <a href="https://passport.alibaba.com/login.htm?appName=hrjob&amp;params=https%3A%2F%2Fjob.alibaba.com%2F%2Fzhaopin%2Findex.htm" target="_top">登录</a>
                  | <a href="http://member1.taobao.com/member/newbie.htm">注册</a>
                </div>
              </ul>
          </div>
        </div>        
      </div>
      
      <div className="index-main" style={{position: "relative",height: "478px"}}>
        <img className="index-image" src="https://img.alicdn.com/tfs/TB14TEEm7CWBuNjy0FaXXXUlXXa-1440-478.png" style={{verticalAlign: 'middle', width: 1440, height: 478}}></img>
        <div style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(31,56,88,0.40)'}} />
        <div className="index-mid-box" style={{height: '100%'}}>
          <div className="float-mid" style={{top: '50%', marginLeft: '-245px', marginTop: '-145px'}}>
            <p style={{fontSize: 54, color: '#fff', lineHeight: '56px'}} >If not now, when?</p>
            <p style={{fontSize: 54, color: '#fff', lineHeight: '56px'}} >If not me, who?</p>
            <p style={{fontSize: 34, color: '#fff', marginBottom: 38, lineHeight: '48px'}}>此时此刻，非我莫属！</p>
            <div className="search-box" style={{width: 490, height: 60, position: 'relative', border: 0, background: 'none', margin: '0 auto'}}>
              <div style={{width: '100%', height: '100%', background: '#fff', position: 'absolute', opacity: '0.1', filter: 'alpha(opacity=10)'}} />
              <input type="text" maxLength={30} placeholder="  请输入职位关键词" style={{width: 368, height: 40, paddingTop: 2, marginTop: 6, marginLeft: 10, boxSizing: 'border-box', borderRadius: 3,border:0}} />
              <input className="search-btn" data-spm-click="gostr=/hr;locaid=searchPosition" type="submit" style={{color: '#fff', background: '#F37327', fontSize: 14, width: 92, height: 40,cursor:'pointer', borderRadius: 3, border:0,marginTop: 10, marginLeft: 10, position: 'relative', zIndex: 2}} defaultValue="搜索" />
            </div>
            <div className="hot-text" style={{textAlign: 'center'}}>
              热门搜索：
              <a href='#' >JAVA</a>
              <a href='#' >IOS</a>
              <a href='#' >数据</a>
              <a href='#' >安全</a>
              <a href='#' >搜索</a>
              <a href='#' >算法</a>
              <a href='#' >运营</a>
              <a href='#' >视觉</a>
              <a href='#' >交互</a>
              <a href='#' >前端</a>
            </div>
          </div>
        </div>
      </div>
      
      <div style={{height: '364px',width: '100%',overflow: 'hidden'}} className="newjob">
        <div className="newjob-content" style={{width: '1180px',height: '300px',margin: '32px auto'}}>
          <div className="jobList" style={{width: '850px',height: '300px'}}>
            <Newjob></Newjob>
          </div>
          <div style={{width: 310, float: 'right'}}>
            <a className="show-pic jumpToAliyun" href="https://www.aliyun.com/careers" style={{textAlign: 'center', lineHeight: '140px',marginBottom: '20px'}}><img style={{width: 179, verticalAlign: 'middle'}} src="https://img.alicdn.com/tfs/TB1SbxarYj1gK0jSZFOXXc7GpXa-2546-848.png" /></a>
            <a className="show-pic jumpToEhr" href="https://job.alibaba.com/zhaopin/informationPlatformBu.htm?"  style={{textAlign: 'center', lineHeight: '140px'}}><img style={{width: 260, verticalAlign: 'middle'}} src="https://img.alicdn.com/tfs/TB18tFCCH2pK1RjSZFsXXaNlXXa-240-34.svg" /></a>
          </div>
        </div>
      </div>
     
      <div className="index-footer">
        <div className="footer-content" style={{textAlign: "center"}}>
          阿里巴巴集团 Copyright ©1999-2019 版权所有
        </div>
      </div>
    </div>
  );

}

export default Header;
