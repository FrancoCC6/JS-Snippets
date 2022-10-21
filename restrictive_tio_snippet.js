(function() {
	if (!/tio\.run*/.exec(window.location.href))
		return;

	let code_area = document.getElementById('code'),
		helloworld_btn = document.getElementById('lang-example'),
		og_input_area = document.getElementById('input');

		helloworld_btn.parentNode.removeChild(helloworld_btn);

		og_input_area
			.previousElementSibling
			.firstChild
			.lastChild
			.innerHTML = 'Machete';

		og_input_area.value = 
`public class Main {
	public static void main(String[] args) {

	}
}`
		;

		og_input_area.setAttribute('disabled', '');
		og_input_area.setAttribute('style', 'height: 103px');

		code_area.value = '';
		code_area.addEventListener('paste', e => e.preventDefault());
		code_area.addEventListener('keydown', e => {
			if (e.ctrlKey && e.code == 'KeyX')
				code_area.value = '';
		});
})();
