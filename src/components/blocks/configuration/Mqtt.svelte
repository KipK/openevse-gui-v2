<script>
	import { _ } 		    from 'svelte-i18n'
	import { status_store } from "./../../../lib/stores/status.js";
	import MQTThelp 		from "./../../help/MQTThelp.svelte";
	import InputForm 		from "./../../ui/InputForm.svelte";
	import Box 				from "../../ui/Box.svelte";
	import { config_store } from "./../../../lib/stores/config.js";
	import Button 			from "./../../ui/Button.svelte";
	import { serialQueue }  from "./../../../lib/queue.js";
	import Switch 			from "./../../ui/Switch.svelte";
	import AlertBox 		from "../../ui/AlertBox.svelte"

	let stg_submit_state
	let alert_body
	let alert_visible = false

	async function toggleMQTT() {	
		await serialQueue.add(() => config_store.saveParam("mqtt_enabled", $config_store.mqtt_enabled))
	}

	let stg_submit = async () => {
		if (!$config_store.mqtt_server) {
			alert_body = "MQTT Host is missing"
			alert_visible=true
			return
		}
		else if (!$config_store.mqtt_port) {
			alert_body = "MQTT Port is missing"
			alert_visible=true
			return
		}
		else if (!$config_store.mqtt_topic) {
			alert_body = "MQTT Base Topic is missing"
			alert_visible=true
			return
		}
		stg_submit_state = "loading"
	
		const data = {
			mqtt_server: $config_store.mqtt_server,
			mqtt_port: $config_store.mqtt_port,
			mqtt_reject_unauthorized: $config_store.mqtt_reject_unauthorized,
			mqtt_topic:	$config_store.mqtt_topic,
			mqtt_retained: $config_store.mqtt_retained,
			mqtt_vrms: $config_store.mqtt_vrms
		}
		if ($config_store.mqtt_user) {
			data.mqtt_user = $config_store.mqtt_user
		}

		if ( $config_store.mqtt_pass && $config_store.mqtt_pass != "_DUMMY_PASSWORD") {
			data.mqtt_pass = $config_store.mqtt_pass
		}

		if (await config_store.upload(data)) 
			{
				stg_submit_state = "ok"
				return true
			}
		else {
			stg_submit_state = "error"
			return false
		}
	
	}
</script>

<Box title={$_("config.titles.mqtt")} has_help={true} icon="simple-icons:mqtt" back={true}>
	<div slot="help"><MQTThelp /> </div>
	<div class="pb-2">
		<Switch name="mqttswitch" label={$_("config.mqtt.enable")} onChange={toggleMQTT} bind:checked={$config_store.mqtt_enabled}/>
		<div class="{$config_store.mqtt_enabled?"":"is-hidden"}">
			<span class="{$status_store.mqtt_connected?"has-text-primary":"has-text-danger"}">{$status_store.mqtt_connected?$_("config.mqtt.connected"):$_("config.mqtt.notconnected")}</span>
		</div>
		<div><InputForm title="{$_("config.mqtt.host")}*" is_inline={true} bind:value={$config_store.mqtt_server} placeholder="server IP / Hostname" /></div>
		<div><InputForm title="{$_("config.mqtt.port")}*" is_inline={true} bind:value={$config_store.mqtt_port} placeholder="1883" type="number" /></div>
		<Switch name="mqttselfcert" label={$_("config.mqtt.rejectselfsigned")} bind:checked={$config_store.mqtt_reject_unauthorized}/>
		<div><InputForm title={$_("config.mqtt.username")} is_inline={true} bind:value={$config_store.mqtt_user} placeholder="Username" /></div>
		<div>
			<form>
				<InputForm title={$_("config.mqtt.password")} is_inline={true} bind:value={$config_store.mqtt_pass} placeholder="Password" type="password" />
			</form>
		</div>
		<div><InputForm title={$_("config.mqtt.basetopic")} is_inline={true} bind:value={$config_store.mqtt_topic} placeholder="openevse" /></div>
		<Switch name="mqttretain" label={$_("config.mqtt.retain")} bind:checked={$config_store.mqtt_retained}/>
		<div><InputForm title={$_("config.mqtt.topic-voltage")} is_inline={true} bind:value={$config_store.mqtt_vrms} placeholder="topic/voltage" /></div>
		<div class="is-size-7">{$_("config.mqtt.topic-voltage-desc")}</div>
		<div class="block mt-2 ">
			<Button name={$_("save")} color="is-info" state={stg_submit_state} butn_submit={stg_submit} />
		</div>
		<AlertBox body={alert_body} bind:visible={alert_visible} />
	</div>
	
</Box>