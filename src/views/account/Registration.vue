<template>
  <b-container class="mt-3">
    <b-row class="justify-content-md-center">
      <b-col md="7" lg="6">
        <b-card header="Register">
          <b-form @submit.stop.prevent="onSubmit">
            <!-- name -->
            <b-form-group
              id="input-group-name"
              label="Name"
              label-for="input-name"
            >
              <b-form-input
                id="input-name"
                name="input-name"
                v-model="$v.form.name.$model"
                :state="validateState('name')"
                aria-describedby="input-name-live-feedback"
              ></b-form-input>

              <b-form-invalid-feedback id="input-name-live-feedback"
                >This is a required field.
              </b-form-invalid-feedback>
            </b-form-group>

            <!-- surname -->
            <b-form-group
              id="input-group-surname"
              label="Surname"
              label-for="input-surname"
            >
              <b-form-input
                id="input-surname"
                name="input-surname"
                v-model="$v.form.surname.$model"
                :state="validateState('surname')"
                aria-describedby="input-surname-live-feedback"
              ></b-form-input>

              <b-form-invalid-feedback id="input-surname-live-feedback"
                >This is a required field.
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
                  <li>be eight characters or longer</li>
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

            <b-button type="submit" variant="primary">Register</b-button>

            <br />
            <br />
            Have an account?
            <b-link href="#" @click="setRouterTo('/log-in')">Log in</b-link>
          </b-form>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, sameAs } from "vuelidate/lib/validators";

export default {
  name: "Registration",
  data() {
    return {
      form: {
        name: "",
        surname: "",
        email: "",
        password: "",
        repeatPassword: ""
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
      alert("Account created!");
      // TODO call/create register method (PART 3)
    }
  },
  mixins: [validationMixin],
  validations: {
    form: {
      name: {
        required
      },
      surname: {
        required
      },
      email: {
        required,
        isValid(email) {
          // TODO email validation
          console.log(email);
          return true;
        }
      },
      password: {
        required,
        isStrongEnough(password) {
          // TODO strength check
          console.log(password);
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
