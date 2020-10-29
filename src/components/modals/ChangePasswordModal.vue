<template>
  <b-container>
    <b-modal
      id="changePasswordModal"
      centered
      title="Change password"
      ok-title="Submit changes"
      @show="resetModal"
      @hidden="resetModal"
      @ok="handleOk"
    >
      <form @submit.stop.prevent="onSubmit">
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
      </form>
    </b-modal>
  </b-container>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, sameAs } from "vuelidate/lib/validators";

export default {
  data() {
    return {
      form: {
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
    resetModal() {
      this.form.password = "";
      this.form.repeatPassword = "";
    },
    handleOk(bvModalEvt) {
      bvModalEvt.preventDefault();
      this.onSubmit();
    },
    onSubmit() {
      this.$v.form.$touch();
      if (this.$v.form.$anyError) {
        return;
      }
      alert("Password changed!");
      // TODO call/create change password method (PART 3)
      this.$nextTick(() => {
        this.$bvModal.hide("changePasswordModal");
      });
    }
  },
  mixins: [validationMixin],
  validations: {
    form: {
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
