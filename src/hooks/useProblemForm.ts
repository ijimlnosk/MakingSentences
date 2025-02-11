import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../schema/schema";
import { ProblemForm } from "../page/type";

export const useProblemForm = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<ProblemForm>({
    resolver: yupResolver(schema),
    defaultValues: {
      title: "",
      description: "",
      keywords: [""],
    },
    shouldUnregister: false,
  });

  const [keywords, setKeywords] = useState<string[]>([""]);

  const handleKeywordChange = (index: number, value: string) => {
    const updatedKeywords = [...keywords];
    updatedKeywords[index] = value;
    setKeywords(updatedKeywords);
    setValue("keywords", updatedKeywords);
  };

  const addKeyword = () => {
    setKeywords([...keywords, ""]);
  };

  const removeKeyword = (index: number) => {
    if (keywords.length > 1) {
      const updatedKeywords = keywords.filter((_, i) => i !== index);
      setKeywords(updatedKeywords);
      setValue("keywords", updatedKeywords);
    } else {
      alert("최소 한 개의 키워드는 입력해야 합니다.");
    }
  };

  return {
    register,
    handleSubmit,
    errors,
    keywords,
    handleKeywordChange,
    addKeyword,
    removeKeyword,
  };
};
