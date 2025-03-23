export default function Home() {
  return (
    <section className="grid grid-cols-[120px_120px_1fr_120px_120px] items-center  w-screen min-h-screen pb-20">
      <main className="grid col-start-3 grid-cols-[1fr_1fr] gap-[32px]">
        <div className="col-span-1">
          <h1 className="text-9xl font-bold">
            React <span className="text-lime-300">Sheet</span>
            <span className="text-violet-500">Up</span>
          </h1>
          <p className="my-8 text-4xl font-extralight leading-13">
            Bottom sheets are supplementary surfaces primarily used on mobile
          </p>
          <ul className="list-disc">
            <li className="mt-6 ml-4 text-xl font-light leading-8">
              Standard bottom sheets display content that complements the
              screen’s primary content. They remain visible while users interact
              with the primary content.
            </li>
            <li className="mt-6 ml-4 text-xl font-light leading-8">
              They remain visible while users interact with the primary content.
              Modal bottom sheets are an alternative to inline menus or simple
              dialogs on mobile and provide room for additional items, longer
              descriptions, and iconography. They must be dismissed in order to
              interact with the underlying content.
            </li>
            <li className="mt-6 ml-4 text-xl font-light leading-8">
              Expanding bottom sheets provide a small, collapsed surface that
              can be expanded by the user to access a key feature or task. They
              offer the persistent access of a standard sheet with the space and
              focus of a modal sheet.
            </li>
          </ul>
        </div>
        <div className="col-span-1">
          <h1>React </h1>
        </div>
      </main>
    </section>
  );
}
