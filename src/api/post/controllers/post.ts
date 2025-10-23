/**
 * post controller
 */


const populate = {
  coverImage: true,
  Tag: true
//   coverImage: {
//     fields: ['url', 'alternativeText', 'width', 'height']
//   },
//   Blocks: {
//     // ... your existing Blocks populate
//   },
};


import { factories } from '@strapi/strapi'

// export default factories.createCoreController('api::post.post',

// );


export default factories.createCoreController(
  "api::post.post",
  ({ strapi }) => ({
    // Use regular function syntax to access `this`
    async findOne(ctx) {
      const { slug } = ctx.params;
      if (!slug) {
        return ctx.badRequest("Slug is required");
      }

      const entities = await strapi.documents("api::post.post").findMany({
        filters: { slug },
        populate: populate as any,
        limit: 1, // safeguard
      });

      if (!entities || entities.length === 0) {
        return ctx.notFound("Service not found");
      }

      const entity = entities[0];
      const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
      return this.transformResponse(sanitizedEntity);
    },

    async find(ctx) {
      const entities = await strapi.documents("api::post.post").findMany({
        populate: populate as any,
      });
      const sanitizedEntities = await this.sanitizeOutput(entities, ctx);
      return this.transformResponse(sanitizedEntities);
    },
  
  })
);