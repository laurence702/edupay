<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()

const rules = {
  required: (value) => !!value || 'Required.',
  email: (value) => {
    const pattern =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return pattern.test(value) || 'Invalid e-mail.'
  }
}

const form = ref({
  email: '',
  password: '',
  remember: false
})

const isLoading = ref(false)

function Login() {
  if (form.value.email === '') {
    return
  }
  isLoading.value = true
  setTimeout(() => {
    isLoading.value = false
    /* sudo backend checks below */
    if (form.value.email === 'foo@bar.com' && form.value.password === 'test') {
      router.push('/dashboard') // Redirect to dashboard on successful login
    } else {
      alert('Wrong Credentials')
      return
    }
    /* sudo backend checks end 
        replace with Pinia store
    */
  }, 2500)
}
</script>
<template>
  <v-container fluid>
    <v-overlay :model-value="isLoading" class="align-center justify-center">
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
                v-model="form.email"
                :rules="[rules.required, rules.email]"
                label="email"
              ></v-text-field>
              <v-text-field
                prepend-inner-icon="mdi-key"
                v-model="form.password"
                :rules="[rules.required]"
                label="password"
                type="password"
              ></v-text-field>
              <v-checkbox
                v-model="form.remember"
                color="red"
                label="Remember me"
                hide-details
              ></v-checkbox>

              <v-btn variant="elevated" color="red-darken-1" class="mt-2" type="submit" block>
                <span>Submit</span>
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
