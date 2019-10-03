<template>
	<div class="row q-mb-sm">
		<q-input
			outlined
			label="Due date"
			:value="dueDate"
			@input="$emit('update:dueDate', $event)"
			class="col">
			<template v-slot:append>
				<q-icon
					v-if="dueDate"
					@click="$emit('clear')"
					name="close"
					class="cursor-pointer" />
				<q-icon name="event" class="cursor-pointer">
					<q-popup-proxy>
						<q-date 
							:value="dueDate" 
							@input="$emit('update:dueDate', $event)" />
					</q-popup-proxy>
				</q-icon>
			</template>
		</q-input>
	</div>
</template>

<script>
export default {
	props: ['dueDate']
}
</script>

<style>

</style>