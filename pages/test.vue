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
    quis modi quam consequuntur? Asperiores nihil eaque, accusamus corrupti
    eveniet temporibus harum labore, perferendis cum expedita esse quia delectus
    earum vel obcaecati magni rem eligendi incidunt necessitatibus totam dolore
    ipsam ducimus voluptatem sed! Quos laudantium consequuntur natus accusamus
    sit, vitae, saepe molestias pariatur minima harum perferendis at! Laboriosam
    aliquid maiores ad alias, dolorum, unde repudiandae provident voluptates
    reprehenderit iusto quod? Ea saepe aliquid ipsa eum labore, aperiam velit,
    id distinctio voluptatum blanditiis dolorem ipsam excepturi aut autem eos
    quaerat dolorum eaque mollitia nobis nemo enim tenetur aspernatur quo!
    Eligendi maiores alias, sed asperiores quos quas molestias provident
    delectus quibusdam quod voluptas suscipit odio vero! Voluptatum
    reprehenderit facere voluptatem odit, minima accusantium molestiae nostrum,
    quibusdam ipsam doloribus architecto iusto numquam provident porro
    doloremque eius quis odio quaerat autem non quod reiciendis soluta alias
    maxime? Itaque dolor ipsam tempora blanditiis dolorem, atque amet aperiam
    impedit provident facilis minima? Optio dolore sint, totam distinctio autem
    assumenda qui eaque sunt exercitationem. In, aperiam architecto, libero
    provident inventore tempore velit temporibus ullam sapiente corrupti
    laboriosam iusto esse dolorum. Eligendi ea vero qui, placeat non officia
    iusto voluptas molestiae, natus fugiat quam reprehenderit doloribus minus
    nihil quisquam? Ipsa expedita id debitis tempore necessitatibus iure magni
    non, quos quod natus cumque, earum a, veritatis enim. Distinctio aperiam
    totam odio asperiores culpa harum alias beatae. Alias amet doloremque
    tenetur officia ea ipsam architecto consequuntur placeat, maxime debitis
    reiciendis corrupti error laboriosam accusamus quibusdam sequi neque esse
    perspiciatis quod tempora quae quidem. Exercitationem odit saepe temporibus
    odio inventore ipsa tenetur repudiandae, illo eius qui rerum minima maxime
    quod, consequuntur porro. Eligendi dolorem explicabo, culpa illo quaerat
    quibusdam, laudantium accusamus eveniet inventore voluptatum perferendis
    tempore velit totam eius voluptatem commodi eum rerum earum? At nam eaque
    obcaecati aperiam sunt fugiat eligendi autem ea. Corporis qui nulla repellat
    inventore? Molestias omnis inventore ullam, dolorum minus officia saepe
    quisquam nemo at consequatur, sapiente recusandae modi totam. Maiores qui
    eum voluptas voluptate harum porro tenetur perferendis delectus consequuntur
    sunt nisi, quas praesentium distinctio est, facere corrupti dolorum cum
    autem aliquid aut possimus nobis? Cumque, aliquam. Magnam illo inventore
    enim fuga? Laborum saepe doloremque quam quo aperiam ipsa id quisquam, et
    consectetur vel deleniti sequi veniam debitis iure aut adipisci iste. Vel
    ratione iusto voluptatum molestias a saepe id et velit ullam consequuntur
    totam libero repellendus, magni recusandae tempora doloribus corrupti
    voluptas aut cupiditate ducimus ut. Quasi quas possimus optio dolorem cum
    consequatur eius vel sapiente quam facere dicta voluptate distinctio
    perspiciatis ipsum quae ut atque et, voluptatibus voluptatem illum expedita
    labore eum similique. Ut architecto molestias voluptatum repellat cupiditate
    sit, omnis magnam. Veritatis molestiae id, ad quidem soluta quo tempora modi
    natus laborum itaque. Molestias sed, veritatis illum maxime modi dolorem
    consequuntur velit, deleniti quis laborum sunt, vero consequatur adipisci
    tempore sequi in architecto expedita nulla soluta dicta hic! Suscipit,
    obcaecati.
  </p>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: "layout-new",
});
</script>

<style></style>
