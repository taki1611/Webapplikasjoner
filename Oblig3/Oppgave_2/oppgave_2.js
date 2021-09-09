import './styles.css';
import { users } from './util';


const searchInput = document.getElementById('name');
const filterInput = document.getElementById('age');
const filterButton = document.getElementById('filter');
const userUI = document.getElementById('users');

const createTableUI = (users) => {
  userUI.innerHTML = null;
  userUI.innerHTML += '<li><span>Id</span><span>Navn</span><span>Alder</span></li>';
    for (var i = 0; i < users.length; i++) {
      userUI.innerHTML += '<li><span>${user.id}</span><span>${user.name}</span><span>${user.age}</span></li>';
    }
};

const handleSearch = () => {
  const searchName = searchInput.value;
  if (searchName) {
    const searchResult = users.find((user));
    if (searchResult) {
    createTableUI([searchResult]);
    } else {
        userUI.innerHTML = "Fant ingen med navn ${searchName}";
    }
  } else {
        //if(searchResult = null) {   //usikker på om man skulle bruke en if statement her.
            createTableUI(users);
        //}
  }
};

const handleFilter = () => {
    const filterValue = filterInput.value;
  if (filterValue && (typeof filterValue === 'number')) {
    const filterResult = users.filter((user) => user.age > filterValue);
    if (filterResult && filterResult.length > 0) {
      createTableUI([filterResult]);
    } else {
      userUI.innerHTML = "Fant ingen over ${filterValue} år";
    }
  } else {
      createTableUI(users);
  }
};

const main = () => {
    createTableUI(users);
};

main();

searchInput.addEventListener("keyup", handleSearch);
filterButton.addEventListener("click", handleFilter);
