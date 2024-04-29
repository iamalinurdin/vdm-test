import Checkbox from "../components/atoms/Checkbox";
import Input from "../components/atoms/Input";
import Label from "../components/atoms/Label";
import * as Yup from 'yup'
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { addTask, updateTask } from "../redux/tasks/action";
import { useLocation, useNavigate } from "react-router-dom";
import TextError from "../components/atoms/TextError";

export default function FormTask() {
  const navigate = useNavigate()
  const location = useLocation()
  const { state } = location
  const dispatch = useDispatch()
  const validationSchema = Yup.object().shape({
    title: Yup.string().required(),
    date: Yup.date().required(),
  })
  const formik = useFormik({
    initialValues: {
      title: state?.title ?? '',
      date: state?.date ?? '',
      is_completed: state?.is_completed ?? false
    },
    validationSchema,
    onSubmit: (task) => {
      if (state) {
        dispatch(updateTask(state.id, task))
        alert('done')
        navigate('/')
      } else {
        dispatch(addTask({
          id: +new Date(),
          ...task
        }))
        alert('done')
        formik.handleReset()
      }
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
          {(formik.touched.title && formik.errors.title) ? (
            <TextError>{formik.errors.title}</TextError>
          ) : null}
        </Label>
        <Label label="Due Date">
          <Input
            type="date"
            placeholder="input your task due date..."
            name="date"
            value={formik.values.date}
            handleOnChange={formik.handleChange}
          />
          {(formik.touched.date && formik.errors.date) ? (
            <TextError>{formik.errors.date}</TextError>
          ) : null}
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