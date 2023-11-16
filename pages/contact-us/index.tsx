import axios from "axios";
import { useState } from "react";

const ContactUs = () => {
       const [formData, setFormData] = useState({
              to: '',
              subject: '',
              message: '',
       });

       const handleChange = (e: {
              target: { name: any; value: any; };
       }) => {
              const { name, value } = e.target;
              setFormData({
                     ...formData,
                     [name]: value,
              });
       };

       const handleSubmit = async (e: { preventDefault: () => void; }) => {
              e.preventDefault();
              try {
                     await axios.post('/api/send-email', formData);
                     alert('Email sent successfully!');
              } catch (error) {
                     console.error(error);
                     alert('Error sending email. Please try again later.');
              }
       };
       return (
              <div className="lg:mx-10">
                     <div className="hidden md:flex flex-col max-w-[1920px] gap-7 my-10 rounded-3xl h-[1097px] text-white justify-center items-center px-0 lg:px-16 bg-[#FFF4E2]">
                            <form onSubmit={handleSubmit}>
                                   <div>
                                          <label htmlFor="to">To:</label>
                                          <input
                                                 type="email"
                                                 id="to"
                                                 name="to"
                                                 value={formData.to}
                                                 onChange={handleChange}
                                                 required
                                          />
                                   </div>
                                   <div>
                                          <label htmlFor="subject">Subject:</label>
                                          <input
                                                 type="text"
                                                 id="subject"
                                                 name="subject"
                                                 value={formData.subject}
                                                 onChange={handleChange}
                                                 required
                                          />
                                   </div>
                                   <div>
                                          <label htmlFor="message">Message:</label>
                                          <textarea
                                                 id="message"
                                                 name="message"
                                                 value={formData.message}
                                                 onChange={handleChange}
                                                 required
                                          />
                                   </div>
                                   <button type="submit">Send Email</button>
                            </form>
                     </div >
                     <div className="flex flex-col gap-6 md:hidden h-[650px] justify-center bg-[#FFF4E2] ">

                     </div>

              </div >
       )
}

export default ContactUs
