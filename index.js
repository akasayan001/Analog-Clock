const hours=document.getElementById("hr");
const minute=document.getElementById("min");
const srcond=document.getElementById("sec");

setInterval(()=>
{
    let date= new Date();
   let hr=date.getHours()*30;
   let  min=date.getMinutes()*6;
   let  sec=date.getSeconds()*6;

   hours.style.transform=`rotateZ(${(hr)+(min/12)}deg)`;
   minute.style.transform=`rotateZ(${min}deg)`;
   srcond.style.transform=`rotateZ(${sec}deg)`;

});
