<template>
	<div>
		<q-banner 
			dense 
			inline-actions 
			class="list-header text-white text-center"
			:class="bgColor"
		>
			<span class="text-bold text-subtitle1"><slot></slot></span>
		</q-banner>
	</div>
</template>

<script>
export default {
	props: ['bgColor']
}
</script>

<style>

</style>