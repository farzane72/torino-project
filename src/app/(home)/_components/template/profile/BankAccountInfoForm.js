"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";
import InputForm from "../../modules/inputs/InputForm";
import { useUpdateUserAccount } from "@/app/(home)/_api/main/mutations";
import { AiOutlineEdit } from "react-icons/ai";
import Loading from "../../modules/Loading";
import TextWithIcon from "../../modules/TextWithIcon";
import { bankAcountSchema } from "@/core/schema";
import toast from "react-hot-toast";


function BankAccountInfoForm({userData}) {
  const [status, setStatus] = useState("");
  const { mutate, isPendingAccount } = useUpdateUserAccount();
  console.log(userData);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset
  } = useForm({ resolver: yupResolver( bankAcountSchema) });

  const onSubmit = (formData, e) => {
    e.preventDefault();
    console.log(formData);
    if (isPendingAccount) return;

    mutate(formData, {
      onSuccess: (data) => {
        toast.success(data?.data?.message);
        setStatus("");
      },
      onError: (error) => {
        console.log(error);
      },
    });
  };
  const cancellHandler = () => {
    reset();
    setStatus("")
  };

  return (
    <div className="flex flex-col border rounded-md gap-4 p-4 pb-8">
      <div className="flex justify-between items-center">
        <h1 className="text-base">اطلاعات حساب بانکی</h1>
        {status === "" && (
          <div onClick={() => setStatus("edit")} className="cursor-pointer">
            <TextWithIcon
              icon={<AiOutlineEdit color="#009ECA" size="16" />}
              text="ویرایش اطلاعات"
              className="text-[#009ECA] text-sm"
            />
          </div>
        )}
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="  flex flex-col  gap-4   "
      >
        {status === "edit" ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2  gap-4 mt-4">
              <InputForm
                name="shaba_code"
                register={register}
                placeholder="شماره شبا"
                errors={errors.shaba_code?.message}
                type="text"
                value={userData?.shaba_code || ""}
              />
              <InputForm
                name="debitCard_code"
                register={register}
                placeholder="شماره کارت"
                errors={errors.debitCard_code?.message}
                type="text"
                value={userData?.debitCard_code || ""}
              />
              <InputForm
                name="accountIdentifier"
                register={register}
                placeholder="شماره حساب"
                errors={errors.accountIdentifier?.message}
                type="text"
                value={userData?.accountIdentifier || ""}
              />
            </div>
            <div className="border-t flex gap-4 justify-end p-4 ">
              <button
                className="text-[#28A745] border border-[#28A745] outline-none rounded-md px-8 py-2"
                onClick={cancellHandler}
              >
                انصراف
              </button>
              <button
                type="submit"
                className="text-white  rounded-md bg-[#28A745] px-8 py-1"
              >
                تایید
              </button>
            </div>
          </>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2  gap-4 mt-4">
             <div className="flex gap-2 ">
              <span className="">شماره شبا: </span>
              <span className="">{userData.shaba_code || "--"}</span>
            </div>
            <div className="flex gap-2 ">
              <span className="">شماره کارت : </span>
              <span className="">{userData.debitCard_code || "--"}</span>
            </div>
            <div className="flex gap-2 ">
              <span className="">شماره حساب : </span>
              <span className="">{userData.accountIdentifier || "--"}</span>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}

export default BankAccountInfoForm;
