const instructions = {
    el : '#vueApp',
    data : {
        group : 'Dp-P021 JS Core',
        description : 'Softserve IT Academy course',
        isOpen : true,
        students : [
            'Alex', 
            'Dmitriy',
            'Domior',
            'GMaxym',
            'ilona',
            'Max',
            'Vadym'
        ],
        newStudent : ''
    },
    methods : {
        showStatus : function(){
            this.isOpen = !this.isOpen;
        },
        addStudent : function(){
            this.students.push(this.newStudent);
            this.students.sort();
            this.newStudent = '';
        }
    },
    // Вычисляемые свойства
    computed : {
        studentCount : function(){
            return this.students.length;
        }
    }
};

const vueApp = new Vue(instructions);