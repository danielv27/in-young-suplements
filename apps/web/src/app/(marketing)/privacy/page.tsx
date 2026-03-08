import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "InYoung Labs Privacy Policy – how we collect, use, and protect your data.",
};

const lastUpdated = "March 1, 2025";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-neutral-50 border-b border-neutral-100 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-4xl font-semibold text-neutral-900">Privacy Policy</h1>
          <p className="mt-3 text-sm text-neutral-400">Last updated: {lastUpdated}</p>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 prose prose-neutral">
        <div className="space-y-10 text-neutral-600 leading-relaxed">
          <section>
            <h2 className="font-serif text-2xl font-semibold text-neutral-900 mb-4">1. Introduction</h2>
            <p>
              InYoung Labs, Inc. ("InYoung," "we," "us," or "our") respects your privacy. This
              Privacy Policy describes how we collect, use, disclose, and safeguard information when
              you visit our website inyounglabs.com (the "Site") or use our services. Please read
              this policy carefully. If you disagree with its terms, please discontinue use of the
              Site.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold text-neutral-900 mb-4">2. Information We Collect</h2>
            <p className="mb-3">We may collect information about you in a variety of ways, including:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Personal Data:</strong> When you create an account or complete our
                assessment, we may collect personally identifiable information such as your name,
                email address, and date of birth.
              </li>
              <li>
                <strong>Health Assessment Data:</strong> Our assessment collects health-related
                information including age, sex, skin type, energy levels, stress, and nutrition
                habits to generate personalized supplement recommendations.
              </li>
              <li>
                <strong>Purchase Data:</strong> If you make a purchase, we collect billing and
                shipping information. Payment card data is processed by our payment provider and is
                not stored on our servers.
              </li>
              <li>
                <strong>Usage Data:</strong> We automatically collect certain information when you
                visit the Site, including IP address, browser type, pages visited, and referring
                URLs, via cookies and similar technologies.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold text-neutral-900 mb-4">3. How We Use Your Information</h2>
            <p className="mb-3">We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide, operate, and maintain our services</li>
              <li>Generate personalized supplement recommendations</li>
              <li>Process transactions and send related information</li>
              <li>Send transactional and promotional communications (you may opt out at any time)</li>
              <li>Improve and personalize your experience on the Site</li>
              <li>Comply with legal obligations</li>
            </ul>
            <p className="mt-3">
              We do not sell your personal data or health assessment data to third parties.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold text-neutral-900 mb-4">4. Disclosure of Your Information</h2>
            <p className="mb-3">We may share your information with:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Service Providers:</strong> Third-party vendors who assist with payment
                processing, email delivery, analytics, and hosting. These parties are bound by
                confidentiality obligations and may not use your data for their own purposes.
              </li>
              <li>
                <strong>Legal Requirements:</strong> If required by law, court order, or
                governmental authority, we may disclose your information.
              </li>
              <li>
                <strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale
                of assets, your data may be transferred to the acquiring entity.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold text-neutral-900 mb-4">5. Cookies and Tracking</h2>
            <p>
              We use cookies and similar tracking technologies to track activity on our Site and to
              improve your experience. You can instruct your browser to refuse all cookies or to
              indicate when a cookie is being sent. However, some features of the Site may not
              function properly without cookies.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold text-neutral-900 mb-4">6. Data Retention</h2>
            <p>
              We retain your personal data for as long as your account is active or as needed to
              provide you services. You may request deletion of your account and associated data at
              any time by contacting us at{" "}
              <a href="mailto:privacy@inyounglabs.com" className="text-brand-600 hover:underline">
                privacy@inyounglabs.com
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold text-neutral-900 mb-4">7. Security</h2>
            <p>
              We implement industry-standard security measures to protect your information.
              However, no method of transmission over the internet or method of electronic storage
              is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold text-neutral-900 mb-4">8. Your Rights</h2>
            <p className="mb-3">
              Depending on your jurisdiction, you may have the right to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access the personal data we hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to or restrict processing of your data</li>
              <li>Data portability</li>
            </ul>
            <p className="mt-3">
              To exercise any of these rights, contact us at{" "}
              <a href="mailto:privacy@inyounglabs.com" className="text-brand-600 hover:underline">
                privacy@inyounglabs.com
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold text-neutral-900 mb-4">9. Children&apos;s Privacy</h2>
            <p>
              Our Site is not directed to individuals under the age of 18. We do not knowingly
              collect personal information from children. If you become aware that a child has
              provided us with personal data, please contact us immediately.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold text-neutral-900 mb-4">10. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any
              material changes by updating the "Last updated" date at the top of this page. Your
              continued use of the Site after any changes constitutes your acceptance of the revised
              policy.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold text-neutral-900 mb-4">11. Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy, please contact us at:
            </p>
            <address className="not-italic mt-3 text-neutral-600">
              InYoung Labs, Inc.<br />
              <a href="mailto:privacy@inyounglabs.com" className="text-brand-600 hover:underline">
                privacy@inyounglabs.com
              </a>
            </address>
          </section>
        </div>
      </div>
    </div>
  );
}
