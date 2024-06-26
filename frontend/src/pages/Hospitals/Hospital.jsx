import HospitalCard from "../../Components/Hospitals/HospitalCard"
import Testimonial from "../../Components/Testimonial/Testimonial";
import { useState, useEffect } from 'react';
import axios from 'axios';

const Hospitals = () => {
  const [hospitals, setHospitals] = useState([]);
  useEffect(() => {
    const fetchHospitals = async () => {
      try {
        const response = await axios.get('https://hospital-wgj8.onrender.com/api/v1/hospitals');
        // console.log(response.data)
        setHospitals(response.data.data);
   // Assuming your API response is an array of doctors
      } catch (error) {
        console.error('Error fetching hospitals:', error);
      }
    };

    fetchHospitals();
  }, []); 
  return (
    <>
      <section className='bg-[#fff9ea]'>
        <div className='container text-center'>
          <h2 className='heading'>Find a Hospital</h2>
          <div className="max-w-[570px] mt-[30px] mx-auto bg-[#0066ff2c] rounded-md flex items-center 
        justify-between">
            <input
              type="search"
              className="py-4 pl-4 pr-2 bg-transparent w-full focus:outline-none cursor-pointer 
              placeholder:text-textColor"
              placeholder="Search Doctor"
            />
            <button className="btn mt-0 rounded-[0px] rounded-r-md">
              Search
            </button>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {hospitals.map(hospital => (
              <HospitalCard key={hospital.id} hospital={hospital}/>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center ">What our patient say
            </h2>
            <p className="text__para text-center">
            World-class care for everyone. Our health system offers unmatched,
              expert health care.
            </p>
          </div> 
          <Testimonial />
        </div>
      </section> 

    </>
  );
};

export default Doctors
