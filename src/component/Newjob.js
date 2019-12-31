import React from "react"
import { useState,useEffect } from 'react';

function Newjob(){
  const [count, setCount] = useState(50);
  setInterval(()=>{
    setCount(count-1)
  },100);     

  return(
    <div>
      <div className="more-positon" style={{
        height:'49px',
        borderBottom:'1px solid rgba(31,56,88,0.06)',
        lineHeight:'49px',
        padding:'0 14px',
        background:'white',
        fontSize:'14px',
        color:'#000000',
        position:'relative',
        zIndex:2
      }}>
        <span style={{float:'left'}}>最新职位</span>
        <a className="clickMorePosition" style={{
          float: 'right',
          fontSize: '14px',
          color: 'rgba(31,56,88,0.60)',
          cursor: 'pointer',
          textDecoration: 'none',
        }}>更多</a>
      </div>
      <ul style={{position:'absolute',zIndex:1,width:'100%',top:`${count}px`}}>
        <li style={{overflow:'hidden',padding:'0 14px',lineHeight:'50px'}}>
          <a href="/zhaopin/PositionDetail.htm?positionCode=GP598647&amp;" title="阿里云智能事业群-生态合作高级专家--杭州/北京" className="position" style={{
            float:'left',
            color:'#3C99D8',
            cursor:'pointer',
            fontSize:'14px',
            width:'400px',
            overflow:'hidden',
            textOverflow:'ellipsis',
            whiteSpace:'nowrap'
          }}>阿里云智能事业群-生态合作高级专家--杭州/北京</a>
          <em className="time">19分钟前</em>
          <em className="city">杭州</em>
        </li>
        <li style={{overflow:'hidden',padding:'0 14px',lineHeight:'50px'}}>蚂蚁金服-数据分析专家（BA商业分析）2分钟前</li>
        <li style={{overflow:'hidden',padding:'0 14px',lineHeight:'50px'}}>蚂蚁金服-数据分析专家（BA商业分析）2分钟前</li>
        <li style={{overflow:'hidden',padding:'0 14px',lineHeight:'50px'}}>蚂蚁金服-数据分析专家（BA商业分析）2分钟前</li>
        <li style={{overflow:'hidden',padding:'0 14px',lineHeight:'50px'}}>蚂蚁金服-数据分析专家（BA商业分析）2分钟前</li>
        <li style={{overflow:'hidden',padding:'0 14px',lineHeight:'50px'}}>蚂蚁金服-数据分析专家（BA商业分析）2分钟前</li>
        <li style={{overflow:'hidden',padding:'0 14px',lineHeight:'50px'}}>蚂蚁金服-数据分析专家（BA商业分析）2分钟前</li>
        <li style={{overflow:'hidden',padding:'0 14px',lineHeight:'50px'}}>蚂蚁金服-数据分析专家（BA商业分析）2分钟前</li>
        <li style={{overflow:'hidden',padding:'0 14px',lineHeight:'50px'}}>蚂蚁金服-数据分析专家（BA商业分析）2分钟前</li>
        <li style={{overflow:'hidden',padding:'0 14px',lineHeight:'50px'}}>蚂蚁金服-数据分析专家（BA商业分析）2分钟前</li>
        
      </ul>
    </div>
  );
}

export default Newjob;