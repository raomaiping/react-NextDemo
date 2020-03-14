import React from 'react'
import Link from 'next/link'
import Router from 'next/router'
const Home=()=>{
  function gotoXiaojiejie(){
    Router.push('/xiaojiejie?name=苍井空')
  }
  return(
      <>
        <div>我是首页</div>
        <div><Link href="/rmpA"><a>去rmp A页面</a></Link></div>
        <div><Link href="/rmpB"><a>去rmp B页面</a></Link></div>
        <div><Link href="/xiaojiejie?name=玛利亚"><a>玛利亚</a></Link></div>
        <div><Link href="/xiaojiejie?name=苍井空"><a>苍井空</a></Link></div>
        <div>
            <button onClick={gotoXiaojiejie}>去找苍井空</button>
        </div>
      </>
  )
}

export default Home