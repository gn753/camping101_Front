import { useCallback, useEffect, useState } from "react";

interface initialValuesProps {
  [key: string]: string;
}

interface useFormProps {
  initialValues: initialValuesProps; //검증할 input 목록
  validate: (values: initialValuesProps) => object; // 검증
  onSubmit: (values: object) => void;
}

export default function useForm({
  initialValues,
  validate,
  onSubmit,
}: useFormProps) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<any>({});

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  const runValidator = useCallback(() => validate(values), [values]);
  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert(JSON.stringify(values, null, 2));
    const errors = runValidator();
    setErrors(errors);

    // // error의 개수개 0개라면 서버로 데이터를 전송한다
    if (Object.keys(errors).length === 0) {
      onSubmit(values);
    }
  };

  // 필드 속성으로 사용할 값을 조회한다

  // 훅을 사용하는 쪽에 제공하는 api다
  return {
    values,
    errors,
    handleChange,
    handleSubmit,
  };
}
