function save() {
    let storage = getStorage();
    let nome = document.getElementById("storageName").value;
    let mail = document.getElementById("storageMail").value;
    storage.setItem(nome, mail);
}