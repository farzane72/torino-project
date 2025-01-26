function InputForm({ register, placeholder, name, errors, type, value }) {
  return (
    <div className="flex flex-col gap-1 w-full h-full">
      <input
        {...register(name)}
        className=" border rounded-md w-full  p-2 placeholder:text-sm text-[#282828B2] "
        placeholder={placeholder}
        type={type}
        defaultValue={value}
      />
      
      <p className="text-red-500 text-xs">{errors}</p>
    </div>
  );
}

export default InputForm;
