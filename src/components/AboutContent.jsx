import image8 from "../assets/image8.avif";
import mehekSawhney from "../assets/mehekSawhney.avif";
import ewaOzgaStasiewicz from "../assets/ewaOzgaStasiewicz.avif";
import boycePressly from "../assets/boycePressly.avif";
import arinWani from "../assets/arinWani.avif";
import mehrAnand from "../assets/mehrAnand.avif";
import wcnLogo from "../assets/wcnLogo.avif";
import fjConsultingLogo from "../assets/fjConsultingLogo.avif";
import floremmeHealthLogo from "../assets/floremmeHealthLogo.avif";

function AboutContent() {
  return (
    <div>
      <div className="py-20">
        <div className="p-30 bg-[url('assets/image7.avif')] bg-cover bg-center text-white">
          <h1 className="font-bold text-7xl">ABOUT TEEENS 4 TEENS</h1>
          <p>
            A grassroots movement built by the people to make permanent change,
            not just drop-off menstrual products.
          </p>
        </div>
        <div className="max-w-7xl mx-auto">
          <div className="flex items-top gap-10 py-10">
            <div className="w-1/2">
              <h1 className="text-7xl font-bold pb-4">Mission & History</h1>
              <img className="rounded-xl" src={image8} />
            </div>
            <div className="w-1/2">
              <p>
                Not just a nonprofit, a grassroots movement. That's what founder
                Boyce Pressly envisioned when he launched Teens 4 Teens. What
                began as a small group of Bronx high schoolers collecting
                menstrual products for underserved peers has grown into an
                international network of 42 youth-led chapters. This network is
                driven by a shared mission: Fight for menstrual equity, empower
                young women, and uplift local economies. <br /> <br /> At Teens
                4 Teens, we do things differently. Other initiatives flood
                developing markets with free and foreign aid, bankrupting local
                businesses and creating long-term dependence. We prioritize the
                community and its economic We purchase pads and tampons directly
                from pharmacies in the communities we serve. This means you
                support doesn't only help girls stay in school, it also
                strengthens local supply chains, generates income for small
                businesses, and fosters deep community trust. <br /> <br /> We
                don't believe in charity that disempowers. We believe in
                solidarity that sustains. Each product we deliver is a vote of
                confidence in a girl's future and an investment in a local
                economy's strength. Join us in rewriting the story of global
                giving, one where teens uplift teens, dignity meets development,
                and grassroots power drives permanent change.
              </p>
            </div>
          </div>
          <h1 className="text-7xl font-bold pb-4">OUR TEAM</h1>
        </div>
        <div className="flex gap-4 px-4">
          <div className="relative w-1/5 aspect-square overflow-hidden rounded-lg group">
            <img
              src={mehekSawhney}
              alt="Hover"
              className="w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
            />
            <div className="absolute inset-0 bg-red-500 text-white flex items-center justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              <div className="p-4">
                <h2 className="text-lg font-semibold">Mehek Sawhney</h2>
                <p className="bold">
                  Head of Outreach studying at Harvard with a passion for
                  bolstering Liberian menstrual health and spreading T4T
                  awareness
                </p>
              </div>
            </div>
          </div>
          <div className="relative w-1/5 aspect-square overflow-hidden rounded-lg group">
            <img
              src={ewaOzgaStasiewicz}
              alt="Hover"
              className="w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
            />
            <div className="absolute inset-0 bg-red-500 text-white flex items-center justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              <div className="p-4">
                <h2 className="text-lg font-semibold">Ewa Ozga Stasiewicz</h2>
                <p className="bold">
                  Collaborative Outreach Lead studying Psychology & Behavioral
                  Neuroscience at Hunter College
                </p>
              </div>
            </div>
          </div>
          <div className="relative w-1/5 aspect-square overflow-hidden rounded-lg group">
            <img
              src={boycePressly}
              alt="Hover"
              className="w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
            />
            <div className="absolute inset-0 bg-red-500 text-white flex items-center justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              <div className="p-4">
                <h2 className="text-lg font-semibold">Boyce Pressly</h2>
                <p className="bold">
                  CEO studying at Georgetown's School of Health with a focus on
                  healthcare administration
                </p>
              </div>
            </div>
          </div>
          <div className="relative w-1/5 aspect-square overflow-hidden rounded-lg group">
            <img
              src={arinWani}
              alt="Hover"
              className="w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
            />
            <div className="absolute inset-0 bg-red-500 text-white flex items-center justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              <div className="p-4">
                <h2 className="text-lg font-semibold">Arin Wani</h2>
                <p className="bold">
                  CFO with a background in market forecasting, AI research, and
                  grant writing
                </p>
              </div>
            </div>
          </div>
          <div className="relative w-1/5 aspect-square overflow-hidden rounded-lg group">
            <img
              src={mehrAnand}
              alt="Hover"
              className="w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
            />
            <div className="absolute inset-0 bg-red-500 text-white flex items-center justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              <div className="p-4">
                <h2 className="text-lg font-semibold">Mehr Anand</h2>
                <p className="bold">
                  Internal Operations Manager studying AI and computer science
                  at Northeastern
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto">
          <div className="flex items-top gap-10 py-10">
            <div className="w-1/2">
              <h1 className="text-7xl font-bold pb-4">OUR PARTNERS.</h1>
            </div>
            <div className="w-1/2">
              <p>
                Our partners help us expand our reach, deepen our impact, and
                bring vital resources to the young women we serve. This section
                highlights the incredible organizations and community leaders
                who walk alongside us in our mission to uplift, educate, and
                empower teens. Together, we’re creating permanent change.
              </p>
            </div>
          </div>
          <div className="flex items-top gap-10 py-10">
            <div className="w-1/3">
              <img src={wcnLogo} />
            </div>
            <div className="w-1/3">
              <img src={fjConsultingLogo} />
            </div>
            <div className="w-1/3">
              <img src={floremmeHealthLogo} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutContent;
