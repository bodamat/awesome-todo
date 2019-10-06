<template>
	<q-form @submit.prevent = "submitForm" >

		<div class="row q-mb-md">
			<q-banner class="bg-grey-3 col">
				<template v-slot:avatar>
					<q-icon name="account_circle" color="primary" />
				</template>
				{{ tab | titleCase }} to access your Todos anywhere!
			</q-banner>
		</div>

		<div class="row q-mb-md">
			<q-input
				class="col"
				type="email"
				v-model="formData.email" 
				label="Email" 
				:rules="[val => isValidEmail(val) || 'Please enter a valid email']"
				outlined 
				lazy-rules
			/>
		</div>

		<div class="row q-mb-md">
			<q-input
				:type="isPwd ? 'password' : 'text'"
				class="col"
				outlined 
				v-model="formData.password" 
				label="Password"
				:rules="[val => val.length >= 6 || 'Please enter at least 6 characters']"
				lazy-rules
			>
				<template v-slot:append>
          <q-icon
            :name="isPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="isPwd = !isPwd"
          />
        </template>
			</q-input>
		</div>

		<div class="row q-mb-md" v-if="tab === 'register'">
			<q-input
				type="password"
				v-model="repeatPassword"
				class="col"
				outlined 
				label="Repeat password"
				:rules="[
					val => isValidRepeatPassword(val) || 'Passwords doesn\'t match'
				]"
				lazy-rules
			/>
		</div>

		<div class="row">
			<q-space />
			<q-btn
				color="primary"
				:label="tab"
				type="submit"
			/>
		</div>

	</q-form>
</template>

<script>
import { log } from 'util'
export default {
	props: ['tab'],
	data() {
		return {
			formData: {
				email : '',
				password: ''
			},
			isPwd: true,
			repeatPassword: ''
		}
	},
	methods: {
		isValidEmail(email) {
			var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    	return re.test(String(email).toLowerCase());
		},
		isValidRepeatPassword(pass) {
			if (pass === this.formData.password) {
				return true
			}
			return false
		},
		submitForm() {
			if (this.tab == 'login')
				console.log('Login the user');
			else
				console.log('register the user');
		}
	},
	filters: {
		titleCase(value) {
			return value.charAt(0).toUpperCase() + value.slice(1)
		}
	}
}
</script>

<style>

</style>