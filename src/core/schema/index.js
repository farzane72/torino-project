import { object, string } from "yup";
import * as yup from "yup"; 
import { validateIranianNationalCode } from "@/utils/helper";

const bankAcountSchema = object({
  shaba_code: string().length(24, "شماره کارت باید 24 عدد باشد"),
  //.required("شماره شبارا وارد کنید"),
  debitCard_code: string().length(16, "شماره کارت باید ۱۶ عدد باشد").required("شماره کارت را وارد کنید"),
  accountIdentifier: string()
    .min(8, "شماره حساب باید حداقل ۸ کاراکتر باشد ")
    .max(16, " شماره حساب باید حداکثر 16 کاراکتر باشد")
    //.required("شماره حساب را وارد کنید"),
});


const emailAccountSchema = yup.object().shape({
  email: yup.string().required("وارد کردن ایمیل ضروری است"),
});

const personalInfoSchema = yup.object().shape({
  firstName: yup.string().required("وارد کردن نام ضروری است"),
  nationalCode: yup
    .string()
    .required("وارد کردن کد ملی ضروری است")
    .test("کد ملی معتبر است", "کد ملی نامعتبراست", validateIranianNationalCode),
  gender: yup.string().required("وارد کردن جنسیت ضروری است"),
  birthDate: yup.mixed().required("وارد کردن تاریخ تولد ضروری است"),
 // birthDate: yup.object().required("وارد کردن تاریخ تولد ضروری است"),
});

export { bankAcountSchema ,emailAccountSchema,personalInfoSchema };
