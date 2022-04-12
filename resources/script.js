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

//Academic Team Electives
let greenpowerRacing = {
  _subject: 'elective',
  _name: "Greenpower Racing",
  _length: '9-Weeks',
  _credit: 1,
  _fee: 'None',
  _grade: '6, 7 & 8',
  _prereq: 'Must Apply',
  _info: `Students plan, build, and test a Greenpower USA car for competitions. Students will learn about business disciplines in the engineering\
  world focusing on leadership, engineering, promotion, presentation, testing, and safety. There is no fee for this course due to the expected\
  fundraising efforts of the class. A competitive application process is required. `
}

let scholarsBowlI = {
  _subject: 'elective',
  _name: "Scholar's Bowl I",
  _length: '9-Weeks',
  _credit: 1,
  _fee: '$25',
  _grade: '6',
  _prereq: 'None',
  _info: `Scholar's Bowl I is an introductory class for 6th grade students. Students will become acquainted with the format and knowledge required\
  to be academically competitive on the Scholars Bowl team. This class involves learning information from all areas of knowledge.\
  Including but not limited to: geography, history, literature, science, fine arts, current events, popular culture, sports and more. Students will\
  be tested on any and all learned materials as a means to prepare them for academic competition. Some students in this class will be\
  expected to compete on a 6th grade competition team with most competitions occurring on Saturday mornings in schools throughout the\
  state.`
}
let introChess = {
  _subject: 'elective',
  _name: "Introduction to Chess",
  _length: '9-Weeks',
  _credit: 1,
  _fee: 'None',
  _grade: '6,7 & 8',
  _prereq: 'None',
  _info: `This class is designed to teach chess to children who have no knowledge of the game. Students will learn pawn and piece movement as well\
  as the fundamentals of the beginning, the middle, and the end of the game. Students will use actual chess pieces as part of the practical\
  instruction in addition to viewing demonstrations, both live and recorded. `

}
let compChess = {
  _subject: 'elective',
  _name: "Competitive Chess",
  _length: '9-Weeks',
  _credit: 1,
  _fee: 'None',
  _grade: '6,7 & 8',
  _prereq: 'None',
  _info: `Chess is the classic game that develops spatial thinking and strategies and builds focused concentration. The class is geared for the more\
  advanced level chess players. Intermediate and advanced players learn sophisticated combinations and strategies and advanced opening\
  moves. Students compete in various tournaments outside of school.`
}
let scienceOlympiad = {
  _subject: 'elective',
  _name: "Science Olympiad",
  _length: '9-Weeks',
  _credit: 1,
  _fee: '$25',
  _grade: '6,7 & 8',
  _prereq: 'Must Apply',
  _info: `The students in this course will be a part of the Science Olympiad teams. This course will cover all science disciplines including earth\
  science, life science, physical science, forensics, and advanced chemistry. Students will research topics to develop their understanding of all\
  aspects of science. The class time will be devoted to actively seeking knowledge as well as identifying and developing students' strengths. `
}
//CTE and STEM Electives
let csim = {
  _subject: 'elective',
  _name: "C.S.I.M.",
  _length: '9-Weeks',
  _credit: 1,
  _fee: 'None',
  _grade: '6,7 & 8',
  _prereq: 'None',
  _info: `Computer Science for Innovators and Makers teaches students that programming goes beyond the virtual world into the physical world.\
  Students are challenged to creatively use sensors and actuators to develop systems that interact with their environment. Designing\
  algorithms and using computational thinking practices, they code and upload programs to microcontrollers that perform a variety of\
  authentic tasks. CSIM broadens students' understanding of computer science concepts through application. `
}
let designModeling = {
  _subject: 'elective',
  _name: "Design and Modeling",
  _length: '9-Weeks',
  _credit: 1,
  _fee: '$10',
  _grade: '6,7 & 8',
  _prereq: 'None',
  _info: `Students discover the engineering design process and develop an understanding of the influence of creativity and innovation in their lives,\
  while solving problems. They are then challenged to apply what is learned throughout the unit to design a therapeutic toy for a child who\
  has Cerebral Palsy. Students will also learn the importance of effective communication of a design solution, the importance of team norms\
  in a collaborative setting, and the critical role documentation plays in each step of the design process.`
}
let digPubTools = {
  _subject: 'elective',
  _name: "Digital Publishing Tools",
  _length: '9-Weeks',
  _credit: 1,
  _fee: 'None',
  _grade: '6,7 & 8',
  _prereq: 'None',
  _info: `Students will learn the fundamental concepts of word processing, spreadsheets and presentation software through a variety of software\
  applications. The students will explore basic design concepts that will be utilized when creating a personalized digital portfolio that showcases\
  their academic work. Students will increase their computer competency and keyboarding skills for composing and creatively expressing ideas\
  digitally. Digital citizenship concepts and skills will be taught throughout the class. `
}
let stem = {
  _subject: 'elective',
  _name: "STEM",
  _length: '9-Weeks',
  _credit: 1,
  _fee: '$10',
  _grade: '6 & 7',
  _prereq: 'None',
  _info: `Career and Technical Education (CTE) is a blend of academic, career-specific, general workplace, and life skills leading to further\
  education and preparation for employment. Students will use cooperation, collaboration and communication to solve real or fictitious\
  problems. They will outline the specifics of the problem, conduct design research to see what solutions are already present, draft a solution,\
  and then build and improve their product. Once the product is complete, they will share their ideas, their plan, and their design conclusion\
  with their classmates. While participating in the problem-based learning activities, students will also be coached on management and\
  work/life skills such as delegating tasks, effective communication techniques, and time management to meet a deadline. After completing\
  this course, students have organically been exposed to science and math concepts, but they also have a strong understanding of the\
  Engineering Design approach as well as synergizing group dynamics. `
}

//Fine Arts Electives
let introVisualArts = {
  _subject: 'elective',
  _name: "Introduction to Visual Arts",
  _length: '9-Weeks',
  _credit: 1,
  _fee: '$10',
  _grade: '6,7 & 8',
  _prereq: 'None',
  _info: `The purpose of this nine week course is to introduce students to a basic understanding of visual arts. Students will try different types of art\
  media, like drawing and painting, while also learning about art appreciation, art history, and art criticism. This class is designed to help\
  students engage their creativity as well as developing their art skills.`
}
let beginningBand = {
  _subject: 'elective',
  _name: "Beginning Band",
  _length: 'Year Long',
  _credit: 4,
  _fee: '$100',
  _grade: '6,7 & 8',
  _prereq: 'Instrument Screening',
  _info: `Beginning Band is a year-long class designed for the student who has not played a band instrument before. Fundamentals of playing a\
  musical instrument and accurate reading of music are stressed. Instruments must be provided by each student. Students must attend an\
  instrument screening where the band director will help guide your student through the instrument selection process and provide information\
  for purchasing or renting an instrument. Students in band are expected to participate in one evening concert each semester for a major\
  portion of their grade. `
}
let beginningChorus = {
  _subject: 'elective',
  _name: "Beginning Chorus",
  _length: 'Year Long',
  _credit: 4,
  _fee: '$40',
  _grade: '6',
  _prereq: 'None',
  _info: `The Choral Music program is designed to enhance the musical creative and expressive qualities of all students. Beginning Chorus is a yearlong ensemble open to all sixth grade students. Students in this choir will learn the fundamentals of singing and music theory through daily\
  activities and practice. Students will also gain basic musical and historical knowledge. Students participate in daily rehearsals and perform\
  in one mandatory evening concert per semester as well as various school assemblies and State Choral Performance Assessment. Optional\
  Honor Choirs are available.`
}
let advancedChorus = {
  _subject: 'elective',
  _name: "Advanced Chorus",
  _length: 'Year Long',
  _credit: 4,
  _fee: '$40',
  _grade: '6,7 & 8',
  _prereq: 'Audition',
  _info: `Advanced Chorus is a course designed for highly motivated choral students to apply musical skills as they continue to create and experience\
  performance through a choral ensemble. Students will continue developing mastery of solfege, major and minor scales, sight-singing and\
  multi-part harmonies. Students will convey musical interpretation with the use of dynamics and phrasing, while incorporating facial\
  expression and movement for refined presentation. Mandatory graded performances include one evening concert per semester, school\
  assemblies and State Choral Performance Assessment. Optional Honor Choirs/All-State auditions are available. `
}
let beginningTheatre = {
  _subject: 'elective',
  _name: "Beginning Theatre",
  _length: '9-Weeks',
  _credit: 1,
  _fee: 'None',
  _grade: '6,7 & 8',
  _prereq: 'None',
  _info: `This course will offer students exposure to basic theatre knowledge and acting skills. Students will build confidence and become more\
  comfortable expressing themselves in front of others.  `
}
let advancedTheatre = {
  _subject: 'elective',
  _name: "Advanced Theatre",
  _length: 'Semester Long',
  _credit: 2,
  _fee: '$50',
  _grade: '6,7 & 8',
  _prereq: 'Audition',
  _info: `This course will allow students to build upon foundations of vocal, kinesthetic, emotional, analytical, and intellectual elements of theatrical\
  training through improvisation, dramatization, process-centered elements of dramatic performance, aesthetics, criticism, and history. In\
  addition, this course will focus on one major production each semester. Students must either audition and be approved with a one minute\
  monologue, or obtain instructor approval to register. After school productions and some rehearsals will take place at the high school\
  auditorium and will be mandatory. Students may also be required to participate in fundraising for the program.  `
}

//General Electives
let digCom = {
  _subject: 'elective',
  _name: "Digital Communications (DigCom)",
  _length: 'Year Long',
  _credit: 4,
  _fee: '$10',
  _grade: '6,7 & 8',
  _prereq: 'Must Apply',
  _info: `In this course, students learn how to analyze media in print and digital forms to understand how messages are conveyed to audiences.\
  Students learn how to script, storyboard, film, edit and produce digital media while leaving a positive footprint on the global digital\
  community. They can choose to pursue projects such as reporting on various school happenings, creating PSAs, creating short films or\
  moderating social media accounts. `
}
let innovativeExplorations = {
  _subject: 'elective',
  _name: "Innovative Explorations",
  _length: 'Semester or Year',
  _credit: 2,
  _fee: '$10',
  _grade: '6,7 & 8',
  _prereq: 'Gifted',
  _info: `*This course is offered to students who are currently receiving gifted services at their current elementary school. This course is about\
  finding and solving problems in the world. Students will utilize reflection, critical and creative thinking, problem solving, communication\
  and creative expression, and research skills while working toward an innovative solution to a problem. This course also provides support of\
  affective development in students from a gifted teacher. `
}
//Language Arts Elective
let compWorkshop = {
  _subject: 'elective',
  _name: "Composition Workshop",
  _length: '9-Weeks',
  _credit: 1,
  _fee: 'None',
  _grade: '6,7 & 8',
  _prereq: 'None',
  _info: `This elective will provide an overview of the basic elements of modern English usage, such as spelling, parts of speech, capitalization,\
  punctuation, subject/verb agreement, and correct pronoun usage. The course will include consistent writing experiences paying special\
  attention to Madison City's writing curriculum, claim, data, commentary, and MLA formatting and citations. With the writing experiences,\
  students will also participate in typing, drafting, editing, and revising. This course is offered to meet the need for a foundation in grammar,\
  sentence structure, composition, and technological publishing skills for final writing projects. `
}
let creativeWritingI = {
  _subject: 'elective',
  _name: "Creative Writing I",
  _length: '9-Weeks',
  _credit: 1,
  _fee: 'None',
  _grade: '6,7 & 8',
  _prereq: 'None',
  _info: `This elective will provide an overview of the basic elements of modern English usage, such as spelling, parts of speech, capitalization,\
  punctuation, subject/verb agreement, and correct pronoun usage. The course will include consistent writing experiences paying special\
  attention to Madison City's writing curriculum, claim, data, commentary, and MLA formatting and citations. With the writing experiences,\
  students will also participate in typing, drafting, editing, and revising. This course is offered to meet the need for a foundation in grammar,\
  sentence structure, composition, and technological publishing skills for final writing projects. `
}
let introPubSpeaking = {
  _subject: 'elective',
  _name: "Introduction to Public Speaking",
  _length: '9-Weeks',
  _credit: 1,
  _fee: 'None',
  _grade: '6,7 & 8',
  _prereq: 'None',
  _info: `Students will participate in activities preparing them to speak effectively. Students will gain confidence, poise, and self-esteem. This course\
  will include practice in vocal skills, organization, persuasion, and argument. Activities may include informative and persuasive speeches,\
  readings from literature, and an introduction to debate. `
}
let speechDebate = {
  _subject: 'elective',
  _name: "Speech and Debate",
  _length: '9-Weeks',
  _credit: 1,
  _fee: '$10',
  _grade: '6,7 & 8',
  _prereq: 'None',
  _info: `This course is designed to develop student competency in research, writing, speech, and debate skills. Discussions over the course of the\
  term will include current events, historical legal cases and classic debate topics. Students will engage in various critical thinking activities\
  including debates, speeches, presentations, and analytical writing. This course integrates listening, speaking, reading, writing, and grammar\
  skills. Rudimentary research skills will be introduced and word processing skills taught. This course will cover a variety of speech and\
  debate events as outlined by the National Speech and Debate Association such as, but not limited to, Lincoln-Douglas, Policy, Public\
  Forum, Congressional Debate, and Speech events.`
}
let readingLab = {
  _subject: 'elective',
  _name: "Reading Lab",
  _length: '9-Weeks',
  _credit: 1,
  _fee: 'None',
  _grade: '6,7 & 8',
  _prereq: 'Teacher Recommndation',
  _info: `Recommendation required by school based on data.
  This course is designed for students who need support with reading related skills. For maximum success, parents, students, and academic\
  support teachers communicate frequently to increase student success with these skills. Recommendation is determined by a student's\
  academic performance and identified needs. Students may be re-evaluated at the end of each grading period and, if recommended by\
  the teacher, may be moved out of the class into another elective, or may remain in the class.`
}

let yearbook = {
  _subject: 'elective',
  _name: "Yearbook",
  _length: 'Year Long',
  _credit: 4,
  _fee: '$10',
  _grade: '6,7 & 8',
  _prereq: 'Must Apply',
  _info: `Students create, design, and produce the school’s yearbook; learn and use publishing tools; utilize desktop publishing skills; refine revising\
  and editing skills; work under established deadlines; and create spectacular pictures by using PhotoShop. The yearbook staff may be\
  required to stay after school on occasion in order to complete deadlines. Requirements for becoming a staff member are as follows: fill out\
  an application, be interviewed by the adviser and present staff, and obtain three recommendations (one of which is the present English\
  teacher).`
}
//Math Electives
let mathMeetsArt = {
  _subject: 'elective',
  _name: "Math Meets Art",
  _length: '9-Weeks',
  _credit: 1,
  _fee: 'None',
  _grade: '6,7 & 8',
  _prereq: 'None',
  _info: `This elective course focuses on the creative side of math, where students will combine several mathematical concepts and principles to\
  create unique artwork. During the 9 weeks, students will draw, build, and observe 3 dimensional figures, learn how to create scale replicas\
  and drawings, using transformations to design tessellations and mandalas, and explore the Pythagorean Theorem, the Sierpinski Triangle,\
  Koch's Snowflake, and the Golden Ratio.`
}
let mathLab = {
  _subject: 'elective',
  _name: "Math Lab",
  _length: '9-Weeks',
  _credit: 1,
  _fee: 'None',
  _grade: '6,7 & 8',
  _prereq: 'Teacher Recommendation',
  _info: `Recommendation based on student data and identified needs.
  This hybrid course supports students through the use of small group instruction and an interactive computer program. It focuses on number\
  sense and fraction relationships. Placement in this class is based on academic need. Students may be re-evaluated at the end of each\
  grading period and, if recommended by the teacher, may be moved out of the class into another elective, or may remain in the class.`
}
//PE Electives
let electIndoorPE = {
  _subject:'elective',
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
let electOutdoorPE = {
  _subject: 'elective',
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

//World Language Electives
let electFrenchA = {
  _subject: 'elective',
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
let electGermanA = {
  _subject: 'elective',
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
let electLatinA = {
  _subject: 'elective',
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
let electMandarinA = {
  _subject: 'elective',
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

var electiveHours = 0;
function addCourse(){
  
  var electiveOneCheck = ['one', 'two', 'three', 'four', 'five', 'six'];
  for (let e = 0; e < electiveOneCheck.length; e++){
    if (classGetter[0] === 'elective' && classGetter[2] === 1 && document.getElementById(`elective-${electiveOneCheck[e]}-choice`).innerText === "Select a Course" && document.getElementById(`elective-${electiveOneCheck[e]}`).style.display !== 'none'){
      document.getElementById(`elective-${electiveOneCheck[e]}-choice`).innerText = classGetter[1];
      document.getElementById(`elective-${electiveOneCheck[e]}`).style.backgroundColor = "lightgreen";
      document.getElementById(`elective-${electiveOneCheck[e]}-remove`).style.visibility = "visible";
      classList.push(classGetter[1]);
      subjects.push(classGetter[3]);
      credits += classGetter[2]
      document.getElementById("class-list").innerHTML = classList;
      document.getElementById("credit-hours").innerHTML = credits;
      electiveHours += 1;
      break;
    }
  }
  for (let e = 0; e < electiveOneCheck.length; e += 2){
    if (classGetter[0] === 'elective' && classGetter[2] === 2 && document.getElementById(`elective-${electiveOneCheck[e]}-choice`).innerText === "Select a Course" && document.getElementById(`elective-${electiveOneCheck[e]}`).style.display !== 'none'){
      document.getElementById(`elective-${electiveOneCheck[e]}-choice`).innerText = classGetter[1];
      document.getElementById(`elective-${electiveOneCheck[e]}`).style.backgroundColor = "lightgreen";
      document.getElementById(`elective-${electiveOneCheck[e]}-remove`).style.visibility = "visible";
      classList.push(classGetter[1]);
      subjects.push(classGetter[3]);
      credits += classGetter[2]
      document.getElementById("class-list").innerHTML = classList;
      document.getElementById("credit-hours").innerHTML = credits;
      document.getElementById(`elective-${electiveOneCheck[e+1]}`).style.display = 'none';
      document.getElementById(`elective-${electiveOneCheck[e]}`).style.width = "49.25%";
      electiveHours += 2;
      break;
    }
  }
  
  if (classGetter[0] === 'elective' && classGetter[2] === 4 && document.getElementById('elective-three-choice').innerText === "Select a Course" && document.getElementById(`elective-three`).style.display !== 'none'){
    if (document.getElementById('elective-three-choice').innerText !== "Select a Course"){
      alert('This is a year long course and will fill all four slots on the bottom row of the grid. Please remove any classes on the bottom row.')
    } else {
    document.getElementById(`elective-three-choice`).innerText = classGetter[1];
    document.getElementById(`elective-three`).style.backgroundColor = "lightgreen";
    document.getElementById(`elective-three-remove`).style.visibility = "visible";
    classList.push(classGetter[1]);
    subjects.push(classGetter[3]);
    credits += classGetter[2]
    document.getElementById("class-list").innerHTML = classList;
    document.getElementById("credit-hours").innerHTML = credits;
    document.getElementById('elective-four').style.display = "none";
    document.getElementById('elective-five').style.display = "none";
    document.getElementById('elective-six').style.display = "none";
    document.getElementById('elective-three').style.width = "100%";
    electiveHours += 4;
  }
}
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
  if (credits === 20){
    alert('Your schedule is now complete!')
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
  if(id === 'elective-three' && document.getElementById('elective-three').style.width === "100%"){
    document.getElementById('elective-three').style.width = "24%"
    document.getElementById('elective-four').style.display = "block";
    document.getElementById('elective-five').style.display = "block";
    document.getElementById('elective-six').style.display = "block";

  }
  if(id === 'elective-one' && document.getElementById('elective-one').style.width === "49.25%"){
    document.getElementById('elective-one').style.width = "24%"
    document.getElementById('elective-two').style.display = "block";
  }
  if(id === 'elective-three' && document.getElementById('elective-three').style.width === "49.25%"){
    document.getElementById('elective-three').style.width = "24%"
    document.getElementById('elective-four').style.display = "block";
  }
  if(id === 'elective-five' && document.getElementById('elective-five').style.width === "49.25%"){
    document.getElementById('elective-five').style.width = "24%"
    document.getElementById('elective-six').style.display = "block";
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
