function SendBtn({ className }) {
  return (
    <input
      className={`uppercase text-3xl xl:text-[32px] font-normal self-end cursor-pointer ${className}`}
      type="submit"
      value="Send"
    />
  );
}

export default SendBtn;
