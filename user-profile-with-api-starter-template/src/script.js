// Import Axios
// IIFEs Function
(function() {
  // STEP 1: WE DO - Use axios to get random user
  const BASE_URL = "https://randomuser.me/api/";
  axios.get(BASE_URL)
  .then(response=> {
    const data = response.data.results[0];
    renderNavbarAvatar(data);
    renderPersonalInfo(data);
    renderProfile(data);
    console.log('data',data);
  }) 

  // STEP 5: YOU DO - Use axios to get multiple friends
})();

// STEP 2: WE DO - Create renderNavbarAvatar function
function renderNavbarAvatar(data) {
  console.log('data',data);
  // 2-1 select DOM element by querySelector
  const avatar = document.querySelector('[data-target="avatar-thumbnail"]');
  
  avatar.innerHTML = `
        <img src="${data.picture.thumbnail}" alt="avatar">
        <span>${formatName(data.name.first)}</span>
        `
  // 2-2 use innerHTML and template string to render dynamic contents
}

// STEP 3: YOU DO - Create renderProfile function
function renderProfile(data) {
  const profile  = document.querySelector('[data-target="profile"]')
  profile.innerHTML = `
        <img class="avatar" src="${data.picture.medium}" alt="avatar">
        <h3 class="name">${data.name.title,data.name.first}</h3>
  `
}

// STEP 4: renderPeronalInfo
// WE DO - phone, email
// YOU DO - location, birthday
function renderPersonalInfo(data) {
  const personalinfo = document.querySelector('[data-target="personal-info"]')
  personalinfo.innerHTML = `
          <li class="list-group-item">
            <i class="fas fa-envelope fa-fw"></i>
            <span>${data.email}</span>
          </li>

          <li class="list-group-item">
            <i class="fas fa-mobile-alt fa-fw"></i>
            <span>${data.cell}</span>
          </li>

          <li class="list-group-item">
            <i class="fas fa-map-marker-alt fa-fw"></i>
            <span>${data.location.street['name']}, ${data.location.country}</span>
          </li>

          <li class="list-group-item">
            <i class="fas fa-birthday-cake fa-fw"></i>
            <span>${formatDate(data.dob['date'])}</span>
          </li>
  `
}

// STEP 6: Assignments - renderFriends
function renderFriends(data) {
  const frends = "https://randomuser.me/api/";
}

// Utilities
// Search keyword you don't know with "MDN"
function formatName(name) {
  return name.charAt(0).toUpperCase() + name.slice(1);
}

function formatDate(date) {
  return new Date(date).toLocaleDateString("zh-Hant");
}
