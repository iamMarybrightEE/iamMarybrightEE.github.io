let header = document.querySelector(".site-header");
let image = document.querySelector(".brand-name");



window.onscroll = function(){
    let scrollLength = this.pageYOffset;
    if(scrollLength > 0){
        header.classList.add("fixed"); 
        image.src = "./images/fave pictures black.png";
    }
    else{
        header.classList.remove("fixed");
        image.src = "./images/fave pictures.png"
    }
}
const form = document.querySelector(".newsletter-form");
const former = document.querySelector(".booking-form");

form.addEventListener("submit", e => {
    e.preventDefault();


    const now = new Date();
    const newsletter = {
        email: form.email.value,
        created_at: firebase.firestore.Timestamp.fromDate(new Date())
    };
    firebase.firestore().collection("newsletter").add(newsletter).then(()=>{
        console.log("info added")
    }).catch(err => {
        console.log(err)
    })
    form.reset();
});
former.addEventListener("submit", e => {
    e.preventDefault();


    const now = new Date();
    const booking = {
        fullname: former.fullname.value,
        phone: former.phone.value,
        email: former.email.value,
        packages: former.packages.value,
        date: former.date.value,
        time: former.time.value,
        created_at: firebase.firestore.Timestamp.fromDate(new Date())
    };
    firebase.firestore().collection("bookings").add(booking).then(()=>{
        console.log("new booking")
    }).catch(err => {
        console.log(err)
    })
    former.reset();
});


const popup = document.querySelector(".popup-wrapper");
const closeup = document.querySelector(".popup-close");
const mappy = document.querySelector(".maps");
const viewer = document.querySelector(".image-popup");
const closer = document.querySelector(".popup-closeimg");
const show = document.querySelectorAll("gallery-image");
const shower = document.querySelector("gallery-preview");



mappy.addEventListener("click", () => {
    popup.style.display = "block";
});
closeup.addEventListener("click", () => {
    popup.style.display = "none";
});
popup.addEventListener("click", () => {
    popup.style.display = "none";
});
// Image Preview Logic
// const galPreview = getElem(".gallery-preview"), galThumb = getElems(".gallery-thumb");
// galThumb.forEach(function(img){
//     // img.onclick = function(e){}
//     img.onclick = e => {
//         // galPreview.src = img.src;
//         // for(let eachImage of galThumb) eachImage.className = "gallery-thumb";
//         // img.classList.toggle("thumb-active");
//         // img.setAttribute("class", "gallery-thumb thumb-active");
//         // img.className = "gallery-thumb thumb-active";
//         viewer.style.display = "block";
//     }
// });
// show.forEach(img => {
//     img.addEventListener("click", (e) => {
//     viewer.style.display = "none";
//     // shower.src = img.src;

// })
// })
// closer.addEventListener("click", () => {
//     viewer.style.display = "none";
// });
// viewer.addEventListener("click", () => {
//     viewer.style.display = "none";
// });


{/* <script>
	// init controller
	var controller = new ScrollMagic.Controller();
</script>
<style type="text/css">
#animate1 {
	transition: transform 0.3s ease-out;
}
.zap {
	transform: scale(2.5, 0);
}
</style>
<div class="spacer s2"></div>
<div id="trigger1" class="spacer s0"></div>
<div id="animate1" class="box1 red">
	<p>Zap.</p>
	<a href="#" class="viewsource">view source</a>
</div>
<div class="spacer s2"></div>
<script>
	// build scene
	var scene = new ScrollMagic.Scene({triggerElement: "#trigger1"})
					// trigger animation by adding a css class
					.setClassToggle("#animate1", "zap")
					.addIndicators({name: "1 - add a class"}) // add indicators (requires plugin)
					.addTo(controller);
</script> */}
