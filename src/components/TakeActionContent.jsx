function TakeActionContent() {
  return (
    <div className="py-20">
      <div className="p-30 bg-[url('assets/image7.avif')] bg-cover bg-center text-white">
        <h1 className="font-bold text-7xl">
          JOIN THE FIGHT <span className="text-red-600">TODAY!</span>
        </h1>
        <p>
          Our movement needs your support. become a community leader today by
          volunteering your time.
        </p>
      </div>
      <div className="mx-auto max-w-7xl">
        <div className="flex items-top py-20">
          <div className="w-1/2">
            <h1 className="text-7xl font-bold">PROJECTS TO SUPPORT.</h1>
          </div>
          <div className="w-1/2">
            We appreciate your interest in supporting our fight for menstrual
            equity via community based solutions. Explore ways to impact our
            community and yours below.
          </div>
        </div>
        <div className="flex items-top gap-3 pb-20">
          <div class="w-1/3">
            <h2 className="text-3xl font-bold text-red-500">
              One-Time Volunteer
            </h2>
            <p>
              Serve our young women with T4T <br /> <br />
              Contribute to local Teens 4 Teens initiatives to fuel change in
              communities here and abroad
            </p>
          </div>
          <div class="w-1/3">
            <h2 className="text-3xl font-bold text-red-500">
              Join Leadership Team
            </h2>
            <p>
              Help administrate T4T operations <br /> <br />
              Touch the lives of girls across the world through your work. Make
              organization-level change through managing chapters and
              facilitating fundraising, giving, and media
            </p>
          </div>
          <div class="w-1/3">
            <h2 className="text-3xl font-bold text-red-500">
              One-Time Volunteer
            </h2>
            <p>
              Open a chapter, represent T4T <br /> <br />
              Plan community service projects, create safe spaces to talk about
              menstrual health, and make a meaningful impact on your community
            </p>
          </div>
        </div>
        <div className="border-2 rounded-xl">
          <div className="flex m-10 items-top">
            <div className="w-1/2">
              <h1 className="text-5xl font-bold">MAKE AN IMPACT.</h1>
            </div>
            <div className="w-1/2">
              <p>
                Enter your information to apply here and we will send you a
                response within 5 business days with more details.
              </p>
            </div>
          </div>
          <form className="p-6 rounded space-y-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <label className="block text-sm font-medium mb-1">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  required
                  className="w-full border-b focus:outline-none focus:border-red-500 px-1 py-2"
                />
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium mb-1">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  required
                  className="w-full border-b focus:outline-none focus:border-red-500 px-1 py-2"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                name="email"
                required
                className="w-full border-b focus:outline-none focus:border-red-500 px-1 py-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Country</label>
              <input
                type="text"
                name="country"
                className="w-full border-b focus:outline-none focus:border-red-500 px-1 py-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">School</label>
              <input
                type="text"
                name="school"
                className="w-full border-b focus:outline-none focus:border-red-500 px-1 py-2"
              />
            </div>
            <fieldset>
              <legend className="text-sm font-medium mb-2">
                Volunteer Opportunity Selection
              </legend>
              <div className="space-y-2">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="opportunity"
                    value="one-time"
                    className="text-red-600 focus:ring-red-500"
                  />
                  One time volunteer
                </label>

                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="opportunity"
                    value="ambassador"
                    className="text-red-600 focus:ring-red-500"
                  />
                  Become an ambassador
                </label>

                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="opportunity"
                    value="leadership"
                    className="text-red-600 focus:ring-red-500"
                  />
                  Join our leadership team
                </label>
              </div>
            </fieldset>
            <div>
              <label className="block text-sm font-medium mb-1">
                Tell us why you're interested in contributing to T4T
              </label>
              <textarea
                name="motivation"
                rows="4"
                className="w-full border-b border-gray-300 focus:outline-none focus:border-red-500 px-1 py-2 resize-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-red-500 text-white py-2 px-4 rounded-full hover:bg-red-600 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default TakeActionContent;
