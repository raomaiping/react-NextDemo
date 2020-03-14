// import Head from 'next/head'
import MyHeader from '../components/myHeader'
import '../public/style.css'
import {Button} from 'antd'


//babel-plugin-import
function Header(){
    return(
        <>  
            {/* <Head>
                <title>前端小菜鸟技术真菜</title>
                <meta charSet="utf-8" />
            </Head> */}
            <MyHeader />
            <div>前端小菜鸟吖</div>
            <div><Button>我是按钮</Button></div>
        </>
    )
}

export default Header