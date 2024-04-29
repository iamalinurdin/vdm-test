export default function Checkbox({
  name,
  defaultChecked = false,
  value,
  label
}) {
  return (
    <div className="form-control">
      <label className="label cursor-pointer">
        <span className="label">{label}</span>
        <input type="checkbox" name={name} defaultChecked={defaultChecked} value={value} className="checkbox" />
      </label>
    </div>
  )
}