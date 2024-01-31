<template>
  <Combobox v-model="selectedPerson">
    <ComboboxInput @change="query = $event.target.value" />
    <ComboboxOptions>
      <ComboboxOption
        v-for="person in filteredPeople"
        :key="person.id"
        :value="person"
      >
        {{ person }}
      </ComboboxOption>
    </ComboboxOptions>
  </Combobox>
</template>

<script setup>
import { ref, computed } from "vue";
import {
  Combobox,
  ComboboxInput,
  ComboboxOptions,
  ComboboxOption,
} from "@headlessui/vue";

const people = [
  "Durward Reynolds",
  "Kenton Towne",
  "Therese Wunsch",
  "Benedict Kessler",
  "Katelyn Rohan",
  "Sabbir Ahmed",
  "Sabbir Shourov",
];
const selectedPerson = ref(people[0]);
const query = ref("");

const filteredPeople = computed(() =>
  query.value === ""
    ? people
    : people.filter((person) => {
        return person.toLowerCase().includes(query.value.toLowerCase());
      })
);
</script>
