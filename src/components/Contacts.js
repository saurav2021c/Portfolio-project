import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import {useForm} from "react-hook-form"; 
import { DevTool } from "@hookform/devtools";

const Contacts = () => {
  
  const [successMessage, setSuccessMessage] = useState("");
  const {register, control, handleSubmit, formState:{errors},}= useForm();
  
  const serviceID = "service_ID";
  const templateID = "template_ID";
  const publicKEY = "f_jIcjT_KGWXmSDc7";

  const onSubmit = (data,r) => {
    sendEmail(
      serviceID,
      templateID,
      {
        name: data.name,
        phone: data.phone,
        email: data.email,
        designation: data.designation,
        description: data.description
      },
      publicKEY
    )
    r.target.reset();
  }
  
  const sendEmail = (serviceID, templateID, variables , publicKEY) => {
    emailjs.send(serviceID, templateID, variables , publicKEY)
      .then(() => {
        setSuccessMessage("Form sent Sucessfully! I'll contact you as soon as possible.");
      }).catch(err => console.error(`Something went wrong ${err}`));
    }
  

  return (
    <div className="contacts">
       <div className="text-center">
       <h1>Contact Me</h1>
       <p>Please fill out the form and describe your Doubts and I'll contact you as soon as possible.</p>
       <span className="success-message">{successMessage}</span>
       </div>
       <div className="container">
        <form onSubmit={handleSubmit(onSubmit)} >
        <div className="row">
            <div className="col-md-6 col-xs-12">
                {/**NAME INPUT */}

                <p>Name:</p>
                <div className="text-center">
                <div className="error-message">
                <input
                type="text"
                id="name"
                className="form-control"
                placeholder="Name"
                name="name"
                {...register("name",{
                  required: "Name is required",
                })}
                />
                <div className="line"></div>
                </div>
                <p className="error">{errors.name?.message}</p>
                </div>
                {/**PHONE INPUT */}
                <p>Mobile Number: </p>
                <div className="text-center">
                <div className="error-message">
                <input
                type="text"
                id="mobile"
                className="form-control"
                placeholder="Mobile Number"
                name ="mobile"
                {...register("mobile",{
                  required: "Mobile Number is required",
                })}
                />
                <div className="line"></div>
                </div>
                <p className="error">{errors.mobile?.message}</p>
                </div>
                {/**EMAIL INPUT */}
                <p>Email ID: </p>
                <div className="text-center">
                <div className="error-message">
                <input
                type="text"
                id="email"
                className="form-control"
                placeholder="Email"
                name ="email"
                {...register("email",{
                  pattern:{
                    required: "Email ID is required",
                    value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email format",
                  }
                })}
              />
              <div className="line"></div>
            </div>
            <p className="error">{errors.email?.message}</p>
            </div>
                {/**DESIGNATION INPUT */}
                <p>Designation: </p>
                <div className="text-center">
                <div className="error-message">
                <input
                type="text"
                id="designation"
                className="form-control"
                placeholder="Designation"
                name ="designation"
                {...register("designation",{
                  required: "Designation is required",
                })}
              />
              <div className="line"></div>
            </div>
            <p className="error">{errors.designation?.message}</p>
            </div>
            </div>
            <div class="col-md-6 col-xs-12"> 
                {/**DESCRIPTION INPUT */}
                <p>Description: </p>
                <div className="text-center">
                <div className="error-message">
                <textarea
                type="text"
                id="description"
                className="form-control"
                placeholder="Description"
                name ="description"
                {...register("description", {
                  required: "Description is required",
                })}
              ></textarea>
              <div className="line"></div>
            </div>
            <p className="error" >{errors.description?.message}</p>
            </div>
              <div class="row">
              <div class="col"><button class="btn btn-primary" type="reset">Reset Form</button></div>
                <div class="col"><button className="btn-main-offer contact-btn" type="submit">Contact Me</button></div>
                </div>
            </div>
        </div>
        </form>
        <DevTool control={control}/>
       </div>
    </div>
  )
}

export default Contacts