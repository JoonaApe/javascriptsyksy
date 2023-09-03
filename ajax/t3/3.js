async function fetchData() {
  try {
    const url = 'https://reqres.in/api/unknown/23';
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`GET request failed! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log('GET Response data:', data);
  } catch (error) {
    console.error('Error:', error);
  }
}
fetchData();
