import React from 'react';
import "./testimonial.css";

const testimonial = [
    {
        name: "Sazib",
        text:
            "This guy is incredibly awesome, I hired him and when He delivered, I honestly ",
        star:"⭐⭐⭐⭐"
    },
    {
        name: "Shahrear",
        text:
            "This guy is incredibly awesome, I hired him and when He delivered, I honestly ",
            star:"⭐⭐⭐⭐⭐"
    },
    {
        name: "Misu",
        text:
            "This guy is incredibly awesome, I hired him and when He delivered, I honestly ",
        star:"⭐⭐⭐⭐"
    },
];

const Testimonial = () => {
    return (
        <>
            <div>
                <div className="row mx-5">
                    {testimonial.map((value, index) => {
                        return (
                            <div className="col-lg-4 col-sm-12 col-md-6 my-4" key={index}>
                                <div className="card shadow testimonial-card d-flex flex-column">
                                    <span className="description">{value.text}</span>
                                    <span className="stars">{value.star}</span>
                                    <span className="name">{value.name}</span>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
}

export default Testimonial;
