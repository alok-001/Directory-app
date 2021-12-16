let list= [];
let listItem = document.getElementById("table");

function addNew(){
    document.getElementById('directory').style.display="block";
    document.getElementById('directory-ret').style.display="none";
    renderList();
}
function retrieve(){
    document.getElementById('directory').style.display="none";
    document.getElementById('directory-ret').style.display="block";
}


function renderList(){
    listItem.innerHTML='';
    for(let i=0;i<list.length;i++){
        let tr1= document.createElement('tr');
        let task=list[i];
    tr1.innerHTML=`
    <td>${task.name}</td>
    <td>${task.dob}</td>
    <td>${task.Aid}</td>

    <td>${task.Mno}</td>
    <td>${task.age}</td>
    <td><button data-taskId="${task.Aid}" data-test="test" class="delete" onclick="delet(${task.Aid})">Delete</button></td>
    `;

    listItem.appendChild(tr1);
    }
}
function delet(id){
    let index=exist(id);
    list.pop(index);
    renderList();
}

function save(){

    let name1,dob1,idN1,Mno1,age1;
    name1 = document.getElementById('name').value;
        dob1 = document.getElementById('dob').value;
        idN1 = document.getElementById('Aid').value;
        Mno1 = document.getElementById('Mno').value;
        let num=2021-dob1.substring(0,4);
        age1 = num;

    if(name1=='' ||dob1 == '' || Mno1=='' || idN1 ==''){
        window.alert("fill the  container");
        return;
    }
    
    let item={
        name : name1,
        dob : dob1,
        Aid : idN1,
        Mno : Mno1,
        age : age1
    }
    remove();
    addlist(item);
}

function addlist (item) {
    list.push(item);
    
    renderList();
}

function add(){
    document.getElementById('form1').style.display="block";

}
function remove(){
    document.getElementById("name").value = "";
    document.getElementById("dob").value= "";
    document.getElementById("Aid").value= "";
    document.getElementById("Mno").value= "";
    document.getElementById("age").value= "";
}

function exist(id){

    for(let i=0;i<list.length;i++){
        if(list[i].Aid==id){
            console.log(i);
            return i;
        }
    }
    return 10000;
}

function find(){
    document.getElementById('notfound').style.display="none";
    let id1= document.getElementById('idN').value;
    let index= exist(id1);
    if(index>=0 && index<list.length){

        show(list[index]);
    }
    else{
        document.getElementById('notfound').style.display="block";
        console.log("1");
        return;
    }
}

function show(data){
    let ul=document.getElementById('show');
    ul.innerHTML=`
    <li>Name :${data.name} </li>
    <li>DOB :${data.dob} </li>
    <li>Aadhar :${data.Aid} </li>
    <li>Mobile No :${data.Mno} </li>
    <li>Age :${data.age} </li>
    `;
}