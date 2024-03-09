import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="footer-left">
          <a href="/"><img src="../src/assets/img/logo5.png" alt="Project RBN Logo" /></a>
          
          {/* <p>Project RBN. Company Pte. Ltd</p> */}
        </div>
        <div className="footer-center">
          <p>Opening Hours :</p>
          <p>Monday - Friday : 8.00AM - 5.00PM</p>

          <p>Saturday and Sunday : Closed</p>
        </div>
        <div className="footer-right">
          <form>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <button type="submit">Send</button>
          </form>
          <div className="social-icons">
            <p>Follow us: </p>
            <a href="https://www.instagram.com">
              <i className="bx bxl-instagram"></i>
            </a>
            <a href="https://www.twitter.com">
              <i className="bx bxl-twitter"></i>
            </a>
            <a href="https://wa.me/+62123456789">
              <i className="bx bxl-whatsapp"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>&copy; 2024 | Project RBN. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
