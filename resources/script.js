var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

function openNav() {
  document.getElementsByClassName("side-nav").style.width = "15%";
  document.getElementsByClassName("page-container").style.marginLeft = "85%";
}

let elaRegSix = {
  _subject: 'ela',
  _name: 'Language Arts 6',
  _length: 'Year Long',
  _credit: 4,
  _fee: 'None',
  _grade: '6',
  _prereq: 'None',
  _info: `Sixth grade Language Arts will continue students' growth in the areas of reading, writing, listening, speaking, discussion, and reflection.\
           Reading strategies, critical thinking skills, vocabulary building, and a continued focus on writing comprise the main elements of reading\
           instruction. The focus for writing instruction will be narrative, informational, and argumentative writing with requirements based on\
           Alabama College and Career Ready standards. The overall goal of the class is to increase the literacy and writing ability of students.\
           Outside reading and summer reading are required.`,

}
let elaHonSix = {
  _subject: 'ela',
  _name: "Honors Language Arts 6",
  _length: 'Year Long',
  _credit: 4,
  _fee: 'None',
  _grade: '6',
  _prereq: 'None',
  _info: `Honors Language Arts 6 is an accelerated learning environment, which requires students to work more independently in class and at home.\
           This class is for students who have a passion for reading and demonstrate an ability to communicate effectively, in both the spoken and written word. The honors\
           class will continue students' growth in the areas of reading, writing, listening, speaking, discussion, and reflection.\
           Reading strategies, critical thinking skills, vocabulary building, and a continued focus on writing comprise the main elements of reading instruction.\
           The focus for writing instruction will be narrative, informational, and argumentative writing with requirements based on Alabama College and Career Ready standards.\
           The overall goal of the class is to increase the literacy and writing ability of students, and to build the students' reading and writing stamina, which will propel the students' writing to more clear and concise prose.\
            Outside reading and summer reading are required.`,
  
}
let mathRegSix = {
  _subject: 'math',
  _name: "Math 6",
  _length: 'Year Long',
  _credit: 4,
  _fee: 'None',
  _grade: '6',
  _prereq: 'None',
  _info: `Math 6 is based on the Alabama Course of Study Standards for 6th grade. Concepts will include, but are not limited to ratios and rates,\
  rational numbers, expressions and equations, geometrical reasoning, and statistics. Students gain a deeper understanding of math concepts\
  by narrowing their focus to fewer topics. Students who successfully complete this course will be ready for Math 7.`,
  
}
let mathHonSix = {
  _subject: 'math',
  _name: "Accelerated Math 6",
  _length: 'Year Long',
  _credit: 4,
  _fee: 'None',
  _grade: '6',
  _prereq: 'None',
  _info: `Accelerated Math 6 is based on the Alabama Course of Study Standards for 6th grade. This more in-depth course is designed for students\
  who desire the opportunity to take Accelerated Math 7. Concepts will include, but are not limited to ratios and rates, rational numbers,\
  expressions and equations, geometrical reasoning, and statistics.`
}
let earthSpaceScienceSix = {
  _subject: 'science',
  _name: "Earth and Space Science",
  _length: 'Semester Long',
  _credit: 2,
  _fee: 'None',
  _grade: '6',
  _prereq: 'None',
  _info: `This course focuses on three core ideas of Earth and Space Science: Earth's place in the universe, Earth's systems, and Earth and human\
  activity. In this course, students will be encouraged to make inquiries regarding Earth and Space Science and relate them to the world\
  around them. Some areas of study include geologic processes, human impact on the environment, the composition of Earth's core, objects\
  of the solar system, and changes in human population based on Earth's systems. Students will utilize laboratory experiments and inquiry\
  activities to deepen their understanding of the concepts. `
}
let socialStudiesSix = {
  _subject: 'socialstudies',
  _name: "Social Studies 6",
  _length: 'Semester Long',
  _credit: 2,
  _fee: 'None',
  _grade: '6',
  _prereq: 'None',
  _info: `This class provides constant opportunities for students to explore prior knowledge and opinions as they focus on the history of the United\
  States from the Industrial Revolution to the present. An emphasis is placed on economic, geographic, and historic changes that have\
  influenced every aspect of life during historical events, such as the rise of the United States as an industrial nation, World War I and II, the\
  Great Depression, and the Cold War. Students will experience cooperative learning, large and small group discussions, hands-on activities,\
  and they will be exposed to primary sources, as they learn about the reorganization of national boundaries and the movement of the United\
  States into the role of world leader.`
}
let indoorPE = {
  _subject:'pe',
  _name: "Indoor Rec and Team Sports",
  _length: '9-Weeks',
  _credit: 1,
  _fee: 'None',
  _grade: '6, 7 and 8',
  _prereq: 'None',
  _info: `This course will enhance students' ability to apply tactics and strategies to modified game play; demonstrate fundamental movement skills\
  in a variety of contexts; select and participate in physical activity; cooperate with and encourage classmates; accept individual differences\
  and demonstrate inclusive behaviors; and engage in physical activity for enjoyment and self-expression. Students will participate in daily\
  exercise, stretching, cardiovascular activities and weekly units of recreational and team sport concepts. The majority of this course will be\
  held indoors.`
}
let outdoorPE = {
  _subject: 'pe',
  _name: "Outdoor Rec and Team Sports",
  _length: '9-Weeks',
  _credit: 1,
  _fee: 'None',
  _grade: '6, 7 and 8',
  _prereq: 'None',
  _info: `This course will enhance students' ability to apply tactics and strategies to modified game play; demonstrate fundamental movement skills\
  in a variety of contexts; select and participate in physical activity; cooperate with and encourage classmates; accept individual differences\
  and demonstrate inclusive behaviors; and engage in physical activity for enjoyment and self-expression. Students will participate in daily\
  exercise, stretching, cardiovascular activities and weekly units of recreational and team sport concepts. The majority of this course will be\
  held outdoors.`
}
let frenchA = {
  _subject: 'worldlanguage',
  _name: "French Survey A",
  _length: '9-Weeks',
  _credit: 1,
  _fee: '$10',
  _grade: '6 and 7',
  _prereq: 'None',
  _info: `This survey course of French language will involve listening, speaking, reading, and writing skills involving\
  familiar topics. Students will understand and respond to simple expressions. They will speak and write using learned vocabulary in this\
  introduction to each of the languages and cultures that they will explore during the survey. A minimum of one survey of world language\
  class is required for all sixth grade students. `
}
let germanA = {
  _subject: 'worldlanguage',
  _name: "German Survey A",
  _length: '9-Weeks',
  _credit: 1,
  _fee: '$10',
  _grade: '6 and 7',
  _prereq: 'None',
  _info: `This survey course of German language will involve listening, speaking, reading, and writing skills involving\
  familiar topics. Students will understand and respond to simple expressions. They will speak and write using learned vocabulary in this\
  introduction to each of the languages and cultures that they will explore during the survey. A minimum of one survey of world language\
  class is required for all sixth grade students. `
}
let latinA = {
  _subject: 'worldlanguage',
  _name: "Latin Survey A",
  _length: '9-Weeks',
  _credit: 1,
  _fee: '$10',
  _grade: '6 and 7',
  _prereq: 'None',
  _info: `This survey course of Latin language will involve listening, speaking, reading, and writing skills involving\
  familiar topics. Students will understand and respond to simple expressions. They will speak and write using learned vocabulary in this\
  introduction to each of the languages and cultures that they will explore during the survey. A minimum of one survey of world language\
  class is required for all sixth grade students. `
}
let mandarinA = {
  _subject: 'worldlanguage',
  _name: "Mandarin Survey A",
  _length: '9-Weeks',
  _credit: 1,
  _fee: '$10',
  _grade: '6 and 7',
  _prereq: 'None',
  _info: `This survey course of Mandarin language will involve listening, speaking, reading, and writing skills involving\
  familiar topics. Students will understand and respond to simple expressions. They will speak and write using learned vocabulary in this\
  introduction to each of the languages and cultures that they will explore during the survey. A minimum of one survey of world language\
  class is required for all sixth grade students. `
}
var classGetter = []; 
let subjects = [];
let classList = [];
var credits = 0;

function getInfo(id) {
  var grade = document.getElementById("class-grade");
  var length = document.getElementById("class-length");
  var credit = document.getElementById("class-credit");
  var prereq = document.getElementById("class-prereq");
  var fee = document.getElementById("class-fee");
  var classTitle = document.getElementById("class-title");
  var classOverview = document.getElementById("class-overview");
  grade.innerText = id._grade;
  classTitle.innerText = id._name;
  classOverview.innerText = id._info;
  length.innerText = id._length;
  credit.innerText = id._credit;
  prereq.innerText = id._prereq;
  fee.innerText = id._fee;
  classGetter = [id._subject, id._name, id._credit, id];
}

  
function addCourse(){
  var sure = true;
  for(var i = 0; i < classList.length; i++){
    if(classList[i] === document.getElementById(`${classGetter[0]}-choice`).innerText ){
      alert("This class is already in your schedule. Please select another.");
      sure = false;
  }
}
  if(sure === true){
    document.getElementById(`${classGetter[0]}-choice`).innerText = classGetter[1];
    document.getElementById(classGetter[0]).style.backgroundColor = "lightgreen";
    document.getElementById(`${classGetter[0]}-remove`).style.visibility = "visible";
    classList.push(classGetter[1]);
    subjects.push(classGetter[3]);
    credits += classGetter[2]
    document.getElementById("class-list").innerHTML = classList;
    document.getElementById("credit-hours").innerHTML = credits;
  }
}
  
function removeCourse(id) {
  for(var i = 0; i < classList.length; i++){
    if(classList[i] === document.getElementById(`${id}-choice`).innerText ){
      credits -= subjects[i]._credit;
      classList.splice(i,1);
      subjects.splice(i,1);
    }
  }
  document.getElementById(`${id}-choice`).innerText = "Select a Course";
  document.getElementById(id).style.backgroundColor = null;
  document.getElementById(`${id}-remove`).style.visibility = "hidden";
  document.getElementById("class-list").innerHTML = classList;
  document.getElementById("credit-hours").innerHTML = credits;
}

var subjectChosen;
var allSubjects = ['ela', 'elective', 'math','pe','science','socialstudies','worldlanguage']
function openTab(subject){
  subjectChosen = subject;
  for(let i = 0; i < allSubjects.length; i++){
    if(subjectChosen !== allSubjects[i]){
      document.getElementById(`${allSubjects[i]}-core`).style.display = "none";
    } else {
      document.getElementById(`${allSubjects[i]}-core`).style.display = "block";
    }
  }
  
  
}
