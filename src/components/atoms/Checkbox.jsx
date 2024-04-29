export default function Checkbox({
  name,
  defaultChecked = false,
  value,
  label,
  handleOnChange
}) {
  return (
    <div className="form-control">
      <label className="label cursor-pointer">
        <span className="label">{label}</span>
        <input
          onChange={handleOnChange}
          type="checkbox"
          name={name}
          defaultChecked={defaultChecked}
          value={value}
          className="checkbox"
        />
      </label>
    </div>
  )
}