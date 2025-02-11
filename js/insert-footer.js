document.addEventListener("DOMContentLoaded", function () {
    const footer = document.querySelector('footer');
    
    footer.outerHTML = `
    <footer class="footer mt-auto py-3">
        <div class="container text-center">
            <p>
                <strong>Paradigm Pet Professionals</strong> | Evidence-based pet care
                advice for every pet lover
            </p>
            <p>&copy; 2025 theofrancis-dev. All rights reserved.</p>
            <!--site map-->
            <p>
                <a href="../index.html">home</a> | 
                <a href="../pets/dogs.html">dog</a> | 
                <a href="../pets/cats.html">cat</a> | 
                <a href="../pets/birds.html">birds</a> | 
                <a href="../about/index.html">about</a> | 
                <a href="../services/consultations.html">consult</a> |
            </p>

            <!--social links-->
            <div class="social-links">
                <a href="https://www.x.com" target="_blank" rel="noopener noreferrer">
                    <img src="../img/social/x.png" alt="X">
                </a>
                <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        src="../img/social/Instagram.png"
                        alt="Instagram"              
                    >
                </a>
                <a
                    href="https://www.whatsapp.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        src="../img/social/whatsapp.png"
                        alt="WhatsApp"              
                    >
                </a>
                <a
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        src="../img/social/facebook.png"
                        alt="Facebook"              
                    >
                </a>
            </div>
        </div>
    </footer>
    `;
});