"use client";
import { contacts } from "@constants/contacts";
import { schemaContact } from "@constants/validation";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

function ContactSection() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schemaContact) });
  const onSubmit = (data) => console.log(data);
  return (
    <section
      id="contacts"
      className="bg-contacts-image min-h-screen bg-cover bg-center py-14"
    >
      <h2 className="title uppercase mb-9 xl:mb-[71px] container">
        Contact<span className="font-medium"> US</span>
      </h2>
      <div className="container flex flex-col gap-3 md:gap-16 xl:flex-row xl:justify-between">
        <div className="flex flex-col gap-6 xl:gap-16 md:flex-wrap md:max-xl:h-24">
          <div className="flex gap-5 md:gap-6">
            <ul className="w-[180px] md:w-[220px] xl:w-[292px] text-end">
              {contacts.phones.map((e) => (
                <li
                  key={e.label}
                  className="font-normal leading-6 text-sm/6 md:text-base xl:text-lg/6"
                >
                  <a href={e.link}>{e.label}</a>
                </li>
              ))}
            </ul>
            <span className="font-extralight leading-5 text-xs">
              Phone number
            </span>
          </div>
          <div className="flex gap-5 md:gap-6">
            <ul className="w-[180px] md:w-[220px] xl:w-[292px] text-end">
              {contacts.emails.map((e) => (
                <li
                  key={e.label}
                  className="font-normal leading-6 text-sm/6 md:text-base xl:text-lg/6"
                >
                  <a href={e.link}>{e.label}</a>
                </li>
              ))}
            </ul>
            <span className="font-extralight leading-5 text-xs">E-mail</span>
          </div>
          <div className="flex gap-5 md:gap-6 md:self-end xl:self-start xl:flex-row-reverse xl:mt-auto">
            <span className="font-extralight leading-5 text-xs max-md:w-[180px] text-end xl:text-start">
              Follow us
            </span>
            <ul className="md:w-[220px] xl:text-end xl:w-[292px]">
              {contacts.socials.map((e) => (
                <li
                  key={e.label}
                  className="font-normal leading-6 text-sm/6 md:text-base xl:text-lg/6"
                >
                  <a href={e.link}>{e.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-6 md:max-xl:flex-row xl:gap-10 xl:w-[607px]"
        >
          <div className="xl:flex md:min-w-[221px] xl:flex-row xl:gap-7">
            <label className="block text-xs/6 tracking-[0.2em] font-extralight mb-6 xl:mb-0 xl:w-[calc(50%-14px)]">
              Full name
              <input
                className="w-full bg-input text-[13px]/6 xl:text-xl/6"
                {...register("fullName")}
              />
              {errors.fullName && (
                <p
                  role="alert"
                  className="text-[#ff5757] text-xs/5 font-extralight text-end tracking-[0.2em]"
                >
                  <span className="text-lg mr-1">&#xd7;</span>
                  {errors.fullName.message}
                </p>
              )}
            </label>

            <label className="block text-xs/6 tracking-[0.2em] font-extralight xl:w-[calc(50%-14px)]">
              E-mail
              <input
                className="w-full bg-input text-[13px]/6 xl:text-xl/6"
                {...register("email")}
              />
              {errors.email && (
                <p
                  role="alert"
                  className="text-[#ff5757] text-xs/5 font-extralight text-end tracking-[0.2em]"
                >
                  <span className="text-lg mr-1">&#xd7;</span>{" "}
                  {errors.email.message}
                </p>
              )}
            </label>
          </div>
          <div className="flex flex-col w-full">
            <label className="text-xs/6 tracking-[0.2em] font-extralight mb-4 xl:mb-6">
              Message
              <textarea
                className="w-full bg-input h-[193px] md:h-[221px] xl:h-[174px] resize-none overflow-y-auto text-[13px]/6 xl:text-xl/6"
                {...register("message")}
              />
            </label>
            <input
              className="uppercase self-end cursor-pointer"
              type="submit"
              value="Send"
            />
          </div>
        </form>
      </div>
    </section>
  );
}

export default ContactSection;
