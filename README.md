# BaseCMS Websites for Randall Reilly
This monorepo contains the codebase for websites managed by Randall Reilly. All sites within this repository utilize the [@base-cms/base-cms](https://github.com/base-cms/base-cms) packages, most notably the `marko-web` and `web-cli`.

#### Copy Method
If you wish to use an existing site as a starting point,begin by creating a new branch and then copy the site directory (recursively) to the new site name:
```bash
cp -R sites/sitetocopy sites/mynewsite
```

This is a good time for the first commit, as you can then commit each change below individually (helps with code review later).

Next, update the following files:
```diff
# /docker-compose.yml
# Be sure to increment ports to unused values
+  my-new-site:
+    <<: *node
+    <<: *site-cmd
+    working_dir: /root/sites/mynewsite
+    environment:
+      <<: *env
+      <<: *env-clustername-staging
+      PORT: 80
+      EXPOSED_PORT: 9711
+      LIVERELOAD_PORT: 19711
+      TENANT_KEY: mynewsite_key
+      CDN_IMAGE_HOSTNAME: img.mynewsite.com
+      CDN_ASSET_HOSTNAME: cdn.mynewsite.com
+    ports:
+      - "9711:80"
+      - "19711:19711"
```

```diff
# /travis.yml
+    - stage: deploy
+      name: My New Site
+      script: deploy/index.js mynewsite clustername
+      install: skip
```

```diff
# /sites/mynewsite/package.json
-  "name": "@randall-reilly/sitetocopy",
+  "name": "@randall-reilly/mynewsite",
-  "author": "John Doe <johndoe@gmail.com>",
+  "author": "Jack Smith <jacksmith@gmail.com>",
-  "repository": "https://github.com/base-cms-websites/your-repository/tree/master/sites/sitetocopy",
+  "repository": "https://github.com/base-cms-websites/your-repository/tree/master/sites/mynewsite",
```

```diff
# /sites/mynewsite/config/core.js
-  siteName: 'Site to Copy',
+  siteName: 'My New Site',
```

```diff
# /sites/mynewsite/config/gam.js
-  const config = new GAMConfiguration('###########', { basePath: 'OLD' });
+  const config = new GAMConfiguration('###########', { basePath: 'NEW' });

# Add/Remove setAliasAdUnits values as needed
```

```diff
# /sites/mynewsite/config/gcse.js
-  const config = new GCSEConfiguration('#####################:aaaaaaaaaaa');
+  const config = new GCSEConfiguration('#####################:bbbbbbbbbbb');
```

```diff
# /sites/mynewsite/config/native-x.js
# Add/Remove setAliasPlacements values as needed
```

```diff
# /sites/mynewsite/config/navigation.js
# Update values as needed
```

```diff
# /sites/mynewsite/config/site.js
# Update values as needed
```

```diff
# /sites/mynewsite/server/styles/index.scss
# Update values as needed
```

```diff
# /sites/mynewsite/server/public/robots.txt
+  Disallow: /
-  Sitemap: https://www.sitetocopy.com/sitemap.xml
+  Sitemap: https://www.mynewsite.com/sitemap.xml
-  Sitemap: https://www.sitetocopy.com/sitemap-google-news.xml
+  Sitemap: https://www.mynewsite.com/sitemap-google-news.xml
```

```diff
# /sites/mynewsite/server/templates/subscribe/index.marko
# Update subscribe URL (found in old /sites/mynewsite/config/site.js)
```

```diff
# /sites/mynewsite/server/public
# Replace all icon files
```

When copying sites, ensure that unused components, templates, and routes are not copied inadvertently.
