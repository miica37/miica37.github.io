<script>
  let { title="Title", level=2, bold=0 } = $props()
  import { Link } from 'lucide-svelte';

  const reg = /[^A-Za-z0-9]/g
  const id = title.trim().toLowerCase().replaceAll(reg, "-")
  
</script>

<div class="header-container">
  {#if level == 2 }
    {#if bold == 1 }
      <h2 id="{id}" class="hover-header font-bold">{title}</h2>
    {:else}
      <h2 id="{id}" class="hover-header">{title}</h2>
    {/if}
    <a href="#{id}" class="link-icon" aria-label="Copy Link"><Link size="1.5rem" /></a>
  {:else if level == 3 }
    {#if bold == 1 }
      <h3 id="{id}" class="hover-header font-bold">{title}</h3>
    {:else}
      <h3 id="{id}" class="hover-header">{title}</h3>
    {/if}
    <a href="#{id}" class="link-icon" aria-label="Copy Link"><Link size="1.2rem" /></a>
  {:else if level == 4 }
    <h4 id="{id}" class="hover-header font-bold">{title}</h4>
    <a href="#{id}" class="link-icon" aria-label="Copy Link"><Link size="1rem" /></a>
  {:else if level == 5 }
    <h5 id="{id}" class="hover-header font-bold">{title}</h5>
    <a href="#{id}" class="link-icon" aria-label="Copy Link"><Link size="1rem" /></a>
  {/if}
</div>

<style>
  .header-container {
    /* background-color: green; */
    display: flex;
    align-items: center;
    margin-top: 2rem;
    margin-bottom: 1rem;
  }

  .link-icon {
    /* background-color: red; */
    opacity: 0;
    text-decoration: none;
    transition: opacity 0.3s;
    margin-left: .5rem;
    transform: translateY(-.5em);
  }

  .header-container:hover .link-icon {
    opacity: 1;
  }

  h2, h3, h4, h5, h6 {
    margin: 0;
  }

  hr {
    border:1px solid #44c0c9;
    margin-bottom: 3rem;
  }
</style>
