import React from "react";

const WhyRenowebCard = ({ title, description, image }) => {
    return (
        <div className="max-w-sm border rounded-2xl shadow-sm bg-gradient-to-b from-[#0A0A0A]/[1] to-[#302E2E]/[0.28] h-[500px]">

            <img
                className="rounded-t-2xl w-full h-48 object-cover"
                src="https://flowbite.com/docs/images/blog/image-1.jpg"
                alt={title}
            />

            <div className="p-5">

                <h5 className="text-2xl font-bold tracking-tight text-white mt-2 mb-7">
                    {title.split("\n").map((line, index) => (
                        <React.Fragment key={index}>
                            {line}
                            <br />
                        </React.Fragment>
                    ))}
                </h5>

                <p className="mb-3 font-normal text-gray-300">{description}</p>

            </div>
        </div>
    );
};

export default WhyRenowebCard;
