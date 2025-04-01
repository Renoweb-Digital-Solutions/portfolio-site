const Ellipse = () => {
    return (
        <div className="absolute top-24 flex justify-center items-center">
            {/* Outer Ellipse rotated 45 degrees */}
            <div className="w-[100px] md:w-[650px] lg:w-[1200px] h-[400px] bg-blue-500 rounded-full blur-3xl opacity-50 rotate-[14deg] relative">
                {/* Inner Ellipse rotated 20 degrees */}
                <div className="absolute top-1/3 left-1/3 flex justify-center items-center">
                    <div className="w-[80px] md:w-[400px] lg:w-[600px] h-[200px] bg-black rounded-full blur-3xl opacity-100 rotate-[7deg]"></div>
                </div>
            </div>
        </div>
    );
};

export default Ellipse;
