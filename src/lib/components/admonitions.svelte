<script>
  export let title = "Title";
  export let type = "Info";
  export let width = "100%";

  // Lucide Icons
  import { Info, BookOpenText, MessageCircleWarning, Sparkles, SquareMenu } from 'lucide-svelte';

  const options = {
    docs: {title_color: "#004bcc", title_bg_color: "#dbe8ff", content_bg_color: "#ecf3ff", component: BookOpenText},
    info: {title_color: "#004bcc", title_bg_color: "#dbe8ff", content_bg_color: "#ecf3ff", component: Info},
    tip: {title_color: "#226e41", title_bg_color: "#ccf4dc", content_bg_color: "#e9f9e9", component: Sparkles},
    // danger: {title_color: "#004bcc", title_bg_color: "#dbe8ff", content_bg_color: "#ecf3ff", component: MessageSquareWarning},
    warning: {title_color: "#ff0019", title_bg_color: "#ffc7c9", content_bg_color: "#ffe5e7", component: MessageCircleWarning},
    // warning: {title_color: "#ff9100", title_bg_color: "#ffeac7", content_bg_color: "#fff4e5", component: MessageCircleWarning},
    // warning: {title_color: "#000", title_bg_color: "#ffe6b6", content_bg_color: "#fff4e5", component: MessageSquareWarning},
    reference: {title_color: "#030005", title_bg_color: "#d6d6d6", content_bg_color: "#e9e9e9", component: SquareMenu},
  }

  let selected_option = null

  if (type.toLowerCase() ===  'info') {
    selected_option = options.info
  } else if (type.toLowerCase() ===  'docs') {
    selected_option = options.docs
  } else if (type.toLowerCase() === 'warning') {
    selected_option = options.warning
  } else if (type.toLowerCase() === 'tip') {
    selected_option = options.tip
  } else if (type.toLowerCase() === 'reference') {
    selected_option = options.reference
  }
</script>

<div style="width:{width}">
  <div class="admonition uk-card uk-card-default uk-card-body" style="border: 1px solid {selected_option.title_bg_color}">
    <div class="uk-card-title" style="color:{selected_option.title_color}; background-color:{selected_option.title_bg_color}">
      {#if type.toLowerCase() === 'warning'}
        <svelte:component this={selected_option.component} color={selected_option.title_color} size="2.2rem" />
      {:else}
        <svelte:component this={selected_option.component} color={selected_option.title_color} />
      {/if}
      <span class="title">{title}</span>
    </div>
    <div class="content" style="background-color: {selected_option.content_bg_color}">
      <slot/>
    </div>
  </div>
</div>

<style>
  .admonition {
    /* background-color: blue; */
    /* color: #f5d498; */
    /* color: #ff9100; */
    /* color: #f0dbb4; */
    width: 100%;
    padding: 0;
    margin-top: 1rem;
    margin-bottom: 1rem;
    overflow: hidden;
  }

  .uk-card-title {
    font-size: 1.4rem;
    margin: 0;
    padding: 1rem;
    border-bottom: 1px solid black;
    display: flex;
    align-items: center;
  }

  .title {
    padding-inline:.4rem;
  }

  .content {
    margin: 0;
    padding: 1rem;
  }
</style>
