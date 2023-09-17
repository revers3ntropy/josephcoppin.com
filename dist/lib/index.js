window.__unocss = {
	theme: {
		colors: {
			'textColor': 'var(--text-color)',
			'textColorLight': 'var(--text-color-light)',
			'borderColor': 'var(--border-color)',
			'lightAccent': 'var(--light-accent)',
		}
	}
}

const MATERIAL_FONT = '40px "Material Symbols Outlined"';

const console_log = console.log;
console.log = (...args) => {
	console_log('[index.js]', ...args);
};

window.onload = async () => {
	if ("fonts" in document && !document.fonts.check(MATERIAL_FONT)){
		document.body.classList.add("mat-icon-font-missing");
		document.fonts.load(MATERIAL_FONT)
			.then(() => {
				document.body.classList.remove("mat-icon-font-missing")
			});
	}
};