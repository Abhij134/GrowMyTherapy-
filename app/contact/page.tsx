import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Contact | Dr. Maya Reynolds, PsyD",
  description: "Get in touch to schedule a free 15-minute consultation.",
};

export default function ContactPage() {
  return (
    <>
      {/* Note: In a real app we might pass a prop to Navbar to make it transparent, 
          but we will keep it as is for now, just adding padding to main */}
      <Navbar />

      <main className="bg-[#F6F4EE] min-h-screen pt-32 pb-32">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-16 mt-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-27">

            {/* LEFT COLUMN: Info */}
            <div className="lg:col-span-5 relative lg:-left-18 mt-0 lg:mt-10">
              <h1 className="font-serif text-[3rem] md:text-[3.5rem] text-ink leading-[1] mb-8 font-light flex items-baseline whitespace-nowrap gap-3">
                <span>Get</span>
                <span className="font-script text-[3.2rem] md:text-[4rem] text-[#85A6A2]">in touch</span>
                <span>.</span>
              </h1>

              <p className="font-sans text-[1rem] leading-[1.7] text-ink/80 mb-16 max-w-[380px]">
                Use this form to tell us more about what brings you to therapy.
                We'll respond within 24 hours to match you with the therapist
                whose expertise and availability best aligns with your needs &
                goals.
              </p>

              <hr className="border-t border-ink/10 mb-12 max-w-[380px]" />

              <div className="flex flex-col gap-6 font-sans text-[1rem] text-ink/80">
                <p className="leading-relaxed">
                  925 Broadbeck Dr Suite 225<br />
                  Newbury Park, CA 91320
                </p>
                <p className="leading-relaxed">
                  info@conejovalleycounseling.com<br />
                  805.242.3120
                </p>
              </div>
            </div>

            {/* RIGHT COLUMN: Form */}
            <div className="lg:col-span-7">
              <form className="flex flex-col gap-8">

                {/* NAME */}
                <fieldset>
                  <legend className="font-sans text-[1.05rem] text-ink mb-4">Name</legend>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[0.75rem] text-ink/50 mb-1 block">First Name <span className="lowercase">(required)</span></label>
                      <input
                        type="text"
                        className="w-full bg-white border border-ink p-3 outline-none focus:border-ink transition-colors"
                        required
                      />
                    </div>
                    <div>
                      <label className="text-[0.75rem] text-ink/50 mb-1 block">Last Name <span className="lowercase">(required)</span></label>
                      <input
                        type="text"
                        className="w-full bg-white border border-ink p-3 outline-none focus:border-ink transition-colors"
                        required
                      />
                    </div>
                  </div>
                </fieldset>

                {/* EMAIL */}
                <div>
                  <label className="font-sans text-[1.05rem] text-ink mb-1 block">
                    Email <span className="text-[0.75rem] text-ink/50 ml-1">(required)</span>
                  </label>
                  <input
                    type="email"
                    className="w-full bg-white border border-ink p-3 outline-none focus:border-ink transition-colors mt-2"
                    required
                  />
                </div>

                {/* PHONE */}
                <div>
                  <label className="font-sans text-[1.05rem] text-ink mb-1 block">
                    Phone <span className="text-[0.75rem] text-ink/50 ml-1">(required)</span>
                  </label>
                  <input
                    type="tel"
                    className="w-full bg-white border border-ink p-3 outline-none focus:border-ink transition-colors mt-2"
                    required
                  />
                </div>

                {/* TELEHEALTH OR IN-PERSON */}
                <div>
                  <label className="font-sans text-[1.05rem] text-ink mb-1 block">
                    Are you looking for telehealth or in-person therapy? <span className="text-[0.75rem] text-ink/50 ml-1">(required)</span>
                  </label>
                  <div className="relative mt-2">
                    <select className="w-full bg-white border border-ink p-3 outline-none focus:border-ink transition-colors appearance-none cursor-pointer" required>
                      <option value="">Select an option</option>
                      <option value="telehealth">Telehealth</option>
                      <option value="in-person">In-person</option>
                      <option value="both">Both/Flexible</option>
                    </select>
                    <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                      <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L7 7L13 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* HOW DID YOU HEAR */}
                <div>
                  <label className="font-sans text-[1.05rem] text-ink mb-1 block">
                    How did you hear about our practice? <span className="text-[0.75rem] text-ink/50 ml-1">(required)</span>
                  </label>
                  <div className="relative mt-2">
                    <select className="w-full bg-white border border-ink p-3 outline-none focus:border-ink transition-colors appearance-none cursor-pointer" required>
                      <option value="">Select an option</option>
                      <option value="google">Google / Search Engine</option>
                      <option value="psychology-today">Psychology Today</option>
                      <option value="referral">Friend or Colleague Referral</option>
                      <option value="other">Other</option>
                    </select>
                    <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                      <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L7 7L13 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* INSURANCE */}
                <div>
                  <label className="font-sans text-[1.05rem] text-ink mb-1 block">
                    Please provide the name of your insurance company: <span className="text-[0.75rem] text-ink/50 ml-1">(required)</span>
                  </label>
                  <p className="text-[0.75rem] text-ink/60 mb-2">If you do not plan to use insurance, please write "None".</p>
                  <input
                    type="text"
                    className="w-full bg-white border border-ink p-3 outline-none focus:border-ink transition-colors"
                    required
                  />
                </div>

                {/* PRESENTING ISSUES */}
                <div>
                  <label className="font-sans text-[1.05rem] text-ink mb-1 block">
                    What are the presenting issues? <span className="text-[0.75rem] text-ink/50 ml-1">(required)</span>
                  </label>
                  <p className="text-[0.75rem] text-ink/60 mb-2">Note: Please do not provide any personal information in this form.</p>
                  <textarea
                    className="w-full bg-white border border-ink p-3 h-32 outline-none focus:border-ink transition-colors resize-none"
                    required
                  ></textarea>
                </div>

                {/* MINOR */}
                <div>
                  <label className="font-sans text-[1.05rem] text-ink mb-1 block">
                    If the counseling is for a minor, please provide their age:
                  </label>
                  <input
                    type="text"
                    className="w-full bg-white border border-ink p-3 outline-none focus:border-ink transition-colors mt-2"
                  />
                </div>

                {/* CLINICIAN */}
                <div>
                  <label className="font-sans text-[1.05rem] text-ink mb-1 block">
                    Are you interested in working with a particular clinician? <span className="text-[0.75rem] text-ink/50 ml-1">(required)</span>
                  </label>
                  <p className="text-[0.75rem] text-ink/60 mb-2">If so, choose their name below. If not, select "None."</p>
                  <div className="relative">
                    <select className="w-full bg-white border border-ink p-3 outline-none focus:border-ink transition-colors appearance-none cursor-pointer" required>
                      <option value="">Select an option</option>
                      <option value="none">None</option>
                      <option value="dr-maya">Dr. Maya Reynolds</option>
                    </select>
                    <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                      <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L7 7L13 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* AVAILABILITY */}
                <div>
                  <label className="font-sans text-[1.05rem] text-ink mb-1 block">
                    We see clients the same day and time each week. Please provide some consistent days and times that work for you: <span className="text-[0.75rem] text-ink/50 ml-1">(required)</span>
                  </label>
                  <input
                    type="text"
                    className="w-full bg-white border border-ink p-3 outline-none focus:border-ink transition-colors mt-2"
                    required
                  />
                </div>

                {/* SUBMIT */}
                <div className="pt-6">
                  <button
                    type="submit"
                    className="inline-block text-[0.8rem] tracking-[0.15em] uppercase font-sans text-ink border-b border-ink pb-1 hover:text-[#556359] hover:border-[#556359] transition-colors"
                  >
                    SUBMIT
                  </button>
                </div>

              </form>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
