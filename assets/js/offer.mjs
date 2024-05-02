import data from "../../data/data.mjs";
let imgOffer = document.querySelector('.offer_img');
let id_offer = localStorage.getItem('id_offer');
let device = document.getElementById('device');
let category = document.getElementById('category');
let date = document.getElementById('date');
let btn_start_offer_first = document.getElementById('btn_start_offer');
let btn_start_offer_last = document.getElementById('btn_start_offer__');
let title_offer = document.getElementById('title_offer');
let description_offer = document.getElementById('description_offer');

let offer = data.filter((o) => o.id === +id_offer);

imgOffer.src = offer[0].imgLocker;
title_offer.innerHTML = offer[0].title;
description_offer.innerHTML = offer[0].description;

device.innerHTML = offer[0].device;
category.innerHTML = offer[0].category;
date.innerHTML = offer[0].date;
btn_start_offer_first.href = offer[0].link_locker;
btn_start_offer_last.href = offer[0].link_locker;