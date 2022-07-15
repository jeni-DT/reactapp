import { ActionsType } from "./ActionType";
import axios from "axios";

export const fetchProduct=()=>{
    return async(dispatch)=>{
        await axios.get("http://localhost:8000/data")
        .then(res=>{
            console.log(res)
        })
        .catch()
    }
}