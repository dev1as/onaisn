import data from "../../data/data.mjs";

let space_offers = document.querySelector(".space_offers");

data.forEach((offer) => {
  space_offers.innerHTML += `
    <div class="col-xl-3 col-lg-4 col-md-6">
        <a href="offer.html" class="details-link" id="offer_list" data-id=${offer.id}>
            <div class="gallery-item h-100">
                <img src="${offer.imgLocker}" class="img-fluid" alt="">
            </div>
        </a>
    </div>
    `;
});

let offer_list = document.querySelectorAll('#offer_list');

for(let offer of offer_list) {
    let id_offer = offer.dataset.id;
    offer.addEventListener('click', () => {
        localStorage.setItem('id_offer', id_offer);
    });
};