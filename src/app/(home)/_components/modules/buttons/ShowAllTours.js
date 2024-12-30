"use client"
import { useRouter } from "next/navigation";



function ShowAlltours() {
    const router=useRouter()

    const clickHandler=()=>{
        router.push(`/`);
    }
    
    return (
        <p className="cursor-pointer text-base  text-rose-500" onClick={clickHandler}>مشاهده همه تورها</p>
    )
}

export default ShowAlltours
