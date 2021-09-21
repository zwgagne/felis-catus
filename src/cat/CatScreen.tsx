import React, { useEffect, useState } from "react";
import { Cat, fetchCats } from "./api/CatApi";
import CatImage from "./components/CatImage";

const CatScreen: React.FC = () => {
  const [cats, setCats] = useState<Cat[]>([]);
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    const updateCatsValue = async (): Promise<void> => {
      const cats: Promise<Cat[]> = fetchCats(1);

      setCats(await cats);
    };

    updateCatsValue();
  }, [page]);

  const goToNextPage = (): void => {
    setPage(page + 1);
  };

  return (
    <>
      <h1>MEOOOOWEVERYYYYWHERE</h1>

      {cats.map((cat: Cat) => (
        <CatImage url={cat.url} key={cat.id} />
      ))}

      <button onClick={goToNextPage}>NEXT</button>
    </>
  );
};

export default CatScreen;