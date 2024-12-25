function TextWithIcon({ text, icon, className = "" }) {
  return (
    <div className={`flex gap-2 items-center font-light ${className}`}>
      {icon}
      <span>{text}</span>
    </div>
  );
}

export default TextWithIcon;
