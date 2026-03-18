import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service | Stacked Construction",
  description:
    "Terms of service for Stacked Construction. Review the terms governing your use of our website and services.",
  alternates: {
    canonical: "https://stackedconstruction.co/terms",
  },
};

export default function TermsOfServicePage() {
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
              Terms of{" "}
              <em className="font-light italic text-warm-300">Service</em>
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
              <h2>1. Acceptance of Terms</h2>
              <p>
                By accessing or using the Stacked Construction website at
                stackedconstruction.co (&ldquo;the Site&rdquo;), you agree to be
                bound by these Terms of Service (&ldquo;Terms&rdquo;). If you do
                not agree to these Terms, do not use the Site. Stacked
                Construction (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or
                &ldquo;our&rdquo;) reserves the right to update these Terms at
                any time. Continued use of the Site after changes are posted
                constitutes acceptance of the revised Terms.
              </p>

              <h2>2. Description of Services</h2>
              <p>
                Stacked Construction is a licensed and insured construction
                company (FL License #CBC1269972) specializing in kitchen
                remodeling, bathroom renovation, outdoor living, flooring &amp;
                tile, and full-home renovations in Southwest Florida. The Site
                provides information about our services, a project gallery,
                educational articles, and a contact form for requesting
                estimates.
              </p>

              <h2>3. Use of the Website</h2>
              <p>You agree to use the Site only for lawful purposes. You may not:</p>
              <ul>
                <li>
                  Use the Site in any way that violates applicable federal,
                  state, or local laws
                </li>
                <li>
                  Submit false, misleading, or fraudulent information through
                  any form on the Site
                </li>
                <li>
                  Attempt to gain unauthorized access to any portion of the Site
                  or its systems
                </li>
                <li>
                  Use automated tools to scrape, crawl, or extract data from the
                  Site beyond what is permitted by our robots.txt file
                </li>
                <li>
                  Interfere with or disrupt the Site or its hosting
                  infrastructure
                </li>
              </ul>

              <h2>4. Contact Forms and Communications</h2>
              <p>
                When you submit a contact form or request an estimate through the
                Site, you consent to being contacted by Stacked Construction via
                phone, email, or text message regarding your inquiry. The
                information you provide will be used in accordance with our{" "}
                <a href="/privacy">Privacy Policy</a>.
              </p>
              <p>
                Submitting a contact form does not create a contractual
                obligation on either party. Estimates provided are preliminary
                and subject to change based on in-person assessment, material
                costs, and project scope.
              </p>

              <h2>5. Intellectual Property</h2>
              <p>
                All content on the Site — including text, images, photographs,
                logos, graphics, design elements, and code — is the property of
                Stacked Construction or its licensors and is protected by
                copyright, trademark, and other intellectual property laws. You
                may not reproduce, distribute, modify, or create derivative
                works from any content on the Site without prior written
                permission.
              </p>

              <h2>6. Project Gallery and Photography</h2>
              <p>
                Photos displayed in our project gallery represent actual
                completed projects or design representations. Results may vary
                based on materials, design choices, existing conditions, and
                project scope. Gallery images should not be interpreted as
                guarantees of identical outcomes.
              </p>

              <h2>7. Articles and Educational Content</h2>
              <p>
                Articles, blog posts, and guides published on the Site are
                provided for informational purposes only. They do not constitute
                professional advice, engineering recommendations, or binding
                cost estimates. Always consult directly with a licensed
                contractor for advice specific to your project.
              </p>

              <h2>8. Third-Party Links and Services</h2>
              <p>
                The Site may contain links to third-party websites, tools, or
                services. We do not control or endorse these third parties and
                are not responsible for their content, privacy practices, or
                availability. Your use of third-party services is at your own
                risk.
              </p>

              <h2>9. Analytics and Tracking</h2>
              <p>
                We use third-party analytics and advertising tools, including
                Google Analytics and Meta (Facebook) Pixel, to improve our
                website and marketing. By using the Site, you acknowledge that
                these tools may collect data about your browsing activity as
                described in our <a href="/privacy">Privacy Policy</a>.
              </p>

              <h2>10. Disclaimer of Warranties</h2>
              <p>
                The Site and its content are provided &ldquo;as is&rdquo; and
                &ldquo;as available&rdquo; without warranties of any kind,
                either express or implied. We do not warrant that the Site will
                be uninterrupted, error-free, or free of viruses or other
                harmful components. We disclaim all warranties, including
                implied warranties of merchantability, fitness for a particular
                purpose, and non-infringement.
              </p>

              <h2>11. Limitation of Liability</h2>
              <p>
                To the fullest extent permitted by law, Stacked Construction
                shall not be liable for any indirect, incidental, special,
                consequential, or punitive damages arising out of or related to
                your use of the Site, including but not limited to loss of data,
                revenue, or profits, even if we have been advised of the
                possibility of such damages. Our total liability for any claim
                related to the Site shall not exceed the amount you paid to us,
                if any, for accessing the Site.
              </p>

              <h2>12. Indemnification</h2>
              <p>
                You agree to indemnify, defend, and hold harmless Stacked
                Construction, its owners, employees, and agents from and against
                any claims, liabilities, damages, losses, and expenses arising
                out of your use of the Site or violation of these Terms.
              </p>

              <h2>13. Governing Law</h2>
              <p>
                These Terms are governed by and construed in accordance with the
                laws of the State of Florida, without regard to its conflict of
                law provisions. Any disputes arising from these Terms or your
                use of the Site shall be resolved in the courts of Lee County,
                Florida.
              </p>

              <h2>14. Severability</h2>
              <p>
                If any provision of these Terms is found to be unenforceable or
                invalid, that provision will be limited or eliminated to the
                minimum extent necessary, and the remaining provisions will
                remain in full force and effect.
              </p>

              <h2>15. Contact Us</h2>
              <p>
                If you have questions about these Terms of Service, contact us:
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
