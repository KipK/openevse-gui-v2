<script>
	import { _ } 		  from 'svelte-i18n'
	import {status_store} from "../../../lib/stores/status.js"

</script>
<style>
	.tag {
		box-sizing: border-box;
		width: 100%;
		font-size: medium;
	}
</style>
<table class="table is-fullwidth">
	<thead>
		<tr class="has-background-info is-size-7-mobile">
			<th class="has-text-white py-1">{$_("config.safety.errors")}</th>
			<th class="has-text-white has-text-centered py-1">{$_("config.safety.count")}</th>
		</tr>
	</thead>
	<tbody>
		<tr class="is-size-7-mobile">
			<td>{$_("config.safety.gfci")}</td>
			<td class="has-text-centered"><span class="tag is-normal {$status_store.gfcicount==0?'is-primary':'is-danger'} is-primary ">{$status_store.gfcicount}</span></td>
		</tr>
		<tr class="is-size-7-mobile">
			<td>{$_("config.safety.noground")}</td>
			<td class="has-text-centered"><span class="tag is-normal {$status_store.nogndcount==0?'is-primary':'is-danger'}">{$status_store.nogndcount}</span></td>
		</tr>
		<tr class="is-size-7-mobile">
			<td>{$_("config.safety.stuck")}</td>
			<td class="has-text-centered"><span class="tag is-normal {$status_store.stuckcount==0?'is-primary':'is-danger'}">{$status_store.stuckcount}</span></td>
		</tr>
	</tbody>
</table>