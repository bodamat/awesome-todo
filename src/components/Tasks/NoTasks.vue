<template>
	<transition
		appear
		enter-active-class="animated zoomIn"
		leave-active-class="animated zoomOut absolute-top"
	>
		<q-banner dense class="bg-grey-3">
			<template v-slot:avatar>
				<q-icon :name="icon" color="primary" />
			</template>
			<slot></slot>
			<template v-slot:action>
				<q-btn 
					@click="$emit('showAddTask')"
					flat color="primary" 
					label="Add Task"/>
			</template>
		</q-banner>
	</transition>
</template>

<script>
export default {
	props: ['icon']
}
</script>

<style>

</style>