<script lang="ts">
	import type { PageData } from './$types';
	import { VB_EmptyBlockParentClass } from '@contentstack/live-preview-utils';

	let { data }: { data: PageData } = $props();
  const page = data
</script>

<main class="max-w-screen-md mx-auto">
  <section class="p-4">
    {#if page?.title}
      <h1 
        class="text-4xl font-bold mb-4" 
        {...(page?.$ && page?.$.title)}
      >
        {page.title}
      </h1>
    {/if}
  
    {#if page?.description}
      <p class="mb-4" {...(page?.$ && page?.$.description)}>
        {page.description}
      </p>
    {/if}
  
    {#if page?.image}
      <img
        class="mb-4"
        width={640}
        height={360}
        src={page.image.url}
        alt={page.image.title}
        {...(page?.image?.$ && page?.image?.$.url)}
      />
    {/if}
  
    {#if page?.rich_text}
      <div
        {...(page?.$ && page?.$.rich_text)}
      >{@html page.rich_text}</div>
    {/if}
  
    <div
      class="space-y-8 max-w-screen-sm mt-4 {!page?.blocks || page.blocks.length === 0 ? VB_EmptyBlockParentClass : ''}"
      {...(page?.$ && page?.$.blocks)}
    >
      {#each page?.blocks || [] as item, index}
        {@const block = item.block}
        {@const isImageLeft = block.layout === "image_left"}
  
        <div
          {...(page?.$ && page?.$[`blocks__${index}`])}
          class="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 bg-slate-100 {isImageLeft ? 'md:flex-row' : 'md:flex-row-reverse'}"
        >
          <div class="w-full md:w-1/2">
            {#if block.image}
              <img
                src={block.image.url}
                alt={block.image.title}
                width={200}
                height={112}
                class="w-full"
                {...(block?.$ && block?.$.image)}
              />
            {/if}
          </div>
          <div class="w-full md:w-1/2">
            {#if block.title}
              <h2
                class="text-2xl font-bold"
                {...(block?.$ && block?.$.title)}
              >
                {block.title}
              </h2>
            {/if}
            {#if block.copy}
              <div
                {...(block?.$ && block?.$.copy)}
                class="prose"
              >{@html block.copy}</div>
            {/if}
          </div>
        </div>
      {/each}
    </div>
  </section>
</main>
