import React from "react";
import { useForm } from "react-hook-form";
import Button from "../layout/Button";

const EnquireForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm({
    mode: "onBlur", // validate when an input loses focus
    reValidateMode: "onChange",
  });

  const onSubmit = async (data) => {
    console.log("✅ Form data:", data);
    // await sendToApi(data);
    reset(); // clear the form on success
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex w-full flex-wrap justify-between gap-5 lg:gap-[0.75vw]"
      noValidate
    >
      {/* NAME */}
      <div className="w-full">
        <input
          type="text"
          placeholder="Your Name"
          className={`outline-none content bg-transparent border-primary border rounded-xl w-full lg:p-[.75vw] p-3 ${
            errors.name ? "border-red-500" : ""
          }`}
          {...register("name", { required: "Please enter your name" })}
        />
        {errors.name && (
          <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>
        )}
      </div>

      {/* EMAIL */}
      <div className="w-full md:w-[48%] lg:w-[49%]">
        <input
          type="email"
          placeholder="Email"
          className={`outline-none content bg-transparent border-primary border rounded-xl w-full lg:p-[.75vw] p-3 ${
            errors.email ? "border-red-500" : ""
          }`}
          {...register("email", {
            required: "Email is required",
            pattern: {
              value:
                /^[a-zA-Z0-9.!#$%&’*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
              message: "Please enter a valid email address",
            },
          })}
        />
        {errors.email && (
          <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>
        )}
      </div>

      {/* PHONE */}
      <div className="w-full md:w-[48%] lg:w-[49%]">
        <input
          type="tel"
          placeholder="Phone"
          className={`outline-none content bg-transparent border-primary border rounded-xl w-full lg:p-[.75vw] p-3 ${
            errors.phone ? "border-red-500" : ""
          }`}
          {...register("phone", {
            required: "Phone number is required",
            pattern: {
              value: /^[0-9]{7,15}$/,
              message: "Enter digits only (7–15 numbers)",
            },
          })}
        />
        {errors.phone && (
          <p className="mt-1 text-xs text-red-500">{errors.phone.message}</p>
        )}
      </div>

      {/* MESSAGE */}
      <div className="w-full">
        <textarea
          rows={8}
          placeholder="Message"
          className={`outline-none content bg-transparent border-primary border rounded-xl w-full lg:p-[.75vw] p-3 ${
            errors.message ? "border-red-500" : ""
          }`}
          {...register("message", {
            required: "Message cannot be empty",
            minLength: { value: 10, message: "Minimum 10 characters" },
          })}
        />
        {errors.message && (
          <p className="mt-1 text-xs text-red-500">{errors.message.message}</p>
        )}
      </div>

      {/* SUBMIT */}
      <div>
        <Button
          type="submit"
          text={isSubmitting ? "Sending…" : "Submit"}
          disabled={isSubmitting}
        />
      </div>
    </form>
  );
};

export default EnquireForm;
