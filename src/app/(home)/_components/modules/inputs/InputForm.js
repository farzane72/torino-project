function InputForm({ register, placeholder, name, errors }) {
  return (
    <div className="flex flex-col gap-1">
      <input
        {...register(name)}
        className=" border rounded-md w-full  placeholder:text-sm text-[#282828B2] p-2"
        placeholder={placeholder}
      />
      <p className="text-red-500 text-xs">{errors}</p>
    </div>
  );
}

export default InputForm;
