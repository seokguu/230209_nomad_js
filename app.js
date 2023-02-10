// const title = document.querySelector("div.hello:first-child h1");
// // id를 지정할땐 #을 붙임
// // class hello 를 가진 div 내부의 child 1번인 h1을 찾는 것
// console.log(title);
// console.dir(title);

// title.innerText = "Hello";

// title.style.color="blue";
// const title = document.querySelector("div.hello:first-child h1");
// function handleTitleClick(){
//     title.style.color = "blue";
//     console.log("title was clicked!");
// }

// function handleMouseEnter(){
//     title.innerText = "Mouse is here!";
// }

// function handleMouseleave(){
//     title.innerText = "Mouse is gone!";
// }

// function handleWindowResize(){
//     document.body.style.backgroundColor = "tomato";
//     //document.body(head, title) 의 경우 중요한 부분만 사용 가능하며 h1, div 등은 이러한 방식으로 사용이 불가능함 
// }

// function handleWindowCopy(){
//     alert("copier!")
// }

// function handleWindowOffline(){
//     alert("help! no WIFI!")
// }

// function handleWindowOnline(){
//     alert("Good")
// }

// console.dir(title);

// title.addEventListener("click", handleTitleClick);
// title.addEventListener("mouseenter", handleMouseEnter);
// title.addEventListener("mouseleave", handleMouseleave);
// /* title.onclick = handleTitleClick 으로도 표현할 수 있음.
// title.addEventListener 의 경우 title.removeEventListener으로도 변경이 가능하기에 조금 더 선호됨.
// */
// /*
// title.addEventListener("mouseleave", handleMouseleave);
// 위의 방식의 경우 펑션을 직접 실행하는 것이 아니라 js가 실행해줌.

// 아래의 방식의 경우는 펑션을 직접 실행하는 방식.
// title.addEventListener("mouseleave", handleMouseleave());
// */

// window.addEventListener("resize", handleWindowResize);
// window.addEventListener("copy", handleWindowCopy);
// window.addEventListener("offline", handleWindowOffline);
// window.addEventListener("online", handleWindowOnline);

// const h1 = document.querySelector("div.hello:first-child h1");
// function handleTitleClick(){
//     const curretColor = h1.style.color;
//     let newColor;
//     if(curretColor === "blue"){
//         newColor = "tomato";
//     }else{
//         newColor = "blue";
//     }
//     h1.style.color = newColor;
// }

// h1.addEventListener("click", handleTitleClick);

const h1 = document.querySelector("div.hello:first-child h1");
function handleTitleClick(){
    // const clickedClass = "clicked"
    // if(h1.classList.contains(clickedClass)){
    //     h1.classList.remove(clickedClass);
    // }else{
    //     h1.classList.add(clickedClass);
    // }

    h1.classList.toggle("clicked");
    // 위의 5줄이 toggle 사용 시 한줄로 대체가 가능함.
}

h1.addEventListener("click", handleTitleClick);