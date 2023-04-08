import React from "react";
import { useForm } from "react-hook-form";

export default function App() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <form className="t-cntr" onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="name">Name:</label>
      <input id="name" {...register('name', { required: true, maxLength: 8})} />
      {errors.name && errors.name.type === "required" && <span style={{color:"red"}}>This is required</span>}
      {errors.name && errors.name.type === "maxLength" && <span style={{color:"red"}}>Max length exceeded</span> }<br/>
      <label htmlFor="email">Email:</label>
      <input id="email" {...register('email', { required: true, maxLength: 8})} />
      {errors.email && errors.email.type === "required" && <span style={{color:"red"}}>This is required</span>}
      {errors.email && errors.email.type === "maxLength" && <span style={{color:"red"}}>Max length exceeded</span> }<br/>
      <input type="submit" />
    </form>
  );
}
