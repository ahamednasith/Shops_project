import React, { useEffect, useState } from "react";
import { toast } from 'react-toastify';
import axios from 'axios';
import { Navigate } from "react-router-dom";
import './index.css';
import { Helmet } from "react-helmet";


export default function Template() {
    const [template, setTemplate] = useState('');
    const [style,setStyle] = useState('');
    const getBanner = async () => {
        let tempId = 0;
        let verifyId = 0;
        let type = "";
        const urlParams = new URLSearchParams(window.location.search);
        if (urlParams.get('tempId')) {
            tempId = urlParams.get('tempId');
            type = "template";
            setStyle(type);
        } else if (urlParams.get('previewId')) {
            tempId = urlParams.get('previewId');
            verifyId = urlParams.get('verifyId');
            type = "preview";
            setStyle(type);
        }
        const object = {};
        object.tempId = tempId;
        object.type = type;
        object.verifyId = verifyId;
        try {
            const response = await axios.post(`https://pepzoondev.hifrds.com/api/v3/shopDashboard/getTemplateDetail`,(object));
            setTemplate(response.data);
            const templates = response.data;
            const count = templates.length;
            if (count === 0) {
                Navigate('/error');
            }
        } catch (error) {
            toast.error('Error fetching profile:', error.message);
        }
    };
    useEffect(() => {
        getBanner();
    },[])
    return (
        <div>
            <Helmet>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Shops Template</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/jquery.slick/1.6.0/slick.css" />
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet"></link>
            </Helmet>
            {template && template.map((template ,index) => (
                <section key={index} className="banner" style={{
                    backgroundImage: `url(https://d1whtbopipnjq0.cloudfront.net/shopTemplate/${template.backgroundImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    width: "100%",
                    borderRadius: "0px 0px 40px 40px"
                }}>
                    <div className="container">
                        <div className="row pt-5">
                            <div className="col-md-5 leftcolumn">
                                <h3>{template.heading}</h3>
                                <p>{template.description}</p>
                                <button className="btn">{template.buttonText}</button>
                            </div>
                            <div className="col-md-7">
                                <img src={`https://d1whtbopipnjq0.cloudfront.net/shopTemplate/${template.mainImage}`} alt="Main" className="mainImage" />
                            </div>
                        </div>
                    </div>
                </section>
            ))}
            <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" ></script>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.min.js" ></script>
            <script src="https://code.jquery.com/jquery-1.9.1.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.2/jquery.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.1.3/owl.carousel.min.js"></script>
            <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
            <script src="https://cdn.jsdelivr.net/jquery.slick/1.6.0/slick.min.js"> </script>
        </div>
    )

}