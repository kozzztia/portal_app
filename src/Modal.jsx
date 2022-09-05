import { Portal } from "react-portal";



function MyModal({setFlag}) {
       return  (
    <Portal >
            <div className="circle"
                 onClick = {()=>setFlag(prev => !prev)}
            >

            </div>
    </Portal>
)
}

export default MyModal;