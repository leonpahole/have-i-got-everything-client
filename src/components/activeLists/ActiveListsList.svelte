<script lang="ts">
  import { ArrowRight, Pencil } from 'svelte-heros-v2';
  import { ActiveListService } from '../../util/activeLists/active-list.service';
  import ItemList, { type ItemListItemData } from '../shared/ItemList.svelte';

  const fetchItems = async (): Promise<ItemListItemData[]> => {
    const activeLists = await ActiveListService.listActiveLists();
    return activeLists.map(
      (a): ItemListItemData => ({
        name: a.name,
        links: [
          {
            name: 'View details',
            icon: ArrowRight,
            href: `/list/${a.id}`
          }
        ]
      })
    );
  };
</script>

<ItemList
  data={{
    heading: 'Active lists',
    headingLink: null,
    fetchItems
  }}
/>
