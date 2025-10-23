import type { Schema, Struct } from '@strapi/strapi';

export interface GlobalBlogDisplayCard extends Struct.ComponentSchema {
  collectionName: 'components_global_blog_display_cards';
  info: {
    displayName: 'blogDisplayCard';
  };
  attributes: {
    cta: Schema.Attribute.Component<'global.cta', false>;
    description: Schema.Attribute.Text;
    previewImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    publishedDate: Schema.Attribute.Date;
    title: Schema.Attribute.String;
  };
}

export interface GlobalComplementService extends Struct.ComponentSchema {
  collectionName: 'components_global_complement_services';
  info: {
    displayName: 'complementServicesUnderGetValue';
  };
  attributes: {
    title: Schema.Attribute.String;
  };
}

export interface GlobalCta extends Struct.ComponentSchema {
  collectionName: 'components_global_ctas';
  info: {
    displayName: 'cta';
  };
  attributes: {
    href: Schema.Attribute.String;
    isExternal: Schema.Attribute.Boolean;
    isPrimary: Schema.Attribute.Boolean;
    label: Schema.Attribute.String;
    target: Schema.Attribute.String;
  };
}

export interface GlobalExploreMoreServiceCard extends Struct.ComponentSchema {
  collectionName: 'components_global_explore_more_service_cards';
  info: {
    displayName: 'exploreMoreServiceCard';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    exploreMoreServicesCta: Schema.Attribute.Component<'global.cta', false>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface GlobalExploreMoreServicesSection
  extends Struct.ComponentSchema {
  collectionName: 'components_global_explore_more_services_sections';
  info: {
    displayName: 'exploreMoreServicesSection';
  };
  attributes: {
    exploreMoreServiceCards: Schema.Attribute.Component<
      'global.explore-more-service-card',
      true
    >;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface GlobalFaq extends Struct.ComponentSchema {
  collectionName: 'components_global_faqs';
  info: {
    displayName: 'faqCard';
  };
  attributes: {
    answer: Schema.Attribute.Text;
    question: Schema.Attribute.String;
  };
}

export interface GlobalFaqSection extends Struct.ComponentSchema {
  collectionName: 'components_global_faq_sections';
  info: {
    displayName: 'faqSection';
  };
  attributes: {
    cta: Schema.Attribute.Component<'global.cta', false>;
    faqOnService: Schema.Attribute.String;
    faqs: Schema.Attribute.Component<'global.faq', true>;
    subTitle: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Frequently Asked Questions'>;
  };
}

export interface GlobalFromOurBlog extends Struct.ComponentSchema {
  collectionName: 'components_global_from_our_blogs';
  info: {
    displayName: 'fromOurBlog';
  };
  attributes: {
    blogPosts: Schema.Attribute.Component<'global.blog-display-card', true>;
    fromOurBlogCTA: Schema.Attribute.Component<'global.cta', false>;
    subTitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface GlobalFromOurBlogSection extends Struct.ComponentSchema {
  collectionName: 'components_global_from_our_blog_sections';
  info: {
    displayName: 'fromOurBlogSection';
  };
  attributes: {
    blogs: Schema.Attribute.Component<'global.blog-display-card', true>;
    fromBlogCta: Schema.Attribute.Component<'global.cta', false>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface GlobalHowItWorks extends Struct.ComponentSchema {
  collectionName: 'components_global_how_it_works';
  info: {
    displayName: 'howItWorks';
  };
  attributes: {
    cards: Schema.Attribute.Component<'global.how-it-works-card', true>;
    howItWorksCta: Schema.Attribute.Component<'global.cta', false>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface GlobalHowItWorksCard extends Struct.ComponentSchema {
  collectionName: 'components_global_how_it_works_cards';
  info: {
    displayName: 'howItWorksCard';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface GlobalNeedToTakeActionSection extends Struct.ComponentSchema {
  collectionName: 'components_global_need_to_take_action_sections';
  info: {
    displayName: 'needToTakeActionSection';
  };
  attributes: {
    cta: Schema.Attribute.Component<'global.cta', false>;
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface GlobalServiceCard extends Struct.ComponentSchema {
  collectionName: 'components_global_service_cards';
  info: {
    displayName: 'serviceCard';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface GlobalServicesSecondSection extends Struct.ComponentSchema {
  collectionName: 'components_global_services_second_sections';
  info: {
    displayName: 'services_secondSection';
    icon: 'book';
  };
  attributes: {
    serviceCards: Schema.Attribute.Component<'global.service-card', true>;
    title: Schema.Attribute.String;
  };
}

export interface GlobalTags extends Struct.ComponentSchema {
  collectionName: 'components_global_tags';
  info: {
    displayName: 'Tags';
  };
  attributes: {
    tag: Schema.Attribute.String;
  };
}

export interface GlobalTestimonialCard extends Struct.ComponentSchema {
  collectionName: 'components_global_testimonial_cards';
  info: {
    displayName: 'testimonialCard';
  };
  attributes: {
    company: Schema.Attribute.String;
    companyLogo: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    message: Schema.Attribute.Text;
    name: Schema.Attribute.String;
    position: Schema.Attribute.String;
    profileImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
  };
}

export interface GlobalTestimonialSection extends Struct.ComponentSchema {
  collectionName: 'components_global_testimonial_sections';
  info: {
    displayName: 'testimonialSection';
  };
  attributes: {
    testimonialCards: Schema.Attribute.Component<
      'global.testimonial-card',
      true
    >;
  };
}

export interface GlobalValueCard extends Struct.ComponentSchema {
  collectionName: 'components_global_value_cards';
  info: {
    displayName: 'getvalueSection';
  };
  attributes: {
    addedServices: Schema.Attribute.Component<
      'global.complement-service',
      true
    >;
    cta: Schema.Attribute.Component<'global.cta', false>;
    subTitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface HeroHero extends Struct.ComponentSchema {
  collectionName: 'components_hero_heroes';
  info: {
    displayName: 'Hero';
  };
  attributes: {
    cta: Schema.Attribute.Component<'global.cta', true>;
    description: Schema.Attribute.Text;
    featuredImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    isPrimary: Schema.Attribute.Boolean;
    title: Schema.Attribute.String;
  };
}

export interface ServicesServiceComponents extends Struct.ComponentSchema {
  collectionName: 'components_services_service_components';
  info: {
    displayName: 'Service components';
  };
  attributes: {
    exploreMoreServicesSection: Schema.Attribute.Component<
      'global.explore-more-services-section',
      false
    >;
    faqSection: Schema.Attribute.Component<'global.faq-section', true>;
    fromOurBlogSection: Schema.Attribute.Component<
      'global.from-our-blog-section',
      false
    >;
    hero: Schema.Attribute.Component<'hero.hero', false>;
    needToTakeActionSection: Schema.Attribute.Component<
      'global.need-to-take-action-section',
      false
    >;
    section3_getvalue: Schema.Attribute.Component<'global.value-card', false>;
    section4_howItWorks: Schema.Attribute.Component<
      'global.how-it-works',
      false
    >;
    services_secondSection: Schema.Attribute.Component<
      'global.services-second-section',
      false
    >;
    testimonials: Schema.Attribute.Component<'global.testimonial-card', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'global.blog-display-card': GlobalBlogDisplayCard;
      'global.complement-service': GlobalComplementService;
      'global.cta': GlobalCta;
      'global.explore-more-service-card': GlobalExploreMoreServiceCard;
      'global.explore-more-services-section': GlobalExploreMoreServicesSection;
      'global.faq': GlobalFaq;
      'global.faq-section': GlobalFaqSection;
      'global.from-our-blog': GlobalFromOurBlog;
      'global.from-our-blog-section': GlobalFromOurBlogSection;
      'global.how-it-works': GlobalHowItWorks;
      'global.how-it-works-card': GlobalHowItWorksCard;
      'global.need-to-take-action-section': GlobalNeedToTakeActionSection;
      'global.service-card': GlobalServiceCard;
      'global.services-second-section': GlobalServicesSecondSection;
      'global.tags': GlobalTags;
      'global.testimonial-card': GlobalTestimonialCard;
      'global.testimonial-section': GlobalTestimonialSection;
      'global.value-card': GlobalValueCard;
      'hero.hero': HeroHero;
      'services.service-components': ServicesServiceComponents;
    }
  }
}
