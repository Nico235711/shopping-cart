import { Filters } from "./Filters"

export const Header = () => {

  return (
    <div className="bg-blue-400 py-10">
      <header className="max-w-60 md:max-w-2xl lg:max-w-5xl mx-auto">
        <h1 className="text-3xl font-black text-[rgb(56 56 56)]">React Shop🛒</h1>
        <Filters />
      </header>
    </div>
  )
}
