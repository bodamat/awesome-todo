<template>
	<q-page>
		<div class="q-pa-md absolute full-width full-height column">
			<div class="row q-mb-lg">
				<search />
				<sort />
			</div>

			<p
				v-if="
					search &&
						!Object.keys(tasksTodo).length &&
						!Object.keys(tasksCompleted).length
				"
			>
				No search results.
			</p>

			<q-scroll-area class="q-scroll-area-tasks">
				<no-tasks
					v-if="!Object.keys(tasksTodo).length && !search"
					@showAddTask="showAddTask = true"
				></no-tasks>

				<tasks-todo
					v-if="Object.keys(tasksTodo).length"
					:tasksTodo="tasksTodo"
				/>

				<tasks-completed
					v-if="Object.keys(tasksCompleted).length"
					:tasksTodo="tasksCompleted"
				/>
			</q-scroll-area>

			<div class="absolute-bottom text-center q-mb-lg no-pointer-events">
				<q-btn
					@click="showAddTask = true"
					round
					class="all-pointer-events"
					color="primary"
					size="24px"
					icon="add"
				/>
			</div>
		</div>

		<q-dialog v-model="showAddTask">
			<add-task @close="showAddTask = false" />
		</q-dialog>
	</q-page>
</template>

<script>
import { mapGetters, mapState } from "vuex";

export default {
	data() {
		return {
			showAddTask: false
		};
	},
	computed: {
		...mapGetters("tasks", ["tasksTodo", "tasksCompleted"]),
		...mapState("tasks", ["search"])
	},
	mounted() {
		this.$root.$on("showAddTask", () => {
			this.showAddTask = true;
		});
	},
	components: {
		"add-task": require("components/Tasks/Modals/AddTask.vue").default,
		"tasks-todo": require("components/Tasks/TaskTodo.vue").default,
		"tasks-completed": require("components/Tasks/TaskCompleted.vue").default,
		"no-tasks": require("components/Tasks/NoTasks.vue").default,
		search: require("components/Tasks/Tools/Search.vue").default,
		sort: require("components/Tasks/Tools/Sort.vue").default
	}
};
</script>

<style>
.q-scroll-area-tasks {
	display: flex;
	flex-grow: 1;
}
</style>
