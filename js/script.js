//Variables
let totalProgress = 0;
const button = $('button[type="button"]');
//------------------------------------------
button.on("click", function() {
  let buttonId = this.id;
  let numberId = buttonId.split("");
   let number = +numberId[1];
   if (totalProgress <= 100 - number) {
    totalProgress = totalProgress + number;
    }
  else {
     totalProgress = 0;
  };
 let perCents = totalProgress + '%';
  //console.log(perCents);
 $('.prog-st').css('width', `${perCents}`);
})