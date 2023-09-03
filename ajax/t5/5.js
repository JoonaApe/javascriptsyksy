const tableBody = document.querySelector('tbody');

function populateTable(data) {
  data.forEach(restaurant => {
    const row = document.createElement('tr');

    const nameCell = document.createElement('td');
    nameCell.textContent = restaurant.name;
    nameCell.classList.add('restaurant-name');
    row.appendChild(nameCell);

    const addressCell = document.createElement('td');
    addressCell.textContent = restaurant.address;
    addressCell.classList.add('restaurant-address');
    row.appendChild(addressCell);

    row.addEventListener('click', function () {
      highlightRestaurant(row, restaurant);
    });

    tableBody.appendChild(row);
  });
}

function highlightRestaurant(row, restaurant) {
  const restaurantRows = document.querySelectorAll('tbody tr');
  restaurantRows.forEach(function (r) {
    r.classList.remove('highlight');
  });
  row.classList.add('highlight');

  fetch(
    `https://sodexo-webscrape-r73sdlmfxa-lz.a.run.app/api/v1/restaurants/daily/${restaurant._id}/fi`
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (newData) {
      console.log(newData);
      openModal(restaurant, newData);
    })
    .catch(function (error) {
      console.error('Error fetching additional data:', error);
    });
}
function openModal(restaurant, newData) {
  const modal = document.getElementById('myModal');
  const resName = document.getElementById('modal-restaurant-name');
  const resAddress = document.getElementById('modal-restaurant-address');
  const resPostalcode = document.getElementById('modal-restaurant-postalcode');
  const resCity = document.getElementById('modal-restaurant-city');
  const resPhone = document.getElementById('modal-restaurant-phonenumber');
  const resCompany = document.getElementById('modal-restaurant-company');
  const resFoodList = document.getElementById('modal-food-list');

  resName.innerText = restaurant.name;
  resAddress.innerText = restaurant.address;
  resPostalcode.innerText = restaurant.postalCode;
  resCity.innerText = restaurant.city;
  resPhone.innerText = restaurant.phone;
  resCompany.innerText = restaurant.company;

  resFoodList.innerHTML = '';
  newData.courses.forEach(function (course) {
    const foodItem = document.createElement('p');
    const foodPrice = document.createElement('p');
    const foodDiets = document.createElement('p');
    foodItem.innerText = course.name;
    foodDiets.innerText = course.diets;
    foodPrice.innerText = course.price;
    resFoodList.appendChild(foodItem);
    resFoodList.appendChild(foodPrice);
    resFoodList.appendChild(foodDiets);
  });

  modal.classList.add('open');
}

function closeModal() {
  const modal = document.getElementById('myModal');
  modal.classList.remove('open');
}

fetch('https://sodexo-webscrape-r73sdlmfxa-lz.a.run.app/api/v1/restaurants')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);

    data.sort(function (a, b) {
      return a.name.localeCompare(b.name);
    });

    populateTable(data);
  })
  .catch(function (error) {
    console.error('Error fetching data:', error);
  });
