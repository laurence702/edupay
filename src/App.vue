<script setup>
import { RouterView } from 'vue-router'
import { ref } from 'vue'
import { useTheme } from 'vuetify/lib/framework.mjs'

const notifications = [
  {
    title: 'Message from A',
    icon: 'mdi-email',
    color: 'blue'
  },
  {
    title: 'Message from B',
    icon: 'mdi-email',
    color: 'green'
  },
  {
    title: 'Message from C',
    icon: 'mdi-email',
    color: 'orange'
  }
]
const darkTheme = ref(true)
const theme = useTheme()

function changeTheme() {
  darkTheme.value = !darkTheme.value
  theme.global.name.value = darkTheme.value ? 'dark' : 'light'
}
</script>

<template>
  <v-app>
    <v-toolbar density="compact">
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>
        <RouterLink to="/"> SkoolPay </RouterLink>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn :icon @click="changeTheme">
        <v-icon :icon="darkTheme ? 'mdi-weather-night' : 'mdi-weather-sunny'"></v-icon>
      </v-btn>

      <v-menu transition="scale-transition">
        <template v-slot:activator="{ props }">
          <v-btn v-bind="props">
            <v-badge content="6" color="red-darken-2" size="x-small">
              <v-icon icon="mdi-bell" color="blue-darken-4"></v-icon>
            </v-badge>
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="(item, index) in notifications" :key="index" :value="index">
            <v-list-item-title>
              <v-icon :icon="item.icon" :color="item.color"></v-icon>
              {{ item.title }}</v-list-item-title
            >
          </v-list-item>
        </v-list>
      </v-menu>

      <v-btn id="loginBtn" to="/login" variant="outlined" text="Login"></v-btn>
    </v-toolbar>
    <v-main>
      <v-fade-transition>
        <RouterView />
      </v-fade-transition>
    </v-main>
  </v-app>
</template>

<style></style>
