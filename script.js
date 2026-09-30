let no = 1;
let editBaris = null;

function tambahData(){

    let nama = document.getElementById("nama").value;

    let kelasRadio = document.getElementsByName("kelas");
    let kelas = "";

    for(let i=0;i<kelasRadio.length;i++){
        if(kelasRadio[i].checked){
            kelas = kelasRadio[i].value;
        }
    }

    let jurusan = document.getElementById("jurusan").value;
    let ekskul = document.getElementById("ekskul").value;

    if(nama=="" || kelas=="" || jurusan=="" || ekskul==""){
        alert("Lengkapi data terlebih dahulu!");
        return;
    }

    if(editBaris==null){

        let tbody = document.getElementById("tbody");

        let row = tbody.insertRow();

        row.insertCell(0).innerHTML=no++;
        row.insertCell(1).innerHTML=nama;
        row.insertCell(2).innerHTML=kelas;
        row.insertCell(3).innerHTML=jurusan;
        row.insertCell(4).innerHTML=ekskul;

        let aksi=row.insertCell(5);

        aksi.innerHTML=`
        <button class="edit" onclick="editData(this)">Edit</button>
        <button class="delete" onclick="hapusData(this)">Delete</button>
        `;

    }else{

        editBaris.cells[1].innerHTML=nama;
        editBaris.cells[2].innerHTML=kelas;
        editBaris.cells[3].innerHTML=jurusan;
        editBaris.cells[4].innerHTML=ekskul;

        editBaris=null;
    }

    document.getElementById("nama").value="";
    document.getElementById("jurusan").selectedIndex=0;
    document.getElementById("ekskul").selectedIndex=0;

    kelasRadio.forEach(function(item){
        item.checked=false;
    });

}

function hapusData(button){

    if(confirm("Yakin ingin menghapus data?")){
        button.parentElement.parentElement.remove();
    }

}

function editData(button){

    editBaris=button.parentElement.parentElement;

    document.getElementById("nama").value=editBaris.cells[1].innerHTML;
    document.getElementById("jurusan").value=editBaris.cells[3].innerHTML;
    document.getElementById("ekskul").value=editBaris.cells[4].innerHTML;

    let kelas=editBaris.cells[2].innerHTML;

    let radio=document.getElementsByName("kelas");

    radio.forEach(function(item){

        item.checked=(item.value==kelas);

    });

}