import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-8 mt-2" >
          <h2 style={{ textAlign: 'center', padding: '20px' }}>PRIVACY POLICY</h2>
          <p>At iWorld Mobile, we value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, disclose, and safeguard the data you provide to us through our website and services. </p>
          <br />
          <h5>Privacy Policy Summary:</h5>
          <p><strong>1. Information Collection and Use:</strong> We collect personal information for order processing .</p>
          <p><strong>2. Cookies and Tracking Technologies:</strong> Cookies are used to enhance your browsing experience and help us analyze website traffic and improve our services.</p>
          <p><strong>3. Third-Party Sharing:</strong> We may share your personal information with trusted third-party services.</p>
          <p><strong>4. Changes to Privacy Policy:</strong> The policy may be updated periodically, and significant changes will be notified on our website.</p>
          <p><strong>5. Contact Us:</strong> For inquiries regarding your personal information or this Privacy Policy, please contact our Data Protection Officer at <strong>customercare@iWorldMobile.com</strong></p>
          <br />
          <p><strong>Last Updated : 27th of July, 2023</strong></p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
