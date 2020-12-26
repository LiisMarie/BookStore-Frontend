<template>
  <b-container class="mt-3">
    <b-row class="justify-content-md-center">
      <b-col md="7" lg="6">
        <b-card header="Create an Account">
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
                >This is a required field. Username can contain only Latin
                letters and numbers.
              </b-form-invalid-feedback>
            </b-form-group>

            <!-- email -->
            <b-form-group
              id="input-group-email"
              label="Email"
              label-for="input-email"
            >
              <b-form-input
                id="input-email"
                name="input-email"
                type="email"
                v-model="$v.form.email.$model"
                :state="validateState('email')"
                aria-describedby="input-email-live-feedback"
              ></b-form-input>

              <b-form-invalid-feedback id="input-email-live-feedback"
                >Email must be valid.
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
                >Password must:
                <ul>
                  <li>contain at least 1 lowercase alphabetical character</li>
                  <li>contain at least 1 uppercase alphabetical character</li>
                  <li>contain at least 1 numeric character</li>
                  <li>be 8 characters or longer</li>
                </ul>
              </b-form-invalid-feedback>
            </b-form-group>

            <!-- repeatPassword -->
            <b-form-group
              id="input-group-repeatPassword"
              label="Repeat password"
              label-for="input-repeatPassword"
            >
              <b-form-input
                id="input-repeatPassword"
                name="input-repeatPassword"
                type="password"
                v-model="$v.form.repeatPassword.$model"
                :state="validateState('repeatPassword')"
                aria-describedby="input-repeatPassword-live-feedback"
              ></b-form-input>

              <b-form-invalid-feedback id="input-repeatPassword-live-feedback"
                >Passwords must be identical.
              </b-form-invalid-feedback>
            </b-form-group>

            <div class="centered">
              <b-button type="submit" variant="primary">Join</b-button>
              <div>
                <br />
                <div
                  v-if="message"
                  class="alert"
                  :class="successful ? 'alert-success' : 'alert-danger'"
                >
                  {{ message }}
                  <br />

                  Go to login
                  <b-link href="#" @click="setRouterTo('/account/login')"
                    >Log in</b-link
                  >
                </div>
              </div>

              <div v-if="!successful">
                <br />
                Already have an account?
                <b-link href="#" @click="setRouterTo('/account/login')"
                  >Log in</b-link
                >
              </div>
            </div>
          </b-form>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, sameAs } from "vuelidate/lib/validators";
import User from "@/models/user";

export default {
  name: "Registration",
  data() {
    return {
      form: {
        username: "",
        email: "",
        password: "",
        repeatPassword: ""
      },
      message: "",
      successful: ""
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    }
  },
  mounted() {
    if (this.loggedIn) {
      this.setRouterTo("/account/information");
    }
  },
  methods: {
    validateState(name) {
      const { $dirty, $error } = this.$v.form[name];
      return $dirty ? !$error : null;
    },
    onSubmit() {
      this.message = "";

      this.$v.form.$touch();
      if (this.$v.form.$anyError) {
        return;
      }

      this.$store
        .dispatch(
          "auth/register",
          new User(this.form.username, this.form.password, this.form.email)
        )
        .then(
          () => {
            this.successful = true;
            this.message = "An account was created";
          },
          () => {
            this.successful = false;
            this.message = "A problem occurred while creating an account";
          }
        );
    }
  },
  mixins: [validationMixin],
  validations: {
    form: {
      username: {
        required,
        isValid(username) {
          return RegExp("^[A-Za-z0-9]+$").test(username);
        }
      },
      email: {
        required,
        isValid(email) {
          return this.isEmailValid(email);
        }
      },
      password: {
        required,
        isStrongEnough(password) {
          return this.isPasswordStrongEnough(password);
        }
      },
      repeatPassword: {
        required,
        sameAsPassword: sameAs("password")
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
