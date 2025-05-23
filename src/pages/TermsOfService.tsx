import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { AnimatedContainer } from "@/components/ui/animated-container";

const TermsOfService = () => {
  return (
    <div className="min-h-screen flex flex-col bg-darkBlue">
      <Navbar />
      
      <main className="flex-1 container py-12">
        <AnimatedContainer
          animation="fadeIn"
          className="max-w-4xl mx-auto space-y-8 text-gray-300"
        >
          <h1 className="text-4xl font-bold text-white">Terms of Service</h1>
          <p className="text-lg">Last updated: May 16, 2025</p>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">1. Acceptance of Terms</h2>
            <p>
              By accessing and using UpThrive's services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">2. Service Description</h2>
            <p>
              UpThrive provides a career guidance platform that includes:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Skills assessment tools</li>
              <li>Career path recommendations</li>
              <li>Personalized learning roadmaps</li>
              <li>Progress tracking tools</li>
              <li>Career resources and guidance</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">3. User Accounts</h2>
            <p>You are responsible for:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Maintaining the confidentiality of your account</li>
              <li>All activities that occur under your account</li>
              <li>Providing accurate and current information</li>
              <li>Notifying us of any unauthorized use</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">4. User Conduct</h2>
            <p>You agree not to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Violate any applicable laws or regulations</li>
              <li>Impersonate any person or entity</li>
              <li>Interfere with the platform's functionality</li>
              <li>Share account credentials</li>
              <li>Use the service for unauthorized commercial purposes</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">5. Intellectual Property</h2>
            <p>
              All content, features, and functionality of UpThrive are owned by us and are protected by international copyright, trademark, and other intellectual property laws.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">6. Subscription and Payments</h2>
            <p>
              Some features of UpThrive may require a paid subscription. Payment terms, refund policies, and subscription details are provided at the time of purchase.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">7. Limitation of Liability</h2>
            <p>
              UpThrive provides career guidance tools but does not guarantee specific employment outcomes. We are not liable for any decisions made based on our recommendations.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">8. Modifications</h2>
            <p>
              We reserve the right to modify these terms at any time. Continued use of the service after changes constitutes acceptance of the new terms.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">9. Termination</h2>
            <p>
              We may terminate or suspend your account for violations of these terms. You may terminate your account at any time by contacting us.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">10. Contact</h2>
            <p>
              For questions about these Terms of Service, please contact us at:
              <br />
              Email: legal@upthrive.com
              <br />
              Address: [Your Business Address]
            </p>
          </section>
        </AnimatedContainer>
      </main>
    </div>
  );
};

export default TermsOfService;
