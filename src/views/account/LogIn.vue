<template>
  <b-container class="mt-3">
    <b-row class="justify-content-md-center">
      <b-col md="7" lg="6">
        <b-card header="Log in">
          <b-form @submit.stop.prevent="onSubmit">
            <!-- username -->
            <b-form-group
              id="input-group-username"
              label="Username"
              label-for="input-username"
            >
              <b-form-input
                id="input-username"
                name="input-username"
                v-model="$v.form.username.$model"
                :state="validateState('username')"
                aria-describedby="input-username-live-feedback"
              ></b-form-input>

              <b-form-invalid-feedback id="input-username-live-feedback"
                >This is a required field.
              </b-form-invalid-feedback>
            </b-form-group>

            <!-- password -->
            <b-form-group
              id="input-group-password"
              label="Password"
              label-for="input-password"
            >
              <b-form-input
                id="input-password"
                name="input-password"
                type="password"
                v-model="$v.form.password.$model"
                :state="validateState('password')"
                aria-describedby="input-password-live-feedback"
              ></b-form-input>

              <b-form-invalid-feedback id="input-password-live-feedback"
                >This is a required field.
              </b-form-invalid-feedback>
            </b-form-group>

            <div class="centered">
              <b-button type="submit" variant="primary">Log in</b-button>

              <br />
              <br />

              Don't have an account?
              <b-link href="#" @click="setRouterTo('/account/register')"
                >Sign up</b-link
              >
            </div>
          </b-form>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required } from "vuelidate/lib/validators";

export default {
  name: "Registration",
  data() {
    return {
      form: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    validateState(name) {
      const { $dirty, $error } = this.$v.form[name];
      return $dirty ? !$error : null;
    },
    onSubmit() {
      this.$v.form.$touch();
      if (this.$v.form.$anyError) {
        return;
      }
      alert("Logged in to an account!");
      // TODO call/create log in method (PART 3)
    }
  },
  mixins: [validationMixin],
  validations: {
    form: {
      username: {
        required
      },
      password: {
        required
      }
    }
  }
};
</script>

<style>
.centered {
  text-align: center;
}
</style>
