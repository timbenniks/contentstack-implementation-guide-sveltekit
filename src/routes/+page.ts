import type { PageLoad } from './$types';
import { browser } from '$app/environment';
import { getPage, initLivePreview } from '$lib';
import type { LivePreviewQuery } from '@contentstack/delivery-sdk';

export const load: PageLoad = async ({ url }) => {
  const searchParams = url.searchParams;
  const live_preview = searchParams.get("live_preview");
  const content_type_uid = searchParams.get("content_type_uid") || "";
  const entry_uid = searchParams.get("entry_uid") || "";

  const page = await getPage("/", {
    live_preview,
    contentTypeUid: content_type_uid,
    entryUid: entry_uid,
  } as LivePreviewQuery);

  if (browser) {
    initLivePreview();
  }

  return page
};