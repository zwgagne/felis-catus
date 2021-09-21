export interface Cat {
  id: string;
  url: string;
}

interface CatResponse {
  id: string;
  url: string;
  breeds: any[];
  created_at: string;
  height: number;
  original_filename: string;
  sub_id: string;
}

const fetchCats = async (page: number): Promise<Cat[]> => {
  const limit = 8;
  const url = `https://api.thecatapi.com/v1/images/search?limit=${limit}&page=${page}&order=desc`;
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "x-api-key": "1d5781df-cd4c-4a10-bc00-0074569bd309",
    },
  });

  const data: CatResponse[] = await response.json();

  return data.map((cat: CatResponse) => {
    return {
      id: cat.id,
      url: cat.url,
    };
  });
};


export { fetchCats };