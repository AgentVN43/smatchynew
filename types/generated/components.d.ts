import type { Schema, Struct } from '@strapi/strapi';

export interface BlocksCardGrid extends Struct.ComponentSchema {
  collectionName: 'components_blocks_card_grids';
  info: {
    displayName: 'hero';
  };
  attributes: {
    hero: Schema.Attribute.Relation<'oneToOne', 'api::hero.hero'>;
    title: Schema.Attribute.String;
  };
}

export interface BlocksGroupImageBox extends Struct.ComponentSchema {
  collectionName: 'components_blocks_group_image_boxes';
  info: {
    displayName: 'group_image_box';
  };
  attributes: {
    image_box: Schema.Attribute.Component<'shared.image-box', true>;
  };
}

export interface BlocksGroupWhy extends Struct.ComponentSchema {
  collectionName: 'components_blocks_group_whies';
  info: {
    displayName: 'group_why';
  };
  attributes: {
    reason: Schema.Attribute.Component<'shared.text-box', true>;
    title: Schema.Attribute.String;
  };
}

export interface BlocksProblemSolution extends Struct.ComponentSchema {
  collectionName: 'components_blocks_problem_solutions';
  info: {
    displayName: 'problem-solution';
  };
  attributes: {
    problem_items: Schema.Attribute.Component<'shared.icon-text', true>;
    problem_title: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'The Problem'>;
    solution_items: Schema.Attribute.Component<'shared.icon-text', true>;
    solution_title: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'The Solution'>;
    title: Schema.Attribute.String;
  };
}

export interface BlocksStats extends Struct.ComponentSchema {
  collectionName: 'components_blocks_stats';
  info: {
    displayName: 'stats';
  };
  attributes: {
    stats_icon: Schema.Attribute.Component<'shared.icon-text', true>;
    stats_item: Schema.Attribute.Component<'shared.text-box', true>;
    title: Schema.Attribute.String;
  };
}

export interface BlocksTitle extends Struct.ComponentSchema {
  collectionName: 'components_blocks_titles';
  info: {
    displayName: 'title';
  };
  attributes: {
    button: Schema.Attribute.Component<'shared.button', true> &
      Schema.Attribute.SetMinMax<
        {
          max: 2;
        },
        number
      >;
    heading: Schema.Attribute.Text;
    sub_heading: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface HeroImageOnly extends Struct.ComponentSchema {
  collectionName: 'components_hero_image_onlies';
  info: {
    displayName: 'text-only';
  };
  attributes: {
    background_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    heading: Schema.Attribute.Text;
    sub_heading: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface HeroImageText extends Struct.ComponentSchema {
  collectionName: 'components_hero_image_texts';
  info: {
    displayName: 'image-text';
  };
  attributes: {
    background_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    button_image: Schema.Attribute.Component<'shared.button-image', true> &
      Schema.Attribute.SetMinMax<
        {
          max: 2;
        },
        number
      >;
    heading: Schema.Attribute.Text;
    main_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    sub_heading: Schema.Attribute.Text;
  };
}

export interface HeroSlider extends Struct.ComponentSchema {
  collectionName: 'components_hero_sliders';
  info: {
    displayName: 'slider';
  };
  attributes: {
    button: Schema.Attribute.Component<'shared.button', true>;
    heading: Schema.Attribute.Text;
    slider_images: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    sub_heading: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface LayoutHeader extends Struct.ComponentSchema {
  collectionName: 'components_layout_headers';
  info: {
    displayName: 'header';
  };
  attributes: {
    button: Schema.Attribute.Component<'shared.button', false>;
    logo: Schema.Attribute.Component<'shared.logo', false>;
    nav_items: Schema.Attribute.Component<'shared.link', true>;
  };
}

export interface SharedButton extends Struct.ComponentSchema {
  collectionName: 'components_shared_buttons';
  info: {
    displayName: 'button';
  };
  attributes: {
    label: Schema.Attribute.String;
    link: Schema.Attribute.String;
    style: Schema.Attribute.Enumeration<['primary', 'secondary']>;
  };
}

export interface SharedButtonImage extends Struct.ComponentSchema {
  collectionName: 'components_shared_button_images';
  info: {
    displayName: 'button-image';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files'>;
    label: Schema.Attribute.String;
    link: Schema.Attribute.String;
  };
}

export interface SharedIconText extends Struct.ComponentSchema {
  collectionName: 'components_shared_icon_texts';
  info: {
    displayName: 'icon-text';
  };
  attributes: {
    button: Schema.Attribute.Component<'shared.button', false>;
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    sub_heading: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SharedImageBox extends Struct.ComponentSchema {
  collectionName: 'components_shared_image_boxes';
  info: {
    displayName: 'image-box';
  };
  attributes: {
    heading: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    sub_heading: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_links';
  info: {
    displayName: 'link';
  };
  attributes: {
    is_external: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    label: Schema.Attribute.String;
    link: Schema.Attribute.String;
  };
}

export interface SharedLogo extends Struct.ComponentSchema {
  collectionName: 'components_shared_logos';
  info: {
    displayName: 'logo';
  };
  attributes: {
    href: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    is_external: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    label: Schema.Attribute.String;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'videos' | 'images'>;
    title: Schema.Attribute.String;
  };
}

export interface SharedOpenGraph extends Struct.ComponentSchema {
  collectionName: 'components_shared_open_graphs';
  info: {
    displayName: 'openGraph';
    icon: 'project-diagram';
  };
  attributes: {
    ogDescription: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 200;
      }>;
    ogImage: Schema.Attribute.Media<'images'>;
    ogTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 70;
      }>;
    ogType: Schema.Attribute.String;
    ogUrl: Schema.Attribute.String;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedRichtext extends Struct.ComponentSchema {
  collectionName: 'components_shared_richtexts';
  info: {
    displayName: 'richtext';
  };
  attributes: {
    text_area: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
    icon: 'search';
  };
  attributes: {
    canonicalURL: Schema.Attribute.String;
    keywords: Schema.Attribute.Text;
    metaDescription: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 160;
        minLength: 50;
      }>;
    metaImage: Schema.Attribute.Media<'images'>;
    metaRobots: Schema.Attribute.String;
    metaTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaViewport: Schema.Attribute.String;
    openGraph: Schema.Attribute.Component<'shared.open-graph', false>;
    structuredData: Schema.Attribute.JSON;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

export interface SharedSocial extends Struct.ComponentSchema {
  collectionName: 'components_shared_socials';
  info: {
    displayName: 'social';
  };
  attributes: {
    platform: Schema.Attribute.Enumeration<
      ['instagram', 'tiktok', 'linkedin', 'facebook', 'youtube', 'x']
    >;
    url: Schema.Attribute.String;
  };
}

export interface SharedTextBox extends Struct.ComponentSchema {
  collectionName: 'components_shared_text_boxes';
  info: {
    displayName: 'text-box';
  };
  attributes: {
    button: Schema.Attribute.Component<'shared.button', false>;
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.Text;
    sub_heading: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blocks.card-grid': BlocksCardGrid;
      'blocks.group-image-box': BlocksGroupImageBox;
      'blocks.group-why': BlocksGroupWhy;
      'blocks.problem-solution': BlocksProblemSolution;
      'blocks.stats': BlocksStats;
      'blocks.title': BlocksTitle;
      'hero.image-only': HeroImageOnly;
      'hero.image-text': HeroImageText;
      'hero.slider': HeroSlider;
      'layout.header': LayoutHeader;
      'shared.button': SharedButton;
      'shared.button-image': SharedButtonImage;
      'shared.icon-text': SharedIconText;
      'shared.image-box': SharedImageBox;
      'shared.link': SharedLink;
      'shared.logo': SharedLogo;
      'shared.media': SharedMedia;
      'shared.open-graph': SharedOpenGraph;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.richtext': SharedRichtext;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'shared.social': SharedSocial;
      'shared.text-box': SharedTextBox;
    }
  }
}
