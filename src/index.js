console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoaded", () => {


  let breeds = []

  function getBreeds() {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    return fetch(imgUrl)
    .then(res => res.json())
    
    .then(res => {
      const dogImageContainer = document.getElementById("dog-image-container")

      res.message.forEach(url => {
        const img = document.createElement("img")
        img.src = url 
        dogImageContainer.append(img)
      })
    })
  }
  getBreeds()
  
  function getBreedNames() {
      const breedUrl = 'https://dog.ceo/api/breeds/list/all'
      fetch(breedUrl)
      .then(res => res.json())
      .then(res => {
        breeds = Object.keys(res.message)
        addBreedNamesToDom(breeds)
        })
      }
      
    getBreedNames()
    
    function addBreedNamesToDom(breeds){
      const ul = document.querySelector("#dog-breeds")
        breeds.map(breed => {
          const li = document.createElement("li")
          li.textContent = breed
          ul.append(li)
        })
    }

  document.addEventListener("click", event => {
    if (event.target.matches("li")) {
      event.target.style.color = "red"
    }
  })
  
  
  document.addEventListener("change", event => {
    if(event.target.matches("#breed-dropdown")) {
        const ul = document.querySelector("#dog-breeds")
        ul.innerHTML = ""
        const filterBreeds = breeds.filter(breed => breed[0] === event.target.value)
        addBreedNamesToDom(filterBreeds)
      }
    })

  })