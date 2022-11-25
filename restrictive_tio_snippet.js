const VERSION = '2.0';

if (!/tio\.run*/.exec(window.location.href)) // Impide que se ejecute en otro dominio que no sea tio.run
	return;

console.log('Activado TIO Restrictivo version ' + VERSION);

let code_area 		= document.getElementById('code'),
	helloworld_btn 	= document.getElementById('lang-example'),
	og_footer_area 	= document.getElementById('footer');

// Impide la generacion automatica de codigo
helloworld_btn.parentNode.removeChild(helloworld_btn);

// Campo que no se va a usar se deja como machete para copiar codigo basico
og_footer_area
	.previousElementSibling
	.firstChild
	.lastChild
	.innerHTML = 'Machete';

og_footer_area.value = 
`public class Main {
	public static void main(String[] args) {

	}
}`;

// El machete queda de solo lectura
og_footer_area.setAttribute('disabled', '');
og_footer_area.setAttribute('style', 'height: 103px');

code_area.value = '';
code_area.addEventListener('paste', e => e.preventDefault());
code_area.addEventListener('keydown', e => {
	if (e.ctrlKey && e.code == 'KeyX')
		code_area.value = '';
});
