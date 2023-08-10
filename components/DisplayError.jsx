function DisplayError({ message }) {
  return (
    <p
      role="alert"
      className="text-[#ff5757] text-xs/5 font-extralight text-end tracking-[0.2em] -mb-7"
    >
      <span className="text-lg mr-1">&#xd7;</span>
      {message}
    </p>
  );
}

export default DisplayError;
