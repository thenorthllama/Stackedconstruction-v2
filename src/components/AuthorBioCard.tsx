import Link from "next/link";
import type { AuthorData } from "@/data/authors";

export default function AuthorBioCard({ author }: { author: AuthorData }) {
  const initial = author.name.charAt(0);

  return (
    <div
      className="mt-16 border-t border-warm-200 pt-12"
      itemScope
      itemType="https://schema.org/Person"
    >
      <p className="mb-6 eyebrow text-warm-600">
        About the Author
      </p>

      <div className="flex items-start gap-6">
        {/* Avatar */}
        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-warm-900">
          <span className="font-display text-2xl font-bold text-white" aria-hidden="true">
            {initial}
          </span>
        </div>

        {/* Content */}
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <Link
              href={`/about/${author.slug}`}
              className="font-display text-xl font-bold text-warm-900 transition-colors hover:text-warm-600"
              rel="author"
              itemProp="url"
            >
              <span itemProp="name">{author.name}</span>
            </Link>
            <span className="text-sm text-warm-600" itemProp="jobTitle">
              {author.title}
            </span>
          </div>

          <p className="mt-3 text-base leading-relaxed text-warm-700" itemProp="description">
            {author.shortBio}
          </p>

          {/* Credentials — the trust signals */}
          <div className="mt-4 flex flex-wrap gap-3">
            {author.credentials.map((cred) => (
              <span
                key={cred.label}
                className="inline-flex items-center gap-1.5 rounded-full border border-warm-200 bg-warm-50 px-3 py-1 text-sm font-medium text-warm-700"
              >
                {cred.verifyUrl ? (
                  <a
                    href={cred.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 transition-colors hover:text-warm-900"
                    aria-label={`Verify ${cred.label}: ${cred.value}`}
                  >
                    <svg className="h-3 w-3 text-green-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {cred.value}
                  </a>
                ) : (
                  <>
                    <svg className="h-3 w-3 text-warm-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {cred.value}
                  </>
                )}
              </span>
            ))}
          </div>

          {/* Footer links */}
          <div className="mt-5 flex items-center gap-4">
            <Link
              href={`/about/${author.slug}`}
              className="text-sm font-semibold text-warm-900 transition-colors hover:text-warm-600"
            >
              Full bio →
            </Link>
            {author.instagram && (
              <a
                href={author.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-warm-600 transition-colors hover:text-warm-900"
                aria-label={`${author.name} on Instagram`}
              >
                Instagram
              </a>
            )}
            {author.linkedin && (
              <a
                href={author.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-warm-600 transition-colors hover:text-warm-900"
                aria-label={`${author.name} on LinkedIn`}
              >
                LinkedIn
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
