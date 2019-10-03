<template>
	<q-input 
		outlined 
		v-model="searchField" 
		label="Search"
		class="col"
		@keyup.esc="clearSearch"
		v-select-all
	>

		<template v-slot:append>
			<q-icon 
				v-if="searchField" 
				name="close" 
				@click="clearSearch" 
				class="cursor-pointer" 
			/>
			<q-icon name="search" />
		</template>

	</q-input>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { selectAll } from 'src/directives/directive-select-all'

export default {
	computed: {
		...mapState('tasks', ['search']),
		searchField: {
			get() {
				return this.search
			},
			set(value) {
				this.setSearch(value)
			}
		}
	},
	methods: {
		...mapActions('tasks', ['setSearch']),
		clearSearch() {
			this.searchField = ''
		}
	},
	directives: {
		selectAll
	}
}
</script>

<style>

</style>