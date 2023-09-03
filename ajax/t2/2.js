async function postData() {
  const url = 'https://reqres.in/api/users';
  const data = {
    name: 'John Doe',
    job: 'Software Developer',
  };

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  const responseData = await response.json();
  console.log('Response data:', responseData);
}

postData();
