import React from 'react';
import '../app.css'


function Contact() {
  return (
    <section id='Contact' className="container mx-auto px-4 py-8 animate-[left_1s_ease-in-out]">
      <div className='flex justify-center items-center flex-col '>
      <h2 className="text-4xl font-bold mb-4 gradientText">Contact Me</h2>

<p className='w-[75%] text-center text-lg'>
I am here to start up your start-up. I want to get to know about you—your business, your work, your needs. We’ll take it from there. I look forward to hearing from you!
</p>
      </div>

<div className='flex mt-32 justify-center '>


<div className='sm:w-1/2 pl-24 hidden sm:block'>

<div className='flex gap-4 mb-20'>
<i className="material-icons bg-white text-black h-16 w-16 rounded-full flex justify-center items-center" style={{fontSize:'36px'}}>location_on</i>
<div>
<h4 className='text-3xl font-semibold pb-3'>Address</h4>
<p>Balram Patel Colony</p>
<p>Seoni malwa, 461223</p>
</div>
</div>

<div className='flex gap-4 mb-20'>
<i className="material-icons bg-white text-black h-16 w-16 rounded-full flex justify-center items-center" style={{fontSize:'36px'}}>phone</i>
<div>
<h4 className='text-3xl font-semibold pb-3'>Phone</h4>
<a className='cursor-pointer' href='tel:+916263963171'>+91 6263963171</a>
</div>
</div>

<div className='flex gap-4 mb-20'>
<i className="material-icons bg-white text-black h-16 w-16 rounded-full flex justify-center items-center" style={{fontSize:'36px'}}>mail</i>
<div>
<h4 className='text-3xl font-semibold pb-3'>Email</h4>
<a href='mailto:riteshraghuwanshi2001@gmail.com' className='cursor-pointer'>riteshraghuwanshi2001@gmail.com</a>
</div>
</div>


</div>


      <form className="w-full max-w-lg" action='https://formspree.io/f/xqkonaeb' method='POST'>
<h3 className='text-4xl mb-10 font-semibold'>Send Message</h3>

          <div className="w-full md:w-2/3 px-3 mb-4">
            <label className="block uppercase tracking-wide text-base mb-2" htmlFor="grid-first-name">
              Full Name
            </label>
            <input
              className="appearance-none w-full px-1 mb-3 focus:outline-none bg-transparent border-2 border-[#00dbde]"
              id="grid-first-name"
              type="text"
              name='name'
              required
              autoCapitalize='off'
            />
          </div>
         
          <div className="md:w-2/3 px-3 mb-4">
            <label className="block uppercase tracking-wide text-base mb-2" htmlFor="grid-email">
              Email Address
            </label>
            <input
              className="appearance-none w-full px-1 mb-3 focus:outline-none bg-transparent border-2 border-[#00dbde]"
              id="grid-email"
              type="email"
              name='email'
              required
              autoCapitalize='off'
            />
        </div>

        <div className="flex flex-wrap mb-6 md:w-2/3">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-base  mb-2" htmlFor="grid-message">
              Message
            </label>
            <textarea
              className="resize-none appearance-none w-full px-1 mb-3 focus:outline-none bg-transparent border-2 border-[#00dbde]"
              id="grid-message"
              name='Message'
              required
              autoCapitalize='off'
            ></textarea>
          </div>
        </div>
        <div className="md:flex md:items-center ">
          <div className="w-full">
            <button
              className="w-full shadow ml-4  hover:bg-[#00dbde] bg-[#00adb0] focus:shadow-outline focus:outline-none text-black font-bold py-2 px-4 rounded"
              type="submit"
            >
              Send
            </button>
          </div>
          <div className="md:w-2/3"></div>
        </div>
      </form>
</div>

    </section>
  );
}

export default Contact;
