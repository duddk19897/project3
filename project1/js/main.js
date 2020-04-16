(()=> {
    // 이벤트 위임 방식으로 통채로 .leaflet 엘리멘트에 이벤트 이벤트 위임방식으로 이벤트 한꺼뻔에 다 처리하게 
    // 하나하나 이벤트 리스너를 걸어줄수 있는데 용량이나 빠른속도를 위해서.... 

     // 이벤트 타켓을 조사해야하닌깐 이벤트 객체를 사용함.

    //  이벤트 타겟 개체가 처음으로 들어가고 이벤트 다켓 개체가 page 이름을 가지고 있으면 체크 하고
    // 없으면 부모 노드를 타고 올라가서 똑같이 동작함 ... 

    // 이벤트 등록을 해놓고 // 
    // select partent node // 
    const leaflet = document.querySelector('.leaflet');

     // close btn javascript 
    const pageElems = document.querySelectorAll('.page');
    let pageCount = 0 ; 

    let currentMenu; 
 

    // Event delegation (parent handler )
    function getTarget(elem, className){
         while(!elem.classList.contains(className)) {
             elem = elem.parentNode;

             if(elem.nodeName == 'BODY') {
                 elem = null;
                 return;
             }
         }
         return elem;
    }




 //  page close function 
    function closeLeaflet() { 
        // you need to reset page count when it closed btn
       pageCount = 0; 
       document.body.classList.remove('leaflet-opened');
       pageElems[2].classList.remove('page-flipped');
       setTimeout(() => {
           pageElems[0].classList.remove('page-flipped');
       }, 800 );  
       // 8 secons later page closed
    }

   


// zoom in 
       function zoomIn(elem) {
           // find location 
           // console.log(elem.getBoundingClientRect());
           const rect = elem.getBoundingClientRect();
           // 공식 
           const dx = window.innerWidth/2 - (rect.x + rect.width/2);
           const dy = window.innerHeight/2 - (rect.y + rect.height/2);
           let angle;
   

           switch (elem.parentNode.parentNode.parentNode.dataset.page*1) {
               case 1:
                   angle = -30;
                   break;
               case 2:
                   angle = 0;
                   break;
               case 3:
                   angle = 30;
                   break;
           }

       document.body.classList.add('zoom-in');

       leaflet.style.transform = `translate3d(${dx}px, ${dy}px, 50vw) rotateY(${angle}deg)`;
       currentMenu = elem;
       currentMenu.classList.add('current-menu');
   }


//    zoom out

function zoomOut() {
    leaflet.style.transform = 'translate3d(0, 0, 0)';
    if (currentMenu) {
        document.body.classList.remove('zoom-in');
        currentMenu.classList.remove('current-menu');
        currentMenu = null;
    }
}


    // event handler child  - open pages
    leaflet.addEventListener('click', e => {
        let pageElem = getTarget(e.target, 'page');
        // page open 
        if(pageElem) {
            pageElem.classList.add('page-flipped');
        //when page open close btn show
            pageCount++;
        if (pageCount ==2 ) {
            document.body.classList.add('leaflet-opened');
        }
     }


     let closeBtnElem = getTarget(e.target, 'close-btn');
		if (closeBtnElem) {
			closeLeaflet();
			zoomOut();
		}

     let menuItemElem = getTarget(e.target, 'menu-item');
     if (menuItemElem) {
         zoomIn(menuItemElem);
     }

     let backBtn = getTarget(e.target, 'back-btn');
		if (backBtn) {
			zoomOut();
        }
        
    });


        leaflet.addEventListener('animationend', () => {
            leaflet.style.animation = 'none';
        });


    //     window.addEventListener('mousemove', e => {
    //         targetPos.x = e.clientX - window.innerWidth*0.7;
    //         targetPos.y = e.clientY - window.innerHeight*0.7;

    // });

})();