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
			<button on:click={toggleNavbar} class="btn btn-ghost lg:hidden">
				<Icon name="menu" class="h-5 w-5" />
			</button>
			<ul
				style="z-index: 10"
				class=" menu menu-compact dropdown-content mt-3 p-2 shadow bg-primary rounded-box w-52 {showMenu ? 'flex' : 'hidden'}"
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

<main class=" mx-2 sm:mx-4 sm:px-4 flex-col"><slot /></main>
