<script>
// @ts-nocheck
	export let name;

	export let focusable = false;
	let icons = {
		save: {
			box: 24,
			svg: `<g stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><path d="M17 21v-8H7v8"/><path d="M7 3v5h8"/></g>`
		},
		trash: {
			box: 32,
			svg: `<path d="M12 12h2v12h-2z" /><path d="M18 12h2v12h-2z" /><path d="M4 6v2h2v20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8h2V6zm4 22V8h16v20z" /><path d="M12 2h8v2h-8z" />`
		},
		close: {
			box: 24,
			svg: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>`
		},
		next: {
			box: 24,
			fill: 'current',
			svg: `<path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"></path>`
		},
		menu: {
			box: 24,
			fill: 'current',
			svg: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16"/>`
		},
		buns: {
			box: 24,
			svg: `stroke-width="1.5" stroke-linejoin="round" xmlns:v="https://vecta.io/nano"><path d="M22 9c0 3.314-4.477 6-10 6S2 12.314 2 9s4.477-6 10-6 10 2.686 10 6z"/><path d="M12 6.854c3-1.413 5 .863 5 1.927 0 3.17-10 3.006-10-.9A4.99 4.99 0 0 1 12 3m10 6v6c0 3.314-4.477 6-10 6S2 18.314 2 15V9"/>`
		}
	};
	let displayIcon = icons[name];
</script>

<svg
	{focusable}
	class={$$props.class}
	fill={displayIcon.fill ?? 'none'}
	stroke="currentColor"
	viewBox="0 0 {displayIcon.box} {displayIcon.box}">{@html displayIcon.svg}</svg
>
