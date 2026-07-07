// card
let products = [];

fetch("../products.json")
  .then((response) => response.json())
  .then((data) => {
    products = data;

    let html = "";

    data.forEach((product) => {
      html += `
    <div class="col">
   <div class="card h-100 shadow-sm border-0 rounded-4">

        <img
          src="${product.image}"
          class="card-img-top img-fluid "
          style="height:400px"
          alt="${product.name}">

        <div class="card-body d-flex flex-column">

          <h5 class="card-title">${product.name}</h5>

          <p class="card-text text-truncate">
            ${product.description}
          </p>

          <button
            class="btn btn-primary mt-auto"
            onclick="showCard(${product.id})">
            More
          </button>

        </div>

      </div>
    </div>
  `;
    });

    document.getElementById("productList").innerHTML = html; //all cards display (#productList)
  })
  .catch((error) => console.log(error));

function showCard(id) {
  let product = products.find((p) => p.id === id);

  if (!product) {
    console.log("Product not found");
    return;
  }

  document.getElementById("detailsCard").innerHTML = `

    <div class="card shadow">

      <img src="${product.image}"
      class="card-img-top"
      style="height:400px;object-fit:cover">

      <div class="card-body text-center">

        <h4 class="card-title">
          ${product.name} Details
        </h4>

        <p class="card-text">
          ${product.details}
        </p>

        <ul class="list-group mb-3 text-start">

          <li class="list-group-item">
            Material: ${product.material}
          </li>

          <li class="list-group-item">
            Color: ${product.color}
          </li>

          <li class="list-group-item">
            Size: ${product.size}
          </li>

          <li class="list-group-item">
            Price: ${product.price}
          </li>

        </ul>

        <button class="btn btn-success">
          Add To Cart
        </button>

        <button class="btn btn-danger"
        onclick="closeCard()">
          Close
        </button>

      </div>

    </div>

  `;

  document.getElementById("detailsCard").classList.remove("d-none");

  document.getElementById("overlay").classList.remove("d-none");

  document.body.style.overflow = "hidden";
}

function closeCard() {
  document.getElementById("detailsCard").classList.add("d-none");

  document.getElementById("overlay").classList.add("d-none");

  document.body.style.overflow = "auto";
}

// form
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const contact = {
    name: this.name.value,
    email: this.email.value,
    phone: this.phone.value,
    message: this.message.value,
  };

  let contacts = JSON.parse(localStorage.getItem("contacts")) || [];

  contacts.push(contact);

  localStorage.setItem("contacts", JSON.stringify(contacts));

  document.getElementById("showName").textContent = contact.name;
  document.getElementById("showEmail").textContent = contact.email;
  document.getElementById("showPhone").textContent = contact.phone;
  document.getElementById("showMessage").textContent = contact.message;

  document.getElementById("displayBox").style.display = "flex";

  this.reset();
});

document.getElementById("closeBox").addEventListener("click", function () {
  document.getElementById("displayBox").style.display = "none";
});

document.getElementById("displayBox").addEventListener("click", function (e) {
  if (e.target === this) {
    this.style.display = "none";
  }
});
