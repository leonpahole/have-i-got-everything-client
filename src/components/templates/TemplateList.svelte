<script lang="ts">
  import { ArrowRight, Pencil } from 'svelte-heros-v2';
  import { TemplateService } from '../../util/templates/template.service';
  import ItemList, { type ItemListItemData } from '../shared/ItemList.svelte';

  const fetchItems = async (): Promise<ItemListItemData[]> => {
    const templates = await TemplateService.listTemplates();
    return templates.map(
      (t): ItemListItemData => ({
        name: t.name,
        description: t.description,
        links: [
          {
            name: 'View details',
            icon: ArrowRight,
            href: `/template/${t.id}`
          },
          {
            name: 'Edit',
            icon: Pencil,
            btnColor: 'alternative',
            href: `/template/${t.id}/update`
          }
        ]
      })
    );
  };
</script>

<ItemList
  data={{
    heading: 'Templates',
    headingLink: {
      name: 'Create a new template',
      href: '/create-template'
    },
    fetchItems
  }}
/>
