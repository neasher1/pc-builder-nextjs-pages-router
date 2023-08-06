const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1591370874773-6702e8f12fd8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="">
                    <h1 className="mb-5 text-5xl font-bold text-accent tracking-widest">Build Your Perfect PC: Your Ultimate PC Builder</h1>
                    <p className="mb-5">
                        Unleash your dream PC at BuildMyPC! Create the perfect computer for your needs with our easy-to-use PC builder tool. Choose from top-quality components and build your ultimate machine. Game, create, and work with unmatched power. Get started now!</p>
                    <button className="btn btn-accent tracking-widest text-white">PC Builder</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;