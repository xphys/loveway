# Web Theme
- Blue - White
# Deploy to Production
- Production is AWS Amplify (app "Loveway", https://www.loveway.co.th). It auto-builds on every push to the `deploy/production` branch. Vercel also builds this repo, but it is not production.
- Steps:
  1. Run `pnpm build` locally and make sure it passes.
  2. Commit to `main` and `git push origin main`.
  3. `git checkout deploy/production && git merge --no-ff main && git push origin deploy/production && git checkout main`
  4. Check that the Amplify build succeeded (Amplify console, or `aws amplify list-jobs`), then check the live site. A push alone does not mean it deployed.
- Amplify installs the latest pnpm on each build (`npm install -g pnpm`). Newer pnpm fails the install with `ERR_PNPM_IGNORED_BUILDS` if a dependency has a build script that is not listed under `allowBuilds` in `pnpm-workspace.yaml`. If that happens after adding a dependency, add it there.
