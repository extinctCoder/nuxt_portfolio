<template>
  <div class="flex">test page</div>
  <h1 class="w-full"></h1>
  <h1>Color mode: {{ $colorMode.value }}</h1>
  <select v-model="$colorMode.preference">
    <option value="system">System</option>
    <option value="light">Light</option>
    <option value="dracula">dracula</option>
    <option value="cupcake">cupcake</option>
  </select>

  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <div class="stats shadow">
    <div class="stat">
      <div class="stat-title">Total Page Views</div>
      <div class="stat-value">89,400</div>
      <div class="stat-desc">21% more than last month</div>
    </div>
  </div>
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />

  <div class="flex flex-row justify-around gap-2 bg-red-400">
    <div>hi lorem</div>
    <div>hi</div>
  </div>

  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />

  <br />
  <br />
  <button class="btn" onclick="my_modal_1.showModal()">open modal</button>
  <dialog id="my_modal_1" class="modal">
    <div class="modal-box">
      <h3 class="text-lg font-bold">Hello!</h3>
      <p class="py-4">Press ESC key or click the button below to close</p>
      <div class="modal-action">
        <form method="dialog">
          <!-- if there is a button in form, it will close the modal -->
          <button class="btn">Close</button>
        </form>
      </div>
    </div>
  </dialog>
  <br />
  <br />

  <details class="dropdown">
    <summary class="btn m-1">open or close</summary>
    <ul
      class="menu dropdown-content z-[1] w-52 rounded-box bg-base-100 p-2 shadow"
    >
      <li><a>Item 1</a></li>
      <li><a>Item 2</a></li>
    </ul>
  </details>
  <br />
  <br />
  <br />
  <br />

  <button class="btn">Button</button>
  <button class="btn btn-neutral">Neutral</button>
  <button class="btn btn-primary">Primary</button>
  <button class="btn btn-secondary">Secondary</button>
  <button class="btn btn-accent">Accent</button>
  <button class="btn btn-ghost">Ghost</button>
  <button class="btn btn-link">Link</button>
  <br />
  <br />
  <br />
  <br />

  <div class="card w-96 bg-base-100 shadow-xl">
    <figure>
      <img
        src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
        alt="Shoes"
      />
    </figure>
    <div class="card-body">
      <h2 class="card-title">Shoes!</h2>
      <p>If a dog chews shoes whose shoes does he choose?</p>
      <div class="card-actions justify-end">
        <button class="btn btn-primary">Buy Now</button>
      </div>
    </div>
  </div>
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam fugiat
    mollitia ducimus perspiciatis vero autem sed, possimus eveniet est fuga
    rerum cumque quos explicabo ut libero vel vitae at porro corrupti placeat
    doloremque facilis eos recusandae aliquid error quidem fugit nihil commodi.
    Soluta dicta, obcaecati laudantium itaque aspernatur fugit corrupti eum
    labore numquam est nostrum in minima saepe explicabo, omnis, ad cupiditate
    ipsam. Rem, totam.
  </p>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: "default",
});
</script>

<style></style>
