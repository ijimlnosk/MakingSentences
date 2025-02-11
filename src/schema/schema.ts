import * as yup from "yup";

export const schema = yup.object().shape({
  title: yup.string().required("제목을 입력하세요."),
  description: yup.string().required("문장을 입력하세요."),
  keywords: yup
    .array()
    .of(
      yup
        .string()
        .required("키워드를 입력하세요.")
        .min(1, "최소 한 개의 키워드를 입력해야 합니다.")
    )
    .default([])
    .ensure(),
});
