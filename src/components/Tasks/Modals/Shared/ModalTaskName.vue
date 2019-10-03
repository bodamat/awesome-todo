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
			autofocus
			outlined
		></q-input>
	</div>
</template>

<script>
import { selectAll } from "src/directives/directive-select-all";

// import mixinSelectAll from 'src/mixins/mixin-select-all'

export default {
	// mixins: [mixinSelectAll],
	props: ["name"],
	methods: {
		selectAll() {
			this.$refs.select.select();
		}
	},
	directives: {
		selectAll
	}
	// mounted() {
	// 	this.$refs.select.focus();
	// }
};
</script>

<style>
</style>