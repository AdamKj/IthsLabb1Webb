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
            src="https://thumbs.dreamstime.com/b/people-library-persons-reading-books-sitting-chair-students-studying-college-knowledge-university-library-people-151404232.jpg"
            class="card-img-top" alt="..." />
          <div class="card-body">
            <div class="shop-item">
              <h5 class="shop-item-title">${courses.kurstitel}</h5>
              <p class="course-length"><b>${courses.kurslängd}</b></p>
              <p class="card-text">
                ${courses.kursbeskrivning}
                <p class="shop-item-price">${courses.kurspris}</p>
                <button type="button" class="btn btn-add btn-primary" data-bs-toggle="modal"
                  data-bs-target="#reg-modal">
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
