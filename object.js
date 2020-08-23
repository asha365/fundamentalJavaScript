var student = {id: 121, phone:174534, name:'asha'};
var student2 = {id: 122, phone:18378, name:'afrin'};
//object ar character stick reach
//var phoneNo = student.phone;
//var phoneNo = student2['phone'];

//student2 update phone number change
student2.phone = 435353;
student2['phone'] = 6664534;
student2[phonePropName] = 9997847;

var phonePropName = 'phone';
var phoneNo = student2[phonePropName];

//new property add 
student2.cinema = 'Ogni2';
student2.cinema = 'pora mon2';


console.log(phoneNo);
console.log(student);
console.log(student2);
