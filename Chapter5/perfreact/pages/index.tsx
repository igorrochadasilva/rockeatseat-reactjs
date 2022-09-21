import type { NextPage } from "next";
import { FormEvent, useCallback, useState } from "react";
import { SearchResults } from "../components/SearchResults";

type Results = {
  totalPrice: number;
  data: any[];
};

const Home: NextPage = () => {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState<Results>({
    totalPrice: 0,
    data: [],
  });

  async function handleSearch(event: FormEvent) {
    event?.preventDefault();

    if (!search.trim()) {
      return;
    }

    const response = await fetch(`http://localhost:3333/products?q=${search}`);
    const data = await response.json();

    const formatter = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    });

    const products = data.map(
      (product: { id: number; title: string; price: number }) => {
        return {
          id: product.id,
          title: product.title,
          price: product.price,
          priceFormatted: formatter.format(product.price),
        };
      }
    );

    const totalPrice = data.reduce(
      (total: number, product: { price: number }) => {
        return total + product.price;
      },
      0
    );

    setResults({ totalPrice, data: products });
  }

  const addToWishList = useCallback(async (id: number) => {
    console.log(id);
  }, []);

  return (
    <div>
      <h1>Search</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit">Buscar</button>
      </form>
      <SearchResults
        results={results.data}
        totalPrice={results?.totalPrice}
        onAddToWishList={addToWishList}
      />
    </div>
  );
};

export default Home;

/**
1. Criar uma nova versão do componente
2. Comparar com a versão anterior
3. Se houverem alterações, vai atualizar o que alterou
*/

/** Memo - quando usar
  1. Pure Functional Components
  2. Componentes que renderizam demais
  3. Re-renders com as mesmas props
  4. medium ou grande
*/

/**
* useMemo | useCallback - quando usar
  1. Calculos pesados
  2. Igualdade referencial (quando repassa aquela informação a um componente filho)

*/
