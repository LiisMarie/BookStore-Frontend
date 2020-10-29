<template>
  <b-container class="mt-3">
    <b-row class="justify-content-md-center">
      <b-col md="7" lg="6">
        <b-card header="My account information">
          <b-form @submit.stop.prevent="onSubmit">
            <!-- email -->
            <b-form-group
              id="input-group-email"
              label="Email"
              label-for="input-email"
            >
              <b-form-input
                id="input-email"
                name="input-email"
                disabled
                v-model="$v.form.email.$model"
              ></b-form-input>
            </b-form-group>

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

            <b-button type="submit" variant="primary">Save changes</b-button>
          </b-form>
        </b-card>

        <b-button
          class="action-btn"
          @click="editPassword()"
          variant="secondary"
          size="sm"
          >Change password</b-button
        >
        <b-button
          class="action-btn"
          @click="deleteAccount()"
          variant="danger"
          size="sm"
          >Delete account</b-button
        >
      </b-col>
    </b-row>

    <delete-account-modal />
    <change-password-modal />
  </b-container>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required } from "vuelidate/lib/validators";
import DeleteAccountModal from "@/components/modals/DeleteAccountModal";
import ChangePasswordModal from "@/components/modals/ChangePasswordModal";

export default {
  name: "AccountInformation",
  components: {
    "delete-account-modal": DeleteAccountModal,
    "change-password-modal": ChangePasswordModal
  },
  data() {
    return {
      form: {
        email: "",
        name: "",
        surname: ""
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
      alert("Account data updated!");
      // TODO call/create update contact data method (PART 3)
    },
    editPassword() {
      this.$bvModal.show("changePasswordModal");
    },
    deleteAccount() {
      this.$bvModal.show("deleteAccountModal");
    }
  },
  async mounted() {
    // TODO fetch/create method for user data retrieval (PART 3)
    this.form.name = "Bob";
    this.form.surname = "Smith";
    this.form.email = "bob.smith@example.com";
  },
  mixins: [validationMixin],
  validations: {
    form: {
      email: {
        required
      },
      name: {
        required
      },
      surname: {
        required
      }
    }
  }
};
</script>

<style>
.action-btn {
  float: right;
  margin-right: 5px;
  margin-top: 20px;
}
</style>
