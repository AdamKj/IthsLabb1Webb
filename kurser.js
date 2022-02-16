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

function addCourse() {
  const courseNumber = document.getElementById("course-number").value;
  const courseTitle = document.getElementById("course-title").value;
  const courseInfo = document.getElementById("course-info").value;
  const courseLength = document.getElementById("course-length").value;
  const coursePrice = document.getElementById("course-price").value;
  const courseImg = document.getElementById("btnAttachment").value;

  let content = `
    <div class="col">
        <div class="card">
          <img
            src="${courseImg}"
            class="card-img-top" alt="..." id="course-img" />
          <div class="card-body">
            <div class="shop-item">
              <h5 class="shop-item-title">${courseTitle}</h5>
              <p class="course-length"><b>${courseLength}</b></p>
              <p class="card-text">
                ${courseInfo}
                <p class="shop-item-price">${coursePrice}</p>
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

function openAttachment() {
  document.getElementById("attachment").click();
}

function fileSelected(input) {
  document.getElementById("btnAttachment").value = input.files[0].name;
}
