
const Stats = () => {
  const stats = [
    { number: "10K+", label: "Happy Customers" },
    { number: "500+", label: "Certified Mechanics" },
    { number: "50+", label: "Cities Covered" },
    { number: "4.9", label: "Average Rating" }
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-orange-500">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
          {stats.map((stat, index) => (
            <div key={index} className="hover:scale-110 transition-transform duration-300">
              <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
              <div className="text-lg opacity-90">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;