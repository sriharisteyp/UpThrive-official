import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { AnimatedContainer } from "@/components/ui/animated-container";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col bg-darkBlue">
      <Navbar />
      
      <main className="flex-1 container py-12">
        <AnimatedContainer
          animation="fadeIn"
          className="max-w-4xl mx-auto space-y-8 text-gray-300"
        >
          <h1 className="text-4xl font-bold text-white">Privacy Policy</h1>
          <p className="text-lg">Last updated: May 16, 2025</p>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">1. Introduction</h2>
            <p>
              Welcome to UpThrive ("we," "our," or "us"). We respect your privacy and are committed to protecting your personal data. This privacy policy explains how we collect, use, and protect your information when you use our career guidance platform.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">2. Information We Collect</h2>
            <p>We collect information that you provide directly to us, including:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Name and contact information</li>
              <li>Account credentials</li>
              <li>Professional and educational background</li>
              <li>Skills assessment responses</li>
              <li>Career preferences and goals</li>
              <li>Progress tracking data</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">3. How We Use Your Information</h2>
            <p>We use your information to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Provide personalized career guidance</li>
              <li>Generate skill assessments and roadmaps</li>
              <li>Track your progress</li>
              <li>Improve our services</li>
              <li>Communicate with you about your account and updates</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">4. Data Security</h2>
            <p>
              We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">5. Sharing Your Information</h2>
            <p>We do not sell your personal information. We may share your information with:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Service providers who assist in operating our platform</li>
              <li>Professional partners who provide career opportunities</li>
              <li>Law enforcement when required by law</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">6. Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Access your personal data</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to processing of your data</li>
              <li>Export your data</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">7. Cookies</h2>
            <p>
              We use cookies and similar technologies to enhance your experience on our platform. You can control cookie preferences through your browser settings.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">8. Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy, please contact us at:
              <br />
              Email: privacy@upthrive.com
              <br />
              Address: [Your Business Address]
            </p>
          </section>
        </AnimatedContainer>
      </main>
    </div>
  );
};

export default PrivacyPolicy;
