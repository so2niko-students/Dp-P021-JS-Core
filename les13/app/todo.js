const instr = {
    el : '#todoApp',
    data : {
        newTask : '',
        tasks : [
            {
                text : 'buy a mac',
                isDone : false
            },
            {
                text : 'pick up the kids',
                isDone : true
            },
            {
                text : 'buy an ipad',
                isDone : false
            },
            {
                text : 'save psd',
                isDone : false
            },
            {
                text : 'email david',
                isDone : true
            },
        ]
    },
    methods : {
        addTask : function(){
            this.tasks.unshift({
                text : this.newTask,
                isDone : false
            });
            this.newTask = '';
        },
        handleClickDone : function(){
            this.tasks.sort((a, b)=>{
                return a.isDone? 1: -1;
            });
        }
    }
};

const vue = new Vue(instr);