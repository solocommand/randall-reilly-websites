const { asyncRoute } = require('@base-cms/utils');
const getRedirect = require('@base-cms/marko-web/express/get-redirect');

/**
 * Checks `/p={id}` routes have a correspondong `/__post/{id}` redirect.
 * If a `website.Redirects.from` value exists for `/__post/{id}` the user will
 * be redirect to its corresponding `to` value.
 */
module.exports = () => asyncRoute(async (req, res, next) => {
  const { p, ...rest } = req.query;
  if (!p) return next();
  const id = p.trim();
  if (!id) return next();
  const path = `/__post/${id}`;
  const redirect = await getRedirect({
    apollo: req.apollo,
    path,
    query: rest,
  });
  if (redirect) return res.redirect(redirect.code, redirect.to);
  return next();
});
