<script>
	import { _ } 			  from 'svelte-i18n'
	import { uistates_store } from "./../../lib/stores/uistates.js";
	import StatusIcon 		  from "./StatusIcon.svelte"
	import Logo 			  from "./../../assets/logo-mini.png"
	import { link } 		  from "svelte-spa-router"
	export let state
	export let time
	export let vehicle
	export let bp
	let status = "disabled"
	let message = ""
	let charging = false
	let color = "is-danger"
	let iconcolor = "has-text-danger"
	let icon

	$: switch (state) {
		case 0: // Unknown
			break
		case 1: // Not connected
			status = "active"
			charging = false
			message = $_("status-items-waiting")
			color = "is-primary"
			iconcolor = "has-text-white"
			icon = "fa6-solid:hourglass-half"
			break
		case 2: // Connected
			status = "active"
			charging = false
			message = $_("status-items-ready")
			color = "is-primary"
			iconcolor = "has-text-white"
			icon = "fa6-solid:thumbs-up"
			break;
		case 3: // Charging
			status = "active"
			charging = true
			message = $_("status-items-charging")
			color = "is-primary"
			iconcolor = "has-text-warning"
			icon = "fa6-solid:bolt"
			break;
		case 4: // Error
		case 5:
		case 6:
		case 7:
		case 8:
		case 9:
		case 10:
		case 11:
			status = "disabled"
			charging = false
			message = $_("status-items-error") + " " + state
			color = "is-danger"
			iconcolor = "has-text-white"
			icon = "fa6-solid:triangle-exclamation"
			break;
		case 254: // sleeping
			status = "disabled"
			charging = false
			message = $_("status-items-disabled")
			color = "is-danger"
			iconcolor = "has-text-white"
			icon = "fa6-solid:ban"
			break;
		case 255: 
			status = "disabled"
			charging = false
			message = $_("status-items-disabled")
			color = "is-danger"
			iconcolor = "has-text-white"
			icon = "fa6-solid:circle-xmark"
			break;
	}


</script>
<style>
	.no-pointer {
		cursor: default
	}

</style>


<div class="is-flex is-justify-content-center">
	<div class="tag no-pointer {bp != "mobilemini"?"is-large":"is-medium"} mb-1 mx-1 has-tooltip-arrow has-tooltip-right {color}" data-tooltip={message}>
		<StatusIcon icon={icon} color={iconcolor} bp={bp}/>
	</div>
	<div class="tag no-pointer {bp != "mobilemini"?"is-large":"is-medium"} mb-1 mx-1 has-tooltip-arrow has-tooltip-right {vehicle?"is-primary":"is-danger"}" data-tooltip={vehicle?$_("status-items-connected"):$_("status-items-notconnected")}>
		<StatusIcon icon={vehicle?"mdi:car":"mdi:car-off"} color="has-text-white" bp={bp}/>
	</div>
	<div class="is-flex-grow-1 has-text-centered {$uistates_store.breakpoint == "mobile" || $uistates_store.breakpoint == "mobilemini" ?"is-hidden":""}" ><a href="/" use:link><img src={Logo} alt="logo" /></a></div>
	<div class="no-pointer {bp != "mobilemini"?"mt-1 is-medium":"mt-0 is-medium"} mb-1 ml-auto mr-2 is-capitalized  has-text-weight-semibold has-text-dark is-dark">{time}</div>
</div>