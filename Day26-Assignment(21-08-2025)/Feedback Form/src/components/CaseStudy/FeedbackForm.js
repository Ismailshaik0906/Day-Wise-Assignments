import React, { useState } from 'react'

const FeedbackForm = () => {
    const [form,setform]=useState({
            name:'',
            email:'',
            phone:'',
            message:'',
            rating:''
        })

        const [errors,setErrors]=useState([]);
        const validate=()=>{
        let newErrors={};

        //required field validation
        if(!form.name.trim()){
            newErrors.name="Name is required"
        }

        if(!form.email.trim()){
            newErrors.email="Email is required"
        }

        if(!form.phone.trim()){
            newErrors.phone="Phone number is required"
        }
        if(!form.message.trim()){
            newErrors.message="Feedback message is required"
        }
        if(!form.rating.trim()){
            newErrors.rating="Rating is required"
        }


        //2. format validation(Email)---john123@example.com
        if(form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)){
            newErrors.email="Invalid Email format";
        }

        //3 pattern validation phno:only 10digits
        if(form.phone && !/^\d{10}$/.test(form.phone)){
            newErrors.phone="Phone number must be exactly 10 digits";
        }

        //4.message validation
        if(form.message.length<20){
            newErrors.message="Message must be atleast 20 characters";
        }
        else if(form.message.length>250){
            newErrors.message="Message must not exceed 250 characters";
        }


        setErrors(newErrors);
        return Object.keys(newErrors).length===0;
    }


        const handleChange=(e)=>{
        setform({...form,[e.target.name]:e.target.value})
    }


    const handleSubmit=(e)=>{
        e.preventDefault();
        if(validate()){
            alert("Feedback submitted successfully")
        }
    }
  return (
    <div>
      <h2>Feedback Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
            <label>Name:</label>
            <input type='text' name='name' value={form.name} onChange={handleChange}/>
            {errors.name && <p style={{color:"red"}}>{errors.name}</p>}
        </div>
        <div>
            <label>Email:</label>
            <input type='email' name='email' value={form.email} onChange={handleChange}/>
            {errors.email && <p style={{color:"red"}}>{errors.email}</p>}
        </div>
        <div>
            <label>Phone:</label>
            <input type='number' name='phone' value={form.phone} onChange={handleChange}/>
            {errors.phone && <p style={{color:"red"}}>{errors.phone}</p>}
        </div>
        <div>
            <label>Feedback Message:</label>
            <textarea name='message' value={form.message} onChange={handleChange}/>
            {errors.message && <p style={{color:"red"}}>{errors.message}</p>}
        </div>
        <div>
            <label>Rating:</label>
            <select name='rating' value={form.rating} onChange={handleChange}>
                <option>--Select--</option>
                <option>Poor</option>
                <option>Good</option>
                <option>Very Good</option>
                <option>Excellent</option>
            </select>
            {errors.rating && <p style={{color:"red"}}>{errors.rating}</p>}
        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default FeedbackForm
