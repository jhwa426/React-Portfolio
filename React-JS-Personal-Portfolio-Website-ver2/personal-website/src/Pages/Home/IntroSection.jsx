
const IntroSection = () => {
    return (
        <section id="introSection" className='intro--section'>
            <div className='intro--section-content-box'>
                <div className='intro--section-content'>
                    <p className='section--title'>Kia ora, I'm Jeff</p>
                    <h1 className='intro--section--title'>
                        <span className='intro--section-title--color'>Software </span> {" "}
                        <br />
                        Developer
                    </h1>
                    <p className='intro--section-description'>
                        This is a description area
                        <br />
                        This is a description area 2
                    </p>
                    <br />
                </div>
                <button className='btn btn-primary'>Get In Touch</button>
            </div>
            <div className='intro--section--img'>
                <img src='./img/intro_img.JPG' alt='logo-img' />
            </div>
        </section>
    );
}

export default IntroSection;