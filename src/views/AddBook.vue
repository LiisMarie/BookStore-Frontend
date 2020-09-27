<template>
  <b-container>

    <b-card header="Add a new book">
      <b-form @submit.stop.prevent="onSubmit">
        <!-- isbn -->
        <b-form-group id="input-group-isbn" label="ISBN (International Standard Book Number)" label-for="input-isbn">
          <b-form-input
              id="input-isbn"
              name="input-isbn"
              v-model="$v.form.isbn.$model"
              :state="validateState('isbn')"
              aria-describedby="input-isbn-live-feedback"
          ></b-form-input>

          <b-form-invalid-feedback
              id="input-isbn-live-feedback"
          >This is a required field and must be exactly 13 digits.</b-form-invalid-feedback>
        </b-form-group>

        <!-- genre -->
        <b-form-group id="input-group-genre" label="Genre" label-for="input-genre">
          <b-form-select
              id="input-genre"
              name="input-genre"
              v-model="$v.form.genre.$model"
              :options="genres"
              :state="validateState('genre')"
              aria-describedby="input-genre-live-feedback"
          ></b-form-select>

          <b-form-invalid-feedback id="input-genre-live-feedback">This is a required field.</b-form-invalid-feedback>
        </b-form-group>

        <!-- heading -->
        <b-form-group id="input-group-heading" label="Heading" label-for="input-heading">
          <b-form-input
              id="input-heading"
              name="input-heading"
              v-model="$v.form.heading.$model"
              :state="validateState('heading')"
              aria-describedby="input-heading-live-feedback"
          ></b-form-input>

          <b-form-invalid-feedback
              id="input-heading-live-feedback"
          >This is a required field.</b-form-invalid-feedback>
        </b-form-group>

        <!-- description -->
        <b-form-group id="input-group-description" label="Description" label-for="input-description">
          <b-form-textarea
              id="input-description"
              name="input-description"
              v-model="$v.form.description.$model"
              :state="validateState('description')"
              aria-describedby="input-description-live-feedback"
          ></b-form-textarea>

          <b-form-invalid-feedback
              id="input-description-live-feedback"
          >This is a required field.</b-form-invalid-feedback>
        </b-form-group>

        <!-- author -->
        <b-form-group id="input-group-author" label="Author/Authors" label-for="input-author">
          <small>In case of multiple authors, separate them using comma <strong>,</strong></small>
          <b-form-input
              id="input-author"
              name="input-author"
              v-model="$v.form.author.$model"
              :state="validateState('author')"
              aria-describedby="input-author-live-feedback"
          ></b-form-input>

          <b-form-invalid-feedback
              id="input-author-live-feedback"
          >This is a required field. Use comma for separation.</b-form-invalid-feedback>
        </b-form-group>

        <!-- releaseYear -->
        <b-form-group id="input-group-releaseYear" label="Release Year" label-for="input-releaseYear">
          <b-form-input
              id="input-releaseYear"
              name="input-releaseYear"
              v-model="$v.form.releaseYear.$model"
              :state="validateState('releaseYear')"
              aria-describedby="input-releaseYear-live-feedback"
          ></b-form-input>

          <b-form-invalid-feedback
              id="input-releaseYear-live-feedback"
          >This is a required field and must be exactly 4 digits.</b-form-invalid-feedback>
        </b-form-group>

        <!-- publisher -->
        <b-form-group id="input-group-publisher" label="Publisher" label-for="input-publisher">
          <b-form-input
              id="input-publisher"
              name="input-publisher"
              v-model="$v.form.publisher.$model"
              :state="validateState('publisher')"
              aria-describedby="input-publisher-live-feedback"
          ></b-form-input>

          <b-form-invalid-feedback
              id="input-publisher-live-feedback"
          >This is a required field.</b-form-invalid-feedback>
        </b-form-group>

        <!-- cost -->
        <b-form-group id="input-group-cost" label="Cost" label-for="input-cost">
          <small>To separate decimal points, use period <strong>.</strong></small>
          <b-form-input
              id="input-cost"
              name="input-cost"
              v-model="$v.form.cost.$model"
              :state="validateState('cost')"
              aria-describedby="input-cost-live-feedback"
          ></b-form-input>

          <b-form-invalid-feedback
              id="input-cost-live-feedback"
          >This is a required field and must be only numeric. Use period for decimal points.</b-form-invalid-feedback>
        </b-form-group>

        <!-- image -->
        <!-- DOTO -->

        <b-button type="submit" variant="primary">Submit</b-button>
        <b-button class="ml-2" @click="resetForm()">Reset</b-button>
      </b-form>
    </b-card>
  </b-container>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, minLength, maxLength, numeric } from "vuelidate/lib/validators";

export default {
  name: 'AddBook',
  mixins: [validationMixin],
  data() {
    return {
      genres: [],
      form: {
        isbn: null,
        heading: null,
        releaseYear: null,
        publisher: null,
        author: null,
        genre: null,
        description: null,
        cost: null,
        image: null,
      }
    };
  },
  validations: {
    form: {
      isbn: {
        required,
        minLength: minLength(13),
        maxLength: maxLength(13),
        numeric: numeric
      },
      heading: {
        required,
        minLength: minLength(1)
      },
      releaseYear: {
        required,
        minLength: minLength(4),
        maxLength: maxLength(4),
        numeric: numeric
      },
      publisher: {
        required,
        minLength: minLength(1)
      },
      author: {
        required,
        minLength: minLength(1),
        containsOnlyLettersAndCommas(author) {
          if (author != null) {
            return !/[^a-zA-Z]/.test(author.replaceAll(",", "").replaceAll(" ", ""));
          }
          return false;
        }
      },
      genre: {
        required
      },
      description: {
        required
      },
      cost: {
        required,
        containsNumbersAndTwoDecimalPoints(cost) {
          return /^\d+(\.\d{1,2})?$/.test(cost);
        }
      }
    }
  },
  created() {
    this.genres.push({ value: null, text: "Choose..." });
    const categoriesMap = this.getCategories();
    for (var category of categoriesMap) {
      this.genres.push({ value: category.genreId, text: category.genreName });
    }
  },
  methods: {
    validateState(name) {
      const { $dirty, $error } = this.$v.form[name];
      return $dirty ? !$error : null;
    },
    resetForm() {
      this.form = {
        name: null,
        food: null
      };

      this.$nextTick(() => {
        this.$v.$reset();
      });
    },
    onSubmit() {
      this.$v.form.$touch();
      if (this.$v.form.$anyError) {
        return;
      }

      this.addBook();
    }
  }
}
</script>

<style scoped>

</style>
