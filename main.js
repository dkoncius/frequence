// Data
const content = [
    {
        image: "images/man-1.jpg",
        number: "01",
        title: "Tecnnical specifications"
    },
    {
        image: "images/man-2.jpg",
        number: "02",
        title: "BYU"
    },
    {
        image: "images/man-3.jpg",
        number: "03",
        title: "BYU"
    },
    {
        image: "images/man-4.jpg",
        number: "04",
        title: "BYU"
    },
    {
        image: "images/man-5.jpg",
        number: "05",
        title: "BYU"
    }
]

const tabs = document.getElementsByClassName("tab")

// Validacija
let index = 1
let currentIndex = null
for(const tab of tabs){
    tab.addEventListener("click", function(){
        index = this.getAttribute("index")
        if(index == currentIndex) return 

        // Change style and content to default for all tabs
        for(var i = 0; i < tabs.length; i++){
            // Change tab image
            tabs[i].style.background = `url(${content[i].image})`

            // Remove style
            tabs[i].classList.remove("selected")
            
            // Default cover-content
            tabs[i].innerHTML = 
            `
            <div class="content-cover">
                <p>${content[i].number}</p>
                <p>${content[i].title}</p>
            </div>
            `  
        }

        // Add style and content
        this.classList.add("selected")
        addContent(this)

        // Animation for content
        const contentElement = this.querySelector(".content")
        contentElement.classList.add("content-animation")

        setTimeout(function(){
            contentElement.classList.remove("content-animation")
        }, 200)

        // Get index and change background
        index = this.getAttribute("index")
        currentIndex = index
        this.style.background = `url(${content[index].image})`
        this.style.backgroundSize = 'cover'
    })
}


function addContent(element){
    element.innerHTML = 
    `
    <div class="content">
        <div>
        <p class="title">Sound Specs</p>
        <div class="arrows">
            <i class="fa-solid fa-chevron-left"></i>
            <i class="fa-solid fa-chevron-right"></i>
        </div>
        </div>
        <div>
            <p class="title">Sensitivity</p>
            <h3>99 db</h3>
        </div>
        <div>
            <p class="title">Indipendence</p>
            <h3>27 0hm</h3>
        </div>
        <div>
            <p class="title">Driver</p>
            <h3>40 mm ne0dymium magnet</h3>
        </div>
        <div>
            <p class="title">Sound Output</p>
            <h3>Stereo</h3>
        </div>
        <div>
            <p class="title">Opening Principle</p>
            <h3>Closed system</h3>
        </div>
        <div class="side">
            <p>Frequence Range</p>
            <h3>20 hz - 22.000 hz</h3>
        </div>
    </div>
    `
}


// Initial load
addContent(tabs[1])
tabs[1].style.background = `url(${content[1].image})`