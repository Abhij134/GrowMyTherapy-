import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { contact } from "@/lib/content";

export const metadata: Metadata = {
  title: "Terms of Service | Dr. Maya Reynolds, PsyD",
  description: "Terms of service and use for Dr. Maya Reynolds, PsyD's website and practice.",
};

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="bg-[#F6F4EE] min-h-screen pt-[140px] pb-20 md:pb-28">
        <div className="site-container">
          <div className="max-w-[800px] mx-auto bg-white/50 backdrop-blur-sm p-8 md:p-14 border border-[#2B2B2B]/5 rounded-xl shadow-[0_4px_24px_rgba(43,43,43,0.02)]">
            <h1 className="font-serif text-[36px] md:text-[48px] text-ink mb-2 leading-tight">Terms of Service</h1>
            <p className="font-sans text-sm text-muted mb-10 tracking-widest uppercase">Last Updated: October 2023</p>
            
            <div className="font-sans text-[15px] leading-[1.8] text-muted space-y-6">
              <p>
                Welcome to the website of Dr. Maya Reynolds, PsyD. By accessing or using this website, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, please do not use our website.
              </p>

              <h2 className="font-serif text-[24px] text-ink mt-10 mb-4">1. No Therapist-Patient Relationship</h2>
              <p>
                The information provided on this website is for educational and informational purposes only. Use of this website, including contacting Dr. Maya Reynolds via email, phone, or contact form, does not establish a therapist-patient relationship. A therapeutic relationship is only formed after an initial consultation, clinical assessment, and the signing of a formal consent for treatment.
              </p>

              <h2 className="font-serif text-[24px] text-ink mt-10 mb-4">2. Medical Emergency</h2>
              <p>
                This website is not intended to provide crisis intervention or emergency services. If you are experiencing a medical or psychiatric emergency, please call 911, go to your nearest emergency room, or contact the National Suicide Prevention Lifeline at 988 immediately.
              </p>

              <h2 className="font-serif text-[24px] text-ink mt-10 mb-4">3. Use of Content</h2>
              <p>
                All content on this website, including text, graphics, logos, and images, is the property of Dr. Maya Reynolds, PsyD or its content suppliers and is protected by applicable copyright laws. You may not reproduce, distribute, or use any materials without explicit written permission.
              </p>

              <h2 className="font-serif text-[24px] text-ink mt-10 mb-4">4. Third-Party Links</h2>
              <p>
                This website may contain links to third-party websites or resources. These links are provided for your convenience only. Dr. Maya Reynolds has no control over the content of these sites and accepts no responsibility for them or for any loss or damage that may arise from your use of them.
              </p>

              <h2 className="font-serif text-[24px] text-ink mt-10 mb-4">5. Contact Information</h2>
              <p>
                If you have any questions about these Terms of Service, please contact us at:
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
