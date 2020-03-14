// import Head from 'next/head'
import MyHeader from '../components/myHeader'
function Header(){
    return(
        <>  
            {/* <Head>
                <title>前端小菜鸟技术真菜</title>
                <meta charSet="utf-8" />
            </Head> */}
            <MyHeader />
            <div>前端小菜鸟吖</div>
        </>
    )
}

export default Header