export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-black px-6"
    >
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
          I design intelligent systems
          <br />
          <span className="text-cyan-400">
            that think, adapt, and scale.
          </span>
        </h1>

        <p className="mt-6 text-gray-400 max-w-xl">
          Modular AI architectures, adaptive logic, and real-world systems
          engineered with control and clarity.
        </p>

        <div className="mt-8 flex gap-4">
          <a
            href="#projects"
            className="px-6 py-3 bg-cyan-400 text-black rounded-lg"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-cyan-400 rounded-lg"
          >
            Contact
          </a>
        </div>
      </div>
    </section>
  );
}
