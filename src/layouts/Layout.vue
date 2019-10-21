<template>
  <q-layout view="hHh lpR lFf">
    <q-header elevated>
      <q-toolbar>

        <q-toolbar-title class="absolute-center">
          Awesome Todo
        </q-toolbar-title>

        <q-btn
          v-if="!loggedIn"
          to="/auth"
          flat
          icon-right="account_circle"
          label="Login"
          class="absolute-right"
        />

        <q-btn
          v-else
          flat
          icon-right="account_circle"
          label="Logout"
          class="absolute-right"
          @click="logoutUser"
        />

      </q-toolbar>
    </q-header>

    <q-drawer
      v-if="!this.$q.screen.lt.md"
      v-model="showDrawer"
      :breakpoint="850"
      :width="250"
      bordered
      content-class="bg-primary"
    >
      <q-list dark>
        <q-item-label header>Navigation</q-item-label>

        <q-item
          v-for="nav in navs"
          :key="nav.label"
          :to="nav.to"
          class="text-test"
          exact
          clickable>
          <q-item-section avatar>
            <q-icon :name="nav.icon" />
          </q-item-section>
          <q-item-section>
            <q-item-label>{{ nav.label }}</q-item-label>
          </q-item-section>
        </q-item>

        <q-item
          v-if="$q.platform.is.electron"
          @click="quitApp"
          class="text-test absolute-bottom"
          clickable>
          <q-item-section avatar>
            <q-icon name="power_settings_new" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Quit</q-item-label>
          </q-item-section>
        </q-item>
        
      </q-list>
    </q-drawer>

    <q-footer
      v-if="$q.screen.lt.md"
    >
      <q-tabs>
        <q-route-tab
          v-for="nav in navs"
          :key="nav.label"
          :to="nav.to"
          :icon="nav.icon"
          :label="nav.label" />
      </q-tabs>
    </q-footer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
  import { mapState, mapActions } from "vuex";
  import { openURL } from 'quasar'

  export default {
    name: 'MyLayout',
    data () {
      return {
        showDrawer : true,
        navs: [
          {
            label: 'Todo',
            icon: 'list',
            to: '/'
          },
          {
            label: 'Settings',
            icon: 'settings',
            to: '/settings'
          }
        ]
      }
    },
    computed: {
      ...mapState('auth', ['loggedIn'])
    },
    methods: {
      ...mapActions('auth', ['logoutUser']),
      openURL,
      quitApp() {
        this.$q.dialog({
          title: 'Quit',
          message: 'Really quit Awesome Todo?',
          cancel: true,
          ok: {
            color: 'negative'
          },
          persistent: true
        }).onOk(() => {
          if (this.$q.platform.is.electron)
            require('electron').ipcRenderer.send('quit-app')
        })
      }
    },
    mounted() {
      this.$q.screen.setSizes({ sm: 300, md: 850, lg: 1000, xl: 2000 })
    }
  }
</script>

<style lang="scss">  
  .q-drawer {
    .q-router-link--exact-active {
      color: white !important;
    }
  }
</style>
