class Person {
    constructor(attributes) {
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
        this.gender = attributes.gender;
    }

    speak(){
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
    }
}

//Instructor Class
class Instructor extends Person {
    constructor(attributes) {
        super(attributes);
        this.specialty = attributes.specialty;
        this.favLanguage = attributes.favLanguage;
        this.catchPhrase = attributes.catchPhrase;
    }
    demo(subject) {
        console.log(`Today we are learning about ${subject}`);
    }

    grade(student, subject) {
        console.log(`${student.name} receives a perfect score on ${subject}`);
    }
    addOrSubtract(student) {
        if(Math.floor((Math.random() * 10) + 1) % 2 === 0){
            student.score += student.score + Math.floor((Math.random() * 50) + 1);;
        }else {
            student.score =  student.score - Math.floor((Math.random() * 50) + 1);;
        }
    }

}

//Student Class

class Student extends Person {
    constructor(attributes) {
        super(attributes);
        this.previousBackground = attributes.previousBackground;
        this.className - attributes.className;
        this.favSubjects = attributes.favSubjects;
        this.score = Math.floor((Math.random() * 100) + 1);
    }
    listsSubjects() {
        let subjects = this.favSubjects;
        subjects.forEach(function(element) {
            console.log(element);
          });
    }
    PRAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}`);
    }
    sprintChallenge(subject) {
        console.log(`${this.name} has begun sprint challenge on ${subject}`);
    }
    graduate(instructor){
        if(this.score >= 70){
            console.log(`Congratulations ${this.name}, You graduate from Lambda school`);
        }else {
            console.log(`Keep working hard ${this.name}`);
            instructor.addOrSubtract(this.score);
            //Recursive loop. Could be problematic
            let i = 0;
            while(i<10){
                this.graduate(instructor);
                i++;
            }
            
        }
    }
}


//Project Manager class
class ProjectManagers extends Instructor{
    constructor(attributes) {
        super(attributes);
        this.gradClassName = attributes.gradClassName;
        this.favInstructor = attributes.favInstructor;
    }

    standUp(slackChannel) {
        console.log(`${this.name} announces to ${slackChannel}, @${slackChannel} standby times`);
    }

    debugsCode (student, subject) {
       console.log(` ${this.name} debugs ${student.name}'s code on ${subject}`);
    }

}

//Persons
const legolas = new Person ({
    name: 'Legolas',
    age: 108,
    location: `Mirkwood`,
    gender: `M`
});

const gimli = new Person ({
    name: 'Gimli',
    age: 42,
    location: `Glittering Caves`,
    gender: `M`
});

const eowen = new Person ({
    name: 'Eowen',
    age: 120,
    location: `Rohan`,
    gender: `F`
});

// Instructors
const gendry = new Instructor ({
    name: 'Gendry',
    age: 32,
    location: `Ireland`,
    gender: `M`,
    specialty: 'Machine Learning',
    favLanguage: `Python`,
    catchPhrase: `Scikit-learn is great`
});

const arya = new Instructor ({
    name: 'Arya',
    age: 18,
    location: `North`,
    gender: `F`,
    specialty: 'Asassin',
    favLanguage: `Valyrian`,
    catchPhrase: `Youre on my list`
});


const brienne = new Instructor ({
    name: 'Brienne',
    age: 35,
    location: `Wherever Sansa is`,
    gender: `F`,
    specialty: 'SwordFighting',
    favLanguage: `Midlands Engish`,
    catchPhrase: `Yes, My Lady`
});

//PMs
const borja = new ProjectManagers({
    name: 'Borja',
    age: 21,
    location: `Barcelona`,
    gender: `M`,
    specialty: 'React',
    favLanguage: `JavaScript`,
    catchPhrase: `Dont Worry`,
    gradClassName: `WEBEU2`,
    favInstructor: `Gabe`
});

const giacomo = new ProjectManagers({
    name: 'Giacomo',
    age: 26,
    location: `Milan, Italy`,
    gender: `M`,
    specialty: 'Ruby on Rails',
    favLanguage: `Ruby`,
    catchPhrase: `Lets fix it`,
    gradClassName: `WEBEU2`,
    favInstructor: `Anthony`
});

//Students
const jack = new Student({
    name: 'Jack',
    age: 21,
    location: `Atlantic Ocean`,
    gender: `M`,
    previousBackground: `Labourer in England`,
    className: `WEBEU2`,
    favSubjects: [`JavaScript`, `Python`, `C`, `Java` ]
});


const jill = new Student({
    name: 'Jill',
    age: 84,
    location: `Cambridge, England`,
    gender: `F`,
    previousBackground: `Stylist`,
    className: `Design`,
    favSubjects: [`Gardening`, `Design Drawing`, `Stitchng`, `Knitting`]
});


const blake = new Student({
    name: 'Blake',
    age: 24,
    location: `Antwerp`,
    gender: `M`,
    previousBackground: `Content Developer`,
    className: `WEBEU2`,
    favSubjects: [`Ruby on Rails`, `CSS`, `HTML`, `C++`]
});
//Person tests
console.log(eowen.speak());

//PM tests
console.log(borja.catchPhrase);
console.log(borja.age);
console.log(borja.location);
console.log(borja.debugsCode(jack, `JavaScript`));
console.log(giacomo.standUp(`WEBEU2_HELP`));
console.log(giacomo.grade(jill, 'Styling'));

//Student tests
console.log(jack.name);
console.log(jack.age);
console.log(jack.gender);

//Stretch problem test
console.log(jack.score);
console.log(jack.graduate(arya)); // Very problematic


console.log(jack.PRAssignment(`JavaScript`));
console.log(blake.sprintChallenge(`CSS`));
console.log(blake.speak());
console.log(blake.listsSubjects());

//Instructor tests
console.log(gendry.demo(`Dothraki swordfighting`));
console.log(arya.grade(blake, `HTML`));
console.log(brienne.location);