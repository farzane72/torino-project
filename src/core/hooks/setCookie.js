import Cookies from "js-cookie";


// interface cookieType {
//     refresh?:string,
//     access?:string
// }
const SetCookie=(cookieName,value,expires)=>{
    Cookies.set(cookieName, value,{ expires })

}

export default SetCookie