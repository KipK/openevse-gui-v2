<script>
	import Loader from "./Loader.svelte";
	
	import {displayIcon, clientid2name} from "../../lib/utils.js"

	export let action = () => {};
	export let state = ""
	export let client = ""
	export let name = ""
	export let color = "is-info"
	let icon
</script>
<style>
	.item {
		position: absolute;
		overflow:visible;
		top: 45px;
	}
	.tag {
		border:0;
		min-width: 30px;
	}

	.rfidtag {
	 text-align: center;
     text-overflow: ellipsis;
     max-width: 80%;
	}

</style>
<svelte:options accessors />
<div class="tags has-addons is-flex is-justify-content-center is-align-items-center {client?"item":""}" >
	<div class="tag rfidtag is-flex is-flex-grow-1 is-flex-shrink-0 {color} has-text-weight-semibold m-0 " >
		{#if client}
		<iconify-icon class="mr-1" icon={displayIcon(clientid2name(client))}></iconify-icon>
		{clientid2name(client)}
		{:else if name}
		<span class="has-text-centered">
			{name}
		</span>
		{/if}

	</div>
	{#if state == "" && (name || (client && (clientid2name(client) == "manual" || clientid2name(client) == "mqtt") ))}
	<button class="tag is-danger is-clickable m-0 p-0" on:click|preventDefault={()=>action()} >
		<iconify-icon class="" icon={"fa6-solid:xmark"}></iconify-icon>
	</button>
	{:else if state == "loading"}
	<span class="tag is-danger m-0 p-0"><Loader size="is-size-6" /></span>
	{:else if state == "ok"}
	<span class="tag is-primary  m-0 p-0"><iconify-icon icon={"fa6-solid:check"}></iconify-icon></span>
	{:else if state == "error"}
	<span class="tag is-danger  m-0 p-0"><iconify-icon icon={"fa6-solid:xmark"}></iconify-icon></span>
	{/if}
</div>
