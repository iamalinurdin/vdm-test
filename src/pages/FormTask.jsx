import Checkbox from "../components/atoms/Checkbox";
import Input from "../components/atoms/Input";
import Label from "../components/atoms/Label";

export default function FormTask() {
  return (
    <form className="flex flex-col gap-3">
      <Label label="Task Title">
        <Input placeholder="input your task here..." />
      </Label>
      <Label label="Due Date">
        <Input type="date" placeholder="input your task due date..." />
      </Label>
      <Checkbox value={false} defaultChecked={false} name="is_completed" label="Is Completed?" />
      <div className="flex gap-5">
        <button type="submit" className="btn btn-primary">Save</button>
        <button type="reset" className="btn btn-warning btn-outline">Reset</button>
      </div>
    </form>
  )
}