export default function Pricing() {
  const stats = [
    { value: '120', unit: '%', label: 'Avg. Growth Increase' },
    { value: '0.8', unit: 's', label: 'Avg. Load Speed' },
    { value: '15', unit: '+', label: 'Design Awards' },
    { value: '100', unit: '%', label: 'Organic Precision' },
  ];

  return (
    <section className="py-8 md:py-20 bg-[#fbf9f4] border-b border-[#c1c8c2]/10">
      <div className="px-4 md:px-16 max-w-[1280px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 text-center">
        {stats.map((stat, i) => (
          <div key={stat.label} className={`reveal reveal-delay-${i + 1}`}>
            <span className="block text-[38px] md:text-[64px] font-bold text-[#00190d] mb-1 md:mb-2 leading-none tracking-[-0.04em]">
              {stat.value}
              <span className="text-[#775a19]">{stat.unit}</span>
            </span>
            <span className="text-[10px] md:text-[11px] font-semibold text-[#414843] uppercase tracking-[0.12em]">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
