function newImage(src, left, bottom){
    let name = document.createElement('img');
    name.src = src;
    name.style.position = 'fixed';
    name.style.left = left;
    name.style.bottom = bottom;
    document.body.append(name);
    return name;
}

function newItem(src, left, bottom){
    let item = newImage(src, left, bottom);

    item.addEventListener('dblclick',function(){
        item.remove()
    })
}
newImage('assets/green-character.gif','100px','100px');
newImage('assets/pine-tree.png', '450px', '200px');
newImage('assets/tree.png','200px','300px');
newImage('assets/pillar.png', '350px', '100px');
newImage('assets/crate.png','150px','200px');
newImage('assets/well.png','500px','425px');


newItem('assets/sword.png', '500px', '405px');
newItem('assets/sheild.png', '165px', '185px');
newItem('assets/staff.png', '600px', '100px');

document.body.style.backgroundImage = "url('assets/grass.png')"


