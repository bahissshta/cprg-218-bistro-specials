const currentDate = new Date();
console.log(currentDate);
//const day = currentDate.getDay(); /* 0-6 Sunday is 0, Saturday is 6*/
const day = 0;
console.log(day);

if(day==0){
    //document.getElementById('special_title').innerHTML = "$9 Deluxe Burger & Fries";
    special_title.innerHTML = "$9 Deluxe Burger & Fries";
    special_image.src = "images/sunday.jpg";
    special_description.innerHTML = "50% off our Deluxe Burger and fries. A 16oz Angus patty on a pretzel bun topped with lettuce, tomato, bacon, grilled onions, and an onion ring. A huge side of our famous fries is served on the side.";
}
if(day==1){
	special_name.innerHTML = "$12 Chicken Penne Alfredo";
	special_description.innerHTML = "Grilled chicken breast over penne noodles with a creamy Alfredo sauce and parmesan cheese on top.  Side Caesar Salad included.";
	special_image.src="images/monday.jpg";
}
