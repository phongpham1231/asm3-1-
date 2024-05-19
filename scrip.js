"use strict";

//Thong tin user
const btnSubmit = document.querySelector(".btn-submit");
btnSubmit.addEventListener("click", function () {
  //lay email chuyen sang in thuong
  const emailValue = document.getElementById("email").value.toLocaleLowerCase();
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const errormail = document.querySelector(".error-email");
  const check = emailValue.match(regex);
  const sectionCOntent = document.querySelector(".thongtin");
  const content = document.querySelector(".canhan");
  const submitemail = document.querySelector(".submit-email");
  content.style.display = "none";

  if (check) {
    content.style.display = "block";
    sectionCOntent.style.display = "block";
    submitemail.style.display = "none";
    errormail.innerHTML = "";
  } else {
    content.style.display = "none";
    errormail.innerHTML = "pls enter valid mail";
    errormail.style.color = "red";
  }
});
//view more
const viewmore = document.querySelector(".view-button");
const job = document.querySelector(".job-item");

const viewMoreBtns = document.querySelectorAll(".view-more");
viewMoreBtns.forEach(viewMoreBtn => {
  viewMoreBtn.addEventListener("click", function () {
    const jobItem = viewMoreBtn.parentElement.querySelector(".job-item");
    if (viewMoreBtn.innerHTML == "view more") {
      viewMoreBtn.textContent = "view less"
      jobItem.style.display = "block"
    } else {
      viewMoreBtn.textContent = "view more"
      jobItem.style.display = "none"
    }
  });
})
