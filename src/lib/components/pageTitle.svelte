<script>
  export let title = "Title";
  import { Link } from 'lucide-svelte';

  const reg = /[^A-Za-z0-9]/g
  const id = title.trim().toLowerCase().replaceAll(reg, "-")
  
</script>

<div class="header-container">
  <h1 id="{id}" class="hover-header">{title}</h1>
  <a href="#{id}" class="link-icon" aria-label="Copy Link"><Link size="2rem" color="var(--teal-color)" /></a>
</div>
<hr>

<style>
  .header-container {
    /* background-color: green; */
    display: flex;
    align-items: center;
  }

  .link-icon {
    /* background-color: red; */
    opacity: 0;
    text-decoration: none;
    transition: opacity 0.3s;
    margin-left: .5rem;
    transform: translateY(.25em);
  }

  .header-container:hover .link-icon {
    opacity: 1;
  }

  h1 {
    /* background-color: blue; */
    color: var(--teal-color);
    font-size: 2.6em;
    font-weight: 100;
    margin: 0;
    margin-top: 2rem;
  }

  hr {
    border:1px solid #44c0c9;
    margin-bottom: 3rem;
  }
</style>
