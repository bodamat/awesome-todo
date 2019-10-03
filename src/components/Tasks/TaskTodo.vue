<template>
	<transition
		appear
		enter-active-class="animated zoomIn"
		leave-active-class="animated zoomOut absolute-top"
	>
		<div>
			<list-header 
				bgColor = 'bg-orange-4'
			>Todo</list-header>

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
	props: ['tasksTodo', 'bannerColor'],
	components: {
		'task' : require('components/Tasks/Task.vue').default,
		'list-header' : require('components/Shared/ListHeader.vue').default,
	}
}
</script>

<style>
	
</style>