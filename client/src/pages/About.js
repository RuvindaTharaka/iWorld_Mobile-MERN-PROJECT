import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
    return (
        <Layout title={"About us - Ecommer app"}>
            <div className="row contactus ">
                <div className="col-md-6 ">
                    <img
                        src="/images/about.jpeg"
                        alt="contactus"
                        style={{ width: "100%" }}
                    />
                </div>
                <div className='col-md-4' style={{ paddingTop: '25px' }}>
                    <p className='text-justify mt-2'>
                        iWorld Mobile is your one-stop shop for all your mobile phone needs. Whether you're an iPhone enthusiast or an Android lover, we have a wide range of smartphones and accessories to suit your preferences. Our user-friendly website offers a seamless and secure shopping experience, allowing you to explore our extensive collection of high-quality products.
                    </p>
                    <p className='text-justify mt-2'>
                        Enhance and protect your device with our diverse range of accessories. Choose from protective cases, screen protectors, chargers, headphones, and more, sourced from reputable brands known for their durability and performance.
                    </p>
                    <p className='text-justify mt-2'>
                        At iWorld Mobile, your satisfaction is our top priority. Visit our e-commerce website today at <strong>iWorld-Mobile.com</strong> and join the iWorld Mobile community. Experience innovation, style, and exceptional customer service, all in one place.
                    </p>
                </div>
            </div>
        </Layout>
    );
};

export default About;
