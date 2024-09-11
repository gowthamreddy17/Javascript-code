const day='sunday';
switch(day){
    case 'monday':
        console.log("we have to go to work");
    break;
    case 'tuesday':
        console.log("it is tuesday");
    break;
    case 'wednesday':
        console.log("middle of the week");
    break;
    case 'thursday':
        console.log("thursday");
    break;
    case 'friday':
        console.log("it is the last working day for this week");
    break;
    case 'saturday':
    case 'sunday':
        console.log("it is weekend 🙂")
    break;
    default:
        console.log("not a valid day!");
}

if(day==='monday'){
    console.log("we have to go to work");
}
else if(day==='tuesday'){
    console.log("it is tuesday");
}
else if(day==='wednesday'){
    console.log("middle of the week");
}
else if(day==='thursday'){
    console.log("it is thursday");
}
else if(day==='friday'){
    console.log("it is the last working day for this week");
}
else if(day==='saturday'||day==='sunday'){
    console.log("it is weekend");
}
else{
    console.log("not a valid day!");
}