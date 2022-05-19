const dablyat = document.querySelector(".trigan")
const oi = document.querySelector(".amfetamin")
let live = ''

dablyat.addEventListener("click", (e) => {
   if (e.target.closest(".solevaya")) {
      live += e.target.textContent
      oi.innerHTML = live
   } else if (e.target.closest(".geroin") && live.substr(0) != '' && e.target.textContent != "=" && live.substr(live.length - 1) != "-" && live.substr(live.length - 1) != "+" && live.substr(live.length - 1) != "*" && live.substr(live.length - 1) != "/") {
      live += e.target.textContent
      oi.innerHTML = live
   } else if (live.substr(1) != '' && live.substr(live.length - 1) != "-" && live.substr(live.length - 1) != "+" && live.substr(live.length - 1) != "*" && live.substr(live.length - 1) != "/") {
      console.log(typeof live);
      console.log(live);
      oi.innerHTML = eval(live)
   }
}) 