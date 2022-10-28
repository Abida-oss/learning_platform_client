import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FaDownload, FaEye, FaRegStar } from "react-icons/fa";
import jsPDF from 'jspdf';

const Info = () => {
    const data = useLoaderData();
    const {id} = data;
    console.log(data);

    
    const reacttopdf=()=>{
        var doc= new jsPDF('landscape','px','a4')    
        doc.text(50,50,data.b_name)
        doc.text(20,10,data.author) 
        doc.text(30,20,data.description)
        doc.save('a.pdf')

    }

    return (
        <div className='li'>
            <div>
                <div className="text-sm breadcrumbs">
                    <ul>
                        <li>
                            <button onClick={reacttopdf} ><Link>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-8 h-8 mr-2 ml-4 stroke-current"><FaDownload></FaDownload></svg>
                            
                            </Link></button>
                            
                        </li>
                        <li>                      
                        <Link to={`/checkout/${id}`}>Get Premium Acces</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="card hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={data.img} className="max-w-md h-full rounded-lg shadow-2xl" alt='' />
                    <div>
                        <h1 className="text-5xl font-bold">{data.b_name}</h1><br></br>
                        <h1 className="text-2xl font-bold">{data.author}</h1>
                        <p className="py-6">{data.description}</p>
                        <div className="btm-nav">
                            <button className="bg-pink-200 text-pink-600">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor"><FaRegStar></FaRegStar></svg>
                                <span className="btm-nav-label">{data.rating.number}</span>
                            </button>
                            <button className="active bg-neutral text-teal-content">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor"><FaEye></FaEye></svg>
                                <span className="btm-nav-label">{data.total_view}</span>
                            </button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Info;