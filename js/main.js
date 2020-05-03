var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0;  i < acc.length; i++) {
	acc[i].addEventListener("click", function() {
		/*toggling between adding and removing the active class,
		highlighting the button that controls the panel*/
		this.classList.toggle("active");

		/*toggle between hiding and showing the active panel*/
		var panel = this.nextElementSibling;
		if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
		}
		
	});
}