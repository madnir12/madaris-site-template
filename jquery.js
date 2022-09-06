$("document").ready(()=>{
    $(".fa-bars").click(()=>{
        $(".nav-links").toggle("slow");
    });

      // slide show
      let slides = "";
      let page = window.location.pathname;
      if(page.includes("index.htm")){ // this will run only index page
        slides = document.querySelector('.slider').querySelectorAll('.slide');
        let num = 1;
  
  setInterval(() => {
    
      for(let y of slides){
        $(y).slideUp('slow');
  
      };
       $(slides[num]).slideDown('slow');
       if(num < slides.length-1){
        num++;
        }
        else{
            num = 0;
        }
        
    
  }, 8000);
  // end slider
      }
  
  
//   start text slider
  let textSlides = $('.text-slide');
  let textNum = 1;
  
  setInterval(() => {
    
      for(let x of textSlides){
        $(x).fadeOut('fast');
  
      };
       $(textSlides[textNum]).fadeIn('fast');
       if(textNum < textSlides.length-1){
        textNum++;
        }
        else{
            textNum = 0;
        }
        
    
  }, 9000);
//   end text slider
 // navbar effect on scrolling
 $(window).scroll(()=>{
  $(".nav-container").toggleClass('navscrolled', $(this).scrollTop() > 5);
});
// end navbar effect
// start autog

if(page.includes("index.html")){
  let container = document.getElementById("pcontainer");
let html = ` <article class="post-body" id="pbody">
<div class="thumbnail">
    <div class="date">
        <span>تاریخ:2022-08-28</span>
    </div>
    <img src="https://media.istockphoto.com/photos/woman-hands-praying-for-blessing-from-god-on-sunset-background-picture-id1127245421?b=1&k=20&m=1127245421&s=170667a&w=0&h=aWmPeAuBDB2FPP7hjsqeGsE6eqlqi3Q0nG-w6Ft4HFY="
        alt="">
</div>
<div class="tcb">
    <h3 class="ptitle"><a href="#">تحریر کا عنوان</a> </h3>
<p>تحریر  کی جاری معلومات تحریر  کی جاری معلومات تحریر  کی جاری معلومات تحریر  کی جاری معلومات تحریر  کی جاری معلومات تحریر  کی جاری معلومات تحریر  کی جاری معلومات تحریر  کی جاری معلومات تحریر  کی جاری معلومات تحریر  کی جاری معلومات </p>                           
    <div class="rmbutton">
        <a href="#" class="button">مزید تفصیل</a>
    </div>
</article>`;
let end2 = 20;
genratef(container,html,end2);
};
// genrate fatawa
if(page.includes("fatawa.html")){
  let fatawa = document.querySelector('.fatawaContainer');
let htmlFatawa = ` <div class="fatawaDiv">
<h3>فتاوٰی عنوان</h3>
<img src="./ast/images/fatawa.jpg" alt="">
<a href="#">ڈاؤن لوڈ پی ڈی ایف</a>
</div>`;
 let end = 69;
genratef(fatawa,htmlFatawa,end);
}
// ends genrate fatawa
function genratef(container,html,last){ 
  for(let index = 0; index < last; index++){
    
    container.innerHTML += html;
  }
}
// end autog
});