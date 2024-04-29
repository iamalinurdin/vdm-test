import Checkbox from "../components/atoms/Checkbox";
import Input from "../components/atoms/Input";
import Label from "../components/atoms/Label";
import * as Yup from 'yup'
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { addTask, updateTask } from "../redux/tasks/action";
import { useLocation } from "react-router-dom";

export default function FormTask() {
  const location = useLocation()
  const { state } = location
  const dispatch = useDispatch()
  const validationSchema = Yup.object().shape({
    title: Yup.string().required(),
    date: Yup.date().required(),
    is_completed: Yup.boolean().required(),
  })
  const formik = useFormik({
    initialValues: {
      title: state.title ?? '',
      date: state.date ?? '',
      is_completed: state.is_completed ?? false
    },
    validationSchema,
    onSubmit: (task) => {
      if (state) {
        dispatch(updateTask(state.id, task))
      } else {
        dispatch(addTask({
          id: +new Date(),
          ...task
        }))
        formik.handleReset()
      }
      alert('done')
    }
  })

  return (
    <>
      <form onSubmit={formik.handleSubmit} className="flex flex-col gap-3">
        <Label label="Task Title">
          <Input
            placeholder="input your task here..."
            name="title"
            value={formik.values.title}
            handleOnChange={formik.handleChange}
          />
        </Label>
        <Label label="Due Date">
          <Input
            type="date"
            placeholder="input your task due date..."
            name="date"
            value={formik.values.date}
            handleOnChange={formik.handleChange}
          />
        </Label>
        <Checkbox
          value={formik.values.is_completed}
          defaultChecked={formik.values.is_completed}
          name="is_completed"
          label="Is Completed?"
          handleOnChange={formik.handleChange}
        />
        <div className="flex gap-5">
          <button type="submit" className="btn btn-primary">Save</button>
          <button type="reset" className="btn btn-warning btn-outline">Reset</button>
        </div>
      </form>
    </>
  )
}