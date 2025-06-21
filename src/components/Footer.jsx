import {
  FaFacebookF,
  FaXTwitter,
  FaInstagram,
  FaTiktok,
} from "react-icons/fa6";
function Footer() {
  return (
    <div>
      <div className="bg-green-700 text-white pb-8">
        <div className="text-center p-4">
          <h1 className="text-7xl font-bold p-2">JOIN THE MOVEMENT</h1>
          <h2 className="text-xl  font-semibold p-2">
            Get The Latest News & Updates About Our Work
          </h2>
        </div>
        <form className="max-w-3xl mx-auto space-y-4">
          <label htmlFor="email" className="block text-sm font-medium">
            Email Address
          </label>

          <div className="flex gap-x-2">
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="enter your email"
              className="text-black w-2/3 px-4 py-2 bg-white rounded-full focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <button
              type="submit"
              className="w-1/3 border border-white text-white px-4 py-2 rounded-full hover:bg-white hover:text-black transition-colors duration-200"
            >
              Subscribe
            </button>
          </div>
        </form>
      </div>
      <div className="flex space-x-4 p-4">
        <div className="w-1/2 p-4">
          <div className="max-w-2xl mx-auto pb-6">
            <h2 className="text-xl font-bold">Contact Us</h2>
            <p>
              Request support, ask questions, or connect with our team! <br />{" "}
              Responses are usually sent within 5 business days.
            </p>
          </div>
          <form className="max-w-2xl mx-auto space-y-6">
            {/* First + Last Name Inline */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-gray-700"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  className="w-full border-b border-black focus:outline-none focus:border-red-500 px-1 py-2"
                  required
                />
              </div>

              <div className="flex-1">
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  className="w-full border-b border-black focus:outline-none focus:border-red-500 px-1 py-2"
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full border-b border-black focus:outline-none focus:border-red-500 px-1 py-2"
                required
              />
            </div>

            {/* Phone Number */}
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="w-full border-b border-black focus:outline-none focus:border-red-500 px-1 py-2"
              />
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="1"
                className="w-full border-b border-black focus:outline-none focus:border-red-500 px-1 py-2 resize-none"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-red-500 text-white py-2 px-4 rounded-full hover:bg-red-600 transition"
            >
              Submit
            </button>
          </form>
        </div>
        <div className="w-1/2">
          <div className="flex gap-4">
            <div className="flex-1 p-4">
              <h2 class="font-bold text-xl">OFFICES</h2>
              <p>
                411 Lexington Avenue <br /> New York, NY 10022 <br /> <br />{" "}
                2459 Wilkinson Boulevard <br /> Charlotte, NC 28208
              </p>
            </div>
            <div className="flex-1 p-4">
              <h2 className="font-bold text-xl">PHONE</h2>
              <p>+1 704 890-1165</p>
            </div>
            <div className="flex-1 p-4">
              <h2 className="font-bold text-xl">EMAIL</h2>
              <p>info@teens4teens.net</p>
            </div>
          </div>
          <div className="flex gap-4 justify-center">
            <a
              className="w-1/4 aspect-square p-4 border rounded-xl"
              href="https://www.facebook.com/people/Teens-4-Teens/100091319527824/"
            >
              <FaFacebookF className="w-full h-full" />
            </a>
            <a className="w-1/4 aspect-square p-4 border rounded-xl" href="#">
              <FaXTwitter className="w-full h-full" />
            </a>
            <a
              href="https://www.instagram.com/t4t_ig/?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D#"
              className="w-1/4 aspect-square p-4 border rounded-xl"
            >
              <FaInstagram className="w-full h-full" />
            </a>
            <a
              href="https://www.tiktok.com/@t4t_tt"
              className="w-1/4 aspect-square p-4 border rounded-xl"
            >
              <FaTiktok className="w-full h-full" />
            </a>
          </div>
        </div>
      </div>
      <p className="text-center pb-4">&copy; 2025 by Teens 4 Teens</p>
    </div>
  );
}

export default Footer;
