<script>
  import { fly } from "svelte/transition";
  import { notification } from "./notification";
  import { flip } from "svelte/animate";

  export let themes = {
    danger: "#E26D69",
    success: "#29bf12",
    warning: "#f0ad4e",
    info: "#5bc0de",
    default: "#aaaaaa",
  };
</script>

<div class="notification">
  {#each $notification as notification (notification.id)}
    <div
      animate:flip
      class="toast"
      style="background: {themes[notification.type]};"
      transition:fly={{ y: 30 }}
    >
      <div class="content">{notification.message}</div>
      {#if notification.icon}<i class={notification.icon} />{/if}
    </div>
  {/each}
</div>

<style>
  .notification {
    position: fixed;
    top: 10px;
    left: 0;
    right: 0;
    margin: 0 auto;
    padding: 0;
    z-index: 9999;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    pointer-events: none;
  }

  .toast {
    flex: 0 0 auto;
    margin-bottom: 10px;
  }

  .content {
    padding: 10px;
    display: block;
    color: white;
    font-weight: 500;
  }
</style>
