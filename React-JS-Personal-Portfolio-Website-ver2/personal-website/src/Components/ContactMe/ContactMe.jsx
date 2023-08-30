import './ContactMe.css';

const ContactMe = () => {
    return (
        <section id="ContactMe" className="contact--section">
            <div>
                <p className="sub--title">Get In Touch</p>
                <h2>Contact Me</h2>
                <p className="text-lg">Flick me a quick message :)</p>
            </div>
            <form className="contact--form--container">
                <div className="container">
                    <label htmlFor="first-name" className="contact--label">
                        <span className="text-md">First Name</span>
                        <input
                            type="text"
                            className="contact--input text-md"
                            name="first-name"
                            id="first-name"
                            required
                        />
                    </label>
                    <label htmlFor="last-name" className="contact--label">
                        <span className="text-md">Last Name</span>
                        <input
                            type="text"
                            className="contact--input text-md"
                            name="last-name"
                            id="last-name"
                            required
                        />
                    </label>
                    <label htmlFor="email" className="contact--label">
                        <span className="text-md">Email</span>
                        <input
                            type="text"
                            className="contact--input text-md"
                            name="email"
                            id="email"
                            required
                        />
                    </label>
                    <label htmlFor="contact-number" className="contact--label">
                        <span className="text-md">Contact Number</span>
                        <input
                            type="text"
                            className="contact--input text-md"
                            name="contact-number"
                            id="contact-number"
                            required
                        />
                    </label>
                </div>

                <label htmlFor="choose-topic" className="contact--label">
                    <span className="text-md">Choose a topic</span>
                    <select id="choose-topic" className="contact--input text-md">
                        <option>Select one</option>
                        <option>Question</option>
                        <option>Feedback</option>
                    </select>
                </label>
                <label htmlFor="message" className="contact--label">
                    <span className="text-md">message</span>
                    <textarea
                        className="contact--input text-md"
                        id="message"
                        rows="8"
                        placeholder="Leave your message"
                    />
                </label>

                <label htmlFor="checkbox" className="checkbox--label">
                    <input
                        type="checkbox"
                        name="checkbox"
                        id="checkbox"
                        required />
                    <span className="text-sm">Accept the terms</span>
                </label>

                <div>
                    <button className="btn btn-primary contact--form--btn">Submit</button>
                </div>
            </form>
        </section >
    );
}

export default ContactMe;