import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../components/footer';

const Contact = () => {
  return (
    <div>
    <div className="container mt-5">
      <h2 className="text-center mb-4">Contact Me</h2>
      <form id="contactForm" className="p-4 border rounded shadow-sm bg-light">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name:</label>
          <input type="text" id="name" name="name" className="form-control" required />
          <span className="error text-danger" id="nameError"></span>
        </div>
        
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email:</label>
          <input type="email" id="email" name="email" className="form-control" required />
          <span className="error text-danger" id="emailError"></span>
        </div>
        
        <div className="mb-3">
          <label htmlFor="message" className="form-label">Message:</label>
          <textarea id="message" name="message" className="form-control" rows="4" required></textarea>
          <span className="error text-danger" id="messageError"></span>
        </div>
        
        <button type="submit" className="btn btn-primary w-100">Submit</button>
      </form>
    </div>
    <Footer />
    </div>
  );
};

export default Contact;
