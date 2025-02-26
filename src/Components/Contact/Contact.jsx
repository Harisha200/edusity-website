import React from 'react'
import'./Contact.css'
import { useState,useEffect } from 'react';
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from'../../assets/white-arrow.png'

const Contact = () => { 

  const initialValues={username :"" ,email:"",message:""};
  const[formValues,setFormValues]=useState(initialValues);
  const [formErrors,setFormErrors]=useState({});
 const[isSubmit,setIsSubmit]=useState(false);
  
  const handleChange = (e)=>{
    
    const { name,value }=e.target;
    setFormValues({...formValues,[name]:value});
    
      };
   
      const handleSubmit = (e) =>{
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
   };
   useEffect(()=>{
    console.log(formErrors);
    
    if(Object.keys(formErrors).length === 0  && isSubmit){
      console.log(formValues);
    }
    

   },[formErrors])

   const validate=(values)=>{
    const errors={}
    const regax=/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    
    if(!values.username){
      errors.username="Username is required !"
     }
      if(!values.email){
      errors.email="Email is required !"
     }else if(!regax.test(values.email)){
      errors.email="This is not valid email format!"
     }

     if(!values.message){
      errors.message="Message is required !"
     }
    

     
     return errors;


   };
       
  return (
    <div className='contact'>

        <div className="contact-col">
                      <h3>Send us a message <img src={msg_icon} alt=""/></h3>
           
            <p>Feel free to reach out through contact form or find our contact information below.
                your feedbac,questions, and suggestions are information to us as we strive to provide 
                exceptional service to our university community.
            </p>
            <ul>
        
                    <li> <img src={mail_icon}alt="" />Contact Harisha@.gmail.com</li>
                    <li><img src={phone_icon} alt=""/>9807564326</li>
                    <li> <img src={location_icon} alt=""/>Madras university,Chennai<br/> 600 038,United states</li>
                            
            </ul>
            </div>
            <div className="contact-col">

              {Object.keys(formErrors).length === 0 && isSubmit ? (
                <div className="ur message success"> Signed in successfully</div>):(
              <pre>{JSON.stringify(formValues,undefined,2)}</pre>
                )}
            <form onSubmit={handleSubmit}>
                <label>username</label>
                <input type="text" name="username" placeholder="username" value={formValues.username}
                  onChange={handleChange}
                />
                <p>{formErrors.username}</p>
               
                 <label>Email</label>
                 <input type="text" name="email" placeholder="Email" value={formValues.email}
                 onChange={handleChange} />
                 <p>{formErrors.email}</p>
               
                <label>Write your message here</label>
                <textarea name="message" rows="6" placeholder="Enter your message"value={formValues.message}
                onChange={handleChange}></textarea>
                <p>{formErrors.message}</p>
                
                <button type="submit"className="btn dark-btn">Sumbit now <img src={white_arrow} alt=""/>
                </button>
            </form>
          
        
            </div>
        
        
    </div>
    
  )
}

export default Contact