import { useState } from 'react';
// import ReCAPTCHA from "react-google-recaptcha";
import Link from 'next/link';

// const captchaKey= process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY

function ContactSection(props) {
    const {data} = props

    // Loading state for the submit button/loading icon
    const [isLoading, setIsLoading] = useState(false);

    // These control whether the toast alerts are visible
    const [showWarningMessage, setShowWarningMessage] = useState(false);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

    // Recaptcha State
    // const [recaptchaToken, setRecaptchaToken] = useState("");
    // const handleRecaptchaChange = (token) => {
    //     setRecaptchaToken(token);
    //   };

    // Sets states for loading and alerts, and sends the submitted data to the /api/mail route
    async function handleOnSubmit(e) {
        e.preventDefault();
        setIsLoading(true);
        if (showSuccessMessage || showWarningMessage) {
            setShowSuccessMessage(false);
            setShowWarningMessage(false);
        }
        const formData = {
            inputData: {},
            recaptchaToken: recaptchaToken // Add the reCAPTCHA token to the form data
          };
        Array.from(e.currentTarget.elements).forEach(field => {
            // if theres an invalid field
            if (!field.name) return;
            //Adding values to formData
            formData.inputData[field.name] = field.value;
        });
        fetch('/api/mail', {
            method: "POST",
            body: JSON.stringify(formData),
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                "X-Requested-With": "XMLHttpRequest", //
                "X-Recaptcha-Token": recaptchaToken // Add the reCAPTCHA token header
            }
        }).then((res) => {
            // show the warning if not a 200 response
            if (!res.ok) {
                setShowWarningMessage(true);
                //throw new Error("Failed to send message");
                setIsLoading(false)
            } else {
                // Otherwise show success message
                setShowSuccessMessage(true);
            }
            setIsLoading(false)
            return res.json()
        });
    };

    return (
    <div className="w-[95%] mx-auto p-10 rounded-xl py-16">
        
        {/* Header */}
        <div  id='header' className='flex flex-col relative mx-auto pb-5'>
            <h3 className='text-xl lg:text-2xl font-actor text-charcoal text-left font-semibold'>Contact Us</h3>
            <h2 className='text-4xl lg:text-5xl font-one text-left text-darkest-grey font-semibold '>Ready to Start? Get Free Quote</h2>
            <p className='text-lg lg:text-xl font-actor text-left font-medium leading-tight pt-1 text-charcoal'>Fill out the form below to recieve a quote from our sales team</p>

            <hr className="w-full text-darkest-grey border-1"></hr>
        </div>

        {/* Flex with contact info left, contact form right */}
        <div className="flex flex-col lg:flex-row-reverse justify-around">
            
            {/* Contact Info */}
            <div id="contact-info" className='flex flex-col lg:w-1/2 mt-0 mb-5 lg:mb-0'>
                <h2 className="text-2xl lg:text-4xl font-bold text-charcoal ">How to Reach Us</h2>
                <h3 className='text-2xl lg:text-3xl font-nunito font-semibold text-red underline mb-2'>Available By Appointment Only</h3>
                <ul className="text-charcoal text-xl lg:text-2xl">
                    <li className="mb-4 flex">
                        {/* <h3 className='font-nunito font-semibold'>Address: <span className="text-darkest-grey">{data[0].address}</span></h3> */}
                        <h3 className='font-nunito opacity-90 font-regular'></h3>
                    </li>
                    <li className="mb-4 flex">
                        {/* <h3 className='font-nunito font-semibold'>Phone: <span className="text-darkest-grey">{data[0].contactPhone}</span></h3> */}
                        <h3 className='font-nunito opacity-90 font-regular underline'></h3>
                    </li>
                    {/* {data[0].contactEmail ? (
                        <li className="mb-4 flex">
                            <h2 className='font-nunito font-semibold'>Email:&nbsp;</h2>
                            <Link className='font-nunito opacity-90 font-regular underline' href={`mailto:${data[0].contactEmail}`}>{data[0].contactEmail}</Link>
                        </li>
                    ) : (<br></br>)} */}
                </ul>

                <Link href="/home" 
                className="transition duration-250 ease-in-out hover:scale-[103%] px-4 mt-auto mx-auto w-[90%] "
                >
                    <img className="w-full" src="/vws-logo.png" alt="Logo" />
                </Link>

                <a href="tel:2133221132" name="call-now-button" className="flex w-full ml-auto justify-center mt-3 lg:mt-auto text-darkest-grey font-nunito font-semibold bg-green/80 hover:bg-green rounded-full text-3xl lg:text-4xl py-3 lg:py-6  transition duration-150 ease-in-out hover:shadow-xl">Call Now</a>

            </div>
            
            
            <div id='left-box' className='flex flex-col lg:w-2/3 lg:py-0 justify-center'>
                <form method="post" className="flex flex-col md:block lg:w-[90%] mr-auto" onSubmit={handleOnSubmit}>

                    {/* Name Container */}
                    <div className=" flex flex-col md:flex-row justify-between md:mb-5">

                        {/* Name */}
                        <div className="flex flex-col w-full md:w-[48%] mb-2 md:mb-0">
                            <label htmlFor="firstname" className="text-dark-grey font-actor font-medium text-xl">First Name *</label>
                            <input type="text" name="firstname" className="bg-charcoal/40 text-white text-sm rounded-md block w-full p-3 shadow mb-3 md:mb-0" required></input>
                        </div>

                        <div className="flex flex-col w-full md:w-[48%] mb-2 md:mb-0">
                            <label htmlFor="lastname" className="text-dark-grey font-actor font-medium text-xl">Last Name *</label>
                            <input type="text" name="lastname" className="bg-charcoal/40 text-white text-sm rounded-md block w-full p-3 shadow mb-3 md:mb-0" required></input>
                        </div>
                        
                    </div>

                    {/* Email and Phone Container */}
                    <div className=" flex flex-col md:flex-row justify-between md:mb-5">

                        {/* Email */}
                        <div className="flex flex-col w-full md:w-[48%] mb-2 md:mb-0">
                            <label htmlFor="email" className="text-dark-grey font-actor font-medium text-xl">Email *</label>
                            <input type="text" name="email" className="bg-charcoal/40 text-white text-sm rounded-md block w-full p-3 shadow mb-3 md:mb-0" required></input>
                        </div>

                        <div className="flex flex-col w-full md:w-[48%] mb-2 md:mb-0">
                            <label htmlFor="phone" className="text-dark-grey font-actor font-medium text-xl">Phone Number *</label>
                            <input type="text" name="phone" className="bg-charcoal/40 text-white text-sm rounded-md block w-full p-3 shadow mb-3 md:mb-0" required></input>
                        </div>
                        
                    </div>

                    {/* City and Model */}
                    <div className=" flex flex-col md:flex-row justify-between md:mb-5">

                        {/* Email */}
                        <div className="flex flex-col w-full md:w-[48%] mb-2 md:mb-0">
                            <label htmlFor="city" className="text-dark-grey font-actor font-medium text-xl">City *</label>
                            <input type="text" name="city" className="bg-charcoal/40 text-white text-sm rounded-md block w-full p-3 shadow mb-3 md:mb-0" required></input>
                        </div>

                        {/* Model */}
                        <div className="flex flex-col w-full md:w-[48%] mb-2 md:mb-0">
                            <label htmlFor="model_of_vehicle" className="text-dark-grey font-actor font-medium text-xl">Vehicle Model *</label>
                            <input type="text" name="model_of_vehicle" className="bg-charcoal/40 text-white text-sm rounded-md block w-full p-3 mb-3 md:mb-0" required></input>
                        </div>
                        
                    </div>

                    
                    {/* Model and Year Container */}
                    <div className=" flex flex-col md:flex-row justify-between md:mb-5">
                        {/* Year */}
                        <div className="flex flex-col w-full md:w-[48%] mb-2 md:mb-0">
                            <label htmlFor="year_of_vehicle" className="text-dark-grey font-actor font-medium text-xl">Vehicle Year *</label>
                            <input type="text" name="year_of_vehicle" className="bg-charcoal/40 text-white text-sm rounded-md block w-full p-3 shadow mb-3 md:mb-0" required></input>
                        </div>
                        
                        {/* Color */}
                        <div className="flex flex-col w-full md:w-[48%] mb-2 md:mb-0">
                            <label htmlFor="what_color_is_your_vehicle_now" className="text-dark-grey font-actor font-medium text-xl">Current Vehicle Color *</label>
                            <input type="text" name="what_color_is_your_vehicle_now" className="bg-charcoal/40 text-white text-sm rounded-md block w-full p-3 mb-3 md:mb-0" required></input>
                        </div>
                    </div>
                    
                    {/* Comments */}
                    <div className="flex flex-col w-full mb-5">
                        <label htmlFor="tell_us_about_your_project_" className="text-dark-grey font-actor font-medium text-xl">Tell us about your project! *</label>
                        <textarea name="tell_us_about_your_project_" className="bg-charcoal/40 text-white text-sm rounded-md block w-full h-[200px] p-2"  required></textarea>
                    </div>

                    {/* Button and alert messages */}
                    <div className='flex flex-col lg:flex-row space-y-5 lg:space-y-0 lg:space-x-10'>
                        
                        {/* Submit */}
                        <button 
                        id="submit-button"
                        className='w-full lg:w-[30%] text-bg-lightest bg-light-blue font-nunito font-medium border-[2px] hover:bg-grey-bg rounded-full text-darkest-grey text-xl lg:px-12 py-3 transition duration-150 ease-in-out hover:shadow-xl'>{!isLoading? "Submit" : (
                            <div role="status">
                                <svg aria-hidden="true" className="w-8 h-8 mx-auto text-gray-200 animate-spin fill-light-blue" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                                </svg>
                                <span className="sr-only">Loading...</span>
                            </div>
                        )}</button>

                        {/* Success Alert Toast */}
                        <div id="toast-success" className={`${showSuccessMessage ? 'flex' : 'hidden'} items-center w-full p-4 text-charcoal bg-[#11543F] rounded-full shadow`} role="alert">
                            <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-charcoal bg-[#0b963e] rounded-lg">
                                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                <span className="sr-only">Check icon</span>
                            </div>
                            <div className="ml-3 text-off-white font-actor font-medium">Message Sent Succesfully</div>
                            
                            {/* Close Button */}
                            <button type="button" className="ml-auto -mx-1.5 -my-1.5 text-charcoal hover:bg-black rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8" onClick={() => setShowSuccessMessage(false)} data-dismiss-target="#toast-success" aria-label="Close">
                                <span className="sr-only">Close</span>
                                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                            </button>
                        </div>
                        
                        {/* Fail Alert Toast */}
                        <div id="toast-fail" className={`${showWarningMessage ? 'flex' : 'hidden'} items-center w-full p-4 text-charcoal bg-red rounded-full shadow`} role="alert">
                            <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-charcoal bg-[#B43402] rounded-lg">
                                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd"></path></svg>
                                <span className="sr-only">Warning icon</span>
                            </div>
                            <div className="ml-3 text-off-white font-actor font-medium">Message Failed to Send</div>
                            
                            {/* Close Button */}
                            <button type="button" className="ml-auto -mx-1.5 -my-1.5 text-charcoal hover:bg-dark-grey rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8"  onClick={() => setShowWarningMessage(false)} data-dismiss-target="#toast-success" aria-label="Close">
                                <span className="sr-only">Close</span>
                                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                            </button>
                        </div>
                        {/* <ReCAPTCHA sitekey={captchaKey} onChange={handleRecaptchaChange} /> */}
                    </div>
                </form>
            </div>
        </div>
    </div>
  );
}

export default ContactSection;