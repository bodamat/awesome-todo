<template>
	<q-select 
		v-model="sortBy" 
		:options="options" 
		class="col q-ml-sm"
		label="Sort by" 
		filled
		emit-value
		map-options
	/>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { get } from 'http'

export default {
	data () {
    return {
      options: [
        {
					label: 'Name',
					value: 'name'
				},
				{
					label: 'Date',
					value: 'dueDate'
				}
      ]
    }
	},
	computed: {
		...mapState('tasks', ['sort']),
		sortBy: {
			get() {
				return this.sort
			},
			set(value) {
				this.setSort(value)
			}
		}
	},
	methods: {
		...mapActions('tasks', ['setSort'])
	}
}
</script>

<style scoped>
	.q-select {
		flex: 0 0 120px
	}
</style>