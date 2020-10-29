<template>
  <b-modal
    id="deleteAccountModal"
    variant="danger"
    header-bg-variant="danger"
    header-text-variant="light"
    centered
    title="Are you sure about deleting your account?"
    ok-title="Yes, I'm sure"
    @ok="deleteAccount()"
    cancel-title="No, I'm not sure"
  >
    <strong>This action can not be undone.</strong>
  </b-modal>
</template>

<script>
export default {
  methods: {
    deleteAccount() {
      console.log("Account deleted");
      // TODO delete/create account deletion method (PART 3)
    }
  }
};
</script>
