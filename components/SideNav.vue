<template>
  <div class="flex min-h-full w-96 min-w-64 flex-col gap-2 bg-white p-4">
    <div class="grow bg-red-400"></div>
    <div class="flex h-24 items-center justify-center bg-green-500">
      <ul className="menu menu-horizontal bg-base-200 ">
        <li><a href="#">hi</a></li>
        <li>
          <a href="#">
            hi
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              class="text-red-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
