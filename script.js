//OBJECTS: 
// const product = {
//     prodName : "pen",
//     rating : 4,
//     isDeal : false,
//     price : 200,
// };

// let num = prompt("enter number");
// if(num>=80 && num<=100){
//     console.log("grade A");
// } else if(num>=70){
//     console.log("grade B");
// } else{
//     console.log("grade D")
// }

// for (let i=0; i<100;i++){
//     if (i%2==0){
//         console.log(i);
//     }
// }

// gn = 25;
// let i = prompt("enter number to win");
// while(i!= gn){
//     i = prompt("wrong guess. enter number to win");
//     // if (i===gn){
//     //     console.log("you win")
//     // }
// // }
// let a = [10,20,30,40,50,60,80,90,100,70];
// for(let i=0; i<a.length;i++){
//     a[i]= 0.9*a[i];
// }
// console.log ("new array is:", a);

// function strfn (str){
//     let x=0;
//     for(let i of str){
//         if(i=="a" || i=="e" || i=="i" || i=="o" || i=="u" )    
//         {
//             // console.log("x");
//             x++;
//         }
//     }
//     // console.log("x");
//     console.log(x);
// }

// let a=[1,2,3,4,5,6,7,8];
// a.forEach((id,v)=>{
//     console.log(`the value at i: ${id} ${v**2}`);
// })
// let c = document.querySelector("h2");
// c.innerText = c.innerText+" welcome to TG class";
// console.dir(c);
// console.log(c);

// let divs = document.querySelectorAll(".box");
// for (let ind=0; ind<divs.length; ind++){
//     divs[ind].innerText = `new new ${ind} `  + divs[ind].innerText;
// divs[1].innerText = "new 2" + divs[1].innerText;
// divs[2].innerText = "new 3" + divs[2].innerText;
// }

// let bod = document.querySelector("body");
// let newBut = document.createElement("button")
// newBut.innerText="Click Me";
// newBut.style.backgroundColor="red";
// newBut.style.color="white";
// bod.prepend(newBut);

// let para = document.querySelector("p");
// // console.log(para.getAttribute("class"));
// para.classList.add("my-clas");

// function sum_numbers(a,b){
//     return a+b;
// }
// let a = sum_numbers(4,4);
// console.log(a);

// //function is stored in the 
// let asum = (a,b) => {
//     return a+b;
// }
// console.log(asum);

// function vCal (s){
//     let count=0;
//     for (i=0;i<s.length;i++){
//         if (s[i]=='a' || s[i]=='e' || s[i]=='i' || s[i]=='o' || s[i]=='u')
//             count++;
//     }
//     console.log(count);
// }

// let vocal = (str) => { 
//     let count=0;
//     for (i=0;i<str.length;i++){
//         if (str[i]=='a' || str[i]=='e' || str[i]=='i' || str[i]=='o' || str[i]=='u')
//             count++;
//     }
//     console.log(count);}

// let marks = [100,72,63,94,58,67,67,78,91,95,96];

// let nma = marks.filter((val)=>{
//     if(val>=90)
//         return val;
// }
// )
// console.log(nma);

// let n = prompt("enter number");
// let arr=[];
// for(i=0;i<n;i++){
//     arr[i]=i+1;
// }

// let sum = arr.reduce((prev,curr)=>{
//     return prev+curr;
// })
// console.log(sum);


// let prod = arr.reduce((prev,curr)=>{
//     return prev*curr;
// })
// console.log(prod);

// let x = document.querySelectorAll(".box");
// console.dir(x[0].innerText);
// let btn = document.createElement('button');
// btn.innerText="Click Me";
// // btn.style.backgroundColor = "green";
// let div = document.querySelector("div");
// div.after(btn);

//      * * * *       * * * *       * * * *         * * * * * *              *         *     * * * * *     * * * *      * * * * *
//    *             *         *     *       *       *                        *         *     *             *      *     *
//   *             *           *    *        *      *                        *         *     *             *      *     *
//  *              *           *    *        *      * * * *      * * * *     * * * * * *     * * * *       * * * *      * * * *
//  *              *           *    *        *      *                        *         *     *             *   *        *
//   *              *         *     *       *       *                        *         *     *             *     *      *   
//     * * * *        * * * *       * * * *         * * * * * *              *         *     * * * * *     *       *    * * * * *


// let bod = document.querySelector("body");

// let btn = document.createElement("button");
// btn.innerText="Click Me!";
// btn.style.backgroundColor= "blue";
// btn.style.color= "white" ;
// btn.style.border="4px solid yellow";
// bod.prepend(btn);

// let pa = document.querySelector('p');
// // console.dir(pa.getAttribute('class'));
// pa.classList.add('newClass');

// let btn = document.querySelector("#mode");
// let bod = document.querySelector("body");
// let count = 0;
// let changeMode = (e)=>{
//     if (count==0){
//         btn.innerText = "Light Mode";
//         bod.style.backgroundColor = "white";
//         bod.style.color = "black";
//         count =1;
//     }
//     else{
//         btn.innerText = "Dark Mode";
//         bod.style.backgroundColor = "black";
//         bod.style.color = "white";
//         count =0;
//     }
// }
// btn.addEventListener("click",changeMode);

// let para = document.querySelector("p");
// let eve=(e)=>{
//     console.log("ho");
//     para.classList.add("hClass");
// }
// let neve=()=>{
//     console.log("na");
//     para.classList.remove("hClass");
// };
// para.addEventListener("mouseover",eve);
// para.addEventListener("mouseout",neve
// // ()=>{
// //     console.log("ahxush");
// // }
// );


//      * * * *       * * *        * *      * *        * * * * * 
//    *             *      *      *    *  *    *       *     
//   *             *        *     *      *     *       *         
//  *    * * * *   * * * * * *    *            *       * * * *   
//  *        *     *         *    *            *       *         
//   *       *     *         *    *            *       *         
//     * * *       *         *    *            *       * * * * * 

const winning_patterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

let boxes = document.querySelectorAll(".box");
let newgame=document.querySelector("#newgame");
let turn0=true;
let h4=document.querySelector("h4");
let fullboxes=0;

boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        if(turn0){
            box.innerText="O";
            turn0=false;
            fullboxes++;
            if(fullboxes>0) h4.innerHTML=`Player X's chance:`; 
        }
        else{
            box.innerText="X";
            turn0=true;
            fullboxes++;
            h4.innerHTML=`Player O's chance:`;
        }
        box.disabled=true;
        cwc();
    });
});

function cwc(){
    for ( win of winning_patterns){
        let pos0=win[0];
        let pos1=win[1];
        let pos2=win[2];
         if(boxes[pos0].innerText == boxes[pos1].innerText &&
            boxes[pos2].innerText == boxes[pos1].innerText &&
            boxes[pos1].innerText !="" ){
            boxes.forEach((b)=>{b.disabled=true;}); //box click na ho
            h4.innerText=(`${boxes[pos1].innerText} won the game!`);
            // console.log(`${id} won the game`);
        }
    }
    if (fullboxes==9){
        resetgame();
        h4.innerText="Match Draw! Lets begin a new match!";
    }
}
let resetgame=()=>{
    boxes.forEach((b)=>{
        b.disabled=false;
        b.innerText="";
    })
}
let ng = document.querySelector("#newgame");
ng.addEventListener("click",()=>{
    resetgame();
    h4.innerText=(`Let the game begin!`);
})