class App {
  static init(){
    this.nameChange()
    this.playVideo()
    this.modalExitListener()
  }


  static nameChange(){
    const titles = [
      'Full Stack Engineer', 'Software Engineer', 
      'Frontend Engineer', 'Backend Engineer', 'Code Wizard'
    ]

    let counter = 0

    setInterval(function(){
      counter >= titles.length -1  ? counter = 0 : counter++
      document.querySelector('#title').innerHTML = titles[counter]
    },3000)
  }


  static playVideo(){
    document.querySelectorAll('.overlay').forEach(function(item){
      item.addEventListener('click', function(event){
        document.querySelector('iframe')
          .src = `https://www.youtube.com/embed/${item.dataset.mediaId}`
        
        document.querySelector('.modal-content')
          .parentNode.style.display = 'inline'
      })
    })
  }

  static modalExitListener(){
    const modal = document.querySelector('.modal')
    
    
    modal.addEventListener('click', function(event){
      if(event.target.className === 'modal'){
        modal.style.display = "none"
        document.querySelector('iframe').src = ""
      }
    })
  }


}

document.addEventListener('DOMContentLoaded', () => {
  App.init()
  
})