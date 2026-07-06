export default function PagesHeader({ bgImage, title }) {
  return (
    <div
      className="relative flex justify-center items-center bg-cover bg-center w-full h-75 md:h-130"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/60 to-black/80" />

      <div className="z-10 relative px-4 pt-20 md:pt-30 text-white text-center">
        {title && (
          <h1 className="font-bold text-3xl md:text-6xl tracking-wide sm:ext-4xl">
            {title}
          </h1>
        )}
      </div>
    </div>
  );
}
