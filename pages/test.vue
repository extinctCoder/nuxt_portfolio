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
    obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
    voluptatum illum fuga error ducimus tenetur consectetur eligendi! Magnam
    cupiditate in alias, id dolor veniam iusto nesciunt! Distinctio voluptates
    totam deserunt quis in modi esse odit ut, nesciunt doloribus earum, fugiat
    molestiae consectetur placeat velit, itaque iste quos. Dolorum cumque
    doloribus incidunt maiores dolorem voluptates culpa. Necessitatibus fuga nam
    libero illo! Libero, et exercitationem. Animi dicta hic optio ipsam itaque
    libero vel ducimus explicabo quam corrupti iure molestiae debitis ex
    perferendis placeat, sed similique accusantium expedita. Temporibus, magni
    alias? Necessitatibus, omnis nesciunt ipsum debitis libero, nobis error illo
    explicabo est, aperiam officiis voluptatem asperiores. Exercitationem iusto
    ducimus vero aspernatur explicabo perspiciatis blanditiis, ullam error. Hic
    repudiandae nemo at, quam incidunt ipsum. Corrupti sequi neque officiis
    dolor eum magni suscipit. Quos magni in quod saepe deserunt expedita quasi
    vero laboriosam eum, inventore dignissimos dolores dolorem cumque tenetur
    quaerat ea minus aspernatur reiciendis perferendis harum? Alias pariatur
    deserunt unde! Cum sed ut, reiciendis delectus amet vero tempore numquam
    quos! Consequatur consectetur commodi consequuntur reiciendis ipsa nesciunt
    delectus neque quam doloribus ratione alias corrupti at laborum soluta,
    suscipit eaque, odit, quisquam nemo adipisci? Neque dignissimos magni ipsa
    tempore cumque exercitationem, delectus iure, ducimus saepe explicabo enim
    laudantium sapiente? Praesentium voluptatum consequuntur laborum vel. Itaque
    est sunt labore cumque possimus asperiores ipsam alias debitis. Illum cumque
    at, neque architecto quos similique perspiciatis possimus aliquam illo
    adipisci quam odio fuga voluptates enim modi culpa voluptatem officia ad
    sunt delectus. Cum, in inventore perferendis ratione alias voluptate,
    provident ullam dicta quae voluptatum ex dolorum iste sit. Fuga pariatur
    eaque quibusdam, repellat soluta ipsam? Corporis eum numquam totam suscipit
    sint doloribus velit voluptatem similique amet unde, excepturi delectus
    maxime facilis quam voluptates quasi! Ut iste nulla, laudantium sequi
    excepturi in maxime, at fugit amet facere dolores. Suscipit, ab quos dolorum
    voluptas ex tenetur aliquam. Quis, earum illum quaerat fuga assumenda
    explicabo ducimus iure quasi deleniti ullam saepe a nobis? Eum inventore
    aliquam ut explicabo. Dolorum earum, culpa dolorem ab aliquam facere, enim
    nobis recusandae, corrupti minus et laboriosam saepe cupiditate quod
    repellat possimus nisi totam quisquam beatae quo vitae quam debitis
    dignissimos esse. Distinctio neque nostrum eos, ex itaque cumque adipisci
    dolores sint, asperiores natus incidunt rerum numquam! Quibusdam nesciunt
    rem earum laboriosam quod dolorum porro. Minus deleniti architecto a
    assumenda modi soluta aspernatur ut quibusdam enim perferendis natus unde
    voluptates vel rerum non hic, nobis sed molestiae ratione voluptatem veniam?
    Numquam, et! Eaque necessitatibus ipsum qui voluptatem corrupti est iste
    mollitia, reprehenderit quasi. Hic alias voluptatibus delectus perspiciatis,
    tempora quae. A obcaecati eius aut aperiam, quis accusantium perspiciatis
    atque blanditiis magni sunt pariatur odit ut natus iste voluptas
    exercitationem iusto numquam assumenda maiores saepe debitis, provident quas
    quos. Quo fuga unde necessitatibus ut itaque esse dolorum placeat
    voluptatibus consectetur, libero ea possimus ipsa dicta eos numquam
    dignissimos nihil nisi beatae quisquam sed, illo similique voluptatum
    assumenda? Minus facilis deserunt sit hic odio quibusdam! Ea corporis eius
    aperiam explicabo, consequuntur eum nulla quis ab illum porro, placeat hic,
    repellendus eligendi suscipit consectetur laborum totam? Inventore ullam
    dignissimos necessitatibus doloremque, architecto fugiat ad saepe enim eum
    distinctio molestiae. Accusamus totam a nam possimus adipisci nostrum enim
    nobis modi perspiciatis voluptatum, dolore placeat obcaecati necessitatibus
    delectus fugit deleniti dolorem vero quidem facere ullam ea nesciunt
    inventore sit? Deleniti, dolores, est ab error nisi, qui fugiat facilis
    nihil mollitia atque earum? Vitae possimus porro, asperiores facere tenetur
    quam! Pariatur quaerat ipsum et minima obcaecati quod eius in sit eos, iusto
    repudiandae maxime nostrum odit nesciunt nihil accusamus labore. Hic placeat
    amet ipsam unde explicabo est aliquam dolore, deserunt accusantium eligendi
    autem sint odio at corporis veritatis id tempora dicta provident earum
    dolores inventore repellendus delectus? Necessitatibus expedita sint vero
    aspernatur qui corrupti voluptates consequuntur libero omnis deleniti,
    possimus, aut est quo sequi maiores molestias non quidem totam dignissimos
    et voluptate architecto eaque explicabo natus? Facere sunt eligendi
    recusandae, voluptates magni, dolorum vero maxime laborum mollitia, itaque
    ut! Ipsa dolorem possimus ratione maxime corrupti quod vero totam esse sunt
    ab labore iste harum, dolores debitis illo dicta doloremque eum accusamus
    officia quis velit nesciunt? Dolore asperiores libero error dolorum iste
    culpa reiciendis veritatis delectus, temporibus vitae tenetur laboriosam
    sint magnam corrupti iure! Harum ullam est eius laudantium? Ipsam voluptatum
    dolor consectetur quisquam pariatur illum ducimus totam accusantium
    exercitationem, necessitatibus accusamus quos tempore quaerat veritatis
    nostrum saepe ea, ad fuga officiis rem adipisci eveniet debitis quis?
    Tempora sapiente alias aliquam, dolores ut expedita atque aperiam obcaecati
    quis perspiciatis ipsum. Laborum accusamus fugit praesentium earum nemo
    quam! Ullam fugiat corrupti quod tenetur. Reiciendis facere soluta hic
    adipisci magni, eos ratione ex eius consequatur aperiam. Iure officia,
    facere accusamus vel nostrum pariatur quo commodi magni. Laboriosam
    dignissimos sed dolores fugiat quis minus quod ipsam voluptatem temporibus
    velit ipsa dolorem, maxime totam ratione dicta iste eos iusto est, quasi
    pariatur rerum accusamus magnam. Architecto aliquam expedita nemo quo
    voluptatibus, velit porro quas iusto suscipit ut est repudiandae vel at
    sapiente possimus, officiis illo fugit enim. Earum dolore quia, ullam
    sapiente accusamus consectetur libero rem rerum debitis! Non hic fugit amet
    quos ut, nihil rerum? Suscipit quibusdam nam soluta doloremque architecto
    consequuntur illo culpa officia vitae? Eveniet veniam aliquid quibusdam sint
    id dolorem temporibus laboriosam quam voluptates quia? Atque neque expedita
    qui aliquid nihil obcaecati repudiandae non ratione minus magni dolore
    doloribus, dolores libero earum culpa aperiam rem? Aliquam, suscipit
    perferendis nam molestiae fuga consequuntur? Alias officia, molestias ipsum
    fugiat quibusdam maiores nulla facilis temporibus inventore possimus,
    deleniti ab dolorem consectetur esse illum modi unde vel ipsa? Recusandae
    veniam aliquid sequi ipsum mollitia, ratione soluta porro temporibus officia
    culpa ea quibusdam sunt, debitis error ad, inventore consequatur. Dolore
    perspiciatis eaque, quam ullam est illum veritatis numquam nesciunt sunt
    quibusdam doloribus, natus, cupiditate officia qui. Dolorem expedita porro
    voluptatem exercitationem ea odio deleniti esse temporibus ipsa asperiores
    veniam architecto, atque quia tenetur reiciendis voluptatum eaque ipsam!
    Amet, asperiores qui, quasi iure veniam quisquam quidem nemo provident
    eligendi pariatur praesentium dolor dignissimos quibusdam delectus magni,
    quaerat inventore tempore? Dolores dignissimos, dolore quidem dolorem vitae
    quam ipsum incidunt harum. Tempora fugit aspernatur a itaque voluptatibus
    enim ex molestias at repellat soluta quisquam ab tempore debitis optio,
    assumenda illo consequatur id? Quam amet placeat itaque fugiat blanditiis
    sunt tempora, eius odio, aliquid consectetur minima ea incidunt vitae est,
    magni repellendus cumque expedita. Eligendi, quae quaerat cumque, eaque
    laboriosam magni aliquid similique fugiat obcaecati, beatae amet delectus.
    Quae, vitae? Ab, dolorum. Non, dolorum sit! Aperiam soluta blanditiis neque,
    tenetur ipsum quas eaque, commodi ut a veniam nobis vel molestias sunt omnis
    voluptatibus numquam, facilis consequatur illo labore earum. Dolor amet
    deleniti minus, culpa, nihil ad odio eos atque maxime quas reiciendis
    officia quisquam laboriosam. Eum expedita illum quibusdam? Odio, harum neque
    ipsum iure sapiente ex explicabo adipisci natus at accusamus consequatur
    alias ut! Doloremque corrupti iusto, ex atque id excepturi consequuntur
    obcaecati quibusdam aliquam. Distinctio cumque voluptate inventore
    consequuntur, in perferendis, amet atque excepturi obcaecati dolor fuga
    nihil at ducimus maiores praesentium voluptatem autem rerum aliquid incidunt
    optio nesciunt, tempore tenetur aliquam. Laudantium dicta velit, praesentium
    magni iste sint repellat tempora tempore, aliquid tenetur voluptatibus
    voluptatem doloremque? Natus deserunt quo, adipisci repudiandae tempora
    repellat temporibus dicta numquam optio, quae ratione possimus beatae quos
    voluptates. Dolorum est dicta sequi sapiente perspiciatis nam nostrum vero?
    Illo iusto dolorem esse eveniet beatae aut inventore quam exercitationem
    magni repudiandae, expedita labore officiis voluptates! Itaque harum
    laudantium laborum! Tempora odio deserunt aliquid cupiditate sequi fugit
    magni impedit fugiat quo doloremque repudiandae recusandae quam rem non
    suscipit voluptatibus adipisci, officia placeat labore delectus incidunt at
    optio iusto cumque. Ducimus quis possimus modi ratione eos temporibus nihil
    magnam, vitae quidem necessitatibus praesentium, accusantium soluta
    recusandae quam laboriosam beatae error sapiente eligendi consequuntur
    illum, incidunt molestias reprehenderit eum? Nesciunt culpa ducimus error.
    Sunt dolorum quaerat aliquid ad. Quae quam, soluta et quod accusantium,
    recusandae enim consequuntur labore atque quo blanditiis dolorem est sunt
    similique beatae nesciunt impedit! Tempora accusamus non quia dolore quam
    debitis temporibus reprehenderit dolores, ex voluptatum totam asperiores
    cupiditate distinctio. Ipsam voluptatum provident corrupti itaque id unde
    nulla eum dicta totam ab laborum repellendus, blanditiis eligendi quas
    tempora suscipit modi. Voluptatem sunt ipsam magnam dicta ducimus ea quidem
    porro quibusdam quod neque maxime aliquam rem aperiam, id et tempora natus
    possimus repellendus, dolor sed corrupti doloremque, repellat optio
    obcaecati! Odio atque ad sequi delectus excepturi laudantium, officia
    possimus, neque dolorem dolore enim distinctio fugit sed corporis ea numquam
    ipsa, inventore assumenda? Molestias, eaque, veniam fuga laboriosam sunt a
    facere itaque voluptas nostrum, dignissimos tempora odit vitae aperiam
    maiores enim pariatur sed incidunt animi laborum impedit beatae alias quos
    labore! Cum est aspernatur aliquam ratione consequuntur assumenda voluptates
    explicabo, at voluptatem blanditiis dolores quam iure suscipit atque, quis
    mollitia labore! Et reiciendis temporibus optio sed iusto nobis labore,
    adipisci molestias dicta reprehenderit amet animi earum at sint, deleniti
    eligendi ratione saepe sequi. Ducimus sunt est minus fuga maxime. Ex,
    veritatis dolorem earum, fugiat consectetur assumenda commodi nulla a
    incidunt fugit laboriosam itaque! Pariatur obcaecati iusto provident
    corporis numquam impedit, atque distinctio? Magni velit eveniet perferendis
    accusamus et ad ducimus ratione, dolores optio provident dicta natus eos
    minus ab voluptate sed totam, ipsam non architecto atque, dolore est. Et
    modi sequi cum ratione quidem delectus eum quae, possimus, incidunt
    assumenda laudantium eveniet, dignissimos odit. Nam animi maiores, et
    delectus corrupti aperiam illo recusandae voluptates fugit culpa facere
    doloremque in eius, dicta fugiat ad commodi iste excepturi! Quisquam,
    reiciendis nulla! Eos temporibus est facere expedita eligendi. Sequi
    temporibus veritatis, eveniet dicta numquam minima perferendis animi dolor
    veniam! Est libero maiores dolores earum tempore, rerum at neque quod ex
    eveniet eaque doloribus sit repellendus delectus quia quasi ipsam quam illum
    optio ea facere iure blanditiis commodi voluptates? Quisquam deserunt
    corrupti cum rem officiis necessitatibus deleniti eaque cumque, quia
    perspiciatis laudantium facere nam soluta! Voluptatem exercitationem quaerat
    voluptatibus tenetur pariatur nostrum neque, dolores inventore incidunt,
    ipsa aperiam suscipit necessitatibus ab qui dolore nobis! Repellendus nam
    vitae et mollitia amet tempora blanditiis nobis, enim beatae assumenda
    perferendis exercitationem error quasi ducimus quibusdam perspiciatis sequi
    dolorum a explicabo omnis provident. Voluptatum modi reprehenderit
    praesentium provident inventore! Aperiam ipsam pariatur deleniti eveniet
    veritatis ducimus nesciunt dolorem. Optio ducimus mollitia explicabo
    repellendus, totam natus vel aliquid ad. Odio explicabo iusto dolore odit
    consectetur placeat esse, quasi nostrum ex neque porro et, itaque minus
    recusandae quae! Nobis molestiae modi animi quas et dignissimos aliquam sint
    optio. Rerum soluta dolore magnam iusto vitae architecto temporibus cum
    fugiat, delectus obcaecati impedit animi sequi veniam, ullam repellat
    consequuntur porro odio quis. Omnis, officia dolorem dolore commodi enim
    iusto explicabo, quis hic unde repellendus maxime quia vero, non
    reprehenderit rerum qui! Quisquam ea officia consectetur animi eaque
    corporis labore, tempora adipisci sunt ex corrupti voluptatem atque
    perferendis repudiandae beatae maiores non eius nobis dolor. Veritatis, enim
    mollitia sit ex aut totam temporibus eveniet, doloribus, amet reprehenderit
    autem dolores voluptatum! Et ex recusandae, quaerat consequatur incidunt
    repudiandae eos aspernatur iure id voluptas maxime distinctio perferendis
    aliquid eius magnam dolorem quod hic, adipisci omnis. Atque magni voluptatem
    pariatur in obcaecati? Ea, quod ipsa? Voluptates quasi nesciunt iusto.
    Minima nisi, totam quae quod iure dolore mollitia sequi inventore harum
    adipisci soluta, amet quibusdam illo libero saepe corrupti nam numquam
    laborum distinctio sint. Accusantium, maiores nisi. Sunt, fugit. Sit, nisi
    consequatur! Tenetur dolor excepturi obcaecati labore quam voluptate unde
    voluptates magnam at, inventore minus, illo praesentium! Error blanditiis
    facere libero sunt ipsum tempore fuga in eligendi voluptate delectus,
    quisquam est asperiores molestias aut voluptatum perferendis nemo, fugiat
    quas dolor placeat. Beatae distinctio dolor ducimus, provident esse, iure
    magni qui, obcaecati quibusdam asperiores assumenda autem nesciunt at
    temporibus. Ipsam molestias consectetur quaerat, quas saepe dolor ipsa
    excepturi id similique impedit, commodi voluptatem nemo ratione aliquid
    molestiae natus, deserunt temporibus tempora. Itaque error quas quos quasi.
    Cum expedita iure fuga debitis laudantium ipsum accusamus eaque sed porro
    neque! Qui fugiat optio, cumque dolorum voluptatem architecto quis quisquam
    tenetur sint illo debitis consectetur, cupiditate odit sequi dolores id
    accusantium iste commodi voluptatibus exercitationem maiores fugit aut
    laudantium. Culpa excepturi dolore eius mollitia similique voluptatibus
    perferendis dolorum animi fugit quaerat delectus, assumenda praesentium,
    quibusdam quisquam iusto architecto reprehenderit veritatis reiciendis qui
    asperiores! Deserunt esse pariatur facere id necessitatibus modi, tempora
    voluptatum saepe aperiam natus odio rem blanditiis tempore eveniet assumenda
    quos magnam vero consequatur maxime enim. Tempora harum adipisci impedit et
    voluptatibus? Eveniet illo dolor veniam voluptatum voluptatem quod quas
    rerum. Porro doloremque debitis ullam cumque, provident, doloribus a minima
    rem commodi, tempora incidunt aperiam. Veniam laboriosam voluptatibus,
    tempora, earum provident ratione dolor esse autem, corrupti labore neque
    quae commodi dicta nulla nostrum vitae natus nisi quibusdam ab! Nisi labore
    repellendus repellat nostrum, inventore enim deserunt alias dolore
    voluptatum dolores animi ex repudiandae veritatis rem eius nemo a illo autem
    facere quaerat fugiat ipsam. Eos saepe sunt unde minus mollitia a libero,
    dolores optio, error voluptatibus illo, molestias reiciendis repellat non! A
    ducimus consequatur non. Vitae minus cupiditate assumenda natus. Vero
    suscipit dolores voluptatem culpa quae, assumenda ratione. Perferendis
    pariatur tempora, aliquam quia inventore ex nostrum molestias incidunt
    deserunt. Labore laboriosam, quam culpa quisquam rerum quae voluptatibus
    fugit quos veritatis earum saepe omnis sequi voluptates accusantium libero
    unde reiciendis minima? Rerum aut adipisci minus. Quae qui, commodi
    explicabo eos dolore impedit atque odio est fugit alias, hic facere
    reprehenderit dolorem sapiente quasi. Fugiat laboriosam aperiam deleniti
    expedita, atque ullam repellat doloribus vero sit soluta necessitatibus
    esse! Eius delectus distinctio voluptates cupiditate consequuntur
    praesentium amet officia. Nobis doloremque libero accusantium quisquam quae
    quis hic sed nam deserunt consequuntur neque sunt exercitationem illum
    dignissimos aliquid, suscipit totam at atque necessitatibus unde ipsa iure.
    Atque optio voluptates quos delectus, maiores voluptatem, laudantium iure
    soluta eius alias nulla ipsa dolorum consequatur iusto ad velit laboriosam
    perspiciatis eligendi, asperiores aspernatur voluptatibus quibusdam numquam
    possimus? Consequatur, ipsa. Autem eaque facere, quam nobis dolor est
    quaerat molestiae obcaecati animi laudantium velit, iste quae, eveniet hic
    beatae nesciunt? Distinctio magni deserunt placeat! Ut eligendi eius eos
    quidem harum cumque laborum eum ipsa quibusdam repudiandae fugit doloremque
    laboriosam impedit id ab iure, velit modi vitae eveniet reprehenderit
    dolorum perferendis a aliquid. Rerum ut voluptate quidem nisi dignissimos
    sint, voluptas id nesciunt totam reiciendis dolorem vero exercitationem
    consectetur odio, nemo saepe tempora earum labore eaque quisquam, esse
    temporibus? Itaque aliquam repellat maxime mollitia voluptatum veritatis
    blanditiis totam error tempora deserunt, nisi quae autem placeat doloribus!
    Ullam alias, dicta modi tempore voluptatibus rem? Ab esse a, nulla minima
    dolorum tempora eligendi accusamus, facere aspernatur in natus molestias
    pariatur modi molestiae nobis quo est at? Ut accusamus qui exercitationem
    explicabo quibusdam! Itaque, quod nam iusto similique culpa quo debitis
    corrupti voluptatum nemo ducimus, aut eos sit deleniti beatae rerum eaque
    sint nihil! Quae dolorum nemo ullam veritatis consectetur dicta provident
    libero incidunt deleniti esse aspernatur aliquid, sed enim itaque possimus
    nihil asperiores! Cupiditate quam possimus facere dolor obcaecati quaerat
    nostrum vitae, consequatur natus, blanditiis qui, repudiandae veritatis rem
    enim error eaque et id pariatur quo distinctio. Fugit consectetur sit soluta
    amet quisquam alias earum odio dicta reiciendis quos itaque sed, culpa
    similique eum illum facere explicabo cupiditate in illo ipsa! Libero, facere
    ducimus odit, officiis illum, natus minima dolores error sapiente facilis in
    quia nulla explicabo consequatur cupiditate culpa sequi eos temporibus
    soluta dolor ipsum nesciunt nihil unde ex. Quas dolore perspiciatis ducimus
    dolor quae. Iusto distinctio, libero ratione harum quasi natus dolor a
    voluptas aut vitae, laudantium ipsum, quidem molestias rerum facilis ex
    autem? Nobis quos vero dolore dicta minus cumque? Dolorum vero omnis
    molestiae nesciunt maiores atque et quaerat suscipit quisquam aperiam quos
    explicabo dicta doloribus quidem, provident repellendus voluptate illum,
    iure laboriosam minus iste. Iusto debitis pariatur dolores fugiat amet.
    Quidem saepe nam quae, quisquam molestias quam ab eligendi. Magnam rem omnis
    explicabo mollitia maiores, veritatis repellendus magni minima, quidem
    quibusdam reiciendis voluptates quam officiis placeat esse iure consequatur!
    Odit, optio nihil, nostrum harum asperiores animi dolore nesciunt libero
    facilis explicabo, nemo repellat necessitatibus sit officiis hic blanditiis!
    In suscipit maxime vitae aliquam animi officia odit molestias cumque. Iure
    quae odit magnam voluptatum sed ea nam, expedita earum hic tempore
    perferendis deleniti accusantium molestiae minima officiis recusandae minus.
    Ex magni, tempore, ea eum reiciendis ad odit culpa quisquam cumque vel
    explicabo iste perferendis illo facilis quibusdam non veritatis, doloremque
    aliquid? Ipsam, adipisci eius cupiditate sapiente a autem eligendi sequi
    odio quae et provident veniam pariatur ab non quisquam beatae aperiam porro!
    Quae veritatis, porro laboriosam optio tenetur debitis esse voluptatem
    voluptates dolore excepturi tempora quos harum accusamus, id quasi,
    consequatur perspiciatis maiores autem dolor inventore deserunt! Expedita
    nulla rerum sequi aspernatur quae, a porro officia nisi dolores
    reprehenderit at, quasi laboriosam? Facilis ab voluptates possimus
    exercitationem aperiam repudiandae ut laboriosam consequuntur, et, officia
    consectetur voluptas suscipit corrupti assumenda? Rerum corrupti, nostrum
    unde voluptatibus dolorum expedita iure nisi consequuntur? Quisquam in
    delectus, ipsum excepturi commodi nisi molestias! Totam ducimus eius
    necessitatibus, pariatur dignissimos eum soluta doloribus libero quam
    officiis veniam doloremque nam aliquam alias. Optio labore id non voluptate
    error enim repellat ratione quisquam deserunt, voluptatem, distinctio eius
    eligendi magnam consectetur accusamus sint cupiditate, exercitationem veniam
    blanditiis animi fugiat perspiciatis nisi. Doloremque quia odio delectus
    maiores, nostrum veritatis cum dolorum aliquam consequuntur accusantium
    architecto vero optio iure laboriosam nihil cumque sint error! Velit minus
    nulla enim magnam, inventore architecto pariatur omnis voluptate natus est
    sequi amet id cupiditate rerum explicabo ex esse accusamus soluta laborum.
    Culpa obcaecati in quis minus! Ex, eius voluptatibus! Veritatis aliquid
    ipsum facere dignissimos quae fugiat officiis. Quisquam vero maxime corrupti
    atque delectus suscipit culpa, temporibus consequatur soluta dolor in est
    magni nesciunt sed placeat eveniet voluptatibus nobis? Ullam iure reiciendis
    similique magni ad repellendus, accusantium sequi est iste magnam enim
    aliquid distinctio voluptas in nisi sed sit libero natus, asperiores neque!
    Illo placeat delectus, consequuntur sint culpa commodi itaque sapiente ipsum
    vel autem voluptas a ratione ab soluta rem quod quas odit modi expedita
    repudiandae explicabo laborum praesentium? Voluptate iure dignissimos sint
    optio suscipit esse ea aspernatur blanditiis? Quos, deleniti vero? Magnam
    temporibus est quae a dolores eligendi deleniti, beatae totam sequi dicta
    quos facere rem reprehenderit fugiat voluptates quibusdam error velit
    tenetur aspernatur dolorum vel qui aliquam, provident eaque! Quod aliquam,
    minus odit autem tempore voluptate sint, temporibus nostrum omnis fugit
    possimus porro beatae quos excepturi repellendus quaerat incidunt veritatis
    aliquid ex doloribus soluta enim vitae tempora. Excepturi, hic cum placeat
    vel esse repellat eum reiciendis pariatur nam illum explicabo nobis quos
    ipsam harum quas sed est consequatur architecto modi iure, iste inventore
    velit. Veniam vitae vero ut repellendus voluptate. Explicabo adipisci
    corrupti soluta in eligendi molestiae est expedita consectetur praesentium
    architecto deserunt dolorem dolorum, harum cumque necessitatibus vero
    quisquam itaque nostrum ipsam hic mollitia repudiandae! Voluptatibus
    asperiores officiis, possimus quidem eligendi eum reiciendis nam, vitae id
    iusto perferendis nihil aperiam, vero veritatis facilis eveniet dolore
    quisquam omnis corporis. Quam eum a dolore, minus exercitationem labore.
    Dolorem magnam sint asperiores voluptates enim doloremque eveniet, soluta
    numquam odit. Nostrum dolor ducimus minus provident quis! Repudiandae
    perspiciatis laboriosam, dolorum veritatis officiis porro repellat in
    dolorem sequi delectus, vero cumque eos vel. Culpa assumenda fugiat
    voluptatem minus sed nemo? Nemo harum nihil voluptate fugit deserunt
    asperiores itaque quidem rerum aliquid in molestiae commodi eveniet
    inventore ad, atque ipsa necessitatibus quo hic a possimus rem aut libero
    placeat! Obcaecati nulla voluptates architecto, corrupti minus placeat
    debitis voluptas rem aspernatur hic atque sapiente? Atque voluptas dolore
    ea, labore nemo et. Voluptatum, dolorum eos delectus consequatur vero itaque
    sit repudiandae. Quibusdam laudantium ab soluta quas omnis! Voluptatibus at
    cum mollitia aperiam atque odit. Excepturi officia a quibusdam odit?
    Doloribus quam maxime repellendus rem. Iusto vel molestiae, sint libero iure
    illo aspernatur, nostrum aut est dolorem aliquid quod, mollitia perspiciatis
    facere placeat ipsam eaque ut odit minus vero in hic necessitatibus quo.
    Veritatis ipsam accusantium neque consequuntur deleniti tenetur quidem eum.
    Adipisci nihil at exercitationem, nostrum nam voluptatibus hic deserunt
    nobis possimus? Quo magnam deserunt quas quod ullam blanditiis velit.
    Excepturi rem nesciunt eum, placeat natus repudiandae, doloremque,
    architecto quidem sit accusantium debitis eveniet maiores praesentium eaque
    optio perspiciatis molestiae. Enim molestiae corrupti esse error eius neque
    tempora illum incidunt nostrum voluptate, aperiam qui est adipisci
    reiciendis eum ex labore fuga nemo quis odit deleniti nihil voluptas quod.
    Dicta recusandae, dignissimos ipsam fugit impedit vitae error necessitatibus
    doloribus, esse sit dolores eaque nam voluptas sunt ipsa vel ullam! Enim
    vero architecto iure asperiores consequuntur autem aliquid, sed doloribus
    quia! Reprehenderit voluptatum aliquam illo? Eos voluptatum ut explicabo
    voluptates qui hic vitae atque ipsum est quisquam repellat veniam labore
    enim, blanditiis nam sint! Soluta nobis perferendis accusamus placeat
    minima, iusto sint vero consequuntur minus molestiae magnam similique
    reprehenderit repellendus amet, ad nam nemo ut temporibus, odit nulla
    recusandae? Omnis, recusandae corrupti. Repellat odio ipsum nisi atque
    molestiae molestias similique voluptatem, at, rem provident nemo ex laborum
    cumque reiciendis hic enim incidunt modi explicabo deleniti quaerat
    praesentium suscipit tempore perspiciatis sit. Facere odit nisi incidunt
    ipsa architecto asperiores est sapiente veritatis illo, harum magni expedita
    cum debitis, placeat provident corporis autem neque alias quis corrupti
    perspiciatis eum aperiam exercitationem quasi? Non exercitationem, hic quod
    voluptatum vel blanditiis ipsa delectus neque tempore alias laboriosam iste,
    maiores maxime placeat modi quisquam facilis distinctio quibusdam nobis,
    officiis voluptatem. Eveniet, ducimus libero fugiat repudiandae expedita
    error ipsum iure nulla modi beatae, dicta nobis, ad veniam tempora. Qui
    aliquam rerum fugit corrupti est quam aspernatur porro recusandae id
    architecto vero, cum consequatur dicta molestias aut explicabo fugiat nisi
    quasi enim sapiente cumque adipisci repudiandae veniam placeat!
    Necessitatibus, fugiat enim, optio, laudantium tenetur maxime veritatis
    dolores maiores dignissimos sed accusamus illum. Adipisci eos rerum
    delectus, dolorum impedit, temporibus natus quo placeat, veritatis deserunt
    iusto cum voluptatum! Reprehenderit, fugit eaque laudantium quaerat minima
    animi, adipisci dolorem libero doloremque, dolorum minus voluptates
    voluptatibus alias saepe quidem odit hic doloribus? Perferendis distinctio,
    voluptas commodi ipsa mollitia itaque sunt ab libero repudiandae autem optio
    modi. Laudantium architecto quisquam excepturi expedita deserunt corrupti,
    itaque magni sequi laboriosam aspernatur placeat modi dolorem tempore,
    voluptate doloribus nisi eligendi, possimus dolores aliquam saepe in quam
    laborum sit quidem. Similique debitis incidunt animi ad, quod assumenda
    perspiciatis in corrupti nulla ab, consequuntur sint sed autem soluta
    delectus eos praesentium. Distinctio illum neque, labore consequatur tempore
    esse! Voluptas error unde iusto earum placeat consequuntur exercitationem
    doloremque ullam? Omnis ratione possimus voluptas saepe non nihil incidunt
    quia, pariatur dignissimos aut. Odit quasi ipsam aut autem iure dolor
    asperiores maiores neque aliquid? Beatae repellendus quisquam eligendi
    dolores voluptate, dolore minus ea modi, commodi veniam reprehenderit
    voluptatum minima ipsum totam! Quis illo sapiente veniam in voluptate maxime
    fugit amet eaque et ullam blanditiis error ea voluptas earum dolore
    reiciendis provident omnis, explicabo voluptatum temporibus esse, tenetur
    aut? A facilis placeat debitis dolores ex fuga quidem vel tempora, ab
    doloremque. Atque consequuntur amet alias repellat quos earum ipsum
    aspernatur reprehenderit autem maiores? Ducimus aliquid a, atque laudantium
    eum obcaecati molestias, saepe repellendus inventore ipsum delectus ea vero
    quam beatae fugit dignissimos, aspernatur corrupti pariatur non alias
    aperiam nesciunt? Quos voluptas autem facere saepe a excepturi sunt dolores
    reiciendis molestiae, explicabo cupiditate illum nisi laboriosam omnis,
    aliquam aspernatur ab aliquid, quasi voluptatibus consequuntur quo. Facere
    aperiam modi magnam repellat odit facilis velit dolorem officia vitae ex qui
    officiis vero illo quam, commodi nihil nostrum delectus temporibus quo
    eligendi saepe magni doloribus quas. Similique eligendi quisquam asperiores
    vitae ea dolore corrupti temporibus praesentium. Ducimus inventore sit quae,
    at praesentium aut voluptatibus non adipisci laborum dolore vel. Molestiae
    delectus similique dolore velit. Eum reiciendis perspiciatis aut odio
    consequuntur magnam quisquam eaque assumenda laudantium eligendi quidem
    culpa facilis, quis sequi quaerat accusantium iste, repellat pariatur
    maiores aperiam deserunt, cum ea? Cupiditate nulla consequuntur mollitia
    obcaecati tenetur officiis perferendis, soluta accusamus voluptate? Quo,
    illum natus delectus recusandae, explicabo deserunt magni, tempora itaque
    suscipit vero optio provident nemo? Optio distinctio officiis laudantium
    nobis, nulla veniam, atque officia in explicabo debitis non blanditiis
    exercitationem suscipit nisi earum architecto accusamus. Libero sint ipsam
    debitis optio eligendi quas quidem tempora corporis ex dolorum, atque
    maiores. Beatae officia dolor obcaecati dolore veritatis quisquam omnis
    inventore, suscipit fuga laboriosam soluta sint dignissimos laborum odio
    possimus sit vero error amet ipsum facere voluptatibus optio dolores eaque?
    Aliquam enim odit ea est non libero quasi hic. Cupiditate nisi deserunt modi
    quo. Vel numquam quibusdam doloremque, sit enim, aliquam ipsam molestias
    nihil aut ipsa voluptates. Ullam aspernatur repellat pariatur commodi omnis
    fuga autem voluptatum perspiciatis dolores magni, exercitationem quasi quos
    eum provident quia? Doloribus commodi reprehenderit nobis quis consequatur
    provident eaque voluptates fugit repellendus officiis? Commodi nam rerum
    molestias aspernatur nulla obcaecati quas provident ipsam harum fugiat quod,
    quaerat nisi velit deleniti sint sed. Est maxime unde consequuntur rem
    recusandae aliquid exercitationem inventore, totam quisquam aliquam
    aspernatur dolores modi magnam. Sint ad quaerat, nihil pariatur sapiente
    aspernatur nulla unde maxime molestiae inventore neque assumenda quidem cum
    impedit ullam animi ut quas nobis. Repellat reprehenderit porro magnam id
    beatae, reiciendis eveniet cupiditate quidem aspernatur, provident nulla
    fugit minima perferendis voluptatem fugiat molestias! Quos officia
    accusantium quam ipsam itaque maiores asperiores adipisci voluptas
    cupiditate suscipit veritatis, perspiciatis magnam amet laudantium enim quod
    facere. A veritatis odio odit officia quisquam quod rem quaerat, accusamus
    sint culpa, consequatur, deleniti alias repellat id eius commodi. Natus
    repellendus quisquam sed iure in eius similique dolore numquam sint aliquid
    minus itaque accusamus dolor facere, provident vitae optio cumque esse iusto
    repudiandae dolorum. Velit, sunt voluptatum dicta cumque aspernatur sit
    aliquam qui neque? Sapiente eligendi laborum magnam, sunt, error facere
    aliquid molestiae velit eveniet molestias in nulla, natus vero accusantium
    iusto nihil voluptatibus amet nam dolores aspernatur reprehenderit
    necessitatibus perspiciatis. Aliquid fuga maxime nobis repudiandae earum
    sapiente temporibus delectus, ut impedit? Sequi officiis quo expedita
    eveniet esse temporibus maiores atque eaque hic ab, illo totam fugit
    deserunt quasi laborum possimus doloribus maxime vel beatae nemo eius?
    Impedit odio culpa labore optio, quibusdam et necessitatibus ipsam! Nesciunt
    quisquam consequatur, debitis mollitia maiores consequuntur, labore, facere
    quaerat perspiciatis voluptatibus recusandae repudiandae reprehenderit
    similique impedit corrupti dolorem voluptates. Quae nihil perspiciatis nisi
    amet. Iusto, dolorum, ullam aperiam explicabo ad voluptatem inventore,
    provident reprehenderit nam veritatis impedit ex nihil. Optio, iusto
    dolores? Voluptatibus vero, ducimus dolorem officiis sapiente consectetur!
    Reiciendis nostrum dolorem voluptates quam molestias illum sit, explicabo
    magni labore aliquid! Fugit nihil eum veniam adipisci minima neque, aperiam,
    a repellendus est exercitationem quo nemo? Dignissimos repudiandae, nostrum
    facilis laudantium quia aperiam consectetur aliquid quaerat tempora neque
    maxime ullam provident molestias, sunt deleniti fugit ducimus repellat enim
    totam eligendi delectus in. Distinctio eos quis unde eligendi tempore optio
    aut obcaecati libero odit voluptatibus eum provident esse excepturi dolore
    facilis harum veniam aperiam perferendis nam error vel officiis fugiat,
    ipsam debitis! Quidem esse cumque at aspernatur minus tempora dolores eum a
    sapiente aliquid blanditiis amet accusantium ullam reiciendis ut possimus
    ipsum iste alias, nemo vel culpa cum voluptate debitis. Enim rem, placeat,
    laboriosam adipisci consequuntur beatae exercitationem possimus ad aperiam
    rerum praesentium hic voluptatibus. Nulla molestiae facilis veritatis quos,
    incidunt nisi illo ullam corrupti accusantium quia itaque officia iusto rem.
    Magnam nostrum omnis, fugiat quo iusto esse porro quis aut tenetur nulla
    eligendi quaerat corporis accusamus sed, impedit deleniti distinctio ea
    aspernatur, officia dignissimos tempore sint! Sequi reprehenderit tempore
    autem consequatur iusto sapiente repellendus, laborum, quo vitae, vel atque
    saepe! Doloremque repellat nam commodi perferendis unde soluta? Nemo at
    corrupti voluptates, neque et quidem ullam sed inventore ab reiciendis,
    autem enim officiis culpa architecto earum? Quod magni error consequatur
    libero perferendis expedita nemo quo veritatis? Molestiae ipsum, dignissimos
    voluptate eveniet error quas veritatis. Libero sed non mollitia, labore
    voluptate alias voluptas reprehenderit. Delectus ipsam soluta voluptates
    eligendi eaque voluptatibus voluptatum et. Ab adipisci porro dolorem
    distinctio sequi dolore, consequuntur totam tempora harum, nesciunt eum
    cupiditate voluptate vel! At sit illum iure perspiciatis quod soluta
    voluptatibus dolore consequatur adipisci voluptate optio aliquam modi quae,
    dicta aperiam culpa id temporibus, ipsa atque nisi? Ex quis pariatur veniam
    delectus fugiat, dolores nulla nam officia recusandae voluptatum fuga minus
    accusamus dicta hic in commodi earum cupiditate perferendis iure ab. Optio
    quae quod explicabo commodi asperiores tempora nemo incidunt excepturi,
    repudiandae nihil? Ratione, recusandae facilis. Explicabo rem atque minus
    laudantium ratione, quibusdam optio reiciendis quaerat dolores mollitia
    impedit libero eaque dignissimos qui vel delectus saepe quae fugiat
    assumenda eum. Cupiditate maxime, ullam voluptate eaque repellat mollitia
    officiis veritatis doloribus nesciunt impedit atque eligendi reiciendis!
    Veritatis, ea. Ex soluta aliquid fugit iusto! Minus totam animi, repellendus
    temporibus nulla, nisi debitis, doloremque laborum eos non ipsum harum!
    Labore libero itaque nisi quidem pariatur velit at maiores consequuntur sit.
    Nobis fugiat adipisci assumenda earum totam alias fugit exercitationem
    beatae, amet, vitae nostrum optio blanditiis placeat. Voluptas quo neque
    aperiam corporis, consequatur, quod deserunt ex aliquam cupiditate nisi
    pariatur praesentium dolore explicabo fugit rerum animi at expedita! Non
    laboriosam nam laborum esse? Itaque, fugit corporis deserunt eveniet
    perspiciatis repudiandae facilis corrupti, expedita officia sit nihil alias
    maiores? Voluptates, dignissimos molestiae? Non corrupti a quod eius ipsa.
    Obcaecati, aliquid consequuntur. Totam voluptate eius ex accusamus nisi!
    Voluptates rem commodi, id at autem minus eos fuga voluptatem sapiente
    quibusdam nam nemo cupiditate soluta, iure debitis? Ducimus voluptatem
    accusamus nisi quibusdam perferendis ut modi rem! Natus eos libero aliquam
    expedita molestiae consequuntur reprehenderit error eligendi. Voluptatem
    perferendis non quae officia. Voluptatem natus unde ducimus adipisci, sequi
    quasi quaerat? Animi, necessitatibus exercitationem vitae et corrupti cum
    autem officia ullam voluptatibus quidem architecto! Saepe aut distinctio
    praesentium fugiat assumenda autem sequi! Sapiente neque repellendus, odit
    ab doloremque aliquam tempora molestias eaque nulla doloribus cumque fuga
    tenetur reprehenderit esse dolorum, saepe reiciendis quas autem sit non
    voluptatum incidunt voluptate nisi. Provident vel distinctio laudantium
    ullam! Fuga consectetur quidem, quibusdam, quae nihil cum eius expedita
    minus eveniet molestiae alias! Esse perspiciatis explicabo ratione eum
    consectetur commodi eius odio atque assumenda praesentium quibusdam delectus
    voluptatum, amet doloremque expedita ipsum molestias iusto saepe! Molestiae
    eum esse porro enim, aspernatur facere blanditiis corporis debitis et, cum,
    expedita itaque libero sunt quibusdam incidunt iusto! Repudiandae aliquam
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
