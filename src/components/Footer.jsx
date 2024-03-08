import "./Footer.css"


const  Footer = () => {
    return (
        <footer  >
            <div className="footer" >
            <div className="footer-left">
                <img src="https://avatars.githubusercontent.com/u/84184940?v=4" alt="Project RBN Logo" />
                <p>Penjelasan perusahaan Anda di sini...</p>
            </div>
            <div className="footer-center">
                <p>Jam Operasional:</p>
                <p>Senin-Jumat: 08:00 - 17:00</p>
                <p>Sabtu-Minggu: Tutup</p>
            </div>
            <div className="footer-right">
                <form>
                    <input type="text" placeholder="Nama" />
                    <input type="email" placeholder="Email" />
                    <button type="submit">Kirim</button>
                </form>
                <div className="social-icons">
                    <a href="#"><i className='bx bxl-instagram'></i></a>
                    <a href="#"><i className='bx bxl-twitter'></i></a>
                    <a href="#"><i className='bx bxl-whatsapp'></i></a>
                </div>

            </div>
            
        </div>
        <div className="copyright">
                <p>&copy; 2024 Company Name. All rights reserved.</p>
            </div>
        </footer>
        
        
    );
}

export default Footer;
