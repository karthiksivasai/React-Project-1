const HeroSection = () => {
    return <main className="hero container">
        <div className="hero_content"> 
        <h1> YOUR FEET DESERVE THE BEST</h1>
        <p> YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE 
            THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
       

        <div className="hero_btn">
            <button>Buy Now</button>
            <button className="secondary_btn">Add to Cart</button>
        </div>

        <div className="avilability">
            <p>Also Available On</p>

            <div className="brand_icons">
                <img src="/images/amazon.png" alt="amazon logo"/>
                <img src="/images/flipkart.png" alt="flipkart logo"/>
            </div>
        </div>
        </div>
        <div className="hero_image">
        <img src="/images/shoe_image.png" alt="shoe"/></div>
    </main>
};
export default HeroSection;