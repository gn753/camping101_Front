import { useState } from "react";
interface Props {
  defaultValues: any;
}

export function useFormLive({ defaultValues }: Props) {
  const [formValues, setFormValues] = useState(defaultValues);
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  return;
}
