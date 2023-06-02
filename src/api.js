

export async function fetchShows() {
    try {
      const response = await fetch('https://api.tvmaze.com/search/shows?q=all');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching shows:', error);
      return [];
    }
  }
  