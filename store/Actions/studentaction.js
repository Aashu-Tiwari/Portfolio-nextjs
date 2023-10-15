import axios from '/Utils/axios'
import { addstudent} from "../Reducers/studentreducer"

export const asyncsignupstudent = (student)=> async(dispatch,getState)=>{
    try{
        const {data} = await axios.post("/signup", student);
    }catch(error){
        console.log(error)
    }
}