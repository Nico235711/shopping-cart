import { Filters } from "./Filters"

export const Header = ({ products, setFilters }) => {

  return (
    <div className="bg-blue-400 py-10 shadow-2xl">
      <header className="max-w-60 md:max-w-2xl lg:max-w-5xl mx-auto">
        <h1 className="text-3xl font-black text-white">React Shop</h1>
        <Filters products={products} setFilters={setFilters} />
      </header>
    </div>
  )
}
