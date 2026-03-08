import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "InYoung Labs Terms of Service – the rules governing use of our website and products.",
};

const lastUpdated = "March 1, 2025";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-neutral-50 border-b border-neutral-100 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-4xl font-semibold text-neutral-900">Terms of Service</h1>
          <p className="mt-3 text-sm text-neutral-400">Last updated: {lastUpdated}</p>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-10 text-neutral-600 leading-relaxed">
          <section>
            <h2 className="font-serif text-2xl font-semibold text-neutral-900 mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing or using the InYoung Labs website at inyounglabs.com (the "Site") or
              purchasing any products from InYoung Labs, Inc. ("InYoung," "we," "us," or "our"),
              you agree to be bound by these Terms of Service ("Terms"). If you do not agree to
              these Terms, do not use the Site or purchase our products.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold text-neutral-900 mb-4">2. Use of the Site</h2>
            <p className="mb-3">You agree to use the Site only for lawful purposes and in a manner that does not:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Violate any applicable local, state, national, or international law or regulation</li>
              <li>Infringe the rights of others, including intellectual property or privacy rights</li>
              <li>Transmit any unsolicited or unauthorized advertising or promotional material</li>
              <li>Attempt to gain unauthorized access to any portion of the Site</li>
              <li>Interfere with or disrupt the integrity or performance of the Site</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold text-neutral-900 mb-4">3. Accounts</h2>
            <p>
              To access certain features of the Site, you may be required to create an account. You
              are responsible for maintaining the confidentiality of your account credentials and
              for all activities that occur under your account. You agree to notify us immediately
              of any unauthorized use of your account at{" "}
              <a href="mailto:support@inyounglabs.com" className="text-brand-600 hover:underline">
                support@inyounglabs.com
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold text-neutral-900 mb-4">4. Products and Orders</h2>
            <p className="mb-3">
              All product descriptions, pricing, and availability are subject to change without
              notice. We reserve the right to limit quantities, refuse orders, and cancel orders at
              our discretion.
            </p>
            <p>
              Prices are in US dollars and do not include applicable taxes or shipping fees, which
              will be calculated at checkout.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold text-neutral-900 mb-4">5. Subscription and Billing</h2>
            <p className="mb-3">
              Some products are available on a monthly subscription basis. By subscribing, you
              authorize us to charge your payment method on a recurring monthly basis until you
              cancel.
            </p>
            <p>
              You may cancel your subscription at any time by logging into your account or
              contacting us. Cancellations take effect at the end of the current billing period; we
              do not provide prorated refunds for partial billing periods.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold text-neutral-900 mb-4">6. Returns and Refunds</h2>
            <p>
              We offer a 30-day satisfaction guarantee on your first order of any product. If you
              are not satisfied, contact us within 30 days of delivery for a full refund. Subsequent
              orders are eligible for exchange or store credit only. Products must be returned
              unused to qualify for a refund.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold text-neutral-900 mb-4">7. Health Disclaimer</h2>
            <p className="mb-3">
              The information on this Site, including the health assessment and supplement
              recommendations, is for general informational purposes only and is not a substitute
              for professional medical advice, diagnosis, or treatment. Always seek the advice of
              your physician or other qualified health provider with any questions you may have
              regarding a medical condition or before starting any new supplement regimen.
            </p>
            <p>
              These statements have not been evaluated by the Food and Drug Administration. InYoung
              products are not intended to diagnose, treat, cure, or prevent any disease.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold text-neutral-900 mb-4">8. Intellectual Property</h2>
            <p>
              All content on the Site, including text, graphics, logos, images, and software, is
              the property of InYoung Labs, Inc. and is protected by applicable intellectual
              property laws. You may not reproduce, distribute, or create derivative works from any
              content on the Site without our prior written consent.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold text-neutral-900 mb-4">9. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by applicable law, InYoung Labs, Inc. shall not be
              liable for any indirect, incidental, special, consequential, or punitive damages
              arising out of or relating to your use of the Site or our products, even if we have
              been advised of the possibility of such damages.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold text-neutral-900 mb-4">10. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of the
              State of Delaware, without regard to its conflict of law provisions. Any disputes
              arising under these Terms shall be subject to the exclusive jurisdiction of the courts
              located in Delaware.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold text-neutral-900 mb-4">11. Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. We will notify you of
              material changes by updating the "Last updated" date at the top of this page. Your
              continued use of the Site after any changes constitutes your acceptance of the revised
              Terms.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold text-neutral-900 mb-4">12. Contact Us</h2>
            <p>
              If you have questions about these Terms, please contact us at:
            </p>
            <address className="not-italic mt-3 text-neutral-600">
              InYoung Labs, Inc.<br />
              <a href="mailto:legal@inyounglabs.com" className="text-brand-600 hover:underline">
                legal@inyounglabs.com
              </a>
            </address>
          </section>
        </div>
      </div>
    </div>
  );
}
