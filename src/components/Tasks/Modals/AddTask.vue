<template>
	<q-card>
		<modal-header>Add Task</modal-header>

		<q-form
			@submit.prevent="submitForm"
			class="q-gutter-md"
		>
	    <q-card-section>
	    	<modal-task-name :name.sync="taskToSubmit.name" />

				<modal-due-date 
					:dueDate.sync="taskToSubmit.dueDate"
					@clear="clearDueDate"
				/>

				<modal-due-time
					v-if="taskToSubmit.dueDate" 
					:dueTime.sync="taskToSubmit.dueTime"
				/>

	    </q-card-section>

	    <modal-buttons />

		</q-form>

  </q-card>
</template>

<script>
	import { mapActions } from 'vuex'
	import mixinAddEditTask from 'src/mixins/mixin-add-edit-task'
import { log } from 'util'

	export default {
		mixins: [mixinAddEditTask],
		props: ['addTaskName'],
		data() {
			return {
				taskToSubmit: {
					name: '',
					dueDate: '',
					dueTime: '',
					completed: false
				}
			}
		},
		methods: {
			...mapActions('tasks', ['addTask']),
			submitTask() {
				this.addTask(this.taskToSubmit)
				this.$emit('close')
			},
		},
		mounted() {
			this.taskToSubmit.name = this.addTaskName
		}
	}
</script>