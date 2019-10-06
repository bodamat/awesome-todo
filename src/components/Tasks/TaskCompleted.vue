<template>
	<transition
		appear
		enter-active-class="animated zoomIn"
		leave-active-class="animated zoomOut"
	>
		<div :class="{'q-mt-lg' : !settings.showTasksInOneList}">
			<list-header
				v-if="!settings.showTasksInOneList"
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
import { mapGetters } from "vuex";

export default {
	props: ['tasksTodo'],
	computed: {
		...mapGetters('settings', ['settings'])
	},
	components: {
		'task' : require('components/Tasks/Task.vue').default,
		'list-header' : require('components/Shared/ListHeader.vue').default,
	}
}
</script>

<style>
	
</style>