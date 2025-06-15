import React from "react";
import { useForm } from "react-hook-form";
import Title from "./Title";
import axios from "axios";
import { useRouter } from "next/router";

const FormFooter = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const router = useRouter();
  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/website-leads`,
        {
          data: {
            ...data,
            source: "footer-form", // this is the new field
          },
        }
      );
      console.log("Form Data Submitted: ", response.data);
      reset();
      router.push("/thank-you");
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="bg-primary">
      <div className="containerxy">
        <div className="bg-[url(/images/footer/bg1.png)] bg-no-repeat bg-top bg-cover bg-fixed border border-[#c39a65] relative">
          <div className="absolute size-full glass bg-black bg-opacity-25" />
          <div className="py-16 relative z-[1]">
            <div className="hidden lg:block">
              <Title first="STAY Updated ABOUT" second="our Projects" />
            </div>
            <div className="lg:hidden block">
              <Title first="STAY Updated " second="Updated" />
            </div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="w-[80%] mx-auto border border-white p-5 mt-5"
            >
              <input
                type="text"
                placeholder="Name"
                {...register("name", { required: "Name is required" })}
                className="bg-transparent text-white w-full p-3 border-b my-2 outline-none focus:outline-none focus:ring-0"
              />
              {errors.name && (
                <p className="text-red-500 text-xs">{errors.name.message}</p>
              )}

              <input
                type="email"
                placeholder="Email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Enter a valid email",
                  },
                })}
                className="bg-transparent text-white w-full p-3 border-b my-2 outline-none focus:outline-none focus:ring-0"
              />
              {errors.email && (
                <p className="text-red-500 text-xs">{errors.email.message}</p>
              )}

              <input
                type="number"
                placeholder="Phone"
                {...register("phone", {
                  required: "Phone number is required",
                  minLength: {
                    value: 10,
                    message: "Phone number must be at least 10 digits",
                  },
                })}
                className="bg-transparent text-white w-full p-3 border-b my-2 outline-none focus:outline-none focus:ring-0"
              />
              {errors.phone && (
                <p className="text-red-500 text-xs">{errors.phone.message}</p>
              )}

              <button type="submit" className="btn-white group glass mt-5">
                <span className="content text-white group-hover:text-black transition-colors duration-300">
                  Submit
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormFooter;
