import {SidebarComponent} from '@syncfusion/ej2-react-navigations'
import {useState} from 'react'
const Dashboard= (props)=>{
    const [open , setOpen]=useState(false)
    const handleOpen =()=>{
        setOpen(()=>!open)
    }
    return(
        <div>
            <div className='wrapper'>
                <SidebarComponent id='main-nav' style={{visibility:'visible'}}>
                    <div>welcome</div>
                </SidebarComponent>
                <div>
                    {props.children}
                </div>
            </div>
        </div>
    )
}
export default Dashboard