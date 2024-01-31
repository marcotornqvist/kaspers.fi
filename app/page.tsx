export default function Home() {
  return (
    <div className="text-center pb-12">
      <h1 className="text-white font-eb-garamond text-5xl mb-8 md:text-6xl md:text-mb-12">
        Website Is Still Under Construction
      </h1>
      <p className="text-center mx-auto text-white font-eb-garamond text-xl md:text-2xl max-w-prose">
        Thank you for visiting. Our site is currently being developed and will
        be available soon. For immediate assistance, please email us at{" "}
        <a href="mailto:kasper@kaspers.fi" className="underline">
          kasper@kaspers.fi
        </a>{" "}
        or call us at
        <a href="tel:+358 44 094 0402" className="underline">
          {" "}
          +358 44 094 0402
        </a>
      </p>
    </div>
  );
}
