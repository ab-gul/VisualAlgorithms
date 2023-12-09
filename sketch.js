const seedBtn = document.querySelector('#seedBtn'),
      pauseBtn = document.querySelector('#pauseBtn'),
      startBtn = document.querySelector('#startBtn'),
      resumeBtn = document.querySelector('#resumeBtn'),
      sortOption1 = document.querySelector('#option1'),
      sortOption2 = document.querySelector('#option2'),
      slider = document.getElementById("slider"),
      sortSelector = document.getElementById('sortSelector');


let 
values,
i = 0,j=0,
 _height,_width,_body,_html,
 elWidth,
 startPressed= false,
 sortingAlgo = 1,
 fps = slider.value,
 selectedSortOption = sortSelector.value; 

seedBtn.addEventListener('click', seed);
pauseBtn.addEventListener('click', pauseButton ) ;
startBtn.addEventListener('click', start);
resumeBtn.addEventListener('click', resume);
slider.addEventListener('input',  function() {
    fps = document.getElementById("slider").value;
   document.getElementById("fpsNumber").innerHTML = fps;})