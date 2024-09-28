<script setup>
import { ref } from 'vue'

const form = ref({
  email: '',
  password: '',
  remember: false
})

const isLoading = ref(false)

function Login() {
  isLoading.value = true

  setTimeout(() => {
    isLoading.value = false
    alert(JSON.stringify(form.value))
  }, 3000)
}
</script>
<template>
  <v-container fluid>
    <v-overlay :model-value="isLoading">
      <v-progress-circular v-if="isLoading" color="white" indeterminate></v-progress-circular>
    </v-overlay>
    <v-row justify="center">
      <v-col cols="4">
        <v-card class="mx-auto pa-8">
          <v-card-title class="text-center">Login Here</v-card-title>
          <v-card-item>
            <v-form @submit.prevent="Login">
              <v-text-field
                prepend-inner-icon="mdi-email"
                variant="solo"
                v-model="form.email"
                :rules="rules"
                label="email"
              ></v-text-field>
              <v-text-field
                prepend-inner-icon="mdi-key"
                variant="solo"
                v-model="form.password"
                :rules="rules"
                label="password"
                type="password"
              ></v-text-field>
              <v-checkbox
                v-model="form.remember"
                color="red"
                label="Remember me"
                hide-details
              ></v-checkbox>

              <v-btn color="red-darken-1" class="mt-2" type="submit" block>
                <v-progress-circular
                  v-if="isLoading"
                  color="white"
                  indeterminate
                ></v-progress-circular>
                <span v-else>Submit</span>
              </v-btn>
            </v-form>
          </v-card-item>

          <v-card-action>
            <div class="mx-4">
              <v-btn to="/register" block>Register </v-btn>
            </div>
          </v-card-action>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
