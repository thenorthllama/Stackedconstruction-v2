// Static hero headline — the offer, stated plainly.
// StoryBrand: an offer above the fold, not a mood. The previous rotating-word
// animation ("Building Spaces / Homes / Stories") was replaced because it
// delayed comprehension and said nothing about what we actually do.

function AnimatedHero() {
  return (
    <h1 className="font-display text-5xl leading-[0.95] font-bold tracking-tight text-white sm:text-6xl lg:text-7xl xl:text-8xl">
      From idea to
      <br />
      <em className="not-italic">finished home</em>
    </h1>
  );
}

export { AnimatedHero };
