import React from "react";
import Layout from "./../components/Layout/Layout";
import { BiMailSend, BiPhoneCall } from "react-icons/bi";
import { ImLocation2 } from 'react-icons/im';
const Contact = () => {
    return (
        <Layout title={"Contact us"}>
            <div className="row contactus " >
                <div className="col-md-6 ">
                    <img
                        src="/images/contactus.jpeg"
                        alt="contactus"
                        style={{ width: "100%", marginTop: '50px' }}
                    />
                </div>

                <div className="col-md-4">
                    <h1 className="bg-dark p-2 text-white text-center">CONTACT US</h1>
                    <p className="text-justify mt-2">
                        Contact us for any inquiries or assistance at iWorld-Mobile. Our dedicated customer support team is ready to help you with your mobile phone needs, ensuring a seamless shopping experience. Reach us at,
                    </p>
                    <br />
                    <p className="mt-3">
                        <BiMailSend /> : info@iWorldMobile.com
                    </p>
                    <p className="mt-3">
                        <BiPhoneCall /> : 034-4455645
                    </p>
                    <p className="mt-3">
                        <ImLocation2 /> : 7, Panadura Road, Horana
                    </p>
                </div>
            </div>
        </Layout>
    );
};

export default Contact;
