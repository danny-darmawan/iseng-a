const days = ["Minggu","Senin","Selasa","Rabu","Kamis","Jum'at","Sabtu"];
const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];


const d = new Date();
const day = days[d.getDay()] + ", " + d.getDay() + " " + months[d.getMonth()] + " " + d.getFullYear();

export { day };