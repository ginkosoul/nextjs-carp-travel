"use client";
import { useForm } from "react-hook-form";
import { schemaCareer } from "@constants/validation";
import { yupResolver } from "@hookform/resolvers/yup";
import SendBtn from "./SendBtn";
import DisplayError from "./DisplayError";

const fields = [
  { label: "Full name", value: "fullName", type: "text", placeholder: "" },
  { label: "E-mail", value: "email", type: "email", placeholder: "" },
  { label: "Position", value: "position", type: "text", placeholder: "" },
  { label: "Phone", value: "phone", type: "tel", placeholder: "" },
];

export default function CareerForm(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schemaCareer) });
  const onSubmit = (data) => console.log(data);

  return (
    <div {...props}>
      <div className="max-md:max-w-screen-xs max-md:px-5 md:w-[463px] xl:w-[606px] max-md:mx-auto">
        <p className="main-text w-[180px] md:w-[221px] xl:w-[234px] mb-5 md:mb-8 xl:mb-2.5 ml-auto md:mr-auto md:ml-0">
          Don&apos;t miss your opportunity! Fill out the form right now and join
          our team!
        </p>
        <form onSubmit={handleSubmit(onSubmit)} className="max-md:mx-auto">
          <div className="md:flex md:flex-col gap-4 md:gap-x-5 xl:gap-6 md:w-[221px] xl:w-auto md:flex-wrap md:h-[256px] xl:h-[296px] mb-[18px] md:mb-[9px] xl:mb-6">
            {fields.map(({ label, value, type, placeholder }) => (
              <label key={value} className="xl:w-[290px] max-md:mb-4 block">
                <span className="mb-1 text-xs/6 tracking-[0.2em] font-extralight block">
                  {label}
                </span>
                <input
                  type={type}
                  placeholder={placeholder}
                  className="w-full bg-input pr-2 xl:py-0.5"
                  {...register(value)}
                />
                {errors[value] && (
                  <DisplayError message={errors[value]["message"]} />
                )}
              </label>
            ))}
            <label className="md:w-[221px] xl:w-[292px] max-md:mb-4 block">
              <span className="mb-1 text-xs/6 tracking-[0.2em] font-extralight block">
                Message
              </span>
              <textarea
                className="w-full bg-input resize-none h-[196px] md:h-[228px] xl:h-[268px]"
                {...register("message")}
              />
              {errors.message && (
                <DisplayError message={errors.message.message} />
              )}
            </label>
          </div>
          <div className="md:flex xl:justify-between">
            <label className="text-xs/[22px] md:text-xs/6 font-extralight flex flex-row-reverse items-baseline gap-2 max-md:mb-4">
              <span>
                I confirm my consent to the processing of personal data.
              </span>
              <input
                type="checkbox"
                className="custom-checkbox"
                {...register("policy")}
              />
              {errors.policy && (
                <DisplayError message={errors.policy.message} />
              )}
            </label>
            <SendBtn className="ml-auto block" />
          </div>
        </form>
      </div>
    </div>
  );
}
