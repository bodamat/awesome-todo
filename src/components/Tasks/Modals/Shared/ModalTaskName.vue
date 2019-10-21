<template>
	<div class="row q-mb-sm">
		<q-input
			:value="name"
			ref="select"
			label="Task name"
			class="col"
			@focus="selectAll"
			@input="$emit('update:name', $event)"
			@clear="$emit('update:name', '')"
			:rules="[val => !!val || 'Field is required']"
			clear-icon="close"
			clearable
			v-autofocus="{ delayCordova: 700 }"
			outlined
		></q-input>
	</div>
</template>

<script>
import mixinSelectAll from 'src/mixins/mixin-select-all'
import { autofocus } from 'src/directives/directive-autofocus'

export default {
	mixins: [mixinSelectAll],
	props: ["name"],
	directives: {
		autofocus
	}
};
</script>

<style>
</style>