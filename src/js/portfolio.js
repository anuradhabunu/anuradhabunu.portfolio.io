var menuExpanded = false;

function menuClick() {
    var element = document.getElementById("nav-bar");
    var dropdownContent = document.getElementById("ddcontent");
    if (!menuExpanded) {
    	element.style.height = '187px';
    	dropdownContent.style.display = 'block';
    	menuExpanded = true;
    } else {
    	element.style.height= '60px';
    	dropdownContent.style.display = 'none';
    	menuExpanded = false;
    }
    
}