// section produit

let section = document.getElementById("section4")
let newDiv = document.createElement("div")
let productbtn1 = document.createElement("button")
let productbtn2 = document.createElement("button")
let total = 0

class Produits{
    constructor(nom,prix,prix2,img1,img2,img){
        this.nom = document.createElement("h5")
        this.nom.innerHTML = nom
        this.prix = document.createElement("p")
        this.prix.innerHTML = prix
        this.prix2 = document.createElement("p")
        this.prix2.innerHTML = prix2
        this.img1 = document.createElement("img")
        this.img1.src = "public/img/fashion/" + img1
        this.img2 = document.createElement("img")
        this.img2.src = "public/img/fashion/" + img2
        this.img = "public/img/fashion/" + img

        this.newFile = () => {
            let newDiv = document.createElement("div")
            newDiv.style.margin = "1%"
            newDiv.style.textAlign = "center"
            newDiv.style.width = "250px"
            newDiv.style.height = "430px"
            newDiv.style.position = "relative"
            section.appendChild(newDiv)
            section.style.display = "flex"
            section.style.flexWrap = "wrap"
            section.style.justifyContent = "center"
            newDiv.appendChild(this.img1)
            this.img1.style.width = "100%"
            newDiv.appendChild(this.nom)
            newDiv.appendChild(this.prix)
            this.prix2.style.textDecoration = "line-through"
            newDiv.appendChild(this.prix2) 
            
            this.img1.addEventListener("mouseenter", ()=> {
                this.img1.src = this.img2.src
    
            })

            this.img1.addEventListener("mouseleave", ()=> {
                this.img1.src = this.img
    
            }) 

            this.img1.addEventListener("click", ()=> {
                let productbtn1 = document.createElement("button")
                let productbtn2 = document.createElement("button")
                let productbtn3 = document.createElement("button") 
                let icon1 = document.createElement("i")
                let icon2 = document.createElement("i")
                let icon3 = document.createElement("i")
                icon1.setAttribute("class","fa-solid fa-database")
                icon2.setAttribute("class","fa-solid fa-eye") 
                icon3.setAttribute( "class","fa-solid fa-heart") 
                icon1.style.color = "white"
                icon2.style.color = "white"
                icon3.style.color = "black"
                productbtn1.style.backgroundColor = "black"
                productbtn1.style.width = "50%"
                productbtn1.style.height = "5vh"
                productbtn1.style.position = "absolute"
                productbtn1.style.bottom = "26%"
                productbtn1.style.right = "0"
                productbtn2.style.backgroundColor = "black"
                productbtn2.style.width = "50%"
                productbtn2.style.height = "5vh"
                productbtn2.style.position = "absolute"
                productbtn2.style.bottom = "26%"
                productbtn2.style.left = "0"
                productbtn3.style.borderRadius = "50%"
                productbtn3.style.height = "5vh"
                productbtn3.style.width = "5vh"
                productbtn3.style.position = "absolute"
                productbtn3.style.top = "2vh"
                productbtn3.style.right = "2vh"
                productbtn3.style.border = "1px solid white"
                productbtn3.style.backgroundColor = "white"
                newDiv.appendChild(productbtn1)
                newDiv.appendChild(productbtn2)
                newDiv.appendChild(productbtn3)
                productbtn1.appendChild(icon2)
                productbtn2.appendChild(icon1)
                productbtn3.appendChild(icon3)

                productbtn3.addEventListener("click", function(){
                    let heart = document.getElementById("heart")
                    total ++ 
                    heart.innerText = total
                

                })

            })   
        }      
    }
}

let produit1 = new Produits("Textured Sweater","$50.00","","fashion-recent-products-01-1-1.jpg","fashion-recent-products-01-a-1-1.jpg","fashion-recent-products-01-1-1.jpg")
let produit2 = new Produits("Traveller Shirt","$510.00","","fashion-recent-products-02-1-1.jpg","fashion-recent-products-02-a-1-1-1.jpg","fashion-recent-products-02-1-1.jpg")
let produit3 = new Produits("Crewneck Sweatshirt","$20.00 - $50.00","","fashion-recent-products-01-b.jpg","fashion-recent-products-03-a-1-1.jpg","fashion-recent-products-01-b.jpg")
let produit4 = new Produits("Skinny Trousers","$200.00","$160.00","fashion-recent-products-04.jpg","fashion-recent-products-04-a-1.jpg","fashion-recent-products-04.jpg")
let produit5 = new Produits("High Neck Sweater","$40.00","$35,00","fashion-recent-products-05-1.jpg","fashion-recent-products-05-a-1.jpg","fashion-recent-products-05-1.jpg")
let produit6 = new Produits("Sleeve Sweater","$140.00","$120,00","fashion-recent-products-06-1.jpg","fashion-recent-products-06-a-1.jpg","fashion-recent-products-06-1.jpg")
let produit7 = new Produits("Pocket Sweatshirt","$410.00","","fashion-recent-products-07-1.jpg","fashion-recent-products-07-a-1.jpg","fashion-recent-products-07-1.jpg")
let produit8 = new Produits("Top With Pleated","$20.00 - $50.00","","fashion-recent-products-08-1.jpg","fashion-recent-products-08-a.jpg","fashion-recent-products-08-1.jpg")
let produit9 = new Produits("Cotton Sweater","$100.00","$155.00","fashion-recent-products-01-d.jpg","fashion-recent-products-09-a-1-1.jpg","fashion-recent-products-01-d.jpg")
let produit10 = new Produits("Texture Plain Regular","$85.00","$70.00","fashion-recent-products-10-1.jpg","fashion-recent-products-10-a-1.jpg","fashion-recent-products-10-1.jpg")

produit1.newFile()
produit2.newFile()
produit3.newFile()
produit4.newFile()
produit5.newFile()
produit6.newFile()
produit7.newFile()
produit8.newFile()
produit9.newFile()
produit10.newFile()


// premier carousel

let indexValue = 1
showImg(indexValue)
function btm_slide(e){showImg(indexValue = e)}
function side_slide(e){showImg(indexValue += e)}
function showImg(e){
    let i;
    const img = document.querySelectorAll(".images img")
    const sliders = document.querySelectorAll(".btm-sliders span")
    if(e > img.length){indexValue = 1}
    if(e < 1){indexValue = img.length}
    for(i = 0; i < sliders.length; i++){
        img[i].style.display = "none"
    }
    
    img[indexValue-1].style.display = "block"
    img[indexValue-1].style.display = "block"

}

// dark mode
function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
  } 



// navbar change color on scroll
let nav = document.getElementById("navbar")

window.onscroll = () => {
    const nav = document.querySelector('#navbar')
    const navitem = document.getElementById("nav-a1")
    const navitem1 = document.getElementById("nav-a2")
    const navitem2 = document.getElementById("nav-a3")
    const navitem3 = document.getElementById("nav-a4")
    const navitem4 = document.getElementById("nav-a5")
    const navitem5 = document.getElementById("nav-a6")
    const navtoggler = document.getElementById("nav-toggler")
    const navimg = document.getElementById("nav-img")
    const navi = document.getElementById("nav-i")
    if(this.scrollY <= 850) {
        nav.style.backgroundColor = "#F5EBDF"
        navitem.style.color = "black"
        navitem1.style.color = "black"
        navitem2.style.color = "black"
        navitem3.style.color = "black"
        navitem4.style.color = "black"
        navitem5.style.color = "black"
        navimg.style.backgroundColor = "#F5EBDF"
        navi.style.color = "black"
        navtoggler.style.color = ""
    } else{
        nav.style.backgroundColor = "black"
        nav.style.color = "white"
        navitem.style.color = "white"
        navitem1.style.color = "white"
        navitem2.style.color = "white"
        navitem3.style.color = "white"
        navitem4.style.color = "white"
        navitem5.style.color = "white"
        navimg.style.backgroundColor = "white"
        navi.style.color = "white"
        navtoggler.style.color = "white"
        

    }

  }

let sectionbtn1 = document.getElementById("sectionbtn1")
let sectionbtn2 = document.getElementById("sectionbtn2")
let hidden1 = document.getElementById("section5div1")
let hidden2 = document.getElementById("section5div2")

sectionbtn1.addEventListener("click", function(){
    hidden1.classList.toggle("d-none")
    hidden2.classList.toggle("block")

})