import { VscClose } from "react-icons/vsc";
function AuthenticationForm(props) {
    const {showAuthentication,setShowAuthentication}=props
    console.log(showAuthentication);
  return (
    <div className=" relative  shadow-[0_4px_4px_0_rgba(0,0,0,0,.25)] ">
        
        <div className="absolute left-4 top-4 cursor-pointer">
            <VscClose size={24} onClick={()=>setShowAuthentication(false)} />

        </div>
      <div className="p-10 flex flex-col  w-[358px] h-[362px] md:w-[581px] md:h-[362px] bg-white border rounded-lg ">
        {/* <div className=""> */}
          <p className="font-semibold mt-8 text-center text-[22px] md:text-[28px]">ورود به تورینو</p>
        {/* </div> */}
        <form className="mt-10 flex flex-col gap-2 font-light">
            <label className="text-base">شماره موبایل خود را وارد کنید</label>
            <input  className="p-2 border rounded-md placeholder:text-[15px] height-[54px] " placeholder="4253***0912"/>
        </form>
        {/* <div className=""> */}
            <button className="mt-10 w-full p-2 rounded-md  border bg-[#28A745] font-medium text-white text-lg">ارسال کد تایید</button>
        {/* </div> */}
      </div>
    </div>
  );
}

export default AuthenticationForm;
