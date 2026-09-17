import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { contact } from "@/lib/content";

export const metadata: Metadata = {
  title: "Disclaimer | Dr. Maya Reynolds, PsyD",
  description: "Medical and professional disclaimer for Dr. Maya Reynolds, PsyD.",
};

export default function DisclaimerPage() {
  return (
    <>
      <Navbar />
      <main className="bg-[#F6F4EE] min-h-screen pt-[140px] pb-20 md:pb-28">
        <div className="site-container">
          <div className="max-w-[800px] mx-auto bg-white/50 backdrop-blur-sm p-8 md:p-14 border border-[#2B2B2B]/5 rounded-xl shadow-[0_4px_24px_rgba(43,43,43,0.02)]">
            <h1 className="font-serif text-[36px] md:text-[48px] text-ink mb-2 leading-tight">Disclaimer</h1>
            <p className="font-sans text-sm text-muted mb-10 tracking-widest uppercase">Last Updated: October 2023</p>
            
            <div className="font-sans text-[15px] leading-[1.8] text-muted space-y-6">
              <p>
                The information contained on this website is provided by Dr. Maya Reynolds, PsyD for general informational and educational purposes only.
              </p>

              <h2 className="font-serif text-[24px] text-ink mt-10 mb-4">Not Medical or Psychological Advice</h2>
              <p>
                The content on this website, including text, graphics, images, and information, is not intended to be a substitute for professional medical or psychological advice, diagnosis, or treatment. Always seek the advice of your physician, psychologist, or other qualified health provider with any questions you may have regarding a medical or psychological condition. Never disregard professional medical advice or delay in seeking it because of something you have read on this website.
              </p>

              <h2 className="font-serif text-[24px] text-ink mt-10 mb-4">No Therapeutic Relationship</h2>
              <p>
                Reading this website or communicating with Dr. Maya Reynolds via email or through the contact form does not create a therapist-patient relationship. A therapeutic relationship is only established after an initial consultation and the signing of an informed consent document.
              </p>

              <h2 className="font-serif text-[24px] text-ink mt-10 mb-4">Accuracy of Information</h2>
              <p>
                While we strive to keep the information on this website accurate and up-to-date, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose. Any reliance you place on such information is therefore strictly at your own risk.
              </p>
              
              <h2 className="font-serif text-[24px] text-ink mt-10 mb-4">Emergencies</h2>
              <p>
                If you think you may have a medical emergency or are experiencing a crisis, call your doctor, go to the nearest hospital emergency department, or call 911 immediately. If you are experiencing suicidal thoughts, you can also contact the National Suicide Prevention Lifeline at 988.
              </p>

              <h2 className="font-serif text-[24px] text-ink mt-10 mb-4">Contact</h2>
              <p>
                For any questions regarding this disclaimer, please contact us:
              </p>
              <ul className="list-none space-y-2 mt-2">
                <li><strong>Address:</strong> {contact.address}</li>
                <li><strong>Phone:</strong> {contact.phone}</li>
                <li><strong>Email:</strong> <a href={`mailto:${contact.email}`} className="text-primary hover:underline">{contact.email}</a></li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
