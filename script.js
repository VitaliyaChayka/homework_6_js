'use strict'

let playList = [

    {
    
     author: "LED ZEPPELIN",
    
     song:"STAIRWAY TO HEAVEN"
    
    },
    
    {
    
     author: "QUEEN",
    
     song:"BOHEMIAN RHAPSODY"
    
    },
    
    {
    
     author: "LYNYRD SKYNYRD",
    
     song:"FREE BIRD"
    
    },
    
    {
    
     author: "DEEP PURPLE",
    
     song:"SMOKE ON THE WATER"
    
    },
    
    {
    
     author: "JIMI HENDRIX",
    
     song:"ALL ALONG THE WATCHTOWER"
    
    },
    
    {
    
     author: "AC/DC",
    
     song:"BACK IN BLACK"
    
    },
    
    {
    
     author: "QUEEN",
    
     song:"WE WILL ROCK YOU"
    
    },
    
    {
    
     author: "METALLICA",
    
     song:"ENTER SANDMAN"
    
    }
    
    ];
  
function printPlayList(playList) {
      document.write(`<ol class="compositions">`);
      playList.forEach(item => {
          document.write(`<li class="composition">`);
          document.write(`<p class = "authors">${item.author}</p>`);
          document.write(`<p class = "songs">${item.song}</p>`);
          document.write(`</li>`);
      })
      document.write(`</ol>`);
  }
  
  printPlayList(playList);
  ////////// task3


 let i = -1;
 function trafficLight(){
     i++;
     let arr = ['red','yellow','green'],
     circle = document.querySelectorAll('.circle');
     if(circle[i-1]) circle[i-1].style.backgroundColor = '#000';
     if(i == arr.length) i = 0;
     circle[i].style.backgroundColor = arr[i];
 } 