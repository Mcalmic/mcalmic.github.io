export function HomeSection() {
  return (
    <section id="home" className="scroll-section min-h-screen bg-neutral-950 flex flex-col items-center justify-center p-8">
      <div className="w-full max-w-screen-md mx-auto px-8 xl:max-w-screen-lg">
        <header className="mb-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-neutral-200">
            Hi, I&apos;m <span className="text-violet-400">Michael</span>
          </h1>
        </header> 
        <div className="justify-center">
          <h2 className="text-3xl font-semibold text-neutral-200 mb-4">About Me</h2>
          <p className="text-2xl text-neutral-200">
            I&apos;m a college student studying Linguistics and Computer Science. I like web development & game development. I also play a lot of the Pokemon Card Game and TFT.
          </p>
        </div>
      </div>
    </section>
  );
}
