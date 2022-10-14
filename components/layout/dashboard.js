
import MainSidebar from './mainSidebar'
import AppBar from './appBar'
const Dashboard= (props)=>{
    return(
        <div>
            <div className='wrapper'>
                <MainSidebar/>
                <div className=''>
                    <AppBar/>
                    {props.children}
                </div>
            </div>
        </div>
    )
}
export default Dashboard