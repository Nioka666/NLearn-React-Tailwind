import Footer from "./layouts/Footer";
import Header from "./layouts/Header";

function Home() {
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
      <Header />
      <main className="mains">
        <section className="cards-section">
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

        <section className="forms-section">
          <form action="" className="forms">
            <h3 className="font-bold text-slate-200 mb-2">Tailwind Forms</h3>
            <label htmlFor="email" className="labels-in-form">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Your Email"
              className="input-field"
            />
            <label htmlFor="username" className="labels-in-form">
              Username
            </label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Your Username"
              className="input-field"
            />
            <label htmlFor="password" className="labels-in-form">
              Password
            </label>
            <input
              type="text"
              name="password"
              id="password"
              placeholder="Your Password"
              className="input-field"
            />
            <button className="submit-btn">Submit</button>
          </form>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Home;
