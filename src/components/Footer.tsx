

function Footer() {
  return (
    <footer className="bg-black text-gray-500 py-12 px-6 md:px-10">

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16">
        <div>
          <h2 className="text-lg font-bold text-white">About Us</h2>
          <p className="mt-4 leading-7">
            DanceExplore is a premier platform dedicated to teaching
            the art and joy of dance. We nurture talent from the ground
            up, fostering a vibrant community of dancers.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold text-white">Quick Links</h2>
          <div className="mt-4 flex flex-col gap-2">
            <a href="/" className="hover:text-white">Home</a>
            <a href="/about" className="hover:text-white">About</a>
            <a href="/courses" className="hover:text-white">Courses</a>
            <a href="/contact" className="hover:text-white">Contact</a>
          </div>
        </div>

        <div>
          <h2 className="text-lg font-bold text-white">Follow Us</h2>
          <div className="mt-4 flex flex-col gap-2">
            <a href="#" className="hover:text-white">Facebook</a>
            <a href="#" className="hover:text-white">Twitter</a>
            <a href="#" className="hover:text-white">Instagram</a>
          </div>
        </div>

        <div>
          <h2 className="text-lg font-bold text-white">Contact Us</h2>
          <div className="mt-4 leading-7">
            <p>New Delhi, India</p>
            <p>Delhi 10001</p>
            <p>Email: info@danceexplore.com</p>
            <p>Phone: +91 98765 43210</p>
          </div>
        </div>

      </div>

      <div className="border-t border-gray-800 mt-10 pt-6 flex items-center justify-center text-center">
        © 2026 DanceExplore. All Rights Reserved.
      </div>

    </footer>
  );
}

export default Footer;
