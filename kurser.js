const jsonReq = new Request("kurser.json");

const courses = [];

class Kurs {
  constructor(input) {
    this.kursnummer = input.kursnummer;
    this.kurstitel = input.kurstitel;
    this.kursbeskrivning = input.kursbeskrivning;
    this.kurslängd = input.kurslängd;
    this.kurspris = input.kurspris;
    this.kursbildurl = input.kursbildurl;
  }
}

function populateList(input) {
  for (let i = 0; i < input.length; i++) {
    const courses = input[i];
    let content = `
    <div class="col">
        <div class="card">
          <img
            src=${courses.kursbildurl}
            class="card-img-top" alt="..." />
          <div class="card-body">
            <div class="shop-item">
              <h5 class="shop-item-title">${courses.kurstitel}</h5>
              <p class="course-length"><b>${courses.kurslängd}</b></p>
              <p class="card-text">
                ${courses.kursbeskrivning}
                <p class="shop-item-price">${courses.kurspris}</p>
                <button type="button" class="btn btn-add btn-primary">
                  Lägg i kundkorg
                </button>
              </p>
            </div>
          </div>
        </div>
        </div>
        `;
    document.getElementById("courses").innerHTML += content;
  }
  var addToCartButton = document.getElementsByClassName("btn-add");
  for (var i = 0; i < addToCartButton.length; i++) {
    var button = addToCartButton[i];
    button.addEventListener("click", addToCart);
  }
}

fetch(jsonReq)
  .then((Response) => Response.json())
  .then((data) => {
    for (let i = 0; i < data.length; i++) {
      const course = new Kurs(data[i]);
      courses.push(course);
    }
    populateList(courses);
  });

function addCourse(num, title, info, length, price, img) {
  num = document.getElementById("course-number").value;
  title = document.getElementById("course-title").value;
  info = document.getElementById("course-info").value;
  length = document.getElementById("course-length").value;
  price = document.getElementById("course-price").value;
  img = document.getElementById("btnAttachment").value;

  alert("Success! Kursen har blivit tillagd.");
  let content = `
    <div class="col">
        <div class="card">
          <img
            src="${img}"
            class="card-img-top" alt="..." id="course-img" />
          <div class="card-body">
            <div class="shop-item">
              <h5 class="shop-item-title">${title}</h5>
              <p class="course-length"><b>${length}</b></p>
              <p class="card-text">
                ${info}
                <p class="shop-item-price">${price}</p>
                <button type="button" class="btn btn-add btn-primary">
                  Lägg i kundkorg
                </button>
              </p>
            </div>
          </div>
        </div>
        </div>
        `;
  document.getElementById("courses").innerHTML += content;
  var addToCartButton = document.getElementsByClassName("btn-add");
  for (var i = 0; i < addToCartButton.length; i++) {
    var button = addToCartButton[i];
    button.addEventListener("click", addToCart);
  }
}

function emptyValues() {
  document.getElementById("course-number").value = "";
  document.getElementById("course-title").value = "";
  document.getElementById("course-info").value = "";
  document.getElementById("course-length").value = "";
  document.getElementById("course-price").value = "";
}

function canAddCourse() {
  document.getElementById("add-course").onclick = function () {
    var modal = document.getElementById("course-modal");
    let allAreFilled = true;
    document
      .getElementById("new-course")
      .querySelectorAll("[required]")
      .forEach(function (i) {
        if (!allAreFilled) return;
        if (!i.value) {
          allAreFilled = false;
          return;
        }
      });
    if (!allAreFilled) return;
    addCourse();
    emptyValues();
    modal.style.display = "none";
  };
}

function openAttachment() {
  document.getElementById("attachment").click();
}

function fileSelected(input) {
  document.getElementById("btnAttachment").value = input.files[0].name;
}
