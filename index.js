document.addEventListener('DOMContentLoaded', ()=> {
  const titles = [
    'Full Stack Engineer',
    'Software Engineer',
    'Frontend Engineer',
    'Backend Engineer',
    'Code Wizard'
  ]

  let counter = 0

  setInterval(function(){    
    let title = document.querySelector('#title')
    
    if (counter >= titles.length - 1){
      counter = 0
    } else {
      counter++
    }
    
    title.innerHTML = titles[counter]
  },3000)
})