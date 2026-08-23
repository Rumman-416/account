import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "../layout/Button";

const EnquireForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm({
    mode: "onBlur",
    reValidateMode: "onChange",
  });

  const [submitted, setSubmitted] = useState(false);

  const onSubmit = async (data) => {
    console.log("Form data:", data);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    reset();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex w-full flex-col gap-4 lg:gap-[1vw]"
      noValidate
    >
      {/* Success message */}
      {submitted && (
        <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400 text-sm">
          Thank you! We&apos;ll get back to you shortly.
        </div>
      )}

      {/* Name */}
      <div>
        <input
          type="text"
          placeholder="Your Name"
          className={`input-field ${errors.name ? "!border-red-500" : ""}`}
          {...register("name", { required: "Please enter your name" })}
        />
        {errors.name && (
          <p className="mt-1.5 text-xs text-red-400">{errors.name.message}</p>
        )}
      </div>

      {/* Email & Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-[1vw]">
        <div>
          <input
            type="email"
            placeholder="Email Address"
            className={`input-field ${errors.email ? "!border-red-500" : ""}`}
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                message: "Please enter a valid email",
              },
            })}
          />
          {errors.email && (
            <p className="mt-1.5 text-xs text-red-400">
              {errors.email.message}
            </p>
          )}
        </div>
        <div>
          <input
            type="tel"
            placeholder="Phone Number"
            className={`input-field ${errors.phone ? "!border-red-500" : ""}`}
            {...register("phone", {
              required: "Phone number is required",
              pattern: {
                value: /^[0-9]{7,15}$/,
                message: "Enter valid phone number",
              },
            })}
          />
          {errors.phone && (
            <p className="mt-1.5 text-xs text-red-400">
              {errors.phone.message}
            </p>
          )}
        </div>
      </div>

      {/* Message */}
      <div>
        <textarea
          rows={5}
          placeholder="Your Message"
          className={`input-field resize-none ${errors.message ? "!border-red-500" : ""}`}
          {...register("message", {
            required: "Message cannot be empty",
            minLength: { value: 10, message: "Minimum 10 characters" },
          })}
        />
        {errors.message && (
          <p className="mt-1.5 text-xs text-red-400">
            {errors.message.message}
          </p>
        )}
      </div>

      {/* Submit */}
      <div className="mt-2">
        <Button
          type="submit"
          text={isSubmitting ? "Sending..." : "Send Message"}
          className={isSubmitting ? "opacity-60 pointer-events-none" : ""}
        />
      </div>
    </form>
  );
};

export default EnquireForm;
