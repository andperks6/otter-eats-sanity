<script>
	import '../app.css';
	import Icon from '$lib/Icon.svelte';

	let showMenu = false;
	function toggleNavbar() {
		showMenu = !showMenu;
	}
</script>

<div class="navbar bg-primary text-primary-content">
	<div class="navbar-start">
		<div class="dropdown">
			<button on:click={toggleNavbar} class="btn btn-circle btn-ghost lg:hidden ">
				<Icon name="menu" class="h-5 w-5 swap-off" />
			</button>
			<ul
				style="z-index: 10"
				class=" menu menu-compact dropdown-content mt-3 p-2 shadow bg-primary rounded-box w-52 {showMenu
					? 'flex'
					: 'hidden'}"
			>
				<li><a href="/recipes">Recipes</a></li>
				<li><a href="/techniques">Techniques</a></li>
				<li><a href="/nicebuns">Nice Buns</a></li>
			</ul>
		</div>
		<a href="/" class="btn btn-ghost normal-case sm:text-xl">Otter Eats</a>
	</div>

	<div class="navbar-center hidden lg:flex">
		<ul class="menu menu-horizontal px-1">
			<li><a href="/recipes">Recipes</a></li>
			<li><a href="/techniques">Techniques</a></li>
			<li><a href="/nicebuns">Nice Buns</a></li>
		</ul>
	</div>

	<div class="navbar-end flex" />
</div>

<main class="flex justify-center">
	<div class=" mx-2 sm:mx-4 sm:px-4 flex flex-col max-w-screen-2xl w-full"><slot /></div>
</main>

<footer class="footer grid grid-flow-row grid-cols-2 p-10 bg-neutral text-neutral-content">
	<aside class="">
		<svg
			width="50"
			height="50"
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
			fill-rule="evenodd"
			clip-rule="evenodd"
			class="fill-current"
			><path
				d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"
			/></svg
		>
		<p>Nice Buns Co.<br />Providing nice buns since 2023</p>
	</aside>
	<nav>
		<header class="footer-title">Social</header>
		<div class="grid grid-flow-col gap-4">
			<a href="https://www.instagram.com/nicebuns_ut/">
				<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 448 512"
					><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
						d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
					/></svg
				></a
			>
		</div>
	</nav>
</footer>