import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "../layout/Button";
import services from "../data/services";

const EnquireForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm({
    mode: "onBlur",
    reValidateMode: "onChange",
  });

  // A native select shows the selected option in the control's own colour, so
  // dim it while the placeholder option is active to match the real inputs.
  const selectedService = watch("service");

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

      {/* Service (optional) */}
      <div className="relative">
        <select
          defaultValue=""
          /* `.input-field` is declared after @tailwind utilities, so its
             @apply'd colour outranks a plain text-white/30 utility - hence the
             `!`, same as the !border-red-500 used for errors below. */
          className={`input-field appearance-none cursor-pointer pr-12 lg:pr-[3vw] ${
            selectedService ? "!text-white" : "!text-white/30"
          }`}
          {...register("service")}
        >
          <option value="" className="bg-dark-900 text-white/60">
            Service you&apos;re interested in (optional)
          </option>
          {services.map((service) => (
            <option
              key={service.slug}
              value={service.slug}
              className="bg-dark-900 text-white"
            >
              {service.name}
            </option>
          ))}
        </select>
        <svg
          aria-hidden="true"
          className="pointer-events-none absolute right-5 lg:right-[1.2vw] top-1/2 -translate-y-1/2 w-4 h-4 lg:w-[1vw] lg:h-[1vw] text-white/40"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.75}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
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
