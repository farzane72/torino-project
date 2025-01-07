function TextWithIcon({ text, icon, className = "" }) {
  return (
    <div className={`flex gap-2 items-center font-light `}>
      {icon}
      <span className={` ${className}`}>{text}</span>
    </div>
  );
}

export default TextWithIcon;
