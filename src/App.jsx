function App() {
  const cardNumber = [
    {
      number: 1,
    },
    {
      number: 2,
    },
  ];

  return (
    <>
      <header>
        <div className="container flex h-36 mx-auto my-10 bg-indigo-950 rounded-xl border-2 border-indigo-300">
          <h2 className="m-auto font-extrabold text-4xl text-indigo-100">
            Starting Tailwind CSS
          </h2>
        </div>
      </header>
      <main className="container grid mx-auto gap-9">
        <section className="cards-section flex mx-auto gap-7">
          {cardNumber.map((card) => (
            <>
              <div className="card w-1/2 bg-indigo-950 rounded-xl p-8 border-2 border-indigo-300 grid">
                <h1 className="font-semibold text-indigo-100 text-xl">
                  Card {card.number}
                </h1>
                <h5 className="text-slate-500 font-bold text-sm mt-px">
                  this is date formats
                </h5>
                <p className="text-slate-400 text-sm mt-2 font-medium">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Cumque illo distinctio tenetur laudantium quidem vitae maxime
                  voluptatibus vero, necessitatibus sequi, iure ullam voluptatem
                  porro id officiis dolor recusandae, magnam animi.
                </p>
              </div>
            </>
          ))}
        </section>

        <section className="forms-section w-full bg-indigo-950 rounded-xl border-2 border-indigo-300 p-5 flex justify-center">
          <form action="" className="grid mx-auto w-1/2 gap-5 py-9">
          <h1 className="font-bold text-slate-200 mb-2 text-2xl">
            Tailwind Forms
          </h1>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Your Email"
              className="rounded-lg p-4 w-full bg-indigo-950 border-2 border-indigo-300 outline-none focus:ring ring-indigo-900 text-indigo-100"
            />
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Your Username"
              className="rounded-lg p-4 w-full bg-indigo-950 border-2 border-indigo-300 outline-none focus:ring ring-indigo-900 text-indigo-100"
            />
          </form>
        </section>
      </main>
      <footer className="h-44"></footer>
    </>
  );
}

export default App;
