
// add task to list
document.querySelector('#push').onclick = function () {
    if (document.querySelector('#newTask').value.length == 0) {
        alert('Kamu belum memasukan task !');
    } else {
        // write task from input
        document.querySelector('#task_view').innerHTML += ` 
            <div class="w-full bg-gray-100 p-3 flex flex-row justify-between rounded-md">
                <h1 id="task_name">
                    ${document.querySelector('#newTask').value}
                </h1>

                <button id="delete" class="block w-[3vh] h-[3vh]">
                    <i class="fa-solid fa-trash"></i>
                </button>
            </div>
        `;


        // delete task
        var current_task = document.querySelectorAll("#delete");
        for (var i=0; i<current_task.length; i++) {
            current_task[i].onclick = function(){
                this.parentNode.remove();
            }
            
        }

        // crossing out a finished task
        var task = document.querySelectorAll("#task_name");
        for (var i=0; i<task.length; i++){
            task[i].onclick = function(){
                this.classList.toggle('line-through');
            }
        }

        // clearing teks field after add task
        document.querySelector("#newTask").value = "";
    }
}