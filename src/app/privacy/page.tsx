import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | Stacked Construction",
  description:
    "Privacy policy for Stacked Construction. Learn how we collect, use, and protect your personal information.",
  alternates: {
    canonical: "https://stackedconstruction.co/privacy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main>
        {/* ── Hero ─────────────────────────────────────────────── */}
        <section className="bg-warm-900 pt-32 pb-20 lg:pt-40 lg:pb-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.3em] text-warm-500">
              Legal
            </p>
            <h1 className="max-w-3xl font-display text-5xl font-bold leading-[0.95] text-white sm:text-6xl lg:text-7xl">
              Privacy{" "}
              <em className="font-light italic text-warm-300">Policy</em>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-warm-400">
              Last updated: March 17, 2026
            </p>
          </div>
        </section>

        {/* ── Content ──────────────────────────────────────────── */}
        <section className="bg-white py-24 lg:py-36">
          <div className="mx-auto max-w-3xl px-6 lg:px-10">
            <div className="prose-warm">
              <h2>1. Introduction</h2>
              <p>
                Stacked Construction (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or
                &ldquo;our&rdquo;) operates the website at
                stackedconstruction.co. This Privacy Policy explains how we
                collect, use, disclose, and safeguard your information when you
                visit our website, submit a contact form, or otherwise interact
                with our services. By using our website, you agree to the
                practices described in this policy.
              </p>

              <h2>2. Information We Collect</h2>

              <h3>2.1 Information You Provide</h3>
              <p>
                When you fill out a contact form, request an estimate, or
                otherwise communicate with us, we may collect:
              </p>
              <ul>
                <li>Full name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Project details and messages you submit</li>
                <li>Address or location (if voluntarily provided)</li>
              </ul>

              <h3>2.2 Information Collected Automatically</h3>
              <p>
                When you visit our website, certain information is collected
                automatically through cookies, tracking pixels, and similar
                technologies, including:
              </p>
              <ul>
                <li>IP address and approximate geographic location</li>
                <li>Browser type, device type, and operating system</li>
                <li>Pages visited, time spent on pages, and navigation paths</li>
                <li>Referring website or source</li>
                <li>Date and time of visits</li>
              </ul>

              <h3>2.3 Third-Party Analytics and Tracking</h3>
              <p>We use the following third-party services on our website:</p>
              <ul>
                <li>
                  <strong>Google Analytics / Google Tag Manager:</strong> To
                  analyze website traffic, user behavior, and measure the
                  effectiveness of our marketing. Google may collect data
                  including cookies, device identifiers, and IP addresses. See{" "}
                  <a
                    href="https://policies.google.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Google&apos;s Privacy Policy
                  </a>
                  .
                </li>
                <li>
                  <strong>Meta (Facebook) Pixel:</strong> To measure advertising
                  effectiveness, deliver targeted ads, and track conversions
                  from Facebook and Instagram. Meta may collect data including
                  cookies, browsing activity, and device information. See{" "}
                  <a
                    href="https://www.facebook.com/privacy/policy/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Meta&apos;s Privacy Policy
                  </a>
                  .
                </li>
              </ul>

              <h2>3. How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul>
                <li>Respond to your inquiries and provide estimates</li>
                <li>Communicate with you about projects and services</li>
                <li>Improve our website, content, and user experience</li>
                <li>Analyze website traffic and marketing performance</li>
                <li>Deliver relevant advertising through third-party platforms</li>
                <li>Maintain internal business records and CRM systems</li>
                <li>Comply with legal obligations</li>
              </ul>

              <h2>4. How We Share Your Information</h2>
              <p>
                We do not sell your personal information. We may share your data
                with:
              </p>
              <ul>
                <li>
                  <strong>Service providers:</strong> Third-party tools we use
                  for analytics, advertising, CRM, email communication, and form
                  processing (e.g., Google, Meta, n8n, or similar platforms).
                </li>
                <li>
                  <strong>Legal requirements:</strong> If required by law,
                  subpoena, or government request.
                </li>
                <li>
                  <strong>Business transfers:</strong> In connection with a
                  merger, acquisition, or sale of assets.
                </li>
              </ul>

              <h2>5. Cookies and Tracking Technologies</h2>
              <p>
                Our website uses cookies and similar tracking technologies to
                collect information and improve your experience. These include:
              </p>
              <ul>
                <li>
                  <strong>Essential cookies:</strong> Required for basic website
                  functionality.
                </li>
                <li>
                  <strong>Analytics cookies:</strong> Help us understand how
                  visitors interact with our website (e.g., Google Analytics).
                </li>
                <li>
                  <strong>Advertising cookies:</strong> Used to deliver relevant
                  ads and measure campaign performance (e.g., Meta Pixel).
                </li>
              </ul>
              <p>
                You can control cookies through your browser settings. Disabling
                cookies may affect the functionality of certain features on our
                website.
              </p>

              <h2>6. Data Retention</h2>
              <p>
                We retain personal information for as long as necessary to
                fulfill the purposes outlined in this policy, maintain business
                records, and comply with legal obligations. Contact form
                submissions and project inquiry data may be retained
                indefinitely for business continuity and follow-up purposes.
              </p>

              <h2>7. Data Security</h2>
              <p>
                We implement reasonable administrative, technical, and physical
                safeguards to protect your personal information. However, no
                method of transmission over the internet or electronic storage
                is 100% secure, and we cannot guarantee absolute security.
              </p>

              <h2>8. Your Rights</h2>
              <p>Depending on your jurisdiction, you may have the right to:</p>
              <ul>
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your personal information</li>
                <li>Opt out of marketing communications</li>
                <li>Opt out of targeted advertising and tracking</li>
              </ul>
              <p>
                To exercise any of these rights, contact us at{" "}
                <a href="mailto:info@stackedconstruction.co">
                  info@stackedconstruction.co
                </a>{" "}
                or call{" "}
                <a href="tel:+12397850166">(239) 785-0166</a>.
              </p>

              <h2>9. Third-Party Links</h2>
              <p>
                Our website may contain links to third-party websites or
                services. We are not responsible for the privacy practices of
                those third parties. We encourage you to review their privacy
                policies before providing any personal information.
              </p>

              <h2>10. Children&apos;s Privacy</h2>
              <p>
                Our website is not directed to individuals under the age of 18.
                We do not knowingly collect personal information from children.
                If we learn that we have collected information from a child
                under 18, we will take steps to delete it promptly.
              </p>

              <h2>11. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. Changes
                will be posted on this page with an updated &ldquo;Last
                updated&rdquo; date. Your continued use of the website after
                changes are posted constitutes acceptance of the revised policy.
              </p>

              <h2>12. Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy or how we handle
                your data, contact us:
              </p>
              <ul>
                <li>
                  <strong>Email:</strong>{" "}
                  <a href="mailto:info@stackedconstruction.co">
                    info@stackedconstruction.co
                  </a>
                </li>
                <li>
                  <strong>Phone:</strong>{" "}
                  <a href="tel:+12397850166">(239) 785-0166</a>
                </li>
                <li>
                  <strong>Location:</strong> Fort Myers, FL 33901
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
