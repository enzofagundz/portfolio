<template>
  <details class="dropdown dropdown-end">
    <summary>Tema</summary>
    <ul
      tabindex="0"
      class="dropdown-content z-[1] p-2 shadow-2xl bg-base-300 rounded-box w-52"
    >
      <li>
        <input
          type="radio"
          name="theme-dropdown"
          class="theme-controller btn btn-sm btn-block btn-ghost justify-start"
          aria-label="Default"
          value="default"
        />
      </li>
      <li>
        <input
          type="radio"
          name="theme-dropdown"
          class="theme-controller btn btn-sm btn-block btn-ghost justify-start"
          aria-label="Retro"
          value="retro"
        />
      </li>
      <li>
        <input
          type="radio"
          name="theme-dropdown"
          class="theme-controller btn btn-sm btn-block btn-ghost justify-start"
          aria-label="Cyberpunk"
          value="cyberpunk"
        />
      </li>
      <li>
        <input
          type="radio"
          name="theme-dropdown"
          class="theme-controller btn btn-sm btn-block btn-ghost justify-start"
          aria-label="Valentine"
          value="valentine"
        />
      </li>
      <li>
        <input
          type="radio"
          name="theme-dropdown"
          class="theme-controller btn btn-sm btn-block btn-ghost justify-start"
          aria-label="Business"
          value="business"
        />
      </li>
    </ul>
  </details>
</template>
