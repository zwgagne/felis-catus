class someCat {
  async fetchsomeCat() {
    const url = `https://api.thecatapi.com/v1/images/search?limit=80&page=1&order=desc`;
    const response = await fetch(url);
    return await response.json();
  }
}

export default new someCat();