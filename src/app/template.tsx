// Next.js remounts template.tsx on every navigation (unlike layout.tsx),
// so the CSS fade below re-runs on each route change as well as first load.
// Styling is a single opacity keyframe in globals.css — no JS, no layout shift.

export default function Template({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="page-fade">{children}</div>;
}
