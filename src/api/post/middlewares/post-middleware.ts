/**
 * `post-middleware` middleware
 */

const populate = {

    // tags: {
    // fields: ["name"]
    // },
    tag: {
      populate: "*"
    },
    author: {
      populate: {
      avatar: {
      fields: ["url", "alternativeText"]
      }
      }
          }
      }


import type { Core } from '@strapi/strapi';

export default (config, { strapi }: { strapi: Core.Strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    ctx.query.populate = populate
    strapi.log.info('In post-middleware middleware.');

    await next();
  };
};
