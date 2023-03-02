import * as yup from "yup";

export const studentSchema = yup.object().shape({
  name: yup
    .string()
    .required("Name is Required")
    .test("Name should not space and dot ", (value: any) => {
      if (value) {
        const firstChar = value.charAt(0);
        return !/\s/.test(firstChar);
      }
    }),
  grade: yup.string().required(),
  age: yup.number().required("Required").positive().min(4),
  gender: yup.string().required(),
  guardiansname: yup.string().required(),
  dream: yup.string().required(),
});
