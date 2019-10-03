<template>
	<transition
		appear
		enter-active-class="animated zoomIn"
		leave-active-class="animated zoomOut"
	>
		<div class="q-mt-lg">
			<list-header 
				bgColor = 'bg-green-4'
			>Completed</list-header>

			<q-list 
				v-if="Object.keys(tasksTodo).length"
				separator
				bordered
			>

				<task
					v-for="(task, key) in tasksTodo"
					:key="key"
					:task="task"
					:id="key"></task>

			</q-list>
		</div>
	</transition>
</template>

<script>
export default {
	props: ['tasksTodo'],
	components: {
		'task' : require('components/Tasks/Task.vue').default,
		'list-header' : require('components/Shared/ListHeader.vue').default,
	}
}
</script>

<style>
	
</style>