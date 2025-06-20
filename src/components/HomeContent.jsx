import { Link } from "react-router-dom";
import image1 from "../assets/image1.avif";
import image2 from "../assets/image2.avif";
import image3 from "../assets/image3.avif";
import image4 from "../assets/image4.avif";
import image5 from "../assets/image5.avif";
import image6 from "../assets/image6.avif";

function HomeContent() {
  return (
    <div>
      <div className="flex items-center space-x-4 p-4 pt-26">
        <div>
          <h2 className="text-7xl font-semibold">
            JOIN THE FIGHT FOR <span className="text-red-500">EQUITY</span>
          </h2>
          <p className="mt-2 pb-4">
            No teen should have to choose between their health and their
            education. We provide tampons and pads for girls who need them,
            worldwide. Empowering economies, empowering education, empowering
            women.
          </p>
          <Link to="/take-action">
            <button className="bg-black text-lg text-white px-6 py-3 rounded-full hover:bg-red-500 transition">
              Get Involved
            </button>
          </Link>
        </div>
        <img
          src={image1}
          alt="image"
          className="max-w-3/4 object-cover rounded-xl shadow"
        />
      </div>
      <div className="flex flex-wrap justify-between gap-6 p-6 px-36">
        <div className="flex-1 min-w-[200px] max-w-[250px]">
          <h3 className="text-7xl font-bold mb-2 text-red-500">2.2M</h3>
          <p className="text-4xl">Teens given hygiene information</p>
        </div>
        <div className="flex-1 min-w-[200px] max-w-[250px]">
          <h3 className="text-7xl font-bold mb-2 text-red-500">390</h3>
          <p className="text-4xl">Volunteers</p>
        </div>
        <div className="flex-1 min-w-[200px] max-w-[250px]">
          <h3 className="text-7xl font-bold mb-2 text-red-500">42</h3>
          <p className="text-4xl">Schools Partnered With</p>
        </div>
        <div className="flex-1 min-w-[200px] max-w-[250px]">
          <h3 className="text-7xl font-bold mb-2 text-red-500">32</h3>
          <p className="text-4xl">Businesses Supported</p>
        </div>
      </div>
      <div className="mx-auto w-1/2 p-4 text-center">
        <h3 className="text-7xl font-bold mb-2 text-red-500">20,000</h3>
        <p className="text-4xl">Period Products Provided for Girls in Need</p>
      </div>
      <div className="bg-black text-white px-4">
        <div className="flex flex-wrap items-start justify-center gap-8 p-6">
          <div className="flex-1 min-w-[200px]">
            <h3 className="text-lg font-bold mb-2">About Teens 4 Teens</h3>
            <p className="mb-2">
              No teen should have to choose between their health and their
              education. Teens 4 Teens empowers young women, and their
              economies, globally with period care and menstrual education so
              that no one has to suffer in silence.
            </p>
            <Link to="/about">
              <button className="border border-white text-white px-4 py-2 rounded-full hover:bg-white hover:text-black transition-colors duration-200">
                Learn More
              </button>
            </Link>
          </div>
          <img
            src={image2}
            alt="image"
            className="h-64 object-cover rounded-xl shadow"
          />
          <div className="flex-1 min-w-[200px]">
            <h3 className="text-lg font-bold mb-2">
              Upcoming Projects to Fund
            </h3>
            <p className="mb-2">
              In the last week of every month, chapters:
              <ul className="list-disc">
                <li>
                  Meet for Girls Talk, a safe space to discuss menstrual health
                  and women's experiences.
                </li>
                <li>Provide free pads and tampons for all young women</li>
                <li>
                  Plan and execute community service projects to expand access
                  to menstrual resources
                </li>
              </ul>
            </p>
            <Link to="/donate">
              <button className="border border-white text-white px-4 py-2 rounded-full hover:bg-white hover:text-black transition-colors duration-200">
                Support Us
              </button>
            </Link>
          </div>
        </div>
        <div className="flex flex-wrap items-start justify-center gap-8 p-6">
          <img
            src={image3}
            alt="image"
            className="h-64 object-cover rounded-xl shadow"
          />
          <div className="flex-1 min-w-[200px]">
            <h3 className="text-lg font-bold mb-2">How Can You Help?</h3>
            <p className="mb-2">
              Be the reason a young woman stays in school. $1 can provide
              menstrual products that keep a girl healthy, confident, and
              focused on her future.
              <br />
              <br />
              Give your time, voice, and support and change someone’s world
              today.
            </p>
            <Link to="/take-action">
              <button className="border border-white text-white px-4 py-2 rounded-full hover:bg-white hover:text-black transition-colors duration-200">
                Act Now
              </button>
            </Link>
          </div>
          <img
            src={image4}
            alt="image"
            className="h-64 object-cover rounded-xl shadow"
          />
          <div className="flex-1 min-w-[200px]">
            <h3 className="text-lg font-bold mb-2">Get to Know Us</h3>
            <p className="mb-2">
              Discover how one idea became a movement, and how you can be part
              of the story.
            </p>
            <Link to="/about">
              <button className="border border-white text-white px-4 py-2 rounded-full hover:bg-white hover:text-black transition-colors duration-200">
                Our Team
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-red-500 text-white px-4">
        <div className="text-center">
          <h3 className="text-7xl font-semibold pt-4">HOW WE WORK</h3>
        </div>
        <div className="flex flex-wrap items-center gap-6 p-6">
          <img
            src={image5}
            alt="Example"
            className="w-1/2 h-auto object-cover rounded-xl shadow"
          />
          <div className="flex-1 w-1/2 pr-2">
            <h2 className="text-xl font-bold mb-2">
              Step 1: Connect with schools
            </h2>
            <p className="mb-2">
              Saint Johns High School Chapter
              <br />
              <br />
              Student chapter leaders and faculty mentors facilitate free
              menstrual product distribution and community service events
              monthly.
            </p>
            <Link to="/about">
              <button className="border border-white text-white px-4 py-2 rounded-full hover:bg-white hover:text-black transition-colors duration-200">
                Learn More
              </button>
            </Link>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-6 px-6">
          <div className="flex-1 w-1/2">
            <h2 className="text-xl font-bold mb-2">
              Step 2: Partner With Pharmacies Near Chapters
            </h2>
            <p className="mb-2">
              AB Pharmacy in Liberia
              <br />
              <br />
              Collaborate with local pharmacies in developing economies with
              monthly bulk orders supporting developing economies
            </p>
            <Link to="/about">
              <button className="border border-white text-white px-4 py-2 rounded-full hover:bg-white hover:text-black transition-colors duration-200">
                Learn More
              </button>
            </Link>
          </div>
          <img
            src={image6}
            alt="Example"
            className="w-1/2 h-auto object-cover rounded-xl shadow"
          />
        </div>
        <div className="flex flex-wrap items-center gap-6 p-6">
          <img
            src={image1}
            alt="Example"
            className="w-1/2 h-auto object-cover rounded-xl shadow"
          />
          <div className="flex-1 w-1/2">
            <h2 className="text-xl font-bold mb-2">
              Step 3: Buy and Deliver to Chapters For Young Women and Our
              Community
            </h2>
            <p className="mb-2">
              Bishop Francis Carroll High School
              <br />
              <br />
              We buy from local pharmacies and work with chapter leaders to give
              products to young women who need them, supporting the economy and
              keeping girls healthy, comfortable, and pursuing their education.
            </p>
            <Link to="/about">
              <button className="border border-white text-white px-4 py-2 rounded-full hover:bg-white hover:text-black transition-colors duration-200">
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeContent;
