export default function About() {
  const brands = ['AESTHETICA', 'LINEN & CO.', 'STRUCTURE', 'ELIXIR', 'ORGANIX'];

  return (
    <section
      id="about"
      className="py-6 md:py-12 bg-[#fbf9f4] border-y border-[#c1c8c2]/20 overflow-hidden"
    >
      <div className="px-4 md:px-16 max-w-[1280px] mx-auto flex flex-wrap justify-between items-center opacity-40 grayscale gap-4 md:gap-8">
        {brands.map((brand) => (
          <span
            key={brand}
            className="text-[15px] md:text-[22px] font-bold tracking-tighter text-[#00190d] whitespace-nowrap"
          >
            {brand}
          </span>
        ))}
      </div>
    </section>
  );
}
