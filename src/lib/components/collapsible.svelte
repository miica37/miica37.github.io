<script>
	let { title, id } = $props();

	if (id === undefined) {
		const reg = /[^A-Za-z0-9]/g;
  	id = title.trim().toLowerCase().replaceAll(reg, "-");
	}

	let open_icon = '+';

	function toggle_open_icon(event) {
		const checkbox_el = document.getElementById(id);
		const label_el = checkbox_el.nextElementSibling;
		const data_before = label_el.getAttribute('data-before');
		if ( data_before === '+' ) {
			label_el.setAttribute('data-before', '−');
		} else {
			label_el.setAttribute('data-before', '+');
		}
	}

</script>

<div class="collapsible">
	<input type="checkbox" id="{id}" onclick={toggle_open_icon} />
	<label for="{id}" data-before='+'>
		<span>{title}</span>
	</label>
	<div class="content">
		<slot/>
	</div>
</div>

<style>
	.collapsible {
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
	}

	.collapsible label {
		/* background-color: red; */
		display: flex;
		cursor: pointer;
		width: 100%;
		font-size: 1.5rem;
		font-weight: bold;
		border: 1px solid rgb(209 213 219);
		border-radius: 1rem;
		padding-block: 0.5rem;
		margin-bottom: 1rem;
		transition: all 1s;
	}

	.collapsible label:hover {
		background-image: radial-gradient(100% 100% at 100% 0, #edf8ff 0, #2268ff3b 100%);
		/* background-image: radial-gradient(100% 100% at 100% 0, #edf8ff 0, #6ebff27a 100%); */
	}

	label::before {
		content: attr(data-before);
		margin-inline: 1rem;
		font-weight: bold;
		width: 1rem;
	}

	input[type="checkbox"]:checked + label + div.content {
		max-height: fit-content;
		opacity: 1;
		padding: 1rem;
		/* overflow: hidden; */
	}

	input[type="checkbox"] {
		display: none;
	}

	div.content {
		box-sizing: border-box;
		max-height: 0;
		opacity: 0;
		overflow: hidden;
		transition: all 1s;
		box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
		padding: 0;
		border-radius: .3rem;
	}
</style>
