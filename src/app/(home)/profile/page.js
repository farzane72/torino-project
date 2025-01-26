"use client"
import AccountInfoForm from "../_components/template/profile/AccountInfoForm"
import PersonalInfoForm from "../_components/template/profile/PersonalInfoForm";
import { useGetUserData } from "@/app/(home)/_api/main/queries";
import Loading from "../_components/modules/Loading";
import BankAccountInfoForm from "../_components/template/profile/BankAccountInfoForm";
function page() {
    const { data: userData, isPending} = useGetUserData();

    if (isPending ) return <Loading />

    return (
        <div className="flex flex-col gap-4">

            <AccountInfoForm userData={userData} />
            <PersonalInfoForm userData={userData} />
            <BankAccountInfoForm  userData={userData}  />
        </div>
    )
}

export default page
