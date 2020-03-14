import React from 'react'
import Link from 'next/link'
import Router from 'next/router'
const Home=()=>{
  function gotoA(){
    Router.push('/rmpA')
  }
  return(
      <>
        <div>我是首页</div>
        <div><Link href="/rmpA"><a>去rmp A页面</a></Link></div>
        <div><Link href="/rmpB"><a>去rmp B页面</a></Link></div>
        <div>
            <button onClick={gotoA}>去rmp--A</button>
        </div>
      </>
  )
}

export default Home