import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { contact } from "@/lib/content";

export const metadata: Metadata = {
  title: "Privacy Policy | Dr. Maya Reynolds, PsyD",
  description: "Privacy policy detailing how Dr. Maya Reynolds, PsyD handles your personal information.",
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="bg-[#F6F4EE] min-h-screen pt-[140px] pb-20 md:pb-28">
        <div className="site-container">
          <div className="max-w-[800px] mx-auto bg-white/50 backdrop-blur-sm p-8 md:p-14 border border-[#2B2B2B]/5 rounded-xl shadow-[0_4px_24px_rgba(43,43,43,0.02)]">
            <h1 className="font-serif text-[36px] md:text-[48px] text-ink mb-2 leading-tight">Privacy Policy</h1>
            <p className="font-sans text-sm text-muted mb-10 tracking-widest uppercase">Last Updated: October 2023</p>
            
            <div className="font-sans text-[15px] leading-[1.8] text-muted space-y-6">
              <p>
                Dr. Maya Reynolds, PsyD ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website.
              </p>

              <h2 className="font-serif text-[24px] text-ink mt-10 mb-4">1. Information We Collect</h2>
              <p>
                We may collect personal information that you voluntarily provide to us when expressing an interest in obtaining information about our services. The personal information we collect may include:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Any other information you choose to provide in your inquiry</li>
              </ul>

              <h2 className="font-serif text-[24px] text-ink mt-10 mb-4">2. How We Use Your Information</h2>
              <p>
                We use the information we collect primarily to communicate with you, schedule consultations, and respond to your inquiries. We do not sell, rent, or lease your personal information to third parties.
              </p>

              <h2 className="font-serif text-[24px] text-ink mt-10 mb-4">3. Health Information and HIPAA</h2>
              <p>
                Please note that standard email and website contact forms are not entirely secure methods of communication. To protect your privacy, we recommend that you do not share sensitive protected health information (PHI) through our website contact form or standard email. Any clinical records maintained after you become a client will be protected in compliance with the Health Insurance Portability and Accountability Act (HIPAA). A separate Notice of Privacy Practices regarding your medical records will be provided to you upon becoming a client.
              </p>

              <h2 className="font-serif text-[24px] text-ink mt-10 mb-4">4. Cookies and Tracking</h2>
              <p>
                Our website may use "cookies" and similar tracking technologies to analyze trends, administer the website, and track users' movements around the site. You can control the use of cookies at the individual browser level.
              </p>

              <h2 className="font-serif text-[24px] text-ink mt-10 mb-4">5. Contact Us</h2>
              <p>
                If you have questions or comments about this Privacy Policy, please contact us at:
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
