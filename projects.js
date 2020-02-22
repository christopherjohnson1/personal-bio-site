const projects = [
  {
    title: "Pet Adoption",
    screenshot: "./screenshots/main-view.png",
    description: "Project to gain familiarization with HTML5, CSS3, JavaScript dynamic page building, and Bootstrap gird/ cards.", // A good project description includes 'the what', 'the why', and 'the how'.
    technologiesUsed:
      'HTML5, CSS3, JavaScript, Bootstrap',
    available: true,
    url: "https://github.com/christopherjohnson1/personal-bio-site" // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
  },
  {},
  {}
];

const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML = textToPrint;
};

const createProjectCards = () => {
  let domString = "";
  for (let i = 0; i < projects.length; i++)
    if (projects[i].available === true) {
        domString += '<div class="col-11 col-sm-10">'
        domString += '<div class="row pt-3">'
        domString +=   '<div class="col-md-6 pb-5">'
        domString +=   '<div class="card rounded-0 mx-sm-2 mx-lg-4 mx-xl-5">'
        domString += `<img src="${projects[i].screenshot}" alt="" class="card-img-top rounded-0">`
        domString += '<div class="card-body">'
        domString += `<h4>${projects[i].title}</h4>`
        domString += `<h5 class="mt-2 mb-3 tech-used"><p class="not-red">Technologies used:</p> ${projects[i].technologiesUsed}</h5>`
        domString += `<p class="lead border-top pt-3">${projects[i].description}</p>`
        domString += '</div>'
        domString += '</div>'
        domString += '</div>'
        domString += '</div>'
        domString += '</div>'
    }
    printToDom('projects', domString);
};

createProjectCards();


/*========== CLOSE MOBILE NAV ON CLICK ==========*/

$(document).ready(function () { //when document loads completely.
  $(document).click(function (event) { //click anywhere
      var clickover = $(event.target); //get the target element where you clicked
      var _opened = $(".navbar-collapse").hasClass("show"); //check if element with 'navbar-collapse' class has a class called show. Returns true and false.
      if (_opened === true && !clickover.hasClass("navbar-toggler")) { // if _opened is true and clickover(element we clicked) doesn't have 'navbar-toggler' class
          $(".navbar-toggler").click(); //toggle the navbar; close the navbar menu in mobile.
      }
  });
});


/*========== SMOOTH SCROLLING TO LINKS ==========*/

$(document).ready(function(){ //document is loaded
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {//click on any link;anchor tag;

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") { //for e.g. website.com#home - #home
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;
      //console.log('hash:',hash)

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({ //animate whole html and body elements
        scrollTop: $(hash).offset().top //scroll to the element with that hash
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash; //website.com - website.com#home
        //Optional remove "window.location.hash = hash;" to prevent transparent navbar on load
      });
    } // End if
  });
});


