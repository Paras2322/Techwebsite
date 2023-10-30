import React, { useState } from 'react'

 const Contact = () => {

    const[data,setData]= useState({
        fullname:"",
        phone: "",
        email: "",
        message: ""
    });

    const InputEvent = (event) =>{
        const {name,value}= event.target;
        
        setData((preVal) =>{
            return {
...preVal,
[name] : value,
            };
        });
    };

const formSubmit= (e) =>{
e.preventDefault();
alert(
  `My Name is ${data.fullname}. My Mobile number is ${data.phone} and email is ${data.email}, Here is what i want to say ${data.message} `
  );
};
  return (
    <>
<div className='my-5'>
<h1 className='text-center'> Contact Us</h1>
</div>
<div className='container contact_div'>
<div className='row'>
<div className='col-md-6 col-10 mx-auto'>
<form onSubmit={formSubmit}>
<div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Full Name</label>
  <input type="text" className="form-control" id="exampleFormControlInput1"
Name="fullname"
value={data.fullname}
onChange={InputEvent}
   placeholder="Enter Your Name"/>
</div>

<div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Phone </label>
  <input type="phone" className="form-control" id="exampleFormControlInput1"
Name="phone"
value={data.phone}
onChange={InputEvent}
  placeholder="Mobile Number"/>
</div>

<div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Email address</label>
  <input type="email" className="form-control" id="exampleFormControlInput1"
  Name="email"
  value={data.email}
  onChange={InputEvent}
   placeholder="name@example.com"/>
</div>
<div className="mb-3">
  <label for="exampleFormControlTextarea1" className="form-label">Message</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"
  name="message"
  value={data.message}
  onChange={InputEvent}
  ></textarea>
</div>
<div class="col-12">
    <button class="btn btn-primary" type="submit">Submit form</button>
  </div>
  </form>
</div>
</div>

</div>
    </>
  )
}

export default Contact;