<script>
	
	import {round} from "../../lib/utils.js"
	export let name = ""
	export let state = false
	export let tooltip = ""
	export let color = "is-info"
	export let icon = null
	export let size = 5
	export let color2 = "is-info"
	export let icon2 = null
	export let size2 = 5
	export let action = () => {}
	export let button
	export let breakpoint = "mobile"
	export let visible = true
	export let disabled = false
	let hovered = false
</script>
<style>
	.icon {
		min-width: 80px;
	}
</style>

{#if visible}
<div class="mx-1 mb-0 has-text-centered has-text-info" >
	<button bind:this={button} class="button {state?"":"is-outlined"}  has-tooltip-arrow has-tooltip px-2 {state?color:color2} {breakpoint=="mobilemini"?"is-normal":breakpoint=="dekstop"?"is-medium":""}"
	data-tooltip={tooltip} on:click={action} on:mouseenter={()=>hovered = true} on:focus={()=>hovered = true} on:mouseleave={()=>hovered = false} on:blur={()=>hovered = false} {disabled}
	>
		<div class="icon">
			{#if !icon2}
				{#if hovered}
				<iconify-icon icon={icon}  style={"font-size: " + round(size*1.2) + "px;"}></iconify-icon>
				{:else}
				<iconify-icon icon={icon}  style={"font-size: " + size + "px;"}></iconify-icon>
				{/if}
			{:else}
				{#if hovered}
				<iconify-icon icon={state?icon:icon2}  style={state?"font-size: " + round(size*1.2) + "px;":"font-size: " + round(size2*1.2) + "px;" }></iconify-icon>
				{:else}
				<iconify-icon icon={state?icon:icon2}  style={state?"font-size: " + size + "px;":"font-size: " + size2 + "px;" }></iconify-icon>
				{/if}
			{/if}
		</div>
	</button>
	{#if name}
	<div class="has-text-centered has-text-weight-bold is-size-7 is-uppercase">{name}</div>
	{/if}
</div>
{/if}