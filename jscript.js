var element1 = document.getElementById("presidential-suite-card-body-id");
var element2 = document.getElementById("junior-suite-card-body-id");
var element3 = document.getElementById("deluxe-card-body-id");
var boourstaybackDrop = document.getElementById("bookurstay-backdrop-id");
var contact = document.getElementById("contact-back");
var locall = document.getElementById("local-backdrop");
var servicesme = document.getElementById("services-backdrop");
var servicesmain = document.getElementById("col-id");
var servicessub = document.getElementById("sub-col-id");
var diningback = document.getElementById("dining-backdrop");
var roomsback = document.getElementById("rooms-backdrop");
var width = window.innerWidth;
var today = new Date();
var time = today.getHours();
console.log(time);
if(time<=12)
{
    document.getElementById("styless").setAttribute("href","css/styles.css");
}
else{
    document.getElementById("styless").setAttribute("href","css/styles_night.css");
}

window.addEventListener("load", () => {
    if (document.getElementById("styless").getAttribute("href") == "css/styles_night.css") {
        var width = window.innerWidth;
        if (width <= 330) {
            element1.innerHTML = "Starting from $3000 per night, the Presidential Suite is the most luxurious option available at the Grand Budapest Hotel.";
            element2.innerHTML = "Starting from $1200 per night, and provides an exquisite experience of the Grand Budapest Hotel.";
            element3.innerHTML = "Starting from $500 per night, the Deluxe Room provides basic experience of the Hotel.";
            document.getElementById("bookurstay-heading-id").style.fontSize = "35px";
            document.getElementById("local-main-heading-id").style.fontSize = "35px";
            document.getElementById("rooms-heading-main-id").style.fontSize = "35px";
            document.getElementById("services-main-heading-id").style.fontSize = "35px";
            document.getElementById("contact-heading-main-id").style.fontSize = "35px";
            document.getElementById("main-heading-id").style.fontSize = "35px";
            document.getElementById("dining-main-id").style.fontSize = "35px";
            document.getElementById("left-roombooking-heading").style.fontSize = "25px";
            document.getElementById("hotel-backdrop").setAttribute("src", "images/the_grand_budapest_hotel_night-2.png");
        }
        else if (width <= 500 && width > 330) {
            element1.innerHTML = "Starting from $3000 per night, the Presidential Suite is the most luxurious option available at the Grand Budapest Hotel.";
            element2.innerHTML = "Starting from $1200 per night, and provides an exquisite experience of the Grand Budapest Hotel.";
            element3.innerHTML = "Starting from $500 per night, the Deluxe Room features high-end furnishings, plush bedding, and luxurious amenities.";
            document.getElementById("bookurstay-heading-id").style.fontSize = "35px";
            document.getElementById("local-main-heading-id").style.fontSize = "35px";
            document.getElementById("rooms-heading-main-id").style.fontSize = "35px";
            document.getElementById("services-main-heading-id").style.fontSize = "35px";
            document.getElementById("contact-heading-main-id").style.fontSize = "35px";
            document.getElementById("main-heading-id").style.fontSize = "35px";
            document.getElementById("dining-main-id").style.fontSize = "35px";
            document.getElementById("left-roombooking-heading").style.fontSize = "25px";
            document.getElementById("hotel-backdrop").setAttribute("src", "images/the_grand_budapest_hotel_night-2.png");
        }
        else if (width <= 578 && width > 500) {
            element1.innerHTML = "Starting from $3000 per night, the Presidential Suite is the most luxurious option available at the Grand Budapest Hotel.";
            element2.innerHTML = "Starting from $1200 per night, and provides an exquisite experience of the Grand Budapest Hotel.";
            element3.innerHTML = "Starting from $500 per night, the Deluxe Room features high-end furnishings, plush bedding, and luxurious amenities.";
            document.getElementById("bookurstay-heading-id").style.fontSize = "45px";
            document.getElementById("local-main-heading-id").style.fontSize = "45px";
            document.getElementById("services-main-heading-id").style.fontSize = "45px";
            document.getElementById("contact-heading-main-id").style.fontSize = "45px";
            document.getElementById("dining-main-id").style.fontSize = "45px";
            document.getElementById("rooms-heading-main-id").style.fontSize = "45px";
            document.getElementById("main-heading-id").style.fontSize = "40px";
            document.getElementById("left-roombooking-heading").style.fontSize = "30px";
            document.getElementById("local-main-heading-id").style.paddingTop = "13%";
            document.getElementById("rooms-heading-main-id").style.paddingTop = "2%";
            document.getElementById("hotel-backdrop").setAttribute("src", "images/the_grand_budapest_hotel_night-2.png");
        }
        else if (width <= 599 && width > 578) {
            element1.innerHTML = "Starting from $3000 per night, the Presidential Suite is the most luxurious option available at the Grand Budapest Hotel.";
            element2.innerHTML = "Starting from $1200 per night, and provides an exquisite experience of the Grand Budapest Hotel.";
            element3.innerHTML = "Starting from $500 per night, the Deluxe Room features high-end furnishings, plush bedding, and luxurious amenities.";
            document.getElementById("bookurstay-heading-id").style.fontSize = "55px";
            document.getElementById("local-main-heading-id").style.fontSize = "55px";
            document.getElementById("services-main-heading-id").style.fontSize = "55px";
            document.getElementById("contact-heading-main-id").style.fontSize = "55px";
            document.getElementById("dining-main-id").style.fontSize = "55px";
            document.getElementById("rooms-heading-main-id").style.fontSize = "55px";
            document.getElementById("main-heading-id").style.fontSize = "45px";
            document.getElementById("left-roombooking-heading").style.fontSize = "35px";
            document.getElementById("local-main-heading-id").style.paddingTop = "20%";
            document.getElementById("rooms-heading-main-id").style.paddingTop = "2%";
            document.getElementById("hotel-backdrop").setAttribute("src", "images/the_grand_budapest_hotel_night-2.png");
        }
        else if (width <= 840 && width > 599) {
            element1.innerHTML = "Starting from $3000 per night, the Presidential Suite is the most luxurious option available at the Grand Budapest Hotel.";
            element2.innerHTML = "Starting from $1200 per night, and provides an exquisite experience of the Grand Budapest Hotel.";
            element3.innerHTML = "Starting from $500 per night, the Deluxe Room features high-end furnishings, plush bedding, and luxurious amenities.";
            document.getElementById("bookurstay-heading-id").style.fontSize = "65px";
            document.getElementById("local-main-heading-id").style.fontSize = "65px";
            document.getElementById("services-main-heading-id").style.fontSize = "65px";
            document.getElementById("dining-main-id").style.fontSize = "65px";
            document.getElementById("rooms-heading-main-id").style.fontSize = "65px";
            document.getElementById("contact-heading-main-id").style.fontSize = "65px";
            document.getElementById("main-heading-id").style.fontSize = "50px";
            document.getElementById("left-roombooking-heading").style.fontSize = "40px";
            document.getElementById("local-main-heading-id").style.paddingTop = "0%";
            document.getElementById("rooms-heading-main-id").style.paddingTop = "2%";
            document.getElementById("hotel-backdrop").setAttribute("src", "images/the_grand_budapest_hotel_night-1_1.png");
            document.getElementById("hidden-nav").style.fontSize = "40px";
        }
        else if (width <= 1038 && width > 840) {
            element1.innerHTML = "Starting from $3000 per night, the Presidential Suite is the most luxurious option available at the Grand Budapest Hotel.";
            element2.innerHTML = "Starting from $1200 per night,<br> and provides an exquisite experience <br> of the Grand Budapest Hotel.";
            element3.innerHTML = "Starting from $500 per night,<br> the Deluxe Room features high-end furnishings, plush bedding,<br> and luxurious amenities.";
            document.getElementById("bookurstay-heading-id").style.fontSize = "75px";
            document.getElementById("local-main-heading-id").style.fontSize = "75px";
            document.getElementById("services-main-heading-id").style.fontSize = "75px";
            document.getElementById("contact-heading-main-id").style.fontSize = "75px";
            document.getElementById("dining-main-id").style.fontSize = "75px";
            document.getElementById("rooms-heading-main-id").style.fontSize = "75px";
            document.getElementById("main-heading-id").style.fontSize = "65px";
            document.getElementById("left-roombooking-heading").style.fontSize = "45px";
            document.getElementById("local-main-heading-id").style.paddingTop = "16%";
            document.getElementById("rooms-heading-main-id").style.paddingTop = "2%";
            document.getElementById("hotel-backdrop").setAttribute("src", "images/the_grand_budapest_hotel_night-1.png");
            document.getElementById("hidden-nav").style.fontSize = "40px";
        }
        else if (width <= 1106 && width > 1038) {
            element1.innerHTML = "Starting from $3000 per night, the Presidential Suite is the most luxurious option available at the Grand Budapest Hotel.";
            element2.innerHTML = "Starting from $1200 per night,<br> the Executive Suite features a <br> large bedroom with a king-size bed, a separate living room with a fireplace, and other faculties.";
            document.getElementById("bookurstay-heading-id").style.fontSize = "77px";
            document.getElementById("local-main-heading-id").style.fontSize = "77px";
            document.getElementById("services-main-heading-id").style.fontSize = "77px";
            document.getElementById("dining-main-id").style.fontSize = "77px";
            document.getElementById("rooms-heading-main-id").style.fontSize = "77px";
            document.getElementById("contact-heading-main-id").style.fontSize = "77px";
            document.getElementById("left-roombooking-heading").style.fontSize = "50px";
            document.getElementById("main-heading-id").style.fontSize = "70px";
            document.getElementById("local-main-heading-id").style.paddingTop = "16%";
            document.getElementById("rooms-heading-main-id").style.paddingTop = "10%";
            document.getElementById("hotel-backdrop").setAttribute("src", "images/the_grand_budapest_hotel_night-1.png");
            document.getElementById("hidden-nav").style.fontSize = "40px";
        }
        else if (width <= 1201 && width > 1106) {
            element1.innerHTML = "Starting from $3000 per night, the Presidential Suite is the most luxurious option available at the Grand Budapest Hotel. This suite includes a large master bedroom, a spacious living room with a fireplace and other faculties. "
            document.getElementById("bookurstay-heading-id").style.fontSize = "79px";
            document.getElementById("local-main-heading-id").style.fontSize = "79px";
            document.getElementById("services-main-heading-id").style.fontSize = "79px";
            document.getElementById("contact-heading-main-id").style.fontSize = "79px";
            document.getElementById("dining-main-id").style.fontSize = "79px";
            document.getElementById("rooms-heading-main-id").style.fontSize = "79px";
            document.getElementById("left-roombooking-heading").style.fontSize = "55px";
            document.getElementById("main-heading-id").style.fontSize = "79px";
            document.getElementById("local-main-heading-id").style.paddingTop = "16%";
            document.getElementById("local-main-heading-id").style.paddingBottom = "30px";
            document.getElementById("roombooking-main-id").style.scale = "0.9";
            document.getElementById("hotel-backdrop").setAttribute("src", "images/the_grand_budapest_hotel_night-1.png");
            document.getElementById("hidden-nav").style.fontSize = "40px";
        }
        else {
            element3.innerHTML = "Starting from $500 per night,<br> the Deluxe Room features high-end furnishings, plush bedding,<br> and luxurious amenities such as <br> a flat-screen TV, minibar, and complimentary Wi-Fi.";
            element2.innerHTML = "Starting from $1200 per night,<br> the Executive Suite features a <br> large bedroom with a king-size bed,<br> a separate living room with a fireplace,<br> and a dining area that can <br> accommodate up to six guests.";
            element1.innerHTML = "Starting from $3000 per night, the Presidential Suite is the most luxurious option available at the Grand Budapest Hotel. This suite includes a large master bedroom, a spacious living room with a fireplace, a dining room that can accommodate up to 12 guests, and a private balcony.";
            document.getElementById("bookurstay-heading-id").style.fontSize = "87px";
            document.getElementById("local-main-heading-id").style.fontSize = "87px";
            document.getElementById("services-main-heading-id").style.fontSize = "87px";
            document.getElementById("contact-heading-main-id").style.fontSize = "87px";
            document.getElementById("dining-main-id").style.fontSize = "87px";
            document.getElementById("rooms-heading-main-id").style.fontSize = "87px";
            document.getElementById("left-roombooking-heading").style.fontSize = "60px";
            document.getElementById("main-heading-id").style.fontSize = "87px";
            document.getElementById("local-main-heading-id").style.paddingTop = "4%";
            document.getElementById("local-main-heading-id").style.paddingBottom = "130px";
            document.getElementById("roombooking-main-id").style.scale = "1";
            document.getElementById("hotel-backdrop").setAttribute("src", "images/the_grand_budapest_hotel_night.png");
            document.getElementById("hidden-nav").style.fontSize = "40px";
        }

        //asdfadfasasfasfasfasfasdfasfasfasf
        console.log(width);
        if (width <= 386) {
            console.log("here", width);
            boourstaybackDrop.setAttribute("src", "images/mid_screen_1-6-transformed.png");
            document.getElementById("deluxe-row").style.scale = "0.75";
            document.getElementById("deluxe-row").style.position = "relative";
            document.getElementById("deluxe-row").style.top = "-100px";
            document.getElementById("bookurstay-id").style.height = "750px";
            locall.setAttribute("src", "images/local_attractions-5.png");
            document.getElementById("localone").innerHTML = "Local";
            document.getElementById("conta").innerHTML = "Contact";
            document.getElementById("contact-heading-main-id").style.marginTop = "20%";
        }
        else if (width <= 458 && width > 386) {
            boourstaybackDrop.setAttribute("src", "images/mid_screen_1-6-transformed.png");
            document.getElementById("deluxe-row").style.scale = "0.75";
            document.getElementById("deluxe-row").style.position = "relative";
            document.getElementById("deluxe-row").style.top = "-100px";
            document.getElementById("bookurstay-id").style.height = "auto";
            locall.setAttribute("src", "images/local_attractions-5.png");
            document.getElementById("localone").innerHTML = "Local Attractions";
            document.getElementById("conta").innerHTML = "Contact Us";
            document.getElementById("contact-heading-main-id").style.marginTop = "0%";
        }
        else if (width <= 558 && width > 458) {
            document.getElementById("deluxe-row").style.scale = "0.65";
            document.getElementById("deluxe-row").style.position = "relative";
            document.getElementById("deluxe-row").style.top = "-130px";
            document.getElementById("bookurstay-id").style.height = "750px";
            boourstaybackDrop.setAttribute("src", "images/mid_screen_1-5.png");
            locall.setAttribute("src", "images/local_attractions-5.png");
            document.getElementById("spans").style.display = "none";
            document.getElementById("spans-2").style.display = "none";
            document.getElementById("localone").innerHTML = "Local Attractions";
            document.getElementById("conta").innerHTML = "Contact Us";
            document.getElementById("contact-heading-main-id").style.marginTop = "0%";
        }
        else if (width <= 578 && width > 558) {
            document.getElementById("deluxe-row").style.position = "static";
            document.getElementById("deluxe-row").style.scale = "0.95";
            boourstaybackDrop.setAttribute("src", "images/mid_screen_1-5.png");
            document.getElementById("bookurstay-id").style.height = "auto";
            locall.setAttribute("src", "images/local_attractions-5.png");
            document.getElementById("hidden-nav").style.fontSize = "15px";
            document.getElementById("spans").style.display = "block";
            document.getElementById("spans-2").style.display = "block";
            document.getElementById("localone").innerHTML = "Local Attractions";
            document.getElementById("conta").innerHTML = "Contact Us";
            document.getElementById("contact-heading-main-id").style.marginTop = "0%";
        }
        else if (width <= 693 && width > 578) {
            document.getElementById("deluxe-row").style.position = "static";
            document.getElementById("deluxe-row").style.scale = "0.95";
            boourstaybackDrop.setAttribute("src", "images/mid_screen_1-4.png");
            document.getElementById("bookurstay-id").style.height = "auto";
            locall.setAttribute("src", "images/local_attractions-4.png");
            document.getElementById("hidden-nav").style.fontSize = "20px";
            document.getElementById("spans").style.display = "block";
            document.getElementById("spans-2").style.display = "block";
            document.getElementById("localone").innerHTML = "Local Attractions";
            document.getElementById("conta").innerHTML = "Contact Us";
            document.getElementById("contact-heading-main-id").style.marginTop = "0%";
        }
        else if (width <= 840 && width > 693) {
            document.getElementById("deluxe-row").style.position = "static";
            document.getElementById("deluxe-row").style.scale = "0.95";
            boourstaybackDrop.setAttribute("src", "images/mid_screen_1-3.png");
            document.getElementById("bookurstay-id").style.height = "auto";
            locall.setAttribute("src", "images/local_attractions-4.png");
            document.getElementById("hidden-nav").style.fontSize = "22px";
            document.getElementById("spans").style.display = "block";
            document.getElementById("spans-2").style.display = "block";
            document.getElementById("localone").innerHTML = "Local Attractions";
            document.getElementById("conta").innerHTML = "Contact Us";
            document.getElementById("contact-heading-main-id").style.marginTop = "0%";
        }
        else if (width <= 889 && width > 840) {
            document.getElementById("deluxe-row").style.position = "static";
            document.getElementById("deluxe-row").style.scale = "0.95";
            boourstaybackDrop.setAttribute("src", "images/mid_screen_1-2.png");
            document.getElementById("bookurstay-id").style.height = "auto";
            locall.setAttribute("src", "images/local_attractions-2.png");
            document.getElementById("hidden-nav").style.fontSize = "22px";
            document.getElementById("spans").style.display = "block";
            document.getElementById("spans-2").style.display = "block";
            document.getElementById("localone").innerHTML = "Local Attractions";
            document.getElementById("conta").innerHTML = "Contact Us";
            document.getElementById("contact-heading-main-id").style.marginTop = "0%";
        }
        else if (width <= 992 && width > 889) {
            document.getElementById("deluxe-row").style.position = "static";
            document.getElementById("deluxe-row").style.scale = "0.95";
            boourstaybackDrop.setAttribute("src", "images/mid_screen_1-1.png");
            document.getElementById("bookurstay-heading-id").style.paddingTop = "0%";
            document.getElementById("bookurstay-id").style.height = "auto";
            locall.setAttribute("src", "images/local_attractions-2.png");
            document.getElementById("hidden-nav").style.fontSize = "22px";
            document.getElementById("hidden-nav").classList.remove = "d-block";
            document.getElementById("hidden-nav").classList.add = "d-felx";
            document.getElementById("spans").style.display = "block";
            document.getElementById("spans-2").style.display = "block";
            document.getElementById("localone").innerHTML = "Local Attractions";
            document.getElementById("conta").innerHTML = "Contact Us";
            document.getElementById("contact-heading-main-id").style.marginTop = "0%";
        }
        else {
            document.getElementById("deluxe-row").style.position = "static";
            document.getElementById("deluxe-row").style.scale = "0.95";
            boourstaybackDrop.setAttribute("src", "images/mid_screen_1.png");
            document.getElementById("bookurstay-heading-id").style.paddingTop = "7%";
            document.getElementById("bookurstay-id").style.height = "auto";
            locall.setAttribute("src", "images/local_attractions-2.png");
            document.getElementById("hidden-nav").style.fontSize = "24px";
            document.getElementById("hidden-nav").classList.remove = "d-block";
            document.getElementById("hidden-nav").classList.add = "d-felx";
            document.getElementById("spans").style.display = "block";
            document.getElementById("spans-2").style.display = "block";
            document.getElementById("localone").innerHTML = "Local Attractions";
            document.getElementById("conta").innerHTML = "Contact Us";
            document.getElementById("contact-heading-main-id").style.marginTop = "0%";
        }


        if (width <= 458) {
            contact.setAttribute("src", "images/contact_us_screen_maybe-6-transformed.png");
            diningback.setAttribute("src", "images/gallary_dining_hall-2.png");
            document.getElementById("bottom-row").style.paddingTop = "5px";
            document.getElementById("subscript-rooms-id").style.paddingTop = "2%";
            document.getElementById("subscript-services-id").style.fontSize = "1.0rem";
            document.getElementById("subscript-dining-id").style.fontSize = "1.0rem";
            document.getElementById("subscript-rooms-id").style.fontSize = "1.0rem";
            document.getElementById("subscript-main-id").style.fontSize = "1.0rem";
            document.getElementById("subscript-contact-id").style.fontSize = "1.0rem";
            document.getElementById("right-roombooking-heading-button").classList.remove("btn-md");
            document.getElementById("right-roombooking-heading-button").classList.remove("btn-lg");
            document.getElementById("right-roombooking-heading-button").classList.add("btn-sm");
        }
        else if (width <= 578 && width > 458) {
            contact.setAttribute("src", "images/contact_us_screen_maybe-5.png");
            diningback.setAttribute("src", "images/gallary_dining_hall-1.png");
            document.getElementById("subscript-rooms-id").style.paddingTop = "5%";
            document.getElementById("bottom-row").style.paddingTop = "15px";
            document.getElementById("services-main-heading-id").style.paddingBottom = "0%";
            document.getElementById("services-main-heading-id").style.paddingTop = "8%";
            document.getElementById("subscript-services-id").style.paddingTop = "2%";
            document.getElementById("subscript-services-id").style.paddingBottom = "2%";
            document.getElementById("subscript-services-id").style.fontSize = "1.2rem";
            document.getElementById("subscript-dining-id").style.fontSize = "1.2rem";
            document.getElementById("subscript-rooms-id").style.fontSize = "1.2rem";
            document.getElementById("subscript-main-id").style.fontSize = "1.2rem";
            document.getElementById("subscript-contact-id").style.fontSize = "1.2rem";
            document.getElementById("right-roombooking-heading-button").classList.remove("btn-md");
            document.getElementById("right-roombooking-heading-button").classList.remove("btn-lg");
            document.getElementById("right-roombooking-heading-button").classList.add("btn-sm");
        }
        else if (width <= 693 && width > 578) {
            contact.setAttribute("src", "images/contact_us_screen_maybe-4.png");
            diningback.setAttribute("src", "images/gallary_dining_hall-1.png");
            document.getElementById("subscript-rooms-id").style.paddingTop = "5%";
            document.getElementById("bottom-row").style.paddingTop = "40px";
            servicesmain.classList.add("col-12");
            servicesmain.classList.remove("col-8");
            servicessub.classList.add("col-12");
            servicessub.classList.remove("col-8");
            document.getElementById("services-main-heading-id").style.paddingBottom = "0%";
            document.getElementById("services-main-heading-id").style.paddingTop = "12%";
            document.getElementById("subscript-services-id").style.paddingTop = "5%";
            document.getElementById("subscript-services-id").style.paddingBottom = "5%";
            document.getElementById("subscript-services-id").style.marginBottom = "0%";
            document.getElementById("subscript-services-id").style.fontSize = "1.5rem";
            document.getElementById("subscript-dining-id").style.fontSize = "1.5rem";
            document.getElementById("subscript-rooms-id").style.fontSize = "1.5rem";
            document.getElementById("subscript-main-id").style.fontSize = "1.5rem";
            document.getElementById("subscript-contact-id").style.fontSize = "1.5rem";
            document.getElementById("right-roombooking-heading-button").classList.remove("btn-lg");
            document.getElementById("right-roombooking-heading-button").classList.remove("btn-sm");
            document.getElementById("right-roombooking-heading-button").classList.add("btn-md");
        }
        else if (width <= 840 && width > 693) {
            contact.setAttribute("src", "images/contact_us_screen_maybe-3.png");
            diningback.setAttribute("src", "images/gallary_dining_hall-1.png");
            document.getElementById("subscript-rooms-id").style.paddingTop = "5%";
            roomsback.setAttribute("src", "images/mid_screen_night_u-1.png");
            document.getElementById("bottom-row").style.paddingTop = "60px";
            servicesmain.classList.add("col-8");
            servicesmain.classList.remove("col-12");
            servicessub.classList.add("col-8");
            servicessub.classList.remove("col-12");
            document.getElementById("services-main-heading-id").style.paddingBottom = "4%";
            document.getElementById("services-main-heading-id").style.paddingTop = "25%";
            document.getElementById("subscript-services-id").style.paddingTop = "5%";
            document.getElementById("subscript-services-id").style.paddingBottom = "5%";
            document.getElementById("subscript-services-id").style.marginBottom = "0%";
            document.getElementById("subscript-services-id").style.fontSize = "1.5rem";
            document.getElementById("subscript-dining-id").style.fontSize = "1.5rem";
            document.getElementById("subscript-rooms-id").style.fontSize = "1.5rem";
            document.getElementById("subscript-main-id").style.fontSize = "1.5rem";
            document.getElementById("subscript-contact-id").style.fontSize = "1.5rem";
            document.getElementById("dining-main-id").paddingTop = "5%";
            document.getElementById("right-roombooking-heading-button").classList.remove("btn-lg");
            document.getElementById("right-roombooking-heading-button").classList.remove("btn-sm");
            document.getElementById("right-roombooking-heading-button").classList.add("btn-md");
        }
        else if (width <= 889 && width > 840) {
            contact.setAttribute("src", "images/contact_us_screen_maybe-2.png");
            diningback.setAttribute("src", "images/gallary_dining_hall.png");
            document.getElementById("subscript-rooms-id").style.paddingTop = "5%";
            roomsback.setAttribute("src", "images/mid_screen_night_u.png");
            document.getElementById("bottom-row").style.paddingTop = "100px";
            servicesme.setAttribute("src", "images/lobby_boy-1.png");
            servicesmain.classList.add("col-8");
            servicesmain.classList.remove("col-12");
            servicessub.classList.add("col-8");
            servicessub.classList.remove("col-12");
            document.getElementById("services-main-heading-id").style.paddingBottom = "4%";
            document.getElementById("services-main-heading-id").style.paddingTop = "25%";
            document.getElementById("subscript-services-id").style.paddingTop = "5%";
            document.getElementById("subscript-services-id").style.paddingBottom = "5%";
            document.getElementById("subscript-services-id").style.marginBottom = "0%";
            document.getElementById("subscript-services-id").style.fontSize = "1.5rem";
            document.getElementById("subscript-dining-id").style.fontSize = "1.5rem";
            document.getElementById("subscript-rooms-id").style.fontSize = "1.5rem";
            document.getElementById("subscript-main-id").style.fontSize = "1.5rem";
            document.getElementById("subscript-contact-id").style.fontSize = "1.5rem";
            document.getElementById("dining-main-id").paddingTop = "9%";
            document.getElementById("right-roombooking-heading-button").classList.remove("btn-md");
            document.getElementById("right-roombooking-heading-button").classList.remove("btn-sm");
            document.getElementById("right-roombooking-heading-button").classList.add("btn-lg");
        }
        else if (width <= 992 && width > 889) {
            contact.setAttribute("src", "images/contact_us_screen_maybe-1.png");
            diningback.setAttribute("src", "images/gallary_dining_hall.png");
            document.getElementById("subscript-rooms-id").style.paddingTop = "5%";
            roomsback.setAttribute("src", "images/mid_screen_night_u.png");
            document.getElementById("bottom-row").style.paddingTop = "140px";
            servicesme.setAttribute("src", "images/lobby_boy.png");
            servicesmain.classList.add("col-8");
            servicesmain.classList.remove("col-12");
            servicessub.classList.add("col-8");
            servicessub.classList.remove("col-12");
            sdocument.getElementById("services-main-heading-id").style.paddingBottom = "4%";
            document.getElementById("services-main-heading-id").style.paddingTop = "25%";
            document.getElementById("subscript-services-id").style.paddingTop = "5%";
            document.getElementById("subscript-services-id").style.paddingBottom = "5%";
            document.getElementById("subscript-services-id").style.marginBottom = "0%";
            document.getElementById("subscript-services-id").style.fontSize = "1.5rem";
            document.getElementById("subscript-dining-id").style.fontSize = "1.5rem";
            document.getElementById("subscript-rooms-id").style.fontSize = "1.5rem";
            document.getElementById("subscript-main-id").style.fontSize = "1.5rem";
            document.getElementById("subscript-contact-id").style.fontSize = "1.5rem";
            document.getElementById("dining-main-id").paddingTop = "9%";
            document.getElementById("right-roombooking-heading-button").classList.remove("btn-md");
            document.getElementById("right-roombooking-heading-button").classList.remove("btn-sm");
            document.getElementById("right-roombooking-heading-button").classList.add("btn-lg");
        }
        else {
            contact.setAttribute("src", "images/contact_us_screen_maybe.png");
            diningback.setAttribute("src", "images/gallary_dining_hall.png");
            document.getElementById("subscript-rooms-id").style.paddingTop = "5%";
            roomsback.setAttribute("src", "images/mid_screen_night_u.png");
            document.getElementById("bottom-row").style.paddingTop = "160px";
            servicesme.setAttribute("src", "images/lobby_boy.png");
            servicesmain.classList.add("col-8");
            servicesmain.classList.remove("col-12");
            servicessub.classList.add("col-8");
            servicessub.classList.remove("col-12");
            document.getElementById("services-main-heading-id").style.paddingBottom = "4%";
            document.getElementById("services-main-heading-id").style.paddingTop = "25%";
            document.getElementById("subscript-services-id").style.paddingTop = "5%";
            document.getElementById("subscript-services-id").style.paddingBottom = "5%";
            document.getElementById("subscript-services-id").style.marginBottom = "0%";
            document.getElementById("subscript-services-id").style.fontSize = "1.5rem";
            document.getElementById("subscript-dining-id").style.fontSize = "1.5rem";
            document.getElementById("subscript-rooms-id").style.fontSize = "1.5rem";
            document.getElementById("subscript-main-id").style.fontSize = "1.5rem";
            document.getElementById("subscript-contact-id").style.fontSize = "1.5rem";
            document.getElementById("dining-main-id").paddingTop = "9%";
            document.getElementById("right-roombooking-heading-button").classList.remove("btn-md");
            document.getElementById("right-roombooking-heading-button").classList.remove("btn-sm");
            document.getElementById("right-roombooking-heading-button").classList.add("btn-lg");

        }
    }
    else
    {
        var width = window.innerWidth;
        if (width <= 330) {
            element1.innerHTML = "Starting from $3000 per night, the Presidential Suite is the most luxurious option available at the Grand Budapest Hotel.";
            element2.innerHTML = "Starting from $1200 per night, and provides an exquisite experience of the Grand Budapest Hotel.";
            element3.innerHTML = "Starting from $500 per night, the Deluxe Room provides basic experience of the Hotel.";
            document.getElementById("bookurstay-heading-id").style.fontSize = "35px";
            document.getElementById("local-main-heading-id").style.fontSize = "35px";
            document.getElementById("rooms-heading-main-id").style.fontSize = "35px";
            document.getElementById("services-main-heading-id").style.fontSize = "35px";
            document.getElementById("contact-heading-main-id").style.fontSize = "35px";
            document.getElementById("main-heading-id").style.fontSize = "35px";
            document.getElementById("dining-main-id").style.fontSize = "35px";
            document.getElementById("left-roombooking-heading").style.fontSize = "25px";
            document.getElementById("hotel-backdrop").setAttribute("src", "images/the_grand_budapest_hotel-2.png");
        }
        else if (width <= 500 && width > 330) {
            element1.innerHTML = "Starting from $3000 per night, the Presidential Suite is the most luxurious option available at the Grand Budapest Hotel.";
            element2.innerHTML = "Starting from $1200 per night, and provides an exquisite experience of the Grand Budapest Hotel.";
            element3.innerHTML = "Starting from $500 per night, the Deluxe Room features high-end furnishings, plush bedding, and luxurious amenities.";
            document.getElementById("bookurstay-heading-id").style.fontSize = "35px";
            document.getElementById("local-main-heading-id").style.fontSize = "35px";
            document.getElementById("rooms-heading-main-id").style.fontSize = "35px";
            document.getElementById("services-main-heading-id").style.fontSize = "35px";
            document.getElementById("contact-heading-main-id").style.fontSize = "35px";
            document.getElementById("main-heading-id").style.fontSize = "35px";
            document.getElementById("dining-main-id").style.fontSize = "35px";
            document.getElementById("left-roombooking-heading").style.fontSize = "25px";
            document.getElementById("hotel-backdrop").setAttribute("src", "images/the_grand_budapest_hotel-2.png");
        }
        else if (width <= 578 && width > 500) {
            element1.innerHTML = "Starting from $3000 per night, the Presidential Suite is the most luxurious option available at the Grand Budapest Hotel.";
            element2.innerHTML = "Starting from $1200 per night, and provides an exquisite experience of the Grand Budapest Hotel.";
            element3.innerHTML = "Starting from $500 per night, the Deluxe Room features high-end furnishings, plush bedding, and luxurious amenities.";
            document.getElementById("bookurstay-heading-id").style.fontSize = "45px";
            document.getElementById("local-main-heading-id").style.fontSize = "45px";
            document.getElementById("services-main-heading-id").style.fontSize = "45px";
            document.getElementById("contact-heading-main-id").style.fontSize = "45px";
            document.getElementById("dining-main-id").style.fontSize = "45px";
            document.getElementById("rooms-heading-main-id").style.fontSize = "45px";
            document.getElementById("main-heading-id").style.fontSize = "40px";
            document.getElementById("left-roombooking-heading").style.fontSize = "30px";
            document.getElementById("local-main-heading-id").style.paddingTop = "13%";
            document.getElementById("rooms-heading-main-id").style.paddingTop = "2%";
            document.getElementById("hotel-backdrop").setAttribute("src", "images/the_grand_budapest_hotel-2.png");
        }
        else if (width <= 599 && width > 578) {
            element1.innerHTML = "Starting from $3000 per night, the Presidential Suite is the most luxurious option available at the Grand Budapest Hotel.";
            element2.innerHTML = "Starting from $1200 per night, and provides an exquisite experience of the Grand Budapest Hotel.";
            element3.innerHTML = "Starting from $500 per night, the Deluxe Room features high-end furnishings, plush bedding, and luxurious amenities.";
            document.getElementById("bookurstay-heading-id").style.fontSize = "55px";
            document.getElementById("local-main-heading-id").style.fontSize = "55px";
            document.getElementById("services-main-heading-id").style.fontSize = "55px";
            document.getElementById("contact-heading-main-id").style.fontSize = "55px";
            document.getElementById("dining-main-id").style.fontSize = "55px";
            document.getElementById("rooms-heading-main-id").style.fontSize = "55px";
            document.getElementById("main-heading-id").style.fontSize = "45px";
            document.getElementById("left-roombooking-heading").style.fontSize = "35px";
            document.getElementById("local-main-heading-id").style.paddingTop = "20%";
            document.getElementById("rooms-heading-main-id").style.paddingTop = "2%";
            document.getElementById("hotel-backdrop").setAttribute("src", "images/the_grand_budapest_hotel-2.png");
        }
        else if (width <= 840 && width > 599) {
            element1.innerHTML = "Starting from $3000 per night, the Presidential Suite is the most luxurious option available at the Grand Budapest Hotel.";
            element2.innerHTML = "Starting from $1200 per night, and provides an exquisite experience of the Grand Budapest Hotel.";
            element3.innerHTML = "Starting from $500 per night, the Deluxe Room features high-end furnishings, plush bedding, and luxurious amenities.";
            document.getElementById("bookurstay-heading-id").style.fontSize = "65px";
            document.getElementById("local-main-heading-id").style.fontSize = "65px";
            document.getElementById("services-main-heading-id").style.fontSize = "65px";
            document.getElementById("dining-main-id").style.fontSize = "65px";
            document.getElementById("rooms-heading-main-id").style.fontSize = "65px";
            document.getElementById("contact-heading-main-id").style.fontSize = "65px";
            document.getElementById("main-heading-id").style.fontSize = "50px";
            document.getElementById("left-roombooking-heading").style.fontSize = "40px";
            document.getElementById("local-main-heading-id").style.paddingTop = "0%";
            document.getElementById("rooms-heading-main-id").style.paddingTop = "2%";
            document.getElementById("hotel-backdrop").setAttribute("src", "images/the_grand_budapest_hotel-2.png");
            document.getElementById("hidden-nav").style.fontSize = "40px";
        }
        else if (width <= 1038 && width > 840) {
            element1.innerHTML = "Starting from $3000 per night, the Presidential Suite is the most luxurious option available at the Grand Budapest Hotel.";
            element2.innerHTML = "Starting from $1200 per night,<br> and provides an exquisite experience <br> of the Grand Budapest Hotel.";
            element3.innerHTML = "Starting from $500 per night,<br> the Deluxe Room features high-end furnishings, plush bedding,<br> and luxurious amenities.";
            document.getElementById("bookurstay-heading-id").style.fontSize = "75px";
            document.getElementById("local-main-heading-id").style.fontSize = "75px";
            document.getElementById("services-main-heading-id").style.fontSize = "75px";
            document.getElementById("contact-heading-main-id").style.fontSize = "75px";
            document.getElementById("dining-main-id").style.fontSize = "75px";
            document.getElementById("rooms-heading-main-id").style.fontSize = "75px";
            document.getElementById("main-heading-id").style.fontSize = "65px";
            document.getElementById("left-roombooking-heading").style.fontSize = "45px";
            document.getElementById("local-main-heading-id").style.paddingTop = "16%";
            document.getElementById("rooms-heading-main-id").style.paddingTop = "2%";
            document.getElementById("hotel-backdrop").setAttribute("src", "images/the_grand_budapest_hotel-1.png");
            document.getElementById("hidden-nav").style.fontSize = "40px";
        }
        else if (width <= 1106 && width > 1038) {
            element1.innerHTML = "Starting from $3000 per night, the Presidential Suite is the most luxurious option available at the Grand Budapest Hotel.";
            element2.innerHTML = "Starting from $1200 per night,<br> the Executive Suite features a <br> large bedroom with a king-size bed, a separate living room with a fireplace, and other faculties.";
            document.getElementById("bookurstay-heading-id").style.fontSize = "77px";
            document.getElementById("local-main-heading-id").style.fontSize = "77px";
            document.getElementById("services-main-heading-id").style.fontSize = "77px";
            document.getElementById("dining-main-id").style.fontSize = "77px";
            document.getElementById("rooms-heading-main-id").style.fontSize = "77px";
            document.getElementById("contact-heading-main-id").style.fontSize = "77px";
            document.getElementById("left-roombooking-heading").style.fontSize = "50px";
            document.getElementById("main-heading-id").style.fontSize = "70px";
            document.getElementById("local-main-heading-id").style.paddingTop = "16%";
            document.getElementById("rooms-heading-main-id").style.paddingTop = "10%";
            document.getElementById("hotel-backdrop").setAttribute("src", "images/the_grand_budapest_hotel-1.png");
            document.getElementById("hidden-nav").style.fontSize = "40px";
        }
        else if (width <= 1201 && width > 1106) {
            element1.innerHTML = "Starting from $3000 per night, the Presidential Suite is the most luxurious option available at the Grand Budapest Hotel. This suite includes a large master bedroom, a spacious living room with a fireplace and other faculties. "
            document.getElementById("bookurstay-heading-id").style.fontSize = "79px";
            document.getElementById("local-main-heading-id").style.fontSize = "79px";
            document.getElementById("services-main-heading-id").style.fontSize = "79px";
            document.getElementById("contact-heading-main-id").style.fontSize = "79px";
            document.getElementById("dining-main-id").style.fontSize = "79px";
            document.getElementById("rooms-heading-main-id").style.fontSize = "79px";
            document.getElementById("left-roombooking-heading").style.fontSize = "55px";
            document.getElementById("main-heading-id").style.fontSize = "79px";
            document.getElementById("local-main-heading-id").style.paddingTop = "16%";
            document.getElementById("local-main-heading-id").style.paddingBottom = "30px";
            document.getElementById("roombooking-main-id").style.scale = "0.9";
            document.getElementById("hotel-backdrop").setAttribute("src", "images/the_grand_budapest_hotel-1.png");
            document.getElementById("hidden-nav").style.fontSize = "40px";
        }
        else {
            element3.innerHTML = "Starting from $500 per night,<br> the Deluxe Room features high-end furnishings, plush bedding,<br> and luxurious amenities such as <br> a flat-screen TV, minibar, and complimentary Wi-Fi.";
            element2.innerHTML = "Starting from $1200 per night,<br> the Executive Suite features a <br> large bedroom with a king-size bed,<br> a separate living room with a fireplace,<br> and a dining area that can <br> accommodate up to six guests.";
            element1.innerHTML = "Starting from $3000 per night, the Presidential Suite is the most luxurious option available at the Grand Budapest Hotel. This suite includes a large master bedroom, a spacious living room with a fireplace, a dining room that can accommodate up to 12 guests, and a private balcony.";
            document.getElementById("bookurstay-heading-id").style.fontSize = "87px";
            document.getElementById("local-main-heading-id").style.fontSize = "87px";
            document.getElementById("services-main-heading-id").style.fontSize = "87px";
            document.getElementById("contact-heading-main-id").style.fontSize = "87px";
            document.getElementById("dining-main-id").style.fontSize = "87px";
            document.getElementById("rooms-heading-main-id").style.fontSize = "87px";
            document.getElementById("left-roombooking-heading").style.fontSize = "60px";
            document.getElementById("main-heading-id").style.fontSize = "87px";
            document.getElementById("local-main-heading-id").style.paddingTop = "4%";
            document.getElementById("local-main-heading-id").style.paddingBottom = "130px";
            document.getElementById("roombooking-main-id").style.scale = "1";
            document.getElementById("hotel-backdrop").setAttribute("src", "images/the_grand_budapest_hotel.png");
            document.getElementById("hidden-nav").style.fontSize = "40px";
        }

        //asdfadfasasfasfasfasfasdfasfasfasf
        console.log(width);
        if (width <= 386) {
            console.log("here", width);
            boourstaybackDrop.setAttribute("src", "images/mid_screen_1-6-transformed.png");
            document.getElementById("deluxe-row").style.scale = "0.75";
            document.getElementById("deluxe-row").style.position = "relative";
            document.getElementById("deluxe-row").style.top = "-100px";
            document.getElementById("bookurstay-id").style.height = "750px";
            locall.setAttribute("src", "images/local_attractions-5.png");
            document.getElementById("localone").innerHTML = "Local";
            document.getElementById("conta").innerHTML = "Contact";
            document.getElementById("contact-heading-main-id").style.marginTop = "20%";
        }
        else if (width <= 458 && width > 386) {
            boourstaybackDrop.setAttribute("src", "images/mid_screen_1-6-transformed.png");
            document.getElementById("deluxe-row").style.scale = "0.75";
            document.getElementById("deluxe-row").style.position = "relative";
            document.getElementById("deluxe-row").style.top = "-100px";
            document.getElementById("bookurstay-id").style.height = "auto";
            locall.setAttribute("src", "images/local_attractions-5.png");
            document.getElementById("localone").innerHTML = "Local Attractions";
            document.getElementById("conta").innerHTML = "Contact Us";
            document.getElementById("contact-heading-main-id").style.marginTop = "0%";
        }
        else if (width <= 558 && width > 458) {
            document.getElementById("deluxe-row").style.scale = "0.65";
            document.getElementById("deluxe-row").style.position = "relative";
            document.getElementById("deluxe-row").style.top = "-130px";
            document.getElementById("bookurstay-id").style.height = "750px";
            boourstaybackDrop.setAttribute("src", "images/mid_screen_1-5.png");
            locall.setAttribute("src", "images/local_attractions-5.png");
            document.getElementById("spans").style.display = "none";
            document.getElementById("spans-2").style.display = "none";
            document.getElementById("localone").innerHTML = "Local Attractions";
            document.getElementById("conta").innerHTML = "Contact Us";
            document.getElementById("contact-heading-main-id").style.marginTop = "0%";
        }
        else if (width <= 578 && width > 558) {
            document.getElementById("deluxe-row").style.position = "static";
            document.getElementById("deluxe-row").style.scale = "0.95";
            boourstaybackDrop.setAttribute("src", "images/mid_screen_1-5.png");
            document.getElementById("bookurstay-id").style.height = "auto";
            locall.setAttribute("src", "images/local_attractions-5.png");
            document.getElementById("hidden-nav").style.fontSize = "15px";
            document.getElementById("spans").style.display = "block";
            document.getElementById("spans-2").style.display = "block";
            document.getElementById("localone").innerHTML = "Local Attractions";
            document.getElementById("conta").innerHTML = "Contact Us";
            document.getElementById("contact-heading-main-id").style.marginTop = "0%";
        }
        else if (width <= 693 && width > 578) {
            document.getElementById("deluxe-row").style.position = "static";
            document.getElementById("deluxe-row").style.scale = "0.95";
            boourstaybackDrop.setAttribute("src", "images/mid_screen_1-4.png");
            document.getElementById("bookurstay-id").style.height = "auto";
            locall.setAttribute("src", "images/local_attractions-4.png");
            document.getElementById("hidden-nav").style.fontSize = "20px";
            document.getElementById("spans").style.display = "block";
            document.getElementById("spans-2").style.display = "block";
            document.getElementById("localone").innerHTML = "Local Attractions";
            document.getElementById("conta").innerHTML = "Contact Us";
            document.getElementById("contact-heading-main-id").style.marginTop = "0%";
        }
        else if (width <= 840 && width > 693) {
            document.getElementById("deluxe-row").style.position = "static";
            document.getElementById("deluxe-row").style.scale = "0.95";
            boourstaybackDrop.setAttribute("src", "images/mid_screen_1-3.png");
            document.getElementById("bookurstay-id").style.height = "auto";
            locall.setAttribute("src", "images/local_attractions-4.png");
            document.getElementById("hidden-nav").style.fontSize = "22px";
            document.getElementById("spans").style.display = "block";
            document.getElementById("spans-2").style.display = "block";
            document.getElementById("localone").innerHTML = "Local Attractions";
            document.getElementById("conta").innerHTML = "Contact Us";
            document.getElementById("contact-heading-main-id").style.marginTop = "0%";
        }
        else if (width <= 889 && width > 840) {
            document.getElementById("deluxe-row").style.position = "static";
            document.getElementById("deluxe-row").style.scale = "0.95";
            boourstaybackDrop.setAttribute("src", "images/mid_screen_1-2.png");
            document.getElementById("bookurstay-id").style.height = "auto";
            locall.setAttribute("src", "images/local_attractions-2.png");
            document.getElementById("hidden-nav").style.fontSize = "22px";
            document.getElementById("spans").style.display = "block";
            document.getElementById("spans-2").style.display = "block";
            document.getElementById("localone").innerHTML = "Local Attractions";
            document.getElementById("conta").innerHTML = "Contact Us";
            document.getElementById("contact-heading-main-id").style.marginTop = "0%";
        }
        else if (width <= 992 && width > 889) {
            document.getElementById("deluxe-row").style.position = "static";
            document.getElementById("deluxe-row").style.scale = "0.95";
            boourstaybackDrop.setAttribute("src", "images/mid_screen_1-1.png");
            document.getElementById("bookurstay-heading-id").style.paddingTop = "0%";
            document.getElementById("bookurstay-id").style.height = "auto";
            locall.setAttribute("src", "images/local_attractions-2.png");
            document.getElementById("hidden-nav").style.fontSize = "22px";
            document.getElementById("hidden-nav").classList.remove = "d-block";
            document.getElementById("hidden-nav").classList.add = "d-felx";
            document.getElementById("spans").style.display = "block";
            document.getElementById("spans-2").style.display = "block";
            document.getElementById("localone").innerHTML = "Local Attractions";
            document.getElementById("conta").innerHTML = "Contact Us";
            document.getElementById("contact-heading-main-id").style.marginTop = "0%";
        }
        else {
            document.getElementById("deluxe-row").style.position = "static";
            document.getElementById("deluxe-row").style.scale = "0.95";
            boourstaybackDrop.setAttribute("src", "images/mid_screen_1.png");
            document.getElementById("bookurstay-heading-id").style.paddingTop = "7%";
            document.getElementById("bookurstay-id").style.height = "auto";
            locall.setAttribute("src", "images/local_attractions-2.png");
            document.getElementById("hidden-nav").style.fontSize = "24px";
            document.getElementById("hidden-nav").classList.remove = "d-block";
            document.getElementById("hidden-nav").classList.add = "d-felx";
            document.getElementById("spans").style.display = "block";
            document.getElementById("spans-2").style.display = "block";
            document.getElementById("localone").innerHTML = "Local Attractions";
            document.getElementById("conta").innerHTML = "Contact Us";
            document.getElementById("contact-heading-main-id").style.marginTop = "0%";
        }


        if (width <= 458) {
            contact.setAttribute("src", "images/contact_us_screen_maybe-6-transformed.png");
            diningback.setAttribute("src", "images/gallary_dining_hall-2.png");
            document.getElementById("bottom-row").style.paddingTop = "5px";
            document.getElementById("subscript-rooms-id").style.paddingTop = "2%";
            document.getElementById("subscript-services-id").style.fontSize = "1.0rem";
            document.getElementById("subscript-dining-id").style.fontSize = "1.0rem";
            document.getElementById("subscript-rooms-id").style.fontSize = "1.0rem";
            document.getElementById("subscript-main-id").style.fontSize = "1.0rem";
            document.getElementById("subscript-contact-id").style.fontSize = "1.0rem";
            document.getElementById("right-roombooking-heading-button").classList.remove("btn-md");
            document.getElementById("right-roombooking-heading-button").classList.remove("btn-lg");
            document.getElementById("right-roombooking-heading-button").classList.add("btn-sm");
        }
        else if (width <= 578 && width > 458) {
            contact.setAttribute("src", "images/contact_us_screen_maybe-5.png");
            diningback.setAttribute("src", "images/gallary_dining_hall-1.png");
            document.getElementById("subscript-rooms-id").style.paddingTop = "5%";
            document.getElementById("bottom-row").style.paddingTop = "15px";
            document.getElementById("services-main-heading-id").style.paddingBottom = "0%";
            document.getElementById("services-main-heading-id").style.paddingTop = "8%";
            document.getElementById("subscript-services-id").style.paddingTop = "2%";
            document.getElementById("subscript-services-id").style.paddingBottom = "2%";
            document.getElementById("subscript-services-id").style.fontSize = "1.2rem";
            document.getElementById("subscript-dining-id").style.fontSize = "1.2rem";
            document.getElementById("subscript-rooms-id").style.fontSize = "1.2rem";
            document.getElementById("subscript-main-id").style.fontSize = "1.2rem";
            document.getElementById("subscript-contact-id").style.fontSize = "1.2rem";
            document.getElementById("right-roombooking-heading-button").classList.remove("btn-md");
            document.getElementById("right-roombooking-heading-button").classList.remove("btn-lg");
            document.getElementById("right-roombooking-heading-button").classList.add("btn-sm");
        }
        else if (width <= 693 && width > 578) {
            contact.setAttribute("src", "images/contact_us_screen_maybe-4.png");
            diningback.setAttribute("src", "images/gallary_dining_hall-1.png");
            document.getElementById("subscript-rooms-id").style.paddingTop = "5%";
            document.getElementById("bottom-row").style.paddingTop = "40px";
            servicesmain.classList.add("col-12");
            servicesmain.classList.remove("col-8");
            servicessub.classList.add("col-12");
            servicessub.classList.remove("col-8");
            document.getElementById("services-main-heading-id").style.paddingBottom = "0%";
            document.getElementById("services-main-heading-id").style.paddingTop = "12%";
            document.getElementById("subscript-services-id").style.paddingTop = "5%";
            document.getElementById("subscript-services-id").style.paddingBottom = "5%";
            document.getElementById("subscript-services-id").style.marginBottom = "0%";
            document.getElementById("subscript-services-id").style.fontSize = "1.5rem";
            document.getElementById("subscript-dining-id").style.fontSize = "1.5rem";
            document.getElementById("subscript-rooms-id").style.fontSize = "1.5rem";
            document.getElementById("subscript-main-id").style.fontSize = "1.5rem";
            document.getElementById("subscript-contact-id").style.fontSize = "1.5rem";
            document.getElementById("right-roombooking-heading-button").classList.remove("btn-lg");
            document.getElementById("right-roombooking-heading-button").classList.remove("btn-sm");
            document.getElementById("right-roombooking-heading-button").classList.add("btn-md");
        }
        else if (width <= 840 && width > 693) {
            contact.setAttribute("src", "images/contact_us_screen_maybe-3.png");
            diningback.setAttribute("src", "images/gallary_dining_hall-1.png");
            document.getElementById("subscript-rooms-id").style.paddingTop = "5%";
            roomsback.setAttribute("src", "images/mid_screen-1.png");
            document.getElementById("bottom-row").style.paddingTop = "60px";
            servicesmain.classList.add("col-8");
            servicesmain.classList.remove("col-12");
            servicessub.classList.add("col-8");
            servicessub.classList.remove("col-12");
            document.getElementById("services-main-heading-id").style.paddingBottom = "4%";
            document.getElementById("services-main-heading-id").style.paddingTop = "25%";
            document.getElementById("subscript-services-id").style.paddingTop = "5%";
            document.getElementById("subscript-services-id").style.paddingBottom = "5%";
            document.getElementById("subscript-services-id").style.marginBottom = "0%";
            document.getElementById("subscript-services-id").style.fontSize = "1.5rem";
            document.getElementById("subscript-dining-id").style.fontSize = "1.5rem";
            document.getElementById("subscript-rooms-id").style.fontSize = "1.5rem";
            document.getElementById("subscript-main-id").style.fontSize = "1.5rem";
            document.getElementById("subscript-contact-id").style.fontSize = "1.5rem";
            document.getElementById("dining-main-id").paddingTop = "5%";
            document.getElementById("right-roombooking-heading-button").classList.remove("btn-lg");
            document.getElementById("right-roombooking-heading-button").classList.remove("btn-sm");
            document.getElementById("right-roombooking-heading-button").classList.add("btn-md");
        }
        else if (width <= 889 && width > 840) {
            contact.setAttribute("src", "images/contact_us_screen_maybe-2.png");
            diningback.setAttribute("src", "images/gallary_dining_hall.png");
            document.getElementById("subscript-rooms-id").style.paddingTop = "5%";
            roomsback.setAttribute("src", "images/mid_screen.png");
            document.getElementById("bottom-row").style.paddingTop = "100px";
            servicesme.setAttribute("src", "images/lobby_boy-1.png");
            servicesmain.classList.add("col-8");
            servicesmain.classList.remove("col-12");
            servicessub.classList.add("col-8");
            servicessub.classList.remove("col-12");
            document.getElementById("services-main-heading-id").style.paddingBottom = "4%";
            document.getElementById("services-main-heading-id").style.paddingTop = "25%";
            document.getElementById("subscript-services-id").style.paddingTop = "5%";
            document.getElementById("subscript-services-id").style.paddingBottom = "5%";
            document.getElementById("subscript-services-id").style.marginBottom = "0%";
            document.getElementById("subscript-services-id").style.fontSize = "1.5rem";
            document.getElementById("subscript-dining-id").style.fontSize = "1.5rem";
            document.getElementById("subscript-rooms-id").style.fontSize = "1.5rem";
            document.getElementById("subscript-main-id").style.fontSize = "1.5rem";
            document.getElementById("subscript-contact-id").style.fontSize = "1.5rem";
            document.getElementById("dining-main-id").paddingTop = "9%";
            document.getElementById("right-roombooking-heading-button").classList.remove("btn-md");
            document.getElementById("right-roombooking-heading-button").classList.remove("btn-sm");
            document.getElementById("right-roombooking-heading-button").classList.add("btn-lg");
        }
        else if (width <= 992 && width > 889) {
            contact.setAttribute("src", "images/contact_us_screen_maybe-1.png");
            diningback.setAttribute("src", "images/gallary_dining_hall.png");
            document.getElementById("subscript-rooms-id").style.paddingTop = "5%";
            roomsback.setAttribute("src", "images/mid_screen.png");
            document.getElementById("bottom-row").style.paddingTop = "140px";
            servicesme.setAttribute("src", "images/lobby_boy.png");
            servicesmain.classList.add("col-8");
            servicesmain.classList.remove("col-12");
            servicessub.classList.add("col-8");
            servicessub.classList.remove("col-12");
            sdocument.getElementById("services-main-heading-id").style.paddingBottom = "4%";
            document.getElementById("services-main-heading-id").style.paddingTop = "25%";
            document.getElementById("subscript-services-id").style.paddingTop = "5%";
            document.getElementById("subscript-services-id").style.paddingBottom = "5%";
            document.getElementById("subscript-services-id").style.marginBottom = "0%";
            document.getElementById("subscript-services-id").style.fontSize = "1.5rem";
            document.getElementById("subscript-dining-id").style.fontSize = "1.5rem";
            document.getElementById("subscript-rooms-id").style.fontSize = "1.5rem";
            document.getElementById("subscript-main-id").style.fontSize = "1.5rem";
            document.getElementById("subscript-contact-id").style.fontSize = "1.5rem";
            document.getElementById("dining-main-id").paddingTop = "9%";
            document.getElementById("right-roombooking-heading-button").classList.remove("btn-md");
            document.getElementById("right-roombooking-heading-button").classList.remove("btn-sm");
            document.getElementById("right-roombooking-heading-button").classList.add("btn-lg");
        }
        else {
            contact.setAttribute("src", "images/contact_us_screen_maybe.png");
            diningback.setAttribute("src", "images/gallary_dining_hall.png");
            document.getElementById("subscript-rooms-id").style.paddingTop = "5%";
            roomsback.setAttribute("src", "images/mid_screen.png");
            document.getElementById("bottom-row").style.paddingTop = "160px";
            servicesme.setAttribute("src", "images/lobby_boy.png");
            servicesmain.classList.add("col-8");
            servicesmain.classList.remove("col-12");
            servicessub.classList.add("col-8");
            servicessub.classList.remove("col-12");
            document.getElementById("services-main-heading-id").style.paddingBottom = "4%";
            document.getElementById("services-main-heading-id").style.paddingTop = "25%";
            document.getElementById("subscript-services-id").style.paddingTop = "5%";
            document.getElementById("subscript-services-id").style.paddingBottom = "5%";
            document.getElementById("subscript-services-id").style.marginBottom = "0%";
            document.getElementById("subscript-services-id").style.fontSize = "1.5rem";
            document.getElementById("subscript-dining-id").style.fontSize = "1.5rem";
            document.getElementById("subscript-rooms-id").style.fontSize = "1.5rem";
            document.getElementById("subscript-main-id").style.fontSize = "1.5rem";
            document.getElementById("subscript-contact-id").style.fontSize = "1.5rem";
            document.getElementById("dining-main-id").paddingTop = "9%";
            document.getElementById("right-roombooking-heading-button").classList.remove("btn-md");
            document.getElementById("right-roombooking-heading-button").classList.remove("btn-sm");
            document.getElementById("right-roombooking-heading-button").classList.add("btn-lg");

        }
    }
});
window.addEventListener("resize", () => {
    // console.log(window.innerWidth);
    // var width = window.innerWidth;
    // if (width <= 330) {
    //     element1.innerHTML = "Starting from $3000 per night, the Presidential Suite is the most luxurious option available at the Grand Budapest Hotel.";
    //     element2.innerHTML = "Starting from $1200 per night, and provides an exquisite experience of the Grand Budapest Hotel.";
    //     element3.innerHTML = "Starting from $500 per night, the Deluxe Room provides basic experience of the Hotel.";
    //     document.getElementById("bookurstay-heading-id").style.fontSize = "35px";
    //     document.getElementById("local-main-heading-id").style.fontSize = "35px";
    //     document.getElementById("rooms-heading-main-id").style.fontSize = "35px";
    //     document.getElementById("services-main-heading-id").style.fontSize = "35px";
    //     document.getElementById("contact-heading-main-id").style.fontSize = "35px";
    //     document.getElementById("main-heading-id").style.fontSize = "35px";
    //     document.getElementById("dining-main-id").style.fontSize = "35px";
    //     document.getElementById("left-roombooking-heading").style.fontSize = "25px";
    //     document.getElementById("hotel-backdrop").setAttribute("src", "images/the_grand_budapest_hotel-2.png");
    // }
    // else if (width <= 500 && width > 330) {
    //     element1.innerHTML = "Starting from $3000 per night, the Presidential Suite is the most luxurious option available at the Grand Budapest Hotel.";
    //     element2.innerHTML = "Starting from $1200 per night, and provides an exquisite experience of the Grand Budapest Hotel.";
    //     element3.innerHTML = "Starting from $500 per night, the Deluxe Room features high-end furnishings, plush bedding, and luxurious amenities.";
    //     document.getElementById("bookurstay-heading-id").style.fontSize = "35px";
    //     document.getElementById("local-main-heading-id").style.fontSize = "35px";
    //     document.getElementById("rooms-heading-main-id").style.fontSize = "35px";
    //     document.getElementById("services-main-heading-id").style.fontSize = "35px";
    //     document.getElementById("contact-heading-main-id").style.fontSize = "35px";
    //     document.getElementById("main-heading-id").style.fontSize = "35px";
    //     document.getElementById("dining-main-id").style.fontSize = "35px";
    //     document.getElementById("left-roombooking-heading").style.fontSize = "25px";
    //     document.getElementById("hotel-backdrop").setAttribute("src", "images/the_grand_budapest_hotel-2.png");
    // }
    // else if (width <= 578 && width > 500) {
    //     element1.innerHTML = "Starting from $3000 per night, the Presidential Suite is the most luxurious option available at the Grand Budapest Hotel.";
    //     element2.innerHTML = "Starting from $1200 per night, and provides an exquisite experience of the Grand Budapest Hotel.";
    //     element3.innerHTML = "Starting from $500 per night, the Deluxe Room features high-end furnishings, plush bedding, and luxurious amenities.";
    //     document.getElementById("bookurstay-heading-id").style.fontSize = "45px";
    //     document.getElementById("local-main-heading-id").style.fontSize = "45px";
    //     document.getElementById("services-main-heading-id").style.fontSize = "45px";
    //     document.getElementById("contact-heading-main-id").style.fontSize = "45px";
    //     document.getElementById("dining-main-id").style.fontSize = "45px";
    //     document.getElementById("rooms-heading-main-id").style.fontSize = "45px";
    //     document.getElementById("main-heading-id").style.fontSize = "40px";
    //     document.getElementById("left-roombooking-heading").style.fontSize = "30px";
    //     document.getElementById("local-main-heading-id").style.paddingTop = "13%";
    //     document.getElementById("rooms-heading-main-id").style.paddingTop = "2%";
    //     document.getElementById("hotel-backdrop").setAttribute("src", "images/the_grand_budapest_hotel-1.png");
    // }
    // else if (width <= 599 && width > 578) {
    //     element1.innerHTML = "Starting from $3000 per night, the Presidential Suite is the most luxurious option available at the Grand Budapest Hotel.";
    //     element2.innerHTML = "Starting from $1200 per night, and provides an exquisite experience of the Grand Budapest Hotel.";
    //     element3.innerHTML = "Starting from $500 per night, the Deluxe Room features high-end furnishings, plush bedding, and luxurious amenities.";
    //     document.getElementById("bookurstay-heading-id").style.fontSize = "55px";
    //     document.getElementById("local-main-heading-id").style.fontSize = "55px";
    //     document.getElementById("services-main-heading-id").style.fontSize = "55px";
    //     document.getElementById("contact-heading-main-id").style.fontSize = "55px";
    //     document.getElementById("dining-main-id").style.fontSize = "55px";
    //     document.getElementById("rooms-heading-main-id").style.fontSize = "55px";
    //     document.getElementById("main-heading-id").style.fontSize = "45px";
    //     document.getElementById("left-roombooking-heading").style.fontSize = "35px";
    //     document.getElementById("local-main-heading-id").style.paddingTop = "20%";
    //     document.getElementById("rooms-heading-main-id").style.paddingTop = "2%";
    //     document.getElementById("hotel-backdrop").setAttribute("src", "images/the_grand_budapest_hotel-1.png");
    // }
    // else if (width <= 840 && width > 599) {
    //     element1.innerHTML = "Starting from $3000 per night, the Presidential Suite is the most luxurious option available at the Grand Budapest Hotel.";
    //     element2.innerHTML = "Starting from $1200 per night, and provides an exquisite experience of the Grand Budapest Hotel.";
    //     element3.innerHTML = "Starting from $500 per night, the Deluxe Room features high-end furnishings, plush bedding, and luxurious amenities.";
    //     document.getElementById("bookurstay-heading-id").style.fontSize = "65px";
    //     document.getElementById("local-main-heading-id").style.fontSize = "65px";
    //     document.getElementById("services-main-heading-id").style.fontSize = "65px";
    //     document.getElementById("dining-main-id").style.fontSize = "65px";
    //     document.getElementById("rooms-heading-main-id").style.fontSize = "65px";
    //     document.getElementById("contact-heading-main-id").style.fontSize = "65px";
    //     document.getElementById("main-heading-id").style.fontSize = "50px";
    //     document.getElementById("left-roombooking-heading").style.fontSize = "40px";
    //     document.getElementById("local-main-heading-id").style.paddingTop = "0%";
    //     document.getElementById("rooms-heading-main-id").style.paddingTop = "2%";
    //     document.getElementById("hotel-backdrop").setAttribute("src", "images/the_grand_budapest_hotel-1.png");
    //     document.getElementById("hidden-nav").style.fontSize = "40px";
    // }
    // else if (width <= 1038 && width > 840) {
    //     element1.innerHTML = "Starting from $3000 per night, the Presidential Suite is the most luxurious option available at the Grand Budapest Hotel.";
    //     element2.innerHTML = "Starting from $1200 per night,<br> and provides an exquisite experience <br> of the Grand Budapest Hotel.";
    //     element3.innerHTML = "Starting from $500 per night,<br> the Deluxe Room features high-end furnishings, plush bedding,<br> and luxurious amenities.";
    //     document.getElementById("bookurstay-heading-id").style.fontSize = "75px";
    //     document.getElementById("local-main-heading-id").style.fontSize = "75px";
    //     document.getElementById("services-main-heading-id").style.fontSize = "75px";
    //     document.getElementById("contact-heading-main-id").style.fontSize = "75px";
    //     document.getElementById("dining-main-id").style.fontSize = "75px";
    //     document.getElementById("rooms-heading-main-id").style.fontSize = "75px";
    //     document.getElementById("main-heading-id").style.fontSize = "65px";
    //     document.getElementById("left-roombooking-heading").style.fontSize = "45px";
    //     document.getElementById("local-main-heading-id").style.paddingTop = "16%";
    //     document.getElementById("rooms-heading-main-id").style.paddingTop = "2%";
    //     document.getElementById("hotel-backdrop").setAttribute("src", "images/the_grand_budapest_hotel-1.png");
    //     document.getElementById("hidden-nav").style.fontSize = "40px";
    // }
    // else if (width <= 1106 && width > 1038) {
    //     element1.innerHTML = "Starting from $3000 per night, the Presidential Suite is the most luxurious option available at the Grand Budapest Hotel.";
    //     element2.innerHTML = "Starting from $1200 per night,<br> the Executive Suite features a <br> large bedroom with a king-size bed, a separate living room with a fireplace, and other faculties.";
    //     document.getElementById("bookurstay-heading-id").style.fontSize = "77px";
    //     document.getElementById("local-main-heading-id").style.fontSize = "77px";
    //     document.getElementById("services-main-heading-id").style.fontSize = "77px";
    //     document.getElementById("dining-main-id").style.fontSize = "77px";
    //     document.getElementById("rooms-heading-main-id").style.fontSize = "77px";
    //     document.getElementById("contact-heading-main-id").style.fontSize = "77px";
    //     document.getElementById("left-roombooking-heading").style.fontSize = "50px";
    //     document.getElementById("main-heading-id").style.fontSize = "70px";
    //     document.getElementById("local-main-heading-id").style.paddingTop = "16%";
    //     document.getElementById("rooms-heading-main-id").style.paddingTop = "10%";
    //     document.getElementById("hotel-backdrop").setAttribute("src", "images/the_grand_budapest_hotel-1.png");
    //     document.getElementById("hidden-nav").style.fontSize = "40px";
    // }
    // else if (width <= 1201 && width > 1106) {
    //     element1.innerHTML = "Starting from $3000 per night, the Presidential Suite is the most luxurious option available at the Grand Budapest Hotel. This suite includes a large master bedroom, a spacious living room with a fireplace and other faculties. "
    //     document.getElementById("bookurstay-heading-id").style.fontSize = "79px";
    //     document.getElementById("local-main-heading-id").style.fontSize = "79px";
    //     document.getElementById("services-main-heading-id").style.fontSize = "79px";
    //     document.getElementById("contact-heading-main-id").style.fontSize = "79px";
    //     document.getElementById("dining-main-id").style.fontSize = "79px";
    //     document.getElementById("rooms-heading-main-id").style.fontSize = "79px";
    //     document.getElementById("left-roombooking-heading").style.fontSize = "55px";
    //     document.getElementById("main-heading-id").style.fontSize = "79px";
    //     document.getElementById("local-main-heading-id").style.paddingTop = "16%";
    //     document.getElementById("local-main-heading-id").style.paddingBottom = "30px";
    //     document.getElementById("roombooking-main-id").style.scale = "0.9";
    //     document.getElementById("hotel-backdrop").setAttribute("src", "images/the_grand_budapest_hotel-1.png");
    //     document.getElementById("hidden-nav").style.fontSize = "40px";
    // }
    // else {
    //     element3.innerHTML = "Starting from $500 per night,<br> the Deluxe Room features high-end furnishings, plush bedding,<br> and luxurious amenities such as <br> a flat-screen TV, minibar, and complimentary Wi-Fi.";
    //     element2.innerHTML = "Starting from $1200 per night,<br> the Executive Suite features a <br> large bedroom with a king-size bed,<br> a separate living room with a fireplace,<br> and a dining area that can <br> accommodate up to six guests.";
    //     element1.innerHTML = "Starting from $3000 per night, the Presidential Suite is the most luxurious option available at the Grand Budapest Hotel. This suite includes a large master bedroom, a spacious living room with a fireplace, a dining room that can accommodate up to 12 guests, and a private balcony.";
    //     document.getElementById("bookurstay-heading-id").style.fontSize = "87px";
    //     document.getElementById("local-main-heading-id").style.fontSize = "87px";
    //     document.getElementById("services-main-heading-id").style.fontSize = "87px";
    //     document.getElementById("contact-heading-main-id").style.fontSize = "87px";
    //     document.getElementById("dining-main-id").style.fontSize = "87px";
    //     document.getElementById("rooms-heading-main-id").style.fontSize = "87px";
    //     document.getElementById("left-roombooking-heading").style.fontSize = "60px";
    //     document.getElementById("main-heading-id").style.fontSize = "87px";
    //     document.getElementById("local-main-heading-id").style.paddingTop = "4%";
    //     document.getElementById("local-main-heading-id").style.paddingBottom = "130px";
    //     document.getElementById("roombooking-main-id").style.scale = "1";
    //     document.getElementById("hotel-backdrop").setAttribute("src", "images/the_grand_budapest_hotel.png");
    //     document.getElementById("hidden-nav").style.fontSize = "40px";
    // }

    // //asdfadfasasfasfasfasfasdfasfasfasf
    // console.log(width);
    // if (width <= 386) {
    //     console.log("here", width);
    //     boourstaybackDrop.setAttribute("src", "images/mid_screen_1-6-transformed.png");
    //     document.getElementById("deluxe-row").style.scale = "0.75";
    //     document.getElementById("deluxe-row").style.position = "relative";
    //     document.getElementById("deluxe-row").style.top = "-100px";
    //     document.getElementById("bookurstay-id").style.height = "750px";
    //     locall.setAttribute("src", "images/local_attractions-5.png");
    //     document.getElementById("localone").innerHTML = "Local";
    //     document.getElementById("conta").innerHTML = "Contact";
    //     document.getElementById("contact-heading-main-id").style.marginTop = "20%";
    // }
    // else if (width <= 458 && width > 386) {
    //     boourstaybackDrop.setAttribute("src", "images/mid_screen_1-6-transformed.png");
    //     document.getElementById("deluxe-row").style.scale = "0.75";
    //     document.getElementById("deluxe-row").style.position = "relative";
    //     document.getElementById("deluxe-row").style.top = "-100px";
    //     document.getElementById("bookurstay-id").style.height = "auto";
    //     locall.setAttribute("src", "images/local_attractions-5.png");
    //     document.getElementById("localone").innerHTML = "Local Attractions";
    //     document.getElementById("conta").innerHTML = "Contact Us";
    //     document.getElementById("contact-heading-main-id").style.marginTop = "0%";
    // }
    // else if (width <= 558 && width > 458) {
    //     document.getElementById("deluxe-row").style.scale = "0.65";
    //     document.getElementById("deluxe-row").style.position = "relative";
    //     document.getElementById("deluxe-row").style.top = "-130px";
    //     document.getElementById("bookurstay-id").style.height = "750px";
    //     boourstaybackDrop.setAttribute("src", "images/mid_screen_1-5.png");
    //     locall.setAttribute("src", "images/local_attractions-5.png");
    //     document.getElementById("spans").style.display = "none";
    //     document.getElementById("spans-2").style.display = "none";
    //     document.getElementById("localone").innerHTML = "Local Attractions";
    //     document.getElementById("conta").innerHTML = "Contact Us";
    //     document.getElementById("contact-heading-main-id").style.marginTop = "0%";
    // }
    // else if (width <= 578 && width > 558) {
    //     document.getElementById("deluxe-row").style.position = "static";
    //     document.getElementById("deluxe-row").style.scale = "0.95";
    //     boourstaybackDrop.setAttribute("src", "images/mid_screen_1-5.png");
    //     document.getElementById("bookurstay-id").style.height = "auto";
    //     locall.setAttribute("src", "images/local_attractions-5.png");
    //     document.getElementById("hidden-nav").style.fontSize = "15px";
    //     document.getElementById("spans").style.display = "block";
    //     document.getElementById("spans-2").style.display = "block";
    //     document.getElementById("localone").innerHTML = "Local Attractions";
    //     document.getElementById("conta").innerHTML = "Contact Us";
    //     document.getElementById("contact-heading-main-id").style.marginTop = "0%";
    // }
    // else if (width <= 693 && width > 578) {
    //     document.getElementById("deluxe-row").style.position = "static";
    //     document.getElementById("deluxe-row").style.scale = "0.95";
    //     boourstaybackDrop.setAttribute("src", "images/mid_screen_1-4.png");
    //     document.getElementById("bookurstay-id").style.height = "auto";
    //     locall.setAttribute("src", "images/local_attractions-4.png");
    //     document.getElementById("hidden-nav").style.fontSize = "20px";
    //     document.getElementById("spans").style.display = "block";
    //     document.getElementById("spans-2").style.display = "block";
    //     document.getElementById("localone").innerHTML = "Local Attractions";
    //     document.getElementById("conta").innerHTML = "Contact Us";
    //     document.getElementById("contact-heading-main-id").style.marginTop = "0%";
    // }
    // else if (width <= 840 && width > 693) {
    //     document.getElementById("deluxe-row").style.position = "static";
    //     document.getElementById("deluxe-row").style.scale = "0.95";
    //     boourstaybackDrop.setAttribute("src", "images/mid_screen_1-3.png");
    //     document.getElementById("bookurstay-id").style.height = "auto";
    //     locall.setAttribute("src", "images/local_attractions-4.png");
    //     document.getElementById("hidden-nav").style.fontSize = "22px";
    //     document.getElementById("spans").style.display = "block";
    //     document.getElementById("spans-2").style.display = "block";
    //     document.getElementById("localone").innerHTML = "Local Attractions";
    //     document.getElementById("conta").innerHTML = "Contact Us";
    //     document.getElementById("contact-heading-main-id").style.marginTop = "0%";
    // }
    // else if (width <= 889 && width > 840) {
    //     document.getElementById("deluxe-row").style.position = "static";
    //     document.getElementById("deluxe-row").style.scale = "0.95";
    //     boourstaybackDrop.setAttribute("src", "images/mid_screen_1-2.png");
    //     document.getElementById("bookurstay-id").style.height = "auto";
    //     locall.setAttribute("src", "images/local_attractions-2.png");
    //     document.getElementById("hidden-nav").style.fontSize = "22px";
    //     document.getElementById("spans").style.display = "block";
    //     document.getElementById("spans-2").style.display = "block";
    //     document.getElementById("localone").innerHTML = "Local Attractions";
    //     document.getElementById("conta").innerHTML = "Contact Us";
    //     document.getElementById("contact-heading-main-id").style.marginTop = "0%";
    // }
    // else if (width <= 992 && width > 889) {
    //     document.getElementById("deluxe-row").style.position = "static";
    //     document.getElementById("deluxe-row").style.scale = "0.95";
    //     boourstaybackDrop.setAttribute("src", "images/mid_screen_1-1.png");
    //     document.getElementById("bookurstay-heading-id").style.paddingTop = "0%";
    //     document.getElementById("bookurstay-id").style.height = "auto";
    //     locall.setAttribute("src", "images/local_attractions-2.png");
    //     document.getElementById("hidden-nav").style.fontSize = "22px";
    //     document.getElementById("hidden-nav").classList.remove = "d-block";
    //     document.getElementById("hidden-nav").classList.add = "d-felx";
    //     document.getElementById("spans").style.display = "block";
    //     document.getElementById("spans-2").style.display = "block";
    //     document.getElementById("localone").innerHTML = "Local Attractions";
    //     document.getElementById("conta").innerHTML = "Contact Us";
    //     document.getElementById("contact-heading-main-id").style.marginTop = "0%";
    // }
    // else {
    //     document.getElementById("deluxe-row").style.position = "static";
    //     document.getElementById("deluxe-row").style.scale = "0.95";
    //     boourstaybackDrop.setAttribute("src", "images/mid_screen_1.png");
    //     document.getElementById("bookurstay-heading-id").style.paddingTop = "7%";
    //     document.getElementById("bookurstay-id").style.height = "auto";
    //     locall.setAttribute("src", "images/local_attractions-2.png");
    //     document.getElementById("hidden-nav").style.fontSize = "24px";
    //     document.getElementById("hidden-nav").classList.remove = "d-block";
    //     document.getElementById("hidden-nav").classList.add = "d-felx";
    //     document.getElementById("spans").style.display = "block";
    //     document.getElementById("spans-2").style.display = "block";
    //     document.getElementById("localone").innerHTML = "Local Attractions";
    //     document.getElementById("conta").innerHTML = "Contact Us";
    //     document.getElementById("contact-heading-main-id").style.marginTop = "0%";
    // }


    // if (width <= 458) {
    //     contact.setAttribute("src", "images/contact_us_screen_maybe-6-transformed.png");
    //     diningback.setAttribute("src", "images/gallary_dining_hall-2.png");
    //     document.getElementById("bottom-row").style.paddingTop = "5px";
    //     document.getElementById("subscript-rooms-id").style.paddingTop = "2%";
    //     document.getElementById("subscript-services-id").style.fontSize = "1.0rem";
    //     document.getElementById("subscript-dining-id").style.fontSize = "1.0rem";
    //     document.getElementById("subscript-rooms-id").style.fontSize = "1.0rem";
    //     document.getElementById("subscript-main-id").style.fontSize = "1.0rem";
    //     document.getElementById("subscript-contact-id").style.fontSize = "1.0rem";
    //     document.getElementById("right-roombooking-heading-button").classList.remove("btn-md");
    //     document.getElementById("right-roombooking-heading-button").classList.remove("btn-lg");
    //     document.getElementById("right-roombooking-heading-button").classList.add("btn-sm");
    // }
    // else if (width <= 578 && width > 458) {
    //     contact.setAttribute("src", "images/contact_us_screen_maybe-5.png");
    //     diningback.setAttribute("src", "images/gallary_dining_hall-1.png");
    //     document.getElementById("subscript-rooms-id").style.paddingTop = "5%";
    //     document.getElementById("bottom-row").style.paddingTop = "15px";
    //     document.getElementById("services-main-heading-id").style.paddingBottom = "0%";
    //     document.getElementById("services-main-heading-id").style.paddingTop = "8%";
    //     document.getElementById("subscript-services-id").style.paddingTop = "2%";
    //     document.getElementById("subscript-services-id").style.paddingBottom = "2%";
    //     document.getElementById("subscript-services-id").style.fontSize = "1.2rem";
    //     document.getElementById("subscript-dining-id").style.fontSize = "1.2rem";
    //     document.getElementById("subscript-rooms-id").style.fontSize = "1.2rem";
    //     document.getElementById("subscript-main-id").style.fontSize = "1.2rem";
    //     document.getElementById("subscript-contact-id").style.fontSize = "1.2rem";
    //     document.getElementById("right-roombooking-heading-button").classList.remove("btn-md");
    //     document.getElementById("right-roombooking-heading-button").classList.remove("btn-lg");
    //     document.getElementById("right-roombooking-heading-button").classList.add("btn-sm");
    // }
    // else if (width <= 693 && width > 578) {
    //     contact.setAttribute("src", "images/contact_us_screen_maybe-4.png");
    //     diningback.setAttribute("src", "images/gallary_dining_hall-1.png");
    //     document.getElementById("subscript-rooms-id").style.paddingTop = "5%";
    //     document.getElementById("bottom-row").style.paddingTop = "40px";
    //     servicesmain.classList.add("col-12");
    //     servicesmain.classList.remove("col-8");
    //     servicessub.classList.add("col-12");
    //     servicessub.classList.remove("col-8");
    //     document.getElementById("services-main-heading-id").style.paddingBottom = "0%";
    //     document.getElementById("services-main-heading-id").style.paddingTop = "12%";
    //     document.getElementById("subscript-services-id").style.paddingTop = "5%";
    //     document.getElementById("subscript-services-id").style.paddingBottom = "5%";
    //     document.getElementById("subscript-services-id").style.marginBottom = "0%";
    //     document.getElementById("subscript-services-id").style.fontSize = "1.5rem";
    //     document.getElementById("subscript-dining-id").style.fontSize = "1.5rem";
    //     document.getElementById("subscript-rooms-id").style.fontSize = "1.5rem";
    //     document.getElementById("subscript-main-id").style.fontSize = "1.5rem";
    //     document.getElementById("subscript-contact-id").style.fontSize = "1.5rem";
    //     document.getElementById("right-roombooking-heading-button").classList.remove("btn-lg");
    //     document.getElementById("right-roombooking-heading-button").classList.remove("btn-sm");
    //     document.getElementById("right-roombooking-heading-button").classList.add("btn-md");
    // }
    // else if (width <= 840 && width > 693) {
    //     contact.setAttribute("src", "images/contact_us_screen_maybe-3.png");
    //     diningback.setAttribute("src", "images/gallary_dining_hall-1.png");
    //     document.getElementById("subscript-rooms-id").style.paddingTop = "5%";
    //     roomsback.setAttribute("src", "images/mid_screen-1.png");
    //     document.getElementById("bottom-row").style.paddingTop = "60px";
    //     servicesmain.classList.add("col-8");
    //     servicesmain.classList.remove("col-12");
    //     servicessub.classList.add("col-8");
    //     servicessub.classList.remove("col-12");
    //     document.getElementById("services-main-heading-id").style.paddingBottom = "4%";
    //     document.getElementById("services-main-heading-id").style.paddingTop = "25%";
    //     document.getElementById("subscript-services-id").style.paddingTop = "5%";
    //     document.getElementById("subscript-services-id").style.paddingBottom = "5%";
    //     document.getElementById("subscript-services-id").style.marginBottom = "0%";
    //     document.getElementById("subscript-services-id").style.fontSize = "1.5rem";
    //     document.getElementById("subscript-dining-id").style.fontSize = "1.5rem";
    //     document.getElementById("subscript-rooms-id").style.fontSize = "1.5rem";
    //     document.getElementById("subscript-main-id").style.fontSize = "1.5rem";
    //     document.getElementById("subscript-contact-id").style.fontSize = "1.5rem";
    //     document.getElementById("dining-main-id").paddingTop = "5%";
    //     document.getElementById("right-roombooking-heading-button").classList.remove("btn-lg");
    //     document.getElementById("right-roombooking-heading-button").classList.remove("btn-sm");
    //     document.getElementById("right-roombooking-heading-button").classList.add("btn-md");
    // }
    // else if (width <= 889 && width > 840) {
    //     contact.setAttribute("src", "images/contact_us_screen_maybe-2.png");
    //     diningback.setAttribute("src", "images/gallary_dining_hall.png");
    //     document.getElementById("subscript-rooms-id").style.paddingTop = "5%";
    //     roomsback.setAttribute("src", "images/mid_screen.png");
    //     document.getElementById("bottom-row").style.paddingTop = "100px";
    //     servicesme.setAttribute("src", "images/lobby_boy-1.png");
    //     servicesmain.classList.add("col-8");
    //     servicesmain.classList.remove("col-12");
    //     servicessub.classList.add("col-8");
    //     servicessub.classList.remove("col-12");
    //     document.getElementById("services-main-heading-id").style.paddingBottom = "4%";
    //     document.getElementById("services-main-heading-id").style.paddingTop = "25%";
    //     document.getElementById("subscript-services-id").style.paddingTop = "5%";
    //     document.getElementById("subscript-services-id").style.paddingBottom = "5%";
    //     document.getElementById("subscript-services-id").style.marginBottom = "0%";
    //     document.getElementById("subscript-services-id").style.fontSize = "1.5rem";
    //     document.getElementById("subscript-dining-id").style.fontSize = "1.5rem";
    //     document.getElementById("subscript-rooms-id").style.fontSize = "1.5rem";
    //     document.getElementById("subscript-main-id").style.fontSize = "1.5rem";
    //     document.getElementById("subscript-contact-id").style.fontSize = "1.5rem";
    //     document.getElementById("dining-main-id").paddingTop = "9%";
    //     document.getElementById("right-roombooking-heading-button").classList.remove("btn-md");
    //     document.getElementById("right-roombooking-heading-button").classList.remove("btn-sm");
    //     document.getElementById("right-roombooking-heading-button").classList.add("btn-lg");
    // }
    // else if (width <= 992 && width > 889) {
    //     contact.setAttribute("src", "images/contact_us_screen_maybe-1.png");
    //     diningback.setAttribute("src", "images/gallary_dining_hall.png");
    //     document.getElementById("subscript-rooms-id").style.paddingTop = "5%";
    //     roomsback.setAttribute("src", "images/mid_screen.png");
    //     document.getElementById("bottom-row").style.paddingTop = "140px";
    //     servicesme.setAttribute("src", "images/lobby_boy.png");
    //     servicesmain.classList.add("col-8");
    //     servicesmain.classList.remove("col-12");
    //     servicessub.classList.add("col-8");
    //     servicessub.classList.remove("col-12");
    //     sdocument.getElementById("services-main-heading-id").style.paddingBottom = "4%";
    //     document.getElementById("services-main-heading-id").style.paddingTop = "25%";
    //     document.getElementById("subscript-services-id").style.paddingTop = "5%";
    //     document.getElementById("subscript-services-id").style.paddingBottom = "5%";
    //     document.getElementById("subscript-services-id").style.marginBottom = "0%";
    //     document.getElementById("subscript-services-id").style.fontSize = "1.5rem";
    //     document.getElementById("subscript-dining-id").style.fontSize = "1.5rem";
    //     document.getElementById("subscript-rooms-id").style.fontSize = "1.5rem";
    //     document.getElementById("subscript-main-id").style.fontSize = "1.5rem";
    //     document.getElementById("subscript-contact-id").style.fontSize = "1.5rem";
    //     document.getElementById("dining-main-id").paddingTop = "9%";
    //     document.getElementById("right-roombooking-heading-button").classList.remove("btn-md");
    //     document.getElementById("right-roombooking-heading-button").classList.remove("btn-sm");
    //     document.getElementById("right-roombooking-heading-button").classList.add("btn-lg");
    // }
    // else {
    //     contact.setAttribute("src", "images/contact_us_screen_maybe.png");
    //     diningback.setAttribute("src", "images/gallary_dining_hall.png");
    //     document.getElementById("subscript-rooms-id").style.paddingTop = "5%";
    //     roomsback.setAttribute("src", "images/mid_screen.png");
    //     document.getElementById("bottom-row").style.paddingTop = "160px";
    //     servicesme.setAttribute("src", "images/lobby_boy.png");
    //     servicesmain.classList.add("col-8");
    //     servicesmain.classList.remove("col-12");
    //     servicessub.classList.add("col-8");
    //     servicessub.classList.remove("col-12");
    //     document.getElementById("services-main-heading-id").style.paddingBottom = "4%";
    //     document.getElementById("services-main-heading-id").style.paddingTop = "25%";
    //     document.getElementById("subscript-services-id").style.paddingTop = "5%";
    //     document.getElementById("subscript-services-id").style.paddingBottom = "5%";
    //     document.getElementById("subscript-services-id").style.marginBottom = "0%";
    //     document.getElementById("subscript-services-id").style.fontSize = "1.5rem";
    //     document.getElementById("subscript-dining-id").style.fontSize = "1.5rem";
    //     document.getElementById("subscript-rooms-id").style.fontSize = "1.5rem";
    //     document.getElementById("subscript-main-id").style.fontSize = "1.5rem";
    //     document.getElementById("subscript-contact-id").style.fontSize = "1.5rem";
    //     document.getElementById("dining-main-id").paddingTop = "9%";
    //     document.getElementById("right-roombooking-heading-button").classList.remove("btn-md");
    //     document.getElementById("right-roombooking-heading-button").classList.remove("btn-sm");
    //     document.getElementById("right-roombooking-heading-button").classList.add("btn-lg");

    // }
    if (document.getElementById("styless").getAttribute("href") == "css/styles_night.css") {
        var width = window.innerWidth;
        if (width <= 330) {
            element1.innerHTML = "Starting from $3000 per night, the Presidential Suite is the most luxurious option available at the Grand Budapest Hotel.";
            element2.innerHTML = "Starting from $1200 per night, and provides an exquisite experience of the Grand Budapest Hotel.";
            element3.innerHTML = "Starting from $500 per night, the Deluxe Room provides basic experience of the Hotel.";
            document.getElementById("bookurstay-heading-id").style.fontSize = "35px";
            document.getElementById("local-main-heading-id").style.fontSize = "35px";
            document.getElementById("rooms-heading-main-id").style.fontSize = "35px";
            document.getElementById("services-main-heading-id").style.fontSize = "35px";
            document.getElementById("contact-heading-main-id").style.fontSize = "35px";
            document.getElementById("main-heading-id").style.fontSize = "35px";
            document.getElementById("dining-main-id").style.fontSize = "35px";
            document.getElementById("left-roombooking-heading").style.fontSize = "25px";
            document.getElementById("hotel-backdrop").setAttribute("src", "images/the_grand_budapest_hotel_night-2.png");
        }
        else if (width <= 500 && width > 330) {
            element1.innerHTML = "Starting from $3000 per night, the Presidential Suite is the most luxurious option available at the Grand Budapest Hotel.";
            element2.innerHTML = "Starting from $1200 per night, and provides an exquisite experience of the Grand Budapest Hotel.";
            element3.innerHTML = "Starting from $500 per night, the Deluxe Room features high-end furnishings, plush bedding, and luxurious amenities.";
            document.getElementById("bookurstay-heading-id").style.fontSize = "35px";
            document.getElementById("local-main-heading-id").style.fontSize = "35px";
            document.getElementById("rooms-heading-main-id").style.fontSize = "35px";
            document.getElementById("services-main-heading-id").style.fontSize = "35px";
            document.getElementById("contact-heading-main-id").style.fontSize = "35px";
            document.getElementById("main-heading-id").style.fontSize = "35px";
            document.getElementById("dining-main-id").style.fontSize = "35px";
            document.getElementById("left-roombooking-heading").style.fontSize = "25px";
            document.getElementById("hotel-backdrop").setAttribute("src", "images/the_grand_budapest_hotel_night-2.png");
        }
        else if (width <= 578 && width > 500) {
            element1.innerHTML = "Starting from $3000 per night, the Presidential Suite is the most luxurious option available at the Grand Budapest Hotel.";
            element2.innerHTML = "Starting from $1200 per night, and provides an exquisite experience of the Grand Budapest Hotel.";
            element3.innerHTML = "Starting from $500 per night, the Deluxe Room features high-end furnishings, plush bedding, and luxurious amenities.";
            document.getElementById("bookurstay-heading-id").style.fontSize = "45px";
            document.getElementById("local-main-heading-id").style.fontSize = "45px";
            document.getElementById("services-main-heading-id").style.fontSize = "45px";
            document.getElementById("contact-heading-main-id").style.fontSize = "45px";
            document.getElementById("dining-main-id").style.fontSize = "45px";
            document.getElementById("rooms-heading-main-id").style.fontSize = "45px";
            document.getElementById("main-heading-id").style.fontSize = "40px";
            document.getElementById("left-roombooking-heading").style.fontSize = "30px";
            document.getElementById("local-main-heading-id").style.paddingTop = "13%";
            document.getElementById("rooms-heading-main-id").style.paddingTop = "2%";
            document.getElementById("hotel-backdrop").setAttribute("src", "images/the_grand_budapest_hotel_night-2.png");
        }
        else if (width <= 599 && width > 578) {
            element1.innerHTML = "Starting from $3000 per night, the Presidential Suite is the most luxurious option available at the Grand Budapest Hotel.";
            element2.innerHTML = "Starting from $1200 per night, and provides an exquisite experience of the Grand Budapest Hotel.";
            element3.innerHTML = "Starting from $500 per night, the Deluxe Room features high-end furnishings, plush bedding, and luxurious amenities.";
            document.getElementById("bookurstay-heading-id").style.fontSize = "55px";
            document.getElementById("local-main-heading-id").style.fontSize = "55px";
            document.getElementById("services-main-heading-id").style.fontSize = "55px";
            document.getElementById("contact-heading-main-id").style.fontSize = "55px";
            document.getElementById("dining-main-id").style.fontSize = "55px";
            document.getElementById("rooms-heading-main-id").style.fontSize = "55px";
            document.getElementById("main-heading-id").style.fontSize = "45px";
            document.getElementById("left-roombooking-heading").style.fontSize = "35px";
            document.getElementById("local-main-heading-id").style.paddingTop = "20%";
            document.getElementById("rooms-heading-main-id").style.paddingTop = "2%";
            document.getElementById("hotel-backdrop").setAttribute("src", "images/the_grand_budapest_hotel_night-2.png");
        }
        else if (width <= 840 && width > 599) {
            element1.innerHTML = "Starting from $3000 per night, the Presidential Suite is the most luxurious option available at the Grand Budapest Hotel.";
            element2.innerHTML = "Starting from $1200 per night, and provides an exquisite experience of the Grand Budapest Hotel.";
            element3.innerHTML = "Starting from $500 per night, the Deluxe Room features high-end furnishings, plush bedding, and luxurious amenities.";
            document.getElementById("bookurstay-heading-id").style.fontSize = "65px";
            document.getElementById("local-main-heading-id").style.fontSize = "65px";
            document.getElementById("services-main-heading-id").style.fontSize = "65px";
            document.getElementById("dining-main-id").style.fontSize = "65px";
            document.getElementById("rooms-heading-main-id").style.fontSize = "65px";
            document.getElementById("contact-heading-main-id").style.fontSize = "65px";
            document.getElementById("main-heading-id").style.fontSize = "50px";
            document.getElementById("left-roombooking-heading").style.fontSize = "40px";
            document.getElementById("local-main-heading-id").style.paddingTop = "0%";
            document.getElementById("rooms-heading-main-id").style.paddingTop = "2%";
            document.getElementById("hotel-backdrop").setAttribute("src", "images/the_grand_budapest_hotel_night-1_1.png");
            document.getElementById("hidden-nav").style.fontSize = "40px";
        }
        else if (width <= 1038 && width > 840) {
            element1.innerHTML = "Starting from $3000 per night, the Presidential Suite is the most luxurious option available at the Grand Budapest Hotel.";
            element2.innerHTML = "Starting from $1200 per night,<br> and provides an exquisite experience <br> of the Grand Budapest Hotel.";
            element3.innerHTML = "Starting from $500 per night,<br> the Deluxe Room features high-end furnishings, plush bedding,<br> and luxurious amenities.";
            document.getElementById("bookurstay-heading-id").style.fontSize = "75px";
            document.getElementById("local-main-heading-id").style.fontSize = "75px";
            document.getElementById("services-main-heading-id").style.fontSize = "75px";
            document.getElementById("contact-heading-main-id").style.fontSize = "75px";
            document.getElementById("dining-main-id").style.fontSize = "75px";
            document.getElementById("rooms-heading-main-id").style.fontSize = "75px";
            document.getElementById("main-heading-id").style.fontSize = "65px";
            document.getElementById("left-roombooking-heading").style.fontSize = "45px";
            document.getElementById("local-main-heading-id").style.paddingTop = "16%";
            document.getElementById("rooms-heading-main-id").style.paddingTop = "2%";
            document.getElementById("hotel-backdrop").setAttribute("src", "images/the_grand_budapest_hotel_night-1.png");
            document.getElementById("hidden-nav").style.fontSize = "40px";
        }
        else if (width <= 1106 && width > 1038) {
            element1.innerHTML = "Starting from $3000 per night, the Presidential Suite is the most luxurious option available at the Grand Budapest Hotel.";
            element2.innerHTML = "Starting from $1200 per night,<br> the Executive Suite features a <br> large bedroom with a king-size bed, a separate living room with a fireplace, and other faculties.";
            document.getElementById("bookurstay-heading-id").style.fontSize = "77px";
            document.getElementById("local-main-heading-id").style.fontSize = "77px";
            document.getElementById("services-main-heading-id").style.fontSize = "77px";
            document.getElementById("dining-main-id").style.fontSize = "77px";
            document.getElementById("rooms-heading-main-id").style.fontSize = "77px";
            document.getElementById("contact-heading-main-id").style.fontSize = "77px";
            document.getElementById("left-roombooking-heading").style.fontSize = "50px";
            document.getElementById("main-heading-id").style.fontSize = "70px";
            document.getElementById("local-main-heading-id").style.paddingTop = "16%";
            document.getElementById("rooms-heading-main-id").style.paddingTop = "10%";
            document.getElementById("hotel-backdrop").setAttribute("src", "images/the_grand_budapest_hotel_night-1.png");
            document.getElementById("hidden-nav").style.fontSize = "40px";
        }
        else if (width <= 1201 && width > 1106) {
            element1.innerHTML = "Starting from $3000 per night, the Presidential Suite is the most luxurious option available at the Grand Budapest Hotel. This suite includes a large master bedroom, a spacious living room with a fireplace and other faculties. "
            document.getElementById("bookurstay-heading-id").style.fontSize = "79px";
            document.getElementById("local-main-heading-id").style.fontSize = "79px";
            document.getElementById("services-main-heading-id").style.fontSize = "79px";
            document.getElementById("contact-heading-main-id").style.fontSize = "79px";
            document.getElementById("dining-main-id").style.fontSize = "79px";
            document.getElementById("rooms-heading-main-id").style.fontSize = "79px";
            document.getElementById("left-roombooking-heading").style.fontSize = "55px";
            document.getElementById("main-heading-id").style.fontSize = "79px";
            document.getElementById("local-main-heading-id").style.paddingTop = "16%";
            document.getElementById("local-main-heading-id").style.paddingBottom = "30px";
            document.getElementById("roombooking-main-id").style.scale = "0.9";
            document.getElementById("hotel-backdrop").setAttribute("src", "images/the_grand_budapest_hotel_night-1.png");
            document.getElementById("hidden-nav").style.fontSize = "40px";
        }
        else {
            element3.innerHTML = "Starting from $500 per night,<br> the Deluxe Room features high-end furnishings, plush bedding,<br> and luxurious amenities such as <br> a flat-screen TV, minibar, and complimentary Wi-Fi.";
            element2.innerHTML = "Starting from $1200 per night,<br> the Executive Suite features a <br> large bedroom with a king-size bed,<br> a separate living room with a fireplace,<br> and a dining area that can <br> accommodate up to six guests.";
            element1.innerHTML = "Starting from $3000 per night, the Presidential Suite is the most luxurious option available at the Grand Budapest Hotel. This suite includes a large master bedroom, a spacious living room with a fireplace, a dining room that can accommodate up to 12 guests, and a private balcony.";
            document.getElementById("bookurstay-heading-id").style.fontSize = "87px";
            document.getElementById("local-main-heading-id").style.fontSize = "87px";
            document.getElementById("services-main-heading-id").style.fontSize = "87px";
            document.getElementById("contact-heading-main-id").style.fontSize = "87px";
            document.getElementById("dining-main-id").style.fontSize = "87px";
            document.getElementById("rooms-heading-main-id").style.fontSize = "87px";
            document.getElementById("left-roombooking-heading").style.fontSize = "60px";
            document.getElementById("main-heading-id").style.fontSize = "87px";
            document.getElementById("local-main-heading-id").style.paddingTop = "4%";
            document.getElementById("local-main-heading-id").style.paddingBottom = "130px";
            document.getElementById("roombooking-main-id").style.scale = "1";
            document.getElementById("hotel-backdrop").setAttribute("src", "images/the_grand_budapest_hotel_night.png");
            document.getElementById("hidden-nav").style.fontSize = "40px";
        }

        //asdfadfasasfasfasfasfasdfasfasfasf
        console.log(width);
        if (width <= 386) {
            console.log("here", width);
            boourstaybackDrop.setAttribute("src", "images/mid_screen_1-6-transformed.png");
            document.getElementById("deluxe-row").style.scale = "0.75";
            document.getElementById("deluxe-row").style.position = "relative";
            document.getElementById("deluxe-row").style.top = "-100px";
            document.getElementById("bookurstay-id").style.height = "750px";
            locall.setAttribute("src", "images/local_attractions-5.png");
            document.getElementById("localone").innerHTML = "Local";
            document.getElementById("conta").innerHTML = "Contact";
            document.getElementById("contact-heading-main-id").style.marginTop = "20%";
        }
        else if (width <= 458 && width > 386) {
            boourstaybackDrop.setAttribute("src", "images/mid_screen_1-6-transformed.png");
            document.getElementById("deluxe-row").style.scale = "0.75";
            document.getElementById("deluxe-row").style.position = "relative";
            document.getElementById("deluxe-row").style.top = "-100px";
            document.getElementById("bookurstay-id").style.height = "auto";
            locall.setAttribute("src", "images/local_attractions-5.png");
            document.getElementById("localone").innerHTML = "Local Attractions";
            document.getElementById("conta").innerHTML = "Contact Us";
            document.getElementById("contact-heading-main-id").style.marginTop = "0%";
        }
        else if (width <= 558 && width > 458) {
            document.getElementById("deluxe-row").style.scale = "0.65";
            document.getElementById("deluxe-row").style.position = "relative";
            document.getElementById("deluxe-row").style.top = "-130px";
            document.getElementById("bookurstay-id").style.height = "750px";
            boourstaybackDrop.setAttribute("src", "images/mid_screen_1-5.png");
            locall.setAttribute("src", "images/local_attractions-5.png");
            document.getElementById("spans").style.display = "none";
            document.getElementById("spans-2").style.display = "none";
            document.getElementById("localone").innerHTML = "Local Attractions";
            document.getElementById("conta").innerHTML = "Contact Us";
            document.getElementById("contact-heading-main-id").style.marginTop = "0%";
        }
        else if (width <= 578 && width > 558) {
            document.getElementById("deluxe-row").style.position = "static";
            document.getElementById("deluxe-row").style.scale = "0.95";
            boourstaybackDrop.setAttribute("src", "images/mid_screen_1-5.png");
            document.getElementById("bookurstay-id").style.height = "auto";
            locall.setAttribute("src", "images/local_attractions-5.png");
            document.getElementById("hidden-nav").style.fontSize = "15px";
            document.getElementById("spans").style.display = "block";
            document.getElementById("spans-2").style.display = "block";
            document.getElementById("localone").innerHTML = "Local Attractions";
            document.getElementById("conta").innerHTML = "Contact Us";
            document.getElementById("contact-heading-main-id").style.marginTop = "0%";
        }
        else if (width <= 693 && width > 578) {
            document.getElementById("deluxe-row").style.position = "static";
            document.getElementById("deluxe-row").style.scale = "0.95";
            boourstaybackDrop.setAttribute("src", "images/mid_screen_1-4.png");
            document.getElementById("bookurstay-id").style.height = "auto";
            locall.setAttribute("src", "images/local_attractions-4.png");
            document.getElementById("hidden-nav").style.fontSize = "20px";
            document.getElementById("spans").style.display = "block";
            document.getElementById("spans-2").style.display = "block";
            document.getElementById("localone").innerHTML = "Local Attractions";
            document.getElementById("conta").innerHTML = "Contact Us";
            document.getElementById("contact-heading-main-id").style.marginTop = "0%";
        }
        else if (width <= 840 && width > 693) {
            document.getElementById("deluxe-row").style.position = "static";
            document.getElementById("deluxe-row").style.scale = "0.95";
            boourstaybackDrop.setAttribute("src", "images/mid_screen_1-3.png");
            document.getElementById("bookurstay-id").style.height = "auto";
            locall.setAttribute("src", "images/local_attractions-4.png");
            document.getElementById("hidden-nav").style.fontSize = "22px";
            document.getElementById("spans").style.display = "block";
            document.getElementById("spans-2").style.display = "block";
            document.getElementById("localone").innerHTML = "Local Attractions";
            document.getElementById("conta").innerHTML = "Contact Us";
            document.getElementById("contact-heading-main-id").style.marginTop = "0%";
        }
        else if (width <= 889 && width > 840) {
            document.getElementById("deluxe-row").style.position = "static";
            document.getElementById("deluxe-row").style.scale = "0.95";
            boourstaybackDrop.setAttribute("src", "images/mid_screen_1-2.png");
            document.getElementById("bookurstay-id").style.height = "auto";
            locall.setAttribute("src", "images/local_attractions-2.png");
            document.getElementById("hidden-nav").style.fontSize = "22px";
            document.getElementById("spans").style.display = "block";
            document.getElementById("spans-2").style.display = "block";
            document.getElementById("localone").innerHTML = "Local Attractions";
            document.getElementById("conta").innerHTML = "Contact Us";
            document.getElementById("contact-heading-main-id").style.marginTop = "0%";
        }
        else if (width <= 992 && width > 889) {
            document.getElementById("deluxe-row").style.position = "static";
            document.getElementById("deluxe-row").style.scale = "0.95";
            boourstaybackDrop.setAttribute("src", "images/mid_screen_1-1.png");
            document.getElementById("bookurstay-heading-id").style.paddingTop = "0%";
            document.getElementById("bookurstay-id").style.height = "auto";
            locall.setAttribute("src", "images/local_attractions-2.png");
            document.getElementById("hidden-nav").style.fontSize = "22px";
            document.getElementById("hidden-nav").classList.remove = "d-block";
            document.getElementById("hidden-nav").classList.add = "d-felx";
            document.getElementById("spans").style.display = "block";
            document.getElementById("spans-2").style.display = "block";
            document.getElementById("localone").innerHTML = "Local Attractions";
            document.getElementById("conta").innerHTML = "Contact Us";
            document.getElementById("contact-heading-main-id").style.marginTop = "0%";
        }
        else {
            document.getElementById("deluxe-row").style.position = "static";
            document.getElementById("deluxe-row").style.scale = "0.95";
            boourstaybackDrop.setAttribute("src", "images/mid_screen_1.png");
            document.getElementById("bookurstay-heading-id").style.paddingTop = "7%";
            document.getElementById("bookurstay-id").style.height = "auto";
            locall.setAttribute("src", "images/local_attractions-2.png");
            document.getElementById("hidden-nav").style.fontSize = "24px";
            document.getElementById("hidden-nav").classList.remove = "d-block";
            document.getElementById("hidden-nav").classList.add = "d-felx";
            document.getElementById("spans").style.display = "block";
            document.getElementById("spans-2").style.display = "block";
            document.getElementById("localone").innerHTML = "Local Attractions";
            document.getElementById("conta").innerHTML = "Contact Us";
            document.getElementById("contact-heading-main-id").style.marginTop = "0%";
        }


        if (width <= 458) {
            contact.setAttribute("src", "images/contact_us_screen_maybe-6-transformed.png");
            diningback.setAttribute("src", "images/gallary_dining_hall-2.png");
            document.getElementById("bottom-row").style.paddingTop = "5px";
            document.getElementById("subscript-rooms-id").style.paddingTop = "2%";
            document.getElementById("subscript-services-id").style.fontSize = "1.0rem";
            document.getElementById("subscript-dining-id").style.fontSize = "1.0rem";
            document.getElementById("subscript-rooms-id").style.fontSize = "1.0rem";
            document.getElementById("subscript-main-id").style.fontSize = "1.0rem";
            document.getElementById("subscript-contact-id").style.fontSize = "1.0rem";
            document.getElementById("right-roombooking-heading-button").classList.remove("btn-md");
            document.getElementById("right-roombooking-heading-button").classList.remove("btn-lg");
            document.getElementById("right-roombooking-heading-button").classList.add("btn-sm");
        }
        else if (width <= 578 && width > 458) {
            contact.setAttribute("src", "images/contact_us_screen_maybe-5.png");
            diningback.setAttribute("src", "images/gallary_dining_hall-1.png");
            document.getElementById("subscript-rooms-id").style.paddingTop = "5%";
            document.getElementById("bottom-row").style.paddingTop = "15px";
            document.getElementById("services-main-heading-id").style.paddingBottom = "0%";
            document.getElementById("services-main-heading-id").style.paddingTop = "8%";
            document.getElementById("subscript-services-id").style.paddingTop = "2%";
            document.getElementById("subscript-services-id").style.paddingBottom = "2%";
            document.getElementById("subscript-services-id").style.fontSize = "1.2rem";
            document.getElementById("subscript-dining-id").style.fontSize = "1.2rem";
            document.getElementById("subscript-rooms-id").style.fontSize = "1.2rem";
            document.getElementById("subscript-main-id").style.fontSize = "1.2rem";
            document.getElementById("subscript-contact-id").style.fontSize = "1.2rem";
            document.getElementById("right-roombooking-heading-button").classList.remove("btn-md");
            document.getElementById("right-roombooking-heading-button").classList.remove("btn-lg");
            document.getElementById("right-roombooking-heading-button").classList.add("btn-sm");
        }
        else if (width <= 693 && width > 578) {
            contact.setAttribute("src", "images/contact_us_screen_maybe-4.png");
            diningback.setAttribute("src", "images/gallary_dining_hall-1.png");
            document.getElementById("subscript-rooms-id").style.paddingTop = "5%";
            document.getElementById("bottom-row").style.paddingTop = "40px";
            servicesmain.classList.add("col-12");
            servicesmain.classList.remove("col-8");
            servicessub.classList.add("col-12");
            servicessub.classList.remove("col-8");
            document.getElementById("services-main-heading-id").style.paddingBottom = "0%";
            document.getElementById("services-main-heading-id").style.paddingTop = "12%";
            document.getElementById("subscript-services-id").style.paddingTop = "5%";
            document.getElementById("subscript-services-id").style.paddingBottom = "5%";
            document.getElementById("subscript-services-id").style.marginBottom = "0%";
            document.getElementById("subscript-services-id").style.fontSize = "1.5rem";
            document.getElementById("subscript-dining-id").style.fontSize = "1.5rem";
            document.getElementById("subscript-rooms-id").style.fontSize = "1.5rem";
            document.getElementById("subscript-main-id").style.fontSize = "1.5rem";
            document.getElementById("subscript-contact-id").style.fontSize = "1.5rem";
            document.getElementById("right-roombooking-heading-button").classList.remove("btn-lg");
            document.getElementById("right-roombooking-heading-button").classList.remove("btn-sm");
            document.getElementById("right-roombooking-heading-button").classList.add("btn-md");
        }
        else if (width <= 840 && width > 693) {
            contact.setAttribute("src", "images/contact_us_screen_maybe-3.png");
            diningback.setAttribute("src", "images/gallary_dining_hall-1.png");
            document.getElementById("subscript-rooms-id").style.paddingTop = "5%";
            roomsback.setAttribute("src", "images/mid_screen_night_u-1.png");
            document.getElementById("bottom-row").style.paddingTop = "60px";
            servicesmain.classList.add("col-8");
            servicesmain.classList.remove("col-12");
            servicessub.classList.add("col-8");
            servicessub.classList.remove("col-12");
            document.getElementById("services-main-heading-id").style.paddingBottom = "4%";
            document.getElementById("services-main-heading-id").style.paddingTop = "25%";
            document.getElementById("subscript-services-id").style.paddingTop = "5%";
            document.getElementById("subscript-services-id").style.paddingBottom = "5%";
            document.getElementById("subscript-services-id").style.marginBottom = "0%";
            document.getElementById("subscript-services-id").style.fontSize = "1.5rem";
            document.getElementById("subscript-dining-id").style.fontSize = "1.5rem";
            document.getElementById("subscript-rooms-id").style.fontSize = "1.5rem";
            document.getElementById("subscript-main-id").style.fontSize = "1.5rem";
            document.getElementById("subscript-contact-id").style.fontSize = "1.5rem";
            document.getElementById("dining-main-id").paddingTop = "5%";
            document.getElementById("right-roombooking-heading-button").classList.remove("btn-lg");
            document.getElementById("right-roombooking-heading-button").classList.remove("btn-sm");
            document.getElementById("right-roombooking-heading-button").classList.add("btn-md");
        }
        else if (width <= 889 && width > 840) {
            contact.setAttribute("src", "images/contact_us_screen_maybe-2.png");
            diningback.setAttribute("src", "images/gallary_dining_hall.png");
            document.getElementById("subscript-rooms-id").style.paddingTop = "5%";
            roomsback.setAttribute("src", "images/mid_screen_night_u.png");
            document.getElementById("bottom-row").style.paddingTop = "100px";
            servicesme.setAttribute("src", "images/lobby_boy-1.png");
            servicesmain.classList.add("col-8");
            servicesmain.classList.remove("col-12");
            servicessub.classList.add("col-8");
            servicessub.classList.remove("col-12");
            document.getElementById("services-main-heading-id").style.paddingBottom = "4%";
            document.getElementById("services-main-heading-id").style.paddingTop = "25%";
            document.getElementById("subscript-services-id").style.paddingTop = "5%";
            document.getElementById("subscript-services-id").style.paddingBottom = "5%";
            document.getElementById("subscript-services-id").style.marginBottom = "0%";
            document.getElementById("subscript-services-id").style.fontSize = "1.5rem";
            document.getElementById("subscript-dining-id").style.fontSize = "1.5rem";
            document.getElementById("subscript-rooms-id").style.fontSize = "1.5rem";
            document.getElementById("subscript-main-id").style.fontSize = "1.5rem";
            document.getElementById("subscript-contact-id").style.fontSize = "1.5rem";
            document.getElementById("dining-main-id").paddingTop = "9%";
            document.getElementById("right-roombooking-heading-button").classList.remove("btn-md");
            document.getElementById("right-roombooking-heading-button").classList.remove("btn-sm");
            document.getElementById("right-roombooking-heading-button").classList.add("btn-lg");
        }
        else if (width <= 992 && width > 889) {
            contact.setAttribute("src", "images/contact_us_screen_maybe-1.png");
            diningback.setAttribute("src", "images/gallary_dining_hall.png");
            document.getElementById("subscript-rooms-id").style.paddingTop = "5%";
            roomsback.setAttribute("src", "images/mid_screen_night_u.png");
            document.getElementById("bottom-row").style.paddingTop = "140px";
            servicesme.setAttribute("src", "images/lobby_boy.png");
            servicesmain.classList.add("col-8");
            servicesmain.classList.remove("col-12");
            servicessub.classList.add("col-8");
            servicessub.classList.remove("col-12");
            sdocument.getElementById("services-main-heading-id").style.paddingBottom = "4%";
            document.getElementById("services-main-heading-id").style.paddingTop = "25%";
            document.getElementById("subscript-services-id").style.paddingTop = "5%";
            document.getElementById("subscript-services-id").style.paddingBottom = "5%";
            document.getElementById("subscript-services-id").style.marginBottom = "0%";
            document.getElementById("subscript-services-id").style.fontSize = "1.5rem";
            document.getElementById("subscript-dining-id").style.fontSize = "1.5rem";
            document.getElementById("subscript-rooms-id").style.fontSize = "1.5rem";
            document.getElementById("subscript-main-id").style.fontSize = "1.5rem";
            document.getElementById("subscript-contact-id").style.fontSize = "1.5rem";
            document.getElementById("dining-main-id").paddingTop = "9%";
            document.getElementById("right-roombooking-heading-button").classList.remove("btn-md");
            document.getElementById("right-roombooking-heading-button").classList.remove("btn-sm");
            document.getElementById("right-roombooking-heading-button").classList.add("btn-lg");
        }
        else {
            contact.setAttribute("src", "images/contact_us_screen_maybe.png");
            diningback.setAttribute("src", "images/gallary_dining_hall.png");
            document.getElementById("subscript-rooms-id").style.paddingTop = "5%";
            roomsback.setAttribute("src", "images/mid_screen_night_u.png");
            document.getElementById("bottom-row").style.paddingTop = "160px";
            servicesme.setAttribute("src", "images/lobby_boy.png");
            servicesmain.classList.add("col-8");
            servicesmain.classList.remove("col-12");
            servicessub.classList.add("col-8");
            servicessub.classList.remove("col-12");
            document.getElementById("services-main-heading-id").style.paddingBottom = "4%";
            document.getElementById("services-main-heading-id").style.paddingTop = "25%";
            document.getElementById("subscript-services-id").style.paddingTop = "5%";
            document.getElementById("subscript-services-id").style.paddingBottom = "5%";
            document.getElementById("subscript-services-id").style.marginBottom = "0%";
            document.getElementById("subscript-services-id").style.fontSize = "1.5rem";
            document.getElementById("subscript-dining-id").style.fontSize = "1.5rem";
            document.getElementById("subscript-rooms-id").style.fontSize = "1.5rem";
            document.getElementById("subscript-main-id").style.fontSize = "1.5rem";
            document.getElementById("subscript-contact-id").style.fontSize = "1.5rem";
            document.getElementById("dining-main-id").paddingTop = "9%";
            document.getElementById("right-roombooking-heading-button").classList.remove("btn-md");
            document.getElementById("right-roombooking-heading-button").classList.remove("btn-sm");
            document.getElementById("right-roombooking-heading-button").classList.add("btn-lg");

        }
    }
    else
    {
        var width = window.innerWidth;
        if (width <= 330) {
            element1.innerHTML = "Starting from $3000 per night, the Presidential Suite is the most luxurious option available at the Grand Budapest Hotel.";
            element2.innerHTML = "Starting from $1200 per night, and provides an exquisite experience of the Grand Budapest Hotel.";
            element3.innerHTML = "Starting from $500 per night, the Deluxe Room provides basic experience of the Hotel.";
            document.getElementById("bookurstay-heading-id").style.fontSize = "35px";
            document.getElementById("local-main-heading-id").style.fontSize = "35px";
            document.getElementById("rooms-heading-main-id").style.fontSize = "35px";
            document.getElementById("services-main-heading-id").style.fontSize = "35px";
            document.getElementById("contact-heading-main-id").style.fontSize = "35px";
            document.getElementById("main-heading-id").style.fontSize = "35px";
            document.getElementById("dining-main-id").style.fontSize = "35px";
            document.getElementById("left-roombooking-heading").style.fontSize = "25px";
            document.getElementById("hotel-backdrop").setAttribute("src", "images/the_grand_budapest_hotel-2.png");
        }
        else if (width <= 500 && width > 330) {
            element1.innerHTML = "Starting from $3000 per night, the Presidential Suite is the most luxurious option available at the Grand Budapest Hotel.";
            element2.innerHTML = "Starting from $1200 per night, and provides an exquisite experience of the Grand Budapest Hotel.";
            element3.innerHTML = "Starting from $500 per night, the Deluxe Room features high-end furnishings, plush bedding, and luxurious amenities.";
            document.getElementById("bookurstay-heading-id").style.fontSize = "35px";
            document.getElementById("local-main-heading-id").style.fontSize = "35px";
            document.getElementById("rooms-heading-main-id").style.fontSize = "35px";
            document.getElementById("services-main-heading-id").style.fontSize = "35px";
            document.getElementById("contact-heading-main-id").style.fontSize = "35px";
            document.getElementById("main-heading-id").style.fontSize = "35px";
            document.getElementById("dining-main-id").style.fontSize = "35px";
            document.getElementById("left-roombooking-heading").style.fontSize = "25px";
            document.getElementById("hotel-backdrop").setAttribute("src", "images/the_grand_budapest_hotel-2.png");
        }
        else if (width <= 578 && width > 500) {
            element1.innerHTML = "Starting from $3000 per night, the Presidential Suite is the most luxurious option available at the Grand Budapest Hotel.";
            element2.innerHTML = "Starting from $1200 per night, and provides an exquisite experience of the Grand Budapest Hotel.";
            element3.innerHTML = "Starting from $500 per night, the Deluxe Room features high-end furnishings, plush bedding, and luxurious amenities.";
            document.getElementById("bookurstay-heading-id").style.fontSize = "45px";
            document.getElementById("local-main-heading-id").style.fontSize = "45px";
            document.getElementById("services-main-heading-id").style.fontSize = "45px";
            document.getElementById("contact-heading-main-id").style.fontSize = "45px";
            document.getElementById("dining-main-id").style.fontSize = "45px";
            document.getElementById("rooms-heading-main-id").style.fontSize = "45px";
            document.getElementById("main-heading-id").style.fontSize = "40px";
            document.getElementById("left-roombooking-heading").style.fontSize = "30px";
            document.getElementById("local-main-heading-id").style.paddingTop = "13%";
            document.getElementById("rooms-heading-main-id").style.paddingTop = "2%";
            document.getElementById("hotel-backdrop").setAttribute("src", "images/the_grand_budapest_hotel-2.png");
        }
        else if (width <= 599 && width > 578) {
            element1.innerHTML = "Starting from $3000 per night, the Presidential Suite is the most luxurious option available at the Grand Budapest Hotel.";
            element2.innerHTML = "Starting from $1200 per night, and provides an exquisite experience of the Grand Budapest Hotel.";
            element3.innerHTML = "Starting from $500 per night, the Deluxe Room features high-end furnishings, plush bedding, and luxurious amenities.";
            document.getElementById("bookurstay-heading-id").style.fontSize = "55px";
            document.getElementById("local-main-heading-id").style.fontSize = "55px";
            document.getElementById("services-main-heading-id").style.fontSize = "55px";
            document.getElementById("contact-heading-main-id").style.fontSize = "55px";
            document.getElementById("dining-main-id").style.fontSize = "55px";
            document.getElementById("rooms-heading-main-id").style.fontSize = "55px";
            document.getElementById("main-heading-id").style.fontSize = "45px";
            document.getElementById("left-roombooking-heading").style.fontSize = "35px";
            document.getElementById("local-main-heading-id").style.paddingTop = "20%";
            document.getElementById("rooms-heading-main-id").style.paddingTop = "2%";
            document.getElementById("hotel-backdrop").setAttribute("src", "images/the_grand_budapest_hotel-2.png");
        }
        else if (width <= 840 && width > 599) {
            element1.innerHTML = "Starting from $3000 per night, the Presidential Suite is the most luxurious option available at the Grand Budapest Hotel.";
            element2.innerHTML = "Starting from $1200 per night, and provides an exquisite experience of the Grand Budapest Hotel.";
            element3.innerHTML = "Starting from $500 per night, the Deluxe Room features high-end furnishings, plush bedding, and luxurious amenities.";
            document.getElementById("bookurstay-heading-id").style.fontSize = "65px";
            document.getElementById("local-main-heading-id").style.fontSize = "65px";
            document.getElementById("services-main-heading-id").style.fontSize = "65px";
            document.getElementById("dining-main-id").style.fontSize = "65px";
            document.getElementById("rooms-heading-main-id").style.fontSize = "65px";
            document.getElementById("contact-heading-main-id").style.fontSize = "65px";
            document.getElementById("main-heading-id").style.fontSize = "50px";
            document.getElementById("left-roombooking-heading").style.fontSize = "40px";
            document.getElementById("local-main-heading-id").style.paddingTop = "0%";
            document.getElementById("rooms-heading-main-id").style.paddingTop = "2%";
            document.getElementById("hotel-backdrop").setAttribute("src", "images/the_grand_budapest_hotel-2.png");
            document.getElementById("hidden-nav").style.fontSize = "40px";
        }
        else if (width <= 1038 && width > 840) {
            element1.innerHTML = "Starting from $3000 per night, the Presidential Suite is the most luxurious option available at the Grand Budapest Hotel.";
            element2.innerHTML = "Starting from $1200 per night,<br> and provides an exquisite experience <br> of the Grand Budapest Hotel.";
            element3.innerHTML = "Starting from $500 per night,<br> the Deluxe Room features high-end furnishings, plush bedding,<br> and luxurious amenities.";
            document.getElementById("bookurstay-heading-id").style.fontSize = "75px";
            document.getElementById("local-main-heading-id").style.fontSize = "75px";
            document.getElementById("services-main-heading-id").style.fontSize = "75px";
            document.getElementById("contact-heading-main-id").style.fontSize = "75px";
            document.getElementById("dining-main-id").style.fontSize = "75px";
            document.getElementById("rooms-heading-main-id").style.fontSize = "75px";
            document.getElementById("main-heading-id").style.fontSize = "65px";
            document.getElementById("left-roombooking-heading").style.fontSize = "45px";
            document.getElementById("local-main-heading-id").style.paddingTop = "16%";
            document.getElementById("rooms-heading-main-id").style.paddingTop = "2%";
            document.getElementById("hotel-backdrop").setAttribute("src", "images/the_grand_budapest_hotel-1.png");
            document.getElementById("hidden-nav").style.fontSize = "40px";
        }
        else if (width <= 1106 && width > 1038) {
            element1.innerHTML = "Starting from $3000 per night, the Presidential Suite is the most luxurious option available at the Grand Budapest Hotel.";
            element2.innerHTML = "Starting from $1200 per night,<br> the Executive Suite features a <br> large bedroom with a king-size bed, a separate living room with a fireplace, and other faculties.";
            document.getElementById("bookurstay-heading-id").style.fontSize = "77px";
            document.getElementById("local-main-heading-id").style.fontSize = "77px";
            document.getElementById("services-main-heading-id").style.fontSize = "77px";
            document.getElementById("dining-main-id").style.fontSize = "77px";
            document.getElementById("rooms-heading-main-id").style.fontSize = "77px";
            document.getElementById("contact-heading-main-id").style.fontSize = "77px";
            document.getElementById("left-roombooking-heading").style.fontSize = "50px";
            document.getElementById("main-heading-id").style.fontSize = "70px";
            document.getElementById("local-main-heading-id").style.paddingTop = "16%";
            document.getElementById("rooms-heading-main-id").style.paddingTop = "10%";
            document.getElementById("hotel-backdrop").setAttribute("src", "images/the_grand_budapest_hotel-1.png");
            document.getElementById("hidden-nav").style.fontSize = "40px";
        }
        else if (width <= 1201 && width > 1106) {
            element1.innerHTML = "Starting from $3000 per night, the Presidential Suite is the most luxurious option available at the Grand Budapest Hotel. This suite includes a large master bedroom, a spacious living room with a fireplace and other faculties. "
            document.getElementById("bookurstay-heading-id").style.fontSize = "79px";
            document.getElementById("local-main-heading-id").style.fontSize = "79px";
            document.getElementById("services-main-heading-id").style.fontSize = "79px";
            document.getElementById("contact-heading-main-id").style.fontSize = "79px";
            document.getElementById("dining-main-id").style.fontSize = "79px";
            document.getElementById("rooms-heading-main-id").style.fontSize = "79px";
            document.getElementById("left-roombooking-heading").style.fontSize = "55px";
            document.getElementById("main-heading-id").style.fontSize = "79px";
            document.getElementById("local-main-heading-id").style.paddingTop = "16%";
            document.getElementById("local-main-heading-id").style.paddingBottom = "30px";
            document.getElementById("roombooking-main-id").style.scale = "0.9";
            document.getElementById("hotel-backdrop").setAttribute("src", "images/the_grand_budapest_hotel-1.png");
            document.getElementById("hidden-nav").style.fontSize = "40px";
        }
        else {
            element3.innerHTML = "Starting from $500 per night,<br> the Deluxe Room features high-end furnishings, plush bedding,<br> and luxurious amenities such as <br> a flat-screen TV, minibar, and complimentary Wi-Fi.";
            element2.innerHTML = "Starting from $1200 per night,<br> the Executive Suite features a <br> large bedroom with a king-size bed,<br> a separate living room with a fireplace,<br> and a dining area that can <br> accommodate up to six guests.";
            element1.innerHTML = "Starting from $3000 per night, the Presidential Suite is the most luxurious option available at the Grand Budapest Hotel. This suite includes a large master bedroom, a spacious living room with a fireplace, a dining room that can accommodate up to 12 guests, and a private balcony.";
            document.getElementById("bookurstay-heading-id").style.fontSize = "87px";
            document.getElementById("local-main-heading-id").style.fontSize = "87px";
            document.getElementById("services-main-heading-id").style.fontSize = "87px";
            document.getElementById("contact-heading-main-id").style.fontSize = "87px";
            document.getElementById("dining-main-id").style.fontSize = "87px";
            document.getElementById("rooms-heading-main-id").style.fontSize = "87px";
            document.getElementById("left-roombooking-heading").style.fontSize = "60px";
            document.getElementById("main-heading-id").style.fontSize = "87px";
            document.getElementById("local-main-heading-id").style.paddingTop = "4%";
            document.getElementById("local-main-heading-id").style.paddingBottom = "130px";
            document.getElementById("roombooking-main-id").style.scale = "1";
            document.getElementById("hotel-backdrop").setAttribute("src", "images/the_grand_budapest_hotel.png");
            document.getElementById("hidden-nav").style.fontSize = "40px";
        }

        //asdfadfasasfasfasfasfasdfasfasfasf
        console.log(width);
        if (width <= 386) {
            console.log("here", width);
            boourstaybackDrop.setAttribute("src", "images/mid_screen_1-6-transformed.png");
            document.getElementById("deluxe-row").style.scale = "0.75";
            document.getElementById("deluxe-row").style.position = "relative";
            document.getElementById("deluxe-row").style.top = "-100px";
            document.getElementById("bookurstay-id").style.height = "750px";
            locall.setAttribute("src", "images/local_attractions-5.png");
            document.getElementById("localone").innerHTML = "Local";
            document.getElementById("conta").innerHTML = "Contact";
            document.getElementById("contact-heading-main-id").style.marginTop = "20%";
        }
        else if (width <= 458 && width > 386) {
            boourstaybackDrop.setAttribute("src", "images/mid_screen_1-6-transformed.png");
            document.getElementById("deluxe-row").style.scale = "0.75";
            document.getElementById("deluxe-row").style.position = "relative";
            document.getElementById("deluxe-row").style.top = "-100px";
            document.getElementById("bookurstay-id").style.height = "auto";
            locall.setAttribute("src", "images/local_attractions-5.png");
            document.getElementById("localone").innerHTML = "Local Attractions";
            document.getElementById("conta").innerHTML = "Contact Us";
            document.getElementById("contact-heading-main-id").style.marginTop = "0%";
        }
        else if (width <= 558 && width > 458) {
            document.getElementById("deluxe-row").style.scale = "0.65";
            document.getElementById("deluxe-row").style.position = "relative";
            document.getElementById("deluxe-row").style.top = "-130px";
            document.getElementById("bookurstay-id").style.height = "750px";
            boourstaybackDrop.setAttribute("src", "images/mid_screen_1-5.png");
            locall.setAttribute("src", "images/local_attractions-5.png");
            document.getElementById("spans").style.display = "none";
            document.getElementById("spans-2").style.display = "none";
            document.getElementById("localone").innerHTML = "Local Attractions";
            document.getElementById("conta").innerHTML = "Contact Us";
            document.getElementById("contact-heading-main-id").style.marginTop = "0%";
        }
        else if (width <= 578 && width > 558) {
            document.getElementById("deluxe-row").style.position = "static";
            document.getElementById("deluxe-row").style.scale = "0.95";
            boourstaybackDrop.setAttribute("src", "images/mid_screen_1-5.png");
            document.getElementById("bookurstay-id").style.height = "auto";
            locall.setAttribute("src", "images/local_attractions-5.png");
            document.getElementById("hidden-nav").style.fontSize = "15px";
            document.getElementById("spans").style.display = "block";
            document.getElementById("spans-2").style.display = "block";
            document.getElementById("localone").innerHTML = "Local Attractions";
            document.getElementById("conta").innerHTML = "Contact Us";
            document.getElementById("contact-heading-main-id").style.marginTop = "0%";
        }
        else if (width <= 693 && width > 578) {
            document.getElementById("deluxe-row").style.position = "static";
            document.getElementById("deluxe-row").style.scale = "0.95";
            boourstaybackDrop.setAttribute("src", "images/mid_screen_1-4.png");
            document.getElementById("bookurstay-id").style.height = "auto";
            locall.setAttribute("src", "images/local_attractions-4.png");
            document.getElementById("hidden-nav").style.fontSize = "20px";
            document.getElementById("spans").style.display = "block";
            document.getElementById("spans-2").style.display = "block";
            document.getElementById("localone").innerHTML = "Local Attractions";
            document.getElementById("conta").innerHTML = "Contact Us";
            document.getElementById("contact-heading-main-id").style.marginTop = "0%";
        }
        else if (width <= 840 && width > 693) {
            document.getElementById("deluxe-row").style.position = "static";
            document.getElementById("deluxe-row").style.scale = "0.95";
            boourstaybackDrop.setAttribute("src", "images/mid_screen_1-3.png");
            document.getElementById("bookurstay-id").style.height = "auto";
            locall.setAttribute("src", "images/local_attractions-4.png");
            document.getElementById("hidden-nav").style.fontSize = "22px";
            document.getElementById("spans").style.display = "block";
            document.getElementById("spans-2").style.display = "block";
            document.getElementById("localone").innerHTML = "Local Attractions";
            document.getElementById("conta").innerHTML = "Contact Us";
            document.getElementById("contact-heading-main-id").style.marginTop = "0%";
        }
        else if (width <= 889 && width > 840) {
            document.getElementById("deluxe-row").style.position = "static";
            document.getElementById("deluxe-row").style.scale = "0.95";
            boourstaybackDrop.setAttribute("src", "images/mid_screen_1-2.png");
            document.getElementById("bookurstay-id").style.height = "auto";
            locall.setAttribute("src", "images/local_attractions-2.png");
            document.getElementById("hidden-nav").style.fontSize = "22px";
            document.getElementById("spans").style.display = "block";
            document.getElementById("spans-2").style.display = "block";
            document.getElementById("localone").innerHTML = "Local Attractions";
            document.getElementById("conta").innerHTML = "Contact Us";
            document.getElementById("contact-heading-main-id").style.marginTop = "0%";
        }
        else if (width <= 992 && width > 889) {
            document.getElementById("deluxe-row").style.position = "static";
            document.getElementById("deluxe-row").style.scale = "0.95";
            boourstaybackDrop.setAttribute("src", "images/mid_screen_1-1.png");
            document.getElementById("bookurstay-heading-id").style.paddingTop = "0%";
            document.getElementById("bookurstay-id").style.height = "auto";
            locall.setAttribute("src", "images/local_attractions-2.png");
            document.getElementById("hidden-nav").style.fontSize = "22px";
            document.getElementById("hidden-nav").classList.remove = "d-block";
            document.getElementById("hidden-nav").classList.add = "d-felx";
            document.getElementById("spans").style.display = "block";
            document.getElementById("spans-2").style.display = "block";
            document.getElementById("localone").innerHTML = "Local Attractions";
            document.getElementById("conta").innerHTML = "Contact Us";
            document.getElementById("contact-heading-main-id").style.marginTop = "0%";
        }
        else {
            document.getElementById("deluxe-row").style.position = "static";
            document.getElementById("deluxe-row").style.scale = "0.95";
            boourstaybackDrop.setAttribute("src", "images/mid_screen_1.png");
            document.getElementById("bookurstay-heading-id").style.paddingTop = "7%";
            document.getElementById("bookurstay-id").style.height = "auto";
            locall.setAttribute("src", "images/local_attractions-2.png");
            document.getElementById("hidden-nav").style.fontSize = "24px";
            document.getElementById("hidden-nav").classList.remove = "d-block";
            document.getElementById("hidden-nav").classList.add = "d-felx";
            document.getElementById("spans").style.display = "block";
            document.getElementById("spans-2").style.display = "block";
            document.getElementById("localone").innerHTML = "Local Attractions";
            document.getElementById("conta").innerHTML = "Contact Us";
            document.getElementById("contact-heading-main-id").style.marginTop = "0%";
        }


        if (width <= 458) {
            contact.setAttribute("src", "images/contact_us_screen_maybe-6-transformed.png");
            diningback.setAttribute("src", "images/gallary_dining_hall-2.png");
            document.getElementById("bottom-row").style.paddingTop = "5px";
            document.getElementById("subscript-rooms-id").style.paddingTop = "2%";
            document.getElementById("subscript-services-id").style.fontSize = "1.0rem";
            document.getElementById("subscript-dining-id").style.fontSize = "1.0rem";
            document.getElementById("subscript-rooms-id").style.fontSize = "1.0rem";
            document.getElementById("subscript-main-id").style.fontSize = "1.0rem";
            document.getElementById("subscript-contact-id").style.fontSize = "1.0rem";
            document.getElementById("right-roombooking-heading-button").classList.remove("btn-md");
            document.getElementById("right-roombooking-heading-button").classList.remove("btn-lg");
            document.getElementById("right-roombooking-heading-button").classList.add("btn-sm");
        }
        else if (width <= 578 && width > 458) {
            contact.setAttribute("src", "images/contact_us_screen_maybe-5.png");
            diningback.setAttribute("src", "images/gallary_dining_hall-1.png");
            document.getElementById("subscript-rooms-id").style.paddingTop = "5%";
            document.getElementById("bottom-row").style.paddingTop = "15px";
            document.getElementById("services-main-heading-id").style.paddingBottom = "0%";
            document.getElementById("services-main-heading-id").style.paddingTop = "8%";
            document.getElementById("subscript-services-id").style.paddingTop = "2%";
            document.getElementById("subscript-services-id").style.paddingBottom = "2%";
            document.getElementById("subscript-services-id").style.fontSize = "1.2rem";
            document.getElementById("subscript-dining-id").style.fontSize = "1.2rem";
            document.getElementById("subscript-rooms-id").style.fontSize = "1.2rem";
            document.getElementById("subscript-main-id").style.fontSize = "1.2rem";
            document.getElementById("subscript-contact-id").style.fontSize = "1.2rem";
            document.getElementById("right-roombooking-heading-button").classList.remove("btn-md");
            document.getElementById("right-roombooking-heading-button").classList.remove("btn-lg");
            document.getElementById("right-roombooking-heading-button").classList.add("btn-sm");
        }
        else if (width <= 693 && width > 578) {
            contact.setAttribute("src", "images/contact_us_screen_maybe-4.png");
            diningback.setAttribute("src", "images/gallary_dining_hall-1.png");
            document.getElementById("subscript-rooms-id").style.paddingTop = "5%";
            document.getElementById("bottom-row").style.paddingTop = "40px";
            servicesmain.classList.add("col-12");
            servicesmain.classList.remove("col-8");
            servicessub.classList.add("col-12");
            servicessub.classList.remove("col-8");
            document.getElementById("services-main-heading-id").style.paddingBottom = "0%";
            document.getElementById("services-main-heading-id").style.paddingTop = "12%";
            document.getElementById("subscript-services-id").style.paddingTop = "5%";
            document.getElementById("subscript-services-id").style.paddingBottom = "5%";
            document.getElementById("subscript-services-id").style.marginBottom = "0%";
            document.getElementById("subscript-services-id").style.fontSize = "1.5rem";
            document.getElementById("subscript-dining-id").style.fontSize = "1.5rem";
            document.getElementById("subscript-rooms-id").style.fontSize = "1.5rem";
            document.getElementById("subscript-main-id").style.fontSize = "1.5rem";
            document.getElementById("subscript-contact-id").style.fontSize = "1.5rem";
            document.getElementById("right-roombooking-heading-button").classList.remove("btn-lg");
            document.getElementById("right-roombooking-heading-button").classList.remove("btn-sm");
            document.getElementById("right-roombooking-heading-button").classList.add("btn-md");
        }
        else if (width <= 840 && width > 693) {
            contact.setAttribute("src", "images/contact_us_screen_maybe-3.png");
            diningback.setAttribute("src", "images/gallary_dining_hall-1.png");
            document.getElementById("subscript-rooms-id").style.paddingTop = "5%";
            roomsback.setAttribute("src", "images/mid_screen-1.png");
            document.getElementById("bottom-row").style.paddingTop = "60px";
            servicesmain.classList.add("col-8");
            servicesmain.classList.remove("col-12");
            servicessub.classList.add("col-8");
            servicessub.classList.remove("col-12");
            document.getElementById("services-main-heading-id").style.paddingBottom = "4%";
            document.getElementById("services-main-heading-id").style.paddingTop = "25%";
            document.getElementById("subscript-services-id").style.paddingTop = "5%";
            document.getElementById("subscript-services-id").style.paddingBottom = "5%";
            document.getElementById("subscript-services-id").style.marginBottom = "0%";
            document.getElementById("subscript-services-id").style.fontSize = "1.5rem";
            document.getElementById("subscript-dining-id").style.fontSize = "1.5rem";
            document.getElementById("subscript-rooms-id").style.fontSize = "1.5rem";
            document.getElementById("subscript-main-id").style.fontSize = "1.5rem";
            document.getElementById("subscript-contact-id").style.fontSize = "1.5rem";
            document.getElementById("dining-main-id").paddingTop = "5%";
            document.getElementById("right-roombooking-heading-button").classList.remove("btn-lg");
            document.getElementById("right-roombooking-heading-button").classList.remove("btn-sm");
            document.getElementById("right-roombooking-heading-button").classList.add("btn-md");
        }
        else if (width <= 889 && width > 840) {
            contact.setAttribute("src", "images/contact_us_screen_maybe-2.png");
            diningback.setAttribute("src", "images/gallary_dining_hall.png");
            document.getElementById("subscript-rooms-id").style.paddingTop = "5%";
            roomsback.setAttribute("src", "images/mid_screen.png");
            document.getElementById("bottom-row").style.paddingTop = "100px";
            servicesme.setAttribute("src", "images/lobby_boy-1.png");
            servicesmain.classList.add("col-8");
            servicesmain.classList.remove("col-12");
            servicessub.classList.add("col-8");
            servicessub.classList.remove("col-12");
            document.getElementById("services-main-heading-id").style.paddingBottom = "4%";
            document.getElementById("services-main-heading-id").style.paddingTop = "25%";
            document.getElementById("subscript-services-id").style.paddingTop = "5%";
            document.getElementById("subscript-services-id").style.paddingBottom = "5%";
            document.getElementById("subscript-services-id").style.marginBottom = "0%";
            document.getElementById("subscript-services-id").style.fontSize = "1.5rem";
            document.getElementById("subscript-dining-id").style.fontSize = "1.5rem";
            document.getElementById("subscript-rooms-id").style.fontSize = "1.5rem";
            document.getElementById("subscript-main-id").style.fontSize = "1.5rem";
            document.getElementById("subscript-contact-id").style.fontSize = "1.5rem";
            document.getElementById("dining-main-id").paddingTop = "9%";
            document.getElementById("right-roombooking-heading-button").classList.remove("btn-md");
            document.getElementById("right-roombooking-heading-button").classList.remove("btn-sm");
            document.getElementById("right-roombooking-heading-button").classList.add("btn-lg");
        }
        else if (width <= 992 && width > 889) {
            contact.setAttribute("src", "images/contact_us_screen_maybe-1.png");
            diningback.setAttribute("src", "images/gallary_dining_hall.png");
            document.getElementById("subscript-rooms-id").style.paddingTop = "5%";
            roomsback.setAttribute("src", "images/mid_screen.png");
            document.getElementById("bottom-row").style.paddingTop = "140px";
            servicesme.setAttribute("src", "images/lobby_boy.png");
            servicesmain.classList.add("col-8");
            servicesmain.classList.remove("col-12");
            servicessub.classList.add("col-8");
            servicessub.classList.remove("col-12");
            document.getElementById("services-main-heading-id").style.paddingBottom = "4%";
            document.getElementById("services-main-heading-id").style.paddingTop = "25%";
            document.getElementById("subscript-services-id").style.paddingTop = "5%";
            document.getElementById("subscript-services-id").style.paddingBottom = "5%";
            document.getElementById("subscript-services-id").style.marginBottom = "0%";
            document.getElementById("subscript-services-id").style.fontSize = "1.5rem";
            document.getElementById("subscript-dining-id").style.fontSize = "1.5rem";
            document.getElementById("subscript-rooms-id").style.fontSize = "1.5rem";
            document.getElementById("subscript-main-id").style.fontSize = "1.5rem";
            document.getElementById("subscript-contact-id").style.fontSize = "1.5rem";
            document.getElementById("dining-main-id").paddingTop = "9%";
            document.getElementById("right-roombooking-heading-button").classList.remove("btn-md");
            document.getElementById("right-roombooking-heading-button").classList.remove("btn-sm");
            document.getElementById("right-roombooking-heading-button").classList.add("btn-lg");
        }
        else {
            contact.setAttribute("src", "images/contact_us_screen_maybe.png");
            diningback.setAttribute("src", "images/gallary_dining_hall.png");
            document.getElementById("subscript-rooms-id").style.paddingTop = "5%";
            roomsback.setAttribute("src", "images/mid_screen.png");
            document.getElementById("bottom-row").style.paddingTop = "160px";
            servicesme.setAttribute("src", "images/lobby_boy.png");
            servicesmain.classList.add("col-8");
            servicesmain.classList.remove("col-12");
            servicessub.classList.add("col-8");
            servicessub.classList.remove("col-12");
            document.getElementById("services-main-heading-id").style.paddingBottom = "4%";
            document.getElementById("services-main-heading-id").style.paddingTop = "25%";
            document.getElementById("subscript-services-id").style.paddingTop = "5%";
            document.getElementById("subscript-services-id").style.paddingBottom = "5%";
            document.getElementById("subscript-services-id").style.marginBottom = "0%";
            document.getElementById("subscript-services-id").style.fontSize = "1.5rem";
            document.getElementById("subscript-dining-id").style.fontSize = "1.5rem";
            document.getElementById("subscript-rooms-id").style.fontSize = "1.5rem";
            document.getElementById("subscript-main-id").style.fontSize = "1.5rem";
            document.getElementById("subscript-contact-id").style.fontSize = "1.5rem";
            document.getElementById("dining-main-id").paddingTop = "9%";
            document.getElementById("right-roombooking-heading-button").classList.remove("btn-md");
            document.getElementById("right-roombooking-heading-button").classList.remove("btn-sm");
            document.getElementById("right-roombooking-heading-button").classList.add("btn-lg");

        }
    }



});