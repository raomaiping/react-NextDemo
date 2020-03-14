import React from 'react'
import Link from 'next/link'
import Router from 'next/router'
const Home=()=>{

  //routeChangeStart
  //routeChangeComplete
  //beforeHistoryChange
  //routeChangeError
  //hashChangeStart
  //hashChangeComplete
  // Router.events.on('routeChangeStart',(...arsg)=>{
  //   console.log('1.routeChangeStart->路由开始变化，参数为:',...arsg);
  // })
  // Router.events.on('routeChangeComplete',(...arsg)=>{
  //   console.log('2.routeChangeComplete->路由变化结束，参数为:',...arsg);
  // })
  // Router.events.on('beforeHistoryChange',(...arsg)=>{
  //   console.log('3.beforeHistoryChange->路由变化结束，参数为:',...arsg);
  // })
  // Router.events.on('routeChangeError',(...arsg)=>{
  //   console.log('4.routeChangeError->路由发生错误，参数为:',...arsg);
  // })
  // Router.events.on('hashChangeStart',(...arsg)=>{
  //   console.log('5.hashChangeStart->，参数为:',...arsg);
  // })
  // Router.events.on('hashChangeComplete',(...arsg)=>{
  //   console.log('6.hashChangeComplete->，参数为:',...arsg);
  // })
  function gotoXiaojiejie(){
    // Router.push('/xiaojiejie?name=苍井空')
    Router.push({
        pathname:'/xiaojiejie',
        query:{name:'井空'}
    })
  }
  return(
      <>
        <div>我是首页</div>
        <div><Link href="/rmpA"><a>去rmp A页面</a></Link></div>
        <div><Link href="/rmpB"><a>去rmp B页面</a></Link></div>
        <div><Link href={{pathname:'/xiaojiejie',query:{name:'小泽玛利亚'}}}><a>选择小泽玛利亚</a></Link></div>
        <div><Link href="/xiaojiejie?name=玛利亚"><a>玛利亚</a></Link></div>
        <div><Link href="/xiaojiejie?name=苍井空"><a>苍井空</a></Link></div>
        <div>
            <button onClick={gotoXiaojiejie}>去找苍井空</button>
        </div>
        <div>
            <Link href="#rmp"><a>选前端小菜鸟吖</a></Link>
        </div>
      </>
  )
}

export default Home