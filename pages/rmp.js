import { useState } from "react"

function Rmp(){

    const [color,setColor] = useState('blue')
    const changeColor=()=>{
        setColor(color == 'blue' ? 'red' : 'blue')
    }
    return (
        <>
            <div>前端小菜鸟吖</div>
            <div><button onClick={changeColor}>改变颜色</button></div>

            <style jsx>
                {`
                    div{color:${color};}
                `}
            </style>
        </>
    )
}

export default Rmp