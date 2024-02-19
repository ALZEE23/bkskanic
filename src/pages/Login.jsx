export default function Login() {
  return (
    <>
      <section className="w-full h-full bg-blue flex">
        <div className="mx-auto grid border my-20 sm:my-24 sm:py-16 py-8 sm:px-12 rounded-lg gap-3 bg-slate-50 sm:w-[25rem] w-80">
          <h1 className="mx-auto capitalize text-2xl sm:text-3xl font-bold">
            sign in
          </h1>
          <h2 className="mx-auto text-lg sm:text-xl">dont have an account?</h2>
          <div className="mx-auto">
            <label htmlFor="email">
              <h1 className="mb-3 text-lg font-semibold">Email</h1>
              <input
                type="email"
                className="px-2 py-2 rounded-md sm:w-80 w-64"
                placeholder="Email"
              />
            </label>
          </div>
          <div className="mx-auto ">
            <label htmlFor="password">
              <h1 className="mb-3 font-semibold text-lg">Password</h1>
              <input
                type="password"
                className="py-2 px-2 rounded-md sm:w-80 w-64"
                placeholder="Password"
              />
            </label>
          </div>
          <div className="mx-auto mt-5">
            <button className="rounded-md bg-cyan-700 px-10 py-2 items-center">
              <a
                href="/dashboard"
                className="text-lg text-slate-100 items-center font-semibold"
              >
                sign in
              </a>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
