const CustomInput = (props) => {
  return (
    <div class="form-control w-full max-w-xs">
      <label class="label">
        <span class="label-text">{props.heading}</span>
      </label>
      <input
        onChange={(e) => {
          props.setValue((prev) => e.target.value);
        }}
        type={props.type ? props.type : "text"}
        placeholder={props.placeholder}
        class="input input-bordered w-full max-w-xs input-primary"
        value={props.value}
      />
      <label class="label">
        {props.message && <span class="label-text-alt">{props.message}</span>}
      </label>
    </div>
  );
};

export { CustomInput };
